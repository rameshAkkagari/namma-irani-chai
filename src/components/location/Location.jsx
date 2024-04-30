import React from 'react'

function Location() {
  return (
    <div>
        <section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
    <div className="space-y-4">
      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Location</div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visit Our Flagship Store</h2>
      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Our flagship store is located in the heart of the city, offering a unique shopping experience with a curated
        selection of our latest products. Come and explore our store, meet our knowledgeable staff, and discover the
        perfect items for your home.
      </p>
      <Button>Get Diraction</Button>
    </div>
    <div className="overflow-hidden rounded-xl">
    <iframe
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/dir//1131,+17th+Cross+Rd,+Sector+6,+HSR+Layout,+Bengaluru,+Karnataka+560102/@12.9119895,77.6337492,17.59z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae155248d7d4bb:0x9e49c4894da36b7e!2m2!1d77.6343204!2d12.9122998?entry=ttu">
    </iframe>
    </div>
  </div>
</section>
    </div>
  )
}

export default Location