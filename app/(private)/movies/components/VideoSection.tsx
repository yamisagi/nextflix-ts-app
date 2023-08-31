import React from 'react';

const VideoSection = ({ videoKey }: { videoKey: string }) => {
  return (
    <div className='w-10/12 lg:w-full mx-auto relative
    h-[50vw] sm:h-[45vw] md:h-[40vw] lg:h-[30vw] xl:h-[25vw]
    mt-16 sm:mt-20 md:mt-8 lg:mt-16 xl:mt-16 
    rounded-md overflow-hidden'
    >
      <div className='embed-responsive embed-responsive-16by9 relative w-full overflow-hidden'
        style={{ paddingTop: '56.25%' }}
      >
        <iframe
          className='embed-responsive-item absolute inset-0 w-full h-full object-cover'
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
          allowFullScreen
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;