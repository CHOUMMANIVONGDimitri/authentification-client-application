import React, { useEffect, useState } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import AlertMessage from "../../components/AlertMessage";
import { useNavigate } from "react-router-dom";

const UsersPage = ({ isConnected, setIsConnected }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  setIsConnected(true);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
  };

  useEffect(() => {
    const token = getCookie("token");
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .get("https://test-technique-strateg-in.vercel.app/api/users", {
        headers,
      })
      .then((res) => {
        setData(res.data);
        setIsConnected(true);
      })
      .catch((error) => {
        console.error(error);
        navigate("/login");
      });
  }, []);

  return (
    <>
      <div className="min-h-screen h-fit w-screen min-w-fit py-12 px-12">
        {isConnected !== null && isConnected === true ? (
          <ul className="bg-gray-100 w-4/5lg:w-2/3 h-fit rounded-lg dark:bg-gray-700 dark:text-white">
            <li className="flex justify-around border-b-2 border-black font-medium bg-gray-200 rounded-t-lg dark:bg-gray-600 ">
              <h2 className="w-1/3 p-6">Nom d'utilisateur</h2>
              <h2 className="w-1/3 p-6">Adresse email</h2>
              <h2 className="w-1/3 p-6">date de création</h2>
            </li>
            {data.map(({ _id, username, email, createdAt }) => (
              <li key={_id} className="flex justify-around">
                <p className="w-1/3 p-4 overflow-x-auto">{username}</p>
                <p className="w-1/3 p-4 overflow-x-auto">{email}</p>
                <p className="w-1/3 p-4 overflow-x-auto">
                  {createdAt.split("T").shift()}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
        {isConnected === false ? (
          <AlertMessage
            alertType="danger"
            className="top-1/2 h-fit flex p-6 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 max-w-lg"
            content=" Votre session à expirer, veuillez vous reconnectez."
          />
        ) : null}
      </div>
    </>
  );
};

export default UsersPage;

UsersPage.propTypes = {
  setIsConnected: PropTypes.func.isRequired,
  isConnected: PropTypes.bool,
};
