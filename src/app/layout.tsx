import Header from "@/components/Header";
import './globals.css';

// children: our pages (page.tsx)
// children: React.ReactNode => children can be everything React can render
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}