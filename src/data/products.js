export const brand = 'Maison Merci'

// Replace with the team WhatsApp number (country code, no + or spaces).
export const whatsapp = '22900000000'

export const offer = {
  label: 'Semaine de Thanksgiving',
  discount: '-35 %',
  // Thanksgiving 2026, Benin time
  endsAt: '2026-11-26T00:00:00+01:00',
}

export const freeShippingFrom = 30000

export const categories = ['Table', 'Déco', 'Gourmand', 'Coffrets']

export const products = [
  {
    id: 'coffret-merci',
    name: 'Coffret cadeau « Merci »',
    category: 'Coffrets',
    oldPrice: 45000,
    price: 29900,
    stockLeft: 6,
    rating: 5,
    reviewCount: 64,
    bestSeller: true,
    description:
      'Notre coffret signature pour dire merci : une bougie Cèdre & Cannelle, deux serviettes en lin et le coffret d’épices d’automne, dans une boîte en carton recyclé.',
    details: ['Bougie 200 g, 45 h de combustion', '2 serviettes en lin lavé', 'Coffret de 4 épices', 'Carte « Merci » à écrire'],
  },
  {
    id: 'bougie-cedre',
    name: 'Bougie Cèdre & Cannelle',
    category: 'Déco',
    oldPrice: 12000,
    price: 7900,
    stockLeft: 14,
    rating: 4.9,
    reviewCount: 128,
    bestSeller: true,
    description: 'Cire de soja, mèche en coton, notes chaudes de cèdre, cannelle et orange. L’odeur d’un repas de fête.',
    details: ['Cire de soja naturelle', '200 g · 45 h de combustion', 'Pot en verre ambré réutilisable'],
  },
  {
    id: 'chemin-lin',
    name: 'Chemin de table en lin',
    category: 'Table',
    oldPrice: 18000,
    price: 11900,
    stockLeft: 22,
    rating: 4.8,
    reviewCount: 57,
    bestSeller: true,
    description: 'Lin lavé couleur sable, bords effilochés. Il habille une table de 6 à 8 personnes en un geste.',
    details: ['100 % lin lavé', '40 × 250 cm', 'Lavable en machine à 40 °C'],
  },
  {
    id: 'planche-acacia',
    name: 'Planche de service en acacia',
    category: 'Table',
    oldPrice: 22000,
    price: 14900,
    stockLeft: 9,
    rating: 4.9,
    reviewCount: 41,
    bestSeller: true,
    description: 'Grande planche en bois d’acacia massif, pour servir la dinde, les fromages ou les desserts.',
    details: ['Acacia massif huilé', '60 × 25 cm', 'Poignée découpée'],
  },
  {
    id: 'verres-ambre',
    name: 'Set de 4 verres ambrés',
    category: 'Table',
    oldPrice: 16000,
    price: 10500,
    stockLeft: 18,
    rating: 4.7,
    reviewCount: 33,
    description: 'Verres épais teintés ambre, qui donnent une lumière chaude à la table.',
    details: ['Verre soufflé teinté', '4 verres de 30 cl', 'Passent au lave-vaisselle'],
  },
  {
    id: 'coffret-epices',
    name: 'Coffret épices d’automne',
    category: 'Gourmand',
    oldPrice: 14000,
    price: 9500,
    stockLeft: 31,
    rating: 4.8,
    reviewCount: 76,
    description: 'Cannelle, muscade, gingembre et mélange « pumpkin spice », pour les plats et les desserts de fête.',
    details: ['4 pots en verre de 50 g', 'Épices sélectionnées', 'Fiche recettes incluse'],
  },
  {
    id: 'vase-gres',
    name: 'Vase en grès sable',
    category: 'Déco',
    oldPrice: 20000,
    price: 13500,
    stockLeft: 7,
    rating: 4.9,
    reviewCount: 22,
    description: 'Vase tourné à la main, finition mate couleur sable. Parfait avec quelques branches séchées.',
    details: ['Grès émaillé à l’intérieur', 'Hauteur 24 cm', 'Pièce unique, légères variations'],
  },
  {
    id: 'serviettes-lin',
    name: 'Serviettes en lin, lot de 6',
    category: 'Table',
    oldPrice: 24000,
    price: 15900,
    stockLeft: 12,
    rating: 4.8,
    reviewCount: 49,
    description: 'Six serviettes en lin lavé couleur olive, qui s’adoucissent à chaque lavage.',
    details: ['100 % lin lavé', '45 × 45 cm', 'Lot de 6'],
  },
]

export const imageFor = (id) => `/images/products/${id}.webp`

export const reviews = [
  { name: 'Fifamè A.', city: 'Cotonou', rating: 5, text: 'Le coffret « Merci » a fait pleurer ma belle-mère. Emballage magnifique, livré le lendemain.' },
  { name: 'Serge H.', city: 'Porto-Novo', rating: 5, text: 'La planche en acacia est énorme et très solide. La dinde avait sa place d’honneur.' },
  { name: 'Carine T.', city: 'Abomey-Calavi', rating: 5, text: 'La bougie sent incroyablement bon. J’en ai recommandé trois pour offrir.' },
]
