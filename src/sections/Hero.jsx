import { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full px-6 sm:px-8 md:px-10 lg:px-12 pt-20 md:pt-28'>
        <p className='text-lg md:text-xl font-montserrat text-coral-red'>
          Our Summer Collections
        </p>
        <h1 className='mt-6 md:mt-10 font-palanquin text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-base sm:text-lg leading-7 sm:leading-8 mt-4 md:mt-6 mb-8 sm:mb-10 md:mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Shop Now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-12 md:mt-20 gap-8 md:gap-16'>
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className='text-2xl sm:text-3xl md:text-4xl font-palanquin font-bold'>
                {stat.value}
              </p>
              <p className='leading-6 sm:leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen py-20 md:py-28 xl:py-0 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={500}
          className='object-contain relative z-10 max-w-full'
        />

        <div className='flex gap-4 sm:gap-6 absolute bottom-4 sm:bottom-8 left-4 sm:left-8 max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
