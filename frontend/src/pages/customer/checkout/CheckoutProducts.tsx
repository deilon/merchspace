import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "1",
    product: {
      photo: "./placeholder.svg",
      name: 'OFFCOURT M3 "Black Halo" Mamba Kobe Oversized Tee',
    },
    unitPrice: "750",
    quantity: "1",
    totalPrice: "750",
  },
  {
    id: "2",
    product: {
      photo: "./placeholder.svg",
      name: 'OFFCOURT "Mambas Forever" Kobe Oversized Graphic Tee',
    },
    unitPrice: "750",
    quantity: "1",
    totalPrice: "750",
  },
  {
    id: "3",
    product: {
      photo: "./placeholder.svg",
      name: "HGHMNDS CLO. - HERE CHEETAH SHIRT",
    },
    unitPrice: "750",
    quantity: "1",
    totalPrice: "750",
  },
];

export default function CheckoutProducts() {
  return (
    <section className="container max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 my-5">
      <Card>
        <CardContent className="p-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Item Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="font-medium">
                    <div className="flex space-x-2">
                      <img
                        src={data.product.photo}
                        className="w-[70px] object-contain dark:brightness-[0.2] dark:grayscale"
                      />
                      <span>{data.product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>₱{data.unitPrice}</TableCell>
                  <TableCell>{data.quantity}</TableCell>
                  <TableCell className="text-right">
                    ₱{data.totalPrice}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">
                  ₱
                  {data.reduce(
                    (total, item) => total + Number(item.totalPrice),
                    0
                  )}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
