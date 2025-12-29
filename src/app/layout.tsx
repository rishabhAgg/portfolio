import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://rishabhaggarwal.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rishabh Aggarwal | AI & Backend Developer",
    template: "%s | Rishabh Aggarwal",
  },
  description:
    "I help startups integrate AI into their products and automate business processes. 6 years of backend expertise, now focused on AI development.",
  keywords: [
    "AI Developer",
    "Backend Developer",
    "Node.js",
    "Ruby on Rails",
    "Freelance Developer",
    "Startup Developer",
    "RAG",
    "AI Integration",
    "AI Automation",
    "Full Stack Developer",
    "Software Engineer India",
  ],
  authors: [{ name: "Rishabh Aggarwal", url: siteUrl }],
  creator: "Rishabh Aggarwal",
  publisher: "Rishabh Aggarwal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rishabh Aggarwal",
    title: "Rishabh Aggarwal | AI & Backend Developer",
    description:
      "I help startups integrate AI into their products and automate business processes. 6 years of backend expertise.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rishabh Aggarwal - AI & Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Aggarwal | AI & Backend Developer",
    description:
      "I help startups integrate AI into their products and automate business processes.",
    images: ["/og-image.png"],
    creator: "@rishabh",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rishabh Aggarwal",
  url: siteUrl,
  jobTitle: "AI & Backend Developer",
  description:
    "I help startups integrate AI into their products and automate business processes. 6 years of backend expertise.",
  knowsAbout: [
    "Artificial Intelligence",
    "Backend Development",
    "Node.js",
    "Ruby on Rails",
    "RAG Systems",
    "AI Integration",
    "Workflow Automation",
  ],
  sameAs: [
    "https://linkedin.com/in/rishabh-aggarwal",
    "https://github.com/rishabh-aggarwal",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0a0a0f] text-slate-100">
        {children}
      </body>
    </html>
  );
}
