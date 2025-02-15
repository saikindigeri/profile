

import About from './about/page';
import './globals.css';
import { Inter } from 'next/font/google';



import { NavbarDemo } from './Navbar/page';
import { Skills } from './skills/page';
import Projects, { ProjectsSection } from './projects/page';

import Footer from './footer/page';
import EducationTimeline from './education/page';
import ContactForm from './contact/page';




const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sai Kumar | Full Stack Developer',
  description: 'Professional Portfolio for Sai Kumar - Full Stack Developer',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">


      <body className={inter.className}>
   <NavbarDemo/>
        {children}
        
        <About />
        <Skills/>
        <EducationTimeline/>
        <Projects/>
        <ContactForm />
        <Footer/>
      </body>
    </html>
  );
}