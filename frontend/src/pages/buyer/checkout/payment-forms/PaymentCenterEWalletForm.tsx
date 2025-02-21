import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PaymentCenterEWalletForm() {
  return (
    <form>
      <RadioGroup defaultValue="gcash">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="711" id="r1" />
          <Label htmlFor="r1" className="flex space-x-2 items-center">
            <img
              src="/assets/images/payment-option-logos/Payment_Center_e_Wallet_7_eleven_logo.png"
              className="w-[40px] border"
            />
            <span>7 Eleven CLiQQ</span>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="gcash" id="r1" />
          <Label htmlFor="r1" className="flex space-x-2 items-center">
            <img
              src="/assets/images/payment-option-logos/Payment_Center_e_Wallet_GCash_logo.png"
              className="w-[40px] border"
            />
            <span>GCash</span>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paymaya" id="r1" />
          <Label htmlFor="r1" className="flex space-x-2 items-center">
            <img
              src="/assets/images/payment-option-logos/img_bankph_maya.png"
              className="w-[40px] border"
            />
            <span>Maya</span>
          </Label>
        </div>
      </RadioGroup>
    </form>
  );
}
