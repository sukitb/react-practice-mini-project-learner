import Card from "./Card/Card";
import "./App.css";
import { useState } from "react";

const movies = [
  {
    title: "The Matrix",
    image:
      "https://i.pinimg.com/736x/cb/82/6d/cb826d2fc3b9fbc4920cdd7dabb53555.jpg",
  },
  {
    title: "Inception",
    image:
      "https://images.theconversation.com/files/353512/original/file-20200818-14-1yd1myr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
  },
  {
    title: "The Dark Knight",
    image:
      "https://www.wallpapermania.eu/images/lthumbs/2012-04/2487_Batman-The-Dark-Knight-Poster-HD-Wallpaper.jpg",
  },
  {
    title: "The Dark Knight 2",
    image:
      "https://www.wallpapermania.eu/images/lthumbs/2012-04/2487_Batman-The-Dark-Knight-Poster-HD-Wallpaper.jpg",
  },
];

export default function App() {
  const [selectedMovie, setSelectMovie] = useState([]);

  // const [movieTitle, setMovieTitle] = useState('')

  const handleClick = (movieTitle) => {
    // setMovieTitle(movieTitle)
    if(selectedMovie.includes(movieTitle)) {
      setSelectMovie(prev => {
        return prev.filter(ele => ele !== movieTitle)
      })
    } else {
      setSelectMovie((prev) => {
        return [...prev, movieTitle];
      });
    }
  };

  return ( 
    <>
      <ul>
        {selectedMovie.map((movieTitle) => (
          <li key={movieTitle}>{movieTitle}</li>
        ))}
      </ul>
      <div className="card-container">
        {/* วน render card ออกมาตามจำนวนของที่อยู่ใน array */}
        {movies.map(
          (ele) => (
            // eslint-disable-next-line react/jsx-key
            <Card
              key={ele.title}
              handleClick={handleClick}
              title={ele.title}
              image={ele.image}
            />
          )
          // <Card key={ele.title} movieData={ele} />
        )}
      </div>
    </>
  );
}
