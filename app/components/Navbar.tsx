import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <header className="px-6 py-2 shadow-sm bg-white font-work-sans">
      <nav className="items-center justify-between flex">
        <Link href="/">
          <Image
            src="/soloriseIcon.png"
            alt="logo"
            width={100}
            height={90}
          ></Image>
        </Link>

        <div className="flex items-center gap-7 text-black text-2xl font-semi-bold">
          {session && session?.user ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/settings">Settings</Link>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Logout</button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
