import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="relative h-screen w-full bg-[url('/images/hero.jpg')] 
      bg-no-repeat bg-center bg-fixed bg-cover"
    >
      <div className='bg-black w-full h-full bg-opacity-50'>
        <div className='text-white text-center relative top-2/4 m-auto'>
          <h1 className='text-5xl font-[900] text-center mb-3'>
            Unlimited movies, TV shows, and more
          </h1>
          <p className='text-2xl font-[400] '>
            Watch anywhere. Cancel anytime.
          </p>
          <p className='text-2xl mt-1 font-[400] '>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className='flex align-middle justify-center mt-5'>
            <input
              type='text'
              placeholder='Email address'
              className='bg-white p-2 rounded-l-md w-96'
            />
            <Link href='/register'>
              <button className='bg-[#e50914] text-white p-2 rounded-r-md'>
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
