import { Link } from "react-router-dom";
import "./App.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function App() {
  
  return (
    <header className="flex items-center justify-between p-4 bg-blue-100 border-b border-blue-200 rounded-b-sm shadow-sm">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-blue-50">About me</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="bg-blue-100 text-black rounded px-4 py-2">
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-blue-50">Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="bg-blue-100 text-black rounded px-4 py-2">
                <Link to="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-blue-50">Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="bg-blue-100 text-black rounded px-4 py-2">
                <Link to="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default App;
