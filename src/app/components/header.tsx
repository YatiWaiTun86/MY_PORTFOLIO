export default function Header() {
  return (
    <header className="mb-12 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center text-center sm:text-left">
      <div>
        <h1
          className="text-5xl font-bold mb-4 animate-bounce"
          style={{
            color: "#ff73ff", // neon red fill
            textShadow: `
                   0 0 8px #ff073a,    /* neon red glow */
                   0 0 12px #ff073a,
                   0 0 20px #ff073a,
                   0 0 25px #ff073a,
                   0 0 20px #ff073a,   /* pink outline glow */
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
          Backend Developer
        </p>
      </div>

      <div className="relative w-80 h-80 mx-auto mt-16">
        {/* Triangle Avatar */}
        <div
          className="relative w-full h-full z-10"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            backgroundColor: "#1F51FF", // sky-500
          }}
        >
          <div
            className="relative w-full h-full z-10"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              backgroundColor: "#1F51FF", // sky-500
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
