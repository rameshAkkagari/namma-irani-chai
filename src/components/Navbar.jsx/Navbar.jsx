import { Button } from '@material-tailwind/react'
import React from 'react'

function Navbar() {
  return (
    <div>
<main className="flex flex-col">
  <section className="w-full bg-gray-100 py-20 md:py-32 dark:bg-gray-800">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Delicious Cookies Delivered to Your Door
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Indulge in our freshly baked, artisanal cookies. Made with the finest ingredients, each bite is a taste
            of heaven.
          </p>
          {/* <div>
            <a className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-950" href="#" rel="ugc">
              Buy Now
            </a>
          </div> */}
          <Button>Buy Now</Button>
        </div>
        <img src="https://cafeniloufer.com/cdn/shop/products/Osmania_800x.jpg?v=1647518239" width={600} height={400} alt="Cookies" className="mx-auto rounded-lg object-cover" style={{aspectRatio: '600 / 400', objectFit: 'cover'}} />
      </div>
    </div>
  </section>
  <section className="w-full py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Delectable Cookie Flavors</h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            Explore our wide selection of freshly baked cookies.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <img src="/placeholder.svg" width={300} height={200} alt="Chocolate Chip Cookies" className="mx-auto rounded-lg object-cover" style={{aspectRatio: '300 / 200', objectFit: 'cover'}} />
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-bold">Chocolate Chip</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our classic chocolate chip cookies are made with premium chocolate and a hint of vanilla.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <img src="/placeholder.svg" width={300} height={200} alt="Oatmeal Raisin Cookies" className="mx-auto rounded-lg object-cover" style={{aspectRatio: '300 / 200', objectFit: 'cover'}} />
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-bold">Oatmeal Raisin</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Chewy oatmeal cookies with plump raisins, perfect for a wholesome treat.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <img src="/placeholder.svg" width={300} height={200} alt="Peanut Butter Cookies" className="mx-auto rounded-lg object-cover" style={{aspectRatio: '300 / 200', objectFit: 'cover'}} />
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-bold">Peanut Butter</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Indulge in our rich and creamy peanut butter cookies, a classic favorite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full bg-gray-100 py-20 md:py-32 dark:bg-gray-800">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">Have a custom order or feedback? Let us know.</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
              Name
            </label>
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Your Name" required type="text" />
          </div>
          <div>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
              Email
            </label>
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="you@example.com" required type="email" />
          </div>
          <div>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
              Message
            </label>
            <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="message" rows={5} placeholder="Your message..." required defaultValue={""} />
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</main>

    </div>
  )
}

export default Navbar