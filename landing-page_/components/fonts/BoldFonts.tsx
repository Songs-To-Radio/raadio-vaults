
export default function BoldFonts({cls, children, onClick}) {
  return (
    <div className={`font-bold font-Montserrat ${cls}`} onClick={onClick}>{children}</div>
  )
}
