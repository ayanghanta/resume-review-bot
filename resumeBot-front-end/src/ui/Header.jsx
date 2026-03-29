import { PiFileTextFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex items-center justify-between mb-10">
      <Logo />
    </div>
  );
}

export default Header;
