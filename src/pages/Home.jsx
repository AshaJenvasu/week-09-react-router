import { Link } from "react-router-dom";
import heroArt from "../assets/hero.jpg";
export default function Home() {
  return (
    <div className="text-center py-12 md:py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
        Welcome to my <span className="text-teal-600">Digital Art World</span>!
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
        I will show you some of my artwork. Feel free to explore it!
      </p>

      <div className="w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden mb-12 border-4 border-white transition-transform duration-500 hover:scale-[1.01]">
        <img
          src={heroArt}
          alt="art work"
          className="w-full h-auto object-contain"
        />
      </div>

      <Link to="/products">
        <button className="px-8 py-4 bg-teal-500 text-white font-bold rounded-full text-lg shadow-md hover:bg-teal-600 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer transition-all duration-300">
          Enter the Gallery →
        </button>
      </Link>
    </div>
  );
}
