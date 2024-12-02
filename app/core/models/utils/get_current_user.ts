import { HttpContext } from '@adonisjs/core/http'

export const getCurrentUserId = async (): Promise<number> => {
  const ctx = await HttpContext.getOrFail()
  if (ctx?.auth.user) {
    return ctx.auth.user.id
  }
  throw new Error("Impossible de déterminer l'utilisateur connecté")
}
