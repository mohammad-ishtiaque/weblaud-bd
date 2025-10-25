import type { MetaFunction } from "react-router";
import About from "~/components/Sections/About";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us - Dev Nest" },
    { 
      name: "description", 
      content: "Learn about Dev Nest - a full-service digital agency transforming ideas into innovative digital products." 
    },
  ];
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <About />
        {/* Add more about-specific content here */}
      </div>
    </div>
  );
}