import { Github, Linkedin } from "lucide-react";


const footerLinks = [
  { href: '#about', label: "About" },
  { href: '#projects', label: "Projects" },
  { href: '#contact', label: "Contact" },
]

const socialLinks = [
  {icon: Github, href: 'https://github.com/HamzaY-Web', label: 'Github'},
  {icon: Linkedin,  href: 'https://www.linkedin.com/in/hamza-mousa-475583395/', label: 'Linkedin'},
]


export const Footer = () => {


  return (
    <footer className="py-6 border-t border-border ">

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="text-center md:text-left">
            <a href="#" className="w-max text-md font-bold tracking-tight hover:text-primary">
              Hamza<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              {`© ${new Date().getFullYear()} Hamza Yousef. All rights reserved`}
            </p>
          </div>

          <nav className="flex flex-wrap gap-5">
            { footerLinks.map((link, ind) => (
              <a key={ind} 
              href={link.href}
              className="p-2 text-sm text-muted-foreground  hover:text-foreground transition-colors">
                {link.label}
              </a>
            )) }
          </nav>
          
          <div className="flex items-center gap-4">
            { socialLinks.map((item, ind) =>(
              <a key={ind} 
              href={item.href} 
              target="_blank"
              aria-label={item.label}
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                < item.icon className="w-5 h-5" />
              </a>
            )) }
          </div>
        
        </div>
      </div>
    </footer>
  )
}