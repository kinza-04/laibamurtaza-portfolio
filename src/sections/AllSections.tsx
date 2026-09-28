import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { config } from '@/src/data/config';
import { Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <p className="text-white/80 leading-relaxed mb-6">{config.about.text}</p>
          <p className="text-white/80 leading-relaxed">{config.about.focus}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {config.about.stats.map((stat, i) => (
            <div key={i} className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#D4AF37]/20">
              <h3 className="text-2xl font-bold text-[#D4AF37]">{stat.value}</h3>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="flex flex-wrap gap-4">
        {config.skills.map((skill, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:border-[#D4AF37] transition-all">
            {skill}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" title="What I Do">
      <div className="grid md:grid-cols-3 gap-6">
        {config.services.map((service, i) => (
          <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all">
            <span className="text-[#D4AF37] text-sm font-mono block mb-4">0{i + 1} —</span>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-white/60 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ExperienceEducation() {
  return (
    <Section id="experience" title="Experience & Education">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold text-[#D4AF37] mb-6">Work Experience</h3>
          {config.experience.map((exp, i) => (
            <div key={i} className="mb-8 border-l border-[#D4AF37]/30 pl-6">
              <h4 className="text-lg font-bold text-white">{exp.role}</h4>
              <p className="text-[#D4AF37] text-sm">{exp.company} • {exp.period}</p>
              <ul className="list-disc list-inside text-white/60 mt-2 text-sm">
                {exp.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#D4AF37] mb-6">Education</h3>
          {config.education.map((edu, i) => (
            <div key={i} className="mb-8 border-l border-[#D4AF37]/30 pl-6">
              <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
              <p className="text-[#D4AF37] text-sm">{edu.institution} • {edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {config.projects.map((proj, i) => (
          <div key={i} className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all">
            <div className="h-48 bg-white/5 rounded-xl mb-4" />
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest">{proj.category}</span>
            <h3 className="text-xl font-bold text-white mt-1">{proj.title}</h3>
            <p className="text-white/60 text-sm mt-2 mb-4">{proj.description}</p>
            <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#D4AF37] transition-colors">View Project →</a>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Have a Project in Mind?">
      <div className="bg-[#1a1a1a] p-12 rounded-3xl border border-white/5 text-center">
        <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">Let's build something professional, modern and memorable.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${config.email}`} className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full"><Mail size={18} /> Email Me</a>
          <a href={config.whatsapp} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full"><MessageCircle size={18} /> WhatsApp</a>
          <a href={config.linkedin} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </div>
    </Section>
  );
}
