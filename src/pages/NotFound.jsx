import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import catNotFoundGif from "@/assets/animations/catnotfound.gif"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 space-y-1">
      <div className="overflow-hidden h-[calc(100% - 60px)] flex justify-center items-center">
        <img className="max-w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/2 h-auto -mt-30 -mb-90" src={catNotFoundGif} alt="Not Found" />
      </div>
      <h1 className="text-3xl font-bold text-white">404: Page Not Found</h1>
      <p className="text-lg text-white">We're sorry, but the page you were looking for doesn't exist.</p>
      <Link to="/">
        <Button variant="outline" className="mt-4">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;