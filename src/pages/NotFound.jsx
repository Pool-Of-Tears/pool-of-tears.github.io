import { Link } from "react-router-dom";
import catNotFoundGif from "@/assets/animations/catnotfound.gif"
import { buttonVariants } from "../components/ui/button";
import { strings } from "../lib/strings";

const NotFoundPage = () => {
  const s = strings.NotFoundPage;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan-50 dark:bg-slate-800 space-y-2">
      <div className="overflow-hidden h-[calc(100% - 60px)] flex justify-center items-center">
        <img className="max-w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/2 h-auto -mt-30 -mb-90" src={catNotFoundGif} alt={s.avatarFallback} />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{s.title}</h1>
      <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">{s.description}</p>
      <Link to="/" className={buttonVariants({ variant: "ghost" })}>Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;