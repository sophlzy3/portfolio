import { ExperienceCard } from "../ui/ExperienceCard";
import { experienceItems } from "@/content/experience/experiences";
import { schoolItems } from "@/content/experience/experiences";

export default function Experiences() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="mb-1 text-xl font-bold">Experiences</h1>
        <ul className="animated-list cursor-pointer space-y-7">
          {experienceItems.map((item, index) => (
            <li key={index}>
              <ExperienceCard key={index} item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="mb-1 text-xl font-bold">School</h1>
        {schoolItems.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
