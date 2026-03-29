import { PiFileTextFill } from "react-icons/pi";

function Header() {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-2">
        <div className="bg-emerald-600 p-2 rounded-sm shadow-lg">
          <PiFileTextFill className="text-white text-2xl" />
        </div>
        <h1 className="text-2xl font-black tracking-tight text-emerald-950">
          RevResume
        </h1>
      </div>
    </div>
  );
}

export default Header;
