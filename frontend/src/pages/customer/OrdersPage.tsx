import Nav from "../Nav";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { Store } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

// Sample data
const orders = [
  {
    id: 1,
    store: "OFFCOURT",
    productImage: "./placeholder.svg",
    product: "OFFCOURT M3 Mamba Kobe Oversized Tee",
    price: "750",
    qty: 3,
    orderTotal: "P561",
    status: "to pay",
  },
  {
    id: 2,
    store: "NIKE",
    productImage: "./placeholder.svg",
    product: "OFFCOURT M3 Mamba Kobe Oversized Tee",
    price: "750",
    qty: 3,
    orderTotal: "P561",
    status: "to pay",
  },
  {
    id: 3,
    store: "OFFCOURT",
    productImage: "./placeholder.svg",
    product: "OFFCOURT M3 Mamba Kobe Oversized Tee",
    price: "750",
    qty: 3,
    orderTotal: "P561",
    status: "completed",
  },
  {
    id: 4,
    store: "NIKE",
    productImage: "./placeholder.svg",
    product: "OFFCOURT M3 Mamba Kobe Oversized Tee",
    price: "750",
    qty: 3,
    orderTotal: "P561",
    status: "completed",
  },
];

const statusOptions = [
  "all",
  "to pay",
  "to ship",
  "to receive",
  "completed",
  "cancelled",
];

export default function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredOrders =
    selectedStatus === "all"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);
  return (
    <>
      <Nav />
      <section className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-3">
          Orders history
        </h3>
        <Tabs defaultValue="all" onValueChange={setSelectedStatus}>
          <TabsList className="grid grid-cols-6 mb-4">
            {statusOptions.map((status) => (
              <TabsTrigger key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedStatus}>
            {filteredOrders.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No orders found.
              </p>
            ) : (
              <section className="grid gap-4">
                {filteredOrders.map((order) => (
                  <div key={order.id} className="shadow-md">
                    <div className="p-5 rounded-t-sm border">
                      <div className="flex justify-between ">
                        <div className="flex space-x-3">
                          <Store strokeWidth={1} />
                          <Link to="/" className="font-medium">
                            {order.store}
                          </Link>
                        </div>
                        <div className="flex space-x-2">
                          <span className="text-orange-400">
                            Parcel has been delivered
                          </span>
                          <Separator orientation="vertical" />
                          <span className="uppercase">{order.status}</span>
                        </div>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          <img
                            src={order.productImage}
                            className="w-[70px] object-contain dark:brightness-[0.2] dark:grayscale"
                          />
                          <div>
                            <p>{order.product}</p>
                            <span className="text-slate-600">x{order.qty}</span>
                          </div>
                        </div>
                        <div>
                          <span className="font-medium">₱{order.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 items-center justify-end p-5 border border-t-0">
                      <span>Order total: </span>
                      <h3 className="font-medium text-2xl">₱561</h3>
                    </div>
                  </div>
                ))}
              </section>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
