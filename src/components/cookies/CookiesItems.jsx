import React from 'react'
import { Link } from 'react-router-dom';

function Cookies() {
  
  return (
    <div>
  <section className="w-full py-12 md:py-24 lg:py-32 bg-[#194332] text-white">
    <div className="w-[90%] grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 m-auto">
      <img src="https://cafeniloufer.com/cdn/shop/products/DryFruit_800x.jpg?v=1647518037" alt="Cookies" width={800} height={600} className="mx-auto rounded-xl object-cover shadow-lg" style={{aspectRatio: '800 / 600', objectFit: 'cover'}} />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Delicious Cookie Creations</h1>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          Indulge in our artisanal cookie selection, crafted with the finest ingredients for a truly satisfying treat.
        </p>
      </div>
    </div>
  </section>
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
    <div className="w-[90%] grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6 m-auto">
      <Link to='/cookies/id' className=" border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/DryFruit_800x.jpg?v=1647518037" alt="Chocolate Chip Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Chocolate Chip Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.99</p>
        </div>
      </Link>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/Almond_800x.jpg?v=1647517831" alt="Oatmeal Raisin Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Oatmeal Raisin Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.49</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="/placeholder.svg" alt="Sugar Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Sugar Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$1.99</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="/placeholder.svg" alt="Peanut Butter Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Peanut Butter Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.79</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="/placeholder.svg" alt="Snickerdoodle Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Snickerdoodle Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.59</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="/placeholder.svg" alt="Lemon Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Lemon Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.99</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/DryFruit_800x.jpg?v=1647518037" alt="Chocolate Chip Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Chocolate Chip Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.99</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/Almond_800x.jpg?v=1647517831" alt="Oatmeal Raisin Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Oatmeal Raisin Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.49</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/DryFruit_800x.jpg?v=1647518037" alt="Chocolate Chip Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Chocolate Chip Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.99</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/Almond_800x.jpg?v=1647517831" alt="Oatmeal Raisin Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Oatmeal Raisin Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.49</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/DryFruit_800x.jpg?v=1647518037" alt="Chocolate Chip Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Chocolate Chip Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.99</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/Almond_800x.jpg?v=1647517831" alt="Oatmeal Raisin Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Oatmeal Raisin Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.49</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/DryFruit_800x.jpg?v=1647518037" alt="Chocolate Chip Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Chocolate Chip Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.99</p>
        </div>
      </div>
      <div className="border bg-card text-card-foreground overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2" data-v0-t="card">
        <img src="https://cafeniloufer.com/cdn/shop/products/Almond_800x.jpg?v=1647517831" alt="Oatmeal Raisin Cookies" width={400} height={300} className="object-cover w-full h-48" style={{aspectRatio: '400 / 300', objectFit: 'cover'}} />
        <div className="p-4">
          <h3 className="text-xl font-bold">Oatmeal Raisin Cookies</h3>
          <p className="text-gray-500 dark:text-gray-400">$2.49</p>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Cookies;