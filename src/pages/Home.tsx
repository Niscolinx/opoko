import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function Home() {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="grid gap-8 max-w-[50rem]">
        <p className="text-[5rem] font-medium  ">
          Get access to <span className="text-color-orange capitalize font-bold">The Law</span> in
          just a few clicks
        </p>
        <p className='text-[2.2rem]'>
          Opoko is a legal technology solution that offers insight into specific
          areas of law in triples.
        </p>
        <div className="flex justify-start">
          <button className="bg-color-blue text-white flex items-center gap-4 px-8 py-4 rounded-2xl text-[2.2rem] ">
            Get Started <HiOutlineArrowNarrowRight />{' '}
          </button>
        </div>
      </div>
      <div>
        <img alt="" src="/asset/hero.svg" />
      </div>
    </div>
  );
}

export default Home;
