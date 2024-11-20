/// <reference path="../../adonisrc.ts" />

import { createTuyau } from '@tuyau/client'
import { api } from '../../.adonisjs/api'

export const client = createTuyau({
  api,
  baseUrl: 'http://localhost:3333',
})
