import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CheckoutDeliveryAddress() {
  return (
    <section className="container mx-auto my-5">
      <Card>
        <CardHeader>
          <CardTitle>Delivery Address</CardTitle>
          <CardDescription>
            <div className="flex justify-between items-center mt-3">
              <div>
                <p className="font-medium">John Lloyd Cruz (+63) 9687139123</p>
                <p>
                  Lilac Avenue 532, Roberto Silang (Santa Maria), Gen. Mariano
                  Alvarez, South Luzon, Cavite 4117
                </p>
              </div>
              <Button asChild variant="outline">
                <Link to="/">Change</Link>
              </Button>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
