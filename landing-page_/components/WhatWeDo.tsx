import React from 'react'
import ContentContainer from './ContentContainer'
import BoldFonts from './fonts/BoldFonts'
import LightFonts from './fonts/LightFonts'

export default function WhatWeDo() {
  return (
    <ContentContainer
      cls={`w-full h-fit py-10 flex flex-col justify-center items-center bg-white rounded-xl`}
    >
      {/* @ts-ignore */}
      <BoldFonts cls={`text-center text-2xl mb-5`}>What we do</BoldFonts>
      <div
        className={`px-10 flex justify-center items-center lg:text-base text-xs`}
      >
        {/* @ts-ignore */}
        <LightFonts cls={``}>
          Radio Vaults, allow you to verifiably own, distribute, and control
          your music & metadata.
        </LightFonts>
        {/* @ts-ignore */}
        <LightFonts cls={`mx-10`}>
          Seamlessly create NFT collections and have them count as streams when
          being listened to.
        </LightFonts>
        {/* @ts-ignore */}
        <LightFonts cls={``}>
          Copyright and licensing infrastructure for metaverse streaming and
          performing rights!
        </LightFonts>
      </div>
    </ContentContainer>
  );
}
