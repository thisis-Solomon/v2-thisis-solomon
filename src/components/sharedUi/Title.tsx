import { ReactNode } from "react";

interface TitlePropsIF {
  children: ReactNode;
}

export const Title = ({ children, ...props }: TitlePropsIF): JSX.Element => {
  return (
    <h1
      {...props}
      className="uppercase mb-5 font-semibold tracking-widest text-xl w-fit dark:mix-blend-lighten relative dark:text-stone-300 before:mix-blend-plus-lighter before:absolute before:w-[60%] before:bg-stone-400/60 before:h-4 before:bottom-0 before:right-0 before:-z-10"
    >
      {children}
    </h1>
  );
};
