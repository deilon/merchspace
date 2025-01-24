import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import Nav from "../Nav";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ProductView() {
  return (
    <div className="container mx-auto">
        <Nav />
        <div className="my-10">

            <div className="my-5">
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
            </div>

            <div className="flex">
                <div className="w-5/12 p-5">
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
                </div>

                <div className="flex flex-col w-7/12 p-5">
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
                    <Button className="mt-4 w-[200px]">ADD TO CART</Button>
                </div>

            </div>

        </div>
    </div>
  )
}
