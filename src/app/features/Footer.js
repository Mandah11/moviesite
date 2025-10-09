"use client";
import { FooterIcon } from "../icons/FooterIcon";
import { EmailIcon } from "../icons/EmailIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { MdOutlineEmail } from "react-icons/md";
export const Footer = () => {
  return (
    // <div className="w-full bg-[#4338ca] h-50 mt-25 items-center justify-center flex">
    //   <div className="w-285 h-40  flex justify-between">
    //     <div className="w-80  h-full gap-4 text-xs">
    //       <FooterIcon />
    //       <p className="mt-2 light: text-white">
    //         © 2024 Movie Z. All Rights Reserved
    //       </p>
    //     </div>{" "}
    //     <div className="w-190 h-full  flex justify-end ">
    //       <div className="w-60  h-full text-xs light: text-white">
    //         <p>Contact Information</p>
    //         <div className="w-40 flex items-center ml-2 justify-center gap-2 mt-2">
    //           <EmailIcon />
    //           <div>Email: support@moveiZ.com</div>
    //         </div>
    //         <div className="w-40 flex items-center ml-2 justify-center gap-2 mt-2">
    //           <PhoneIcon />
    //           <div className="text-xs">
    //             {" "}
    //             <p className="w-34">Phone:</p>
    //             <p>+976 (11) 1234567</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-75 gap-3  h-full text-xs light: text-white">
    //         <div>Follow Us</div>
    //         <div className="text-xs mt-2">
    //           Facebook Instagram Twitter Youtube
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full bg-[#4338ca] sm:h-50 sm:mt-25 sm:items-center justify-center flex h-50 mt-5">
      <div className="sm:w-285 sm:h-40  sm:flex sm:justify-between h-10 w-90 mt-5">
        <div className="sm:w-80  h-full sm:gap-4 sm:text-xs text-[13px] gap-5  ">
          <FooterIcon />
          <p className="sm:mt-2  text-white mt-2">
            © 2024 Movie Z. All Rights Reserved
          </p>
        </div>{" "}
        <div className="sm:w-180 sm:h-full flex sm:justify-end  h-30 justify-between mt-3">
          <div className="sm:w-70  h-full sm:text-xs text-[10px] text-white  w-60 ">
            <p className="mt-1 text-[12px]">Contact Information</p>
            <div className="sm:w-40 flex items-center sm:ml-2 sm:justify-center sm:gap-2 sm:mt-2 w-30 gap-2 mt-2 ml-2">
              <EmailIcon />
              <div>Email: support@moveiZ.com</div>
            </div>
            <div className="sm:w-40 flex items-center sm:ml-2 sm:justify-center sm:gap-2 sm:mt-2 w-30 gap-2 mt-2">
              <PhoneIcon />
              <div className="text-xs text-[11px] ">
                {" "}
                <p className="sm:w-34">Phone:</p>
                <p>+976 (11) 1234567</p>
              </div>
            </div>
          </div>

          <div className="sm:w-50  text-xs text-[12px] text-white sm:flex flex flex-col sm:items-start items-center  w-25 ">
            <div className="sm:text-xs mt-1 ">Follow Us</div>
            <div className="sm:text-xs text-[12px]  sm:mt-2 flex flex-col items-center mt-2 w-20 gap-2 sm:flex sm:justify-start ">
              <p>Facebook</p>
              <p>Instagram </p>
              <p>Twitter</p>
              <p> Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
