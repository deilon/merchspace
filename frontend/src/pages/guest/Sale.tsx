import Item from "@/components/common/Item";
import Nav from "../Nav";
import { Button } from "@/components/ui/button";

export default function Sale() {
  return (
    <>
      <Nav />
      <section className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-3">
          Sale
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
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
