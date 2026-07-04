import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#071b16] text-white px-10 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-green-400">
        Funngro
      </h1>

      <div className="space-x-8">
        <Link to="/">Teen</Link>
        <Link to="/company">Company</Link>
      </div>

    </nav>
  );
}

export default Navbar;