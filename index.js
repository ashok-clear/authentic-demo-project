import * as prismic from "@prismicio/client";


export const repositoryName = "web-semo"; // Your repo name
const endpoint = prismic.getRepositoryEndpoint(repositoryName);

export const client = prismic.createClient(endpoint);