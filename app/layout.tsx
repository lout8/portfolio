import { Raleway } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navigation from "@/components/navigation";
import { homeData } from "@/lib/data";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata() {
  const title = "Elissaios Loutos";
  const description = homeData.description;
  const keywords = [
    "Elissaios loutos",
    "Full-stack developer",
    "Web developer",
    "Free-lancing",
    "Front-end developer",
  ];
  return {
    metadataBase: new URL("https://www.elissaiosloutos.dev"),
    title: {
      default: title,
      template: `%s - ${title}`,
    },
    description,
    twitter: { card: "summary_large_image" },
    generator: "Next.js",
    applicationName: "Portfolio",
    referrer: "origin-when-cross-origin",
    keywords: keywords,
    authors: [
      { name: "Elissaios Loutos" },
      { name: "Elissaios Loutos", url: "https://www.elissaiosloutos.dev" },
    ],
    creator: "Elissaios Loutos",
    publisher: "Elissaios Loutos",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex w-full flex-col items-center justify-start p-8">
            <Navigation />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
