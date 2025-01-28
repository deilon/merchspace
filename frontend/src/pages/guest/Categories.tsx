import Nav from "../Nav";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";


export default function Categories() {
  return (
    <>
      <Nav /> 

      {/* Categories Breadcrumbs*/}
      <section className="container mx-auto my-5">
          <Breadcrumb>
              <BreadcrumbList>
                  <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage>
                        <BreadcrumbLink href="/">All Categories</BreadcrumbLink>
                      </BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
      </section>

      <Separator />

      <section className="container mx-auto my-10 mb-10">
        {/* == A == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">A</h1>
          </div>

          {/* Art & Crafts */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Arts & Crafts</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Art Supplies (e.g., paints, brushes)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">DIY Kits</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Crafting Tools</Link>
            </div>
          </div>

          {/* Automotive */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Automotive</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Motorcycle Accessories</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Car Accessories (e.g., seat covers, dashboard cameras)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Spare Parts</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Tires & Wheels</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Oils & Lubricants</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Tools & Equipment</Link>
            </div>
          </div>
        </div>

        {/* == B == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">B</h1>
          </div>

          {/* Beauty & Personal Care */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Beauty & Personal Care</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Skincare Products</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Haircare Products</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Makeup & Cosmetics</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Fragrances & Perfumes</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Grooming Tools (e.g., razors, trimmers)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Health & Wellness Products</Link>
            </div>
          </div>

          {/* Books & Stationery */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Books & Stationery</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Fiction & Non-fiction Books</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Academic Books & Study Material</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Magazines</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Notebooks & Journals</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Writing Instruments (e.g., pens, pencils)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Office Supplies</Link>
            </div>
          </div>
        </div>

        {/* == E == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">E</h1>
          </div>

          {/* Beauty & Personal Care */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Electronics & Gadgets</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Smartphones</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Laptops & Computers</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Tablets</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Wearable Technology (e.g., smartwatches, fitness trackers)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Cameras & Accessories</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Audio Devices (e.g., headphones, speakers)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Gaming Consoles & Accessories</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Home Appliances (e.g., refrigerators, washing machines)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">TV & Home Entertainment</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Networking Devices (e.g., routers, modems)</Link>
            </div>
          </div>
        </div>

        {/* == F == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">F</h1>
          </div>

          {/* Fashion & Apparel */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Fashion & Apparel</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Men's Clothing</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Women's Clothing</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Kid's Clothing</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Shoes (Men, Women, Kids)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Accessories (e.g., hats, belts, scarves)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Jewelry and Watches</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Bags & Wallets</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Home Appliances (e.g., refrigerators, washing machines)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">TV & Home Entertainment</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Networking Devices (e.g., routers, modems)</Link>
            </div>
          </div>
        </div>

        {/* == G == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">G</h1>
          </div>

          {/* Gifts & Occasions */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Gifts & Occasions</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Gift Baskets</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Personalized Gifts</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Party Supplies (e.g., balloons, banners)</Link>
            </div>
          </div>

          {/* Groceries & Food */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Groceries & Food</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Fresh Produce</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Packaged Food & Snacks</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Beverages (e.g., coffee, tea, juices)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Gourmet Products</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Frozen Food</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Dairy Products</Link>
            </div>
          </div>
        </div>

        {/* == H == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">H</h1>
          </div>

          {/* Health & Wellness */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Health & Wellness</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Vitamins & Supplements</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Fitness Equipment (e.g., dumbbells, yoga mats)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Medical Devices (e.g., thermometers, blood pressure monitors)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">First Aid Supplies</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Organic & Health Food</Link>
            </div>
          </div>

          {/* Hobbies & Collectibles */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Hobbies & Collectibles</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Collectible Items (e.g., stamps, coins)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Model Kits & Miniatures</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Board Games</Link>
            </div>
          </div>

          {/* Home & Living */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Home & Living</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Furniture (e.g., beds, sofas, tables)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Kitchenware (e.g., utensils, cookware)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Home Decor (e.g., wall art, vases)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Bedding & Linens</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Storage Solutions</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Lighting (e.g., lamps, LED lights)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Gardening Supplies</Link>
            </div>
          </div>
        </div>

        {/* == I == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">I</h1>
          </div>

          {/* Industrial & Business Supplies */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Industrial & Business Supplies</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Tools & Machinery</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Electrical Supplies</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Safety Equipment</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Packaging Material</Link>
            </div>
          </div>
        </div>

        {/* == M == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">M</h1>
          </div>

          {/* Industrial & Business Supplies */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Music & Entertainment</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Musical Intruments (e.g, guitars, keyboards)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">CDs & Vinyl Records</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Karaoke Systems</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Movie Merchandise</Link>
            </div>
          </div>
        </div>

        {/* == P == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">P</h1>
          </div>

          {/* Pet Supplies */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Pet Supplies</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Pet Food</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Pet Toys & Categories</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Grooming Supplies</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Pet Health Products</Link>
            </div>
          </div>
        </div>

        {/* == R == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">R</h1>
          </div>

          {/* Renewable & Sustainable Products */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Renewable & Sustainable Products</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Solar Panels</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Eco-friendly Home Products</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Recycled Products</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Pet Health Products</Link>
            </div>
          </div>
        </div>

        {/* == S == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">S</h1>
          </div>

          {/* Software & Digital Products */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Software & Digital Products</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">E-books</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Software Licenses</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Online Subscriptions</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Digital Gift Cards</Link>
            </div>
          </div>

          {/* Sports & Outdoors */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Sports & Outdoors</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Sport Equipment (e.g., cricket bats, basketballs)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Outdoor Gear (e.g., tents, camping gear)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Fitness Apparel</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Bicycles & Accessories</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Water Sports Equipment</Link>
            </div>
          </div>
        </div>

        {/* == T == */}
        <div className="category-by-letter my-5">
          <div className="flex justify-between items-center border-b py-4 mb-4">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight text-slate-600 lg:text-5xl">T</h1>
          </div>

          {/* Tools & Hardware */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Tools & Hardware</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Hand Tools (e.g., hammers, wrenches)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Power Tools</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Construction Materials</Link>
            </div>
          </div>

          {/* Toys, Kids & Baby */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Toys, Kids & Baby</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Baby Clothing & Accessories</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Toys & Games (e.g., action figures, puzzles)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Baby Gear (e.g., strollers, car seats)</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Diapers & Wipes</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Educational Products</Link>
            </div>
          </div>

          {/* Travel & Luggage */}
          <div className="category-letter-section my-7">
            <Link to="/" className="font-medium text-sky-800">Travel & Luggage</Link>
            <div className="flex flex-row flex-wrap my-2">
              <Link to="/" className="w-1/4 text-sm text-slate-600">Luggage Bags</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Backpacks</Link>
              <Link to="/" className="w-1/4 text-sm text-slate-600">Travel Accessories (e.g., passport holders, neck pillows)</Link>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
