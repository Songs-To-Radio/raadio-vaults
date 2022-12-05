import ContentContainer from "./ContentContainer";
import BoldFonts from "./fonts/BoldFonts";
import LightFonts from "./fonts/LightFonts";

export default function Footer() {
  return (
    <div className={`w-screen bg-black flex justify-center cursor-default`}>
      <ContentContainer
        cls={`w-9/12 lg:py-20 py-10 text-white flex justify-between`}
      >
        <div className={`mr-5`}>
          {/* @ts-ignore */}
          <BoldFonts cls={`lg:text-4xl text-2xl mb-8`}>RadioVaults</BoldFonts>
          {/* @ts-ignore */}
          <LightFonts cls={`text-sm`}>2022. All Rights Reserved</LightFonts>
        </div>
        <div>
          {/* @ts-ignore */}
          <BoldFonts cls={`text-lg mb-4`}>Services</BoldFonts>
          <div className={`flex`}>
            <div className={`grid grid-cols-2 gap-x-20 gap-y-5 gap-1 text-xs mr-20`}>
              {/* @ts-ignore */}
              <LightFonts>Home</LightFonts>
              {/* @ts-ignore */}
              <LightFonts>Radio Vaults Platform</LightFonts>
              {/* @ts-ignore */}
              <LightFonts>Artist Services & Sync</LightFonts>
              {/* @ts-ignore */}
              <LightFonts>Community</LightFonts>
            </div>
            <div>
              <img src="/assets/twitter.svg" alt="" />
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}
