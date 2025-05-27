import './globals.css';
import Header from '../components/Header';
import SplashScreen from '../components/SplashScreen'

 export const metadata = {
   title: 'Alyson Monteiro',
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
           bg-fixed bg-[url('/images/background3.png')]
           bg-contain
           bg-center
           bg-no-repeat
           text-[#FCA554]
           min-h-screen
         `}
       >
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
