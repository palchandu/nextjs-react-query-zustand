import React from "react";

const Footer = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div>
        <ul className="flex justify-between gap-6">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Linkedin</a>
          </li>
        </ul>
      </div>
      <div>
        <p>@copyright Chandra</p>
      </div>
    </div>
  );
};

export default Footer;
