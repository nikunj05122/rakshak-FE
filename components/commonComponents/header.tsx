import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Bell,
    CircleUser,
    Home,
    Menu,
    MapPinned,
    Search,
    ChartColumnIncreasing,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HeaderLink from "@/components/commonComponents/headerlink";

type HeaderLayoutProps = {
    children: ReactNode;
};

export default function Header({ children }: HeaderLayoutProps) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <Image
                                src="/img/company-logo.svg"
                                alt="logo"
                                height={10}
                                width={10}
                                className="h-6 w-6"
                                priority={true}
                            />
                            <span className="">Rakshak</span>
                        </Link>
                        <Button
                            variant="outline"
                            size="icon"
                            className="ml-auto h-8 w-8"
                        >
                            <Bell className="h-4 w-4" />
                            <span className="sr-only">
                                Toggle notifications
                            </span>
                        </Button>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <HeaderLink
                                text="Dashboard"
                                icon={<Home className="h-4 w-4" />}
                                name="/dashboard"
                            />
                            <HeaderLink
                                text="Analytics"
                                icon={
                                    <ChartColumnIncreasing className="h-4 w-4" />
                                }
                                name="/analytics"
                            />
                            <HeaderLink
                                text="Draw"
                                icon={<MapPinned className="h-4 w-4" />}
                                name="/draw"
                            />
                            <HeaderLink
                                text="Officers"
                                icon={<Users className="h-4 w-4" />}
                                name="/officers"
                            />
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 py-2.5 pr-7 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Image
                                        src="/img/company-logo.svg"
                                        alt="logo"
                                        height={10}
                                        width={10}
                                        className="h-6 w-6"
                                        priority={true}
                                    />
                                    <span className="sr-only">Rakshak</span>
                                </Link>
                                <HeaderLink
                                    text="Dashboard"
                                    icon={<Home className="h-4 w-4" />}
                                    name="/dashboard"
                                />
                                <HeaderLink
                                    text="Analytics"
                                    icon={
                                        <ChartColumnIncreasing className="h-4 w-4" />
                                    }
                                    name="/analytics"
                                />
                                <HeaderLink
                                    text="Draw"
                                    icon={<MapPinned className="h-4 w-4" />}
                                    name="/draw"
                                />
                                <HeaderLink
                                    text="Officers"
                                    icon={<Users className="h-4 w-4" />}
                                    name="/officers"
                                />
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                /> */}
                            </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="rounded-full"
                            >
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">
                                    Toggle user menu
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="p-3 h-full w-full">{children}</main>
            </div>
        </div>
    );
}
