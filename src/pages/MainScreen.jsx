export default function Home() {
  return (
    <div className="pt-20">
      <div className="heading pt-20 text-center pb-20 text-4xl">
        <p className="font-extrabold md:text-8xl uppercase mb-5 lg:mb-16">
          Stop Drowning in To-Dos
        </p>
        <p className="font-extrabold md:text-7xl uppercase ">
          {" "}
          Our Task Manager Helps You Stay Afloat.
        </p>
        <div className="mt-20">
          <a
            href="/newTask"
            className="text-lg h-1/5 bg-neutral text-neutral-content btn rounded-md shadow hover:bg-neutral/80"
          >
            Start your Journey
          </a>
        </div>
      </div>
    </div>
  );
}
