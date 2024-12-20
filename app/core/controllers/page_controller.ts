import type { HttpContext } from '@adonisjs/core/http'

export default class PageController {
  home({ inertia }: HttpContext) {
    return inertia.render('pages/home')
  }
}
