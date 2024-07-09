"use client";

import { SidebarItem } from "@/components/shared/side-bar";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type SidebarLinkProps = SidebarItem;

export const SidebarLink = ({ icon: Icon, link, name }: SidebarLinkProps) => {
  const pathname = usePathname();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-primary/30",
            pathname.includes(link) && "bg-primary text-foreground"
          )}
        >
          <Icon className="h-4 w-4 hover:scale-110 transition-all duration-150 ease-in-out" />
          <span className="sr-only">{name}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{name}</TooltipContent>
    </Tooltip>
  );
};
