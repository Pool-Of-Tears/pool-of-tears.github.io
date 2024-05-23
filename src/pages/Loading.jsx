import NekoSpinner from "../assets/animations/light-blue-neko.svg";
import { strings } from '../lib/strings';

const LoadingPage = () => {
  const s = strings.LoadingPage;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent dark:bg-black/65 space-y-2">
      <div className="overflow-hidden flex justify-center items-center">
        <img className="max-w-full w-full h-auto -mt-30 -mb-90" src={NekoSpinner} alt={s.avatarFallback} />
      </div>
      <p className="p-3 mt-5 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">{s.title}</p>
    </div>
  );
};

export default LoadingPage;