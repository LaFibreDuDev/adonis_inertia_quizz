import { HttpContext } from '@adonisjs/core/http'
import { UserRepository } from '#auth/repositories/user_repository'
import { UserRole } from '#auth/enums/user_role'
import { inject } from '@adonisjs/core'

@inject()
export default class SocialController {
  constructor(private userRepository: UserRepository) {}

  async githubRedirect({ ally, response }: HttpContext) {
    console.log('Social controller called')
    const url = await ally.use('github').redirectUrl()
    return response.json({ url: url })
  }

  async githubCallback({ ally, response, session, auth }: HttpContext) {
    const gh = ally.use('github')

    if (gh.accessDenied()) {
      session.flash('success', "Tu as annuler l'autorisation d'access")
      return response.redirect().toRoute('auth.login')
    }
    if (gh.stateMisMatch()) {
      session.flash('success', "Erreur  d'access")
      return response.redirect().toRoute('auth.login')
    }
    if (gh.hasError()) {
      session.flash('success', "Erreur  d'access")
      return response.redirect().toRoute('auth.login')
    }

    const githubUser = await gh.user()
    console.log(githubUser)

    const user = await this.userRepository.findByEmail(githubUser.email)
    if (user) {
      await auth.use('web').login(user)
      if (user.role === UserRole.Teacher) {
        return response.redirect().toRoute('teacher.quiz.list')
      } else {
        return response.redirect().toRoute('student.home')
      }
    } else {
      const payload = {
        username: githubUser.original.login,
        lastname: '',
        firstname: '',
        email: githubUser.email,
        password: '',
      }
      const createdUser = await this.userRepository.create(payload)
      await auth.use('web').login(createdUser)
      return response.redirect().toRoute('student.home')
    }
  }

  async googleRedirect({ ally, response }: HttpContext) {
    console.log('Google Social controller called')
    const url = await ally.use('google').redirectUrl()
    return response.json({ url: url })
  }

  async googleCallback({ ally, response, session, auth }: HttpContext) {
    console.log('Google Social controller (callback) called')
  }
}
