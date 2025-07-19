import { Link } from "react-router-dom";
import ThemeMode from "./ThemeMode";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className=" fixed top-0 left-0 right-0 pl-2 pr-2">
        <div className="container mx-auto max-w-[1500px] py-3 bg-base-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/Navbar.js">
              <img
                src="../public/img/unsplashLogo.png"
                alt="unsplashLogo"
                width="32px"
              />
            </Link>
            <ThemeMode />
            <p className="font-bold max-[1073px]:hidden">Unsplash Developers</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Your apps</p>
            <div className=" min-[770px]:hidden">
              <details className="dropdown dropdown-end">
                <summary className="btn m-1 font-bold">•••</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1  p-2 shadow-sm">
                  <li>
                    <p>Documentation</p>
                  </li>
                  <li>
                    <p>Dataset</p>
                  </li>
                  <li>
                    <div className="relative">
                      <p>API Status </p>
                      <span className="absolute top-0 right-0 bg-green-500 w-[5px] h-[5px] rounded-full"></span>
                    </div>
                  </li>
                  <li>
                    <p>API Changelog</p>
                  </li>
                  <li>
                    <p>Login</p>
                  </li>
                  <li>
                    <p>Register as a developer</p>
                  </li>
                </ul>
              </details>
            </div>

            <div className="flex items-center gap-4 max-[770px]:hidden">
              <p>Documentation</p>
              <p>Dataset</p>
              <div className="relative">
                <p>API Status </p>
                <span className="absolute top-0 -right-1 bg-green-500 w-[5px] h-[5px] rounded-full"></span>
              </div>
              <p>API Changelog</p>
              <div className="hidden">
                <button className="btn">Login</button>
                <button className="btn btn-neutral">
                  Register as a developer
                </button>
              </div>
            </div>
            <div className="text-[32px]">
              <FaUserCircle />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-500 flex justify-start py-4">
        <img
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&color=ffffff&center=true&vCenter=true&width=700&lines='curl+https://api.unsplash.com/search/photos?query=canada';'curl+https://api.unsplash.com/users/samuelzeller/photos';'$+curl+https://api.unsplash.com/photos'"
          alt="Typing animation"
        />
      </div> */}
    </>
  );
}

export default Navbar;
