export default class SVGCreator {
  static info = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <g class="Info" clip-path="url(#a)">
            <g class="icon">
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" class="Vector"/>
            <path d="M15 15H16V22H17M16 10V11" class="Vector"/>
            </g>
        </g>
        <defs>
            <clipPath id="a" class="a">
            <path fill="#fff" d="M0 0H32V32H0z"/>
            </clipPath>
        </defs>
    </svg>
  `;

  static warning = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <g class="Warning" clip-path="url(#a)">
    <g class="icon">
      <path d="M16 13V18M14.275 5 3.275 24C3.1 24.304 3.007 24.648 3.007 24.998 3.007 25.349 3.099 25.693 3.273 25.997 3.448 26.301 3.699 26.553 4.003 26.729 4.306 26.906 4.65 26.999 5 27H27C27.351 26.999 27.695 26.906 27.998 26.729 28.301 26.553 28.552 26.301 28.727 25.997 28.902 25.693 28.993 25.349 28.993 24.998 28.993 24.648 28.9 24.304 28.725 24L17.725 5C17.551 4.696 17.3 4.444 16.997 4.268 16.694 4.092 16.35 4 16 4 15.65 4 15.306 4.092 15.003 4.268 14.7 4.444 14.449 4.696 14.275 5V5ZM16 22V23" class="Vector"/>
    </g>
  </g>
  <defs>
    <clipPath id="a" class="a">
      <path fill="#fff" d="M0 0H32V32H0z"/>
    </clipPath>
  </defs>
</svg>

  `;

  static error = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <g class="WarningOctagon" clip-path="url(#a)">
            <g class="icon">
            <path d="M16 10V17" class="Vector"/>
            <path d="M20.9706 4L28 11.0294V20.9706L20.9706 28H11.0294L4 20.9706L4 11.0294L11.0294 4L20.9706 4Z" class="Path"/>
            <path d="M16 21V22" class="Vector"/>
            </g>
        </g>
        <defs>
            <clipPath id="a" class="a">
            <path fill="#fff" d="M0 0H32V32H0z"/>
            </clipPath>
        </defs>
    </svg>
  `;

  static mapPin = `
    <svg width="42" height="54" viewBox="0 0 42 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_244_8096)">
        <mask id="path-1-outside-1_244_8096" maskUnits="userSpaceOnUse" x="6" y="7" width="30" height="42" fill="black">
          <rect fill="white" x="6" y="7" width="30" height="42"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6433 21.8217C34.6433 21.8712 34.6431 21.9207 34.6425 21.9701C34.5382 37.2486 20.8787 47.9552 20.8217 47.9998V48L20.8216 47.9999L20.8215 48V47.9998C20.7643 47.9551 7.06331 37.2159 7.00022 21.9002L7 21.8217L7 21.8099L7 21.7941H7.00003C7.01489 14.1733 13.1974 8 20.8217 8C28.4551 8 34.6433 14.1882 34.6433 21.8217ZM25.3413 21.8218C25.3413 24.3179 23.3178 26.3415 20.8217 26.3415C18.3255 26.3415 16.302 24.3179 16.302 21.8218C16.302 19.3256 18.3255 17.3021 20.8217 17.3021C23.3178 17.3021 25.3413 19.3256 25.3413 21.8218Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6433 21.8217C34.6433 21.8712 34.6431 21.9207 34.6425 21.9701C34.5382 37.2486 20.8787 47.9552 20.8217 47.9998V48L20.8216 47.9999L20.8215 48V47.9998C20.7643 47.9551 7.06331 37.2159 7.00022 21.9002L7 21.8217L7 21.8099L7 21.7941H7.00003C7.01489 14.1733 13.1974 8 20.8217 8C28.4551 8 34.6433 14.1882 34.6433 21.8217ZM25.3413 21.8218C25.3413 24.3179 23.3178 26.3415 20.8217 26.3415C18.3255 26.3415 16.302 24.3179 16.302 21.8218C16.302 19.3256 18.3255 17.3021 20.8217 17.3021C23.3178 17.3021 25.3413 19.3256 25.3413 21.8218Z" fill="#F59E0B"/>
        <path d="M34.6425 21.9701L33.6426 21.9596L33.6426 21.9632L34.6425 21.9701ZM20.8217 47.9998L20.2053 47.2124C19.9631 47.4019 19.8217 47.6923 19.8217 47.9998H20.8217ZM20.8217 48L20.2095 48.7907C20.5112 49.0243 20.9195 49.0658 21.262 48.8978C21.6046 48.7298 21.8217 48.3815 21.8217 48H20.8217ZM20.8216 47.9999L21.4337 47.2092C21.0763 46.9325 20.5778 46.9299 20.2175 47.2029L20.8216 47.9999ZM20.8215 48H19.8215C19.8215 48.3797 20.0365 48.7266 20.3765 48.8955C20.7165 49.0645 21.1229 49.0263 21.4255 48.797L20.8215 48ZM20.8215 47.9998H21.8215C21.8215 47.6923 21.68 47.4019 21.4378 47.2124L20.8215 47.9998ZM7.00022 21.9002L6.00022 21.903L6.00023 21.9043L7.00022 21.9002ZM7 21.8217L5.99999 21.8212L6 21.8244L7 21.8217ZM7 21.8099L8.00001 21.8104L8 21.8096L7 21.8099ZM7 21.7941V20.7941C6.73473 20.7941 6.48033 20.8995 6.29278 21.0871C6.10524 21.2747 5.99992 21.5291 6 21.7944L7 21.7941ZM7.00003 21.7941V22.7941C7.55155 22.7941 7.99895 22.3476 8.00002 21.7961L7.00003 21.7941ZM35.6425 21.9806C35.643 21.9277 35.6433 21.8747 35.6433 21.8217H33.6433C33.6433 21.8677 33.6431 21.9136 33.6426 21.9596L35.6425 21.9806ZM21.438 48.7873C21.5042 48.7355 25.0075 45.9857 28.5151 41.2966C32.0176 36.6144 35.5883 29.9124 35.6425 21.9769L33.6426 21.9632C33.5924 29.3062 30.2812 35.5968 26.9136 40.0986C23.5512 44.5937 20.1962 47.2195 20.2053 47.2124L21.438 48.7873ZM21.8217 48V47.9998H19.8217V48H21.8217ZM20.2094 48.7906L20.2095 48.7907L21.4338 47.2093L21.4337 47.2092L20.2094 48.7906ZM21.4255 48.797L21.4256 48.7969L20.2175 47.2029L20.2175 47.203L21.4255 48.797ZM19.8215 47.9998V48H21.8215V47.9998H19.8215ZM6.00023 21.9043C6.033 29.8595 9.60407 36.5798 13.112 41.2752C16.625 45.9774 20.1388 48.7354 20.2051 48.7873L21.4378 47.2124C21.447 47.2195 18.0817 44.5856 14.7142 40.0781C11.3415 35.5638 8.03053 29.2566 8.00021 21.8961L6.00023 21.9043ZM6 21.8244L6.00022 21.903L8.00021 21.8974L8 21.8189L6 21.8244ZM6 21.8095L6 21.8212L8 21.8221L8 21.8104L6 21.8095ZM6 21.7944L6 21.8102L8 21.8096L8 21.7938L6 21.7944ZM7.00003 20.7941H7V22.7941H7.00003V20.7941ZM20.8217 7C12.6457 7 6.01597 13.6199 6.00003 21.7922L8.00002 21.7961C8.01382 14.7266 13.749 9 20.8217 9V7ZM35.6433 21.8217C35.6433 13.6359 29.0074 7 20.8217 7V9C27.9029 9 33.6433 14.7405 33.6433 21.8217H35.6433ZM20.8217 27.3415C23.8701 27.3415 26.3413 24.8702 26.3413 21.8218H24.3413C24.3413 23.7656 22.7655 25.3415 20.8217 25.3415V27.3415ZM15.302 21.8218C15.302 24.8702 17.7732 27.3415 20.8217 27.3415V25.3415C18.8778 25.3415 17.302 23.7656 17.302 21.8218H15.302ZM20.8217 16.3021C17.7732 16.3021 15.302 18.7733 15.302 21.8218H17.302C17.302 19.8779 18.8778 18.3021 20.8217 18.3021V16.3021ZM26.3413 21.8218C26.3413 18.7733 23.8701 16.3021 20.8217 16.3021V18.3021C22.7655 18.3021 24.3413 19.8779 24.3413 21.8218H26.3413Z" fill="white" mask="url(#path-1-outside-1_244_8096)"/>
      </g>
      <mask id="path-3-inside-2_244_8096" fill="white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6433 21.8217C34.6433 21.8712 34.6431 21.9207 34.6425 21.9701C34.5382 37.2486 20.8787 47.9552 20.8217 47.9998V48L20.8216 47.9999L20.8215 48V47.9998C20.7643 47.9551 7.06331 37.2159 7.00022 21.9002L7 21.8217L7 21.8099L7 21.7941H7.00003C7.01489 14.1733 13.1974 8 20.8217 8C28.4551 8 34.6433 14.1882 34.6433 21.8217ZM25.3413 21.8218C25.3413 24.3179 23.3178 26.3415 20.8217 26.3415C18.3255 26.3415 16.302 24.3179 16.302 21.8218C16.302 19.3256 18.3255 17.3021 20.8217 17.3021C23.3178 17.3021 25.3413 19.3256 25.3413 21.8218Z"/>
      </mask>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6433 21.8217C34.6433 21.8712 34.6431 21.9207 34.6425 21.9701C34.5382 37.2486 20.8787 47.9552 20.8217 47.9998V48L20.8216 47.9999L20.8215 48V47.9998C20.7643 47.9551 7.06331 37.2159 7.00022 21.9002L7 21.8217L7 21.8099L7 21.7941H7.00003C7.01489 14.1733 13.1974 8 20.8217 8C28.4551 8 34.6433 14.1882 34.6433 21.8217ZM25.3413 21.8218C25.3413 24.3179 23.3178 26.3415 20.8217 26.3415C18.3255 26.3415 16.302 24.3179 16.302 21.8218C16.302 19.3256 18.3255 17.3021 20.8217 17.3021C23.3178 17.3021 25.3413 19.3256 25.3413 21.8218Z" fill="#3B82F6"/>
      <path d="M34.6425 21.9701L32.6426 21.9491L32.6426 21.9564L34.6425 21.9701ZM20.8217 47.9998L19.589 46.4249L18.8217 47.0255V47.9998H20.8217ZM20.8217 48L19.5973 49.5814L22.8217 52.0777V48H20.8217ZM20.8216 47.9999L22.0459 46.4185L20.8345 45.4806L19.6135 46.406L20.8216 47.9999ZM20.8215 48H18.8215V52.0253L22.0295 49.5939L20.8215 48ZM20.8215 47.9998H22.8215V47.0255L22.0542 46.4249L20.8215 47.9998ZM7.00022 21.9002L5.00022 21.9058L5.00024 21.9085L7.00022 21.9002ZM7 21.8217L4.99999 21.8208L5.00001 21.8272L7 21.8217ZM7 21.8099L9.00001 21.8108L9 21.8093L7 21.8099ZM7 21.7941V19.7941H4.99939L5 21.7947L7 21.7941ZM7.00003 21.7941V23.7941H8.99613L9.00002 21.798L7.00003 21.7941ZM36.6424 21.9911C36.643 21.9347 36.6433 21.8782 36.6433 21.8217H32.6433C32.6433 21.8642 32.6431 21.9066 32.6426 21.9491L36.6424 21.9911ZM22.0543 49.5748C22.1583 49.4935 25.7356 46.6818 29.3159 41.8956C32.8858 37.1232 36.5863 30.2156 36.6425 21.9837L32.6426 21.9564C32.5945 29.003 29.413 35.0879 26.1129 39.4996C22.823 43.8976 19.5421 46.4616 19.589 46.4249L22.0543 49.5748ZM22.8217 48V47.9998H18.8217V48H22.8217ZM19.5972 49.5814L19.5973 49.5814L22.046 46.4185L22.0459 46.4185L19.5972 49.5814ZM22.0295 49.5939L22.0296 49.5939L19.6135 46.406L19.6134 46.406L22.0295 49.5939ZM18.8215 47.9998V48H22.8215V47.9998H18.8215ZM5.00024 21.9085C5.03423 30.161 8.73536 37.0878 12.3109 41.8737C15.8966 46.6732 19.4848 49.4934 19.5888 49.5748L22.0542 46.4249C22.101 46.4616 18.8101 43.8898 15.5153 39.4796C12.2102 35.0557 9.0293 28.9552 9.0002 21.892L5.00024 21.9085ZM5.00001 21.8272L5.00023 21.9058L9.00021 21.8947L8.99999 21.8161L5.00001 21.8272ZM5.00001 21.8091L5 21.8208L9 21.8225L9 21.8108L5.00001 21.8091ZM5 21.7947L5.00001 21.8105L9 21.8093L9 21.7935L5 21.7947ZM7.00003 19.7941H7V23.7941H7.00003V19.7941ZM20.8217 6C12.0941 6 5.01705 13.0666 5.00003 21.7902L9.00002 21.798C9.01274 15.28 14.3006 10 20.8217 10V6ZM36.6433 21.8217C36.6433 13.0836 29.5597 6 20.8217 6V10C27.3506 10 32.6433 15.2927 32.6433 21.8217H36.6433ZM20.8217 28.3415C24.4224 28.3415 27.3413 25.4225 27.3413 21.8218H23.3413C23.3413 23.2134 22.2132 24.3415 20.8217 24.3415V28.3415ZM14.302 21.8218C14.302 25.4225 17.2209 28.3415 20.8217 28.3415V24.3415C19.4301 24.3415 18.302 23.2134 18.302 21.8218H14.302ZM20.8217 15.3021C17.2209 15.3021 14.302 18.2211 14.302 21.8218H18.302C18.302 20.4302 19.4301 19.3021 20.8217 19.3021V15.3021ZM27.3413 21.8218C27.3413 18.2211 24.4224 15.3021 20.8217 15.3021V19.3021C22.2132 19.3021 23.3413 20.4302 23.3413 21.8218H27.3413Z" fill="#2563EB" mask="url(#path-3-inside-2_244_8096)"/>
      <defs>
        <filter id="filter0_d_244_8096" x="0" y="0" width="41.6436" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-1"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_244_8096"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_244_8096" result="shape"/>
        </filter>
      </defs>
    </svg>

  `;

  static mapPinSelect = `
  <svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_429_5817)">
      <mask id="path-1-outside-1_429_5817" maskUnits="userSpaceOnUse" x="6" y="7" width="32" height="44" fill="black">
        <rect fill="white" x="6" y="7" width="32" height="44"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6433 22.8217C35.6433 22.8712 35.6431 22.9207 35.6425 22.9701C35.5382 38.2486 21.8787 48.9552 21.8217 48.9998V49L21.8216 48.9999L21.8215 49V48.9998C21.7643 48.9551 8.06331 38.2159 8.00022 22.9002L8 22.8217L8 22.8099L8 22.7941H8.00003C8.01489 15.1733 14.1974 9 21.8217 9C29.4551 9 35.6433 15.1882 35.6433 22.8217ZM26.3413 22.8218C26.3413 25.3179 24.3178 27.3415 21.8217 27.3415C19.3255 27.3415 17.302 25.3179 17.302 22.8218C17.302 20.3256 19.3255 18.3021 21.8217 18.3021C24.3178 18.3021 26.3413 20.3256 26.3413 22.8218Z"/>
      </mask>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6433 22.8217C35.6433 22.8712 35.6431 22.9207 35.6425 22.9701C35.5382 38.2486 21.8787 48.9552 21.8217 48.9998V49L21.8216 48.9999L21.8215 49V48.9998C21.7643 48.9551 8.06331 38.2159 8.00022 22.9002L8 22.8217L8 22.8099L8 22.7941H8.00003C8.01489 15.1733 14.1974 9 21.8217 9C29.4551 9 35.6433 15.1882 35.6433 22.8217ZM26.3413 22.8218C26.3413 25.3179 24.3178 27.3415 21.8217 27.3415C19.3255 27.3415 17.302 25.3179 17.302 22.8218C17.302 20.3256 19.3255 18.3021 21.8217 18.3021C24.3178 18.3021 26.3413 20.3256 26.3413 22.8218Z" fill="#F59E0B"/>
      <path d="M35.6425 22.9701L33.6426 22.9491L33.6426 22.9564L35.6425 22.9701ZM21.8217 48.9998L20.589 47.4249C20.1046 47.804 19.8217 48.3848 19.8217 48.9998H21.8217ZM21.8217 49L20.5973 50.5814C21.2007 51.0486 22.0173 51.1316 22.7024 50.7956C23.3875 50.4596 23.8217 49.763 23.8217 49H21.8217ZM21.8216 48.9999L23.0459 47.4185C22.3311 46.8651 21.334 46.86 20.6135 47.406L21.8216 48.9999ZM21.8215 49H19.8215C19.8215 49.7593 20.2515 50.4532 20.9316 50.7911C21.6116 51.129 22.4243 51.0526 23.0295 50.5939L21.8215 49ZM21.8215 48.9998H23.8215C23.8215 48.3848 23.5385 47.804 23.0542 47.4249L21.8215 48.9998ZM8.00022 22.9002L6.00022 22.9058L6.00024 22.9085L8.00022 22.9002ZM8 22.8217L5.99999 22.8208L6.00001 22.8272L8 22.8217ZM8 22.8099L10 22.8108L10 22.8093L8 22.8099ZM8 22.7941V20.7941C7.46946 20.7941 6.96066 21.0049 6.58557 21.3801C6.21048 21.7553 5.99984 22.2642 6 22.7947L8 22.7941ZM8.00003 22.7941V24.7941C9.10307 24.7941 9.99787 23.9011 10 22.798L8.00003 22.7941ZM37.6424 22.9911C37.643 22.9347 37.6433 22.8782 37.6433 22.8217H33.6433C33.6433 22.8642 33.6431 22.9066 33.6426 22.9491L37.6424 22.9911ZM23.0543 50.5748C23.1583 50.4935 26.7356 47.6818 30.3159 42.8956C33.8858 38.1232 37.5863 31.2156 37.6425 22.9837L33.6426 22.9564C33.5945 30.003 30.413 36.0879 27.1129 40.4996C23.823 44.8976 20.5421 47.4616 20.589 47.4249L23.0543 50.5748ZM23.8217 49V48.9998H19.8217V49H23.8217ZM20.5972 50.5814L20.5973 50.5814L23.046 47.4185L23.0459 47.4185L20.5972 50.5814ZM23.0295 50.5939L23.0296 50.5939L20.6135 47.406L20.6134 47.406L23.0295 50.5939ZM19.8215 48.9998V49H23.8215V48.9998H19.8215ZM6.00024 22.9085C6.03423 31.161 9.73536 38.0878 13.3109 42.8737C16.8966 47.6732 20.4848 50.4934 20.5888 50.5748L23.0542 47.4249C23.101 47.4616 19.8101 44.8898 16.5153 40.4796C13.2102 36.0557 10.0293 29.9552 10.0002 22.892L6.00024 22.9085ZM6.00001 22.8272L6.00023 22.9058L10.0002 22.8947L9.99999 22.8161L6.00001 22.8272ZM6.00001 22.8091L6 22.8208L10 22.8225L10 22.8108L6.00001 22.8091ZM6 22.7947L6.00001 22.8105L10 22.8093L10 22.7935L6 22.7947ZM8.00003 20.7941H8V24.7941H8.00003V20.7941ZM21.8217 7C13.0941 7 6.01705 14.0666 6.00003 22.7902L10 22.798C10.0127 16.28 15.3006 11 21.8217 11V7ZM37.6433 22.8217C37.6433 14.0836 30.5597 7 21.8217 7V11C28.3506 11 33.6433 16.2927 33.6433 22.8217H37.6433ZM21.8217 29.3415C25.4224 29.3415 28.3413 26.4225 28.3413 22.8218H24.3413C24.3413 24.2134 23.2132 25.3415 21.8217 25.3415V29.3415ZM15.302 22.8218C15.302 26.4225 18.2209 29.3415 21.8217 29.3415V25.3415C20.4301 25.3415 19.302 24.2134 19.302 22.8218H15.302ZM21.8217 16.3021C18.2209 16.3021 15.302 19.2211 15.302 22.8218H19.302C19.302 21.4302 20.4301 20.3021 21.8217 20.3021V16.3021ZM28.3413 22.8218C28.3413 19.2211 25.4224 16.3021 21.8217 16.3021V20.3021C23.2132 20.3021 24.3413 21.4302 24.3413 22.8218H28.3413Z" fill="white" mask="url(#path-1-outside-1_429_5817)"/>
    </g>
    <mask id="path-3-inside-2_429_5817" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6433 22.8217C35.6433 22.8712 35.6431 22.9207 35.6425 22.9701C35.5382 38.2486 21.8787 48.9552 21.8217 48.9998V49L21.8216 48.9999L21.8215 49V48.9998C21.7643 48.9551 8.06331 38.2159 8.00022 22.9002L8 22.8217L8 22.8099L8 22.7941H8.00003C8.01489 15.1733 14.1974 9 21.8217 9C29.4551 9 35.6433 15.1882 35.6433 22.8217ZM26.3413 22.8218C26.3413 25.3179 24.3178 27.3415 21.8217 27.3415C19.3255 27.3415 17.302 25.3179 17.302 22.8218C17.302 20.3256 19.3255 18.3021 21.8217 18.3021C24.3178 18.3021 26.3413 20.3256 26.3413 22.8218Z"/>
    </mask>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6433 22.8217C35.6433 22.8712 35.6431 22.9207 35.6425 22.9701C35.5382 38.2486 21.8787 48.9552 21.8217 48.9998V49L21.8216 48.9999L21.8215 49V48.9998C21.7643 48.9551 8.06331 38.2159 8.00022 22.9002L8 22.8217L8 22.8099L8 22.7941H8.00003C8.01489 15.1733 14.1974 9 21.8217 9C29.4551 9 35.6433 15.1882 35.6433 22.8217ZM26.3413 22.8218C26.3413 25.3179 24.3178 27.3415 21.8217 27.3415C19.3255 27.3415 17.302 25.3179 17.302 22.8218C17.302 20.3256 19.3255 18.3021 21.8217 18.3021C24.3178 18.3021 26.3413 20.3256 26.3413 22.8218Z" fill="#EF4444"/>
    <path d="M35.6425 22.9701L33.6426 22.9491L33.6426 22.9564L35.6425 22.9701ZM21.8217 48.9998L20.589 47.4249L19.8217 48.0255V48.9998H21.8217ZM21.8217 49L20.5973 50.5814L23.8217 53.0777V49H21.8217ZM21.8216 48.9999L23.0459 47.4185L21.8345 46.4806L20.6135 47.406L21.8216 48.9999ZM21.8215 49H19.8215V53.0253L23.0295 50.5939L21.8215 49ZM21.8215 48.9998H23.8215V48.0255L23.0542 47.4249L21.8215 48.9998ZM8.00022 22.9002L6.00022 22.9058L6.00024 22.9085L8.00022 22.9002ZM8 22.8217L5.99999 22.8208L6.00001 22.8272L8 22.8217ZM8 22.8099L10 22.8108L10 22.8093L8 22.8099ZM8 22.7941V20.7941H5.99939L6 22.7947L8 22.7941ZM8.00003 22.7941V24.7941H9.99613L10 22.798L8.00003 22.7941ZM37.6424 22.9911C37.643 22.9347 37.6433 22.8782 37.6433 22.8217H33.6433C33.6433 22.8642 33.6431 22.9066 33.6426 22.9491L37.6424 22.9911ZM23.0543 50.5748C23.1583 50.4935 26.7356 47.6818 30.3159 42.8956C33.8858 38.1232 37.5863 31.2156 37.6425 22.9837L33.6426 22.9564C33.5945 30.003 30.413 36.0879 27.1129 40.4996C23.823 44.8976 20.5421 47.4616 20.589 47.4249L23.0543 50.5748ZM23.8217 49V48.9998H19.8217V49H23.8217ZM20.5972 50.5814L20.5973 50.5814L23.046 47.4185L23.0459 47.4185L20.5972 50.5814ZM23.0295 50.5939L23.0296 50.5939L20.6135 47.406L20.6134 47.406L23.0295 50.5939ZM19.8215 48.9998V49H23.8215V48.9998H19.8215ZM6.00024 22.9085C6.03423 31.161 9.73536 38.0878 13.3109 42.8737C16.8966 47.6732 20.4848 50.4934 20.5888 50.5748L23.0542 47.4249C23.101 47.4616 19.8101 44.8898 16.5153 40.4796C13.2102 36.0557 10.0293 29.9552 10.0002 22.892L6.00024 22.9085ZM6.00001 22.8272L6.00023 22.9058L10.0002 22.8947L9.99999 22.8161L6.00001 22.8272ZM6.00001 22.8091L6 22.8208L10 22.8225L10 22.8108L6.00001 22.8091ZM6 22.7947L6.00001 22.8105L10 22.8093L10 22.7935L6 22.7947ZM8.00003 20.7941H8V24.7941H8.00003V20.7941ZM21.8217 7C13.0941 7 6.01705 14.0666 6.00003 22.7902L10 22.798C10.0127 16.28 15.3006 11 21.8217 11V7ZM37.6433 22.8217C37.6433 14.0836 30.5597 7 21.8217 7V11C28.3506 11 33.6433 16.2927 33.6433 22.8217H37.6433ZM21.8217 29.3415C25.4224 29.3415 28.3413 26.4225 28.3413 22.8218H24.3413C24.3413 24.2134 23.2132 25.3415 21.8217 25.3415V29.3415ZM15.302 22.8218C15.302 26.4225 18.2209 29.3415 21.8217 29.3415V25.3415C20.4301 25.3415 19.302 24.2134 19.302 22.8218H15.302ZM21.8217 16.3021C18.2209 16.3021 15.302 19.2211 15.302 22.8218H19.302C19.302 21.4302 20.4301 20.3021 21.8217 20.3021V16.3021ZM28.3413 22.8218C28.3413 19.2211 25.4224 16.3021 21.8217 16.3021V20.3021C23.2132 20.3021 24.3413 21.4302 24.3413 22.8218H28.3413Z" fill="#DC2626" mask="url(#path-3-inside-2_429_5817)"/>
    <defs>
      <filter id="filter0_d_429_5817" x="0" y="0" width="43.6433" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-1"/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_429_5817"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_429_5817" result="shape"/>
      </filter>
    </defs>
    </svg>
  `;

  static information = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="dfasdfs">
      <g class="Info" clip-path="url(#a)">
        <g class="icon">
          <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" class="Vector"/>
          <path d="M15 15H16V22H17M16 10V11" class="Vector"/>
        </g>
      </g>
      <defs>
        <clipPath id="a" class="a">
          <path fill="#fff" d="M0 0H32V32H0z"/>
        </clipPath>
      </defs>
    </svg>
  `;

  static geolocation = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g class="CrosshairSimple" clip-path="url(#a)">
        <g class="icon">
          <path d="M16 27.5C22.351 27.5 27.5 22.351 27.5 16 27.5 9.649 22.351 4.5 16 4.5 9.649 4.5 4.5 9.649 4.5 16 4.5 22.351 9.649 27.5 16 27.5ZM16 4.5V9.5M4.5 16H9.5M16 27.5V22.5M27.5 16H22.5" class="Vector"/>
        </g>
      </g>
      <defs>
        <clipPath id="a" class="a">
          <path fill="#fff" d="M0 0H32V32H0z"/>
        </clipPath>
      </defs>
    </svg>
  `;

  static rotation = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g class="North">
        <g class="icon">
          <path d="M12 27.2375L16.2375 23L20.475 27.2375" class="Vector"/>
          <path d="M12 18V7L20.5 18V7" class="Vector 3"/>
        </g>
      </g>
    </svg>
  `;

  static iconRecenter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g class="ArrowsInCardinal" clip-path="url(#a)">
        <g class="icon">
          <path d="M19.537 23.538 16 20 12.462 23.538M16 29V20M12.462 8.462 16 12 19.537 8.462M16 3V12M8.462 19.537 12 16 8.462 12.462M3 16H12M23.538 12.462 20 16 23.538 19.537M29 16H20" class="Vector"/>
        </g>
      </g>
      <defs>
        <clipPath id="a" class="a">
          <path fill="#fff" d="M0 0H32V32H0z"/>
        </clipPath>
      </defs>
    </svg>
  `;

  static iconRemoveSelection = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g class="RemoveSelection">
        <g class="icon">
          <path d="M16 28C22.627 28 28 22.627 28 16 28 9.373 22.627 4 16 4 9.373 4 4 9.373 4 16 4 22.627 9.373 28 16 28ZM20 12 12 20M20 20 12 12" class="Vector"/>
        </g>
      </g>
    </svg>
  `;

  static search = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g class="MagnifyingGlass" clip-path="url(#a)">
        <g class="icon">
          <path d="M14.5 25C20.299 25 25 20.299 25 14.5 25 8.701 20.299 4 14.5 4 8.701 4 4 8.701 4 14.5 4 20.299 8.701 25 14.5 25ZM21.925 21.925 28 28" class="Vector"/>
        </g>
      </g>
      <defs>
        <clipPath id="a" class="a">
          <path fill="#fff" d="M0 0H32V32H0z"/>
        </clipPath>
      </defs>
    </svg>
  `;

  static cross = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g class="X" clip-path="url(#a)">
        <g class="icon">
          <path d="M25 7 7 25M25 25 7 7" class="Vector"/>
        </g>
      </g>
      <defs>
        <clipPath id="a" class="a">
          <path fill="#fff" d="M0 0H32V32H0z"/>
        </clipPath>
      </defs>
    </svg>  
  `;

  static stack = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g class="Stack" clip-path="url(#a)">
        <g class="icon">
          <path d="M4 22L16 29L28 22" class="Vector"/>
          <path d="M4 16L16 23L28 16" class="Vector"/>
          <path d="M4 10L16 17L28 10L16 3L4 10Z" class="Vector"/>
        </g>
      </g>
      <defs>
        <clipPath id="a" class="a">
          <path fill="#fff" d="M0 0H32V32H0z"/>
        </clipPath>
      </defs>
    </svg>
  `;

  static zoomInLabel() {
    const zoomIn = document.createElement('div');
    const icon = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    
    icon.setAttributeNS(null, "width", "32");
    icon.setAttributeNS(null, "height", "32");
    icon.setAttributeNS(null, "viewBox", "0 0 32 32");
    icon.innerHTML = ` 
                      <g class="Plus" clip-path="url(#a)">
                        <g class="icon">
                          <path d="M5 16H27M16 5V27" class="Vector"/>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="a" class="a">
                          <path fill="#fff" d="M0 0H32V32H0z"/>
                        </clipPath>
                      </defs>
                    `;
      zoomIn.appendChild(icon);
      return zoomIn;
  }

  static zoomOutLabel() {
    const zoomOut = document.createElement('div');
    const icon = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    
    icon.setAttributeNS(null, "width", "32");
    icon.setAttributeNS(null, "height", "32");
    icon.setAttributeNS(null, "viewBox", "0 0 32 32");
    icon.innerHTML = ` 
                      <g class="Minus" clip-path="url(#a)">
                      <g class="icon">
                        <path d="M5 16H27" class="Vector"/>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="a" class="a">
                        <path fill="#fff" d="M0 0H32V32H0z"/>
                      </clipPath>
                    </defs>
                    `;
      zoomOut.appendChild(icon);
      return zoomOut;
  }

  static fullScreenLabel() {
    const fullscreen = document.createElement('div');
    const icon = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    
    icon.setAttributeNS(null, "width", "32");
    icon.setAttributeNS(null, "height", "32");
    icon.setAttributeNS(null, "viewBox", "0 0 32 32");
    icon.innerHTML = ` 
                      <g class="ArrowsOut" clip-path="url(#a)">
                        <g class="icon">
                          <path d="M21 6H26V11M19 13 26 6M11 26H6V21M13 19 6 26M26 21V26H21M19 19 26 26M6 11V6H11M13 13 6 6" class="Vector"/>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="a" class="a">
                          <path fill="#fff" d="M0 0H32V32H0z"/>
                        </clipPath>
                      </defs>
                    `;
      fullscreen.appendChild(icon);
      return fullscreen;
  }

  static fullScreenLabelActive() {
    const fullscreen = document.createElement('div');
    const icon = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    
    icon.setAttributeNS(null, "width", "32");
    icon.setAttributeNS(null, "height", "32");
    icon.setAttributeNS(null, "viewBox", "0 0 32 32");
    icon.innerHTML = ` 
                        <g class="ArrowsIn" clip-path="url(#a)">
                        <g class="icon">
                          <path d="M24 13H19V8M26 6 19 13M8 19H13V24M6 26 13 19M19 24V19H24M26 26 19 19M13 8V13H8M6 6 13 13" class="Vector"/>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="a" class="a">
                          <path fill="#fff" d="M0 0H32V32H0z"/>
                        </clipPath>
                      </defs>
                    `;
      fullscreen.appendChild(icon);
      return fullscreen;
  }
}
