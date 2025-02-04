import { HoverCard } from "@radix-ui/react-hover-card";
import { ShoppingBag } from "lucide-react";
import { HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { useNavigate } from "react-router-dom";

interface CartBadgeProps {
  count: number;
}

const Cart: React.FC<CartBadgeProps> = ({ count }) => {
  const navigate = useNavigate();
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div
          className="relative me-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <ShoppingBag size={17} />
          {count > 0 && <span className="cart-badge">{count}</span>}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0">
        <div className="flex justify-between items-center space-x-3 p-3 hover:bg-muted">
          <img
            src="/placeholder.svg"
            className="dark:brightness-[0.2] dark:grayscale w-10"
          />
          <div className="grow">
            <p className="line-clamp-1 text-sm font-medium">
              Lengthy Product Name For UI Testing
            </p>
          </div>
          <div>
            <p className="text-sky-900 text-sm font-medium">P700</p>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-3 p-3 hover:bg-muted">
          <img
            src="/placeholder.svg"
            className="dark:brightness-[0.2] dark:grayscale w-10"
          />
          <div className="grow">
            <p className="line-clamp-1 text-sm font-medium">
              Lengthy Product Name For UI Testing
            </p>
          </div>
          <div>
            <p className="text-sky-900 text-sm font-medium">P700</p>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-3 p-3 hover:bg-muted">
          <img
            src="/placeholder.svg"
            className="dark:brightness-[0.2] dark:grayscale w-10"
          />
          <div className="grow">
            <p className="line-clamp-1 text-sm font-medium">
              Lengthy Product Name For UI Testing
            </p>
          </div>
          <div>
            <p className="text-sky-900 text-sm font-medium">P700</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Cart;
