import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type AuthSigninGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['signin'], false>
}
type AuthStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/user.ts')['signinValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['store'], true>
}
type AuthLoginGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['login'], false>
}
type AuthLoginPost = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['processLogin'], false>
}
type AuthLogoutGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['logout'], false>
}
type TeacherBlogGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['list'], false>
}
type TeacherBlogAddGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['add'], false>
}
type TeacherBlogStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/post.ts')['createPostValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['store'], true>
}
type TeacherBlogEditIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['edit'], false>
}
type TeacherBlogUpdateIdPut = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/post.ts')['editPostValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['update'], true>
}
type TeacherBlogDestroyIdDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/post_controller.ts').default['destroy'], false>
}
type TeacherQuizGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/quiz_controller.ts').default['list'], false>
}
type TeacherQuizShowIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/quiz_controller.ts').default['show'], false>
}
type TeacherQuizAddGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/quiz_controller.ts').default['add'], false>
}
type TeacherQuizStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/quiz.ts')['createQuizValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/quiz_controller.ts').default['store'], true>
}
type TeacherQuizEditIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/quiz_controller.ts').default['edit'], false>
}
type TeacherQuizUpdateIdPut = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/quiz.ts')['editQuizValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/quiz_controller.ts').default['update'], true>
}
type TeacherQuizDestroyIdDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/quiz_controller.ts').default['destroy'], false>
}
type TeacherQuestionQuizIdAddGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/question_controller.ts').default['add'], false>
}
type TeacherQuestionStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/question.ts')['createQuestionValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/question_controller.ts').default['store'], true>
}
type TeacherQuestionQuizIdEditGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/question_controller.ts').default['edit'], false>
}
type TeacherQuestionUpdateIdPut = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/validators/question.ts')['editQuestionValidator']>>
  response: MakeTuyauResponse<import('../app/controllers/question_controller.ts').default['update'], true>
}
type TeacherQuestionQuizIdDestroyIdDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/question_controller.ts').default['destroy'], false>
}
type StudentGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/page_controller.ts').default['studentHome'], false>
}
type StudentAboutGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/page_controller.ts').default['about'], false>
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
    'quiz': {
      '$url': {
      };
      '$get': TeacherQuizGetHead;
      '$head': TeacherQuizGetHead;
      'show': {
        ':id': {
          '$url': {
          };
          '$get': TeacherQuizShowIdGetHead;
          '$head': TeacherQuizShowIdGetHead;
        };
      };
      'add': {
        '$url': {
        };
        '$get': TeacherQuizAddGetHead;
        '$head': TeacherQuizAddGetHead;
      };
      'store': {
        '$url': {
        };
        '$post': TeacherQuizStorePost;
      };
      'edit': {
        ':id': {
          '$url': {
          };
          '$get': TeacherQuizEditIdGetHead;
          '$head': TeacherQuizEditIdGetHead;
        };
      };
      'update': {
        ':id': {
          '$url': {
          };
          '$put': TeacherQuizUpdateIdPut;
        };
      };
      'destroy': {
        ':id': {
          '$url': {
          };
          '$delete': TeacherQuizDestroyIdDelete;
        };
      };
    };
    'question': {
      'quiz': {
        ':id': {
          'add': {
            '$url': {
            };
            '$get': TeacherQuestionQuizIdAddGetHead;
            '$head': TeacherQuestionQuizIdAddGetHead;
          };
          'edit': {
            '$url': {
            };
            '$get': TeacherQuestionQuizIdEditGetHead;
            '$head': TeacherQuestionQuizIdEditGetHead;
          };
        };
        ':quizid': {
          'destroy': {
            ':id': {
              '$url': {
              };
              '$delete': TeacherQuestionQuizIdDestroyIdDelete;
            };
          };
        };
      };
      'store': {
        '$url': {
        };
        '$post': TeacherQuestionStorePost;
      };
      'update': {
        ':id': {
          '$url': {
          };
          '$put': TeacherQuestionUpdateIdPut;
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
    name: 'teacher.quiz.list',
    path: '/teacher/quiz',
    method: ["GET","HEAD"],
    types: {} as TeacherQuizGetHead,
  },
  {
    params: ["id"],
    name: 'teacher.quiz.show',
    path: '/teacher/quiz/show/:id',
    method: ["GET","HEAD"],
    types: {} as TeacherQuizShowIdGetHead,
  },
  {
    params: [],
    name: 'teacher.quiz.add',
    path: '/teacher/quiz/add',
    method: ["GET","HEAD"],
    types: {} as TeacherQuizAddGetHead,
  },
  {
    params: [],
    name: 'teacher.quiz.store',
    path: '/teacher/quiz/store',
    method: ["POST"],
    types: {} as TeacherQuizStorePost,
  },
  {
    params: ["id"],
    name: 'teacher.quiz.edit',
    path: '/teacher/quiz/edit/:id',
    method: ["GET","HEAD"],
    types: {} as TeacherQuizEditIdGetHead,
  },
  {
    params: ["id"],
    name: 'teacher.quiz.update',
    path: '/teacher/quiz/update/:id',
    method: ["PUT"],
    types: {} as TeacherQuizUpdateIdPut,
  },
  {
    params: ["id"],
    name: 'teacher.quiz.destroy',
    path: '/teacher/quiz/destroy/:id',
    method: ["DELETE"],
    types: {} as TeacherQuizDestroyIdDelete,
  },
  {
    params: ["id"],
    name: 'teacher.question.add',
    path: '/teacher/question/quiz/:id/add',
    method: ["GET","HEAD"],
    types: {} as TeacherQuestionQuizIdAddGetHead,
  },
  {
    params: [],
    name: 'teacher.question.store',
    path: '/teacher/question/store',
    method: ["POST"],
    types: {} as TeacherQuestionStorePost,
  },
  {
    params: ["id"],
    name: 'teacher.question.edit',
    path: '/teacher/question/quiz/:id/edit',
    method: ["GET","HEAD"],
    types: {} as TeacherQuestionQuizIdEditGetHead,
  },
  {
    params: ["id"],
    name: 'teacher.question.update',
    path: '/teacher/question/update/:id',
    method: ["PUT"],
    types: {} as TeacherQuestionUpdateIdPut,
  },
  {
    params: ["quizid","id"],
    name: 'teacher.question.destroy',
    path: '/teacher/question/quiz/:quizid/destroy/:id',
    method: ["DELETE"],
    types: {} as TeacherQuestionQuizIdDestroyIdDelete,
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
  {
    params: [],
    name: 'home',
    path: '/',
    method: ["GET","HEAD"],
    types: {} as unknown,
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
