import { useState, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { fadeIn } from '@/utils';

const About = () => {
  const [countExp, setCountExp] = useState<number>(1);
  const [countPrj, setCountPrj] = useState<number>(1);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView === false) {
      setCountExp(1);
      return;
    }

    const interval = setInterval(() => {
      if (countExp < 5) {
        setCountExp((prevState) => {
          return prevState + 1;
        });
      }
    }, 150);
    return () => clearInterval(interval);
  }, [countExp, inView]);

  useEffect(() => {
    if (inView === false) {
      setCountPrj(1);
      return;
    }

    const interval = setInterval(() => {
      if (countPrj < 10) {
        setCountPrj((prevState) => {
          return prevState + 1;
        });
      }
    }, 150);
    return () => clearInterval(interval);
  }, [countPrj, inView]);

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Start background image*/}

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[460px] mix-blend-lighten bg-top'
          />
          {/* Start background image*/}

          {/*Start text*/}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I am a Software Engineer with over 4 years of experience.
            </h3>
            <p className='mb-6'>
              The primary focus of a software engineer&apos; job is not writing
              code but rather creating value through the use of software that
              was written.
            </p>
            {/* Start personal stats*/}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text text-gradient mt-2 py-1'>
                  {inView ? countExp : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of
                  <br /> Experience
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text text-gradient mt-2 py-1'>
                  {inView ? countPrj : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects
                  <br /> Completed
                </div>
              </div>
            </div>
            {/* End personal stats*/}
          </motion.div>
          {/*End text*/}
        </div>
      </div>
    </section>
  );
};

export default About;
