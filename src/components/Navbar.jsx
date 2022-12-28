import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ isConnected, setIsConnected }) => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Register/Login
        </h1>

        <ul className="flex gap-4">
          {isConnected ? (
            <li>
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4  text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800   hover:scale-125 rounded-lg transition duration-150 ease-out hover:ease-in"
                onClick={() => {
                  setIsConnected(false);
                }}
              >
                se déconnecter
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4  text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  hover:scale-125 rounded-lg transition duration-150 ease-out hover:ease-in"
              >
                se connecter
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/register"
              className="block py-2 pl-3 pr-4  text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  hover:scale-125 rounded-lg transition duration-150 ease-out hover:ease-in"
            >
              créer un compte
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  isConnected: PropTypes.bool,
  setIsConnected: PropTypes.func.isRequired,
};
