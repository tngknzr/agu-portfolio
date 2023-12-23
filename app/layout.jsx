import Navbar from "@components/Navbar";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        
        <body>
            <Navbar/>
            <main>
            {children}

                </main>
           
        </body>
      </html>
    )
  }