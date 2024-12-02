import type { HttpContext } from '@adonisjs/core/http'

export default class PageController {
  home({ inertia }: HttpContext) {
    return inertia.render('student/pages/home')
  }
  exampleQuiz({ inertia }: HttpContext) {
    return inertia.render('student/pages/quiz')
  }
  about({ inertia }: HttpContext) {
    return inertia.render('student/pages/about')
  }
}
