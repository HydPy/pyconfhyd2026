export const TABS = [
  { id: 'attractions', label: 'Attractions' },
  { id: 'accommodation', label: 'Accommodation' },
  { id: 'places-to-eat', label: 'Places to Eat' },
];

export const TAB_CONFIG = {
  attractions: {
    columns: [
      { header: 'Attraction', key: 'name', noWrap: true },
      { header: 'Description', key: 'description' },
      { header: 'Distance from ESCI (kms)', key: 'distanceESCI', noWrap: true },
      {
        header: 'Distance from EPAM (kms)',
        key: 'distanceWorkshop',
        noWrap: true,
      },
    ],
    data: [
      {
        name: 'Shilparamam',
        description:
          'A cultural village showcasing traditional crafts and arts.',
        distanceESCI: '3.6',
        distanceWorkshop: '4.5',
      },
      {
        name: 'Inorbit Mall',
        description:
          'A popular shopping destination with various stores, restaurants, and entertainment options.',
        distanceESCI: '2.8',
        distanceWorkshop: '1.7',
      },
      {
        name: 'Durgam Cheruvu',
        description:
          'Also known as the Secret Lake, offering boating and a peaceful environment.',
        distanceESCI: '3',
        distanceWorkshop: '3',
      },
      {
        name: 'Cyber Towers',
        description:
          'An iconic landmark in Hi-Tech City, representing the IT boom in Hyderabad.',
        distanceESCI: '3.5',
        distanceWorkshop: '3.5',
      },
      {
        name: 'Peddamma Temple',
        description:
          'A famous temple dedicated to Goddess Peddamma, located in Jubilee Hills.',
        distanceESCI: '5.6',
        distanceWorkshop: '5',
      },
      {
        name: 'IKEA Hyderabad',
        description:
          'A popular furniture store with a wide range of products and a restaurant serving Swedish delicacies.',
        distanceESCI: '3',
        distanceWorkshop: '3',
      },
      {
        name: 'KBR National Park',
        description:
          'A large urban park perfect for nature walks and spotting local wildlife.',
        distanceESCI: '7.6',
        distanceWorkshop: '8',
      },
      {
        name: 'Birla Temple',
        description:
          'A beautiful temple dedicated to Lord Venkateswara, located on a hilltop with panoramic views of the city.',
        distanceESCI: '13',
        distanceWorkshop: '15',
      },
      {
        name: 'Birla Science Museum',
        description:
          'A science museum with interactive exhibits and a planetarium.',
        distanceESCI: '13',
        distanceWorkshop: '15',
      },
      {
        name: 'Hussain Sagar Lake',
        description:
          'A large artificial lake with a statue of Buddha in the middle, offering boating and scenic views.',
        distanceESCI: '16',
        distanceWorkshop: '17',
      },
      {
        name: 'Golconda Fort',
        description:
          'A historic fort with stunning architecture and panoramic views of the city.',
        distanceESCI: '7',
        distanceWorkshop: '8',
      },
      {
        name: 'Ramoji Film City',
        description:
          "The world's largest film studio complex, offering tours and entertainment options.",
        distanceESCI: '47',
        distanceWorkshop: '50',
      },
    ],
  },
  accommodation: {
    columns: [
      { header: 'Name', key: 'name', noWrap: true },
      { header: 'Type', key: 'type', noWrap: true },
      { header: 'Distance from ESCI (kms)', key: 'distanceESCI', noWrap: true },
      {
        header: 'Distance from EPAM (kms)',
        key: 'distanceWorkshop',
        noWrap: true,
      },
    ],
    data: [
      {
        name: 'FabExpress Broholic',
        type: '3-star hotel',
        distanceESCI: '2.5',
        distanceWorkshop: '5',
      },
      {
        name: 'OYO Siri Elite',
        type: '2-star hotel',
        distanceESCI: '2.5',
        distanceWorkshop: '5.2',
      },
      {
        name: 'Peerless Hotel',
        type: '4-star hotel',
        distanceESCI: '4.8',
        distanceWorkshop: '2.5',
      },
      {
        name: 'Hotel Deccan Serai Grande',
        type: '4-star hotel',
        distanceESCI: '3.6',
        distanceWorkshop: '3.5',
      },
      {
        name: 'Bloom Hotel',
        type: '3-star hotel',
        distanceESCI: '4',
        distanceWorkshop: '4.3',
      },
      {
        name: 'Sybaritic Suites',
        type: '3-star hotel',
        distanceESCI: '2.4',
        distanceWorkshop: '5',
      },
      {
        name: 'Way Inns Sravya Residency Hotel',
        type: '3-star hotel',
        distanceESCI: '2.5',
        distanceWorkshop: '5.2',
      },
      {
        name: 'Hotel Deccan Serai Grande',
        type: '4-star hotel',
        distanceESCI: '1.4',
        distanceWorkshop: '3.7',
      },
      {
        name: 'SKYVIEW Boutique Hotel',
        type: '2-star hotel',
        distanceESCI: '1',
        distanceWorkshop: '2.5',
      },
      {
        name: 'Hotel Serenity La Serene',
        type: '3-star hotel',
        distanceESCI: '4',
        distanceWorkshop: '3',
      },
    ],
  },
  'places-to-eat': {
    columns: [
      { header: 'Name', key: 'name', noWrap: true },
      { header: 'Type', key: 'type', noWrap: true },
      { header: 'Distance from ESCI (kms)', key: 'distanceESCI' },
      {
        header: 'Distance from EPAM (kms)',
        key: 'distanceWorkshop',
        noWrap: true,
      },
    ],
    data: [
      {
        name: 'Hyderabad Spicy Kitchen & Bar',
        type: ' Restaurant',
        distanceESCI: '3.6',
        distanceWorkshop: '5.5',
      },
      {
        name: 'Beyond Flavours',
        type: 'South Indian Restaurant',
        distanceESCI: '3.6',
        distanceWorkshop: '5.3',
      },
      {
        name: 'ISTHAM KITCHEN',
        type: 'South Indian Restaurant',
        distanceESCI: '2.7',
        distanceWorkshop: '5',
      },
      {
        name: 'ITLU - A Veg Diner',
        type: 'Restaurant',
        distanceESCI: '5.8',
        distanceWorkshop: '4',
      },
      {
        name: 'IKEA Restaurant - Hyderabad',
        type: 'North Indian Restaurant',
        distanceESCI: '2.4',
        distanceWorkshop: '2.5',
      },
      {
        name: 'Aroma Multi Cuisine Restaurant',
        type: 'South Indian restaurant',
        distanceESCI: '5',
        distanceWorkshop: '4.5',
      },
      {
        name: 'Shah Ghouse Hotel & Restaurant',
        type: 'Restaurant',
        distanceESCI: '1.4',
        distanceWorkshop: '2.7',
      },
      {
        name: 'Niloufer Cafe',
        type: 'Cafe',
        distanceESCI: '2',
        distanceWorkshop: '1',
      },
      {
        name: 'Roast 24 Seven',
        type: 'Cafe',
        distanceESCI: '2',
        distanceWorkshop: '3.5',
      },
      {
        name: 'Thangedu',
        type: 'South Indian restaurant',
        distanceESCI: '1.8',
        distanceWorkshop: '1.2',
      },
    ],
  },
};
