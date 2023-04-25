import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      fill="none"
      viewBox="0 0 46 46"
    >
      <g filter="url(#filter0_dd_38_75)">
        <circle cx="23" cy="22" r="20" fill="#070148"></circle>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M24.6 15.269l-3.2 3.2V28.73l3.2-3.2V15.27zM17.966 16.634a.8.8 0 00-1.366.566v8a.8.8 0 00.234.566L19.8 28.73V18.47l-1.834-1.835zM29.166 18.234L26.2 15.27V25.53l1.834 1.835A.8.8 0 0029.4 26.8v-8a.8.8 0 00-.234-.566z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_dd_38_75"
          width="46"
          height="46"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_38_75"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_38_75"
            result="effect2_dropShadow_38_75"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_38_75"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
