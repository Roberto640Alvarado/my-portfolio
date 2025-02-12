import React from "react";
import reactIcon from "../assets/icons/react.svg";
import nodeIcon from "../assets/icons/nodejs.svg";
import nextIcon from "../assets/icons/nextjs.svg";
import nestIcon from "../assets/icons/nestjs.svg";
import springIcon from "../assets/icons/spring.svg";
import javaIcon from "../assets/icons/java.svg";
import jsIcon from "../assets/icons/javascript.svg";
import tsIcon from "../assets/icons/typescript.svg";
import htmlIcon from "../assets/icons/html5.svg";
import cssIcon from "../assets/icons/css.svg";
import csharpIcon from "../assets/icons/csharp.svg";
import pythonIcon from "../assets/icons/python.svg";
import visualbasic from "../assets/icons/visualbasic.jpg";

import sqlServerIcon from "../assets/icons/sql-server.svg";
import mongoIcon from "../assets/icons/mongodb.svg";
import postgresIcon from "../assets/icons/postgresql.svg";
import mysqlIcon from "../assets/icons/mysql.svg";

import vsIcon from "../assets/icons/visual-studio.svg";
import vscodeIcon from "../assets/icons/vscode.svg";
import postmanIcon from "../assets/icons/postman.svg";
import dockerIcon from "../assets/icons/docker.svg";
import eclipseIcon from "../assets/icons/eclipse.svg";
import githubIcon from "../assets/icons/github.svg";
import gitlabIcon from "../assets/icons/gitlab.svg";
import slackIcon from "../assets/icons/slack.svg";

const skills = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "NestJS", icon: nestIcon },
  { name: "Spring", icon: springIcon },
  { name: "Java", icon: javaIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "C#", icon: csharpIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Visual Basic", icon: visualbasic },
];

const databases = [
  { name: "SQL Server", icon: sqlServerIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "MySQL", icon: mysqlIcon },
];

const tools = [
  { name: "Visual Studio", icon: vsIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Eclipse", icon: eclipseIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "GitLab", icon: gitlabIcon },
  { name: "Slack", icon: slackIcon },
];

const SkillSection = ({ title, items }) => (
  <div className="w-full max-w-5xl mb-8">
    <h3 className="text-2xl font-bold mb-4 text-blue-400">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition"
        >
          <img src={item.icon} alt={item.name} className="w-16 h-16 mb-2" />
          <span className="text-white">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10">Habilidades</h2>
      <SkillSection title="Tecnologías" items={skills} />
      <SkillSection title="Bases de Datos" items={databases} />
      <SkillSection title="Herramientas" items={tools} />
    </section>
  );
};

export default Skills;
