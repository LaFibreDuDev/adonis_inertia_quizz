import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import type { Authenticators } from '@adonisjs/auth/types'
import { UserRole } from '../enums/user_role.js'

/**
 * Guest middleware is used to deny access to routes that should
 * be accessed by unauthenticated users.
 *
 * For example, the login page should not be accessible if the user
 * is already logged-in
 */
export default class GuestMiddleware {
  /**
   * The URL to redirect to when user is logged-in
   */
  studentRedirectTo = '/student'
  teacherRedirectTo = '/teacher/quiz'

  async handle(
    ctx: HttpContext,
    next: NextFn,
    options: { guards?: (keyof Authenticators)[] } = {}
  ) {
    for (let guard of options.guards || [ctx.auth.defaultGuard]) {
      if (await ctx.auth.use(guard).check()) {
        if (ctx.auth.user.role === UserRole.Teacher) {
          return ctx.response.redirect(this.teacherRedirectTo, true)
        }
      } else {
        return ctx.response.redirect(this.studentRedirectTo, true)
      }
    }

    return next()
  }
}
