import Nav from "../Nav";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Minus, Plus, PlusIcon, Store, ThumbsUp } from "lucide-react";

export default function ProductView() {
  return (
    <>
      <Nav />

      {/* Product View breadcrumbs */}
      <section className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5">
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
              <BreadcrumbPage className="font-semibold">
                Product Name / Title
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <Separator />

      {/* Product gallery & Overview */}
      <section className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5">
        <div className="flex space-x-5">
          <section className="bg-muted w-4/12">
            <div className="flex flex-col p-5">
              <img
                className="object-contain"
                style={{ height: 450 }}
                src="/assets/images/unknown-headphone.png"
                alt="product image"
              />
              <div className="py-2">
                <Carousel className="w-full max-w-sm mx-auto">
                  <CarouselContent className="-ml-1">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-1 basis-1/2 lg:basis-1/4"
                      >
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-2">
                              <img
                                className="object-contain aspect-square rounded"
                                src="/assets/images/unknown-headphone.png"
                                alt="Product image"
                              />
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

          <section className="bg-muted w-8/12">
            <div className="flex flex-col p-5">
              <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">
                Product Name / Title
              </h1>
              <div className="flex space-x-4 mt-4">
                <div className="rating text-yellow-500">
                  <span className="text-lg text-gray-500 me-2">4.9</span>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
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
                <Input
                  className="w-[50px] mx-3 text-center"
                  max="50"
                  step="1"
                  value="0"
                  autoComplete="off"
                  type="text"
                  height="100%"
                />
                <Button variant="outline" size="icon">
                  <Plus />
                </Button>
              </div>
              <span className="mt-4 text-sm text-gray-500">
                290 pieces available
              </span>
              <div className="flex items-center gap-2 mt-4">
                <Button className="w-[200px]">ADD TO CART</Button>
                <Button className="w-[200px]" variant="outline">
                  <Heart /> WISHLIST
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Shop Description */}
      <section className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5">
        <div className="flex space-x-5 p-5 bg-muted">
          <div className="flex items-center">
            <img
              src="/placeholder.svg"
              className="rounded-full dark:brightness-[0.2] dark:grayscale"
              width="100"
              height="100"
              alt=""
            />
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
            <div className="flex justify-between">
              <p className="lg:w-1/5 md:grow lg:grow-0 text-stone-500">
                Ratings
              </p>
              <span className="text-sky-900 font-medium grow">6.5k</span>
            </div>
            <div className="flex justify-between">
              <p className="lg:w-1/5 md:grow lg:grow-0 text-stone-500">
                Products
              </p>
              <span className="text-sky-900 font-medium grow">10k</span>
            </div>
            <div className="flex justify-between">
              <p className="lg:w-1/5 md:grow lg:grow-0 text-stone-500">
                Joined
              </p>
              <span className="text-sky-900 font-medium grow">6 years ago</span>
            </div>
            <div className="flex justify-between">
              <p className="lg:w-1/5 md:grow lg:grow-0 text-stone-500">
                Followers
              </p>
              <span className="text-sky-900 font-medium grow">20k</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specification */}
      <section className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5 ">
        <div className="lg:w-4/5 p-5 bg-muted">
          <h4 className="p-3 font-medium">Product Specification</h4>
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
            <span className="text-sky-900 font-medium grow">
              Philippines, Manila
            </span>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5">
        <div className="lg:w-4/5 p-5 bg-muted">
          <h4 className="p-3 font-medium">Product Description</h4>
          <div className="p-3">
            <img
              className="dark:brightness-[0.2] dark:grayscale"
              src="/placeholder.svg"
              alt="Product description image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quo corporis commodi repellat magni tempore. Ratione quam facilis
              nesciunt, ex error, eius praesentium eum qui aliquam mollitia rem
              placeat dicta?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quo corporis commodi repellat magni tempore. Ratione quam facilis
              nesciunt, ex error, eius praesentium eum qui aliquam mollitia rem
              placeat dicta?
            </p>
          </div>
        </div>
      </section>

      {/* Product Ratings */}
      <section className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5">
        <div className="lg:w-4/5 p-5 bg-muted">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Product Ratings
          </h4>

          <div className="flex flex-row space-x-7 items-center shadow-lg p-10 my-10">
            <div className="flex flex-col">
              <p className="text-3xl font-medium">
                4.8 <span className="text-lg">out of 5</span>
              </p>
              <div className="flex flex-row justify-between text-yellow-500 mt-3">
                <i className="bx bxs-star bx-sm"></i>
                <i className="bx bxs-star bx-sm"></i>
                <i className="bx bxs-star bx-sm"></i>
                <i className="bx bxs-star bx-sm"></i>
                <i className="bx bxs-star-half bx-sm"></i>
              </div>
            </div>
            <div className="grow flex flex-row flex-wrap gap-4">
              <Button variant="outline">All</Button>
              <Button variant="outline">5 Star (403)</Button>
              <Button variant="outline">4 Star (51)</Button>
              <Button variant="outline">3 Star (23)</Button>
              <Button variant="outline">2 Star (8)</Button>
              <Button variant="outline">1 Star (9)</Button>
              <Button variant="outline">With Comments (153)</Button>
              <Button variant="outline">With Media (118)</Button>
            </div>
          </div>

          <div className="my-5">
            <div className="my-5">
              <div className="flex flex-row items-start space-x-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <div>
                    <p className="font-medium mt-[-8px]">Juan Dela Cruz</p>
                    <p className="text-sm text-muted-foreground">
                      2022-10-02 15:57
                    </p>
                    <div className="text-yellow-400">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star-half"></i>
                    </div>
                  </div>
                  <div className="my-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores quo corporis commodi repellat magni tempore.
                      Ratione quam facilis nesciunt, ex error, eius praesentium
                      eum qui aliquam mollitia rem placeat dicta?
                    </p>
                  </div>
                  <div className="my-2">
                    <Carousel className="w-full max-w-sm">
                      <CarouselContent className="-ml-1">
                        {Array.from({ length: 9 }).map((_, index) => (
                          <CarouselItem
                            key={index}
                            className="pl-1 basis-1/2 lg:basis-1/4"
                          >
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-2">
                                  <img
                                    className="object-contain aspect-square rounded"
                                    src="/assets/images/unknown-headphone.png"
                                    alt="Product image"
                                  />
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
                  <div className="flex items-center space-x-1">
                    <ThumbsUp size={16} className="text-muted-foreground" />{" "}
                    <span className="text-muted-foreground text-sm">24</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="my-5">
              <div className="flex flex-row items-start space-x-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <div>
                    <p className="font-medium mt-[-8px]">Juan Dela Cruz</p>
                    <p className="text-sm text-muted-foreground">
                      2022-10-02 15:57
                    </p>
                    <div className="text-yellow-400">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star-half"></i>
                    </div>
                  </div>
                  <div className="my-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores quo corporis commodi repellat magni tempore.
                      Ratione quam facilis nesciunt, ex error, eius praesentium
                      eum qui aliquam mollitia rem placeat dicta?
                    </p>
                  </div>
                  <div className="my-2">
                    <Carousel className="w-full max-w-sm">
                      <CarouselContent className="-ml-1">
                        {Array.from({ length: 9 }).map((_, index) => (
                          <CarouselItem
                            key={index}
                            className="pl-1 basis-1/2 lg:basis-1/4"
                          >
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-2">
                                  <img
                                    className="object-contain aspect-square rounded "
                                    src="/assets/images/unknown-headphone.png"
                                    alt="Product image"
                                  />
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
                  <div className="my-2">
                    <div className="w-1/3">
                      <img
                        src="/placeholder.svg"
                        className="object-contain dark:brightness-[0.2] dark:grayscale"
                        alt="Review image"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp size={16} className="text-muted-foreground" />{" "}
                    <span className="text-muted-foreground text-sm">24</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="my-5">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
