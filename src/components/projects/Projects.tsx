import { BsArrowRight, BsBoxArrowInUpRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { client } from "../../../client";
import { imgUrl } from "../../imgUrl";

interface ProjectIF {
  title: string;
  tags: string[];
  description: string;
  website_url: string;
  github_url: string;
  project_image_desktop: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
  project_image_mobile: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
}

export default function Projects(): JSX.Element {
  const [projects, setProjects] = useState<ProjectIF[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await client.fetch(`
        *[_type == "project"]{
            title,
            tags,
            description,
            website_url,
            github_url,
            project_image_desktop{
              _type,
                asset{
                _ref
                },
                // crop,
                // hotspot
            },
            project_image_mobile{
              _type,
              asset{
                _ref
              },
              // crop,
              // hotspot
            },
      }
      `);
        setProjects(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log("error occured: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="my-16 relative">
        <h1 className="text-xl tracking-widest font-semibold uppercase">
          Projects
        </h1>
        <div className="py-5">
          {!isLoading &&
            projects.map((project) => (
              <section key={project.title}>
                <div className="mb-10 py-4  border-2 border-transparent hover:border-stone-200/25 rounded-lg px-3 bg-transparent hover:filter hover:backdrop-blur hover:shadow-lg hover:shadow-stone-300/20">
                  <aside className="relative mb-2 h-[15rem]  md:h-64 rounded overflow-hidden shadow w-full">
                    {/* Desktop image */}
                    <img
                      src={imgUrl(
                        project.project_image_desktop.asset._ref,
                        // project.project_image_desktop.crop,
                        // project.project_image_desktop.hotspot
                      )}
                      alt={project.title}
                      className="w-[100%] md:w-[80%] h-full border-1 border-stone-300/40 shadow-lg left-0 object-contain rounded-md overflow-hidden absolute"
                    />
                    {/* Mobile image */}
                    <img
                      src={imgUrl(project.project_image_mobile.asset._ref)}
                      // alt={project.name}
                      className="object-contain border-2 absolute bottom-3 shadow-lg shadow-black/30 rounded-sm overflow-hidden w-[30%] md:w-[26%] right-2"
                    />
                  </aside>
                  <section>
                    <h1 className="flex items-center justify-between font-black text-xl text-stone-800 py-2">
                      <span>{project.title}</span>
                      <span>
                        <BsBoxArrowInUpRight />
                      </span>
                    </h1>
                    <p className="text-stone-700 text-sm">
                      {project.description}
                    </p>
                    <small>
                      <ul className="flex gap-2  flex-wrap mt-4">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="py-1 px-2 font-extralight rounded-md shadow-lg filter backdrop-blur shadow-stone-300/40 bg-stone-900/70  text-teal-50"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </small>
                  </section>
                </div>
                <div className="bg-stone-400/40 h-[2gpx] w-[25%] md:w-[30%] my-4 mb-5 rounded-full" />
              </section>
            ))}
        </div>
        <button className="absolute bottom-[1.16%] md:bottom-[1.3%] right-0 md:left-[28%] text-stone-700 px-4 py-2 flex items-center gap-8">
          View All Projects{" "}
          <span>
            <BsArrowRight />
          </span>
        </button>
      </section>
    </>
  );
}
