import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { QuizRepository } from '#teacher/quiz/repositories/quiz_repository'
import { createQuizValidator, editQuizValidator } from '#teacher/quiz/validators/quiz'

@inject()
export default class QuizController {
  constructor(private quizRepository: QuizRepository) {}

  async list({ inertia }: HttpContext) {
    const quizzes = await this.quizRepository.findAll()
    return inertia.render('teacher/quiz/list', { quizzes: quizzes })
  }

  async show({ params, inertia }: HttpContext) {
    const quiz = await this.quizRepository.findById(params.id, true)
    return inertia.render('teacher/quiz/show', { quiz })
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
