import Link from "next/link";
import { getCurrentUser } from "@/lib/session";
import AuthProviders from "@/components/AuthProviders";
import Button from "@/components/Button";
import ProfileMenu from "@/components/ProfileMenu";
const Navbar = async () => {
  const session = await getCurrentUser()

  return (


      <div className='flexCenter adminpannel gap-4'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            
          </>
        ) : (
          <AuthProviders />
        )}
      </div>

  );
};

export default Navbar;
