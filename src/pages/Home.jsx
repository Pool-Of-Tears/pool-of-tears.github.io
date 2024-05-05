import { Drawers } from '../components/InfoDrawer';
import { CarouselGreenstash, CarouselMyne, CarouselFeatured } from '../components/Carousel';
import { strings } from '../lib/strings';

const Home = () => {
  return (
    <main>
      <div className="animate-slidein opacity-0 [--slidein-delay:300ms] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tight align-middle text-center mt-10 py-3">
          {strings.HomePage.title}
        </h1>
      </div>
      <div className="animate-slidein opacity-0 [--slidein-delay:500ms] card">
        <h2 className="align-middle text-center">{strings.greenStash.title}</h2>
        <CarouselGreenstash />
        <Drawers type="greenStash" />
        <h2 className="align-middle text-center">{strings.myne.title}</h2>
        <CarouselMyne />
        <Drawers type="myne" />
        <h2>{strings.HomePage.featured}</h2>
        <CarouselFeatured />
      </div>
      <p className="read-the-docs">{strings.HomePage.description} </p>
    </main>
  );
};

export default Home;
