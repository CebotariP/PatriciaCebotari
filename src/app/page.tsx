import Image from "next/image";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/back.JPG')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div id="logo" className="w-[700px] text-[60px] justify-center flex gap-2 ">
      <a href="" >
        <span>Patricia</span><span> Cebotari</span>
      </a>
      </div>

      <div className="flex gap-4 items-center flex-col place-self-center scale-125 sm:flex-row sm:gap-8">
      <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[rgba(0,0,0,0.5)] text-white gap-2 hover:bg-[rgba(0,0,0,0.7)] dark:hover:bg-[rgba(136, 71, 71, 0.5)] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      >
      <Image
        src="/Sprout Logo.png"
        alt="Project Sprout Plant logomark"
        width={20}
        height={20}
      />
      Projects
      </a>
      <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[rgba(0,0,0,0.5)] text-white gap-2 hover:bg-[rgba(0,0,0,0.7)] dark:hover:bg-[rgba(136, 71, 71, 0.5)] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      >
      <Image
        src="/SproutGrowing.png"
        alt="About Me: Sprout Plant Growing logomark"
        width={20}
        height={20}
      />
      About Me
      </a>
      <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[rgba(0,0,0,0.5)] text-white gap-2 hover:bg-[rgba(0,0,0,0.7)] dark:hover:bg-[rgba(136, 71, 71, 0.5)] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      >
      <Image
        src="/SproutSprouting.png"
        alt="Contact Sprout Plant Sprouting logomark"
        width={20}
        height={20}
      />
      Contact
      </a>
      </div>
      </main>
    </div>
  );
}
