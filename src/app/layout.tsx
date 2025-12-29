import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishabh Aggarwal | AI & Backend Developer",
  description: "I help startups integrate AI into their products and automate business processes. 6 years of backend expertise, now focused on AI development.",
  keywords: ["AI Developer", "Backend Developer", "Node.js", "Ruby on Rails", "Freelance Developer", "Startup Developer", "RAG", "AI Integration"],
  authors: [{ name: "Rishabh Aggarwal" }],
  openGraph: {
    title: "Rishabh Aggarwal | AI & Backend Developer",
    description: "I help startups integrate AI into their products and automate business processes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Aggarwal | AI & Backend Developer",
    description: "I help startups integrate AI into their products and automate business processes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a0a0f] text-slate-100">
        {children}
      </body>
    </html>
  );
}
