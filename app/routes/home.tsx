import Extension from "~/extensions/Extension";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Extensions" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen p-4 bg-[background:#050b21] text-white">
      {/* Top side */}
      <div className="flex items-center justify-between w-full max-w-7xl bg-[background:#1f2535] rounded-2xl p-4">
        <img src="/logo.svg" alt="extensions-logo" />
        <div>
          {/* <Button size={"icon"}>
            <img
              src="/icon-moon.svg"
              alt="darkmode"
              className="cursor-pointer"
            />
          </Button> */}
          <img src="/icon-sun.svg" alt="lightmode" className="cursor-pointer" />
        </div>
      </div>

      {/* Filter side */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between w-full max-w-7xl mt-6">
        <h1 className="text-2xl font-bold">Extension List</h1>
        <div className="flex items-center gap-10">
          <Button className="px-6 py-5 font-bold rounded-full bg-red-600 text-white cursor-pointer">
            All
          </Button>
          <Button className="px-6 py-5 rounded-full bg-[background:#2f354b] text-white cursor-pointer font-bold">
            Active
          </Button>
          <Button className="px-6 py-5 rounded-full font-bold text-white cursor-pointer  bg-[background:#2f354b]">
            Inactive
          </Button>
        </div>
      </div>
      <Extension />
    </div>
  );
}
