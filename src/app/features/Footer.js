"use client";
import { FooterIcon } from "../icons/FooterIcon";
import { EmailIcon } from "../icons/EmailIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
export const Footer = () => {
  return (
    <div className="w-full bg-[#4338ca] h-50 mt-25 items-center justify-center flex">
      <div className="w-285 h-40  flex justify-between">
        <div className="w-80  h-full gap-4 text-xs">
          <FooterIcon />
          <p className="mt-2 light: text-white">
            © 2024 Movie Z. All Rights Reserved
          </p>
        </div>{" "}
        <div className="w-190 h-full  flex justify-end ">
          <div className="w-60  h-full text-xs light: text-white">
            <p>Contact Information</p>
            <div className="w-40 flex items-center ml-2 justify-center gap-2 mt-2">
              <EmailIcon />
              <div>Email: support@moveiZ.com</div>
            </div>
            <div className="w-40 flex items-center ml-2 justify-center gap-2 mt-2">
              <PhoneIcon />
              <div className="text-xs">
                {" "}
                <p className="w-34">Phone:</p>
                <p>+976 (11) 1234567</p>
              </div>
            </div>
          </div>
          <div className="w-75 gap-3  h-full text-xs light: text-white">
            <div>Follow Us</div>
            <div className="text-xs mt-2">
              Facebook Instagram Twitter Youtube
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
