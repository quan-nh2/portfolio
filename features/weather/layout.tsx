import React from 'react';
import Image from 'next/image';

import { useFetchRandomDog, fetchRandomDog } from '@/features/weather/api';

const WeatherLayout = (props: any) => {
  const { isLoading, data }: any = useFetchRandomDog(props.data);

  if (isLoading === true) {
    return <>Loading...</>;
  }
  return (
    <>
      <div className='overflow-hidden h-[100vh]'>
        <div className='container mx-auto'>
          <div className='my-12 py-6'>
            <Image
              className='mx-auto'
              src={data.data.message}
              alt='dog'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await fetchRandomDog();
  return { props: { data } };
}

export default WeatherLayout;
