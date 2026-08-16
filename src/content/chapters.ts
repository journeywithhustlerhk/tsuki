// Project TSUKI — content data
//
// This is the entire world of TSUKI, transcribed from 08_CONTENT.md and
// 07_COMPONENTS.md without rewriting meaning (see 10_AI_GUIDE.md §9).
//
// Adding a new dream should never require touching a component — just add
// an item here. See 09_ENGINEERING.md §19.

import type { Chapter, DreamItem } from '../types/content'

let n = 0
/** Small helper so ids stay stable and unique without hand-numbering everything. */
function item(title: string, category: DreamItem['category'], extra?: Partial<DreamItem>): DreamItem {
  n += 1
  return { id: `item-${n.toString().padStart(3, '0')}`, title, category, ...extra }
}

export const chapters: Chapter[] = [
  {
    id: 'museum-explorer',
    title: 'Museum Explorer',
    theme: 'museum',
    intro: 'Quiet rooms, old things, and the stories they still have to tell.',
    collections: [
      {
        id: 'chennai-museums',
        title: 'Chennai Museums',
        achievement: 'Museum Explorers of Chennai',
        items: [
          item('Government Museum, Egmore', 'museum'),
          item('National Art Gallery', 'museum'),
          item('Fort Museum', 'museum'),
          item('DakshinaChitra Heritage Museum', 'museum'),
          item('Chennai Rail Museum', 'museum'),
          item('Vivekananda House', 'museum'),
          item('Birla Planetarium', 'museum'),
          item("Cholamandal Artists' Village", 'museum'),
          item("Children's Museum", 'museum'),
          item('Bronze Gallery', 'museum'),
          item('Natural History Gallery', 'museum'),
        ],
      },
      {
        id: 'museum-challenges',
        title: 'Museum Challenges',
        items: [
          item('Spend 3 hours without checking our phones', 'museum'),
          item('Sketch our favourite exhibit', 'museum'),
          item('Find the weirdest artifact', 'museum'),
          item('Find our favourite painting', 'museum'),
          item('Guess the story behind an artifact', 'museum'),
          item('Rate every museum', 'museum'),
          item('Buy one souvenir', 'museum'),
          item('Take one candid photo', 'museum'),
          item('Complete every museum in Chennai', 'museum'),
        ],
      },
    ],
  },
  {
    id: 'cafe-hunter',
    title: 'Café Hunter',
    theme: 'cafe',
    intro: 'Tea, quiet corners, and small comforts worth returning to.',
    collections: [
      {
        id: 'cafe-experiences',
        title: 'Café Experiences',
        items: [
          item('Try 50 cafés', 'cafe'),
          item('Find the best tea in Chennai', 'cafe'),
          item('Find our comfort café', 'cafe'),
          item('Rainy-day café', 'cafe'),
          item('Rooftop café', 'cafe'),
          item('Cat café, if one opens nearby', 'cafe'),
          item('Read together in silence', 'cafe'),
          item('Work together on our laptops', 'cafe'),
          item('Share one dessert', 'cafe'),
          item('Keep every café bill', 'cafe'),
          item('Visit cafés decorated with books', 'cafe'),
          item('Visit aesthetic cafés', 'cafe'),
          item('Try different kinds of tea', 'cafe'),
          item('Try different kinds of hot chocolate', 'cafe'),
        ],
      },
      {
        id: 'juice-and-comfort-food',
        title: 'Juice & Comfort Food',
        intro: 'The focus is on small favourite things rather than elaborate meals.',
        items: [
          item('Pineapple Juice', 'food'),
          item('Watermelon Juice', 'food'),
          item('Fresh Orange Juice', 'food'),
          item('Sugarcane Juice', 'food'),
          item('Seasonal Fruit Juice', 'food'),
          item('Tea after rain', 'food'),
          item('Tea at midnight', 'food'),
          item('Mini Samosa Hunt', 'food'),
          item('Puff Hunt', 'food'),
          item('Crispy Dosa Mission', 'food'),
          item('Fruit Picnic', 'food'),
          item("Try Quaker's together", 'food'),
          item('Find our favourite breakfast place', 'food'),
          item('Find our favourite juice shop', 'food'),
        ],
      },
      {
        id: 'davara',
        title: 'Davara',
        intro:
          "Her old favourite face-shop/tea experience — Davara, Pallavaram. The original place is closed. TSUKI keeps it as a small personal reference, not simply a business to visit; it's about remembering something associated with her.",
        items: [item('Recreate the Davara experience somewhere else', 'cafe', { location: 'Pallavaram (original, now closed)' })],
      },
    ],
  },
  {
    id: 'animal-adventures',
    title: 'Animal Adventures',
    theme: 'animal',
    intro: 'Cats, dogs, small goats, and every soft creature worth meeting.',
    collections: [
      {
        id: 'animal-experiences',
        title: 'Animals & Experiences',
        items: [
          item('Visit a cat shelter', 'animal'),
          item('Feed stray cats', 'animal'),
          item('Feed stray dogs', 'animal'),
          item('Visit Vandalur Zoo', 'animal'),
          item('Visit an aquarium', 'animal'),
          item('Visit a butterfly park', 'animal'),
          item('Bird watching', 'animal'),
          item('Hold a baby goat', 'animal'),
          item('Meet a corgi', 'animal'),
          item('Meet a golden retriever', 'animal'),
          item('Meet a husky', 'animal'),
          item('Donate to an animal shelter', 'animal'),
          item('Adopt a cat', 'animal'),
          item('Adopt a dog', 'animal'),
        ],
      },
      {
        id: 'animal-dreams',
        title: 'Animal Dreams',
        intro: 'Future animal dreams — the last few are presented as fantasies, not ordinary pet-adoption plans.',
        items: [
          item('Five cats', 'animal'),
          item('One dog', 'animal'),
          item('Small goats', 'animal'),
          item('Farm animals', 'animal'),
          item('Tiger cub', 'animal', { description: 'A fantasy dream, not a plan.' }),
          item('Bear cub', 'animal', { description: 'A fantasy dream, not a plan.' }),
          item('Cheetah cub', 'animal', { description: 'A fantasy dream, not a plan.' }),
        ],
      },
    ],
  },
  {
    id: 'farm-dream',
    title: 'Farm Dream',
    theme: 'farm',
    intro: 'A quiet piece of land away from the city. A slower life.',
    collections: [
      {
        id: 'farm-dreams',
        title: 'The Dream',
        items: [
          item('Find land far away from the city', 'farm'),
          item('Have a small field', 'farm'),
          item('Grow our own vegetables', 'farm'),
          item('Mango tree', 'farm'),
          item('Coconut tree', 'farm'),
          item('Banana plants', 'farm'),
          item('Flower garden', 'farm'),
          item('Herb garden', 'farm'),
          item('Make our own compost', 'farm'),
          item('Harvest vegetables together', 'farm'),
          item('Drink tea while watching the sunset', 'farm'),
          item('Watch the rain from the porch', 'farm'),
        ],
      },
      {
        id: 'farm-animals',
        title: 'Farm Animals',
        items: [
          item('5 cows', 'farm'),
          item('5 goats', 'farm'),
          item('2 dogs', 'farm'),
          item('2 cats', 'farm'),
          item('Ducks', 'farm'),
          item('Chickens', 'farm'),
        ],
      },
    ],
  },
  {
    id: 'night-chennai',
    title: 'Night Chennai',
    theme: 'night',
    intro: 'City lights and peaceful nighttime experiences.',
    collections: [
      {
        id: 'night-chennai-items',
        title: 'City Lights',
        items: [
          item('Marina at night', 'place'),
          item('Besant Nagar after sunset', 'place'),
          item('Long drive', 'activity'),
          item('Rooftop café', 'cafe'),
          item('Watch city lights', 'activity'),
          item('See Chennai from a high place', 'place'),
          item('Watch the skyline together', 'activity'),
          item('Take long-exposure photographs', 'photography'),
          item('Watch airplanes near the airport', 'activity'),
          item('Sit quietly without talking', 'activity'),
          item('Listen to music', 'activity'),
          item('Find our favourite night view', 'place'),
          item('Watch fireworks', 'activity'),
          item('Street photography', 'photography'),
        ],
      },
    ],
  },
  {
    id: 'rain-collection',
    title: 'Rain Collection',
    theme: 'rain',
    collections: [
      {
        id: 'rain-items',
        title: 'Rain',
        items: [
          item('Beach during September rain', 'activity'),
          item('Walk in the rain', 'activity'),
          item('Dance in the rain', 'activity'),
          item('Tea & Bajji', 'food'),
          item('Rain photography', 'photography'),
          item('Beach after rain', 'activity'),
          item('Long drive in rain', 'activity'),
          item('Watch lightning safely from indoors', 'activity'),
          item('Dry ourselves after getting soaked 😂', 'activity'),
          item('Build sandcastles', 'activity'),
        ],
      },
    ],
  },
  {
    id: 'photography',
    title: 'Photography',
    theme: 'photography',
    collections: [
      {
        id: 'photography-items',
        title: 'Photography',
        items: [
          item('100 selfies', 'photography'),
          item('100 candid photographs', 'photography'),
          item('One photo every month', 'photography'),
          item('Polaroid collection', 'photography'),
          item('Build a photo wall', 'photography'),
          item('Sunset photography', 'photography'),
          item('Sunrise photography', 'photography'),
          item('Night photography', 'photography'),
          item('Reflection photography', 'photography'),
          item('Silhouette photograph', 'photography'),
          item('Favourite picture together', 'photography'),
        ],
      },
    ],
  },
  {
    id: 'tiny-dreams',
    title: 'Tiny Dreams',
    theme: 'tiny',
    intro: 'The small things matter.',
    collections: [
      {
        id: 'tiny-dreams-items',
        title: 'Tiny Dreams',
        items: [
          item('Exchange handwritten letters', 'tiny-dream'),
          item('Build LEGO together', 'tiny-dream'),
          item('Paint together', 'tiny-dream'),
          item('Cook dinner together', 'tiny-dream'),
          item('Bake together', 'tiny-dream'),
          item('Learn pottery', 'tiny-dream'),
          item('Read the same book', 'tiny-dream'),
          item('Watch Studio Ghibli movies', 'tiny-dream'),
          item('Watch every Pixar movie', 'tiny-dream'),
          item('Stargazing', 'tiny-dream'),
          item('Build a playlist', 'tiny-dream'),
          item('Buy matching mugs', 'tiny-dream'),
          item('Fall asleep during a movie', 'tiny-dream'),
          item('Celebrate tiny victories', 'tiny-dream'),
          item('Have a picnic', 'tiny-dream'),
          item('Fly a kite', 'tiny-dream'),
          item('Make pancakes', 'tiny-dream'),
          item('Build a pillow fort', 'tiny-dream'),
          item('Board game night', 'tiny-dream'),
          item('Karaoke', 'tiny-dream'),
          item('Arcade', 'tiny-dream'),
          item('Escape Room', 'tiny-dream'),
          item('Theme Park', 'tiny-dream'),
          item('VR Gaming', 'tiny-dream'),
          item('Laser Tag', 'tiny-dream'),
          item('Paintball', 'tiny-dream'),
        ],
      },
    ],
  },
  {
    id: 'adventure',
    title: 'Adventure',
    theme: 'adventure',
    collections: [
      {
        id: 'adventure-items',
        title: 'Adventure',
        items: [
          item('Bungee Jumping', 'adventure'),
          item('Skydiving', 'adventure'),
          item('Scuba Diving', 'adventure'),
          item('Snorkeling', 'adventure'),
          item('Hot Air Balloon', 'adventure'),
          item('Paragliding', 'adventure'),
          item('Zipline', 'adventure'),
          item('Snow Trek', 'adventure'),
          item('Ice Skating', 'adventure'),
          item('Skiing', 'adventure'),
          item('Kayaking', 'adventure'),
          item('River Rafting', 'adventure'),
          item('Camping', 'adventure'),
          item('Stargazing', 'adventure'),
        ],
      },
    ],
  },
  {
    id: 'sports-together',
    title: 'Sports Together',
    theme: 'sport',
    collections: [
      {
        id: 'sports-items',
        title: 'Sports Together',
        items: [
          item('Football', 'sport'),
          item('Basketball', 'sport'),
          item('Badminton', 'sport'),
          item('Ice Hockey', 'sport'),
          item('Swimming', 'sport'),
          item('Bowling', 'sport'),
          item('Cricket', 'sport'),
          item('Tennis', 'sport'),
          item('Table Tennis', 'sport'),
          item('Cycling', 'sport'),
        ],
      },
    ],
  },
  {
    id: 'giving-back',
    title: 'Giving Back',
    theme: 'giving-back',
    collections: [
      {
        id: 'giving-back-items',
        title: 'Giving Back',
        items: [
          item('Volunteer at an orphanage', 'giving-back'),
          item('Visit an old-age home', 'giving-back'),
          item('Feed stray animals', 'giving-back'),
          item('Plant 100 trees', 'giving-back'),
          item('Beach cleanup', 'giving-back'),
          item('City cleanup drive', 'giving-back'),
          item('Donate books', 'giving-back'),
          item('Donate blood together', 'giving-back'),
          item('Teach children', 'giving-back'),
          item('Donate to an animal rescue organisation', 'giving-back'),
        ],
      },
    ],
  },
  {
    id: 'places-to-explore',
    title: 'Places to Explore',
    theme: 'travel',
    collections: [
      {
        id: 'chennai-places',
        title: 'Chennai',
        items: [
          item('Semmozhi Poonga', 'place'),
          item('Chetpet Eco Park', 'place'),
          item('Guindy National Park', 'place'),
          item('Kathipara Urban Square', 'place'),
          item('Muttukadu', 'place'),
          item('Kovalam Beach', 'place'),
          item('Pulicat Lake', 'place'),
          item('Broken Bridge', 'place'),
          item('Theosophical Society', 'place'),
          item('VGP Marine Kingdom', 'place'),
        ],
      },
      {
        id: 'tamil-nadu-places',
        title: 'Tamil Nadu',
        items: [
          item('Ooty', 'place'),
          item('Kodaikanal', 'place'),
          item('Yercaud', 'place'),
          item('Mahabalipuram', 'place'),
          item('Hogenakkal', 'place'),
          item('Rameswaram', 'place'),
          item('Kanyakumari', 'place'),
          item('Yelagiri', 'place'),
        ],
      },
      {
        id: 'india-places',
        title: 'India',
        items: [
          item('Kashmir', 'place'),
          item('Ladakh', 'place'),
          item('Goa', 'place'),
          item('Kerala', 'place'),
          item('Jaipur', 'place'),
          item('Meghalaya', 'place'),
          item('Andaman', 'place'),
          item('Darjeeling', 'place'),
        ],
      },
      {
        id: 'international-places',
        title: 'International',
        intro: 'More destinations can be added later.',
        items: [
          item('Japan', 'place'),
          item('Switzerland', 'place'),
          item('Norway', 'place'),
          item('Maldives', 'place'),
          item('Paris', 'place'),
        ],
      },
    ],
  },
  {
    id: 'dream-home',
    title: 'Dream Home',
    theme: 'home',
    intro: 'The dream home should represent a future possibility.',
    collections: [
      {
        id: 'apartment',
        title: 'Apartment',
        items: [
          item('Luxury apartment', 'home'),
          item('Minimum 26 floors', 'home'),
          item('16th floor', 'home'),
          item('Sea-facing balcony', 'home'),
          item('Huge balcony', 'home'),
          item('Rain view', 'home'),
          item('City lights', 'home'),
          item('Floor-to-ceiling windows', 'home'),
          item('Cozy reading corner', 'home'),
          item('Tea corner', 'home'),
          item('Gaming room', 'home'),
          item('Mini theatre', 'home'),
          item('Indoor plants', 'home'),
          item('Smart home', 'home'),
          item('Cat room 😂', 'home'),
          item('Music system', 'home'),
          item('Warm lighting', 'home'),
          item('Soft sofa', 'home'),
          item('Coffee machine', 'home'),
          item('Rainy-day blanket', 'home'),
        ],
      },
    ],
  },
  {
    id: 'dream-garage',
    title: 'Dream Garage',
    theme: 'garage',
    collections: [
      {
        id: 'garage-items',
        title: 'Dream Garage',
        items: [
          item('BMW M4', 'garage'),
          item('Kawasaki Ninja', 'garage'),
          item('Long road trips', 'garage'),
          item('Beach drives', 'garage'),
          item('Mountain drives', 'garage'),
          item('Midnight drives', 'garage'),
          item('Drive without destination', 'garage'),
        ],
      },
    ],
  },
  {
    id: 'festivals',
    title: 'Festivals',
    theme: 'festival',
    collections: [
      {
        id: 'festival-items',
        title: 'Festivals',
        items: [
          item('Diwali together', 'festival'),
          item('Pongal together', 'festival'),
          item('Christmas together', 'festival'),
          item("New Year's countdown", 'festival'),
          item('Birthday surprises', 'festival'),
          item('Anniversary dinner', 'festival'),
          item('First festival at home', 'festival'),
        ],
      },
    ],
  },
]

/** Every item, flattened, regardless of chapter/collection. Used for search & progress. */
export const allItems: DreamItem[] = chapters.flatMap((c) => c.collections.flatMap((col) => col.items))

export const heroContent = {
  title: "These are the moments I'd love to experience with you, whenever life allows.",
  opening: [
    'Not every dream has to happen tomorrow.',
    'Some are simply worth holding onto, one little adventure at a time.',
  ],
}

export const hiddenLetter = {
  lines: [
    "You don't have to promise me forever.",
    "I just hope one day we'll smile at these checkboxes because they're memories instead of dreams.",
  ],
}

export const footerContent = {
  title: "These are the moments I'd love to experience with you, whenever life allows.",
  lines: [
    'Some people write diaries about the past.',
    'I made this to dream about a future that might still be waiting for us.',
  ],
}
