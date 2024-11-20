// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { UserRepository } from '#repositories/user_repository'
import { signinValidator } from '#validators/user'
import { inject } from '@adonisjs/core'

@inject()
export default class AuthController {
  constructor(private userRepository: UserRepository) {}

  signin({ inertia }: HttpContext) {
    return inertia.render('auth/signin')
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(signinValidator)
    await this.userRepository.create(payload)
    return response.redirect().toRoute('blog.list')
  }

  login({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async processLogin({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await this.userRepository.verify(email, password)
    await auth.use('web').login(user)
    return response.redirect().toRoute('blog.list')
  }

  async logout({ request, auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('blog.list')
  }
}
