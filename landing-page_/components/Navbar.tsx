import { useRouter } from "next/router";

import Button from "./Button";
import ContentContainer from "./ContentContainer";
import BoldFonts from "./fonts/BoldFonts";
import LightFonts from "./fonts/LightFonts";
import Services from "./Services";
import { useState } from "react";
import Signup from "./Signup";

export default function Navbar() {
  
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  return (
    <div
      className={`w-screen flex flex-col justify-center items-center cursor-default relative`}
    >
      <ContentContainer cls={`w-9/12 h-[80px] flex justify-between items-center`}>
        <div className={`flex items-center`}>
          {/* @ts-ignore */}
          <BoldFonts cls={`lg:text-3xl text-lg`}>
            RADIO<span className={`text-red-600`}>VAULTS</span>
          </BoldFonts>
          {/* <LightFonts
            cls={`mx-8 lg:text-base text-xs hover:bg-red-600 hover:text-white p-3`}
            onClick={() => {
              setDropDown(!dropDown);
            }}
          >
            Services
          </LightFonts>
          <LightFonts
            cls={`lg:text-base text-xs hover:bg-red-600 hover:text-white p-3`}
            onClick={() => {
              setDropDown2(!dropDown2);
            }}
          >
            Signup
          </LightFonts> */}
        </div>
        {/* @ts-ignore */}
        <Button cls={`lg:text-base text-xs`} onClick={()=>{
          window.open("https://darling-truffle-5ce8ae.netlify.app/", "_blank");
        }}>
          go to app
        </Button>
      </ContentContainer>
      <Services cls={`${dropDown ? "" : "hidden"}`} />
      <Signup cls={`${dropDown2 ? "" : "hidden"}`} />
    </div>
  );
}
