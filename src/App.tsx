/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import * as Sections from './sections/AllSections';
import { Footer, FloatingWhatsApp } from './components/FooterAndWhatsApp';

export default function App() {
  return (
    <div className="bg-[#121212] text-white">
      <Navbar />
      <Hero />
      <Sections.About />
      <Sections.Skills />
      <Sections.Services />
      <Sections.ExperienceEducation />
      <Sections.Projects />
      <Sections.Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
