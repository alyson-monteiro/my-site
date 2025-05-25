import './globals.css';
import Header from '../components/Header';
import SplashScreen from '../components/SplashScreen'

 export const metadata = {
   title: 'Meu Portfólio',
   description: 'Apresentação pessoal e portfólio',
   icons: {
    icon: '/favicon.ico',
  },
 }

 export default function RootLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
   return (
     <html lang="pt-BR">
       <body
         className={`
           relative
           bg-[url('/images/background.png')]
           bg-cover
           bg-center
           bg-no-repeat
           text-white
           min-h-screen
         `}
       >
        <Header />

         <div className="relative z-10 max-w-3xl mx-auto px-4 py-16">
           {children}
         </div>
        <SplashScreen>
          <Header />
          <div className="relative z-10 max-w-3xl mx-auto px-4 py-16">
            {children}
          </div>
        </SplashScreen>
       </body>
     </html>
   )
 }
