import { Link } from "react-router-dom";
import Nav from "../Nav";
import Item from "@/components/common/Item";
import Category from "@/components/common/category";


export default function FrontStore() {
  return (
    <>
        <div className="container mx-auto">
            <Nav/>

            {/* Hero */}
            <section className="w-100 h-60 relative bg-muted my-5">
              <img
                src="/placeholder.svg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </section>

            {/* Sale Products */}
            <section className="my-10">
              <div className="product-section-title flex justify-between items-center mb-4">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Sale products</h4>
                <Link to="/" className="text-sm font-medium">See More</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                <Item />
              </div>
            </section>

            {/* Categories */}
            <section className="my-10">
              <div className="product-section-title flex justify-between items-center mb-4">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Categories</h4>
                <Link to="/" className="text-sm font-medium">See all categories</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
                <Category />
              </div>
            </section>
        </div>
    </>
  )
}

