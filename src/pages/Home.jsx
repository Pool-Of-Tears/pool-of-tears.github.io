import { Drawers } from '../components/InfoDrawer';
import { CarouselGreenstash, CarouselMyne, CarouselFeatured } from '../components/Carousel';
import greenstashIcon from '../assets/greenstash/greenstash-icon.heif';
import myneIcon from '../assets/myne/myne-icon.heif';
import { strings } from '../lib/strings';

const home = strings.HomePage;

const Section = ({ type, CarouselComponent, reverse }) => {
  const sectionData = strings[type];

  return (
    <section id={type} className={`${type}-section px-4 pt-20 animate-slidein opacity-0 [--slidein-delay:500ms]`}>
      <div className="mx-auto w-full justify-center">
        <div
          className={`flex flex-col lg:flex-row
        } flex-nowrap space-x-0 lg:space-x-4`}
        >
          <div
            className={`w-full lg:w-1/2 flex-col justify-center items-center text-center ${
              reverse ? 'order-last lg:order-first' : 'order-last'
            }`}
          >
            <div className="flex flex-col justify-center items-center">
              <h3>{home.screenshots}</h3>
              <CarouselComponent />
            </div>
          </div>
          <div className="w-full lg:w-1/2 align-middle text-center mb-8">
            <img
              src={type === 'greenStash' ? greenstashIcon : myneIcon}
              alt={sectionData.AvatarFallback}
              className="mx-auto h-[4rem] w-[4rem] rounded-full"
            />
            <h2 className="title text-center">{sectionData.title}</h2>
            <p className="text-center">{sectionData.description}</p>
            <div className="flex flex-col my-10 mx-5 p-10 bg-accent/80 rounded-lg text-center shadow-xl">
              <h3>{home.feat[1]}</h3>
              <ul className="text-left overflow-auto h-[300px] md:h-auto md:overflow-visible">
                {sectionData.features.map((item, index) => (
                  <li key={index} className="list-disc ml-5 text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col m-5">
              <Drawers type={type} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <div className="home bg-gradient-to-b from-slate-300/40 from-1% dark:from-black/75">
      <div className="animate-slidein opacity-0 [--slidein-delay:300ms] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
        <h1 className="home-title transition-all shadow-black dark:shadow-white drop-shadow-md hover:drop-shadow-2xl duration-1000 hover:duration-1000">
          {home.title}
        </h1>
        <p className="text-center align-middle p-6">{home.description}</p>
      </div>
      <Section type="greenStash" CarouselComponent={CarouselGreenstash} reverse={false} />
      <Section type="myne" CarouselComponent={CarouselMyne} reverse={true} />
      <section id="featured" className="mx-auto my-5 p-2 text-center">
        <div className="mx-auto w-full justify-center animate-slidein opacity-0 [--slidein-delay:500ms]">
          <h2>{home.feat[0]}</h2>
          <CarouselFeatured />
        </div>
      </section>
    </div>
  );
};

export default Home;
