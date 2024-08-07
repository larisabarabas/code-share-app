import Image from "next/image";
import { account, ID } from "../../appwrite";

export default function Home() {
  // const promise = account.createAnonymousSession();
  // const session = account.getSession("current");
  // console.log("SESSION:", session);

  // promise.then(
  //   function (response) {
  //     console.log(response); // Success
  //   },
  //   function (error) {
  //     console.log(error); // Failure
  //   }
  // );
  return (
    <main
      className="min-h-screen w-full p-8"
      style={{
        backgroundImage: `url('/Hero-Background-notecode.svg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center space-y-4 mt-6">
        <Image
          className="grid self-center"
          src="/NoteCodeLogo.svg"
          width={120}
          height={100}
          alt="Code Share App Logo"
        />
        <p className="text-2xl text-center text-black font-outfit font-medium">
          Create & Share
        </p>
        <p className="text-3xl text-center text-black font-outfit font-semibold">
          Your Code Easily
        </p>
      </div>
    </main>
  );
}
