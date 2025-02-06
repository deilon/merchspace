import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CashOnDeliveryForm() {
  return (
    <form>
      <RadioGroup defaultValue="cod">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="cod" id="r1" />
          <Label htmlFor="r1">Cash On Delivery</Label>
        </div>
      </RadioGroup>
    </form>
  );
}
