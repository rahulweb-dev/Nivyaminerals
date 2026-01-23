import React from 'react'
import Minerals from './Minerals'
export const metadata = {
  title: "About Amigos Minerals | Sustainable Mining & Global Operations",
  description:
    "Learn about Amigos Minerals — 25+ years legacy in mining and mineral processing with operations in India, Zambia, and Tanzania. Focused on safety, sustainability, and community development.",
  keywords: [
    "Amigos Minerals",
    "mining company",
    "mineral processing",
    "sustainable mining",
    "iron ore",
    "bauxite",
    "limestone",
    "quartz",
    "silica sand",
    "mining operations India",
    "Zambia mining",
    "Tanzania mining",
  ],
  openGraph: {
    title: "About Amigos Minerals",
    description:
      "25+ years legacy in mining and mineral processing with global operations and a strong focus on sustainability.",
    url: "https://nivyaminerals.vercel.app/about",
    siteName: "Amigos Minerals",
    images: [
      {
        url: "/assests/about-us-2.jpeg",
        width: 1200,
        height: 630,
        alt: "About Amigos Minerals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Amigos Minerals",
    description:
      "Discover Amigos Minerals — global mining and mineral processing with sustainability at the core.",
    images: ["/assests/about-us-2.jpeg"],
  },
};

export default function page() {
  return (
    <div><Minerals /></div>
  )
}
