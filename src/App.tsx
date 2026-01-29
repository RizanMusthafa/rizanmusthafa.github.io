import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { profile } from './data/profile';

function App() {
  const siteUrl = 'https://rizanmusthafa.github.io';
  const pageTitle = `${profile.name} | ${profile.title} & ${profile.subtitle}`;
  const pageDescription = `${profile.name} - ${profile.title} with 7+ years of experience in React, React Native, Flutter, and TypeScript. Building scalable web and mobile applications for Telecom, Healthcare, Travel, and FinTech industries.`;

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    url: siteUrl,
    image: `${siteUrl}/images/pro-pic.jpg`,
    sameAs: [profile.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Sri Lanka',
    },
    knowsAbout: [
      'React',
      'React Native',
      'Flutter',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'NestJS',
      'Software Engineering',
      'Mobile Development',
      'Web Development',
    ],
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Rizan Mohomed, Software Engineer, Associate Technical Lead, React Developer, React Native Developer, Flutter Developer, TypeScript, Full Stack Developer, Sri Lanka, Remote Developer" />
        <meta name="author" content={profile.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${siteUrl}/images/pro-pic.jpg`} />
        <meta property="og:image:alt" content={profile.name} />
        <meta property="og:site_name" content={profile.name} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${siteUrl}/images/pro-pic.jpg`} />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#1e3a5f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={profile.name} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
