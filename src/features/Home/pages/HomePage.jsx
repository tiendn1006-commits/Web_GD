import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <About />
      <Testimonials />
    </>
  );
};
