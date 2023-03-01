import Image from 'next/image';

import { FaGithub, FaLinkedin, FaDribbble, FaFacebook } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import { fadeIn } from '@/utils';
import AvatarImg from '@/assets/avatar.svg';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='text-sky-400/100 text-[55px] font-bold loading-[0.8] lg:text-[80px] mb-4 lg:mb-8'
            >
              Quan Nguyen
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary] font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                className='text-accent'
                sequence={[
                  'Software Engineer',
                  3000,
                  'Frontend Developer',
                  3000,
                  'Backend Developer',
                  3000,
                ]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              The primary focus of a software engineer&apos; job is not writing
              code but rather creating value through the use of software that
              was written.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='#'>
                <FaLinkedin />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaFacebook />
              </a>
              <a href='#'>
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView='show'
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <Image src={AvatarImg} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
