import { 
  CarouselGreenstash, 
  CarouselMyne, 
  CarouselFeatured 
} from '../components/Carousel'

const Home = () => {
    return (
        <main>
            <h1>Pool of tears</h1>
                <div className="card">
                <h2 className='align-middle text-center' >Greenstash</h2>
                <CarouselGreenstash />
                <h2 className='align-middle text-center' >Myne</h2>
                <CarouselMyne />
                <h2>Featured in</h2>
                <CarouselFeatured />
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </main>
        );
    }

export default Home;