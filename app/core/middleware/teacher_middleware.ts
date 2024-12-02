import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { UserRole } from '../enums/user_role.js'
import { errors as authErrors } from '@adonisjs/auth'

/**
 * Auth middleware is used authenticate HTTP requests and deny
 * access to unauthenticated users.
 */
export default class TeacherAuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const user = ctx.auth.getUserOrFail()
    if (!user.role || user.role !== UserRole.Teacher) {
      // TODO: à customiser (peut être une page qui dit qu'on a pas le droit)
      throw new authErrors.E_INVALID_CREDENTIALS()
    }
    return next()
  }
}
