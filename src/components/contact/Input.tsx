interface InputPropsIF {
  type?: "text" | "password" | "email" | "number" | "checkbox";
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  cols?: number;
  rows?: number;
}

export default function Input({
  type,
  name,
  label,
  cols,
  rows,
  ...props
}: InputPropsIF): JSX.Element {
  const inputStyles =
    "dark:bg-stone-400 placeholder:text-stone-700 border dark:border-none w-full p-2 text-sm rounded-md";

  return (
    <div>
      <label
        className="block text-stone-500 dark:text-stone-400 uppercase text-sm mb-1"
        htmlFor={name}
      >
        {label}
      </label>

      {type ? (
        <input
          className={inputStyles}
          id={name}
          name={name}
          type={type}
          {...props}
        />
      ) : (
        <textarea
          className={inputStyles}
          id={name}
          name={name}
          cols={cols}
          rows={rows}
          {...props}
        ></textarea>
      )}
    </div>
  );
}
