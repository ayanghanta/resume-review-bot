import { Link } from "react-router-dom";
import { PiArrowLeftBold } from "react-icons/pi";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <h1 className="text-[120px] font-black text-slate-950 leading-none tracking-tighter">
        404
      </h1>

      <div className="mt-4 space-y-2">
        <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">
          Page Not Found
        </h2>
        <p className="text-slate-500 font-medium max-w-xs mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>

      <Link
        to="/"
        className="mt-12 flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest hover:text-emerald-700 transition-colors group"
      >
        <PiArrowLeftBold className="transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
