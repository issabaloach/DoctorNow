import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth, signOut } from "../../auth";
import Image from "next/image";

export default async function Header() {
  const session = await auth();
  return (
    <div className="bg-secondary py-3">
      <div className="flex container mx-auto justify-between">
        <h1 className="text-xl font-bold font-mono">DoctorNow</h1>
        {session ? (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className={"border-none bg-transparent p-0 m-0"}>
                <Image
                  src={session?.user?.image}
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </MenubarTrigger>
              <MenubarContent>
                <Link href={"/profile"}>
                  <MenubarItem>Profile</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href={"/appointments"}>
                  <MenubarItem>My Appointments</MenubarItem>
                </Link>

                <MenubarSeparator />
        
                <form
                  action={async () => {
                    "use server";
                    await signOut("google");
                  }}
                >
                 <Button variant={"outline"}> LogOut</Button>
                </form>
            
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Link href={"/signin"}>
            <Button variant={"outline"}>Signin</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
