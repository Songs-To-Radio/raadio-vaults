import Button from "./Button"
import ContentContainer from "./ContentContainer"
import LightFonts from "./fonts/LightFonts";
import Input from "./Input"


export default function Signup({cls}) {
  return (
    <div
      className={`bg-[#D9D9D9] flex flex-col justify-center items-center w-full py-10 ${cls} absolute top-[80px] left-0`}
    >
      {/* @ts-ignore */}
      <LightFonts cls={`text-2xl w-9/12 text-center`}>
        Signup for Beta Testing of our Radio Vaults and be the first to
        implement this cutting edge technology
      </LightFonts>
      <ContentContainer
        cls={`grid grid-cols-2 lg:gap-x-24 gap-x-10 gap-y-10 w-9/12 my-20`}
      >
        {/* @ts-ignore */}
        <Input
          label={`First name:`}
          placeholder={`enter yout first name`}
          type={`text`}
        />
        {/* @ts-ignore */}
        <Input
          label={`Email address:`}
          placeholder={`enter your email address`}
          type={`email`}
        />
        {/* @ts-ignore */}
        <Input
          label={`Last name:`}
          placeholder={`enter your last name`}
          type={`text`}
        />
        {/* @ts-ignore */}
        <Input label={`Company name:`} placeholder={`optional`} type={`text`} />
      </ContentContainer>
      {/* @ts-ignore */}
      <Button>Submit</Button>
    </div>
  );
}


