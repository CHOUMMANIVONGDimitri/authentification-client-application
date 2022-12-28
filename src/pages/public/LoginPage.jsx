import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PropTypes } from "prop-types";
import HeaderSection from "../../components/HeaderSection";
import AlertMessage from "../../components/AlertMessage";

function LoginPage({ isConnected, setIsConnected }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://test-technique-strateg-in.vercel.app/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        document.cookie = `token=${res.data.token};max-age=3600;sameSite=lax`;
        setIsConnected(true);
      })
      .then((res) => {
        setShowAlert(false);
        navigate("/users");
      })
      .catch((error) => {
        console.error(error);
        setShowAlert(true);
      });
  };

  return (
    <>
      <section className="w-2/3 mx-auto my-12">
        <HeaderSection />
      </section>
      <section>
        <h1 className="text-center font-bold text-3xl my-4 dark:text-white">
          Se Connecter
        </h1>
        {showAlert ? (
          <AlertMessage
            alertType="danger"
            className="mx-auto w-1/2 flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            content=" L’adresse e-mail ou le mot de passe semble incorrect. Vérifiez vos informations de connexion ou inscrivez-vous si vous n'avez pas de compte."
          />
        ) : null}
        <form onSubmit={handleSubmit} className="w-1/2 mx-auto max-w-lg">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@email.com"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //   pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$"
              required
            />
          </div>

          <button
            type="submit"
            className="transition duration-150 ease-out hover:ease-in  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isConnected ? (
              <svg
                aria-hidden="true"
                role="status"
                className="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            ) : null}
            Se connecter
          </button>
        </form>
      </section>
    </>
  );
}

export default LoginPage;

LoginPage.propTypes = {
  setIsConnected: PropTypes.func.isRequired,
  isConnected: PropTypes.bool,
};
