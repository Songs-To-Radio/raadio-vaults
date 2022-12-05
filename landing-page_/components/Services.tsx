import ContentContainer from "./ContentContainer";
import BoldFonts from "./fonts/BoldFonts";
import LightFonts from "./fonts/LightFonts";

export default function Services({cls}) {
  return (
    <div className={`bg-[#D9D9D9] flex justify-center items-center w-full py-10 ${cls} absolute top-[80px] left-0`}>
      <ContentContainer cls={`grid grid-cols-2 lg:gap-x-24 gap-x-10 gap-y-10 w-9/12`}>
        <Text
          content1={`Create Radio Vaults`}
          content2={`Track all of your music in one place and permission where you want
            your music to play as the vault owner!`}
        />
        <Text
          content1={`Distribute Your Music`}
          content2={`Distribute your music between web 2.0 and web 3.0 seamlessly!`}
        />
        <Text
          content1={`Mint NFTs`}
          content2={`Mint NFTs and receive a stream everytime the tune is played for any
            reason!`}
        />
        <Text
          content1={`Stream Music Into Metaverse`}
          content2={`License your music to be streamed in any metaverse - Be heard by
            millions across the globe!`}
        />
      </ContentContainer>
    </div>
  );
}

function Text({ content1, content2 }) {
  return (
    <div className={`hover:bg-white lg:p-10 p-4`}>
      {/* @ts-ignore */}
      <BoldFonts>{content1}</BoldFonts>
      {/* @ts-ignore */}
      <LightFonts cls={`w-9/12`}>{content2}</LightFonts>
    </div>
  );
}
