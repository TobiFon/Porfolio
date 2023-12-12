import {
  Api,
  Css,
  Django,
  Framer,
  Git,
  Html,
  Javascript,
  Jest,
  Next,
  Postgres,
  Python,
  ReactJS,
  Redux,
  Sql,
  Tailwind,
  Typescript,
  VsCode,
} from "../../public/Icons";

const FrontEnd = [
  {
    name: "HTML",
    icon: <Html />,
  },
  {
    name: "CSS",
    icon: <Css />,
  },
  {
    name: "JS",
    icon: <Javascript />,
  },
  { name: "TS", icon: <Typescript /> },
  {
    name: "React",
    icon: <ReactJS />,
  },
  {
    name: "NextJS",
    icon: <Next />,
  },
  {
    name: "Tailwind",
    icon: <Tailwind />,
  },
  {
    name: "Redux",
    icon: <Redux />,
  },
  {
    name: "Framer-Motion",
    icon: <Framer />,
  },
];

const BackEnd = [
  {
    name: "Python",
    icon: <Python />,
  },
  {
    name: "Django",
    icon: <Django />,
  },
  {
    name: "Apis",
    icon: <Api />,
  },
  {
    name: "PostgreSQL",
    icon: <Postgres />,
  },

  {
    name: "SQL",
    icon: <Sql />,
  },
];

const Tools = [
  {
    name: "VS Code",
    icon: <VsCode />,
  },
  {
    name: "Git",
    icon: <Git />,
  },
  {
    name: "jest",
    icon: <Jest />,
  },
];

const Skills = () => {
  return (
    <div>
      <ul className=" list-disc space-y-4">
        <li className=" space-y-3">
          <h3 className=" text-xl font-bold lg:text-2xl text-primary-200">
            Front-End
          </h3>
          <div className=" flex gap-5 flex-wrap">
            {FrontEnd.map((skill, i) => (
              <div key={i} className=" text-center space-y-2">
                <div className=" text-4xl  text-text-100 fill-text-100">
                  {skill.icon}
                </div>
                <div className=" font-semibold text-sm">{skill.name}</div>
              </div>
            ))}
          </div>
        </li>
        <li className=" space-y-3">
          <h3 className=" text-xl font-bold lg:text-2xl text-primary-200">
            Back-End
          </h3>
          <div className=" flex gap-5 flex-wrap">
            {BackEnd.map((skill, i) => (
              <div key={i} className=" text-center space-y-2">
                <div className=" text-4xl  text-text-100 fill-text-100">
                  {skill.icon}
                </div>
                <div className=" font-semibold text-sm">{skill.name}</div>
              </div>
            ))}
          </div>
        </li>
        <li className=" space-y-3">
          <h3 className=" text-xl font-bold lg:text-2xl text-primary-200">
            Tools
          </h3>
          <div className=" flex gap-5 flex-wrap">
            {Tools.map((skill, i) => (
              <div key={i} className=" text-center space-y-2">
                <div className=" text-2xl  text-text-100 fill-text-100">
                  {skill.icon}
                </div>
                <div className=" font-semibold text-sm">{skill.name}</div>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
