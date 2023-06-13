import Image from "next/image"
import { CSSProperties, MouseEventHandler } from "react"

export const ArrowUpButton = ({
  style,
  onClick,
  className,
}: {
  style?: CSSProperties
  className: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button style={style} onClick={onClick} className={className}>
      <Image src="/arrowup.svg" width={50} height={50} alt="arrowup" />
    </button>
  )
}
