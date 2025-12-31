import Image from "next/image";
import backgroundImage4 from "../assets/bg_4.png";

export default function ColonyPage() {
  return (
    <section>
      <div className="section-bg">
        <Image
          src={backgroundImage4}
          alt="station"
          draggable={false}
          fetchPriority="high"
          loading="eager"
        />
      </div>

      <div className="section-header">
        <h1>ColonyPage</h1>
      </div>
    </section>
  );
}
