import React, { useEffect, useState } from "react";
import images from "../../img";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = [
  {
    title: "Dashboard",
    path: "/",
    icon: ({ color }) => (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="7" height="11.3999" rx="2" fill={color} />
        <rect x="9" width="10" height="11.3999" rx="2" fill={color} />
        <rect y="13.3003" width="11" height="5.69997" rx="2" fill={color} />
        <rect
          x="13"
          y="13.3003"
          width="6"
          height="5.69997"
          rx="2"
          fill={color}
        />
      </svg>
    ),
    imgcName: "img.Group-143",
    imgBoxcName: "Rectangle-272",
    imgTitlecName: "Dashboard",
  },
  {
    title: "Investor",
    path: "/investor",
    icon: ({ color }) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#8awn52xjka)" fill={color}>
          <path d="M5.833 3.333c3.222 0 5.834-.746 5.834-1.666C11.667.747 9.055 0 5.833 0 2.612 0 0 .746 0 1.667c0 .92 2.612 1.666 5.833 1.666zM5.833 7.083c3.222 0 5.834-.745 5.834-1.666v-1.89C9.83 4.513 6.67 4.584 5.833 4.584c-.836 0-3.996-.071-5.833-1.055v1.889c0 .92 2.612 1.666 5.833 1.666zM7.917 15.725v2.492c-.642.075-1.35.116-2.084.116-3.225 0-5.833-.75-5.833-1.666v-1.892c1.833.983 5 1.058 5.833 1.058.359 0 1.15-.016 2.084-.108zM8.008 11.967c-.025.075-.041.166-.058.25l-.033-.025v2.275c-.642.075-1.35.116-2.084.116-3.225 0-5.833-.75-5.833-1.666v-1.892c1.833.983 5 1.058 5.833 1.058.367 0 1.2-.016 2.175-.116zM5.833 8.333c-.836 0-3.996-.071-5.833-1.055v1.889c0 .92 2.612 1.666 5.833 1.666 3.222 0 5.834-.745 5.834-1.666v-1.89C9.83 8.263 6.67 8.334 5.833 8.334zM14.584 14.167c2.991 0 5.416-.747 5.416-1.667s-2.425-1.667-5.416-1.667c-2.992 0-5.417.746-5.417 1.667 0 .92 2.425 1.667 5.417 1.667zM14.584 17.083c2.991 0 5.416-.745 5.416-1.666V14.36c-1.705.985-4.64 1.056-5.416 1.056-.777 0-3.712-.072-5.417-1.056v1.056c0 .92 2.425 1.666 5.417 1.666zM14.584 18.333c-.777 0-3.712-.071-5.417-1.055v1.055c0 .921 2.425 1.667 5.417 1.667C17.575 20 20 19.254 20 18.333v-1.055c-1.705.984-4.64 1.055-5.416 1.055z" />
        </g>
        <defs>
          <clipPath id="8awn52xjka">
            <path fill="#fff" d="M0 0h20v20H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
    imgcName: "Vector",
    imgBoxcName: "Rectangle-2659 ",
    imgTitlecName: "Investor",
  },
  {
    title: "Offerings",
    path: "/offerings",
    icon: ({ color }) => (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#g4mewqymia)" fill={color}>
          <path d="M21.471 11.798a.674.674 0 0 1 0-.596l.858-1.755c.478-.977.1-2.141-.862-2.651l-1.725-.916a.674.674 0 0 1-.35-.482l-.338-1.923a1.997 1.997 0 0 0-2.255-1.64l-1.934.274a.674.674 0 0 1-.567-.184L12.895.567a1.997 1.997 0 0 0-2.788 0L8.703 1.925a.674.674 0 0 1-.567.185l-1.934-.274a1.996 1.996 0 0 0-2.255 1.639l-.338 1.923a.674.674 0 0 1-.35.482l-1.725.916a1.997 1.997 0 0 0-.862 2.651l.858 1.755a.674.674 0 0 1 0 .596l-.858 1.755c-.478.977-.1 2.142.862 2.651l1.725.916a.674.674 0 0 1 .35.482l.338 1.924a1.995 1.995 0 0 0 2.255 1.638l1.934-.273a.674.674 0 0 1 .567.184l1.404 1.358a1.998 1.998 0 0 0 2.787 0l1.404-1.358a.675.675 0 0 1 .567-.184l1.934.273a1.996 1.996 0 0 0 2.255-1.638l.338-1.924a.675.675 0 0 1 .35-.482l1.725-.916c.961-.51 1.34-1.674.862-2.651l-.858-1.755zM8.847 5.531a2.435 2.435 0 0 1 2.432 2.432 2.435 2.435 0 0 1-2.432 2.432 2.435 2.435 0 0 1-2.432-2.432A2.435 2.435 0 0 1 8.847 5.53zM7.592 16.346a.661.661 0 0 1-.938 0 .663.663 0 0 1 0-.938l8.755-8.754a.663.663 0 0 1 .938.938l-8.755 8.754zm6.561 1.124a2.435 2.435 0 0 1-2.431-2.432 2.435 2.435 0 0 1 2.431-2.433 2.435 2.435 0 0 1 2.432 2.432 2.435 2.435 0 0 1-2.432 2.433z" />
          <path d="M14.153 13.932a1.107 1.107 0 0 0 0 2.211 1.107 1.107 0 0 0 0-2.21zM8.847 6.857a1.107 1.107 0 0 0 0 2.21c.61 0 1.105-.495 1.105-1.105s-.496-1.105-1.105-1.105z" />
        </g>
        <defs>
          <clipPath id="g4mewqymia">
            <path fill="#fff" d="M0 0h23v23H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
    imgcName: "Vector",
    imgBoxcName: "Rectangle-2660",
    imgTitlecName: "Offferings",
  },
  {
    title: "Reporting",
    path: "/reporting",
    icon: ({ color }) => (
      <svg
        width="17"
        height="23"
        viewBox="0 0 17 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="2" width="17" height="21" rx="2" fill={color} />
        <rect x="3" width="11" height="4" rx="1" fill="#F1F5FF" />
        <rect x="4" width="9" height="3" rx="1" fill={color} />
        <path
          stroke="#fff"
          stroke-linecap="round"
          d="M2.5 12.5h8M2.5 9.5h5M2.5 15.5h11M2.5 18.5h11"
        />
      </svg>
    ),
    imgcName: "Line-32",
    imgBoxcName: "Rectangle-2661",
    imgTitlecName: "Reporting",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: ({ color }) => (
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.692 0H2.308c-.612 0-1.2.24-1.632.668A2.266 2.266 0 0 0 0 2.28v14.44c0 .605.243 1.185.676 1.612.433.428 1.02.668 1.632.668h15.384c.612 0 1.2-.24 1.632-.668A2.266 2.266 0 0 0 20 16.72V2.28c0-.605-.243-1.185-.676-1.612A2.322 2.322 0 0 0 17.692 0zM3.904 7.893a.752.752 0 0 1 .17-.829l2.307-2.28a.775.775 0 0 1 1.044.04.756.756 0 0 1 .04 1.032l-.992.984H15c.204 0 .4.08.544.223a.755.755 0 0 1 0 1.074.774.774 0 0 1-.544.223H4.615a.776.776 0 0 1-.711-.467zm12.407 4.423-2.307 2.28a.767.767 0 0 1-.555.265.778.778 0 0 1-.573-.222.758.758 0 0 1-.149-.868.762.762 0 0 1 .192-.247l.992-.984H5.386c-.204 0-.4-.08-.544-.223a.755.755 0 0 1 0-1.074.774.774 0 0 1 .544-.223h10.384a.776.776 0 0 1 .712.467.751.751 0 0 1-.17.829z"
          fill={color}
        />
      </svg>
    ),
    imgcName: "Vector",
    imgBoxcName: "Rectangle-2662",
    imgTitlecName: "Transactions",
  },
];

function SideBar() {
  const [sidebar, setSidebar] = useState(true);
  const [currentLink, setCurrentLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    const changeLink = () => {
      setCurrentLink(window.location.pathname);
    };
    changeLink();
    
  }, [location]);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="flex z-50 bg-[#F8FBFF] shadow-sm flex-col p-5 pr-0 relative transform transition-all ease-in-out duration-300 justify-between">
      {sidebar ? (
        <div className="w-48 h-40">
          <img src={images.Logo} alt="logo" />
        </div>
      ) : (
        <div className="h-40 w-auto">
          <img src={images.CollapsedLogo} alt="logo" className="w-10" />
        </div>
      )}
      <span
        onClick={showSidebar}
        className="border-[#E7EAF3] cursor-pointer -right-5 top-24 absolute p-2 bg-white border px-4 rounded-md"
      >
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          className={`transform transition-all ease-in-out duration-300 ${
            sidebar ? "rotate-0" : "rotate-180"
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 14L2 8L7 2"
            stroke="#557AFF"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      {/* 
          <div className='Rectangle-2712'>
            <img src={images.Arrow32} alt='arrow' />
          </div> 
      */}
      <div className="flex flex-col">
        {Sidebar.map((item) => {
          return (
            <Link to={item.path} key={item.title}>
              <div
                className={`flex items-center ${
                  currentLink === item.path &&
                  "border-r-[#557AFF] border-transparent border-4"
                } mb-8 cursor-pointer`}
              >
                <span
                  className={`flex p-4 h-12 w-12 items-center justify-center rounded-md mr-2 ${
                    currentLink === item.path ? "bg-[#557AFF]" : "bg-[#E8EEFF]"
                  }`}
                >
                  {/* <img src={item.icon} className="h-6 w-6" /> */}
                  <item.icon
                    color={currentLink === item.path ? "#fff" : "#557AFF"}
                  />
                </span>
                {sidebar && (
                  <span
                    className={`${
                      currentLink === item.path
                        ? "text-black"
                        : "text-[#9494A5]"
                    } font-semibold`}
                  >
                    {item.title}
                  </span>
                )}
                {/* <div className='Rectangle7'>
                  <img src={images.headphones} alt ='Headphones' className='Vector' />
                  <span className='support'>24/7 Support</span>
                </div> */}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-1"></div>
      <div
        className={`flex items-center bg-[#557AFF1A] mr-3 rounded-md cursor-pointer`}
      >
        <span
          className={`flex p-4 h-12 w-12 items-center justify-center rounded-md mr-2`}
        >
          {/* <img src={item.icon} className="h-6 w-6" /> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
              stroke="#557AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
              stroke="#557AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        {sidebar && (
          <span className={`text-[#557AFF] font-semibold`}>24/7 Support</span>
        )}
        {/* <div className='Rectangle7'>
                  <img src={images.headphones} alt ='Headphones' className='Vector' />
                  <span className='support'>24/7 Support</span>
                </div> */}
      </div>
    </div>
  );
}

export default SideBar;
