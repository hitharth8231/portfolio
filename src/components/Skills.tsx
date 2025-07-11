import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="w-full px-6 py-16 bg-beige text-charcoal">
      <h2 className="text-3xl font-semibold mb-4 text-softBrown">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        {skills.map((skill) => (
          <li key={skill} className="bg-peach px-4 py-2 rounded shadow-sm text-softOrange">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

