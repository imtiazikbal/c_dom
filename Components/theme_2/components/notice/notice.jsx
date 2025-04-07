import { Clock } from 'lucide-react';

export const Notice = ({ domainInfo }) => {
 

  return (
    <div className="ne-w-full ne-py-1.5 ne-bg-primary ne-text-primary-foreground">
      <div className="container ne-flex ne-items-center ne-justify-between max-md:ne-flex-col ne-gap-2">
        <div className="ne-flex ne-items-center ne-gap-2">
          <h1 className="ne-text-sm ne-flex ne-items-center ne-gap-2">
            <Clock className="ne-w-4 ne-h-4" /> 08:00 - 21:00
          </h1>
          <h1 className="ne-text-sm">
            Hotline: <strong>{domainInfo?.phone}</strong>
          </h1>
        </div>
        <div>
          <ul className="ne-flex ne-items-center ne-gap-2">
           {
             domainInfo?.fb &&
             <li>
             <a href={domainInfo?.fb}>
               <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="ne-w-5 ne-h-5 ne-text-white">
                 <path
                   d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"
                   fill="currentColor"
                 ></path>
               </svg>
             </a>
           </li>
           }
            {
              domainInfo?.instagram &&
              <li>
              <a href={domainInfo?.instagram}>
                <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="ne-w-6 ne-h-6 ne-text-white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="currentColor"></rect>
                  <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="currentColor" strokeLinecap="round"></rect>
                </svg>
              </a>
            </li>

            }
         
            {
              domainInfo?.youtube && 
              <li>
              <a href={domainInfo?.youtube}>
                <svg viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" className="ne-w-5 ne-h-5 ne-text-white">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="currentColor">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            }
           
            {
              domainInfo?.twitter &&
              <li>
              <a href={domainInfo?.twitter}>
                <svg viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ne-w-4 ne-h-4 ne-text-white">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="currentColor">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                          d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                          id="twitter-[#154]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            }

           
          </ul>
        </div>
      </div>
    </div>
  );
};
