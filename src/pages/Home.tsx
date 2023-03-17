import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function Home() {
  return (
    <div className="grid grid-cols-2 items-center gap-8">
      <div>
        <p className="text-[5rem] font-medium capitalize">
          Get access to <span className="text-color-orange">the law</span> in
          just a few clicks
        </p>
        <p>
          Opoko is a legal technology solution that offers insight into specific
          areas of law in triples.
        </p>
        <button className='bg-color-blue text-white flex items-center gap-4 btn '>
          Get Started <HiOutlineArrowNarrowRight />{' '}
        </button>
      </div>
      <div>
        <img alt="" src="/asset/hero.svg" />
      </div>
    </div>
  );
}

export default Home;
