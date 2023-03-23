import React from 'react';
import Image from 'next/image';

import { fetchPhotos, useFetchPhotos } from '@/features/photo/api';
import { PhotoType } from '@/features/photo/constant';

const PhotoLayout = (props: any) => {
  const { isLoading, data }: any = useFetchPhotos();

  if (isLoading === true) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className='overflow-y-auto h-[100vh] py-6'>
        <div className='container mx-auto'>
          <div className='flex-1 bg-photo bg-contain bg-no-repeat h-[460px]'>
            {/* <h2 className='text-black'>Title</h2> */}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {data.data?.map((photo: PhotoType) => (
              <Image
                key={photo.id}
                className='h-auto max-w-full rounded-lg mx-auto'
                src={photo.urls.small}
                alt={photo.alt_description}
                width={300}
                height={150}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await fetchPhotos();
  return { props: { data: data } };
}

export default PhotoLayout;
