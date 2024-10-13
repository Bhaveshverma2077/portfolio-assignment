const formStyle =
  "w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-K-ASCENT bg-white/90 text-black";

const handleSubmit = (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  const subject = encodeURIComponent(`Contact from ${name}`);
  const body = encodeURIComponent(
    `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}`
  );

  const mailtoLink = `mailto:bhaveshverma2077@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
};

export default function ContactSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6 sm:p-8">
      <form
        className="border-2 border-K-ASCENT bg-black shadow-lg p-6 sm:p-10 w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Contact Me
        </h2>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className={formStyle}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className={formStyle}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            rows="5"
            className={formStyle}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-K-ASCENT text-black py-3 rounded-lg hover:bg-K-ASCENT/40 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
