import type { Link } from "../types/Links";

export default function Header() {
  
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
    <header className="flex flex-row justify-center mt-5 mb-20">
      <nav className="py-1 px-6 rounded-2xl transition delay-75 duration-300 ease-in-out hover:bg-gray-50 hover:shadow hover:-translate-y-1">
        <ul className="flex gap-x-6 md:gap-x-10 md:text-[16px] text-blue-950">
          {links.map((link) => (
            <li key={link.name}>
              <a className="font-bold" href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
