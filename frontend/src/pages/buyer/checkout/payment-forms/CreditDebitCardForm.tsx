import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreditDebitCardForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Details</CardTitle>
        <CardDescription>
          Your credit card details are protected.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="number">Card Number</Label>
              <Input id="number" />
            </div>
            <div className="flex space-x-2">
              <div>
                <Label htmlFor="expiry">Expiry Date (MM/YY)</Label>
                <Input id="expiry" type="text" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" type="text" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name on Card</Label>
              <Input id="name" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}
