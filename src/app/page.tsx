export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-6 sm:p-8 md:p-20 gap-6 sm:gap-8 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-green-50 to-blue-50">
      <header className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-[#4A4433] mb-2 font-[family-name:var(--font-cambria)]">ARTS FOR THE EARTH</h1>
        <h2 className="text-lg font-semibold text-[#5D5A44] font-[family-name:var(--font-cambria)]">BURG INK PRODUCTION</h2>
      </header>
      
      <main className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
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
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#4A4433] mb-6 font-[family-name:var(--font-cambria)] text-center">What We Offer</h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-green-800 mb-4 font-[family-name:var(--font-cambria)] border-b border-green-200 pb-2">Creative Expression & Art</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 font-[family-name:var(--font-cambria)]">
              <li><span className="font-semibold">Tattoo Art</span> – Artists offering tattooing, with proceeds supporting the cause.</li>
              <li><span className="font-semibold">Gallery Exhibition</span> – A breathtaking and inspiring collection of artwork honoring nature.</li>
              <li><span className="font-semibold">Live Painting</span> – Artists creating in real time, sharing their creative process.</li>
              <li><span className="font-semibold">Kids&apos; & Adult Crafts</span> – Dedicated craft stations for all ages to engage in hands-on creativity.</li>
              <li><span className="font-semibold">Community Canvas</span> – A collaborative art piece where everyone can contribute.</li>
              <li><span className="font-semibold">Mural Painting</span> – A large-scale artwork created during the event to honor the planet.</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-indigo-700 mb-4 font-[family-name:var(--font-cambria)] border-b border-indigo-200 pb-2">Music & Movement</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 font-[family-name:var(--font-cambria)]">
              <li><span className="font-semibold">Live DJs & Musical Performances</span> – A fusion of live music and DJ sets to uplift and inspire.</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-amber-700 mb-4 font-[family-name:var(--font-cambria)] border-b border-amber-200 pb-2">Food & Drink</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 font-[family-name:var(--font-cambria)]">
              <li><span className="font-semibold">Local Vendors & Refreshments</span> – A variety of delicious food and drinks available to nourish the community providing support for local small businesses.</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold text-teal-700 mb-4 font-[family-name:var(--font-cambria)] border-b border-teal-200 pb-2">Community Engagement & Support</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 font-[family-name:var(--font-cambria)]">
              <li><span className="font-semibold">Raffles</span> – Exciting prizes and giveaways, with proceeds supporting environmental organizations.</li>
              <li><span className="font-semibold">Community Networking Board</span> – A space to connect with local groups, opportunities, and like-minded individuals.</li>
              <li><span className="font-semibold">Vendor Marketplace</span> – Featuring artists, jewelry makers, handcrafted clothing, and eco-conscious projects.</li>
            </ul>
          </div>
          
          <div className="mb-8 bg-green-50 p-4 sm:p-6 rounded-lg border border-green-200">
            <h4 className="text-xl font-bold text-[#4A4433] mb-3 sm:mb-4 font-[family-name:var(--font-cambria)] text-center">Event Schedule</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-800 font-[family-name:var(--font-cambria)] text-sm sm:text-base">
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold">11:45 AM</span>
                <span className="hidden sm:block flex-1 mx-4 border-b border-dotted border-gray-400"></span>
                <span>Acknowledgements and prep talk</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold">12:00 PM - 5:00 PM</span>
                <span className="hidden sm:block flex-1 mx-4 border-b border-dotted border-gray-400"></span>
                <span>Crafts, Tattoos, Music and Open Floor</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold">~2:00 PM - 2:30 PM</span>
                <span className="hidden sm:block flex-1 mx-4 border-b border-dotted border-gray-400"></span>
                <span>Non-profit Info (on mic)</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold">5:00 PM - 7:00 PM</span>
                <span className="hidden sm:block flex-1 mx-4 border-b border-dotted border-gray-400"></span>
                <span>Live Music</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold">8:00 PM - 2:00 AM</span>
                <span className="hidden sm:block flex-1 mx-4 border-b border-dotted border-gray-400"></span>
                <span>Art Night Collaboration</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold">~10:00 PM</span>
                <span className="hidden sm:block flex-1 mx-4 border-b border-dotted border-gray-400"></span>
                <span>Live Raffle Draw</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-8 bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="text-xl font-bold text-[#4A4433] mb-4 font-[family-name:var(--font-cambria)] text-center">Ticket Sales & Pricing</h4>
            <ul className="space-y-4 text-gray-800 font-[family-name:var(--font-cambria)]">
              <li className="flex flex-col">
                <span className="font-semibold text-lg">General Admission</span>
                <span>$20 (pre-sale) | $25 (at the door)</span>
                <span className="text-sm italic">Includes two raffle tickets</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-lg">VIP Tattoo Ticket</span>
                <span>$250</span>
                <span className="text-sm italic">$50 automatically donated to the cause</span>
                <span className="text-sm italic">Remaining amount distributed at the artist&apos;s discretion</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-lg">Kids</span>
                <span>Free</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 bg-green-50 p-6 rounded-lg border border-green-200">
          <h4 className="text-xl font-bold text-[#4A4433] mb-4 font-[family-name:var(--font-cambria)] text-center">Fundraising Beneficiaries – Giving Back to Our Planet & Community</h4>
          
          <div className="mb-6">
            <h5 className="text-lg font-semibold text-green-800 mb-2">Water Protection & Conservation - 80%</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 font-[family-name:var(--font-cambria)]">
              <li><span className="font-semibold">Water Protectors Network</span> – Advocating for clean water, Indigenous water rights, and environmental justice. <span className="text-green-700 font-semibold">60%</span></li>
              <li><span className="font-semibold">Friends of the Rouge</span> – Dedicated to restoring, protecting, and enhancing the Rouge River watershed, engaging the community in conservation efforts. <span className="text-green-700 font-semibold">20%</span></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h5 className="text-lg font-semibold text-green-800 mb-2">Tree Planting & Conservation - Tree Print - 20%</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 font-[family-name:var(--font-cambria)]">
              <li><span className="font-semibold">Greening of Detroit</span> – Focused on planting trees, educating communities, and providing hands-on opportunities for people to contribute to a greener city.</li>
            </ul>
          </div>
          
          <div className="border-t border-green-200 pt-4 mt-6">
            <h5 className="text-lg font-semibold text-[#4A4433] mb-3 text-center">Specific Art for Sale with Donations to:</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-100 p-4 rounded-md">
                <h6 className="font-bold mb-1">Animal Welfare & Ecosystem Protection - Animal Prints</h6>
                <p className="text-sm">• <span className="font-semibold">Rebel Dogs Detroit & Detroit Alley Cats</span> – Local nonprofits rescuing, rehabilitating, and rehoming vulnerable animals in Detroit.</p>
              </div>
              
              <div className="bg-green-100 p-4 rounded-md">
                <h6 className="font-bold mb-1">Women's Healing & Empowerment - Divine Feminine Print</h6>
                <p className="text-sm">• <span className="font-semibold">Sanctum House</span> – A sanctuary for survivors of sex trafficking, providing safety, healing, and support for rebuilding their lives.</p>
              </div>
              
              <div className="bg-green-100 p-4 rounded-md">
                <h6 className="font-bold mb-1">BIPOC Community Support</h6>
                <p className="text-sm">• <span className="font-semibold">Contact Chloe White</span> – Organization focused on providing resources for affordable living, food assistance, and survival support for underserved communities.</p>
              </div>
              
              <div className="bg-green-100 p-4 rounded-md">
                <h6 className="font-bold mb-1">Youth Art & Creative Resources</h6>
                <p className="text-sm">• <span className="font-semibold">Arts & Scraps</span> – A nonprofit repurposing materials for creative education, providing hands-on art experiences for children, and promoting sustainability in art.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold text-green-800 border-t-2 border-green-200 pt-4 sm:pt-6 font-[family-name:var(--font-cambria)] text-center">
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
