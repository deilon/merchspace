import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function LinkedBankAccountForm() {
  return (
    <form>
      <RadioGroup defaultValue="lba">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="lba" id="r1" />
          <Label htmlFor="r1" className="flex space-x-2 items-center">
            <img
              src="./assets/images/payment-option-logos/ic_BPI_new.png"
              className="w-[40px] border"
            />
            <span>BPI Online</span>
          </Label>
        </div>
      </RadioGroup>
    </form>
  );
}
