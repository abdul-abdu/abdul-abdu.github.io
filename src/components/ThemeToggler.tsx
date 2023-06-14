import { useTheme } from "next-themes"
import Image from "next/image"

export const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center transition-all bg-gray-200 rounded-lg w-9 h-9 dark:bg-gray-600 hover:ring-2 ring-gray-300"
    >
      {resolvedTheme === "dark" ? (
        <Image src="/sun.svg" width={30} height={30} alt="sun" />
      ) : (
        <Image src="/moon.svg" height={30} width={30} alt="moon" />
      )}
    </button>
  )
}
