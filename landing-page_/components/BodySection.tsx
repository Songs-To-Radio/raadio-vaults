import ContentContainer from "./ContentContainer";
import BoldFonts from "./fonts/BoldFonts";
import LightFonts from "./fonts/LightFonts";

export default function BodySection() {
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <ContentContainer cls={`w-8/12 my-24`}>
        <TitleSubTitle
          content1={`RADIO VAULTS PLATFORM`}
          content2={`Our technology is what Web 3.0 and Music have been waiting for!`}
        />
        <Body
          content1={
            <>
              <LightFonts onClick={()=>{}} cls={``}>
                Quickly and easily distribute your music directly from your
                Radio Vault(s) to launch NFT campaigns for your community on any
                blockchain.
              </LightFonts>
              <LightFonts  onClick={()=>{}} cls={`my-5`}>
                With our technology, streams will be accounted for any time the
                music is being listened to. This means when someone is listening
                to an NFT a stream for licensing purposes is happening.
              </LightFonts>
              <LightFonts onClick={()=>{}} cls={""} >
                Permission your music to be streamed into the metaverse or
                performed live in metaverse(s) directly from your user
                dashboard. You are in complete control and ownership of the
                distribution of your music as a Radio Vault owner.
              </LightFonts>
            </>
          }
          content2={
            <ContentContainer cls={`flex justify-end`}>
              <img src="/assets/asset2.svg" alt="" />
            </ContentContainer>
          }
        />
      </ContentContainer>
      <ContentContainer cls={`w-9/12 my-24`}>
        <TitleSubTitle
          content1={`Launch Music NFT Campaigns at Scale`}
          content2={`Provide your community with ownership of your music!`}
        />
        <Body
          content2={
            <>
              <LightFonts onClick={()=>{}} cls={``}>
                With our infrastructure, you can be assured that you own and
                control access to your music and its data. This will allow for
                you to know where streams are coming from on the blockchain.
              </LightFonts>
              <LightFonts onClick={()=>{}} cls={`my-5`}>
                Include all web 2.0 & web 3.0 music metadata & DSPs for any
                particular song by an artist or record-label owned music. This
                will allow you to distribute and license your music on the
                blockchain and off-chain.
              </LightFonts>
              <LightFonts onClick={()=>{}} cls={`mb-5`}>
                The biggest problem the blockchain and music space currently
                faces is how to properly license NFT technology/web 3.0 systems.
                With this infrastructure we solve that problem.
              </LightFonts>
              <LightFonts onClick={()=>{}} cls={``}>
                Vaults are totally controlled by the individual or entity that
                owns permissions to license music. This will invite thousands of
                musicians to the blockchain whether they are an individual
                artist or with a record label!
              </LightFonts>
            </>
          }
          content1={
            <ContentContainer cls={`flex justify-start`}>
              <img src="/assets/Group1.png" alt="" />
            </ContentContainer>
          }
        />
      </ContentContainer>
      <ContentContainer cls={`w-9/12 my-24`}>
        <TitleSubTitle
          content1={`COMMUNITY`}
          content2={`Join our community of committed professionals!`}
        />
        <Body
          content1={
            <>
              <LightFonts onClick={()=>{}} cls={`mb-5`}>
                We are committed to ensuring copyright laws and licensing
                regulations are followed for blockchain technology. 
              </LightFonts>
              <LightFonts onClick={()=>{}} cls={``}>
                If you are a musician or record label who wants their music streamed in
                metaverses or minted as NFTs, sign up today to be a beta tester!
              </LightFonts>
            </>
          }
          content2={
            <ContentContainer cls={`flex justify-end`}>
              <img src="/assets/Group2.png" alt="" />
            </ContentContainer>
          }
        />
      </ContentContainer>
    </div>
  );
}

function TitleSubTitle({ content1, content2 }) {
  return (
    // @ts-ignore
    <ContentContainer>
      {/* @ts-ignore */}
      <BoldFonts cls={`lg:text-4xl text-lg text-center`}>{content1}</BoldFonts>
      {/* @ts-ignore */}
      <LightFonts cls={`lg:text-xl text-sm text-center lg:my-10 my-5`}>{content2}</LightFonts>
    </ContentContainer>
  );
}

function Body({ content1, content2 }) {
  return (
    <div className={`flex justify-between items-center`}>
      <ContentContainer cls={`w-1/2 lg:text-base text-xs mr-8 text-justify`}>
        {content1}
      </ContentContainer>
      <ContentContainer cls={`w-1/2 lg:text-base text-xs text-justify`}>
        {content2}
      </ContentContainer>
    </div>
  );
}
