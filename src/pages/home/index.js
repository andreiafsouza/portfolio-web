/* components */
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Divider } from '../../components/Divider';
import { Container, NoDividerOnMobile } from './styles';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { Header } from '@components/Header';
import { Contact } from './components/Contact/';
import { Footer } from '@components/Footer/';
import Portfolio from './components/Portfolio/';

export const Home = () => {
  return (
    <Container id="/">
      <Header />
      <main>
        <Hero />
        <About />
        <PortfolioCarousel />
        <Contact />
      </main>
      <Footer />
    </Container>
  );
};
