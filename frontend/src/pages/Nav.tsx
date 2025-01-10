import { Link } from "react-router";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import '../index.css'

export default function Nav() {
  return (
    <>
    <div className="flex justify-between items-center py-3">
        {/* Branding logo */}
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                        <Link to="/">
                            marketplace-ecommerce
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        {/* Navigation links */}
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                        <Link to="/">
                            Become a seller
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                        <Link to="/signup">
                            Signup
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                        <Link to="/login">
                            Login
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
    </>
  )
}