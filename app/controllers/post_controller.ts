import { inject } from '@adonisjs/core'
import { PostRepository } from '#repositories/post_repository'
import { HttpContext } from '@adonisjs/core/http'
import { createPostValidator, editPostValidator } from '#validators/post'

@inject()
export default class PostController {
  constructor(private postRepository: PostRepository) {}

  async list({ inertia }: HttpContext) {
    const posts = await this.postRepository.findAll()
    return inertia.render('blog/list', { posts: posts })
  }

  add({ inertia }: HttpContext) {
    return inertia.render('blog/add')
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createPostValidator)
    await this.postRepository.create(payload)
    return response.redirect().toRoute('blog.list')
  }

  async edit({ params, response, inertia }: HttpContext) {
    const post = await this.postRepository.findById(params.id)
    if (post) {
      return inertia.render('blog/edit', { post: post })
    }
    return response.redirect().toRoute('blog.list')
  }

  async editStore({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(editPostValidator)
    await this.postRepository.edit(params.id, payload)
    return response.redirect().toRoute('blog.list')
  }
}
