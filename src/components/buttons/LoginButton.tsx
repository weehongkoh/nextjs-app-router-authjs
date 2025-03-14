"use client";

import Image from "next/image";

import { signIn } from "next-auth/react";

type ClientSafeProvider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

const Icon = ({ provider }: { provider: string }) => {
  let imagePath = "";

  if (provider === "Google") {
    imagePath = "/images/icons/google.svg";
  } else if (provider === "Discord") {
    imagePath = "/images/icons/discord.svg";
  } else if (provider === "Auth0") {
    imagePath = "/images/icons/auth0.svg";
  }

  return (
    <Image
      src={imagePath}
      width="25"
      height="25"
      alt="Google"
      className="mr-4"
    />
  );
};
export default function LoginButton({
  auth,
}: {
  auth: ClientSafeProvider | null;
}) {
  console.log("Auth: ", auth);
  return (
    <button
      type="button"
      className="border shadow-1 rounded-md py-3 px-6 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => signIn(auth?.id as string)}
    >
      {auth ? (
        <div className="flex items-center">
          <Icon provider={auth.name as string} />
          Sign In with {auth.name as string}
        </div>
      ) : (
        "Custom Login Page"
      )}
    </button>
  );
}
