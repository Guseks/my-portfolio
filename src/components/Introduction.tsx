import linkedInImage from "../assets/LinkedIn.jpg";

const Introduction = () => {
  return (
    <div className="w-full flex justify-center border-b-4 border-regal-blue pb-5 tablet:pb-8 pt-4 px-4">
      <div className="flex flex-col tablet:flex-row max-[800px]:items-center tablet:justify-center tablet:gap-4 text-stone-950 rounded-md">
        <img className="w-72 tablet:w-96 rounded-md" src={linkedInImage} />
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
            <li>C# and .NET</li>
            <li>Docker</li>
          </ul>
        </div>
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
    </div>
  );
};

export default Introduction;
