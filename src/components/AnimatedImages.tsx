import { useEffect, useState } from "react";

const images = [
  "/Soldier1.png",
  "/Soldier2.png",
  "/Soldier3.png",
  "/Soldier4.png",
  "/Soldier5.png",
  "/Soldier6.png",
];

export default function AnimatedImages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img
        src={images[index]}
        alt={`Imagen ${index + 1}`}
        className="w-48 h-62 object-cover"
      />
      <p className="text-gray-800">
        by{" "}
        <a href="https://itch.io/profile/zerie" className="font-semibold">
          @Zerie
        </a>
      </p>
    </div>
  );
}
