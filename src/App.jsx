import {
  Hero,
  SuperQuality,
  Subscribe,
  Services,
  PopularProducts,
  SpecialOffer,
  CustomerReviews,
  Footer,
} from './sections';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
const App = () => {
  return (
    <main className='relative'>
      <MobileNav />
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding paddi-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='padding padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='padding bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
