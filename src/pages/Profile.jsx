import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import cover from "../assets/img/cover.png"
import profile from "../assets/img/profile.png"
import Navbar from "../components/Navbar";
function Profile() {
    return (
        <div className="w-full h-screen bg-cyan-800 flex justify-center items-center">
            <div className="w-screen h-full bg-slate-400">
                <div className="relative w-full h-52 flex justify-center items-center bg-cyan-400">
                    <img className="w-full h-full" src={cover} alt="cover img" />
                    <button className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white flex justify-center items-center">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className="absolute bottom-3 left-3 flex justify-center items-center">
                        <div className="w-28 h-28 rounded-full bg-orange-500 hover:cursor-pointer"></div>
                        <div className="flex justify-center items-start flex-col ml-2">
                            <p className="text-xl font-bold">username</p>
                            <p className="">last seen recently</p>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
        </div>
    );
}

export default Profile;