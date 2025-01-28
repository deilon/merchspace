import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import Nav from "../Nav";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, PlusIcon, Store } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ProductView() {
  return (
    <div className="container mx-auto">
        <Nav />

        {/* Product View breadcrumbs */}
        <section className="my-5">
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
                        <BreadcrumbLink href="/">Headphones</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="font-semibold">Product Name / Title</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </section>

        {/* Product gallery & Overview */}
        <section className="my-5">
            <div className="flex">
                <section className="w-5/12 p-5">
                    <div className="flex flex-col">
                        <div className="bg-gray-100">
                            <img className="object-contain mx-auto" style={{height: 450}} src="/assets/images/unknown-headphone.png" alt="product image" />
                        </div>
                        <div className="py-2">
                            <Carousel className="w-full max-w-sm mx-auto">
                                <CarouselContent className="-ml-1">
                                    {Array.from({ length: 9 }).map((_, index) => (
                                    <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4">
                                        <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-2">
                                                <img className="object-contain aspect-square rounded" src="/assets/images/unknown-headphone.png" alt="Product image" />
                                            </CardContent>
                                        </Card>
                                        </div>
                                    </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col w-7/12 p-5">
                    <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">
                        Product Name / Title
                    </h1>
                    <div className="flex items-center space-x-4 mt-4">
                        <div className="rating text-yellow-500">
                            <span className="text-lg text-gray-500 me-2">4.9</span>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star-half'></i>
                        </div>
                        <Separator orientation="vertical" />
                        <p className="text-lg text-gray-500">2.4k Ratings</p>
                        <Separator orientation="vertical" />
                        <p className="text-lg text-gray-500">10k+ Sold</p>
                    </div>
                    <p className="text-[35px] my-4 font-semibold">₱17,269</p>
                    <div className="flex items-center">
                        <span className="me-3 text-gray-500">Quantity:</span>
                        <Button variant="outline" size="icon">
                            <Minus />
                        </Button>
                        <Input className="w-[50px] mx-3 text-center" max="50" step="1" value="0" autoComplete="off" type="text" height="100%" />
                        <Button variant="outline" size="icon">
                            <Plus />
                        </Button>
                    </div>
                    <span className="mt-4 text-sm text-gray-500">290 pieces available</span>
                    <div className="flex items-center gap-2 mt-4">
                        <Button className="w-[200px]">ADD TO CART</Button>
                        <Button className="w-[200px]" variant="outline"><Heart/> WISHLIST</Button>
                    </div>
                </section>
            </div>
        </section>

        <Separator />

        {/* Shop Description */}
        <section className="flex space-x-5 my-5">
            <div className="flex items-center">
                <img src="/placeholder.svg" className="rounded-full" width="100" height="100" alt="" />
                <div className="ms-4">
                    <p className="text-lg font-medium">Store Owner</p>
                    <p className="text-xs mb-2 text-gray-500">Active 3 hours ago</p>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline">
                            <PlusIcon />
                            Follow
                        </Button>
                        <Button variant="outline">
                            <Store />
                            View Store
                        </Button>
                    </div>
                </div>
                <Separator className="ms-10" orientation="vertical" />
            </div>

            <div className="grid grid-rows grow">
                <div className="flex lg:w-1/4 justify-between">
                    <p className="text-stone-500">Ratings</p>
                    <span className="text-sky-900 font-medium">6.5k</span>
                </div>
                <div className="flex lg:w-1/4 justify-between">
                    <p className="text-stone-500">Products</p>
                    <span className="text-sky-900 font-medium">10k</span>
                </div>
                <div className="flex lg:w-1/4 justify-between">
                    <p className="text-stone-500">Joined</p>
                    <span className="text-sky-900 font-medium">6 years ago</span>
                </div>
                <div className="flex lg:w-1/4 justify-between">
                    <p className="text-stone-500">Followers</p>
                    <span className="text-sky-900 font-medium">20k</span>
                </div>
            </div>
        </section>

        <Separator />
        
        {/* Product Specification */}
        <section className="mt-10 mb-5 lg:w-4/5">
            <h4 className="my-5 p-3 font-medium bg-neutral-100">Product Specification</h4>
            <div className="flex justify-between p-3">
                <p className="w-1/5">Stock</p>
                <span className="text-sky-900 font-medium grow">106</span>
            </div>
            <div className="flex justify-between p-3">
                <p className="w-1/5">Brand</p>
                <span className="text-sky-900 font-medium grow">Store</span>
            </div>
            <div className="flex justify-between p-3">
                <p className="w-1/5">Warranty Duration</p>
                <span className="text-sky-900 font-medium grow">Value</span>
            </div>
            <div className="flex justify-between p-3">
                <p className="w-1/5">Dimension</p>
                <span className="text-sky-900 font-medium grow">For 17" – 36"</span>
            </div>
            <div className="flex justify-between p-3">
                <p className="w-1/5">Ships From</p>
                <span className="text-sky-900 font-medium grow">Philippines, Manila</span>
            </div>
        </section>

        {/* Product Description */}
        <section className="my-5 lg:w-4/5">
            <h4 className="my-5 p-3 font-medium bg-neutral-100">Product Description</h4>
            <div className="p-3">
                <img src="/placeholder.svg" alt="Product description image" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo corporis commodi repellat magni tempore. Ratione quam facilis nesciunt, ex error, eius praesentium eum qui aliquam mollitia rem placeat dicta?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo corporis commodi repellat magni tempore. Ratione quam facilis nesciunt, ex error, eius praesentium eum qui aliquam mollitia rem placeat dicta?</p>
            </div>
        </section>

    </div>
  )
}
