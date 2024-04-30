



import React from 'react'
import  Label  from "@material-tailwind/react"
import  Select  from "@material-tailwind/react"
import { Button } from "@material-tailwind/react"
import { Separator } from "@material-tailwind/react"
import {Link} from "react-router-dom"
import label from '@material-tailwind/react'
function SingleCookie() {
    return (
        <>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
          
            <div className="grid gap-4">
                <img
                  alt="Cookie Image"
                  className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height="600"
                  src="https://cafeniloufer.com/cdn/shop/products/Osmania_800x.jpg?v=1647518239"
                  width="600"
                />
            </div>
            <div className="grid gap-4 md:gap-10 items-start">
              <div className="hidden md:flex items-start">
                <div className="grid gap-4">
                  <h1 className="font-bold text-3xl">Chocolate Chip Cookie</h1>
                  <div>
                    <p>Freshly baked chocolate chip cookies made with premium ingredients.</p>
                  </div>
                </div>
                <div className="text-4xl font-bold ml-auto">$4.99</div>
              </div>
              <form className="grid gap-4 md:gap-10">
                <div className="grid gap-2">
                  <label className="text-base">
                    Quantity
                  </label>
                  <select
                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option value="brazil">Brazil</option>
                    <option value="bucharest">Bucharest</option>
                    <option value="london">London</option>
                    <option value="washington">Washington</option>
                </select>
                </div>
                <Button size="lg">Add to cart</Button>
              </form>
              <div className="grid gap-4 text-sm leading-loose">
                <p>
                  Indulge in the rich, buttery goodness of our Chocolate Chip Cookies. Baked to perfection with high-quality
                  chocolate chips, these cookies are a classic treat that will satisfy your sweet tooth.
                </p>
                <p>
                  Enjoy them as a snack, pair them with a glass of milk, or share them with friends and family. Our cookies
                  are made with care using the finest ingredients, ensuring a delightful experience with every bite.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex md:hidden items-start">
                <div className="grid gap-4">
                  <h1 className="font-bold text-2xl sm:text-3xl">Chocolate Chip Cookie</h1>
                  <div>
                    <p>Freshly baked chocolate chip cookies made with premium ingredients.</p>
                  </div>
                </div>
                <div className="text-4xl font-bold ml-auto">$4.99</div>
              </div>
              
            </div>
          </div>
          {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="w-[90%] grid gap-8 px-4 md:px-6 m-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="grid gap-1">
                  <h2 className="text-2xl font-bold tracking-tight">You May Also Like</h2>
                  <p className="text-gray-500 dark:text-gray-400">Check out these other delicious cookie options.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="grid gap-4">
                  <div className="grid gap-2.5 relative group">
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">View</span>
                    </Link>
                    <img
                      alt="Oatmeal Raisin Cookie"
                      className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                      height="200"
                      src="https://cafeniloufer.com/cdn/shop/products/FruitBiscuit_800x.jpg?v=1647518095"
                      width="200"
                    />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Oatmeal Raisin Cookie</h3>
                      <p className="text-sm leading-none">$3.99</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Add to cart
                  </Button>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2.5 relative group">
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">View</span>
                    </Link>
                    <img
                      alt="Peanut Butter Cookie"
                      className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                      height="200"
                      src="https://cafeniloufer.com/cdn/shop/products/ChocoChip_800x.jpg?v=1647518005"
                      width="200"
                    />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Peanut Butter Cookie</h3>
                      <p className="text-sm leading-none">$3.99</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Add to cart
                  </Button>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2.5 relative group">
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">View</span>
                    </Link>
                    <img
                      alt="Sugar Cookie"
                      className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                      height="200"
                      src="https://cafeniloufer.com/cdn/shop/products/MeltingMoments_800x.jpg?v=1647518169"
                      width="200"
                    />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Sugar Cookie</h3>
                      <p className="text-sm leading-none">$3.99</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Add to cart
                  </Button>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2.5 relative group">
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">View</span>
                    </Link>
                    <img
                      alt="Snickerdoodle Cookie"
                      className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                      height="200"
                      src="https://cafeniloufer.com/cdn/shop/products/Raagi_800x.jpg?v=1647518262"
                      width="200"
                    />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Snickerdoodle Cookie</h3>
                      <p className="text-sm leading-none">$3.99</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </section> */}
        </>
      )
}

export default SingleCookie