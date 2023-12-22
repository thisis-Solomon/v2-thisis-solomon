import Input from "./Input";

export default function Contact(): JSX.Element {
  return (
    <section className="my-16">
      <h1 className="uppercase font-semibold tracking-widest mb-5">
        Get in touch
      </h1>
      <div className="contact__container bg-grid">
        <form
          className="flex flex-col gap-y-3"
          action="https://formsubmit.co/solomonnjobvu3@gmail.com"
          method="POST"
        >
          <Input
            type="text"
            label="Name"
            placeholder="Name"
            required
            name="name"
          />
          <input
            type="hidden"
            name="_subject"
            className="hidden"
            value="This Email it's coming from your Portfolio"
          />
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="letsworktogether@example.com"
            required
          />
          <Input
            name="message"
            label="Message"
            placeholder="Lets work together!"
            cols={0}
            rows={10}
            type={undefined}
          />

          <input
            type="submit"
            value="send"
            className="border text-lg uppercase py-1 rounded-md cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
}
