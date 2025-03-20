export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-6 sm:p-8 md:p-20 gap-6 sm:gap-8 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-green-50 to-blue-50">
      <header className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-[#4A4433] mb-2 font-[family-name:var(--font-cambria)]">ARTS FOR THE EARTH</h1>
        <h2 className="text-lg font-semibold text-[#5D5A44] font-[family-name:var(--font-cambria)]">BURG INK PRODUCTION</h2>
      </header>
      
      <main className="max-w-3xl mx-auto text-center">
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-800 font-[family-name:var(--font-cambria)] leading-relaxed">
          Life is a <span className="text-green-800 font-semibold">precious gift</span>, and our source of endless beauty, abundance, and diversity is all created from our <span className="italic text-green-700">Mother Earth</span>.
        </p>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-800 font-[family-name:var(--font-cambria)] leading-relaxed">
          As a community, we have the <span className="text-blue-700 font-semibold">power to come together</span> in celebration, expressing gratitude, sharing creativity, and deepening our connection to the Earth and one another.
        </p>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-800 font-[family-name:var(--font-cambria)] leading-relaxed">
          This gathering is a <span className="text-amber-700 font-semibold">heartfelt offering</span>, a space to experience the joy of creation, strengthen our bonds, and support organizations dedicated to protecting and restoring the planet.
        </p>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-800 font-[family-name:var(--font-cambria)] leading-relaxed">
          Through <span className="text-purple-700">art</span>, <span className="text-indigo-600">music</span>, and <span className="text-teal-600">collective energy</span>, we uplift and inspire, fostering a deeper commitment to the well-being of our world for generations to come.
        </p>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-800 font-[family-name:var(--font-cambria)] leading-relaxed">
          Let&apos;s dance, create, and celebrate the <span className="italic font-semibold text-green-800">magic of being alive together</span>.
        </p>
        <p className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold text-green-800 border-t-2 border-green-200 pt-4 sm:pt-6 font-[family-name:var(--font-cambria)]">
          Our planet needs us to <span className="text-red-600">Share Love!</span> By protecting our <span className="text-blue-600">waters</span> and being <span className="text-amber-700">Guardians of the land</span>, we are protecting the source of <span className="uppercase tracking-wide">All life</span>.
        </p>
      </main>
      
      <footer className="text-center text-xs sm:text-sm text-gray-700 mt-4">
        <p>Join us in celebrating and protecting our Earth</p>
        <button className="mt-4 px-8 py-3 bg-[#5C5C3D] hover:bg-[#4A4433] text-white rounded-md font-bold text-lg tracking-wide transition-colors duration-300 shadow-lg border-2 border-[#A0A080] font-[family-name:var(--font-cambria)] uppercase">
          Buy Tickets
        </button>
      </footer>
    </div>
  );
}
