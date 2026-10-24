import Link from "next/link";
import ServiceCard, { services } from "@/components/ServiceCard";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">
            ● YOUR DIGITAL GROWTH PARTNER
          </p>

          <h1>
            Ide besar,
            <br />
            <span>dibuat menjadi</span>
            <br />
            <span>nyata.</span>
          </h1>

          <p className="hero-description">
            Kami membantu bisnis berkembang dengan solusi
            digital yang kreatif, fungsional, dan dirancang
            untuk masa depan.
          </p>

          <div className="hero-buttons">
            <Link href="/services" className="button">
              Jelajahi Layanan ↗
            </Link>

            <Link href="/about" className="button button-outline">
              Kenali Kami
            </Link>
          </div>

          <p className="hero-note">
            ✳ Strategi yang tepat. Hasil yang berdampak.
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-circle circle-large"></div>
          <div className="hero-circle circle-medium"></div>
          <div className="hero-circle circle-small"></div>

          <div className="hero-logo">Z</div>

          <div className="hero-card hero-card-top">
            <span className="hero-card-icon">✳</span>
            <div>
              <strong>Creative Ideas</strong>
              <p>Designed with purpose</p>
            </div>
          </div>

          <div className="hero-card hero-card-bottom">
            <span className="hero-card-icon">↗</span>
            <div>
              <strong>Digital Growth</strong>
              <p>Built for the future</p>
            </div>
          </div>

          <span className="hero-decoration">+</span>
          <span className="hero-decoration decoration-top">✳</span>
        </div>
      </section>

      <section className="section">
        <h2>Layanan Kami</h2>
        <p>Solusi yang kami tawarkan untuk kebutuhan bisnis.</p>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="about-summary">
        <h2>Mengapa Zone Company?</h2>
        <p>
          Kami mengutamakan kreativitas, kemudahan penggunaan,
          dan teknologi untuk menghasilkan solusi digital.
        </p>

        <Link href="/about" className="button">
          Tentang Kami
        </Link>
      </section>
    </>
  );
}
