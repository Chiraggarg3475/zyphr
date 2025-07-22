import Link from "next/link"; // 'Link' is defined but never used.
import Image from "next/image"; // 'Image' is defined but never used.
import { useTheme } from "next-themes"; // 'useTheme' is defined but never used.
import { useSuspenseQuery } from "@tanstack/react-query"; // 'useSuspenseQuery' is defined but never used.

import {
  ChevronDownIcon, // 'ChevronDownIcon' is defined but never used.
  ChevronLeftIcon, // 'ChevronLeftIcon' is defined but never used.
  SunMoonIcon, // 'SunMoonIcon' is defined but never used.
} from "lucide-react";

import { useTRPC } from "@/trpc/client"; // 'useTRPC' is defined but never used.
import { Button } from "@/components/ui/button"; // 'Button' is defined but never used. 

import {
  DropdownMenu, // 'DropdownMenu' is defined but never used.
  DropdownMenuContent, // 'DropdownMenuContent' is defined but never used.
  DropdownMenuItem, // 'DropdownMenuItem' is defined but never used.
  DropdownMenuPortal, // 'DropdownMenuPortal' is defined but never used.
  DropdownMenuRadioGroup, // 'DropdownMenuRadioGroup' is defined but never used.
  DropdownMenuRadioItem, // 'DropdownMenuRadioItem' is defined but never used.
  DropdownMenuSeparator, // 'DropdownMenuSeparator' is defined but never used.
  DropdownMenuSub, // 'DropdownMenuSub' is defined but never used.
  DropdownMenuSubContent, // 'DropdownMenuSubContent' is defined but never used.
  DropdownMenuSubTrigger, // 'DropdownMenuSubTrigger' is defined but never used.
  DropdownMenuTrigger, // 'DropdownMenuTrigger' is defined but never used.
} from "@/components/ui/dropdown-menu";

interface Props {
  projectId: string;
}

export const ProjectHeader = ({ projectId }: Props) => {
  const trpc = useTRPC();
  const { data: project } = useSuspenseQuery(
    trpc.projects.getOne.queryOptions({ id: projectId })
  );

  const {setTheme, theme } = useTheme();

  return (
    <header className="p-2 flex justify-between items-center border-b">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="focus-visible:ring-0 hover:bg-transparent hover:opacity-75 transition-opacity pl-2!"
                >
                    <Image src="/logo.svg" alt="Vibe" width={18} height={18} />
                    <span className="text-sm font-medium">{project.name}</span>
                    <ChevronDownIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="start">
                <DropdownMenuItem asChild>
                    <Link href="/">
                        <ChevronLeftIcon />
                        <span>Go to Dashboard</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="gap-2">
                        <SunMoonIcon className="size-4 text-muted-foreground" />
                        <span>Appearance</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                                <DropdownMenuRadioItem value="light">
                                    <span>Light</span>
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="dark">
                                    <span>Dark</span>
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="system">
                                    <span>System</span>
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>
  );
};