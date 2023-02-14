import Header from "./Components/Header";
import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          {/* Searchbox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
