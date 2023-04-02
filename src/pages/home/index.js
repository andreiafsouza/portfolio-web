/* components */
import { Hero } from './components/Hero';
import { Header } from '../../components/Header';
import { About } from './components/About';
import { Divider } from '../../components/Divider';
import { Container } from './styles';
import { PortfolioCarousel } from './components/PortfolioCarousel';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <PortfolioCarousel />
      <Divider />
    </Container>
  );
};
