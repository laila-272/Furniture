/* Swap these for local files in src/assets/ (e.g. import hero1 from '../assets/hero1.jpg'). */
const u = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: [
    u("photo-1567538096630-e0c55bd6374c"),
    u("photo-1618220179428-22790b461013"),
    u("photo-1493663284031-b7e3aefcae8e"),
    u("photo-1524758631624-e2822e304c36"),
  ],
  promo: u("photo-1555041469-a586c61ea9bc", 1000),
  range: [
    u("photo-1505693416388-ac5ce068fe85"),
    u("photo-1586023492125-27b2c045efd7"),
    u("photo-1616486338812-3dadae4b4ace"),
  ],
  rooms: [
    u("photo-1618220179428-22790b461013", 600),
    u("photo-1600210492486-724fe5c67fb0", 600),
    u("photo-1538688525198-9b88f6f53126", 600),
  ],
  greenChair: u("photo-1592078615290-033ee584e267", 500),
  lamp: u("photo-1507473885765-e6ed057f782c", 400),
  about: u("photo-1567538096630-e0c55bd6374c", 600),
  client: u("photo-1500648767791-00dcc994a43e", 600),
  p: (id) => u(id, 500),
};
