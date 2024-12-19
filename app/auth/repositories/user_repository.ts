import User from '#core/models/user'

interface CreateUserDTO {
  username: string
  lastname: string
  firstname: string
  email: string
  password: string
}

export class UserRepository {
  async create(payload: CreateUserDTO) {
    return await User.create(payload)
  }

  async findByEmail(email: string): Promise<User | null> {
    return User.findBy('email', email)
  }

  async verify(email: string, password: string) {
    return await User.verifyCredentials(email, password)
  }
}
