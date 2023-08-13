import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
export const metadata = {
  title: "DevMania",
  description: "Showcase My Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}