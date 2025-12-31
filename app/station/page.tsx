import Image from "next/image";
import backgroundImage2 from "../assets/bg_2.png";

export default function StationPage() {
  return (
    <section>
      <div className="section-bg">
        <Image
          src={backgroundImage2}
          alt="station"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div className="section-header">
        <h1>Station</h1>
      </div>
    </section>
  );
}
