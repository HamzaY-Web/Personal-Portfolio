import { Code2, Lightbulb, Rocket, Users } from "lucide-react";


const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time.',
  },
  
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and delivering lightning-fast user experience.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'working closely with teams to bring ideas to life.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'staying ahead with the latest technologies and best practices.',
  },

]

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
              {' '} one component at a time
              </span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a junior web developer and recent Computer Science graduate from Al-Balqa' Applied University (GPA 3.73/4). My journey started with a curiosity about how the web works, and it has grown into a real passion for building modern, full-stack web applications.
              </p>
              <p>
                I work mainly with React, Next.js, and TypeScript on the front end, and with Node.js, REST APIs, and databases like MongoDB and PostgreSQL on the back end. After specialized front-end training at WeWeblt, I focus on responsive interfaces that are clean, accessible, and easy to maintain.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, experimenting with side projects, and learning from the developer community.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>

          </div>

          {/* Right column */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, ind) => (

              <div key={ind} className="glass rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${ (ind + 1) * 100 } ms` }}>
                
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 hover:bg-primary/25">
                  <item.icon className="w-6 h-6"/>
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  { item.title }
                </h3>

                <p className="text-sm text-muted-foreground">
                  { item.description }
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
