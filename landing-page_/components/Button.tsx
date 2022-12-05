
export default function Button({ children, cls, onClick }) {
  return (
    <div
      className={`${cls} bg-red-600 px-[20px] py-[10px] text-white flex justify-center items-center rounded-xl cursor-pointer`}
      onClick={onClick}
    >
      <h4>{children}</h4>
    </div>
  );
}
