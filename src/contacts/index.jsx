import { Instagram, Linkedin, Github, Phone } from "lucide-react";

function Contact() {
  return (
    <div className="m-auto w-[80%] text-base-content bg-base-100 about-me-container py-20 p-4 min-h-screen flex flex-col justify-center ">
      <div className="text-base-content bg-base-200 rounded-lg p-5">
        <div className="mb-5 ">
          <h2 className="text-3xl mb-2">About the Webpage</h2>
          <p className="text-xl">
            This is a simple to-do list application designed to help you
            organize your tasks effectively. You can add new tasks, mark tasks
            as completed, and delete tasks from your list.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-3xl mb-2">About me</h2>
          <p className="text-xl">
            Im passionate about software development and I enjoy playing games
            and watching movies and anime.
          </p>
          <p className="text-xl">
            This webapp is my first project on React along with Tailwindcss and
            daisyUi. Especially with the help of Gemini and Blackbox.ai
          </p>
        </div>
        <div></div>
        <h3 className="text-2xl mb-2">Connect with me:</h3>
        <ul className="text-xl">
          <li className="flex flex-row items-center cursor-pointer hover:text-primary">
            <a
              href="https://www.instagram.com/iamkamaleshr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Instagram
              <Instagram className="ml-1" />
            </a>
          </li>
          <li className="flex flex-row items-center cursor-pointer hover:text-primary">
            <a
              href="https://wa.me//916369694283"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              WhatsApp
              <Phone className="ml-1" />
            </a>
          </li>
          <li className="flex flex-row items-center cursor-pointer hover:text-primary">
            <a
              href="https://www.linkedin.com/in/Kamalesh_R"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              LinkedIn
              <Linkedin className="ml-1" />
            </a>
          </li>
          <li className="flex flex-row items-center cursor-pointer hover:text-primary">
            <a
              href="https://github.com/kamaleshRanganathan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              GitHub
              <Github className="ml-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
