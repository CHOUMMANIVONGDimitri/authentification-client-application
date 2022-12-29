import React from "react";

const FooterSection = () => {
  return (
    <div className="py-12 bg-white md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a
              href="https://www.linkedin.com/in/dimitri-choummanivong-507669228"
              className="mr-4 hover:underline md:mr-6 "
              target="_blank"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://github.com/CHOUMMANIVONGDimitri"
              className="mr-4 hover:underline md:mr-6 "
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto: dimitrichoummanivong@gmail.com"
              className="hover:underline"
            >
              Me Contacter
            </a>
          </li>
        </ul>
      </div>
      <hr className="py-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Dimitri CHOUMMANIVONG. Tous droits réservés.
      </p>
    </div>
  );
};

export default FooterSection;
