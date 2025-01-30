/* components */
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Container } from './styles';
import { Portfolio } from './components/Portfolio';
import { Header } from '@components/Header';
import { Contact } from './components/Contact/';
import { Footer } from '@components/Footer/';

export const Home = () => {
  return (
    <Container id="/">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </Container>
  );
};
