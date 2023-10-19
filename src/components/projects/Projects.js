import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Weather Dashboard"
          des="A weather dashboard that displays 5-day weather forecasts using the OpenWeather API and store data with localStorage."
          skills="Skills: HTML, JavaScript, Third-party APIs"
          src={projectOne}
          githubLink="https://github.com/juanx198522/Weather-Dashboard"
          deployAppLink="https://juanx198522.github.io/Weather-Dashboard/"
        />
        <ProjectsCard
          title="Text Editor"
          des="The application will meet the PWA criteria, provide data persistence through IndexedDB, and function offline."
          skills="Skills: IndexedDB, Webpack, Workbox"
          src={projectSeven}
          githubLink="https://github.com/juanx198522/Text-Editor"
          deployAppLink="https://pwa-text-editor-2023-c07a9bda4f60.herokuapp.com/"
        />
        {/* <ProjectsCard
          title="Tech Blog"
          des="A CMS-style blog site following the MVC structure with Handlebars, Sequelize, and express-session for authentication."
          skills="Skills: MVC, Handlebars, Sequelize"
          src={projectTwo}
          githubLink="https://github.com/juanx198522/Tech-Blog"
          deployAppLink="https://tech-blog-app-2023-c79c738b29bd.herokuapp.com/"
        /> */}
        <ProjectsCard
          title="Work Day Scheduler"
          des="A simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm)."
          skills="Skills: HTML, CSS, jQuery"
          src={projectThree}
          githubLink="https://github.com/juanx198522/Work-Day-Scheduler"
          deployAppLink="https://juanx198522.github.io/Work-Day-Scheduler/"
        />
        <ProjectsCard
          title="Password Generator"
          des="A browser app for generating custom passwords based on selected criteria, with dynamic HTML and CSS using JavaScript."
          skills="Skills: HTML, CSS, JavaScript"
          src={projectFour}
          githubLink="https://github.com/juanx198522/Password-Generator"
          deployAppLink="https://juanx198522.github.io/Password-Generator/"
        />
        <ProjectsCard
          title="Note Taker"
          des="An application that can be used to write and save notes. Employs Express.js to store and retrieve notes from a JSON file."
          skills="Skills: Node, Express, JSON"
          src={projectFive}
          githubLink="https://github.com/juanx198522/Note-Taker"
          deployAppLink="https://note-taker-11-a2cc57ffa002.herokuapp.com/"
        />
        <ProjectsCard
          title="MyWorkoutPal"
          des="A web application that allows users to log their workouts and keep track of their exercise sessions."
          skills="Skills: Node, Sequelize, MySQL"
          src={projectSix}
          githubLink="https://github.com/calzu0821/my-workout-pal"
          deployAppLink="https://myworkoutpal-fb26ea75640f.herokuapp.com/"
        />
      </div>
    </section>
  );
}

export default Projects;