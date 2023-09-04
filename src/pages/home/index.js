/* components */
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Divider } from '../../components/Divider';
import { Container } from './styles';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { Header } from '@components/Header';
import { Contact } from './components/Contact/index';
import { Footer } from '@components/Footer/index';

export const Home = () => {
  return (
    <Container id="/">
      <Header />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <PortfolioCarousel />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </Container>
  );
};
