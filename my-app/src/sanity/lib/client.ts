import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "b7ak1q7v",
  dataset: "production",
  apiVersion:  "2023-01-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
