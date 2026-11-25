import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jay Bhavani Vadapav – Vadapav Bole To Jay Bhavani",
  description:
    "Jay Bhavani Vadapav, established in 1998, transformed from a humble Ahmedabad street cart to a global fast-food phenomenon with 195+ franchises.",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#fffeed] text-black font-sans">
        {children}
      </body>
    </html>
  );
}
