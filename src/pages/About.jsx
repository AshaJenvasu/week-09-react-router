import aboutArt from "../assets/about_me_art.png";

export default function About() {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg max-w-3xl mx-auto border border-gray-100">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-md transition-all duration-300 hover:scale-105">
        <img
          src={aboutArt}
          alt="My Avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center prose prose-teal max-w-xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 tracking-tight">
          About Me
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          I am a huge fan of anime!
          <br />
          <br />
          Through this website, I want to express my passion for the anime world
          into digital art. Every piece I create is a reflection of the joy and
          inspiration I get from my favorite shows.
          <br />
          <br />I hope you enjoy exploring my work as much as I enjoyed creating
          it! ✨
        </p>
      </div>
    </div>
  );
}
