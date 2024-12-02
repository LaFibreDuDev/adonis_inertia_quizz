import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { QuestionRepository } from '#teacher/question/repositories/question_repository'
import { QuizRepository } from '#teacher/quiz/repositories/quiz_repository'
import {
  createQuestionValidator,
  editQuestionValidator,
} from '#teacher/question/validators/question'
import { ResponseRepository } from '#teacher/question/repositories/response_repository'

@inject()
export default class QuestionController {
  constructor(
    private quizRepository: QuizRepository,
    private questionRepository: QuestionRepository,
    private responseRepository: ResponseRepository
  ) {}

  async add({ params, inertia }: HttpContext) {
    const quiz = await this.quizRepository.findById(params.id)
    return inertia.render('teacher/question/add', { quiz })
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createQuestionValidator)
    const question = await this.questionRepository.create({
      title: payload.title,
      quizId: payload.quizId,
    })
    const promises = []
    for (const responsePayload of payload.responses) {
      const promise = this.responseRepository.create({
        ...responsePayload,
        questionId: question.id,
      })
      promises.push(promise)
    }
    await Promise.all(promises)
    return response.redirect().toRoute('teacher.quiz.show', {
      id: payload.quizId,
    })
  }

  async edit({ params, inertia }: HttpContext) {
    const question = await this.questionRepository.findById(params.id, true, true)
    return inertia.render('teacher/question/edit', { question })
  }

  async update({ request }: HttpContext) {
    const payload = await request.validateUsing(editQuestionValidator)
    console.log(payload)
    //await this.quizRepository.edit(params.id, payload)
    //return response.redirect().toRoute('teacher.quiz.list')
  }

  async destroy({ params, response }: HttpContext) {
    const question = await this.questionRepository.findById(params.id)
    const quizId = question.quizId
    await this.questionRepository.delete(params.id)
    return response.redirect().toRoute('teacher.quiz.show', {
      id: quizId,
    })
  }
}
