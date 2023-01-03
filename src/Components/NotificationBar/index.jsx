import React from "react";

const notificationData = [
  {
    id: 1,
    title: "Market Data",
    description:
      "Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.",
    bgColor: "#F7F9FF",
    color: "#557AFF",
  },
  {
    id: 2,
    title: "Market Data",
    description:
      "Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.",
    bgColor: "#FFFCF8",
    color: "#ED9C3A",
  },
  {
    id: 3,
    title: "Market Data",
    description:
      "Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.",
    bgColor: "#F8F7FF",
    color: "#8B55FF",
  },
  {
    id: 4,
    title: "Market Data",
    description:
      "Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.",
    bgColor: "#F4FCFF",
    color: "#55ADFF",
  },
];

export default function NotificationBar() {
  return (
    <div className="flex w-80 z-50 h-full p-2  flex-col">
      <div className="flex flex-col  bg-[#F8FBFF] rounded-xl w-full">
        <span className="pb-2 p-3 px-5 border-b border-dashed">
          Your Manager
        </span>
        <div className="flex flex-col p-3">
          <div className="flex items-center">
            <span className="flex w-12 h-12 bg-[#E8EEFF] items-center justify-center rounded-lg">
              MN
            </span>
            <span className="flex ml-2">Manager Name</span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center justify-center w-12 h-12">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 1H15C15.825 1 16.5 1.675 16.5 2.5V11.5C16.5 12.325 15.825 13 15 13H3C2.175 13 1.5 12.325 1.5 11.5V2.5C1.5 1.675 2.175 1 3 1Z"
                  stroke="#636F86"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <span className="flex ml-2 text-[#636F86] text-sm">
              managername17@gmail.com
            </span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center justify-center w-12 h-9">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5001 12.6901V14.9401C16.5009 15.1489 16.4581 15.3557 16.3745 15.5471C16.2908 15.7385 16.168 15.9103 16.0141 16.0515C15.8602 16.1927 15.6785 16.3002 15.4806 16.3671C15.2828 16.434 15.0731 16.4589 14.8651 16.4401C12.5572 16.1893 10.3403 15.4007 8.39257 14.1376C6.58044 12.9861 5.04407 11.4497 3.89257 9.63757C2.62506 7.68098 1.83625 5.45332 1.59007 3.13507C1.57133 2.92767 1.59598 2.71864 1.66245 2.52129C1.72892 2.32394 1.83575 2.14259 1.97615 1.98879C2.11654 1.83499 2.28743 1.7121 2.47792 1.62796C2.6684 1.54382 2.87433 1.50027 3.08257 1.50007H5.33257C5.69655 1.49649 6.04942 1.62538 6.32539 1.86272C6.60137 2.10006 6.78163 2.42966 6.83257 2.79007C6.92754 3.51012 7.10366 4.21712 7.35757 4.89757C7.45848 5.16602 7.48032 5.45776 7.4205 5.73823C7.36069 6.01871 7.22172 6.27616 7.02007 6.48007L6.06757 7.43257C7.13524 9.31023 8.68991 10.8649 10.5676 11.9326L11.5201 10.9801C11.724 10.7784 11.9814 10.6395 12.2619 10.5796C12.5424 10.5198 12.8341 10.5417 13.1026 10.6426C13.783 10.8965 14.49 11.0726 15.2101 11.1676C15.5744 11.219 15.9071 11.4025 16.145 11.6832C16.3828 11.9639 16.5092 12.3223 16.5001 12.6901Z"
                  stroke="#636F86"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <span className="flex ml-2 text-[#636F86] text-sm">
              +919876543210
            </span>
          </div>
        </div>
      </div>

      <span className="font-bold text-xl px-5 my-5">Market Insights</span>
      <div className="flex flex-col">
        {notificationData.map((notification) => (
          <div
            key={notification.id}
            className={`flex w-full flex-col mb-5 rounded-xl p-5 text-xl font-semibold`}
            style={{
              backgroundColor: notification.bgColor,
            }}
          >
            <span>{notification.title}</span>
            <span className=" text-base mt-2 tracking-wide">
              {notification.description}
            </span>
            <span
              className={`mt-3 flex text-base items-center`}
              style={{ color: notification.color }}
            >
              Read More{" "}
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                className="ml-3 mt-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4596 5.45962C15.7135 5.20578 15.7135 4.79422 15.4596 4.54038L11.323 0.403808C11.0692 0.149967 10.6576 0.149967 10.4038 0.403808C10.15 0.657648 10.15 1.06921 10.4038 1.32305L14.0808 5L10.4038 8.67696C10.15 8.9308 10.15 9.34235 10.4038 9.5962C10.6576 9.85004 11.0692 9.85004 11.323 9.5962L15.4596 5.45962ZM-8.71313e-08 5.65L15 5.65L15 4.35L8.71313e-08 4.35L-8.71313e-08 5.65Z"
                  fill={notification.color}
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
