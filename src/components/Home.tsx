import Introduction from "./Introduction";
import ProjectsGrid from "./ProjectsGrid";

const Home = () => {
  return (
    <div className="w-full flex-col rounded-md flex gap-16 items-center pb-10">
      <Introduction />
      <div className="w-full flex gap-10  text-stone-200 px-20">
        <ProjectsGrid />
        <div className="p-10 w-1/4 h-4/5 bg-stone-950 rounded-md flex flex-col gap-5">
          <h2 className="text-2xl font-bold py-2 border-b-2">About me</h2>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">
              As a former teacher entering a new craft I am eager to contribute
              to development of software that makes a difference in peoples
              lives. Where technology interacts with its surroundings to provide
              solutions to problems and makes complicated tasks feel simple.
            </p>
            <p className="font-semibold">
              I have previous experience from coding in multiple languages from
              university studies (C++ and Java) and a big desire to keep
              learning new things related to coding and especially in
              web-development.
            </p>
            <p className="font-semibold">
              I enjoy collaboration and working with others to achieve success
              and learn together. My responsible and honest approach to
              development and working with others ensures quality results but
              also helps the team around me achieve their goals and grow
              together.
            </p>
          </div>
        </div>
      </div>
      <footer className="text-stone-950 flex gap-2">
        <span>&copy;</span> <span>Gustaf Ekström 2024</span>
      </footer>
    </div>
  );
};

export default Home;
