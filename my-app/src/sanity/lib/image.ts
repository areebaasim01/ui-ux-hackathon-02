import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

const client = createClient({
  projectId: "b7ak1q7v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10",
});

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
