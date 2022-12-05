import LightFonts from "./fonts/LightFonts";

export default function Input({
  type,
  label,
  placeholder,
  cls_b,
  formName,
  id,
  value,
}) {
  return (
    <div className={`w-full flex flex-col`}>
      {/* @ts-ignore */}
      <LightFonts cls={`mb-3`}>{label}</LightFonts>
      <input
        className={`text-black font-medium w-full text-sm placeholder-grey-300 bg-grey-700 py-4 px-6 rounded-full ${cls_b}`}
        placeholder={placeholder}
        type={type}
        name={formName}
        id={id}
        value={value}
       
        style={{
          border: "0",
          outline: "none",
        }}
      />
    </div>
  );

}
