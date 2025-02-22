import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center
     group hover:bg-white shadow-md hover:shadow-black/25
     transition-all">
      <div className="flex justify-center items-center">
        <Image 
          className="max-h-24 block mx-auto"
          src="/pizza1.png" 
          alt="pizza" 
          width={100}  // Add width for the Image
          height={160} // Add height for the Image
        />
      </div>
     
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        A delicious pepperoni pizza with a crispy crust and melted mozzarella cheese.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">Add to cart $12</button>
    </div>
  );
}
