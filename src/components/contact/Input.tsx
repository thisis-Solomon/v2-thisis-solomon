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
  ...props
}: InputPropsIF): JSX.Element {
  const inputStyles = "dark:bg-stone-400 placeholder:text-stone-700 border w-full p-2 text-sm rounded-md";

  return (
    <div>
      <label
        className="block text-stone-500 dark:text-stone-400 uppercase text-sm mb-1"
        htmlFor={name}
      >
        {label}
      </label>

      {type ? (
        <input className={inputStyles} {...props} />
      ) : (
        <textarea className={inputStyles} {...props}></textarea>
      )}
    </div>
  );
}
