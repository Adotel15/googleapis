
import './globals.css'

export const metadata = {
  title: 'Test Google Sheets',
  description: 'Created by me',
}

const RootLayout = ({ children }: { children: React.ReactNode}) => {

    return (
      <html>
        <body> {children} </body>
      </html>
    )
}

export default RootLayout;
