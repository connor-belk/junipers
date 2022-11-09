import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <div className="h-screen text-center">
          <div id="title-wrapper">
            <h1 className="text-7xl font-thin mt-20 mb-8">
              Junipers Guinea Pig Rescue
            </h1>
            <h2 className="text-3xl font-thin">
              Loving homes for loving guinea pigs
            </h2>
          </div>
        </div>

        <div className="h-screen bg-green-500 text-center">
          About Card and Guinea Photo
        </div>

        <div className="h-screen bg-red-800 text-center">
          Our Programs and 3 cards: Advocasy Rehab Rescue
        </div>

        <div className="h-80 bg-blue-300 text-center">
          Get in Touch (email, phone, address)
        </div>
      </main>
      <Footer />
    </>
  );
}
