import { createClient } from "next-sanity";

const client = createClient({
  projectId: "b7ak1q7v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10",
});

export async function sanityFetch<T>({ 
  query, 
  params = {} as Record<string, unknown>  // ✅ Properly typed params
}: { 
  query: string; 
  params?: Record<string, unknown>; // ✅ Use Record<string, unknown> instead of any
}): Promise<T> {  
  return await client.fetch<T>(query, params);
}
