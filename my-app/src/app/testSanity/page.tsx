"use client"

import { useEffect } from "react";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN, // ✅ Ensure this is set
  useCdn: false,
});

export default function TestSanity() {
  useEffect(() => {
    client.create({
      _type: "order",
      userId: "some-user-id",
      totalAmount: 1000,
      status: "pending",
    })
      .then((res) => console.log("Order Created:", res))
      .catch((err) => console.error("Sanity Error:", err));
  }, []);

  return <h1>Testing Sanity API</h1>;
}
