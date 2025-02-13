import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AddressDialog from "./dialog/address-dialog";
import EditDialog from "./dialog/edit-dialog";
import DeleteDialog from "./dialog/delete-dialog";

export default function AddressesSettings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Addresses</h3>
          <p className="text-sm text-muted-foreground">
            Update your shipping addresses settings here.
          </p>
        </div>
        <AddressDialog />
      </div>
      <Separator />
      <div className="space-y-3">
        <Card>
          <CardHeader>
            <CardTitle>Franklin Cutamora</CardTitle>
            <CardDescription>(+63) 968 713 9098</CardDescription>
            <CardAction className="space-x-3">
              <Badge>Default</Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>Pink Street 808</p>
            <p>
              Nicolasa Virata (San Jose), Gen. Mariano Alvarez, Cavite, South
              Luzon, 4117
            </p>
          </CardContent>
          <CardFooter className="space-x-3">
            <EditDialog />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dei Cutamora</CardTitle>
            <CardDescription>(+63) 968 713 9098</CardDescription>
            <CardAction className="space-x-3">
              <Button variant="outline" size="sm">
                Set as Default
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>Pink Street 808</p>
            <p>
              Nicolasa Virata (San Jose), Gen. Mariano Alvarez, Cavite, South
              Luzon, 4117
            </p>
          </CardContent>
          <CardFooter className="space-x-3">
            <EditDialog />
            <DeleteDialog />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
