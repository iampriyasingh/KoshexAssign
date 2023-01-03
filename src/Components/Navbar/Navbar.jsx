import React, { useState, useRef } from "react";
import { Link, Route, Router } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import images from "../../img";

function Navbar() {
  return (
    <div className="flex w-full border-b border-dashed p-5 justify-between items-end">
      <span className=" capitalize font-semibold mt-5 text-lg">
        Hi Nandita Thakkannavar!
      </span>
      <div className="flex items-center">
        <span>
          <svg
            viewBox="0 0 40 40"
            className="w-9 h-9 mr-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#E8EEFF" />
            <path
              d="M28.5605 26.4395L24.7527 22.6318C25.5395 21.446 26 20.0262 26 18.5C26 14.3645 22.6355 11 18.5 11C14.3645 11 11 14.3645 11 18.5C11 22.6355 14.3645 26 18.5 26C20.0262 26 21.446 25.5395 22.6318 24.7527L26.4395 28.5605C27.0245 29.1462 27.9755 29.1462 28.5605 28.5605C29.1462 27.9747 29.1462 27.0252 28.5605 26.4395ZM13.25 18.5C13.25 15.605 15.605 13.25 18.5 13.25C21.395 13.25 23.75 15.605 23.75 18.5C23.75 21.395 21.395 23.75 18.5 23.75C15.605 23.75 13.25 21.395 13.25 18.5Z"
              fill="#557AFF"
            />
          </svg>
        </span>
        <span>
          <svg
            viewBox="0 0 40 40"
            className="w-9 h-9 mr-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#E8EEFF" />
            <path
              d="M26 16C26 14.4087 25.3679 12.8826 24.2426 11.7574C23.1174 10.6321 21.5913 10 20 10C18.4087 10 16.8826 10.6321 15.7574 11.7574C14.6321 12.8826 14 14.4087 14 16C14 23 11 25 11 25H29C29 25 26 23 26 16Z"
              stroke="#557AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.7295 29C21.5537 29.3031 21.3014 29.5547 20.9978 29.7295C20.6941 29.9044 20.3499 29.9965 19.9995 29.9965C19.6492 29.9965 19.3049 29.9044 19.0013 29.7295C18.6977 29.5547 18.4453 29.3031 18.2695 29"
              stroke="#557AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="25" cy="12" r="4" fill="#E43131" />
          </svg>
        </span>

        <span className="flex w-12 h-12 bg-gray-400 rounded-full mr-2"></span>
        <span>
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.68408L5 5.41493L9 1.68408"
              stroke="#343756"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
