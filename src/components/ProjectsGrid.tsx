import weatherAppImage from "../assets/exampleWeather.png";
import movieCollectionImage from "../assets/exampleMovieCollection.png";
import starwarsImage from "../assets/exampleStarWarsAPI.png";
import elevatorImageMySQL from "../assets/exampleElevatorMySQL.png";

const ProjectsGrid = () => {
  return (
    <div className="laptop:w-3/4 bg-stone-950 p-5 rounded-md flex flex-col gap-4 ">
      <h2 className="text-2xl px-4 font-bold">Projects</h2>
      <div className="gap-5 grid grid-cols-1 laptop:grid-cols-2">
        <div className=" rounded-md p-4 flex flex-col gap-4 bg-black border-2 border-regal-blue justify-between">
          <div className="flex justify-center ">
            <img
              className="h-40 tablet:h-80 rounded-md"
              src={movieCollectionImage}
            />
          </div>
          <p className="font-semibold text-sm">
            This application provides a way for the user to find new movies they
            might be interested in. It also enables the user to keep a list of
            movies that they have watched or want to watch using MongoDB. The
            application enables the user to find movies based on genre. The
            application uses the TMDB API.
          </p>
          <p className="font-semibold text-sm">
            Technologies used: Typescript, NodeJS, Tailwind
          </p>
          <div className="flex gap-5 tablet:h-12 items-center font-semibold text-xs tablet:text-sm">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Guseks/movie-collection",
                  "_blank",
                  "noopener"
                )
              }
              className="bg-regal-blue p-2 px-4 rounded-md hover:outline-2 hover:outline outline-stone-200"
            >
              Repository
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://movie-collection-frontend.vercel.app/",
                  "_blank",
                  "noopener"
                )
              }
              className="bg-regal-blue p-2 px-4 rounded-md hover:outline-2 hover:outline outline-stone-200"
            >
              Live version
            </button>
          </div>
        </div>
        <div className=" rounded-md p-4 flex flex-col justify-between gap-4 bg-black border-2 border-regal-blue text-xs tablet:text-sm">
          <div className="flex justify-center ">
            <img
              className="h-40 tablet:h-80 rounded-md"
              src={weatherAppImage}
            />
          </div>
          <p className="font-semibold text-sm">
            This application is a weather app where the user can get the current
            weather at a desired location for up to the next 5 days. The app
            consists of a frontend and backend. The backend makes request to the
            openweathermap API to get the weather data. This weather data is
            then handled and processed by the backend. This data is then
            displayed by the frontend for the user to enjoy.
          </p>
          <p className="font-semibold text-sm">
            Technologies used: Typescript, React, Node, Tailwind
          </p>
          <div className="flex gap-5 h-12 items-center font-semibold">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Guseks/weather-app",
                  "_blank",
                  "noopener"
                )
              }
              className="bg-regal-blue p-2 px-4 rounded-md hover:outline-2 hover:outline outline-stone-200"
            >
              Repository
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://weather-app-silk-eight-74.vercel.app/",
                  "_blank",
                  "noopener"
                )
              }
              className="bg-regal-blue p-2 px-4 rounded-md hover:outline-2 hover:outline outline-stone-200"
            >
              Live version
            </button>
          </div>
        </div>
        <div className=" rounded-md p-4 flex flex-col gap-4 bg-black  border-2 border-regal-blue justify-between text-xs tablet:text-sm">
          <div className="flex justify-center ">
            <img className="h-40 tablet:h-80 rounded-md" src={starwarsImage} />
          </div>
          <p className="font-semibold text-sm">
            Application for managing a collection of star wars characters. App
            interacts with external API to gather information about characters
            specified by the user.
          </p>
          <p className="font-semibold text-sm">
            Technologies used: JavaScript, React, C#/.NET, Bootstrap
          </p>
          <div className="flex gap-5 h-12 items-center font-semibold">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Guseks/CsharpStarwarsAPI",
                  "_blank",
                  "noopener"
                )
              }
              className="bg-regal-blue p-2 px-4 rounded-md hover:outline-2 hover:outline outline-stone-200"
            >
              Repository
            </button>
          </div>
        </div>

        <div className=" rounded-md p-4 flex flex-col gap-4 bg-black border-2 border-regal-blue justify-between text-xs tablet:text-sm">
          <div className="flex justify-center ">
            <img
              className="h-40 tablet:h-80 rounded-md"
              src={elevatorImageMySQL}
            />
          </div>
          <p className="font-semibold text-sm">
            An application managing a fleet of elevators. The app is built using
            Node.js and utilizes MySQL or MongoDB for data storage. It allows
            tracking elevator movements, handling elevator calls, and
            maintaining the state of each elevator.
          </p>

          <p className="font-semibold text-sm">
            Technologies used: JavaScript, React, Node, Bootstrap
          </p>
          <div className="flex gap-5 h-12 items-center font-semibold">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Guseks/Elevator-App-MySQL",
                  "_blank",
                  "noopener"
                )
              }
              className="bg-regal-blue p-2 px-4 rounded-md hover:outline-2 hover:outline outline-stone-200 text-xs"
            >
              Repository (MySQL)
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Guseks/Elevator-App-MongoDB",
                  "_blank",
                  "noopener"
                )
              }
              className="bg-regal-blue p-2 px-4 rounded-md hover:outline-2 hover:outline outline-stone-200 text-xs"
            >
              Repository (MongoDB)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
