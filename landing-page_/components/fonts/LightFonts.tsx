
export default function LightFonts({ cls, children, onClick }) {
  return (
    <div className={`font-medium font-Montserrat ${cls}`} onClick={onClick}>
      {children}
    </div>
  );
}
