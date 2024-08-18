"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type HeaderLinkProps = {
    text: string;
    icon: ReactNode;
    name: string;
};

const HeaderLink = ({ text, icon, name }: HeaderLinkProps) => {
    const pathname = usePathname();
    return (
        <Link
            href={`${name}`}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                pathname === name
                    ? "bg-muted text-primary"
                    : "text-muted-foreground"
            } transition-all hover:text-primary`}
        >
            {icon}
            {text}
        </Link>
    );
};

export default HeaderLink;
