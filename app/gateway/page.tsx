import Image from "next/image";
import backgroundImage3 from "../assets/bg_3.png";

export default function GatewayPage() {
  return (
    <section>
      <div className="section-bg">
        <Image src={backgroundImage3} alt="station" draggable={false} />
      </div>

      <div className="section-header">
        <h1>Gateway</h1>
      </div>
    </section>
  );
}
