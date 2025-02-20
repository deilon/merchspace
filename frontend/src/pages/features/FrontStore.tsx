import { Link } from "react-router-dom";
import ItemProduct from "@/components/common/itemProduct";
import CategoryItem from "../../components/common/categoryItem";
import { Button } from "@/components/ui/button";

export default function FrontStore() {
  return (
    <>
      {/* Hero */}
      <section className="container mx-auto h-60 relative my-5">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale rounded"
        />
      </section>

      {/* Sale Products */}
      <section className="container mx-auto my-5">
        <div className="product-section-title flex justify-between items-center mb-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Sale products
          </h4>
          <Link to="/" className="text-sm font-medium">
            See More
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto my-5">
        <div className="product-section-title flex justify-between items-center mb-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Categories
          </h4>
          <Link to="/" className="text-sm font-medium">
            See all categories
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </section>

      {/* For you */}
      <section className="container mx-auto my-5">
        <div className="product-section-title flex justify-between items-center mb-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            For you
          </h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </div>
        <div className="flex justify-center items-center my-20">
          <Button variant="outline" size="lg">
            Load more
          </Button>
        </div>
      </section>
    </>
  );
}
