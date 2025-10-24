import type { TeamMember, Stat } from "~/types";

export default function About() {
  const stats: Stat[] = [
    { number: "12+", label: "Years in Development" },
    { number: "$2B+", label: "Website Development" },
    { number: "100+", label: "Custom Mobile Apps" },
    { number: "25+", label: "AI Projects" }
  ];

  const team: TeamMember[] = [
    { name: "SY Hriday", role: "CO-Founder", position: "Full Stack Developer" },
    { name: "SY Hriday", role: "Google Designer", position: "UI/UX Designer" },
    { name: "SY Hriday", role: "Team Member", position: "Backend Developer" },
    { name: "SY Hriday", role: "Team Member", position: "Project Manager" }
  ];

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">We're Engineers of Intelligent Change</h3>
            <p className="text-lg mb-6">
              We are a full-service digital agency passionate about transforming ideas into innovative digital products. 
              With a strong focus on emerging tech and research design & development, we aim to create solutions that 
              not only look stunning but also deliver measurable results.
            </p>
            <p className="text-lg mb-6">
              Our team of experienced designers, developers, and strategists work hand in hand to understand your 
              business goals and turn them into intuitive, user-friendly, and scalable digital experiences.
            </p>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            {stats.map((stat: Stat, index: number) => (
              <div key={index} className="stat">
                <div className="stat-value text-primary">{stat.number}</div>
                <div className="stat-desc">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">Meet Our Creative Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member: TeamMember, index: number) => (
              <div key={index} className="card bg-base-200 shadow-lg">
                <div className="card-body text-center">
                  <div className="avatar placeholder mx-auto mb-4">
                    <div className="bg-neutral text-neutral-content rounded-full w-16">
                      <span className="text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h4 className="card-title justify-center">{member.name}</h4>
                  <p className="font-semibold text-primary">{member.role}</p>
                  <p className="text-sm">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary btn-lg">GET STARTED NOW</button>
        </div>
      </div>
    </section>
  );
}