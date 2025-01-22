import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Nav from "../Nav";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

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
                <div className="flex flex-auto bg-gray-100 p-5">
                    Product general description goes here
                </div>
            </div>

        </div>
    </div>
  )
}
