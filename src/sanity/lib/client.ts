import { createClient } from 'next-sanity'


export const client = createClient({
  projectId:'o22mqdox',
  dataset:'production',
  apiVersion:'2025-01-13',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


