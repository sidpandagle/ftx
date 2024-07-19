'use client'
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Aperture, LogOutIcon, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenuContent, NavigationMenuLink, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { tools } from "@/services/constants";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/gradient",
    label: "Gradients",
  },
  // {
  //   href: "/#pricing",
  //   label: "Pricing",
  // },
  // {
  //   href: "/#faq",
  //   label: "FAQ",
  // },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex gap-4 items-center">
              <Aperture className="h-6 w-6" />
              Swattch
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              {/* <SheetContent side={"left"}> */}
              <SheetContent side={"right"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Swattch
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  <NavigationMenu className="text-muted-foreground transition-colors hover:text-foreground">
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <Link href={`/converter`}>
                          <NavigationMenuTrigger className="hover:bg-transparent focus:bg-transparent">
                            Tools
                          </NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                          <NavigationMenuLink>
                            <div className="grid gap-4 sm:grid-cols-4 p-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 min-w-[700px]">
                              {tools.map((r: any, i: any) => {
                                return (
                                  <Link key={i} href={`${r.url}`}>
                                    <Card className="hover:bg-primary-foreground duration-200 cursor-pointer border-none shadow-none">
                                      <CardHeader className="p-2">
                                        <CardTitle className="text-sm">{r.heading}</CardTitle>
                                        <CardDescription className="text-xs line-clamp-2">{r.subHeading}</CardDescription>
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
                  {routeList.map(({ href, label }: RouteProps) => (

                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  {/* <a  rel="noreferrer noopener"  href="https://github.com/leoMirandaa/shadcn-landing-page.git"  target="_blank"  className={`w-[110px] border ${buttonVariants({    variant: "secondary",  })}`}>
                    Github
                  </a> */}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={`/converter`}>
                    <NavigationMenuTrigger className="hover:bg-transparent focus:bg-transparent">
                      <a
                        rel="noreferrer noopener"
                        className={`text-[17px] ${buttonVariants({
                          variant: "ghost",
                        })}`}
                      >
                        Tools
                      </a>
                    </NavigationMenuTrigger>
                  </Link>
                  {/* <NavigationMenuContent>
                    <NavigationMenuLink>
                      <div className="grid gap-4 sm:grid-cols-4 p-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 min-w-[700px]">
                        {tools.map((r: any, i: any) => {
                          return (
                            <Link key={i} href={`${r.url}`}>
                              <Card className="hover:bg-primary-foreground duration-200 cursor-pointer border-none shadow-none">
                                <CardHeader className="p-2">
                                  <CardTitle className="text-sm">{r.heading}</CardTitle>
                                  <CardDescription className="text-xs line-clamp-2">{r.subHeading}</CardDescription>
                                </CardHeader>
                              </Card>
                            </Link>
                          )
                        })}
                      </div>

                    </NavigationMenuLink>
                  </NavigationMenuContent> */}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })} invisible`}
            >
              Github
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
