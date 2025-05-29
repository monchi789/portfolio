import type { Link } from "../types/Links";


export default function Footer() {
  const links: Link[] = [
    {
      name: "Inicio",
      href: "#",
    },
    {
      name: "Resumen",
      href: "#",
    },
    {
      name: "Proyectos",
      href: "#",
    },
    {
      name: "Sobre Mi",
      href: "#",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <ul className="flex justify-center gap-x-5 text-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <p><span className="font-semibold text-blue-950">@monchi789</span></p>
      </div>
    </>
  );
}
