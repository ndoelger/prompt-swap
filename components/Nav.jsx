"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    async function setUpProviders() {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-6 pt-3">
      <Link href="/" className="flex gap-2 flex-cent">
        <Image src="/assets/images/logo.svg" width={30} height={30} />
        <p className="logo_text p-1">Prompt Swap</p>
      </Link>

      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((providers) => (
                <buttons
                  type="button"
                  key={providers.name}
                  onClick={() => signIn(providers.id)}
                  className="black_btn cursor-pointer">
                  Sign In
                </buttons>
              ))}
          </>
        )}
      </div>
      {/* Mobile navigations */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Link href="">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
            </Link>
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_Link"
                  onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_Link"
                  onClick={() => setToggleDropdown(false)}>
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="
                  mt-5
                  w-full
                  black_btn">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((providers) => (
                <buttons
                  type="button"
                  key={providers.name}
                  onClick={() => signIn(providers.id)}
                  className="black_btn cursor-pointer">
                  Sign In
                </buttons>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}
