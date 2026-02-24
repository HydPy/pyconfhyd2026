export const TABS = [
  { id: 'attractions', label: 'Attractions' },
  { id: 'accommodation', label: 'Accommodation' },
  { id: 'places-to-eat', label: 'Places to Eat' },
];

export const TAB_CONFIG = {
  attractions: {
    description:
      "While you're in Hyderabad for PyConf, consider visiting some of these nearby attractions:",
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
        distanceWorkshop: '-',
      },
      {
        name: 'Inorbit Mall',
        description:
          'A popular shopping destination with various stores, restaurants, and entertainment options.',
        distanceESCI: '2.8',
        distanceWorkshop: '-',
      },
      {
        name: 'Durgam Cheruvu',
        description:
          'Also known as the Secret Lake, offering boating and a peaceful environment.',
        distanceESCI: '3',
        distanceWorkshop: '-',
      },
      {
        name: 'Cyber Towers',
        description:
          'An iconic landmark in Hi-Tech City, representing the IT boom in Hyderabad.',
        distanceESCI: '3.5',
        distanceWorkshop: '-',
      },
      {
        name: 'Peddamma Temple',
        description:
          'A famous temple dedicated to Goddess Peddamma, located in Jubilee Hills.',
        distanceESCI: '5.6',
        distanceWorkshop: '-',
      },
      {
        name: 'IKEA Hyderabad',
        description:
          'A popular furniture store with a wide range of products and a restaurant serving Swedish delicacies.',
        distanceESCI: '3',
        distanceWorkshop: '-',
      },
      {
        name: 'KBR National Park',
        description:
          'A large urban park perfect for nature walks and spotting local wildlife.',
        distanceESCI: '7.6',
        distanceWorkshop: '-',
      },
      {
        name: 'Birla Temple',
        description:
          'A beautiful temple dedicated to Lord Venkateswara, located on a hilltop with panoramic views of the city.',
        distanceESCI: '13',
        distanceWorkshop: '-',
      },
      {
        name: 'Birla Science Museum',
        description:
          'A science museum with interactive exhibits and a planetarium.',
        distanceESCI: '13',
        distanceWorkshop: '-',
      },
      {
        name: 'Hussain Sagar Lake',
        description:
          'A large artificial lake with a statue of Buddha in the middle, offering boating and scenic views.',
        distanceESCI: '16',
        distanceWorkshop: '-',
      },
      {
        name: 'Golconda Fort',
        description:
          'A historic fort with stunning architecture and panoramic views of the city.',
        distanceESCI: '7',
        distanceWorkshop: '-',
      },
      {
        name: 'Ramoji Film City',
        description:
          "The world's largest film studio complex, offering tours and entertainment options.",
        distanceESCI: '47',
        distanceWorkshop: '-',
      },
    ],
  },
  accommodation: {
    description: 'Here are some accommodation options near the ESCI and EPAM:',
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
        distanceWorkshop: '-',
      },
      {
        name: 'OYO Siri Elite',
        type: '2-star hotel',
        distanceESCI: '2.5',
        distanceWorkshop: '-',
      },
      {
        name: 'Peerless Hotel',
        type: '4-star hotel',
        distanceESCI: '4.8',
        distanceWorkshop: '-',
      },
      {
        name: 'Hotel Deccan Serai Grande',
        type: '4-star hotel',
        distanceESCI: '3.6',
        distanceWorkshop: '-',
      },
      {
        name: 'Bloom Hotel',
        type: 'Hotel',
        distanceESCI: '4',
        distanceWorkshop: '-',
      },
    ],
  },
  'places-to-eat': {
    description: 'Explore these dining options near ESCI and EPAM:',
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
        distanceWorkshop: '-',
      },
      {
        name: 'Beyond Flavours',
        type: 'South Indian Restaurant',
        distanceESCI: '3.6',
        distanceWorkshop: '-',
      },
      {
        name: 'ISTHAM KITCHEN',
        type: 'South Indian Restaurant',
        distanceESCI: '2.7',
        distanceWorkshop: '-',
      },
      {
        name: 'ITLU - A Veg Diner',
        type: 'Restaurant',
        distanceESCI: '5.8',
        distanceWorkshop: '-',
      },
      {
        name: 'IKEA Restaurant - Hyderabad',
        type: 'North Indian Restaurant',
        distanceESCI: '2.4',
        distanceWorkshop: '-',
      },
      {
        name: 'Aroma Multi Cuisine Restaurant',
        type: 'South Indian restaurant',
        distanceESCI: '5',
        distanceWorkshop: '-',
      },
      {
        name: 'Shah Ghouse Hotel & Restaurant',
        type: 'Restaurant',
        distanceESCI: '1.4',
        distanceWorkshop: '-',
      },
      {
        name: 'Niloufer Cafe',
        type: 'Cafe',
        distanceESCI: '5.6',
        distanceWorkshop: '-',
      },
      {
        name: 'Roast 24 Seven',
        type: 'Cafe',
        distanceESCI: '3.6',
        distanceWorkshop: '-',
      },
    ],
  },
};
