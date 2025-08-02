
import Image from "next/image";
// Metadata
export const metadata = {
  title: "Blog App",
  description: "You can write your blog here!",
};

export default function Home() {
  return (
    <div className="flex items-center justify-between">
      {/* text container */}
      <div className="h-full flex flex-1 flex-col gap-10 items-start justify-between">
        <h1 className="text-6xl font-bold bg-[linear-gradient(to_bottom,#194c33,#bbb)] hero-text ">
          Better design <br /> for your digital <br /> products.
        </h1>
        <p className="text-lg">
          Turning your ideas into Reality. We bring together <br /> the terms
          from the global tech industry.{" "}
        </p>
        <a href="/blog" className="py-3 px-5 border-none bg-[#53c28b] text-white cursor-pointer rounded-md ">
          Get Started
        </a>
      </div>

      {/* image container */}
      <div className="flex flex-1 flex-col gap-10 items-start justify-between">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
          className=" hero-image"
        />
      </div>
    </div>
  );
}
