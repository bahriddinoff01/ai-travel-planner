import japan from "../assets/japan.jpg"
import switzerland from "../assets/switzerland.jpg"
import italy from "../assets/italy.jpg"
import greece from "../assets/greece.jpg"
import france from "../assets/france.jpg"
import newzenland from "../assets/newzenland.jpg"
import indonesia from "../assets/indonesia.jpg"
import thailand from "../assets/thailand.jpg"
import spain from "../assets/spain.jpg"
import egypt from "../assets/egypt.jpg"
import australia from "../assets/australia.jpg"
import { desc } from "framer-motion/client"

const destinations = [
  {
    id: 1,
    name: 'Japan',
    tagline: 'Tradition meets tomorrow.',
    description: "Discover ancient temples, vibrant cities, peaceful gardens, and traditions shaped over centuries.",
    image: japan,
    hero: true,
    popularPlaces: false,
  },
  {
    id: 2,
    name: 'Switzerland',
    tagline: 'Nature at its peek',
    description: "Explore breathtaking Alps, crystal-clear lakes, charming villages, and unforgettable scenic journeys.",
    image: switzerland,
    hero: true,
    popularPlaces: false,
  },
  {
    id: 3,
    name: 'Italy',
    tagline: 'Live the art of la dolce vita',
    description: "Experience historic cities, world-famous art, authentic cuisine, and the timeless beauty of Italian life.",
    image: italy,
    hero: true,
    popularPlaces: false,
  },
  {
    id: 4,
    name: 'Greece',
    tagline: 'Ancient wonders, endless blue',
    description: "Wander through ancient ruins, sunlit islands, turquoise waters, and villages full of Mediterranean charm.",
    image: greece,
    hero: true,
    popularPlaces: false,
  },
  {
    id: 5,
    name: 'France',
    tagline: 'Where every moment feels cinematic',
    description: "Explore iconic landmarks, artistic streets, historic towns, exquisite cuisine, and unforgettable French culture.",
    image: france,
    hero: true,
    popularPlaces: false,
  },
  {
    id: 6,
    name: 'New Zenland',
    tagline: 'Adventure beyond the horizon',
    description: "Discover dramatic mountains, pristine lakes, wild landscapes, and endless opportunities for adventure.",
    image: newzenland,
    hero: true,
    popularPlaces: false,
  },
  {
    id: 7,
    name: 'Indonesia',
    tagline: 'Tropical beauty - island by island',
    description: "Escape to tropical islands filled with vibrant culture, lush landscapes, beautiful beaches, and local traditions.",
    image: indonesia,
    hero: true,
    popularPlaces: false,
  },
  {
  id: 8,
  name: 'Thailand',
  tagline: 'Tropical beauty, timeless traditions.',
  description:
    'Discover golden temples, tropical islands, vibrant markets, and unforgettable Thai cuisine.',
  image: thailand,
  popularPlaces: true,
  hero: false,
},
{
  id: 9,
  name: 'Spain',
  tagline: 'Passion, culture, and endless sunshine.',
  description:
    'Experience stunning architecture, lively cities, Mediterranean beaches, authentic cuisine, and vibrant traditions.',
  image: spain,
  popularPlaces: true,
  hero: false,
},
{
  id: 10,
  name: 'Egypt',
  tagline: 'Walk through thousands of years of history.',
  description:
    'Explore ancient pyramids, magnificent temples, the Nile, and the fascinating history of one of the world’s oldest civilizations.',
  image: egypt,
  popularPlaces: true,
  hero: false,
},
{
  id: 11,
  name: 'Australia',
  tagline: 'Adventure at the edge of the world.',
  description:
    'Discover spectacular beaches, unique wildlife, vibrant cities, and vast landscapes made for adventure.',
  image: australia,
  popularPlaces: true,
  hero: false,
},
]

export default destinations