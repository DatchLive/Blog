import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: 'wiselifelog',
    apiKey: process.env.API_KEY,
})
