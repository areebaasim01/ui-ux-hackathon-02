import { createClient } from 'next-sanity'



export const client = createClient({
  projectId: "b7ak1q7v",
  dataset: "production",
  apiVersion: "2023-01-01",
  token:"skeJ9rc9vEv5CtdB8bw81twvJfTc6Xy6WUm3mDgfqSeK1AqZykYLG90b6TyKwhYMbkFGAIBSueDD4aubeLV35WKu4EGci4fEo2rkdbX6jMTM0uvYCRJIzP6zz5eaqdeeB83mFBrz1OJs85qTAW64TCRf8QymUh9S11TlBepYoemkvmEASCTQ" , 
  useCdn: false,
});

