import { useTheme } from "next-themes"
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
  const { resolvedTheme } = useTheme()
  return (
    <button style={style} onClick={onClick} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="red"
        viewBox="0 0 16 16"
        id="upload"
      >
        <path
          fill={resolvedTheme === "dark" ? "#ffffff" : "#212121"}
          d="M5.14645 7.14645L7.64645 4.64645C7.84171 4.45118 8.15829 4.45118 8.35355 4.64645L10.8536 7.14645C11.0488 7.34171 11.0488 7.65829 10.8536 7.85355C10.6583 8.04882 10.3417 8.04882 10.1464 7.85355L8.5 6.20711V11C8.5 11.2761 8.27614 11.5 8 11.5C7.72386 11.5 7.5 11.2761 7.5 11V6.20711L5.85355 7.85355C5.65829 8.04882 5.34171 8.04882 5.14645 7.85355C4.95118 7.65829 4.95118 7.34171 5.14645 7.14645Z"
        ></path>
        <path
          fill={resolvedTheme === "dark" ? "#ffffff" : "#212121"}
          d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z"
        ></path>
      </svg>
    </button>
  )
}
