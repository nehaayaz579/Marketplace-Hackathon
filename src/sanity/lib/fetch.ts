import sanityClient, { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'o22mqdox', // Your Sanity project ID
  dataset: 'production', // Dataset, generally 'production' hota hai
  token: 'sk4kjQ5VQ4UpapcWgfDNr1qLWu9Y5rNlmdUqYEE0zKyc4AG5cJclaKNdBVI94LbZUGVZIpbUTUwt7n87oqvFDfNCAdfatsDoofRj9tHW0XQUDIo4SjQc0WUYfLlEx8GTHWTCmxCLI7eZS6IQ1vuJ1l2VpPvqgfILy2KiFspsmurfczC9gcio', // Sanity API token
  useCdn: true, // Use CDN for faster responses
});