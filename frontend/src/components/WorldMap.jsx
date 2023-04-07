import Image from "../assets/WorldMap.png";

export default function WorldMap() {
  return (
    <div className="absolute h-full overflow-hidden mix-blend-overlay opacity-50 pointer-events-none">
      <img src={Image} className="object-cover animate-pulse w-full h-full" alt="world map" />
    </div>
  );
}
