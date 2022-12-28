import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PropTypes } from "prop-types";
import HeaderSection from "../../components/HeaderSection";
import AlertMessage from "../../components/AlertMessage";

function LoginPage({ setIsConnected }) {
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
      .then(
        (res) =>
          (document.cookie = `token=${res.data.token};max-age=3600;sameSite=lax`)
      )
      .then((res) => {
        console.log(res);
        setShowAlert(false);
        navigate("/users");
        setIsConnected(true);
      })
      .catch((error) => {
        console.error(error);
        setShowAlert(true);
      });
  };

  return (
    <>
      <section className="w-2/3 mx-auto my-12 ">
        <HeaderSection />
      </section>
      <section>
        <h1 className="text-center font-bold text-3xl my-4 ">Se Connecter</h1>
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
};
