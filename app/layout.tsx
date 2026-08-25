import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "Klinik Pergigian Dr Syazwan",
      template: "%s | KPDS",
    },
    description:
      "Modern dental care in Sungai Petani with careful diagnosis, clear planning, and a patient-focused approach.",
    openGraph: {
      type: "website",
      locale: "en_MY",
      title: "Klinik Pergigian Dr Syazwan",
      description: "Modern dental care in Sungai Petani.",
      images: [
        {
          url: new URL("/og-easlo.png", metadataBase).toString(),
          width: 1200,
          height: 630,
          alt: "KPDS — Modern dental care in Sungai Petani",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Klinik Pergigian Dr Syazwan",
      description: "Modern dental care in Sungai Petani.",
      images: [new URL("/og-easlo.png", metadataBase).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
