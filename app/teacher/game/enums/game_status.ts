export const GameStatus = {
  Pending: 1,
  Active: 2,
  Paused: 3,
  Completed: 4,
  Cancelled: 5,
} as const

export type IGameStatus = (typeof GameStatus)[keyof typeof GameStatus]

export const GameStatusText = {
  [GameStatus.Pending]: 'En attente',
  [GameStatus.Active]: 'En cours',
  [GameStatus.Paused]: 'En pause',
  [GameStatus.Completed]: 'Terminé',
  [GameStatus.Cancelled]: 'Annulé',
} as const

export function getGameStatus(status: IGameStatus): string {
  return GameStatusText[status]
}
