// --- (1) BASE DE DATOS MOCK (Ciencia Ficción) ---
const peliculasSciFi = [
  {
    id: 1,
    title: 'Dune: Parte Dos',
    year: 2024,
    director: 'Denis Villeneuve',
    description:
      'Paul Atreides se une a los Fremen y busca venganza contra quienes destruyeron a su familia, mientras intenta prevenir un futuro terrible.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    rating: 9.1,
    genre: 'Space Opera',
    trailerUrl: "https://www.youtube.com/embed/U2Qp5pL3ovA"
  },

  {
    id: 2,
    title: 'Blade Runner 2049',
    year: 2017,
    director: 'Denis Villeneuve',
    description:
      'Un joven Blade Runner descubre un secreto enterrado por mucho tiempo que lo lleva a buscar al desaparecido Rick Deckard.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    backdropUrl:
      'https://media.themoviedb.org/t/p/w1066_and_h600_face/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg',
    rating: 8.5,
    genre: 'Cyberpunk',
    trailerUrl: "https://www.youtube.com/embed/gCcx85zbxz4"
  },

  {
    id: 3,
    title: 'The Matrix',
    year: 1999,
    director: 'Hermanas Wachowski',
    description:
      'Un programador es sacado de su vida ordinaria para descubrir la impactante verdad sobre su realidad.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdropUrl:
      'https://media.themoviedb.org/t/p/w1066_and_h600_face/tlm8UkiQsitc8rSuIAscQDCnP8d.jpg',
    rating: 8.7,
    genre: 'Cyberpunk',
    trailerUrl: "https://www.youtube.com/embed/vKQi3bBA1y8"
  },

  {
    id: 4,
    title: 'Interestelar',
    year: 2014,
    director: 'Christopher Nolan',
    description:
      'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad.',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    rating: 8.6,
    genre: 'Space Opera',
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },

  {
    id: 6,
    title: 'Tenet',
    year: 2020,
    director: 'Christopher Nolan',
    description:
      'Armado con una sola palabra, Tenet, el Protagonista debe luchar por la supervivencia del mundo entero en una misión de espionaje internacional.',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
    backdropUrl:
      'https://media.themoviedb.org/t/p/w1066_and_h600_face/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg',
    rating: 7.3,
    genre: 'Time-Travel',
    trailerUrl: "https://www.youtube.com/embed/AZGcmvrTX9M"
  },

  {
    id: 5,
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    description:
      'Dom Cobb es un ladrón especializado en extraer secretos del subconsciente durante los sueños, hasta que le proponen realizar la operación inversa: implantar una idea.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1066_and_h600_face/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    rating: 8.8,
    genre: 'Sci-Fi Thriller',
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0"
  },

  {
    id: 7,
    title: 'Blade Runner',
    year: 1982,
    director: 'Ridley Scott',
    description:
      'En un Los Ángeles distópico, un blade runner debe retirar a un grupo de replicantes rebeldes que han vuelto a la Tierra.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1066_and_h600_face/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg',
    rating: 8.1,
    genre: 'Cyberpunk',
    trailerUrl: "https://www.youtube.com/embed/eogpIG53Cis"
  },

  {
    id: 8,
    title: '2001: Odisea del espacio',
    year: 1968,
    director: 'Stanley Kubrick',
    description:
      'Un misterioso monolito desencadena una evolución que lleva a la humanidad a un viaje hacia lo desconocido en el espacio profundo.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/zmmYdPa8Lxx999Af9vnVP4XQ1V6.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1066_and_h600_face/zmmYdPa8Lxx999Af9vnVP4XQ1V6.jpg',
    rating: 8.3,
    genre: 'Hard Sci-Fi',
    trailerUrl: "https://www.youtube.com/embed/oR_e9y-bka0"
  },

  {
    id: 9,
    title: 'Guardianes de la Galaxia',
    year: 2014,
    director: 'James Gunn',
    description:
      'Un grupo de inadaptados intergalácticos debe unirse para proteger un orbe poderoso que podría destruir la galaxia.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1066_and_h600_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
    rating: 8.0,
    genre: 'Space Opera',
    trailerUrl: "https://www.youtube.com/embed/d96cjJhvlMA"
  },

  {
    id: 10,
    title: 'Ad Astra',
    year: 2019,
    director: 'James Gray',
    description:
      'Un astronauta viaja a los confines del sistema solar para encontrar a su padre desaparecido y desentrañar un misterio que amenaza la supervivencia de la Tierra.',
    posterUrl:
      'https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1066_and_h600_face/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
    rating: 6.9,
    genre: 'Space Drama',
    trailerUrl: "https://www.youtube.com/embed/P6AaSMfXHbA"
  },
];

export default peliculasSciFi;
