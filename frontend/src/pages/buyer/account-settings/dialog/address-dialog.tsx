import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

export default function AddressDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus /> Add New Address
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Address</DialogTitle>
            <DialogDescription>
              Add new shipping address line.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input name="name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input name="phone" placeholder="(+63) XXX-XXX-XXXX" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address1">Region, Province, City, Barangay</Label>
            <Input name="address1" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="zipcode">Zip Code</Label>
            <Input name="zipcode" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address2">Street Name, Building, House No.</Label>
            <Input name="address2" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
