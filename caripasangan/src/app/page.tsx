import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] flex justify-end flex-col gap-x-2 font-[family-name:var(--font-geist-sans)]">
      <main className="navbar flex flex-col gap-50 row-start-2 items-center sm:items-end">
        <div className="login">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[350px]">
          <DropdownMenuLabel>Login Please!</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Card className="w-[350px]">
              <CardHeader></CardHeader>
                  <CardContent>
                      <form>
                        <div className="grid w-full items-center gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Username</Label>
                            <Input id="name" placeholder="Name of your project" />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Password</Label>
                            <Input id="name" placeholder="Name of your project" />
                          </div>
                        </div>
                      </form>
                  </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Cancel</Button>
                      <Button>Login</Button>
                    </CardFooter>
                  </Card>
      </DropdownMenuContent>
    </DropdownMenu>

        </div>

      </main>
    </div>
  );
}
