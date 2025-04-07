// fake data
const categories = [
  {
    title: 'All Categories',
    image: '',
  },
  {
    title: 'Air Pods',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/col-1_c56a97cd-c3be-40fb-a76d-d37e5b0beb01-CxZzWFJbuDNDFrB6mWjYIYC9JDu86N.jpg',
  },
  {
    title: 'Mobile',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/col-5_02bb7163-9d5f-4153-b29a-e38493362226-TaxVdp6ZImm7SFZ1djP4ya6M2mQxzX.jpg',
  },
  {
    title: 'Camera',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/col-7_4a6c9e96-6315-44ba-9c1d-bcf3d705164c-OLBm2BYPasHWeelq72TgkRhwSwfuFE.webp',
  },
  {
    title: 'Smart Watches',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/col-2_09ab16f0-c20e-4344-9455-e0fb110afd7c-6hfrNUOCAnnyHmtewOY0bSWw1Fu0fY.jpg',
  },
  {
    title: 'Laptop',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/istockphoto-164637079-612x612-rcyQmjeKTI6DStJOlgFRzSUyF3U6Fa.jpg',
  },
  {
    title: 'Speaker',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/col-6_35ab563e-e1cb-44f5-be18-823a87aa170d-SoGgTIMMDHMvVD5WP5plmCrynSQspn.jpg',
  },
];
const products = [
  {
    title: 'Crystal Diamond Ear Ring',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/dahlia-1-nufxc1DIaj9z1E56kNMmgXV9pNsrLi.webp',
    price: 19.99,
    offerPrice: 14.99,
    labels: ['Hot', 'Best Selling'],
    category: 'Camera',
    variants: [
      {
        type: 'color',
        title: 'Color',
        options: [
          { name: 'Silver', hex: '#C0C0C0' },
          { name: 'Gold', hex: '#FFD700' },
          { name: 'Rose Gold', hex: '#B76E79' },
        ],
      },
      {
        title: 'Size',
        options: ['Small', 'Medium', 'Large'],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Wireless Air Pods',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Earbuds3-rJhH3Rtmji7yGX1dnmjB1jbjffFqUi.jpg',
    price: 129.99,
    offerPrice: null,
    labels: ['New'],
    category: 'Air Pods',
    variants: [
      {
        type: 'color',
        type: 'color',
        title: 'Case Color',
        options: [
          { name: 'Black', hex: '#000000' },
          { name: 'White', hex: '#FFFFFF' },
        ],
      },
    ],
    isFeatured: true,
  },
  {
    title: '4K Professional Camera',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Z7II_24-70_4_front-u4fGpciSXiUFUl3N1ZGeORlSrV3i8g.webp',
    price: 599.99,
    offerPrice: 549.99,
    labels: ['Hot', 'Best Selling'],
    category: 'Camera',
    variants: [
      {
        title: 'Lens Type',
        options: ['Wide Angle', 'Zoom', 'Standard'],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Smart Watch Series 5',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 299.99,
    offerPrice: null,
    labels: ['Hot'],
    category: 'Smart Watches',
    variants: [
      {
        type: 'color',
        title: 'Strap Color',
        options: [
          { name: 'Black', hex: '#000000' },
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Blue', hex: '#0000FF' },
        ],
      },
    ],
    isFeatured: false,
  },
  {
    title: 'Noise Cancelling Speaker',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Headset6-6lQBjt3hId0vZjIWhj4XpbGEDD4Hcb.webp',
    price: 89.99,
    offerPrice: 69.99,
    labels: [],
    category: 'Speaker',
    variants: [
      {
        type: 'color',
        title: 'Color',
        options: [
          { name: 'Black', hex: '#000000' },
          { name: 'Gray', hex: '#808080' },
        ],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Gaming Laptop Pro',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Nitro_16_Intel_AN16_51_02-1REiqdUW0GfNsiuhxr0VeXEIhdTT6R.webp',
    price: 1399.99,
    offerPrice: 1299.99,
    labels: ['Best Selling'],
    category: 'Laptop',
    variants: [
      {
        title: 'Storage',
        options: ['512GB', '1TB'],
      },
      {
        title: 'RAM',
        options: ['8GB', '16GB'],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Stylish Mobile Case',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 19.99,
    offerPrice: null,
    labels: ['New'],
    category: 'Mobile',
    variants: [
      {
        type: 'color',
        title: 'Color',
        options: [
          { name: 'Red', hex: '#FF0000' },
          { name: 'Blue', hex: '#0000FF' },
          { name: 'Black', hex: '#000000' },
        ],
      },
    ],
    isFeatured: false,
  },
  {
    title: 'Luxury Air Pods Case',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 39.99,
    offerPrice: 29.99,
    labels: [],
    category: 'Air Pods',
    variants: [
      {
        title: 'Material',
        options: ['Leather', 'Silicone'],
      },
    ],
    isFeatured: false,
  },
  {
    title: 'High Definition Camera Lens',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Z400_4.5_angle1-umOmZnuFnvQOI5sHo12ijivnoJZkxB.jpg',
    price: 199.99,
    offerPrice: null,
    labels: ['Best Selling'],
    category: 'Camera',
    variants: [
      {
        title: 'Lens Type',
        options: ['Macro', 'Wide Angle'],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Classic Laptop Sleeve',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 49.99,
    offerPrice: 39.99,
    labels: ['New'],
    category: 'Laptop',
    variants: [
      {
        title: 'Size',
        options: ['13 inch', '15 inch', '17 inch'],
      },
    ],
    isFeatured: false,
  },
  {
    title: 'Wireless Smart Speaker',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/vibrance-crimsonedition-crimsonshadow-01-ezgXwFYWWj8u0bfjUXlqEfI146Ex0d.jpg',
    price: 79.99,
    offerPrice: 59.99,
    labels: ['Hot', 'Best Selling'],
    category: 'Speaker',
    variants: [
      {
        type: 'color',
        title: 'Color',
        options: [
          { name: 'Red', hex: '#d60c0c' },
          { name: 'Black', hex: '#000' },
          { name: 'White', hex: '#fff' },
        ],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Mobile Wireless Charger',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 24.99,
    offerPrice: null,
    labels: [],
    category: 'Mobile',
    variants: [
      {
        type: 'color',
        title: 'Color',
        options: [
          { name: 'Black', hex: '#000' },
          { name: 'White', hex: '#fff' },
        ],
      },
    ],
    isFeatured: false,
  },
  {
    title: 'Professional Studio Camera',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/sony-hdc-4800-4k-hd-live-broadcast-and-studio-camera-500x500-OzLBkTWT1hY1dJWDGTxtKkqBlpSoHM.webp',
    price: 1299.99,
    offerPrice: 1199.99,
    labels: ['Best Selling', 'Hot'],
    category: 'Camera',
    variants: [
      {
        title: 'Lens',
        options: ['Standard', 'Zoom'],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Fitness Smart Watch',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 199.99,
    offerPrice: 149.99,
    labels: [],
    category: 'Smart Watches',
    variants: [
      {
        title: 'Strap Material',
        options: ['Silicone', 'Leather'],
      },
    ],
    isFeatured: false,
  },
  {
    title: 'Gaming Headset Pro',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 99.99,
    offerPrice: null,
    labels: ['Best Selling'],
    category: 'Mobile',
    variants: [
      {
        type: 'color',
        title: 'Color',
        options: [
          { name: 'Black', hex: '#000' },
          { name: 'White', hex: '#fff' },
          { name: 'Red', hex: '#FF0000' },
        ],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Laptop Cooling Pad',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 29.99,
    offerPrice: 19.99,
    labels: ['New'],
    category: 'Laptop',
    variants: [],
    isFeatured: false,
  },
  {
    title: 'Portable Bluetooth Speaker',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 49.99,
    offerPrice: 39.99,
    labels: [],
    category: 'Speaker',
    variants: [
      {
        type: 'color',
        title: 'Color',
        options: [
          { name: 'Blue', hex: '#0000FF' },
          { name: 'Red', hex: '#FF0000' },
          { name: 'Green', hex: '#008000' },
        ],
      },
    ],
    isFeatured: false,
  },
  {
    title: 'Luxury Leather Laptop Bag',
    href: '/details/ear-ring?id=3265',
    image: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Bag1-suEQSCQq3dcFzbJFJYwaie1KSXJvov.jpg',
    price: 99.99,
    offerPrice: 79.99,
    labels: ['Hot'],
    category: 'Laptop',
    variants: [
      {
        title: 'Size',
        options: ['13 inch', '15 inch'],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Classic Ear Ring Set',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 29.99,
    offerPrice: 19.99,
    labels: ['Hot', 'Best Selling'],
    category: 'Camera',
    variants: [
      {
        title: 'Material',
        options: [
          { name: 'Gold', hex: '#FFD700' },
          { name: 'Silver', hex: '#C0C0C0' },
        ],
      },
    ],
    isFeatured: true,
  },
  {
    title: 'Waterproof Smart Watch',
    href: '/details/ear-ring?id=3265',
    image: 'https://via.placeholder.com/150',
    price: 249.99,
    offerPrice: null,
    labels: [],
    category: 'Smart Watches',
    variants: [
      {
        type: 'color',
        title: 'Strap Color',
        options: [
          { name: 'Black', hex: '#000000' },
          { name: 'Red', hex: '#FF0000' },
        ],
      },
    ],
    isFeatured: false,
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
