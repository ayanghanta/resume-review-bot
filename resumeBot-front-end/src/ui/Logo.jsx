import { PiFileTextFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <div className="bg-emerald-600 p-2 rounded-sm shadow-lg">
          <PiFileTextFill className="text-white text-2xl" />
        </div>
        <h1 className="text-2xl font-black tracking-tight text-emerald-950">
          ResumeBot
        </h1>
      </div>
    </Link>
  );
}

export default Logo;
