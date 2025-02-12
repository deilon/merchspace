import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import CashOnDeliveryForm from "./payment-forms/CashOnDeliveryForm";
import PaymentCenterEWalletForm from "./payment-forms/PaymentCenterEWalletForm";
import LinkedBankAccountForm from "./payment-forms/LinkedBankAccountForm";
import CreditDebitCardForm from "./payment-forms/CreditDebitCardForm";
import { Button } from "@/components/ui/button";

export default function CheckoutPaymentOptions() {
  return (
    <section className="container mx-auto my-5">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-5">
        Select Payment Options
      </h4>
      <Card>
        <CardContent className="p-5">
          <Tabs defaultValue="cod">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="cod">Cash On Delivery</TabsTrigger>
              <TabsTrigger value="pce">Payment Center / E-Wallet</TabsTrigger>
              <TabsTrigger value="lba">Linked Bank Account</TabsTrigger>
              <TabsTrigger value="cdc">Credit / Debit Card</TabsTrigger>
            </TabsList>
            <TabsContent value="cod">
              <Card className="p-3 w-[350px]">
                <CardContent className="p-3">
                  <CashOnDeliveryForm />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pce">
              <Card className="p-3 w-[350px]">
                <CardContent className="space-y-2 p-3">
                  <PaymentCenterEWalletForm />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="lba">
              <Card className="p-3 w-[350px]">
                <CardContent className="space-y-2 p-3">
                  <LinkedBankAccountForm />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cdc">
              <CreditDebitCardForm />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="my-5">
        <CardContent className="p-5 grid grid-col space-y-2 justify-end">
          <div className="flex flex-row justify-between w-[250px]">
            <div className="text-muted-foreground">Merchandise Subtotal</div>
            <div>₱2,035</div>
          </div>
          <div className="flex flex-row justify-between w-[250px]">
            <div className="text-muted-foreground">Shipping Subtotal</div>
            <div>₱108</div>
          </div>
          <div className="flex flex-row justify-between w-[250px]">
            <div className="text-muted-foreground">Total Payment:</div>
            <div className="text-2xl">₱2,203</div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button size="lg">Place Order</Button>
        </CardFooter>
      </Card>
    </section>
  );
}
