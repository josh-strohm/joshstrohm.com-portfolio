import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { PageDotGrid } from "@/components/PageDotGrid";
import { display, body, mono } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      id="top"
    >
      <body className="min-h-screen antialiased">
        <JsonLd />
        <PageDotGrid>
          <Nav />
          <main>{children}</main>
          <Footer />
        </PageDotGrid>

        {/* PLACEHOLDER: Analytics hook — uncomment and add your tracking ID
        <script
          defer
          data-domain="joshstrohm.com"
          src="https://plausible.io/js/script.js"
        />
        */}
      </body>
    </html>
  );
}