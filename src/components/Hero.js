import React from 'react';
import img from '../assets/img/cv2.jpg';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
            <p className='text-lg text-accent mb-2'>Hey, I'm Rikshitha Ravikumar</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] mb-4'>
              Master's <br /> Student
            </h1>
            <p className='max-w-[480px] text-lg mb-8'>
              {/* Add a brief introduction or tagline here */}
            </p>
            {/* <a
              href='https://drive.google.com/drive/folders/1OOexc65OyfRNpMws5bBOze-4RSQmUgr2?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                Resume
              </button>
            </a> */}
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end'>
            <img
              style={{ marginBottom: '60px', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              src={img}
              alt=''
              className='w-64 h-64 object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
