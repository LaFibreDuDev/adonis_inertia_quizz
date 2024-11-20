import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type AuthSigninGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['signin']>
}
type AuthStorePost = {
  request: MakeTuyauRequest<
    InferInput<(typeof import('../app/validators/user.ts'))['signinValidator']>
  >
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['store']>
}
type AuthLoginGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['login']>
}
type AuthLoginPost = {
  request: unknown
  response: MakeTuyauResponse<
    import('../app/controllers/auth_controller.ts').default['processLogin']
  >
}
type AuthLogoutGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['logout']>
}
type BlogGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['list']>
}
type BlogAddGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['add']>
}
type BlogStorePost = {
  request: MakeTuyauRequest<
    InferInput<(typeof import('../app/validators/post.ts'))['createPostValidator']>
  >
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['store']>
}
type BlogEditIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['edit']>
}
type BlogUpdateIdPut = {
  request: MakeTuyauRequest<
    InferInput<(typeof import('../app/validators/post.ts'))['editPostValidator']>
  >
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['update']>
}
type BlogDestroyIdDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['destroy']>
}
type AboutGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/about_controller.ts').default['index']>
}
export interface ApiDefinition {
  auth: {
    signin: {
      $url: {}
      $get: AuthSigninGetHead
      $head: AuthSigninGetHead
    }
    store: {
      $url: {}
      $post: AuthStorePost
    }
    login: {
      $url: {}
      $get: AuthLoginGetHead
      $head: AuthLoginGetHead
      $post: AuthLoginPost
    }
    logout: {
      $url: {}
      $get: AuthLogoutGetHead
      $head: AuthLogoutGetHead
    }
  }
  blog: {
    $url: {}
    $get: BlogGetHead
    $head: BlogGetHead
    add: {
      $url: {}
      $get: BlogAddGetHead
      $head: BlogAddGetHead
    }
    store: {
      $url: {}
      $post: BlogStorePost
    }
    edit: {
      ':id': {
        $url: {}
        $get: BlogEditIdGetHead
        $head: BlogEditIdGetHead
      }
    }
    update: {
      ':id': {
        $url: {}
        $put: BlogUpdateIdPut
      }
    }
    destroy: {
      ':id': {
        $url: {}
        $delete: BlogDestroyIdDelete
      }
    }
  }
  about: {
    $url: {}
    $get: AboutGetHead
    $head: AboutGetHead
  }
}
const routes = [
  {
    params: [],
    name: 'auth.signin',
    path: '/auth/signin',
    method: ['GET', 'HEAD'],
    types: {} as AuthSigninGetHead,
  },
  {
    params: [],
    name: 'auth.store',
    path: '/auth/store',
    method: ['POST'],
    types: {} as AuthStorePost,
  },
  {
    params: [],
    name: 'auth.login',
    path: '/auth/login',
    method: ['GET', 'HEAD'],
    types: {} as AuthLoginGetHead,
  },
  {
    params: [],
    name: 'auth.login.process',
    path: '/auth/login',
    method: ['POST'],
    types: {} as AuthLoginPost,
  },
  {
    params: [],
    name: 'auth.logout',
    path: '/auth/logout',
    method: ['GET', 'HEAD'],
    types: {} as AuthLogoutGetHead,
  },
  {
    params: [],
    name: 'blog.list',
    path: '/blog',
    method: ['GET', 'HEAD'],
    types: {} as BlogGetHead,
  },
  {
    params: [],
    name: 'blog.add',
    path: '/blog/add',
    method: ['GET', 'HEAD'],
    types: {} as BlogAddGetHead,
  },
  {
    params: [],
    name: 'blog.store',
    path: '/blog/store',
    method: ['POST'],
    types: {} as BlogStorePost,
  },
  {
    params: ['id'],
    name: 'blog.edit',
    path: '/blog/edit/:id',
    method: ['GET', 'HEAD'],
    types: {} as BlogEditIdGetHead,
  },
  {
    params: ['id'],
    name: 'blog.update',
    path: '/blog/update/:id',
    method: ['PUT'],
    types: {} as BlogUpdateIdPut,
  },
  {
    params: ['id'],
    name: 'blog.destroy',
    path: '/blog/destroy/:id',
    method: ['DELETE'],
    types: {} as BlogDestroyIdDelete,
  },
  {
    params: [],
    name: 'about',
    path: '/about',
    method: ['GET', 'HEAD'],
    types: {} as AboutGetHead,
  },
] as const
export const api = {
  routes,
  definition: {} as ApiDefinition,
}
declare module '@tuyau/inertia/types' {
  type InertiaApi = typeof api
  export interface Api extends InertiaApi {}
}
