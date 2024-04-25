import "../assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your Dream rental property",
  keywrds: "rental, find rentals, find properties",
};
const MainLayout = ({children}) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar/>
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
