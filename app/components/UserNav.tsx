"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

 export default function UserNav() {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative bg-muted lg:mb-16  h-10 w-24 rounded-sm" >
                    <Avatar className="h-10 w-24 rounded-sm">
                        <AvatarImage src=""/>
                        <AvatarFallback className="rounded-sm ">
                            Rodion
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="flex-sm font-medium leading-none">Jan</p>
                        <p className="text-xs leading-none text-muted-foreground">Ksy</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                    Выход
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
 }