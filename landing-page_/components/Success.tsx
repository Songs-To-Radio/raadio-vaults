import LightFonts from "./fonts/LightFonts";
import Button from "./Button";
export default function Success() {
  return (
    <div
      className={`bg-[#D9D9D9] flex justify-center items-center w-full py-10`}
    >
      {/* @ts-ignore */}
      <LightFonts cls={`text-center text-2xl mb-5`}>
        Thank you for signing up for our beta version
      </LightFonts>
      {/* @ts-ignore */}
      <Button>Home</Button>
    </div>
  );
}
