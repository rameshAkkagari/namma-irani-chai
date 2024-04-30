import React from "react";
import { Button } from "@material-tailwind/react";
function Location() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 text-white bg-[#194332]">
        <div className="w-[90%] grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 m-auto">
          <div className="space-y-4">
            <div className="inline-block rounded-lg text-[#194332] bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Our Location
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Visit Our Flagship Store
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our flagship store is located in the heart of the city, offering a
              unique shopping experience with a curated selection of our latest
              products. Come and explore our store, meet our knowledgeable
              staff, and discover the perfect items for your home.
            </p>
            <Button>Get Diraction</Button>
          </div>
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.928766888464!2d77.6317454760383!3d12.912299787397677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155248d7d4bb%3A0x9e49c4894da36b7e!2sThe%20Irani%20Chai!5e0!3m2!1sen!2sin!4v1714479427914!5m2!1sen!2sin"
              width="700"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

         <section className="w-full py-12 md:py-24 lg:py-32 border-t">
           <div className="w-[90%] px-4 md:px-6 m-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Outlets</h2>
                 <div className="space-y-4">
                   <div className="flex items-start gap-4">
                     {/* <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" /> */}
                     <div>
                       <h3 className="font-semibold">Indiranagar</h3>
                       <p className="text-gray-500 dark:text-gray-400">100 Feet Road, Indiranagar, Bangalore</p>
                       <p className="text-gray-500 dark:text-gray-400">Phone: +91 9876543210</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     {/* <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" /> */}
                     <div>
                       <h3 className="font-semibold">Koramangala</h3>
                       <p className="text-gray-500 dark:text-gray-400">5th Block, Koramangala, Bangalore</p>
                       <p className="text-gray-500 dark:text-gray-400">Phone: +91 9876543210</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     {/* <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" /> */}
                     <div>
                       <h3 className="font-semibold">Jayanagar</h3>
                       <p className="text-gray-500 dark:text-gray-400">4th Block, Jayanagar, Bangalore</p>
                       <p className="text-gray-500 dark:text-gray-400">Phone: +91 9876543210</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     {/* <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" /> */}
                     <div>
                       <h3 className="font-semibold">Whitefield</h3>
                       <p className="text-gray-500 dark:text-gray-400">ITPL Main Road, Whitefield, Bangalore</p>
                       <p className="text-gray-500 dark:text-gray-400">Phone: +91 9876543210</p>
                     </div>
                   </div>
                 </div>
               </div>
               <div>
                 <h2 className="text-3xl font-bold tracking-tighter mb-4">Upcoming Outlets</h2>
                 <div className="space-y-4">
                   <div className="flex items-start gap-4">
                     {/* <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" /> */}
                     <div>
                       <h3 className="font-semibold">Malleshwaram</h3>
                       <p className="text-gray-500 dark:text-gray-400">8th Cross, Malleshwaram, Bangalore</p>
                       <p className="text-gray-500 dark:text-gray-400">Opening Soon</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     {/* <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" /> */}
                     <div>
                       <h3 className="font-semibold">HSR Layout</h3>
                       <p className="text-gray-500 dark:text-gray-400">Sector 1, HSR Layout, Bangalore</p>
                       <p className="text-gray-500 dark:text-gray-400">Opening Soon</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     {/* <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" /> */}
                     <div>
                       <h3 className="font-semibold">Marathahalli</h3>
                       <p className="text-gray-500 dark:text-gray-400">ITPL Main Road, Marathahalli, Bangalore</p>
                       <p className="text-gray-500 dark:text-gray-400">Opening Soon</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
    </div>
  );
}

export default Location;

//  === component.jsx ===

 /**
  * v0 by Vercel.
//   * @see https:v0.dev/t/QKFD8DnNFjj
  * Documentation: https:v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link"

// export default function Component() {
//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <MountainIcon className="h-6 w-6" />
//           <span className="sr-only">Namma Irani Chai</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Locations
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Menu
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             About
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Contact
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                   Namma Irani Chai
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Authentic Irani chai experience in the heart of the city.
//                 </p>
//               </div>
//               <div className="space-x-4">
//                 <Link
//                   className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                   href="#"
//                 >
//                   Find a Location
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find Your Nearest Outlet</h2>
//                   <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                     Check out our list of Namma Irani Chai outlets across the city and plan your visit.
//                   </p>
//                 </div>
//               </div>
//               <div className="border shadow-sm rounded-lg" />
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 border-t">
//           <div className="container px-4 md:px-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Outlets</h2>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-4">
//                     <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" />
//                     <div>
//                       <h3 className="font-semibold">Indiranagar</h3>
//                       <p className="text-gray-500 dark:text-gray-400">100 Feet Road, Indiranagar, Bangalore</p>
//                       <p className="text-gray-500 dark:text-gray-400">Phone: +91 9876543210</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" />
//                     <div>
//                       <h3 className="font-semibold">Koramangala</h3>
//                       <p className="text-gray-500 dark:text-gray-400">5th Block, Koramangala, Bangalore</p>
//                       <p className="text-gray-500 dark:text-gray-400">Phone: +91 9876543210</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" />
//                     <div>
//                       <h3 className="font-semibold">Jayanagar</h3>
//                       <p className="text-gray-500 dark:text-gray-400">4th Block, Jayanagar, Bangalore</p>
//                       <p className="text-gray-500 dark:text-gray-400">Phone: +91 9876543210</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" />
//                     <div>
//                       <h3 className="font-semibold">Whitefield</h3>
//                       <p className="text-gray-500 dark:text-gray-400">ITPL Main Road, Whitefield, Bangalore</p>
//                       <p className="text-gray-500 dark:text-gray-400">Phone: +91 9876543210</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold tracking-tighter mb-4">Upcoming Outlets</h2>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-4">
//                     <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" />
//                     <div>
//                       <h3 className="font-semibold">Malleshwaram</h3>
//                       <p className="text-gray-500 dark:text-gray-400">8th Cross, Malleshwaram, Bangalore</p>
//                       <p className="text-gray-500 dark:text-gray-400">Opening Soon</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" />
//                     <div>
//                       <h3 className="font-semibold">HSR Layout</h3>
//                       <p className="text-gray-500 dark:text-gray-400">Sector 1, HSR Layout, Bangalore</p>
//                       <p className="text-gray-500 dark:text-gray-400">Opening Soon</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <LocateIcon className="mt-1 text-gray-500 dark:text-gray-400" />
//                     <div>
//                       <h3 className="font-semibold">Marathahalli</h3>
//                       <p className="text-gray-500 dark:text-gray-400">ITPL Main Road, Marathahalli, Bangalore</p>
//                       <p className="text-gray-500 dark:text-gray-400">Opening Soon</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Namma Irani Chai. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

// function LocateIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="2" x2="5" y1="12" y2="12" />
//       <line x1="19" x2="22" y1="12" y2="12" />
//       <line x1="12" x2="12" y1="2" y2="5" />
//       <line x1="12" x2="12" y1="19" y2="22" />
//       <circle cx="12" cy="12" r="7" />
//     </svg>
//   )
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }

// === styles.css ===

// body {
//   font-family: var(--font-caudex), serif;
// }

// h1, h2, h3, h4, h5, h6 {
//   font-family: var(--font-caudex), serif;
// }

// === layout.jsx ===

// // This is the root layout component for your Next.js app.
// // Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

// import { Caudex } from 'next/font/google'
// import './styles.css'

// const caudex = Caudex({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-caudex',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={caudex.variable}>
//         {children}
//       </body>
//     </html>
//   )
// }
