import { HoverCard } from "@radix-ui/react-hover-card";
import { ShoppingBag } from "lucide-react";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface CartBadgeProps {
  count: number;
}

const CartNav: React.FC<CartBadgeProps> = ({ count }) => {
  const navigate = useNavigate();
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div
          className="relative me-4 cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <ShoppingBag size={20} />
          <Badge className="absolute -top-1 left-3 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-red-800 text-white">
            {count}
          </Badge>
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
            <p className="text-muted-foreground text-sm font-medium">P700</p>
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
            <p className="text-muted-foreground text-sm font-medium">P700</p>
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
            <p className="text-muted-foreground text-sm font-medium">P700</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CartNav;
