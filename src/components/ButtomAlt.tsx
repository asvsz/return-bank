export interface IButtomAltProps {
  logo: string
  text: string
}
export function ButtomAlt ({logo, text}: IButtomAltProps) {
  return (
    <button className="rounded-xl text-greenPrimary bg-greenAlpha h-44 w-44 flex flex-col items-center justify-center">
      <div className="px-10 self-center  flex flex-col items-center justify-center">
        <img className="h-20 w-20" src={logo} alt={text} />
        <p className="font-bold mt-2">{text}</p>
      </div>
    </button>
  )
}
