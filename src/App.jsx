import { useState } from "react";

import "./App.css";

// GAME COMPONENT
// Each "Game" represents one country Joe has visited
function Game({ title, platform, rating, image }) {
  return (
    <div className="country-card">
      <img
        src={image}
        alt={title}
        className="country-image"
      />

      <div className="country-info">
        <h2>{title}</h2>

        <p className="region">
          🌍 RegJOEn: {platform}
        </p>

        <p className="rating">
          💰 Value for Money: {rating}/5
        </p>

        <div className="stars">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>
      </div>
    </div>
  );
}

function App() {
  // ARRAY OF COUNTRY OBJECTS USING useState
  // setCountries allows us to add new countries
  const [countries, setCountries] = useState([
    {
      id: 1,
      title: "Malaysia",
      platform: "Southeast Asia",
      rating: 3,
      image: "/malaysia.jpg",
    },
    {
      id: 2,
      title: "Singapore",
      platform: "Southeast Asia",
      rating: 1,
      image: "/singapore.jpg",
    },
    {
      id: 3,
      title: "Thailand",
      platform: "Southeast Asia",
      rating: 4,
      image: "/thailand.jpg",
    },
    {
      id: 4,
      title: "Vietnam",
      platform: "Southeast Asia",
      rating: 5,
      image: "/vietnam.jpg",
    },
    {
      id: 5,
      title: "Indonesia",
      platform: "Southeast Asia",
      rating: 5,
      image: "/indonesia.jpg",
    },
    {
      id: 6,
      title: "Cambodia",
      platform: "Southeast Asia",
      rating: 3,
      image: "/cambodia.jpg",
    },
    {
      id: 7,
      title: "Taiwan",
      platform: "East Asia",
      rating: 2,
      image: "/taiwan.jpg",
    },
    {
      id: 8,
      title: "China",
      platform: "East Asia",
      rating: 5,
      image: "/china.jpg",
    },
    {
      id: 9,
      title: "Hong Kong",
      platform: "East Asia",
      rating: 1,
      image: "/hongkong.jpg",
    },
    {
      id: 10,
      title: "United Kingdom",
      platform: "Europe",
      rating: 1,
      image: "/uk.jpg",
    },
    {
      id: 11,
      title: "Philippines",
      platform: "Southeast Asia",
      rating: 5,
      image: "/philippines.jpg",
    },
    {
      id: 12,
      title: "Brunei",
      platform: "Southeast Asia",
      rating: 4,
      image: "/brunei.jpg",
    },
  ]);

  // FILTER STATES
  const [showEastAsia, setShowEastAsia] =
    useState(true);

  const [showSoutheastAsia, setShowSoutheastAsia] =
    useState(true);

  const [showEurope, setShowEurope] =
    useState(true);

  // ADD COUNTRY FORM STATES
  const [newCountry, setNewCountry] =
    useState("");

  const [newRegion, setNewRegion] =
    useState("Southeast Asia");

  const [newRating, setNewRating] =
    useState(3);

  const [newImage, setNewImage] =
    useState("");

  // ADD A NEW COUNTRY
  function addCountry(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    const country = {
      id: Date.now(),
      title: newCountry,
      platform: newRegion,
      rating: Number(newRating),

      // Use favicon if no image was entered
      image: newImage || "/favicon.svg",
    };

    // Add the new country to the existing array
    setCountries([
      ...countries,
      country,
    ]);

    // Clear the form
    setNewCountry("");
    setNewRegion("Southeast Asia");
    setNewRating(3);
    setNewImage("");
  }

  // FILTER COUNTRIES
  const filteredCountries = countries.filter(
    (country) => {
      if (
        country.platform === "East Asia" &&
        showEastAsia
      ) {
        return true;
      }

      if (
        country.platform === "Southeast Asia" &&
        showSoutheastAsia
      ) {
        return true;
      }

      if (
        country.platform === "Europe" &&
        showEurope
      ) {
        return true;
      }

      return false;
    }
  );

  return (
    <div className="app">

      {/* HEADER */}
      <header>
        <div>
          <p className="mini-title">
            Joe joeggin' around the world.
          </p>

          <div className="logo-title">
            <img
              src="/favicon.svg"
              alt="JOEGRAPHY logo"
              className="joe-logo"
            />

            <h1>JOEGRAPHY</h1>
          </div>

          <p className="tagline">
            🌏 Welcome to the Joeniverse 🌏
          </p>

          <p className="description">
            ☮️ Not a foe, but a Joe. ☮️
          </p>
        </div>

        {/* TOTAL COUNTRY COUNTER */}
        <div className="country-counter">
          <span>{countries.length}</span>
          <p>Countries</p>
          <small>Joe has invaded*</small>
        </div>
      </header>

      <p className="disclaimer">
        *Visited peacefully. No borders were harmed.
      </p>

      <div className="main-layout">

        {/* FILTER SIDEBAR */}
        <aside className="filters">

          <h2>🌈 RegJOEns</h2>

          <p>
            Where should Joe spawn?
          </p>

          {/* EAST ASIA FILTER */}
          <label>
            <input
              type="checkbox"
              checked={showEastAsia}
              onChange={() =>
                setShowEastAsia(!showEastAsia)
              }
            />

            East Asia
          </label>

          {/* SOUTHEAST ASIA FILTER */}
          <label>
            <input
              type="checkbox"
              checked={showSoutheastAsia}
              onChange={() =>
                setShowSoutheastAsia(
                  !showSoutheastAsia
                )
              }
            />

            Southeast Asia
          </label>

          {/* EUROPE FILTER */}
          <label>
            <input
              type="checkbox"
              checked={showEurope}
              onChange={() =>
                setShowEurope(!showEurope)
              }
            />

            Europe
          </label>


          {/* ADD COUNTRY FORM */}
          <form
            className="add-country-form"
            onSubmit={addCountry}
          >
            <h2>✈️ Add a Joestination</h2>

            <label>
              Country
              <input
                type="text"
                value={newCountry}
                onChange={(event) =>
                  setNewCountry(event.target.value)
                }
                placeholder="Some place..."
                required
              />
            </label>

            <label>
              RegJOEn
              <select
                value={newRegion}
                onChange={(event) =>
                  setNewRegion(event.target.value)
                }
              >
                <option value="Southeast Asia">
                  Southeast Asia
                </option>

                <option value="East Asia">
                  East Asia
                </option>

                <option value="Europe">
                  Europe
                </option>
              </select>
            </label>

            <label>
              Joeconomics
              <select
                value={newRating}
                onChange={(event) =>
                  setNewRating(event.target.value)
                }
              >
                <option value="1">1/5</option>
                <option value="2">2/5</option>
                <option value="3">3/5</option>
                <option value="4">4/5</option>
                <option value="5">5/5</option>
              </select>
            </label>

            <button type="submit">
              Add Joestination 🌍
            </button>
          </form>

          {/* JOE QUOTES */}
          <div className="joe-quote">
            <p>
              "Where there's a Joe, there's a way."
            </p>

            <p>
              "The Joe must go on."
            </p>
          </div>

        </aside>


        {/* COUNTRY COLLECTION */}
        <main>

          <div className="section-heading">

            <div>
              <h2>
                JOE'S JOEYFUL JOEURNEY
              </h2>
            </div>

            <p>
              ShJOEwing{" "}
              {filteredCountries.length} of{" "}
              {countries.length}
            </p>

          </div>


          {/* COUNTRY CARDS */}
          <div className="country-grid">

            {filteredCountries.map(
              (country) => (

                <Game
                  key={country.id}
                  title={country.title}
                  platform={
                    country.platform
                  }
                  rating={country.rating}
                  image={country.image}
                />

              )
            )}

          </div>


          {/* SHOW IF ALL FILTERS ARE OFF */}
          {filteredCountries.length === 0 && (

            <div className="empty-message">

              <h2>
                😢 No Joe Zone
              </h2>

              <p>
                You unticked every RegJOEn.
                Joe has nowhere left to go.
              </p>

            </div>

          )}

        </main>

      </div>


      {/* FOOTER */}
      <footer>

        🌏 JOEGRAPHY — Be a Joeker.
        Every country should be Joed by Joe. 🌏

        <div className="social-icons">

          <a
            href="https://www.instagram.com/joeonn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joe's Instagram
          </a>

          <a
            href="https://www.youtube.com/@joeonnmalaysia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joe's YouTube
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;
