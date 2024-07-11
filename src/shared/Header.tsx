import Link from "next/link"
import { CircleUser, Cloud, CreditCard, Aperture, Github, Keyboard, LifeBuoy, LogOut, Mail, Menu, MessageSquare, Package2, Plus, PlusCircle, Search, Settings, User, UserPlus, Users } from "lucide-react"
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
    DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { tools } from "@/services/constants"


export default function Header() {
    return (
        <div className="bg-white border-b  sticky top-0">
            <header className="container mx-auto flex h-16 items-center gap-4 px-4 md:px-6">
                <nav className="hidden flex-col text-lg font-medium md:flex md:flex-row md:items-center md:text-sm">
                    <Link
                        href={"/"}
                        className="px-4 flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Aperture className="h-6 w-6" />
                    </Link>
                    <Link
                        href={"/about"}
                        className="px-4 text-muted-foreground transition-colors hover:text-foreground"
                    >
                        About
                    </Link>
                    <Link
                        href={"/contact"}
                        className="px-4 text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Contact
                    </Link>
                    <NavigationMenu className="text-muted-foreground transition-colors hover:text-foreground">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>
                                        <div className="grid gap-4 sm:grid-cols-4 p-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 min-w-[600px]">
                                            {tools.map((r: any, i: any) => {
                                                return (
                                                    <Link key={i} href={`/converter/${r.url}`}>
                                                        <Card className="hover:bg-primary-foreground duration-200 cursor-pointer border-none shadow-none">
                                                            <CardHeader className="p-2">
                                                                <CardTitle className="text-md">{r.heading}</CardTitle>
                                                                {/* <CardDescription className="text-xs">Card Description</CardDescription> */}
                                                            </CardHeader>
                                                        </Card>
                                                    </Link>
                                                )
                                            })}
                                        </div>

                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Orders
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Products
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Customers
                            </Link>
                            <Link href="#" className="hover:text-foreground">
                                Settings
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                {/* <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
            </div> */}
            </header>
        </div>

    )
}
