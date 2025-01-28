import Item from "@/components/common/Item";
import Nav from "../Nav";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


export default function CategoryPage() {
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
                      <BreadcrumbLink href="/">Categories</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <DropdownMenu>
                          <DropdownMenuTrigger className="flex items-center gap-1">
                              Electronics
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start">
                              <DropdownMenuItem>Laptop</DropdownMenuItem>
                              <DropdownMenuItem>Mobile</DropdownMenuItem>
                              <DropdownMenuItem>Headphones</DropdownMenuItem>
                          </DropdownMenuContent>
                      </DropdownMenu>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage>Headphones</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
      </section>

      <Separator />

      {/* Category page products */}
      <section className="container mx-auto my-5">
        <div className="product-section-title flex justify-between items-center mb-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Headphones</h4>
        </div>
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
        </div>
        <div className="flex justify-center items-center my-20">
          <Button variant="outline" size="lg">Load more</Button>
        </div>
      </section>
    </>
  )
}
