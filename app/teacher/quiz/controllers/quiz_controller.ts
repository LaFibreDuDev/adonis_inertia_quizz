import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { QuizRepository } from '#teacher/quiz/repositories/quiz_repository'
import {
  createQuizFromPromptValidator,
  createQuizValidator,
  editQuizValidator,
} from '#teacher/quiz/validators/quiz'
import { QuizParserService } from '#teacher/quiz/services/quiz_parser_service'
import { QuestionRepository } from '#teacher/question/repositories/question_repository'
import { ResponseRepository } from '#teacher/question/repositories/response_repository'

@inject()
export default class QuizController {
  constructor(
    private quizRepository: QuizRepository,
    private quizParserService: QuizParserService,
    private questionRepository: QuestionRepository,
    private responseRepository: ResponseRepository
  ) {}

  async list({ inertia }: HttpContext) {
    const quizzes = await this.quizRepository.findAll(true)
    return inertia.render('teacher/quiz/list', { quizzes: quizzes })
  }

  async show({ params, inertia }: HttpContext) {
    const quiz = await this.quizRepository.findById(params.id, true)
    return inertia.render('teacher/quiz/show', { quiz })
  }

  addFromPrompt({ inertia }: HttpContext) {
    return inertia.render('teacher/quiz/add_from_prompt')
  }

  async storeFromPrompt({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createQuizFromPromptValidator)
    const questions = this.quizParserService.parse(payload.content)
    const quiz = await this.quizRepository.create({ title: payload.title })
    questions.map(async (q) => {
      const question = await this.questionRepository.create({ title: q.question, quizId: quiz.id })
      const promises: any[] = []
      q.options.map((option) => {
        promises.push(
          this.responseRepository.create({
            questionId: question.id,
            title: option.text,
            correct: option.correct,
          })
        )
      })
      await Promise.all(promises)
    })
    return response.redirect().toRoute('teacher.quiz.list')
  }

  add({ inertia }: HttpContext) {
    return inertia.render('teacher/quiz/add')
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createQuizValidator)
    await this.quizRepository.create(payload)
    return response.redirect().toRoute('teacher.quiz.list')
  }

  async edit({ params, response, inertia }: HttpContext) {
    const quiz = await this.quizRepository.findById(params.id)
    if (quiz) {
      return inertia.render('teacher/quiz/edit', { quiz: quiz })
    }
    return response.redirect().toRoute('teacher.quiz.list')
  }

  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(editQuizValidator)
    await this.quizRepository.edit(params.id, payload)
    return response.redirect().toRoute('teacher.quiz.list')
  }

  async destroy({ params, response }: HttpContext) {
    await this.quizRepository.delete(params.id)
    return response.redirect().toRoute('teacher.quiz.list')
  }
}
