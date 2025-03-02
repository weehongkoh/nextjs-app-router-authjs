import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import Auth0Button from "@/components/buttons/Auth0";
import DiscordButton from "@/components/buttons/DiscordButton";
import GoogleButton from "@/components/buttons/GoogleButton";
import GithubButton from "@/components/buttons/GithubButton";
import LoginButton from "@/components/buttons/LoginButton";
import LogoutButton from "@/components/buttons/LogoutButton";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/protected");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-8 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex">
        <div className="flex h-48 w-full items-center justify-between bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/images/icons/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
          <div className="px-2"></div>
          {session ? <LogoutButton /> : <LoginButton auth={session} />}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 lg:mb-0">
        NextJs 15 App Router and Auth.js (Next Auth)
      </h1>

      <div className="relative mb-8 flex place-items-center lg:my-0">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/icons/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">Auth0</h2>
          <Auth0Button />
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">Discord</h2>
          <DiscordButton />
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">Google</h2>
          <GoogleButton />
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">GitHub</h2>
          <GithubButton />
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">
            Login with Credential
          </h2>
          <LoginButton auth={null} />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-3 mt-8 text-center lg:mt-0">
          Changelog
        </h2>
        <ol className="font-mono">
          <li>18-01-2025 - Upgrade to NextJs 15</li>
          <li>29-08-2024 - Add Auth0 Provider</li>
          <li>08-06-2024 - Add login credential on Custom Login</li>
          <li>04-05-2024 - Add database adapter on Custom Login</li>
          <li>06-03-2024 - Update the Landing Page and Custom Login Page</li>
          <li>06-03-2024 - Upgrade NPM Package to Latest Version</li>
        </ol>
      </div>
    </main>
  );
}
