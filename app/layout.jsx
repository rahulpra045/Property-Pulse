import '../assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find your Dream rental property',
    keywrds: 'rental, find rentals, find properties',
};
const MainLayout = ({children}) => {
  return (
    <html lang='en'>
          <body>
              <Navbar/>
      <main>{children}</main>
      </body>
      </html>
  )
}

export default MainLayout