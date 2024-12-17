import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type AuthSigninGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/auth/controllers/auth_controller.ts').default['signin'], false>
}
type AuthStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/auth/validators/user.ts')['signinValidator']>>
  response: MakeTuyauResponse<import('../app/auth/controllers/auth_controller.ts').default['store'], true>
}
type AuthLoginGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/auth/controllers/auth_controller.ts').default['login'], false>
}
type AuthLoginPost = {
  request: unknown
  response: MakeTuyauResponse<import('../app/auth/controllers/auth_controller.ts').default['processLogin'], false>
}
type AuthLogoutGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/auth/controllers/auth_controller.ts').default['logout'], false>
}
type StudentGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/student/page/controllers/page_controller.ts').default['home'], false>
}
type StudentQuizGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/student/page/controllers/page_controller.ts').default['exampleQuiz'], false>
}
type StudentAboutGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/student/page/controllers/page_controller.ts').default['about'], false>
}
type StudentGamePendingIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/student/game/controllers/game_user_controller.ts').default['pending'], false>
}
type StudentGameJoinPost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/student/game/validators/game_user.ts')['createGameUserValidator']>>
  response: MakeTuyauResponse<import('../app/student/game/controllers/game_user_controller.ts').default['join'], true>
}
type TeacherGameGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/game/controllers/game_controller.ts').default['list'], false>
}
type TeacherGameStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/teacher/game/validators/game.ts')['createGameValidator']>>
  response: MakeTuyauResponse<import('../app/teacher/game/controllers/game_controller.ts').default['store'], true>
}
type TeacherGamePendingIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/game/controllers/game_controller.ts').default['pending'], false>
}
type TeacherQuizGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/quiz/controllers/quiz_controller.ts').default['list'], false>
}
type TeacherQuizShowIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/quiz/controllers/quiz_controller.ts').default['show'], false>
}
type TeacherQuizAddPromptGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/quiz/controllers/quiz_controller.ts').default['addFromPrompt'], false>
}
type TeacherQuizStorePromptPost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/teacher/quiz/validators/quiz.ts')['createQuizFromPromptValidator']>>
  response: MakeTuyauResponse<import('../app/teacher/quiz/controllers/quiz_controller.ts').default['storeFromPrompt'], true>
}
type TeacherQuizAddGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/quiz/controllers/quiz_controller.ts').default['add'], false>
}
type TeacherQuizStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/teacher/quiz/validators/quiz.ts')['createQuizValidator']>>
  response: MakeTuyauResponse<import('../app/teacher/quiz/controllers/quiz_controller.ts').default['store'], true>
}
type TeacherQuizEditIdGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/quiz/controllers/quiz_controller.ts').default['edit'], false>
}
type TeacherQuizUpdateIdPut = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/teacher/quiz/validators/quiz.ts')['editQuizValidator']>>
  response: MakeTuyauResponse<import('../app/teacher/quiz/controllers/quiz_controller.ts').default['update'], true>
}
type TeacherQuizDestroyIdDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/quiz/controllers/quiz_controller.ts').default['destroy'], false>
}
type TeacherQuestionQuizIdAddGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/question/controllers/question_controller.ts').default['add'], false>
}
type TeacherQuestionStorePost = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/teacher/question/validators/question.ts')['createQuestionValidator']>>
  response: MakeTuyauResponse<import('../app/teacher/question/controllers/question_controller.ts').default['store'], true>
}
type TeacherQuestionQuizIdEditGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/question/controllers/question_controller.ts').default['edit'], false>
}
type TeacherQuestionUpdateIdPut = {
  request: MakeTuyauRequest<InferInput<typeof import('../app/teacher/question/validators/question.ts')['editQuestionValidator']>>
  response: MakeTuyauResponse<import('../app/teacher/question/controllers/question_controller.ts').default['update'], true>
}
type TeacherQuestionQuizIdDestroyIdDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/teacher/question/controllers/question_controller.ts').default['destroy'], false>
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
  'student': {
    '$url': {
    };
    '$get': StudentGetHead;
    '$head': StudentGetHead;
    'quiz': {
      '$url': {
      };
      '$get': StudentQuizGetHead;
      '$head': StudentQuizGetHead;
    };
    'about': {
      '$url': {
      };
      '$get': StudentAboutGetHead;
      '$head': StudentAboutGetHead;
    };
    'game': {
      'pending': {
        ':id': {
          '$url': {
          };
          '$get': StudentGamePendingIdGetHead;
          '$head': StudentGamePendingIdGetHead;
        };
      };
      'join': {
        '$url': {
        };
        '$post': StudentGameJoinPost;
      };
    };
  };
  'teacher': {
    'game': {
      '$url': {
      };
      '$get': TeacherGameGetHead;
      '$head': TeacherGameGetHead;
      'store': {
        '$url': {
        };
        '$post': TeacherGameStorePost;
      };
      'pending': {
        ':id': {
          '$url': {
          };
          '$get': TeacherGamePendingIdGetHead;
          '$head': TeacherGamePendingIdGetHead;
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
        'prompt': {
          '$url': {
          };
          '$get': TeacherQuizAddPromptGetHead;
          '$head': TeacherQuizAddPromptGetHead;
        };
        '$url': {
        };
        '$get': TeacherQuizAddGetHead;
        '$head': TeacherQuizAddGetHead;
      };
      'store': {
        'prompt': {
          '$url': {
          };
          '$post': TeacherQuizStorePromptPost;
        };
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
    name: 'student.home',
    path: '/student',
    method: ["GET","HEAD"],
    types: {} as StudentGetHead,
  },
  {
    params: [],
    name: 'student.quiz.example',
    path: '/student/quiz',
    method: ["GET","HEAD"],
    types: {} as StudentQuizGetHead,
  },
  {
    params: [],
    name: 'student.about',
    path: '/student/about',
    method: ["GET","HEAD"],
    types: {} as StudentAboutGetHead,
  },
  {
    params: ["id"],
    name: 'student.game.pending',
    path: '/student/game/pending/:id',
    method: ["GET","HEAD"],
    types: {} as StudentGamePendingIdGetHead,
  },
  {
    params: [],
    name: 'student.game.join',
    path: '/student/game/join',
    method: ["POST"],
    types: {} as StudentGameJoinPost,
  },
  {
    params: [],
    name: 'teacher.game.list',
    path: '/teacher/game',
    method: ["GET","HEAD"],
    types: {} as TeacherGameGetHead,
  },
  {
    params: [],
    name: 'teacher.game.store',
    path: '/teacher/game/store',
    method: ["POST"],
    types: {} as TeacherGameStorePost,
  },
  {
    params: ["id"],
    name: 'teacher.game.pending',
    path: '/teacher/game/pending/:id',
    method: ["GET","HEAD"],
    types: {} as TeacherGamePendingIdGetHead,
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
    name: 'teacher.quiz.add_from_prompt',
    path: '/teacher/quiz/add/prompt',
    method: ["GET","HEAD"],
    types: {} as TeacherQuizAddPromptGetHead,
  },
  {
    params: [],
    name: 'teacher.quiz.store_from_prompt',
    path: '/teacher/quiz/store/prompt',
    method: ["POST"],
    types: {} as TeacherQuizStorePromptPost,
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
