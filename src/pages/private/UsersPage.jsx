import React, { useEffect, useState } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import AlertMessage from "../../components/AlertMessage";

function UsersPage({ setIsConnected }) {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
  }

  useEffect(() => {
    const token = getCookie("token");
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .get("https://test-technique-strateg-in.vercel.app/api/users", {
        headers,
      })
      .then((res) => {
        setIsLogin(true);
        setData(res.data);
        setIsConnected(true);
      })
      .catch((error) => {
        console.error(error);
        setIsLogin(false);
      });
  }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center my-12">
        {isLogin ? (
          <ul className="bg-gray-100 w-full lg:w-2/3 mx-4 h-fit rounded-lg">
            <li className="flex justify-around border-b-2 border-black font-medium bg-gray-200 rounded-t-lg">
              <h2 className="w-1/3 p-6">Nom d'utilisateur</h2>
              <h2 className="w-1/3 p-6">Adresse email</h2>
              <h2 className="w-1/3 p-6 hidden lg:block">date de création</h2>
            </li>
            {data.map(({ _id, username, email, createdAt }) => (
              <li key={_id} className="flex justify-around">
                <p className="w-1/3 p-4">{username}</p>
                <p className="w-1/3 p-4">{email}</p>
                <p className="w-1/3 p-4 hidden lg:block">
                  {createdAt.split("T").shift()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <AlertMessage
            alertType="danger"
            className="top-1/2 h-fit flex p-6 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-lg"
            content=" Votre session à expirer, veuillez vous reconnectez."
          />
        )}
      </div>
    </>
  );
}

export default UsersPage;

UsersPage.propTypes = {
  setIsConnected: PropTypes.func.isRequired,
};
