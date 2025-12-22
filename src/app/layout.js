import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { BootstrapClient } from "@/components/bootstrap/BootstrapClient";

export const metadata = {
  title: "Prueba",
  description: "Pagina de prueba si si si",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
