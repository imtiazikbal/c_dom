// fake data
const categories = [
  { title: 'All Categories' },
  {
    title: 'Skin Concern',
    submenu: [
      'Oily & Acne skin care',
      'Hyperpigmentation & Melasma Care',
      'Dry Skin',
      'Sensitive Skin Care Products',
      'Whitening & Brightening',
      'Sun Protection',
      'Antiaging',
      'Under Eye Dark Circle',
      'Body Care',
      'Lip Care',
      'Breast Tightening',
      'Perfume',
      'Hair Care',
      'Serum',
      'Acne Products',
      'SkinCare Set',
    ],
  },
  {
    title: 'Treatment',
    submenu: [
      'Whitening & brightening',
      'Hair Regrowth',
      'Mole & skin tag removal',
      'Spot & Scar treatments',
      'Skin lifting & tightening',
      'Unwanted hair removal',
      'Acne cure',
      'Anti Aging Treatment',
      'Slimming & fitness Solution',
    ],
  },
  { title: 'Beauty Supplement' },
  { title: 'Baby Care' },
  { title: 'Smart Life Style', submenu: ['Purified Vitamin C Shower', 'H2CAP'] },
];
const products = [
  {
    name: 'Dermedic Hydrain3 Ultra Hydrating Cream Gel',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/rIHpMX5KIHWtqoQvwJmq42dmjtpTAy2h6xuFRiUp-pcCgZi8g6xmaM8msiZcOPg0nvKwHn3.webp',
    price: '2,050',
    offerPrice: '1,640',
    isFeatured: true,
  },
  {
    name: 'Novaclear Oily Cleanser',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Fck905vOy9UsT1ACJHMZi4wO8vnibvtNZobir0hI-JvFb76QtbGIR7SJav6WImXQDnmUKYz.webp',
    price: '1,350',
    offerPrice: '1,080',
    isFeatured: true,
  },
  {
    name: 'Novaclear Whiten Whitening Body Wash Gel',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/qtGW1OlD96Mt05wqICAtNbg5MJCFckRK6zokwfes-5uEdV2QnR9Xxzm1KKBHilv8qmP7OIa.webp',
    price: '1,450',
    offerPrice: '1,160',
    isFeatured: true,
  },
  {
    name: 'MELUMIN Anti-Dark Spots Concentrated Night Cream',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/ITI1fyQCTkhFdN6lpVsBtMG6mE5hwlahsdb0jS17-93VAdy8FkMJAzT2REGMtjHYlGQm0pC.webp',
    price: '1,450',
    offerPrice: '1,160',
    isFeatured: true,
  },
];

const description = `At Bones Coffee Company, our High Voltage blend is designed for coffee drinkers who crave the strongest coffee with the most caffeine. It's a game-changer for your coffee ritual!

High Voltage High Caffeine Coffee
Bones Coffee Company's High Voltage blend is your ticket to the strongest coffee experience! Whether you drink coffee for alertness or productivity, this medium roast packs a punch with twice the caffeine and unbelievable taste.

Perfect for adventurous coffee lovers and caffeine addicts around the world, this blend of premium Arabica and Robusta beans promises a bold, high-caffeine hit to keep you energized.

Whether you like your coffee hot or prefer a cold brew, the High Voltage medium roast coffee blend delivers intense flavor and a serious caffeine kick. Get ready to sip your way to alertness and tackle your day with vigor, thanks to our strongest coffee yet.

Twice the Caffeine, All the Flavor
High Voltage stands out as one of the strongest coffees for those who want more caffeine without losing flavor. With twice the caffeine content of an average cup of regular coffee, this medium roast is perfect for caffeine addicts and those with a high caffeine tolerance.

Our carefully selected Arabica and Robusta beans are hand-roasted to create a medium roast that's full, rich, and smooth. Whether you prefer hot or cold brew coffee, High Voltage delivers a powerful experience without the jitters.

Crafted from a blend of Arabica and Robusta beans, High Voltage is our strongest coffee that guarantees a bold and robust flavor that will keep you alert all day long. It’s not the strongest coffee in the world (yet), but we’ll get there!

How to Brew High Voltage Coffee for Maximum Flavor
To fully enjoy High Voltage coffee, use freshly ground coffee beans and filtered water. If you want to drink coffee hot, try a French press or pour-over method to highlight the bold flavors of this strong medium roast.

For a refreshing twist, make a cold brew by steeping coarse grounds in cold water for 12-24 hours.

Although this is our strongest coffee, you can make your High Voltage cold brew even stronger by using a higher coffee-to-water ratio, something like 4:1. But beware; too much caffeine before bed can disrupt your sleep.

Whether you drink coffee hot or cold, brewing the Bones High Voltage medium roast correctly will enhance your coffee experience. All Bones Coffees are keto-friendly and low-calorie, so you only need to watch your sugar, milk, and other ingredients.

Rainforest Alliance™ Certified
Like all our other coffees, High Voltage is Rainforest Alliance™ Certified, and that means really awesome things for you, your morning cup, the world’s farmers, and rainforests around the world.

Double up on your caffeine consumption with a delicious cup of High Voltage coffee brewed to taste perfection. Choose from our whole coffee bean or freshly ground coffee options, perfect for any coffee maker.

And, similar to other medium roast coffees, the High Voltage blend is crafted from Robusta and Arabica coffee beans sourced ethically from the best coffee-growing regions in the world. This ensures you can enjoy a guilt-free cup of delicious coffee flavored and brewed to perfection.`;

export { categories, products, description };
