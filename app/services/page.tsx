import ServiceCard, { services } from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <section className="section page-content">
      <p className="subtitle">LAYANAN KAMI</p>
      <h1>Solusi Digital Kami</h1>

      <p>
        Pilih layanan yang sesuai dengan kebutuhan bisnis kamu.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
