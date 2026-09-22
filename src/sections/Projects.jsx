import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'


const projects = [
  { 
    title: 'Property Pulse',
    description: 'A comprehensive real estate web application that streamlines the rental search process by allowing users to easily discover, list, and manage properties. It provides a seamless browsing experience with secure user accounts, optimized property image galleries, and fast, reliable access to listings.',
    image: '/projects/Property-Pulse.png',
    tags: ['Next.js', 'SSR', 'MongoDB', 'NextAuth.js', 'Google OAuth', 'Tailwind CSS', 'Cloudinary API'],
    link: 'https://property-pulse-mocha-nu.vercel.app/',
    github:'#',
  },
  {
    title: 'WordGuardian',
    description: 'A smart document workspace and AI-powered PDF manager built to streamline research workflows through intelligent summarization, translation, and organized study tools.',
    image: '/projects/WordGuardian.png',
    tags: ['Vanilla JS', 'HTML/CSS', 'Node.js', 'Express.js', 'Google OAth', 'Gemini API', 'Google drive API'],
    link: '#',
    github:'#',
  },
  { 
    title: 'Idea Drop',
    description: 'A full-stack platform where authenticated users can securely log in to seamlessly share, discover, and manage innovative ideas.',
    image: '/projects/Idea-Drop.png',
    tags: ['React','TypeScript' ,'TanStack Router', 'Tanstack Query','Node.js' ,'Express.js' ,'MongoDB', 'Tailwind CSS', 'MERN Stack'],
    link: 'https://idea-drop-ui-alpha-sandy.vercel.app/',
    github:'#',
  },
  {
    title: 'Crypto Dash',
    description: 'A responsive cryptocurrency dashboard that tracks real-time market trends, live asset valuations, and key financial metrics powered by the CoinGecko API.',
    image: '/projects/Crypto-Dash.png',
    tags: ['React', 'Vite', 'React Router', 'CoinGecko API'],
    link: 'https://crypto-dash-five-nu.vercel.app/',
    github:'#',
  },


]

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* BG glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="uppercase text-sm text-secondary-foreground font-medium tracking-wider animate-fade-in">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Projects that 
              <span className="italic text-white font-serif font-normal">
                {' '}make an impact.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A selection of my recent work.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            { projects.map((project, ind) => (
              <div key={ind} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{animationDelay: `${(ind + 1) * 100}ms`}}>

                {/* Image */}
                <div className="relative overflow-hidden aspect-video">

                  <img src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" 
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-30"/>
                
                </div>

                {/* Content */}
                <div className="bg-secondary p-6 space-y-4 min-h-full">

                  <div>
                    <h3 className="flex items-start justify-between text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>

                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, ind) =>(
                        <span key={ind} 
                        className="text-xs text-muted-foreground font-medium px-4 py-1.5 bg-surface rounded-full border border-border/70 hover:border-primary/50 hover:text-primary transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                </div>

              </div>
            )) }
          </div>

        </div>

      </div>

    </section>
  );
}
