import React from 'react'
import Services from './Services'

export const metadata = {
  title: "Services | Amigos Minerals",
  description:
    "Explore Amigos Minerals services — end-to-end mining solutions from exploration and extraction to processing, logistics, and export. Reliable supply for global industries.",
  keywords: [
    "Amigos Minerals services",
    "mining services",
    "mineral extraction",
    "mineral processing",
    "logistics",
    "export services",
    "bulk minerals supply",
    "industrial minerals",
    "sustainable mining",
  ],
  alternates: {
    canonical: "https://nivyaminerals.vercel.app/services",
  },
  openGraph: {
    title: "Services | Amigos Minerals",
    description:
      "End-to-end solutions from mine to market — exploration, extraction, processing, and export services.",
    url: "https://nivyaminerals.vercel.app/services",
    siteName: "Amigos Minerals",
    images: [
      {
        url: "/assests/About.png",
        width: 1200,
        height: 630,
        alt: "Amigos Minerals Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Amigos Minerals",
    description:
      "Discover Amigos Minerals services — complete mining and export solutions for global industries.",
    images: ["/assests/About.png"],
  },
};


export default function page() {
  return (
    <div><Services /></div>
  )
}
