import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-peach text-charcoal px-6 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg p-6 bg-white dark:bg-gray-900 shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4 space-x-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-sm bg-indigo-100 dark:bg-indigo-700/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              {project.live && (
                <>
                  {" | "}
                  <a
                    href={project.live}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
