import { useEffect, useState } from "react";
import { PiMoonLight, PiSunLight } from "react-icons/pi";

const storedTheme = localStorage.getItem("theme");
const initialTheme = storedTheme ? JSON.parse(storedTheme) : true;

export default function Header(): JSX.Element {
  const [itsLight, setItsLight] = useState<boolean>(initialTheme);

  const themeHandler = (): void => {
    const newTheme = !itsLight;

    setItsLight(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    document.body.classList.toggle("dark", !itsLight);
  }, [itsLight]);

  return (
    <header>
      <nav className="container mx-auto w-[70%] flex justify-end absolute top-16 right-16">
        <button
          onClick={themeHandler}
          className="border md:text-2xl px-4 flex items-center gap-x-2 py-3 rounded-full dark:text-stone-100 dark:border-teal-500"
        >
          <span className="text-sm md:text-base">
            {!itsLight ? "Light" : "Dark"}
          </span>
          {!itsLight ? <PiSunLight /> : <PiMoonLight />}
        </button>
      </nav>
    </header>
  );
}
