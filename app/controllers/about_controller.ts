// import type { HttpContext } from '@adonisjs/core/http'

export default class AboutController {
  index({ inertia }: HttpContext) {
    return inertia.render('about')
  }
}
