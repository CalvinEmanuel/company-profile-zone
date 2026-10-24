import Link from "next/link";
import { services } from "@/components/ServiceCard";

const serviceDetails = {
  "web-development": {
    intro:
      "Kami membantu bisnis memiliki website yang profesional, responsif, dan mudah digunakan.",
    offerings: [
      "Pembuatan website company profile dan bisnis.",
      "Tampilan responsif di laptop maupun smartphone.",
      "Pengembangan fitur sesuai kebutuhan bisnis.",
    ],
  },

  "ui-ux-design": {
    intro:
      "Kami merancang tampilan dan pengalaman pengguna agar website terlihat menarik serta mudah dipahami.",
    offerings: [
      "Desain antarmuka yang modern dan rapih.",
      "Penyusunan navigasi yang mudah digunakan.",
      "Pemilihan warna, ikon, dan komposisi teks yang konsisten.",
    ],
  },

  "digital-strategy": {
    intro:
      "Kami membantu bisnis menyusun strategi digital agar lebih terarah dan sesuai dengan tujuan perusahaan.",
    offerings: [
      "Perencanaan strategi pemasaran digital.",
      "Analisis kebutuhan dan target pelanggan.",
      "Rekomendasi solusi digital untuk pengembangan bisnis.",
    ],
  },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const service = services.find((item) => item.id === id);
  const detail =
    serviceDetails[id as keyof typeof serviceDetails];

  if (!service || !detail) {
    return (
      <section className="section page-content">
        <h1>Layanan tidak ditemukan</h1>
        <Link href="/services">Kembali ke Layanan</Link>
      </section>
    );
  }

  return (
    <section className="section page-content">
      <p className="subtitle">DETAIL LAYANAN</p>

      <h1>{service.title}</h1>
      <p>{service.description}</p>

      <h2>Apa yang Kami Tawarkan?</h2>
      <p>{detail.intro}</p>

      <ul className="service-list">
        {detail.offerings.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Link href="/services" className="button">
        Kembali ke Layanan
      </Link>
    </section>
  );
}