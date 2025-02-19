"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Example data
const data = [
  {
    id: "1",
    product: {
      photo: "./placeholder.svg",
      name: "Item name",
    },
    unitPrice: "P750",
    quantity: "1",
    totalPrice: "P750",
  },
  {
    id: "2",
    product: {
      photo: "./placeholder.svg",
      name: "Item name",
    },
    unitPrice: "P750",
    quantity: "1",
    totalPrice: "P750",
  },
  {
    id: "3",
    product: {
      photo: "./placeholder.svg",
      name: "Item name",
    },
    unitPrice: "P750",
    quantity: "1",
    totalPrice: "P750",
  },
];

export default function CartPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const isAllSelected = selected.length === data.length;

  const toggleAll = (checked: boolean) => {
    if (checked) {
      setSelected(data.map((item) => item.id));
    } else {
      setSelected([]);
    }
  };

  const toggleOne = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((itemId) => itemId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <>
      <section className="container mx-auto my-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-3">
          Shopping Cart
        </h3>
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={(checked) => toggleAll(checked === true)}
                />
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Unit Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox
                    checked={selected.includes(item.id)}
                    onCheckedChange={() => toggleOne(item.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex space-x-3">
                    <img
                      src={item.product.photo}
                      className="w-[70px] object-contain dark:brightness-[0.2] dark:grayscale"
                    />
                    <span>{item.product.name}</span>
                  </div>
                </TableCell>
                <TableCell>{item.unitPrice}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.totalPrice}</TableCell>
                <TableCell>
                  <Button variant="outline">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <section className="flex items-center justify-between my-5">
          <div>
            <Button variant="outline" className="me-3">
              Delete
            </Button>
            <Button variant="outline">Move to My Likes</Button>
          </div>
          <div className="flex items-center space-x-3">
            <p className="text-xl">Total: (0 item)</p>
            <Button variant="outline" size="lg">
              Check out
            </Button>
          </div>
        </section>
      </section>
    </>
  );
}
