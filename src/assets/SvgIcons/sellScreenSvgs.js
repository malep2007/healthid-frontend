import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export const NotesIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file" className="svg-inline--fa fa-file fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
  </SvgIcon>
);

export const UserIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
  </SvgIcon>
);

export const TrashIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
  </SvgIcon>
);

export const ArchieveIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="archive" className="svg-inline--fa fa-archive fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
  </SvgIcon>
);

export const PauseIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" className="svg-inline--fa fa-pause fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
  </SvgIcon>
);

export const RetrieveIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-square" className="svg-inline--fa fa-share-square fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" />
  </SvgIcon>
);

export const CautionIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" className="svg-inline--fa fa-exclamation-triangle fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
  </SvgIcon>
);

export const CaretUpIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" className="svg-inline--fa fa-caret-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" />
  </SvgIcon>
);

export const CaretDownIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
  </SvgIcon>
);

export const HistoryIcon = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
    <path d="M0,0H35V35H0Z" fill="none" opacity="0.5" />
    <path d="M13.291,17.334c1.691-3.161,4.962-5.844,8.9-5.844,5.953,0,9.774,4.406,10.186,10.309h1.579C33.817,14.511,28.658,10,22.186,10a11.476,11.476,0,0,0-10.219,6.084L10,14.209v4.633h4.689Zm8.179,5.681L17.832,26.14l1.048,1.048,4.173-3.64v-7.3H21.49v6.765Zm-9.3,2.186-.074-.092H10.533a11.971,11.971,0,0,0,10.406,8.86V32.406C17.189,31.949,14.135,29.742,12.168,25.2ZM28.235,35H35V33.436H28.235Zm0-4.173H35V29.265H28.235Zm0-5.735v1.561H35V25.092Zm-3.658,1.564h2.077V25.094H24.577Zm0,4.171h2.077V29.265H24.577Zm0,4.173h2.077V33.436H24.577Zm-3.62-1.046Z" transform="translate(-5 -5)" fill="#424242" stroke="#424242" strokeWidth="0.8px" opacity="0.5" />
  </SvgIcon>
);

export const DiscountIcon = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
    <path d="M549.546,452.141c.3-.3.45-.615.233-.832s-.532-.059-.832.24-.427.638-.227.838S549.21,452.478,549.546,452.141Z" transform="translate(-539.181 -443.482)" fill="#e8e8e8" />
    <path d="M64.559,40.193c-.342-.346-9.246-9.293-9.246-9.293l-3.859.114-1.21,1.215a15.078,15.078,0,0,1,.945,1.238,1.522,1.522,0,0,1,.722-.18,1.557,1.557,0,1,1-1.447,1.019,15.45,15.45,0,0,1-1.229-1.061l-.936.941v4l9.225,9.269a.4.4,0,0,0,.654,0c.378-.381,6.382-6.414,6.382-6.414S64.9,40.538,64.559,40.193Zm-7.766-2.133a1.344,1.344,0,0,1,1.989-.108,1.267,1.267,0,0,1-.1,1.9,1.351,1.351,0,0,1-1.994.145A1.309,1.309,0,0,1,56.793,38.061Zm-2.9-.381.519-.521,1.347,1.353-.521.519ZM59.7,43.658a1.347,1.347,0,0,1-1.989.14,1.306,1.306,0,0,1,.1-1.921,1.343,1.343,0,0,1,1.983-.114A1.267,1.267,0,0,1,59.7,43.658Zm-3.947-1.808-.422-.423L60.7,39.894l.417.418Z" transform="translate(-47.711 -30.62)" fill="#e8e8e8" />
    <path d="M607.832,669.783c-.313.305-.427.638-.233.833s.49.091.823-.242c.3-.3.45-.615.236-.829S608.126,669.487,607.832,669.783Z" transform="translate(-597.033 -657.872)" fill="#e8e8e8" />
    <path d="M13.428,16.194a.056.056,0,0,0,.032-.008c.193-.194-1-1.776-2.61-3.464a1.42,1.42,0,0,0-.24-.023.53.53,0,0,0-.418.149.593.593,0,0,0-.051.5C11.174,14.458,12.963,16.194,13.428,16.194Z" transform="translate(-10.113 -12.7)" fill="#e8e8e8" />
  </SvgIcon>
);

export const CalenderIcon = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 31 31">
    <path d="M28,11.687V3.813H23.5V1H22.375V3.813H6.625V1H5.5V3.813H1V28H28ZM2.125,4.937H5.5V7.75H6.625V4.937h15.75V7.75H23.5V4.937h3.375v5.625H2.125Zm0,21.938V11.687h24.75V26.875Z" transform="translate(-1 -1)" fill="#424242" opacity="0.8" />
    <path d="M6,35.631H27.185V24H6Zm1.115-3.489h2.23v2.326H7.115Zm15.61-1.163h-2.23V28.652h2.23Zm1.115-2.326h2.23v2.326H23.84ZM13.8,32.142h2.23v2.326H13.8ZM12.69,34.468H10.46V32.142h2.23Zm3.345-3.489H13.8V28.652h2.23Zm1.115-2.326h2.23v2.326H17.15Zm0,3.489h2.23v2.326H17.15Zm3.345,0h2.23v2.326h-2.23Zm0-4.652V25.163h2.23v2.326Zm-1.115,0H17.15V25.163h2.23Zm-3.345,0H13.8V25.163h2.23Zm-3.345,0H10.46V25.163h2.23Zm0,1.163v2.326H10.46V28.652ZM9.345,30.979H7.115V28.652h2.23ZM23.84,34.468V32.142h2.23v2.326Zm2.23-6.979H23.84V25.163h2.23ZM9.345,25.163v2.326H7.115V25.163Z" transform="translate(-3.092 -11.539)" fill="#424242" opacity="0.8" />
  </SvgIcon>
);

export const SearchIcon = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 29 29">
    <path d="M35.694,34.224l-6.01-6.01a10.527,10.527,0,1,0-1.474,1.474l6.01,6.005a1.041,1.041,0,1,0,1.474-1.469Zm-14.158-4.25a8.441,8.441,0,1,1,8.444-8.439A8.45,8.45,0,0,1,21.536,29.974Z" transform="translate(-11 -11)" fill="#424242" opacity="0.8" />
  </SvgIcon>
);

export const ResetIcon = props => (
  <SvgIcon {...props} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="undo-alt" className="svg-inline--fa fa-undo-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z" />
  </SvgIcon>
);

export const CalenderIcon2 = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="1136.984" height="1136.984" viewBox="0 0 1136.984 1136.984">
    <path d="M1045.571,444.286H829v1028.7H1965.985V444.286H1749.414V606.71H1532.849V444.286H1262.133V606.71H1045.571ZM883.136,1256.417v162.426h162.435V1256.417Zm216.571,0v162.426h162.425V1256.417Zm216.571,0v162.426H1478.7V1256.417Zm216.57,0v162.426h162.425V1256.417Zm216.564,0v162.426h162.432V1256.417ZM883.136,1039.849v162.426h162.435V1039.849Zm216.571,0v162.426h162.425V1039.849Zm433.142,0v162.426h162.425V1039.849Zm216.564,0v162.426h162.432V1039.849ZM883.136,823.279V985.706h162.435V823.279Zm216.571,0V985.706h162.425V823.279Zm216.571,0V985.706H1478.7V823.279Zm216.57,0V985.706h162.425V823.279Zm216.564,0V985.706h162.432V823.279ZM1099.707,336V552.566h108.287V336Zm487.283,0V552.566h108.284V336Z" transform="translate(-829 -336)" fill="#424242" fillRule="evenodd" />
  </SvgIcon>
);

export const Notification = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="946.628" height="1137.061" viewBox="0 0 946.628 1137.061">
    <path d="M150.285,931.515h646.9c-57.914,121.1-180.435,205.546-323.413,205.546C330.874,1137.061,208.277,1052.612,150.285,931.515Zm794.574-95.14c1.231,2,1.769,2.769,1.769,2.769A24.789,24.789,0,0,1,944.859,836.375ZM0,838.875v0Zm.231-.269L0,838.875A.24.24,0,0,1,.231,838.606Zm.461-.731a1.3,1.3,0,0,0-.461.731A1.3,1.3,0,0,1,.692,837.875ZM1,837.606l-.308.269Zm.231-.461a.986.986,0,0,0-.231.461A.986.986,0,0,1,1.231,837.145Zm.461-.5a1.755,1.755,0,0,1-.461.5A1.755,1.755,0,0,0,1.692,836.644Zm.077-.115c0,.038-.077.077-.077.115A.137.137,0,0,1,1.769,836.529Zm0-.077v0Zm.077-.038-.077.038Zm.077-.038-.077.038C1.846,836.375,1.923,836.375,1.923,836.375Zm0,0L85.449,691.012c37.379-52.492,57.222-112.445,57.222-173.859v-99.6c0-125.827,99.985-232.312,236.965-266.729V79.488C379.636,35.649,422.014,0,474.314,0c52.223,0,94.6,35.649,94.6,79.488v71.336c136.98,34.418,236.965,140.9,236.965,266.729v99.6c0,61.414,19.843,121.6,57.53,174.089l81.449,145.132Z" fill="#424242" />
  </SvgIcon>
);

export const User = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="802.577" height="1136.984" viewBox="0 0 802.577 1136.984">
    <path d="M666.918,360.647c0-98.506-36.955-187.668-96.612-252.149C510.584,43.944,428.094,4,336.959,4S163.335,43.944,103.612,108.5C43.955,172.979,7,262.141,7,360.647S43.955,548.315,103.612,612.8c59.723,64.553,142.212,104.5,233.347,104.5S510.584,677.35,570.306,612.8C629.963,548.315,666.918,459.153,666.918,360.647Z" transform="translate(64.329 -4)" fill="#424242" />
    <path d="M6,300.318c0,71.329,150.483,142.659,401.288,142.659,235.289,0,401.288-71.329,401.288-142.659C808.577,157.659,651.138,15,407.288,15,156.483,15,6,157.659,6,300.318Z" transform="translate(-6 694.008)" fill="#424242" />
  </SvgIcon>
);

export const Register = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="1136.984" height="1136.982" viewBox="0 0 1136.984 1136.982">
    <path d="M829.69,281.62H734.128V211.154H829.69V0H496.133V211.154h96.472V281.62H79.3v216.7H829.69Z" transform="translate(112.067)" fill="#424242" />
    <path d="M956.366,225.9h-787.9L4.3,608.874H1120.531ZM250.316,566.643H171.943c-12.521,0-22.492-10.377-22.492-23.409s9.97-23.407,22.492-23.407h78.373c12.521,0,22.492,10.376,22.492,23.407C273.04,556.266,262.142,566.643,250.316,566.643Zm39.882-83.5H221.564c-12.521,0-22.491-10.376-22.491-23.408s9.97-23.408,22.491-23.408H290.2c12.521,0,22.492,10.376,22.492,23.408S302.719,483.146,290.2,483.146Zm30.607-83.5H260.287c-12.521,0-22.492-10.377-22.492-23.408s9.97-23.408,22.492-23.408h60.518c12.521,0,22.492,10.377,22.492,23.408S333.326,399.65,320.805,399.65Zm25.274-84.462H292.053c-12.521,0-22.492-10.376-22.492-23.407s9.971-23.408,22.492-23.408h54.026c12.521,0,22.492,10.376,22.492,23.408S358.6,315.188,346.079,315.188ZM484.97,566.643H406.6c-12.521,0-22.492-10.377-22.492-23.409s9.97-23.407,22.492-23.407H484.97c12.521,0,22.492,10.376,22.492,23.407S496.564,566.643,484.97,566.643Zm9.739-83.5H426.075c-12.521,0-22.491-10.376-22.491-23.408s9.97-23.408,22.491-23.408h68.634c12.521,0,22.492,10.376,22.492,23.408S506.535,483.146,494.709,483.146Zm7.188-83.5H441.379c-12.521,0-22.492-10.377-22.492-23.408s9.97-23.408,22.492-23.408H501.9c12.521,0,22.491,10.377,22.491,23.408S514.65,399.65,501.9,399.65Zm6.492-84.462H454.363c-12.521,0-22.492-10.376-22.492-23.407s9.971-23.408,22.492-23.408h54.026c12.521,0,22.492,10.376,22.492,23.408S520.911,315.188,508.389,315.188Zm108.052-47.057h54.026c12.521,0,22.492,10.378,22.492,23.408s-9.971,23.409-22.492,23.409H616.442c-12.521,0-22.492-10.379-22.492-23.409S603.921,268.131,616.442,268.131ZM600.211,376.243c0-13.032,9.97-23.409,22.492-23.409h60.518c12.521,0,22.492,10.377,22.492,23.409s-9.97,23.407-22.492,23.407H622.7C610.181,399.65,600.211,388.309,600.211,376.243Zm7.188,83.5c0-13.032,9.971-23.408,22.492-23.408h68.634c12.521,0,22.492,10.376,22.492,23.408s-9.97,23.408-22.492,23.408H629.891C618.3,483.146,607.4,472.771,607.4,459.739Zm111.994,106.9H641.02c-12.521,0-22.492-10.377-22.492-23.409s9.971-23.407,22.492-23.407h78.373c12.521,0,22.492,10.376,22.492,23.407S730.987,566.643,719.393,566.643Zm36.868-274.863c0-13.032,9.97-23.408,22.492-23.408h54.026c12.521,0,22.492,10.376,22.492,23.408s-9.971,23.407-22.492,23.407H778.752C766.231,315.188,756.261,304.812,756.261,291.781Zm25.274,84.462c0-13.032,9.97-23.409,22.492-23.409h60.518c12.521,0,22.492,10.377,22.492,23.409s-9.97,23.407-22.492,23.407H804.026C791.505,399.65,781.535,388.309,781.535,376.243Zm30.607,83.5c0-13.032,9.97-23.408,22.492-23.408h68.634c12.521,0,22.492,10.376,22.492,23.408s-9.971,23.408-22.492,23.408H834.633C822.112,483.146,812.142,472.771,812.142,459.739Zm141.674,106.9H875.443c-12.521,0-22.492-10.377-22.492-23.409s9.971-23.407,22.492-23.407h78.373c12.521,0,22.492,10.376,22.492,23.407S965.409,566.643,953.815,566.643Z" transform="translate(6.077 288.227)" fill="#424242" />
    <path d="M0,404.1V611.394H1136.985V404.1ZM568.492,552.27c-29.7,0-54.065-25.339-54.065-56.227s24.364-56.227,54.065-56.227,54.065,25.339,54.065,56.227S598.193,552.27,568.492,552.27Z" transform="translate(0 525.589)" fill="#424242" />
  </SvgIcon>
);

export const UserSvg = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="802.577" height="1136.984" viewBox="0 0 802.577 1136.984">
    <path d="M666.918,360.647c0-98.506-36.955-187.668-96.612-252.149C510.584,43.944,428.094,4,336.959,4S163.335,43.944,103.612,108.5C43.955,172.979,7,262.141,7,360.647S43.955,548.315,103.612,612.8c59.723,64.553,142.212,104.5,233.347,104.5S510.584,677.35,570.306,612.8C629.963,548.315,666.918,459.153,666.918,360.647Z" transform="translate(64.329 -4)" fill="#A3A3A3" />
    <path d="M6,300.318c0,71.329,150.483,142.659,401.288,142.659,235.289,0,401.288-71.329,401.288-142.659C808.577,157.659,651.138,15,407.288,15,156.483,15,6,157.659,6,300.318Z" transform="translate(-6 694.008)" fill="#A3A3A3" />
  </SvgIcon>
);

export const RegisterIcon = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="1136.984" height="1136.982" viewBox="0 0 1136.984 1136.982">
    <path d="M829.69,281.62H734.128V211.154H829.69V0H496.133V211.154h96.472V281.62H79.3v216.7H829.69Z" transform="translate(112.067)" fill="#A3A3A3" />
    <path d="M956.366,225.9h-787.9L4.3,608.874H1120.531ZM250.316,566.643H171.943c-12.521,0-22.492-10.377-22.492-23.409s9.97-23.407,22.492-23.407h78.373c12.521,0,22.492,10.376,22.492,23.407C273.04,556.266,262.142,566.643,250.316,566.643Zm39.882-83.5H221.564c-12.521,0-22.491-10.376-22.491-23.408s9.97-23.408,22.491-23.408H290.2c12.521,0,22.492,10.376,22.492,23.408S302.719,483.146,290.2,483.146Zm30.607-83.5H260.287c-12.521,0-22.492-10.377-22.492-23.408s9.97-23.408,22.492-23.408h60.518c12.521,0,22.492,10.377,22.492,23.408S333.326,399.65,320.805,399.65Zm25.274-84.462H292.053c-12.521,0-22.492-10.376-22.492-23.407s9.971-23.408,22.492-23.408h54.026c12.521,0,22.492,10.376,22.492,23.408S358.6,315.188,346.079,315.188ZM484.97,566.643H406.6c-12.521,0-22.492-10.377-22.492-23.409s9.97-23.407,22.492-23.407H484.97c12.521,0,22.492,10.376,22.492,23.407S496.564,566.643,484.97,566.643Zm9.739-83.5H426.075c-12.521,0-22.491-10.376-22.491-23.408s9.97-23.408,22.491-23.408h68.634c12.521,0,22.492,10.376,22.492,23.408S506.535,483.146,494.709,483.146Zm7.188-83.5H441.379c-12.521,0-22.492-10.377-22.492-23.408s9.97-23.408,22.492-23.408H501.9c12.521,0,22.491,10.377,22.491,23.408S514.65,399.65,501.9,399.65Zm6.492-84.462H454.363c-12.521,0-22.492-10.376-22.492-23.407s9.971-23.408,22.492-23.408h54.026c12.521,0,22.492,10.376,22.492,23.408S520.911,315.188,508.389,315.188Zm108.052-47.057h54.026c12.521,0,22.492,10.378,22.492,23.408s-9.971,23.409-22.492,23.409H616.442c-12.521,0-22.492-10.379-22.492-23.409S603.921,268.131,616.442,268.131ZM600.211,376.243c0-13.032,9.97-23.409,22.492-23.409h60.518c12.521,0,22.492,10.377,22.492,23.409s-9.97,23.407-22.492,23.407H622.7C610.181,399.65,600.211,388.309,600.211,376.243Zm7.188,83.5c0-13.032,9.971-23.408,22.492-23.408h68.634c12.521,0,22.492,10.376,22.492,23.408s-9.97,23.408-22.492,23.408H629.891C618.3,483.146,607.4,472.771,607.4,459.739Zm111.994,106.9H641.02c-12.521,0-22.492-10.377-22.492-23.409s9.971-23.407,22.492-23.407h78.373c12.521,0,22.492,10.376,22.492,23.407S730.987,566.643,719.393,566.643Zm36.868-274.863c0-13.032,9.97-23.408,22.492-23.408h54.026c12.521,0,22.492,10.376,22.492,23.408s-9.971,23.407-22.492,23.407H778.752C766.231,315.188,756.261,304.812,756.261,291.781Zm25.274,84.462c0-13.032,9.97-23.409,22.492-23.409h60.518c12.521,0,22.492,10.377,22.492,23.409s-9.97,23.407-22.492,23.407H804.026C791.505,399.65,781.535,388.309,781.535,376.243Zm30.607,83.5c0-13.032,9.97-23.408,22.492-23.408h68.634c12.521,0,22.492,10.376,22.492,23.408s-9.971,23.408-22.492,23.408H834.633C822.112,483.146,812.142,472.771,812.142,459.739Zm141.674,106.9H875.443c-12.521,0-22.492-10.377-22.492-23.409s9.971-23.407,22.492-23.407h78.373c12.521,0,22.492,10.376,22.492,23.407S965.409,566.643,953.815,566.643Z" transform="translate(6.077 288.227)" fill="#A3A3A3" />
    <path d="M0,404.1V611.394H1136.985V404.1ZM568.492,552.27c-29.7,0-54.065-25.339-54.065-56.227s24.364-56.227,54.065-56.227,54.065,25.339,54.065,56.227S598.193,552.27,568.492,552.27Z" transform="translate(0 525.589)" fill="#A3A3A3" />
  </SvgIcon>
);

export const Preferences = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="782.417" height="808.673" viewBox="0 0 782.417 808.673">
    <path id="Preferences_Icon" data-name="Preferences Icon" d="M412.869,556.679q58.814,0,100.624-41.754,41.727-41.713,41.768-100.589,0-58.794-41.768-100.589-41.727-41.713-100.624-41.754-58.814,0-100.624,41.754-41.727,41.713-41.768,100.589,0,58.794,41.768,100.589Q353.972,556.638,412.869,556.679ZM714.822,454.192c94.267,72.781,89.232,93,89.232,93L722.416,687.717l-125.3-32.265-68.348,39.856L494.589,818.673H331.231L297.057,695.309l-68.348-39.856L103.4,687.717,21.683,547.19l89.232-93V374.48l-89.232-93,81.638-140.527,125.3,32.264,68.348-39.856L331.148,10H494.424L528.6,133.364l68.348,39.856,125.3-32.264,81.8,140.527-89.233,93v79.712Z" transform="translate(-21.684 -10)" fill="#a3a3a3" />
  </SvgIcon>
);

export const Add = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="1146.292" height="1146.291" viewBox="0 0 1146.292 1146.291">
    <path id="add_outlet_icon" data-name="add outlet icon" d="M1146.292,518.56H627.731V0H518.56V518.56H0v109.17H518.56v518.561h109.17V627.731h518.561Z" fill="#424242" opacity="0.5" />
  </SvgIcon>
);

export const NewOutlet = props => (
  <SvgIcon {...props} id="add_outlet_icon" data-name="add outlet icon" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="689.661" height="755.791" viewBox="0 0 689.661 755.791">
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
        <stop offset="0" stopColor="#b3b3b3" stopOpacity="0.251" />
        <stop offset="0.54" stopColor="#b3b3b3" stopOpacity="0.102" />
        <stop offset="1" stopColor="#b3b3b3" stopOpacity="0.051" />
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="0" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-3" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
        <stop offset="0" stopColor="gray" stopOpacity="0.251" />
        <stop offset="0.54" stopColor="gray" stopOpacity="0.122" />
        <stop offset="1" stopColor="gray" stopOpacity="0.102" />
      </linearGradient>
    </defs>
    <path id="Path_34181" data-name="Path 34181" d="M626.917,662.434c0-49.154,48.26-94.471,97.135-94.471,7.488,0,14.749-1.9,21.718-.152.095-2.146.151-14.758.151-16.923V51.81H322.87L236,141.552v580.71H635.415C626.822,708.549,626.917,679.85,626.917,662.434Z" transform="translate(-236 -51.81)" fill="url(#linear-gradient)" />
    <path id="Path_34182" data-name="Path 34182" d="M619.836,683.187A110.476,110.476,0,0,1,730.312,572.711c3.333,0,6.61.16,9.9.444V317H244.48V721.9H626.814A110.232,110.232,0,0,1,619.836,683.187Z" transform="translate(-236.473 -62.78)" fill="#fcfcfc" />
    <path id="Path_34183" data-name="Path 34183" d="M503.752,254.488H6.91V89.538L87.256,5.5h416.5Z" transform="translate(-0.385 -0.307)" fill="#fcfcfc" />
    <rect id="Rectangle_2194" data-name="Rectangle 2194" width="134.772" height="10.283" transform="translate(339.028 55.323)" fill="#e0e0e0" />
    <rect id="Rectangle_2195" data-name="Rectangle 2195" width="134.772" height="10.283" transform="translate(339.028 93.093)" fill="#e0e0e0" />
    <rect id="Rectangle_2196" data-name="Rectangle 2196" width="134.772" height="10.283" transform="translate(339.028 130.863)" fill="#e0e0e0" />
    <rect id="Rectangle_2197" data-name="Rectangle 2197" width="134.772" height="10.283" transform="translate(339.028 169.5)" fill="#424242" opacity="0.5" />
    <rect id="Rectangle_2198" data-name="Rectangle 2198" width="134.772" height="10.283" transform="translate(339.028 207.464)" fill="#e0e0e0" />
    <rect id="Rectangle_2199" data-name="Rectangle 2199" width="134.772" height="10.283" transform="translate(339.028 245.428)" fill="#e0e0e0" />
    <rect id="Rectangle_2200" data-name="Rectangle 2200" width="134.772" height="10.283" transform="translate(79.996 326.102)" fill="#424242" opacity="0.5" />
    <rect id="Rectangle_2201" data-name="Rectangle 2201" width="134.772" height="10.283" transform="translate(79.996 367.426)" fill="#e0e0e0" />
    <rect id="Rectangle_2202" data-name="Rectangle 2202" width="351.787" height="10.283" transform="translate(79.996 346.764)" fill="#faf33e" opacity="0.3" />
    <rect id="Rectangle_2203" data-name="Rectangle 2203" width="134.772" height="10.283" transform="translate(79.996 425.976)" fill="#424242" opacity="0.5" />
    <rect id="Rectangle_2204" data-name="Rectangle 2204" width="134.772" height="10.283" transform="translate(79.996 467.309)" fill="#e0e0e0" />
    <rect id="Rectangle_2205" data-name="Rectangle 2205" width="351.787" height="10.283" transform="translate(79.996 446.638)" fill="#e0e0e0" />
    <rect id="Rectangle_2206" data-name="Rectangle 2206" width="134.772" height="10.283" transform="translate(79.996 525.859)" fill="#424242" opacity="0.5" />
    <rect id="Rectangle_2207" data-name="Rectangle 2207" width="134.772" height="10.283" transform="translate(79.996 567.183)" fill="#e0e0e0" />
    <rect id="Rectangle_2208" data-name="Rectangle 2208" width="288.382" height="10.283" transform="translate(79.996 546.521)" fill="#e0e0e0" />
    <path id="Path_34184" data-name="Path 34184" d="M295.5,267.73H50V53.387L58.5,43H295.5Z" transform="translate(-2.788 -2.398)" fill="#424242" opacity="0.5" />
    <path id="Path_34185" data-name="Path 34185" d="M4.91,91.315H89.033V3.5Z" transform="translate(-0.274 -0.195)" fill="url(#linear-gradient-2)" />
    <path id="Path_34186" data-name="Path 34186" d="M6.91,89.538H87.256V5.5Z" transform="translate(-0.385 -0.307)" fill="#f5f5f5" />
    <g id="Group_2282" data-name="Group 2282" transform="translate(500.566 566.698)" opacity="0.5">
      <circle id="Ellipse_460" data-name="Ellipse 460" cx="94.547" cy="94.547" r="94.547" fill="url(#linear-gradient-3)" />
    </g>
    <path id="Path_34194" data-name="Path 34194" d="M88.495,0A88.495,88.495,0,1,1,0,88.495,88.495,88.495,0,0,1,88.495,0Z" transform="translate(506.619 572.751)" fill="#faf33e" opacity="0.5" />
    <g id="Group_2283" data-name="Group 2283" transform="translate(547.363 613.495)" opacity="0.5">
      <path id="Path_34187" data-name="Path 34187" d="M672.8,682.76H635.711V645.68H614.39V682.76H577.3v21.33h37.09v37.09h21.321V704.09H672.8Z" transform="translate(-577.3 -645.68)" fill="url(#linear-gradient-3)" />
    </g>
    <rect id="Rectangle_2209" data-name="Rectangle 2209" width="18.129" height="81.177" transform="translate(586.049 620.652)" fill="#fff" />
    <rect id="Rectangle_2210" data-name="Rectangle 2210" width="18.129" height="81.177" transform="translate(635.707 652.181) rotate(90)" fill="#fff" />
    <path id="Path_34188" data-name="Path 34188" d="M733.643,707.434c0-49.154,48.473-94.471,97.563-94.471,7.521,0,14.814-1.9,21.814-.152.095-2.146.152-14.757.152-16.923V96.81H428.254L341,186.552v580.71H742.178C733.548,753.549,733.643,724.851,733.643,707.434Z" transform="translate(-241.854 -54.319)" fill="url(#linear-gradient)" />
    <path id="Path_34189" data-name="Path 34189" d="M724.836,728.187A110.477,110.477,0,0,1,835.313,617.711c3.333,0,6.609.16,9.9.444V362H349.48V766.9H731.814A110.23,110.23,0,0,1,724.836,728.187Z" transform="translate(-240.076 -65.29)" fill="#fff" />
    <path id="Path_34190" data-name="Path 34190" d="M608.752,299.488H111.91V134.538L192.256,50.5h416.5Z" transform="translate(-3.989 -2.816)" fill="#fff" />
    <rect id="Rectangle_2211" data-name="Rectangle 2211" width="134.772" height="10.283" transform="translate(438.577 97.814)" fill="#e0e0e0" />
    <rect id="Rectangle_2212" data-name="Rectangle 2212" width="134.772" height="10.283" transform="translate(438.577 135.584)" fill="#e0e0e0" />
    <rect id="Rectangle_2213" data-name="Rectangle 2213" width="134.772" height="10.283" transform="translate(438.577 174.246)" fill="#e0e0e0" />
    <rect id="Rectangle_2214" data-name="Rectangle 2214" width="134.772" height="10.283" transform="translate(438.577 212.21)" fill="#424242" opacity="0.5" />
    <rect id="Rectangle_2215" data-name="Rectangle 2215" width="134.772" height="10.283" transform="translate(438.577 250.174)" fill="#e0e0e0" />
    <rect id="Rectangle_2216" data-name="Rectangle 2216" width="134.772" height="10.283" transform="translate(438.577 288.138)" fill="#e0e0e0" />
    <rect id="Rectangle_2217" data-name="Rectangle 2217" width="134.772" height="10.283" transform="translate(179.872 368.811)" fill="#424242" opacity="0.5" />
    <rect id="Rectangle_2218" data-name="Rectangle 2218" width="134.772" height="10.283" transform="translate(179.872 410.135)" fill="#e0e0e0" />
    <rect id="Rectangle_2219" data-name="Rectangle 2219" width="351.787" height="10.283" transform="translate(180.344 389.473)" fill="#faf33e" opacity="0.3" />
    <rect id="Rectangle_2220" data-name="Rectangle 2220" width="134.772" height="10.283" transform="translate(179.872 468.685)" fill="#424242" opacity="0.5" />
    <rect id="Rectangle_2221" data-name="Rectangle 2221" width="134.772" height="10.283" transform="translate(179.872 510.019)" fill="#e0e0e0" />
    <rect id="Rectangle_2222" data-name="Rectangle 2222" width="351.787" height="10.283" transform="translate(180.344 489.347)" fill="#e0e0e0" />
    <rect id="Rectangle_2223" data-name="Rectangle 2223" width="134.772" height="10.283" transform="translate(179.872 568.569)" fill="#424242" opacity="0.5" />
    <rect id="Rectangle_2224" data-name="Rectangle 2224" width="134.772" height="10.283" transform="translate(179.872 610.587)" fill="#e0e0e0" />
    <rect id="Rectangle_2225" data-name="Rectangle 2225" width="288.382" height="10.283" transform="translate(180.153 589.231)" fill="#e0e0e0" />
    <path id="Path_34191" data-name="Path 34191" d="M400.5,312.73H155V98.387L163.5,88H400.5Z" transform="translate(-7.897 -4.907)" fill="#424242" opacity="0.5" />
    <path id="Path_34192" data-name="Path 34192" d="M109.91,136.315h84.123V48.5Z" transform="translate(-5.741 -2.704)" fill="url(#linear-gradient-2)" />
    <path id="Path_34193" data-name="Path 34193" d="M111.91,134.538h80.346V50.5Z" transform="translate(-5.848 -2.816)" fill="#fcfcfc" />
  </SvgIcon>
);

export const Previous = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="573.146" height="878.828" viewBox="0 0 573.146 878.828">
    <path id="previous_page_icon" data-name="previous page icon" d="M439.414,573.146,0,131.542,130.889,0,439.414,310.062,747.94,0,878.829,131.542Z" transform="translate(573.146) rotate(90)" fill="#707070" />
  </SvgIcon>
);

export const PreviousDisabled = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="573.146" height="878.828" viewBox="0 0 573.146 878.828">
    <path id="previous_page_icon" data-name="previous page icon" d="M439.414,573.146,0,131.542,130.889,0,439.414,310.062,747.94,0,878.829,131.542Z" transform="translate(573.146) rotate(90)" fill="#bab5b1" />
  </SvgIcon>
);

export const Next = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="573.801" height="884.229" viewBox="0 0 573.801 884.229">
    <path id="next_page_icon" data-name="next page icon" d="M442.114,573.8,0,131.692,131.694,0,442.114,310.417,752.535,0,884.228,131.692Z" transform="translate(0 884.229) rotate(-90)" fill="#707070" />
  </SvgIcon>
);

export const NextDisabled = props => (
  <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="573.801" height="884.229" viewBox="0 0 573.801 884.229">
    <path id="next_page_icon" data-name="next page icon" d="M442.114,573.8,0,131.692,131.694,0,442.114,310.417,752.535,0,884.228,131.692Z" transform="translate(0 884.229) rotate(-90)" fill="#bab5b1" />
  </SvgIcon>
);
