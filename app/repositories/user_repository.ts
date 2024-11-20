import User from '#models/user'

export class UserRepository {
  async create(payload) {
    return await User.create(payload)
  }

  async verify(email: string, password: string) {
    return await User.verifyCredentials(email, password)
  }
}
