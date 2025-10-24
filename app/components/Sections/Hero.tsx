import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl lg:text-6xl font-bold">
            Hello,<br />
            We Help People To Bring Their Ideas Alive
          </h1>
          <p className="mb-8 text-lg lg:text-xl">
            A talented team to help you in your journey on creating useful and easy to use product
          </p>
          <Link to="/services" className="btn btn-accent btn-lg text-white hover:scale-105 transition-transform">
            LET'S START: Check our Services
          </Link>
        </div>
      </div>
    </section>
  );
}