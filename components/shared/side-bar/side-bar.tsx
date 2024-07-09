"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";
import { Package2, Settings } from "lucide-react";
import Link from "next/link";
import { SIDEBAR_ITEMS } from "./constant";
import { SidebarLink } from "./side-bar-link";
import { clearCookies } from "./actions";
import { useRouter } from "next/navigation";
import { useMe } from "@/service/user";
import { capitalizeAvatarFallback } from "./utils";

export const Sidebar = () => {
  const { replace } = useRouter();
  const { data } = useMe();

  const { color, name } = data || {};

  const logout = async () => {
    await clearCookies();
    replace("/");
  };

  return (
    <aside className="sticky inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.pngs" alt="@shadcn" />
          <AvatarFallback style={{ background: color }}>
            {capitalizeAvatarFallback(name)}
          </AvatarFallback>
        </Avatar>
        {SIDEBAR_ITEMS.map(({ ...props }) => (
          <SidebarLink key={props.name} {...props} />
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-primary/30">
                <>
                  <Settings className="h-4 w-4 transition-all group-hover:scale-110" />
                  <span className="sr-only">Settings</span>
                </>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                  Se Déconnecter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};
