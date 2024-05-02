import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"

const NotFoundPage = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] align-middle">
       <img src="../assets/animations/Timeline2.webm" />
      </div>
      <h1>404: Page Not Found</h1>
      <p>We're sorry, but the page you were looking for doesn't exist.</p>
      <Link to="/">
        <Button variant="outline">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
