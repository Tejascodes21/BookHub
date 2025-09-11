import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { words } from "../assets/dummydata";
import {
  headerText,
  container,
  formContainer,
  glassBox,
  geometricOverlay,
  subHeader,
  paragraphText,
  inputWrapper,
  searchButton,
  inputField,
} from "../assets/dummystyles";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentWord, setCurrentWord] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    <div className={container}>
      <div className={glassBox}>
        <div className={geometricOverlay}>
          <div className=" absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-96 md:h-96 bg-[#F8FFAE]/10 rounded-full blur-xl md:blur-3xl" />
          <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 h-40 w-40 md:w-80 md:h-80 bg-[#43C6AC]/10 rounded-full blur-xl md:blur-3xl" />
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* TEXT SECTION */}
            <div className=" space-y-6 md:space-y-8">
              <div className=" space-y-4 md:space-y-6">
                <h1 className={headerText}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B5876] to-[#43C6AC]">
                    Mindful
                  </span>
                  <br />
                  <span className={subHeader}>Reading Experience</span>
                </h1>
                <p className={paragraphText}>
                  curated knowledge journeys that challenge perceptions and
                  inspire growth. Discover transformative content crafted for
                  the modern intellect.
                </p>
              </div>
              {/* SEARCH FUNCTION*/}
              <form onSubmit={handleSearch} className="space-y-6 md:space-y-8">
                <div className={formContainer}>
                  <div className={inputWrapper}>
                    {/* Background */}
                    <div className="absolute inset-0 bg-white/90 rounded-lg md:rounded-xl shadow-sm" />

                    {/* Icon + Input */}
                    <div className="relative flex items-center w-full">
                      <Search className="ml-4 md:ml-5 w-5 h-5 md:w-6 md:h-6 text-gray-600 group-focus-within:text-[#285876]" />
                      {/* <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search books..."
                        className="w-full px-4 py-2 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43C6AC]"
                      />
                      <button
                        type="submit"
                        className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#2B5876] to-[#43C6AC] text-white"
                      >
                        Search
                      </button> */}
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search author, titles, or concepts..."
                        className={inputField}
                      />
                    </div>
                  </div>
                  <button type="submit" className={searchButton}>
                    <Search className=" w-4 h-4 md:w-5 md:h-5" />
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </form>

              {/*{/*STATS
              <div className={stateContainer}>
                {[
                  { number: "50k+", label: "Tickets" },
                  { number: "1.2M", label: "Readers" },
                  { number: "240+", label: "Topics" },
                ].map((state, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={statBox}>{state.number}</div>
                    <div className={statLabel}>{state.label}</div>
                  </div>
                ))}
              </div>*/ //stats not showing 
}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
