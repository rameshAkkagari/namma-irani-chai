import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';

const chaiImages = [
    "https://www.shutterstock.com/image-photo/one-irani-chai-please-this-260nw-755501224.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2021/7/SO/CF/SD/81257108/lemon-tea-500x500-250x250.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNU8Gb9miqgfMtKDqtGz2T5rwvmtciLgzgAsnxRnv3A&s",
    "https://images.news18.com/ibnkhabar/uploads/2024/01/chai-vs-coffee-1-2024-01-1eb2a0cdb153465398c658e8f9471b5a.jpg",
]

function LandingPage() {
    const [chaipng,SetChaipng] = useState(0)
    useEffect(() => {
        // Set up a timer
        const timer = setInterval(() => {
            // Update the current index, and cycle back to the start if it reaches the end
            SetChaipng((prevIndex) => (prevIndex + 1) % chaiImages.length);
        }, 4000); // 2000 milliseconds = 2 seconds

        // Clear the interval on component unmount
        return () => clearInterval(timer);
    }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
   <div className="flex flex-col min-h-[100dvh] ">
    {/* <Header/> */}
  <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-[#194332] text-white">
      <div className="container md:px-6 m-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                Authentic Irani Chai
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover the rich, aromatic flavors of our traditional Irani chai, brewed with care and passion.
              </p>
            </div>
         
            <Button>Explore the Menu</Button>

          </div>
          <img src={chaiImages[chaipng]} width={800} height={600} alt="Irani Chai" className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full" />
        </div>
      </div>
    </section>

<section className="w-full bg-gray-100 py-20 md:py-32 dark:bg-gray-800">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <img src="https://cafeniloufer.com/cdn/shop/products/Osmania_800x.jpg?v=1647518239" width={600} height={400} alt="Cookies" className="mx-auto rounded-lg object-cover" style={{aspectRatio: '600 / 400', objectFit: 'cover'}} />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Delicious Cookies Delivered to Your Door
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Indulge in our freshly baked, artisanal cookies. Made with the finest ingredients, each bite is a taste
            of heaven.
          </p>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  </section>

    <section id="menu" className="w-full py-12 md:py-24 lg:py-32  bg-[#194332] text-white">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#8C1AFF] px-3 py-1 text-sm text-gray-50">Our Menu</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Chai Varieties</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              From classic Irani chai to unique blends, we offer a diverse selection to cater to every taste. Pair
              your chai with our delectable accompaniments for a truly indulgent experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col items-center justify-center space-y-4 p-6">
              <img src="https://www.shutterstock.com/image-photo/top-view-aromatic-indian-milk-260nw-1477476836.jpg" width={150} height={150} alt="Classic Irani Chai" className="aspect-square overflow-hidden rounded-full object-cover" />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold">Classic Irani Chai</h3>
                <p className="text-gray-500 dark:text-gray-400">Our signature blend of black tea, spices, and milk.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col items-center justify-center space-y-4 p-6">
              <img src="https://www.shutterstock.com/image-photo/top-view-aromatic-indian-milk-260nw-1477476836.jpg" width={150} height={150} alt="Masala Chai" className="aspect-square overflow-hidden rounded-full object-cover" />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold">Masala Chai</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A spicy and aromatic blend of black tea and Indian spices.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col items-center justify-center space-y-4 p-6">
              <img src="https://www.shutterstock.com/image-photo/top-view-aromatic-indian-milk-260nw-1477476836.jpg" width={150} height={150} alt="Cardamom Chai" className="aspect-square overflow-hidden rounded-full object-cover" />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold">Cardamom Chai</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A fragrant and soothing blend with the essence of cardamom.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col items-center justify-center space-y-4 p-6">
              <img src="https://www.shutterstock.com/image-photo/top-view-aromatic-indian-milk-260nw-1477476836.jpg" width={150} height={150} alt="Ginger Chai" className="aspect-square overflow-hidden rounded-full object-cover" />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold">Ginger Chai</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A warming and invigorating blend with the kick of ginger.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col items-center justify-center space-y-4 p-6">
              <img src="https://www.shutterstock.com/image-photo/top-view-aromatic-indian-milk-260nw-1477476836.jpg" width={150} height={150} alt="Rose Chai" className="aspect-square overflow-hidden rounded-full object-cover" />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold">Rose Chai</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A delicate and floral blend infused with the essence of rose.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col items-center justify-center space-y-4 p-6">
              <img src="https://www.shutterstock.com/image-photo/top-view-aromatic-indian-milk-260nw-1477476836.jpg" width={150} height={150} alt="Chai Accompaniments" className="aspect-square overflow-hidden rounded-full object-cover" />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold">Chai Accompaniments</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Indulge in our selection of traditional Indian snacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

  )
}

export default LandingPage