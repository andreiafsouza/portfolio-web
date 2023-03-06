/* components */
import { Hero } from './components/Hero';
import { Header } from '../../components/Header';
import { About } from './components/About';
import { Divider } from '../../components/Divider';
import { Container } from './styles';
import { Portfolio } from './components/Portfolio';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Portfolio style={{ height: '100vh' }}></Portfolio>
    </Container>
  );
};
