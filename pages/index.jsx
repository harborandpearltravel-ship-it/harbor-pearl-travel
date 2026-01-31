export default function Home() {
  return (
    <main style={{ fontFamily: "serif", padding: "3rem", textAlign: "center" }}>
      <h1>Harbor & Pearl Travel</h1>
      <p>Curated journeys. Effortless luxury. Meaningful travel.</p>

      <img
        src="/hero.jpg"
        alt="Luxury travel"
        style={{
          width: "100%",
          maxWidth: "900px",
          marginTop: "2rem",
          borderRadius: "16px"
        }}
      />

      <section style={{ marginTop: "3rem" }}>
        <h2>Why Travel With Us</h2>
        <p>
          Bespoke itineraries, exclusive perks, and seamless planning —
          from harbor towns to hidden pearls around the world.
        </p>
      </section>
    </main>
  );
}
