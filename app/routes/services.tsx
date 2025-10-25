import type { MetaFunction } from "react-router";
import Services from "~/components/Sections/Services";

export const meta: MetaFunction = () => {
  return [
    { title: "Our Services - Dev Nest" },
    { 
      name: "description", 
      content: "Explore our comprehensive digital services including UI/UX design, website development, and AI mobile app development." 
    },
  ];
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <Services />
        {/* Add more service-specific content here */}
      </div>
    </div>
  );
}