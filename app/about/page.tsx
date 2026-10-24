import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="section page-content">
      <p className="subtitle">TENTANG KAMI</p>
      <h1>Kenali Zone Company</h1>

      <p>
        Zone Company adalah perusahaan yang berfokus pada
        pengembangan solusi digital untuk membantu bisnis.
        Layanan kami meliputi pembuatan website, desain UI/UX,
        dan strategi digital.
      </p>

      <h2>Visi Kami</h2>
      <p>
        Menjadi mitra digital yang membantu bisnis berkembang
        melalui teknologi dan kreativitas.
      </p>

      <h2>Misi Kami</h2>
      <ul>
        <li>Membuat website yang mudah digunakan.</li>
        <li>Mengembangkan desain yang menarik.</li>
        <li>Memberikan solusi digital sesuai kebutuhan bisnis.</li>
      </ul>

      <Link href="/services" className="button">
        Lihat Layanan
      </Link>
    </section>
  );
}
