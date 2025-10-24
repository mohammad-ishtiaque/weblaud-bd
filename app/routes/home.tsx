import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Layout/Navbar";
import Hero from "~/components/Sections/Hero";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* other sections if needed */}
    </div>
  );
}
