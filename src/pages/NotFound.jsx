import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import catNotFoundGif from "@/assets/animations/catnotfound.gif"
import { buttonVariants } from "../components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan-50 dark:bg-slate-800 space-y-1">
      <div className="overflow-hidden h-[calc(100% - 60px)] flex justify-center items-center">
        <img className="max-w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/2 h-auto -mt-30 -mb-90" src={catNotFoundGif} alt="Not Found" />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">404: Page Not Found</h1>
      <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">We're sorry, but the page you were looking for doesn't exist.</p>
      <Link to="/" className={buttonVariants({ variant: "ghost" })}>Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;