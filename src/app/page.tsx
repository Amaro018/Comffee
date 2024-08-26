import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 bg-gray-200">
      <div className="w-full  h-screen p-16">
        <section id="navigation" className="flex flex-row text-2xl text-gray-700 items-center border-2 border-b-gray-400">
          <div className="logo">
            <img src="images\logo.png" alt="" className="w-36"/>
          
          </div>
            <div className="navbar flex gap-4">
              <a href="">Home</a>
              <a href="">Product</a>
              <a href="">Contact</a>
              <a href="">About us</a>
          </div>
         <div>

         </div>
        </section>
      </div>

    </main>
  );
}
