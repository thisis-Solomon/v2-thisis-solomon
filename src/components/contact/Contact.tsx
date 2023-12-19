export default function Contact(): JSX.Element {
  return (
    <section className="hidden">
      <div className="">
        <h1 className="section-title">Get in touch</h1>
        <div className="contact__container bg-grid">
          <form
            className="contact__form"
            action="https://formsubmit.co/solomonnjobvu3@gmail.com"
            method="POST"
          >
            <div>
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className=""
                required
              />

              <input
                type="hidden"
                name="_subject"
                value="This is Email its comming from your Portfolio"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>

              <input
                type="email"
                name="email"
                placeholder="letsworktogether@example.com"
                className="contact__input"
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>

              <textarea
                name="message"
                placeholder="Lets work together!"
                cols={0}
                rows={10}
                className="contact__input"
                required
              ></textarea>
            </div>

            <input type="submit" value="send" className="send btn" />
          </form>
        </div>
      </div>
    </section>
  );
}
