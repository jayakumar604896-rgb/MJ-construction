export const packagesList = [
  {
    slug: 'basic-package',
    name: 'Basic Package',
    price: '1,650',
    unit: 'sq.ft',
    popular: false,
    badge: 'Budget Friendly',
    shortDesc: 'Perfect for standard residential home construction with essential high-quality specifications.',
    overview: 'Our Basic Package provides a robust, structurally resilient building framework at an accessible price point. Ideal for first-time homebuilders looking for dependable materials, standard fittings, and clean aesthetic finishes without compromising structural safety.',
    specs: {
      structure: [
        'Steel: Tata / JSW / Kamdhenu Fe500 TMT bars',
        'Cement: UltraTech / Coromandel / Dalmia 53 Grade',
        'Concrete: M20 Grade standard RCC frame mix',
        'Masonry: 6-inch solid concrete blocks or chamber red bricks',
        'Ceiling Height: 10 feet floor-to-floor height',
      ],
      flooring: [
        'Living & Bedrooms: Vitrified tiles (2ft x 2ft) up to ₹55/sq.ft',
        'Kitchen Flooring: Anti-skid ceramic tiles up to ₹45/sq.ft',
        'Staircase: Standard Granite / Kota stone step slabs',
        'Balcony & Utility: Anti-skid ceramic tiles up to ₹40/sq.ft',
      ],
      plumbing: [
        'Pipes: Astral / Supreme CPVC & PVC concealed pipes',
        'Sanitaryware: Parryware / Hindware standard white EWCs',
        'CP Fittings: Parryware / Cera chrome finish taps and wall mixers',
        'Overhead Tank: 1000 Liters Sintex 3-Layer water tank',
      ],
      electrical: [
        'Wiring: Anchor / Finolex concealed flame-retardant copper wires',
        'Switches: Anchor Penta / GM modular switches',
        'Distribution Board: MCB & ELCB board per floor',
      ],
      kitchen: [
        'Countertop: 20mm thick Black Granite slab with polished edge',
        'Sink: Single bowl stainless steel sink up to ₹2,500',
        'Wall Tiles: Ceramic wall dado up to 2 feet above counter (₹45/sq.ft)',
      ],
      doorsWindows: [
        'Main Door: Teak wood frame with flush door shutter (₹15,000 allowance)',
        'Internal Doors: Sal wood frames with molded flush doors',
        'Windows: Powder-coated Aluminium 2-track sliding windows with MS safety grills',
      ],
      painting: [
        'Internal Walls: 2 coats of Asian Paints Tractor Emulsion over 2 coats putty',
        'External Walls: Asian Paints Apex weather-proof emulsion',
        'Woodwork & Grills: 2 coats enamel paint',
      ],
    },
    paymentMilestones: [
      { stage: 'Booking Advance', percentage: '10%', desc: 'Initial contract signing & architectural floor plan drafting' },
      { stage: 'Foundation Level', percentage: '20%', desc: 'Completion of excavation, footing concrete & plinth beam' },
      { stage: 'Ground Floor Slab', percentage: '25%', desc: 'RCC column casting & floor slab concrete casting' },
      { stage: 'Brickwork & Plastering', percentage: '25%', desc: 'Solid block masonry, conduit wiring & wall plastering' },
      { stage: 'Flooring & Painting', percentage: '15%', desc: 'Tile installation, sanitaryware & initial paint coat' },
      { stage: 'Final Handover', percentage: '5%', desc: 'Final touch-ups, deep cleaning & key handover' },
    ],
    guarantees: [
      '10-Year Structural Strength Warranty',
      '5-Year Anti-Termite Chemical Treatment Guarantee',
      '1-Year Free Post-Handover Maintenance Support',
    ]
  },
  {
    slug: 'standard-package',
    name: 'Standard Package',
    price: '1,950',
    unit: 'sq.ft',
    popular: true,
    badge: 'Best Seller',
    shortDesc: 'Our most popular construction choice offering premium branded materials, 3D elevations, and semi-modular kitchen features.',
    overview: 'The Standard Package strikes the perfect balance between luxury aesthetics, branded fittings, and value for money. Engineered with seismic-resistant RCC frames, double-charged vitrified tiles, Jaquar bath fittings, and architectural 3D elevation designs.',
    specs: {
      structure: [
        'Steel: Tata Tiscon / JSW Neosteel Fe550D TMT bars',
        'Cement: UltraTech 53 Grade / Coromandel Super Power',
        'Concrete: M25 Ready-Mix / Machine Mix Concrete',
        'Masonry: Premium First-Quality Red Bricks or AAC Blocks',
        'Ceiling Height: 10.5 feet clear height',
      ],
      flooring: [
        'Living & Dining: Double-charged vitrified tiles (4ft x 2ft) up to ₹85/sq.ft',
        'Bedrooms: Premium vitrified tiles up to ₹70/sq.ft',
        'Staircase: Lapotra finish Granite / Sadahalli Grey Granite',
        'Parking Area: Heavy-duty parking pavers up to ₹50/sq.ft',
      ],
      plumbing: [
        'Pipes: Ashirvad / Astral Heavy Duty CPVC & SWR pipes',
        'Sanitaryware: Jaquar / Cera wall-mounted soft-close EWCs',
        'CP Fittings: Jaquar Opal Prime chrome wall mixers & overhead showers',
        'Overhead Tank: 2000 Liters Sintex 4-Layer Anti-Bacterial Tank',
      ],
      electrical: [
        'Wiring: Finolex / Havells Fire-Retardant Low Smoke (FR-LSH) copper wiring',
        'Switches: Legrand / Anchor Roma Modular switches & sockets',
        'Provision: AC wiring points in all bedrooms & living area',
      ],
      kitchen: [
        'Countertop: Premium Jet Black Granite (40mm thickness molded)',
        'Sink: Carysil / Franke Quartz composite or SS double sink (₹6,000 value)',
        'Wall Tiles: Digital glazed wall tiles up to 4 feet above counter (₹65/sq.ft)',
        'Woodwork: Semi-modular kitchen cabinet framework with BWP plywood',
      ],
      doorsWindows: [
        'Main Door: Teak wood frame with Carved Teak wood shutter (₹28,000 allowance)',
        'Internal Doors: Teak wood frame with veneered flush doors',
        'Windows: UPVC 2.5-track sliding windows with mosquito mesh & MS grills',
      ],
      painting: [
        'Internal Walls: 2 coats Asian Paints Premium Emulsion over Biria White Putty',
        'External Walls: Asian Paints Apex Ultima weather-shield paint with texture accents',
        'Grills & Metalwork: Premium PU Enamel Finish',
      ],
    },
    paymentMilestones: [
      { stage: 'Booking Advance', percentage: '10%', desc: 'Architectural planning, 3D elevation & municipal drawing submission' },
      { stage: 'Foundation & Plinth', percentage: '20%', desc: 'Soil treatment, footing casting, plinth beam & earth filling' },
      { stage: 'Structure Slabs', percentage: '25%', desc: 'Ground & upper floor RCC slabs, staircase & roof beams' },
      { stage: 'Masonry & Wiring', percentage: '20%', desc: 'Red brick wall erection, electrical conduit piping & plumbing' },
      { stage: 'Finishing & Tiles', percentage: '20%', desc: 'Plastering, tile laying, bath fittings & ceiling putty' },
      { stage: 'Key Handover', percentage: '5%', desc: 'Final paint coat, fixture testing, cleaning & keys handover' },
    ],
    guarantees: [
      '10-Year Structural Integrity Certificate',
      '10-Year Waterproofing Guarantee for Roof Slabs & Bathrooms',
      '1-Year Free On-Call Maintenance Warranty',
    ]
  },
  {
    slug: 'premium-package',
    name: 'Premium Package',
    price: '2,350',
    unit: 'sq.ft',
    popular: false,
    badge: 'Luxury Villa',
    shortDesc: 'Luxurious building specifications featuring Italian marble/granite, Kohler sanitaryware, and fully modular interior woodwork.',
    overview: 'Designed for bespoke luxury villas and high-end residences, our Premium Package incorporates top-tier architectural engineering, Italian marble flooring options, Kohler luxury sanitaryware, full modular kitchen cabinetry, and custom glass elevation features.',
    specs: {
      structure: [
        'Steel: Tata Tiscon Fe550D TMT Super Steel',
        'Cement: UltraTech Weather Plus / ACC Concrete 53 Grade',
        'Concrete: M30 Design Mix Concrete with Waterproof Additives',
        'Masonry: Autoclaved Aerated Concrete (AAC) blocks or First Grade Red Bricks',
        'Ceiling Height: 11 feet floor-to-ceiling clear height',
      ],
      flooring: [
        'Living & Foyer: Italian Marble / Premium Slab Vitrified (6ft x 4ft) up to ₹160/sq.ft',
        'Master Bedroom: Wooden laminate flooring or Marble up to ₹130/sq.ft',
        'Staircase: Premium Leather Finish Granite with SS & Toughened Glass Railing',
        'Balconies: Wooden-finish anti-skid ceramic tiles up to ₹85/sq.ft',
      ],
      plumbing: [
        'Pipes: Supreme / Astral Schedule 80 Heavy-Duty CPVC lines',
        'Sanitaryware: Kohler / Grohe wall-hung rimless EWCs with concealed cisterns',
        'CP Fittings: Kohler / Grohe rain shower panels & thermostatic mixers',
        'Water Tank: 3000 Liters Stainless Steel / Heavy-duty 4-Layer Anti-Bacterial Tank',
      ],
      electrical: [
        'Wiring: Finolex FRLS Fire-proof Cables',
        'Switches: Schneider / Legrand Arteor Smart touch switches',
        'Automation: Basic Smart Home Light & Fan Automation Module included',
      ],
      kitchen: [
        'Countertop: Exotic Italian Quartz / Kalinga Stone up to ₹250/sq.ft',
        'Sink: Franke double bowl sink with drainboard & pull-out spray tap',
        'Cabinetry: Complete Modular Kitchen with Marine BWP Plywood & Acrylic Shutters',
      ],
      doorsWindows: [
        'Main Door: 8ft High Solid Teak Wood Frame & Designer Carved Teak Door (₹45,000 value)',
        'Internal Doors: Teak wood frame with Teak Veneer polish doors & Hafele locks',
        'Windows: Fenesta / Prominance UPVC 3-track heavy soundproof windows with bug screens',
      ],
      painting: [
        'Internal Walls: Asian Paints Royale Luxury Emulsion over 3 coats Acrylic Putty',
        'External Walls: Asian Paints Royale Apex Ultima Protek with 10-year warranty',
        'Accent Walls: 1 Wallpaper / Texture Accent wall per floor included',
      ],
    },
    paymentMilestones: [
      { stage: 'Booking Advance', percentage: '10%', desc: 'Complete 3D Walkthrough, Vastu blueprint & structural design' },
      { stage: 'Foundation', percentage: '20%', desc: 'Deep excavation, anti-termite grid & raft footing' },
      { stage: 'RCC Framework', percentage: '25%', desc: 'Columns, beam girders & upper floor slabs casting' },
      { stage: 'Walls & Conduits', percentage: '20%', desc: 'Masonry brickwork, electrical DB box & plumbing piping' },
      { stage: 'Tiles & Modular Interiors', percentage: '20%', desc: 'Marble/Tile laying, modular kitchen & bathroom fitting' },
      { stage: 'Handover & Certification', percentage: '5%', desc: 'Final paint polish, deep cleaning & structural warranty certificate' },
    ],
    guarantees: [
      '15-Year Structural Guarantee Certificate',
      '10-Year Complete Waterproofing & Paint Performance Warranty',
      '2-Year Comprehensive Free Maintenance & Quarterly Health Audits',
    ]
  },
  {
    slug: 'luxury-package',
    name: 'Ultra Luxury Package',
    price: '2,850',
    unit: 'sq.ft',
    popular: false,
    badge: 'Ultra Bespoke',
    shortDesc: 'Bespoke architectural masterwork featuring smart automation, private elevator shaft, swimming pool provisioning, and designer landscape.',
    overview: 'The pinnacle of residential construction. The Ultra Luxury Package is crafted for homeowners who demand unmatched perfection, imported Italian marble, home automation, designer landscape architecture, private elevator integration, and custom exterior facade lighting.',
    specs: {
      structure: [
        'Steel: Tata Tiscon 550D / Primary Producer Corrosion Resistant TMT',
        'Cement: UltraTech Super / ACC Gold Water-Shield',
        'Concrete: M30 / M35 Structural Design Concrete',
        'Ceiling Height: 11.5 to 12 feet grand spatial clearance',
        'Elevator: Shaft & Pit RCC Construction for Private Home Lift',
      ],
      flooring: [
        'Living & Bedrooms: Imported Italian Botticino / Statuario Marble up to ₹250/sq.ft',
        'Outdoor Terrace: Teak Decking / Heavy Anti-skid Porcelain Slabs',
        'Staircase: Curved Solid Teak Wood or Italian Marble with Custom Forged Brass Railing',
      ],
      plumbing: [
        'Pipes: Heavy Duty Soundproof CPVC & Cast Iron Drainage Pipes',
        'Sanitaryware: Toto / Kohler Intelligent Electronic Bidet EWCs',
        'Fittings: Hansgrohe / Axor Concealed Thermostatic Digital Showers',
      ],
      electrical: [
        'Wiring: Polycab / Finolex Zero-Halogen Fireproof Cables',
        'Automation: Full KNX / Schneider Smart Home Automation for Lighting, ACs & Security',
      ],
      kitchen: [
        'Custom Imported German/Italian Modular Kitchen with Corian / Quartz Countertops',
        'Built-in Appliances: Provision & Cabinetry for Bosch/Siemens Oven, Hob & Hood',
      ],
      doorsWindows: [
        'Main Entrance: 9ft High Solid Teak Pivot Door with Digital Fingerprint Lock',
        'Windows: Thermal-break Slimline Aluminium Sliding System with Double-glazed Glass',
      ],
      painting: [
        'Internal: PU Polish & Stucco / Velvet Texture Finishes on interior walls',
        'External: Stone Cladding / Weather-proof HPL Louvers & Apex Protek',
      ],
    },
    paymentMilestones: [
      { stage: 'Booking Advance', percentage: '10%', desc: '3D VR Walkthrough, Structural Engineering & Interior Concept' },
      { stage: 'Sub-structure', percentage: '20%', desc: 'Basement / Pile Footings & Water-tight Tank Concrete' },
      { stage: 'Super-structure', percentage: '25%', desc: 'Full RCC Skeleton Frame & High-clearance Roof Slabs' },
      { stage: 'Services & Automation', percentage: '20%', desc: 'Concealed Smart Wiring, Plumbing & Elevator Shaft' },
      { stage: 'Marble & Woodwork', percentage: '20%', desc: 'Italian Marble Laying, Modular Interior & Facade Cladding' },
      { stage: 'Handover Ceremony', percentage: '5%', desc: 'Full Testing, Cleaning & Official Keys Handover Ceremony' },
    ],
    guarantees: [
      '20-Year Lifetime Structural Strength Warranty',
      '10-Year Water Ingress Guarantee',
      '3-Year Dedicated Relationship Manager & Free Home Maintenance',
    ]
  }
];
