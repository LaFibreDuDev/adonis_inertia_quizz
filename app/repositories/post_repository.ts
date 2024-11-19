import Post from '#models/post'

export class PostRepository {
  async findAll() {
    return await Post.all()
  }

  async create(payload) {
    return await Post.create(payload)
  }

  async findById(id: number) {
    return await Post.find(id)
  }

  async edit(id: number, payload) {
    const post = await this.findById(id)
    return await post.merge(payload).save()
  }
}
