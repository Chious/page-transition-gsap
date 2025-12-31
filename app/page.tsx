import Image from "next/image";
import backgroundImage1 from "./assets/bg_1.png";

export default function Home() {
  return (
    <section>
      <div className="section-bg">
        <Image src={backgroundImage1} alt="station" />
      </div>

      <div className="section-header">
        <h1>Homebase</h1>
      </div>
    </section>
  );
}
