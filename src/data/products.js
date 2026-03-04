export const productsData = [
  {
    id: 'vitaminwater',
    name: 'Vitaminwater Power-C',
    position: { x: 300, y: 250 },
    color: 0xe17055,
    images: {
      front: 'assets/products/vitaminwater/71EdjN9TJKL._SL1500_.jpg',
      ingredients: 'assets/products/vitaminwater/00786162010001_577.jpeg',
      nutrition: 'assets/products/vitaminwater/00786162010001_874.jpeg'
    },
    ourPicks: [3, 4, 5, 6, 7, 8],
    explanations: {
      3: '"Immune support" is a structure/function claim that doesn\'t require FDA pre-market approval, letting Vitaminwater highlight added vitamins without independent verification, drawing attention to select nutrients rather than the drink\'s overall nutritional content.',
      5: '"Antioxidant vitamin C" is redundant and the use of "antioxidant" here adds perceived value without conveying meaningful extra information.',
      6: 'The smiley face paired with "helps support normal immune function" visually reinforces a vague, unquantifiable claim, showing the product relies on positive connotations rather than scientific validation.',
      7: 'Fancy technical terms like "reverse osmosis water" and "crystalline fructose" for simple ingredients like water and sugar add confusion and imply sophistication, further obscuring the nutritional landscape.'
    },
    ourGroups: [
      {
        ids: [4, 5, 8],
        explanation: 'Prominent micronutrient labeling draws away from primary nutritional content — 27g of carbs, all added sugar (54% DV) — creating a health halo where consumers see the drink as healthy despite high sugar.'
      }
    ],
    citations: {
      3: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/small-entity-compliance-guide-structurefunction-claims'
    },
    summary: ''
  },
  {
    id: 'item-2',
    name: 'Item 2',
    position: { x: 550, y: 400 },
    color: 0xfdcb6e,
    images: null,
    ourPicks: [],
    explanations: {},
    summary: ''
  },
  {
    id: 'item-3',
    name: 'Item 3',
    position: { x: 200, y: 500 },
    color: 0xa29bfe,
    images: null,
    ourPicks: [],
    explanations: {},
    summary: ''
  }
];
