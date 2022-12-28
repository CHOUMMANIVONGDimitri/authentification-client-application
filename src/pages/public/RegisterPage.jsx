import React, { useState } from "react";
import HeaderSection from "../../components/HeaderSection";
import axios from "axios";
import AlertMessage from "../../components/AlertMessage";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSameEmail, setIsSameEmail] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        setUsername("");
        setEmail("");
        setPassword("");
        setIsCreated(true);
        setIsSameEmail("");
      })
      .catch((error) => {
        setIsSameEmail(error.response.data);
        setEmail("");
      });
  };

  return (
    <>
      <section className="w-2/3 mx-auto my-12 ">
        <HeaderSection />
      </section>
      <section>
        <h1 className="text-center font-bold text-3xl my-8 ">
          Créer un Compte
        </h1>
        {isCreated ? (
          <AlertMessage
            alertType="validation"
            className="mx-auto w-1/2 flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            content=" Le compte a bien été créer. Connectez vous en cliquant sur le bouton se connecter"
          />
        ) : null}
        {isSameEmail.length > 0 ? (
          <AlertMessage
            alertType="danger"
            className="mx-auto w-1/2 flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            content={` ${isSameEmail}`}
          />
        ) : null}
        <form onSubmit={handleSubmit} className="w-1/2 mx-auto max-w-lg">
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nom d'utilisateur
            </label>
            <input
              type="text"
              id="username"
              name="username"
              maxLength={20}
              value={username}
              onChange={handleChangeUsername}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Votre nom de famille"
              required
            />
          </div>

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
              name="email"
              value={email}
              maxLength={30}
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
              name="password"
              value={password}
              maxLength={10}
              onChange={handleChangePassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            S'inscrire
          </button>
        </form>
      </section>
    </>
  );
}

export default RegisterPage;
