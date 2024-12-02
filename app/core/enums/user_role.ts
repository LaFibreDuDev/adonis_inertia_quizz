export const UserRole = {
  Student: 1,
  Teacher: 2,
} as const

export type IUserRole = (typeof UserRole)[keyof typeof UserRole]

export const UserRoleText = {
  [UserRole.Student]: 'Etudiant',
  [UserRole.Teacher]: 'Formateur',
} as const
