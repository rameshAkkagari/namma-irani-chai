import React from 'react'

function About() {
  return (
   <>

<div className="min-h-[100dvh] flex flex-col">

  <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32 border-b bg-[#194332] text-white">
      <div className="w-[90%] px-4 md:px-6 space-y-8 lg:space-y-12 mx-4 m-auto">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2 lg:gap-12 ">
          <div className="space-y-4 lg:space-y-6 m-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Namma Irani Chai
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover the authentic taste of Irani chai, brewed with love and tradition. Our mission is to share
              the rich heritage and unique flavors of this beloved beverage with the world.
            </p>
          </div>
          <img src="https://thumbs.dreamstime.com/z/organic-dried-indian-tea-leaves-assam-pile-dried-organic-green-tea-leaves-tea-dust-infuser-to-make-indian-tea-masala-189830441.jpg?ct=jpeg" width={600} height={400} alt="Irani Chai" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover" />
        </div>
      </div>
    </section>


    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-[90%] px-4 md:px-6 space-y-8 lg:space-y-12 m-auto">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="inline-block rounded-md bg-[#194332] text-white px-3 py-1 text-sm dark:bg-gray-800">
              History &amp; Origins
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Rich Heritage of Irani Chai
            </h2>
            <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Irani chai has its roots in the Zoroastrian communities of Persia, who brought this unique brewing
              method to India during the 19th century. The distinct flavor profile and preparation techniques have
              been passed down through generations, making Irani chai a cherished part of the local culture.
            </p>
          </div>
          <div>
            <div className="inline-block rounded-md bg-[#194332] text-white px-3 py-1 text-sm dark:bg-gray-800">
              Brewing Process
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Art of Brewing Irani Chai
            </h2>
            <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Irani chai is brewed using a unique method that involves boiling the tea leaves, milk, and spices
              together in a traditional copper pot. This process allows the flavors to meld and create a rich,
              aromatic beverage that is unlike any other tea. The attention to detail and traditional techniques are
              what make Irani chai truly special.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#194332] text-white dark:bg-gray-800">
      <div className="w-[90%] px-4 md:px-6 space-y-8 lg:space-y-12 m-auto">
        <div className="text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-[#194332]">Our Team</div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Founders</h2>
          <p className="mt-4 max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our team of passionate individuals is dedicated to preserving the rich heritage and unique flavors of
            Irani chai. Get to know the founders behind Namma Irani Chai.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center space-y-4">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JD</span>
            </span>
            <div className="space-y-1 text-center">
              <h4 className="text-lg font-semibold">Javed Dastoor</h4>
              <p className="text-gray-500 dark:text-gray-400">Co-Founder</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">RP</span>
            </span>
            <div className="space-y-1 text-center">
              <h4 className="text-lg font-semibold">Roshni Patel</h4>
              <p className="text-gray-500 dark:text-gray-400">Co-Founder</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">KS</span>
            </span>
            <div className="space-y-1 text-center">
              <h4 className="text-lg font-semibold">Kiran Shetty</h4>
              <p className="text-gray-500 dark:text-gray-400">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-[90%] px-4 md:px-6 space-y-8 lg:space-y-12 m-auto">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="inline-block bg-[#194332] text-white px-3 py-1 text-sm dark:bg-gray-800">Sustainability</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
              Committed to Sustainability
            </h2>
            <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At Namma Irani Chai, we are committed to sustainable and ethical practices. We source our ingredients
              from local, small-scale farmers who use organic and environmentally-friendly methods. We also strive
              to minimize waste and reduce our carbon footprint throughout our operations.
            </p>
          </div>
          <div>
            <div className="inline-block bg-[#194332] text-white px-3 py-1 text-sm dark:bg-gray-800">
              Ethical Sourcing
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ethically Sourced Ingredients
            </h2>
            <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We believe in supporting local communities and ensuring fair trade practices. That's why we work
              closely with our suppliers to ensure that all of our ingredients, from the tea leaves to the spices,
              are ethically sourced and provide a fair livelihood for the producers.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

   </>
  )
}

export default About






// import React from "react";

// function About() {
//   return (
//     <div>
//       <main className="flex flex-col gap-16 py-12 md:py-20 lg:py-24">
//         <section className="w-full text-white flex flex-col items-center gap-6 text-center m-auto bg-[#194332]">
//           <div className="flex flex-col items-center gap-4">
//             <img
//               src="https://nammairanichai.com/wp-content/uploads/2024/04/IC-LOGO-1-1-2048x1288.png"
//               width={100}
//               height={100}
//               alt="Namma Irani Chai Logo"
//               style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
//             />
//             <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
//               Namma Irani Chai
//             </h1>
//           </div>
//           <p className="max-w-[700px] text-gray-500 md:text-2xl dark:text-gray-400">
//             Immerse yourself in the rich history and authentic flavors of Irani
//             chai at our cozy cafe, where tradition and modernity blend
//             seamlessly.
//           </p>
//         </section>
//         <section className="container grid gap-10 lg:grid-cols-2 lg:gap-16">
//           <div className="space-y-4">
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
//               Our Founder's Story
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400">
//               Namma Irani Chai was founded by Aisha, a passionate tea enthusiast
//               whose love for the traditional Irani chai brewing method inspired
//               her to share this unique experience with the world. Growing up in
//               a family-owned Irani cafe, Aisha learned the art of crafting the
//               perfect cup of chai from a young age.
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               Determined to preserve this rich cultural heritage, Aisha opened
//               Namma Irani Chai in the heart of the city, creating a cozy and
//               welcoming space where locals and visitors alike can indulge in the
//               soothing flavors of authentic Irani chai.
//             </p>
//           </div>
//           <div className="flex items-center justify-center">
//             <img
//               src="/placeholder.svg"
//               width={500}
//               height={500}
//               alt="Founder Portrait"
//               className="rounded-lg object-cover"
//               style={{ aspectRatio: "500 / 500", objectFit: "cover" }}
//             />
//           </div>
//         </section>
//         <section className="container grid gap-10 lg:grid-cols-2 lg:gap-16">
//           <div className="space-y-4">
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
//               Our History and Mission
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400">
//               Namma Irani Chai was established in 2018 with the mission of
//               preserving the rich cultural heritage of Irani chai and sharing
//               its unique flavors with the local community. Drawing inspiration
//               from the traditional Irani cafes of the past, we have created a
//               space that celebrates the art of tea-making and the warm,
//               welcoming atmosphere that has made Irani chai a beloved tradition.
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               Our commitment to quality and authenticity is reflected in every
//               aspect of our cafe, from the carefully sourced ingredients to the
//               meticulous brewing process. We take pride in offering our
//               customers a truly authentic Irani chai experience, transporting
//               them to a bygone era of timeless tradition and unparalleled
//               flavor.
//             </p>
//           </div>
//           <div className="flex items-center justify-center">
//             <img
//               src="/placeholder.svg"
//               width={500}
//               height={500}
//               alt="Cafe Interior"
//               className="rounded-lg object-cover"
//               style={{ aspectRatio: "500 / 500", objectFit: "cover" }}
//             />
//           </div>
//         </section>
//         <section className="container grid gap-10 lg:grid-cols-2 lg:gap-16">
//           <div className="space-y-4">
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
//               Visit Us
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400">
//               You can find us in the heart of the city, nestled in a charming
//               heritage building that captures the essence of traditional Irani
//               cafes. Our cozy and inviting space is the perfect setting to
//               experience the rich flavors and warm hospitality that Namma Irani
//               Chai is known for.
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               We invite you to visit us and immerse yourself in the timeless
//               tradition of Irani chai. Whether you're a local or a visitor, we
//               promise an unforgettable experience that will leave you craving
//               for more.
//             </p>
//           </div>
//           <div className="flex items-center justify-center" />
//         </section>
//       </main>
//     </div>
//   );
// }

// export default About;

