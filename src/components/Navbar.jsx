import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="absolute bottom-0 w-screen h-12 bg-slate-500 flex justify-center items-center text-white">
            <Link to="/search" className="flex justify-center items-center bg-gradient-to-t from-transparent1 to-transparent2 h-full flex-1 hover:bg-transparent2">
                <p className="uppercase">search</p>
            </Link>
            <Link to="/home" className="flex justify-center items-center bg-gradient-to-t from-transparent1 to-transparent2 h-full flex-1 border-x-2 hover:bg-transparent2">
                <p className="uppercase">home</p>
            </Link>
            <Link to="/profile" className="flex justify-center items-center bg-gradient-to-t from-transparent1 to-transparent2 h-full flex-1 hover:bg-transparent2">
                <p className="uppercase">profile</p>
            </Link>
        </div>
    );
}

export default Navbar;