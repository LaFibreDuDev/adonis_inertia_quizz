import vine from '@vinejs/vine'
import { SchemaTypes } from '@vinejs/vine/types'

export function defineValidator<Properties extends Record<string, SchemaTypes>>(
  schema: Properties
) {
  return vine.compile(vine.object(schema))
}
