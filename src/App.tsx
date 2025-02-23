import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Hi, I'm [Your Name]
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Full Stack Developer crafting beautiful and functional web experiences
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
                Get in Touch
              </a>
              <a href="#projects" className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg font-semibold transition">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 transition">
              <Code2 className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-gray-400">Creating responsive and intuitive user interfaces with modern frameworks and tools.</p>
            </div>
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 transition">
              <Database className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-gray-400">Building scalable server-side applications and APIs with robust architecture.</p>
            </div>
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 transition">
              <Palette className="w-12 h-12 mb-4 text-pink-400" />
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-400">Designing beautiful and functional interfaces that users love to interact with.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center transform group-hover:scale-110 transition duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="relative p-8 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">A brief description of the project and the technologies used.</p>
                  <div className="flex gap-4">
                    <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-400 transition">
                      <Github className="w-4 h-4" /> View Code
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-400 transition">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-lg hover:text-blue-400 transition">
                <Mail className="w-6 h-6" /> your.email@example.com
              </a>
              <div className="flex gap-6">
                <a href="#" className="hover:text-blue-400 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;