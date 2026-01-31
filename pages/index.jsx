import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Harbor & Pearl Travel LLC | Chic Travel Planning</title>
        <meta
          name="description"
          content="Harbor & Pearl Travel LLC is a Naples, FL travel agency offering chic, affordable travel planning for families, couples, and groups."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <header className="hero">
          <h1>Harbor & Pearl Travel</h1>
          <p>Elegant travel planning for every budget</p>
          <a className="button" href="#quote">Plan Your Trip</a>
        </header>

        <section>
          <div className="card">
            <h2>Travel Designed Around You</h2>
            <p>
              Harbor & Pearl Travel LLC creates beautifully planned vacations for
              families, couples, and groups. From affordable getaways to luxury
              escapes, we design trips that feel elevated, effortless, and unforgettable.
              We specialize in cruises, all-inclusive resorts, and custom European travel.
            </p>
          </div>

          <div className="card">
            <h2>Inspiration Gallery</h2>
            <div className="gallery">
              <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21" />
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />
              <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" />
              <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1" />
            </div>
          </div>

          <div className="card contact">
            <h2>Contact</h2>
            <p><strong>Phone:</strong> <a href="tel:2392531125">239-253-1125</a></p>
            <p><strong>Email:</strong> <a href="mailto:harborandpearltravel@gmail.com">harborandpearltravel@gmail.com</a></p>
            <p>
              <strong>Office:</strong><br />
              5475 Golden Gate Parkway Ste 2W<br />
              Naples, FL 34116
            </p>
          </div>

          <div className="card">
            <h2>Office Location</h2>
            <iframe
              src="https://maps.google.com/maps?q=5475%20Golden%20Gate%20Parkway%20Naples%20FL&output=embed"
              style={{ width: "100%", height: "300px", border: 0, borderRadius: "10px" }}
              loading="lazy"
            />
          </div>

          <div className="card" id="quote">
            <h2>Request a Quote</h2>
            <form
              action="mailto:harborandpearltravel@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Trip Details" rows="5" placeholder="Tell us about your trip..." />
              <button type="submit">Send Request</button>
            </form>
          </div>
        </section>

        <footer>
          © 2026 Harbor & Pearl Travel LLC • Naples, Florida
        </footer>

        <style jsx>{`
          main {
            font-family: 'Inter', sans-serif;
            background: #f7f5f2;
            color: #2b2b2b;
          }
          .hero {
            background: linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)),
              url("https://images.unsplash.com/photo-1526779259212-939e64788e3c");
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 100px 20px;
          }
          h1 {
            font-family: 'Playfair Display', serif;
            font-size: 44px;
            margin: 0;
          }
          .button {
            display: inline-block;
            margin-top: 25px;
            padding: 12px 26px;
            background: #f3e8e2;
            color: #2b2b2b;
            border-radius: 6px;
            text-decoration: none;
          }
          section {
            max-width: 1100px;
            margin: auto;
            padding: 60px 20px;
          }
          .card {
            background: white;
            padding: 35px;
            border-radius: 10px;
            box-shadow: 0 8px 18px rgba(0,0,0,0.08);
            margin-bottom: 40px;
          }
          .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 18px;
          }
          .gallery img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 10px;
          }
          footer {
            background: #2b2b2b;
            color: white;
            text-align: center;
            padding: 25px;
            text-align: center;
          }
        `}</style>
      </main>
    </>
  );
}
