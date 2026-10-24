import Link from "next/link";

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Membuat website yang menarik dan mudah digunakan.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Merancang tampilan website yang nyaman bagi pengguna.",
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description:
      "Membantu bisnis menentukan strategi digital yang tepat.",
  },
];

export default function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <div className="service-card">
      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <Link href={`/services/${service.id}`}>
        Lihat Detail →
      </Link>
    </div>
  );
}