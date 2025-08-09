import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { about } from 'data/about';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Section from 'components/Section';
import About from 'components/About';
import Projects from 'components/Projects';
import Skills from 'components/Skills';
import Contact from 'components/Contact';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`${about.name} – ${about.role.replace('·', '|')}`}</title>
        <meta name="description" content={about.tagline} />
        <meta property="og:title" content={`${about.name} – ${about.role.replace('·', '|')}`} />
        <meta property="og:description" content={about.tagline} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/avatar.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${about.name} – ${about.role.replace('·', '|')}`} />
        <meta name="twitter:description" content={about.tagline} />
        <meta name="twitter:image" content="/avatar.jpg" />
        <script
          type="application/ld+json"
          // Person schema for better rich results
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: about.name,
              jobTitle: about.role,
              description: about.tagline,
              sameAs: about.socials
                .filter((s) => s.href.startsWith('http'))
                .map((s) => s.href),
            }),
          }}
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Section id="about" title="About">
          <About />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
    </div>
  );
};

export default HomePage;