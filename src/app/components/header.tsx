export default function Header() {
  return (
    <header className="mb-12 flex flex-col sm:flex-row items-center sm:items-start justify-between text-center sm:text-left">
      {/* Text Left */}
      <div className="sm:mr-24 mt-5">
        <h1
          className="text-4xl mt-20 font-bold mb-4"
          style={{
            color: "#ff73ff",
            textShadow: `
              0 0 8px #ff073a,
              0 0 12px #ff073a,
              0 0 20px #ff073a,
              0 0 25px #ff073a,
              0 0 20px #ff073a,
              0 0 40px #ff73ff,
              0 0 60px #ff73ff`,
          }}
        >
          Hi, I am Elaina
        </h1>
        <p
          className="text-xl"
          style={{
            color: "#ff073a",
            textShadow: `
              0 0 4px #ff073a,
              0 0 8px #ff073a`,
          }}
        >
          And I am the Backend Developer
        </p>
      </div>

      {/* Avatar Right */}
      <div className="relative w-60 h-60 sm:w-80 sm:h-80 mx-auto sm:mx-0 sm:mt-0 mt-12">
        <div
          className="relative w-full h-full z-10"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            backgroundColor: "#1F51FF",
          }}
        >
          <div
            className="relative w-full h-full z-10"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              backgroundColor: "#1F51FF",
            }}
          >
            <img
              src="/img/elaina.png"
              alt="Elaina Avatar"
              className="w-full h-full object-cover"
              style={{
                clipPath: "polygon(50% 0%, 0% 50%, 100% 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
