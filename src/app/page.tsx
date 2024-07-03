import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/services';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => (
  <div>
    <Head>
      <title>Responsive Website</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header />
    <Hero />
    <Services />
    <About />
    <Footer />
  </div>
);

export default HomePage;
