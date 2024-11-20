import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type AuthSigninGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['signin']>
}
type AuthStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/user.ts')['signinValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['store']>
}
type AuthLoginGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['login']>
}
type AuthLoginPost = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['processLogin']>
}
type AuthLogoutGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['logout']>
}
type TeacherBlogGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['list']>
}
type TeacherBlogAddGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['add']>
}
type TeacherBlogStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/post.ts')['createPostValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['store']>
}
type TeacherBlogEditIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['edit']>
}
type TeacherBlogUpdateIdPut = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/post.ts')['editPostValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['update']>
}
type TeacherBlogDestroyIdDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['destroy']>
}
type StudentGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/page_controller.ts').default['home']>
}
type StudentAboutGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/page_controller.ts').default['about']>
}
export interface ApiDefinition {
  'auth': {
    'signin': {
      '$url': {
      };
      '$get': AuthSigninGetHead;
      '$head': AuthSigninGetHead;
    };
    'store': {
      '$url': {
      };
      '$post': AuthStorePost;
    };
    'login': {
      '$url': {
      };
      '$get': AuthLoginGetHead;
      '$head': AuthLoginGetHead;
      '$post': AuthLoginPost;
    };
    'logout': {
      '$url': {
      };
      '$get': AuthLogoutGetHead;
      '$head': AuthLogoutGetHead;
    };
  };
  'teacher': {
    'blog': {
      '$url': {
      };
      '$get': TeacherBlogGetHead;
      '$head': TeacherBlogGetHead;
      'add': {
        '$url': {
        };
        '$get': TeacherBlogAddGetHead;
        '$head': TeacherBlogAddGetHead;
      };
      'store': {
        '$url': {
        };
        '$post': TeacherBlogStorePost;
      };
      'edit': {
        ':id': {
          '$url': {
          };
          '$get': TeacherBlogEditIdGetHead;
          '$head': TeacherBlogEditIdGetHead;
        };
      };
      'update': {
        ':id': {
          '$url': {
          };
          '$put': TeacherBlogUpdateIdPut;
        };
      };
      'destroy': {
        ':id': {
          '$url': {
          };
          '$delete': TeacherBlogDestroyIdDelete;
        };
      };
    };
  };
  'student': {
    '$url': {
    };
    '$get': StudentGetHead;
    '$head': StudentGetHead;
    'about': {
      '$url': {
      };
      '$get': StudentAboutGetHead;
      '$head': StudentAboutGetHead;
    };
  };
}
const routes = [
  {
    params: [],
    name: 'auth.signin',
    path: '/auth/signin',
    method: ["GET","HEAD"],
    types: {} as AuthSigninGetHead,
  },
  {
    params: [],
    name: 'auth.store',
    path: '/auth/store',
    method: ["POST"],
    types: {} as AuthStorePost,
  },
  {
    params: [],
    name: 'auth.login',
    path: '/auth/login',
    method: ["GET","HEAD"],
    types: {} as AuthLoginGetHead,
  },
  {
    params: [],
    name: 'auth.login.process',
    path: '/auth/login',
    method: ["POST"],
    types: {} as AuthLoginPost,
  },
  {
    params: [],
    name: 'auth.logout',
    path: '/auth/logout',
    method: ["GET","HEAD"],
    types: {} as AuthLogoutGetHead,
  },
  {
    params: [],
    name: 'teacher.blog.list',
    path: '/teacher/blog',
    method: ["GET","HEAD"],
    types: {} as TeacherBlogGetHead,
  },
  {
    params: [],
    name: 'teacher.blog.add',
    path: '/teacher/blog/add',
    method: ["GET","HEAD"],
    types: {} as TeacherBlogAddGetHead,
  },
  {
    params: [],
    name: 'teacher.blog.store',
    path: '/teacher/blog/store',
    method: ["POST"],
    types: {} as TeacherBlogStorePost,
  },
  {
    params: ["id"],
    name: 'teacher.blog.edit',
    path: '/teacher/blog/edit/:id',
    method: ["GET","HEAD"],
    types: {} as TeacherBlogEditIdGetHead,
  },
  {
    params: ["id"],
    name: 'teacher.blog.update',
    path: '/teacher/blog/update/:id',
    method: ["PUT"],
    types: {} as TeacherBlogUpdateIdPut,
  },
  {
    params: ["id"],
    name: 'teacher.blog.destroy',
    path: '/teacher/blog/destroy/:id',
    method: ["DELETE"],
    types: {} as TeacherBlogDestroyIdDelete,
  },
  {
    params: [],
    name: 'student.home',
    path: '/student',
    method: ["GET","HEAD"],
    types: {} as StudentGetHead,
  },
  {
    params: [],
    name: 'student.about',
    path: '/student/about',
    method: ["GET","HEAD"],
    types: {} as StudentAboutGetHead,
  },
] as const;
export const api = {
  routes,
  definition: {} as ApiDefinition
}
declare module '@tuyau/inertia/types' {
  type InertiaApi = typeof api
  export interface Api extends InertiaApi {}
}