import Post from '#models/post'

interface PostDTO {
  title: string
  content: string
}

export class PostRepository {
  async findAll() {
    return await Post.all()
  }

  async create(payload: PostDTO) {
    return await Post.create(payload)
  }

  async findById(id: number) {
    return await Post.find(id)
  }

  async edit(id: number, payload: PostDTO) {
    const post = await this.findById(id)
    if (post) {
      return await post.merge(payload).save()
    }
    throw new Error("Le post n'a pas été trouvé !")
  }

  async delete(id: number) {
    const post = await this.findById(id)
    if (post) {
      await post.delete()
    }
    throw new Error("Le post n'a pas été trouvé !")
  }
}
