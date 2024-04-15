export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t md:w-[60%] mx-auto pb-8 pt-2 flex flex-col justify-center space-y-2 md:my-10 text-stone-600 dark:text-stone-400">
      <small className="inline-block text-center">
        built with React, Typescript, Tailwind CSS and Sanity.
      </small>
      <p className="text-center text-sm w-full">
        &copy;{currentYear} Solomon Njobvu.
      </p>
    </footer>
  );
}
