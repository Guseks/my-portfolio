import linkedInImage from "../assets/LinkedIn.jpg";

const Introduction = () => {
  return (
    <div className="w-full flex justify-center gap-20 border-b-4 border-regal-blue pt-8 pb-16">
      <div className="flex justify-center gap-10 text-stone-950 rounded-md">
        <div className="flex flex-col w-80 p-4 justify-center gap-4">
          <h2 className="text-4xl mb-3 font-bold">Gustaf Ekström</h2>
          <p className="font-bold text-lg">Web Developer, Fullstack </p>
          <div className="flex flex-col gap-5 mt-5">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gustaf-ekstr%C3%B6m-040229137/",
                  "_blank",
                  "noopener"
                )
              }
              className="font-bold w-60 border-2 border-regal-blue p-3 rounded-md text-stone-950 hover:bg-regal-blue hover:text-stone-200"
            >
              Connect on LinkedIn
            </button>
            <p className="font-bold"> Email: gusek93@gmail.com</p>
          </div>
        </div>

        <img className="w-72 rounded-md" src={linkedInImage} />
        <div className="text-stone-950 px-10 py-5 rounded-md flex flex-col gap-2">
          <h2 className="font-bold text-xl">Technical Experience</h2>
          <ul className="list-disc flex flex-col gap-2 ml-8 font-semibold">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Git</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Tailwind</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
