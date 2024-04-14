import { useEffect, useState } from "react";
import { client } from "../../../client";
import { Title } from "../sharedUi/Title";

interface SkillsIF {
  title: string;
  tags: string[];
}
export default function About(): JSX.Element {
  const [skillset, setSkillset] = useState<SkillsIF[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const data: SkillsIF[] = await client.fetch(`
          *[_type == "skills"]{
            title,
            tags
          }     
      `);
      
      setSkillset(data);
      setIsLoading(false);
    };

    fetchSkills();
  }, []);

  return (
    <section className="md:mt-16 md:pt-5" id="about">
      <Title>About</Title>
      <p className="text-gray-700 dark:text-stone-400 mb-1">
        A passionate and skilled frontend software developer with a focus on
        building user-friendly and responsive web applications.
      </p>
      <div className="relative flex w-full flex-wrap justify-between">
        <h1 className="absolute tracking-widest leading-10 text-6xl opacity-10 font-bold text-stone-400 -z-10 uppercase md:right-[50%] md:translate-x-[50%]">
          Skills
        </h1>
        {!isLoading &&
          skillset.map((skill) => (
            <div
              className="md:flex gap-2 pt-5 flex-col md:w-[45%]"
              key={skill.title}
            >
              <div>
                <h2 className="text-base text-stone-700 dark:text-stone-400 font-medium uppercase relative w-fit mb-2 before:absolute before:w-[40%] before:h-[10%] before:bg-stone-400 before:bottom-0 before:left-[1%] before:rounded-full">
                  {skill.title}:
                </h2>
              </div>
              <div>
                <ul className="flex flex-wrap">
                  {skill.tags.map((stack, i) => (
                    <li
                      key={i}
                      className="py-1.5 md:py-1 px-4 md:px-2.5 text-center md:text-sm  scale-75 md:scale-100 bg-stone-400/20 shadow shadow-stone-100 dark:shadow-stone-600 dark:text-teal-500 filter md:backdrop-blur rounded-full flex items-center mb-1 md:mr-1 justify-center"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
