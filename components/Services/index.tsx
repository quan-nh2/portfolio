import { motion } from 'framer-motion';

import { services } from '@/constants';
import { fadeIn } from '@/utils';

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-8 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[355px] mb-8'>
              I am a Software Engineer with over 4 years of experience.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {services.map((service) => {
              const { id, name, description } = service;

              return (
                <div
                  key={id}
                  className='border-b border-white/20 h-[146px] mb-[32px]'
                >
                  <div className='max-w-[476px] '>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-2'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight mb-6'>
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
