import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { QuestionRepository } from '#repositories/question_repository'
import { QuizRepository } from '#repositories/quiz_repository'
import { createQuestionValidator } from '#validators/question'
import { ResponseRepository } from '#repositories/response_repository'

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
    const promises: Promise[] = []
    for (const responsePayload of payload.responses) {
      promises.push(
        this.responseRepository.create({
          ...responsePayload,
          questionId: question.id,
        })
      )
    }
    await Promise.all(promises)
    return response.redirect().toRoute('teacher.quiz.show', {
      id: payload.quizId,
    })
  }

  async destroy({ params, response }: HttpContext) {
    const question = await this.questionRepository.findById(params.id)
    console.log(question)
    const quizId = question.quizId
    await this.questionRepository.delete(params.id)
    return response.redirect().toRoute('teacher.quiz.show', {
      id: quizId,
    })
  }
}
