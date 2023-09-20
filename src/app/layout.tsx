// import "./globals.css";
import "./style/globals.css"

export const metadata = {
  title: "Gustavo S. Leandro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
