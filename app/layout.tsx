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
      "Klinik pergigian mesra keluarga di Taman Batik, Sungai Petani, Kedah.",
    openGraph: {
      type: "website",
      locale: "ms_MY",
      title: "Klinik Pergigian Dr Syazwan",
      description: "Rawatan gigi yang selesa, jelas dan dipercayai.",
      images: [
        {
          url: new URL("/og.png", metadataBase).toString(),
          width: 1200,
          height: 630,
          alt: "Klinik Pergigian Dr Syazwan — rawatan gigi yang selesa, jelas dan dipercayai",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Klinik Pergigian Dr Syazwan",
      description: "Rawatan gigi yang selesa, jelas dan dipercayai.",
      images: [new URL("/og.png", metadataBase).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
