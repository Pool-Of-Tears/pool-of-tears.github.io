import { GreenstashDrawer, MyneDrawer } from '../components/InfoDrawer'
import { 
  CarouselGreenstash, 
  CarouselMyne, 
  CarouselFeatured 
} from '../components/Carousel'

const Home = () => {
    return (
        <main>
          <div className='animate-slidein opacity-0 [--slidein-delay:300ms] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            <h1 className='text-5xl font-bold tracking-tight align-middle text-center mt-10 py-3'>Pool of tears</h1>
          </div>
          <div className="animate-slidein opacity-0 [--slidein-delay:500ms] card">
            <h2 className='align-middle text-center' >Greenstash</h2>
            <CarouselGreenstash />
            <GreenstashDrawer />
            <h2 className='align-middle text-center' >Myne</h2>
            <CarouselMyne />
            <MyneDrawer />
            <h2>Featured in</h2>
            <CarouselFeatured />
          </div>
          <p className="read-the-docs">
            Welcome to the Pool of Tears. We buld apps and interesting stuff. A team of tech enthusiasts who are passionate about technology and its impact on our lives. 
          </p>
        </main>
        );
    }

export default Home;