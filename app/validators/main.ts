import vine from '@vinejs/vine'

export function defineValidator<Properties extends Record<string, SchemaTypes>>(
  schema: Properties
) {
  return vine.compile(vine.object(schema))
}
