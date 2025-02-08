import { groq } from "next-sanity";

// Queries
export const allShopProducts = groq`*[_type == "products"]`;

export const fourpro = groq`*[_type == "products"][0..3]`;

export const eightpro = groq`*[_type == "products"][4..7]`;

export const pro = groq`*[_type == "products"][8..11]`;


