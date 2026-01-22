export const minerals = [
  {
    id: 'iron-ore',
    name: 'Iron Ore',
    slug: 'iron-ore',
    shortDesc:
      'High-grade hematite and magnetite iron ore suitable for steel production.',
    description:
      'Our Iron Ore is sourced from premium deposits, offering high iron content with low impurities. We supply both Hematite and Magnetite fines and lumps, essential for the global steel manufacturing industry. Our stringent quality control ensures consistent chemical composition for optimal furnace performance.',
    image:
      '/assests/iron_ore.jpg',
    specs: [
      { label: 'Fe Content', value: '62% - 65%' },
      { label: 'Silica (SiO2)', value: '< 4.0%' },
      { label: 'Alumina (Al2O3)', value: '< 2.5%' },
      { label: 'Moisture', value: '8% Max' },
      { label: 'Size', value: '0-10mm (Fines), 10-40mm (Lumps)' },
    ],
    applications: [
      'Steel Manufacturing',
      'Pig Iron Production',
      'Sponge Iron',
      'Construction',
    ],
    availableGrades: ['Fe 64%', 'Fe 62%', 'Fe 58%'],
    exportCountries: ['China', 'Japan', 'South Korea', 'Europe'],
  },
  {
    id: 'road-metal',
    name: 'Road Metal',
    slug: 'road-metal',
    shortDesc:
      'Durable crushed stone aggregate used for road construction, base layers, and infrastructure projects.',
    description:
      'We supply high-quality Road Metal (crushed stone aggregate) widely used in road construction and civil infrastructure. Our road metal is produced from hard and durable rock, ensuring excellent load-bearing strength, stability, and long-lasting performance. With consistent grading and reliable supply capacity, we support highways, industrial roads, and large-scale development projects.',
    image:
      '/assests/20mm-road-metal-crushed-stone.jpeg',
    specs: [
      { label: 'Material Type', value: 'Crushed Stone Aggregate' },
      { label: 'Size Range', value: '10mm, 20mm, 40mm (As required)' },
      { label: 'Fines Content', value: '< 5%' },
      { label: 'Water Absorption', value: '< 2%' },
      { label: 'Bulk Density', value: '1.4 - 1.7 T/m³' },
    ],
    applications: [
      'Road Base & Sub-base',
      'Highway Construction',
      'Asphalt & Concrete Works',
      'Industrial & Rural Roads',
    ],
    availableGrades: ['10mm', '20mm', '40mm', 'GSB', 'WMM'],
    exportCountries: ['India', 'UAE', 'Oman', 'Qatar'],
  },
  {
    id: 'manganese',
    name: 'Manganese',
    slug: 'manganese',
    shortDesc:
      'High-grade manganese ore used in steel manufacturing, ferroalloys, and chemical industries.',
    description:
      'We supply premium quality Manganese Ore with consistent Mn content and low impurities, suitable for steel production and ferroalloy manufacturing. Our manganese is processed and graded to meet industrial requirements, ensuring reliable performance in smelting, refining, and chemical applications. With strong sourcing and logistics capabilities, we support both domestic and export markets.',
    image:
      '/assests/mangaese-ore.jpg',
    specs: [
      { label: 'Manganese (Mn)', value: '35% - 48%' },
      { label: 'Iron (Fe)', value: '5% - 12%' },
      { label: 'Silica (SiO2)', value: '< 8.0%' },
      { label: 'Phosphorus (P)', value: '< 0.20%' },
      { label: 'Size', value: '0-50mm / 0-100mm (As required)' },
    ],
    applications: [
      'Steel Manufacturing',
      'Ferro Manganese Production',
      'Battery & Chemical Industry',
      'Foundry Applications',
    ],
    availableGrades: ['Lumps', 'Fines', 'Concentrate'],
    exportCountries: ['India', 'UAE', 'China', 'Turkey'],
  },
  {
    id: 'dolomite',
    name: 'Dolomite',
    slug: 'dolomite',
    shortDesc:
      'High-purity dolomite mineral used in steel, cement, glass, and refractory industries.',
    description:
      'We supply premium quality Dolomite, a calcium-magnesium carbonate mineral widely used in metallurgy and industrial manufacturing. Our dolomite is processed to meet strict quality standards with consistent CaO and MgO content, low impurities, and reliable sizing. Sourced responsibly, we ensure stable supply for domestic and export markets.',
    image:
      '/assests/dolomite-rock.jpeg',
    specs: [
      { label: 'Calcium Oxide (CaO)', value: '30% - 35%' },
      { label: 'Magnesium Oxide (MgO)', value: '18% - 22%' },
      { label: 'Silica (SiO2)', value: '< 3.0%' },
      { label: 'Iron Oxide (Fe2O3)', value: '< 1.5%' },
      { label: 'Size', value: '0-50mm / 0-100mm (As required)' },
    ],
    applications: [
      'Steel Making (Flux)',
      'Cement Industry',
      'Glass Manufacturing',
      'Refractories',
    ],
    availableGrades: ['Lumps', 'Powder', 'Calcined Dolomite'],
    exportCountries: ['India', 'UAE', 'Bangladesh', 'Sri Lanka'],
  },
  {
    id: 'limestone',
    name: 'Limestone',
    slug: 'limestone',
    shortDesc: 'High-purity calcium carbonate for cement and steel industries.',
    description:
      'Our Limestone is extracted from high-purity calcium carbonate deposits. It is a vital raw material for the cement industry, steel manufacturing (as flux), and chemical industries. We offer various grades tailored to specific industrial requirements, ensuring optimal reactivity and purity.',
    image:
      '/assests/limestone.jpg',
    specs: [
      { label: 'CaO', value: '52% - 55%' },
      { label: 'Silica (SiO2)', value: '< 1.5%' },
      { label: 'Magnesia (MgO)', value: '< 1.0%' },
      { label: 'Whiteness', value: '> 90%' },
      { label: 'Size', value: '10-40mm, 40-80mm' },
    ],
    applications: [
      'Cement Manufacturing',
      'Steel Flux',
      'Glass Industry',
      'Construction Aggregates',
    ],
    availableGrades: ['Cement Grade', 'Steel Grade', 'Chemical Grade'],
    exportCountries: ['Bangladesh', 'Vietnam', 'Malaysia', 'Qatar'],
  },
  {
    id: 'silica-sand',
    name: 'Silica Sand',
    slug: 'silica-sand',
    shortDesc: 'Washed and processed silica sand for glass and foundry use.',
    description:
      'We supply premium Silica Sand with high SiO2 content, processed to remove impurities like iron and clay. It is essential for glass manufacturing, foundry casting, and water filtration. Our sand is available in various mesh sizes to meet precise industrial specifications.',
    image:
      '/assests/sand-22.jpeg',
    specs: [
      { label: 'SiO2', value: '> 99.0%' },
      { label: 'Fe2O3', value: '< 0.020%' },
      { label: 'Al2O3', value: '< 0.5%' },
      { label: 'Moisture', value: '< 5%' },
      { label: 'AFS', value: '40-50, 50-60' },
    ],
    applications: [
      'Glass Manufacturing',
      'Foundry Casting',
      'Ceramics',
      'Water Filtration',
    ],
    availableGrades: ['Glass Grade', 'Foundry Grade'],
    exportCountries: ['Saudi Arabia', 'Kuwait', 'Japan', 'Thailand'],
  },
  {
    id: 'granite',
    name: 'Granite Blocks',
    slug: 'granite',
    shortDesc:
      'Premium dimensional granite blocks for construction and monuments.',
    description:
      'Our Granite Blocks are quarried from exclusive deposits known for their unique colors and structural integrity. Ideal for architectural cladding, flooring, and monuments. We supply rough blocks as well as dressed stones ready for further processing.',
    image:
      '/assests/granite.jpg',
    specs: [
      { label: 'Density', value: '2600-2800 kg/m3' },
      { label: 'Water Absorption', value: '< 0.2%' },
      { label: 'Compressive Strength', value: '> 200 MPa' },
      { label: 'Colors', value: 'Black, Red, Grey' },
    ],
    applications: ['Construction', 'Monuments', 'Countertops', 'Flooring'],
    availableGrades: ['Grade A', 'Commercial Grade'],
    exportCountries: ['USA', 'Europe', 'Vietnam', 'Taiwan'],
  },
  {
    id: 'quartz',
    name: 'Quartz',
    slug: 'quartz',
    shortDesc:
      'High-purity quartz lumps and grit for engineered stone and silicon.',
    description:
      'We offer high-purity Quartz suitable for engineered stone, semiconductor silicon production, and ceramics. Our quartz features low iron content and high brightness, ensuring superior quality for aesthetic and technical applications.',
    image:
      '/assests/Quartz_Brésil.jpg',
    specs: [
      { label: 'SiO2', value: '> 99.5%' },
      { label: 'Fe2O3', value: '< 0.01%' },
      { label: 'Whiteness', value: 'Snow White / Glassy' },
      { label: 'Size', value: 'Lumps, Grit, Powder' },
    ],
    applications: [
      'Engineered Stone',
      'Silicon Metal',
      'Solar Cells',
      'Ceramics',
    ],
    availableGrades: ['A Grade', 'B Grade', 'Semi-Quartz'],
    exportCountries: ['China', 'Vietnam', 'Spain', 'Italy'],
  },
];

export const services = [
  {
    id: "mining",
    title: "Mining Operations",
    icon: "Pickaxe",
    description:
      "Sustainable extraction using advanced machinery and safety protocols.",
    bgImage: "/assests/dolomite-rock.jpeg",
  },
  {
    id: "processing",
    title: "Processing & Crushing",
    icon: "Settings",
    description:
      "State-of-the-art crushing and screening plants to ensure size consistency.",
    bgImage: "/assests/granite.jpg",
  },
  {
    id: "beneficiation",
    title: "Beneficiation",
    icon: "Settings",
    description:
      "Ore beneficiation services including crushing, screening, washing, and grading to meet required industrial specifications.",
    bgImage: "/assests/iron_ore.jpg",
  },
  {
    id: "logistics",
    title: "Export Logistics",
    icon: "Ship",
    description:
      "End-to-end handling from mine to port, including customs and freight.",
    bgImage: "/assests/hero-banner-2.jpeg",
  },
  {
    id: "quality",
    title: "Quality Testing",
    icon: "FlaskConical",
    description:
      "In-house laboratories to verify chemical composition and physical properties.",
    bgImage: "/industrial_open-pit_mine_at_sunset.png",
  },
  {
    id: "supply",
    title: "Bulk Supply",
    icon: "Container",
    description:
      "Capability to supply large volumes for mega infrastructure projects.",
    bgImage: "/assests/Gemini_Generated_Image_1pfb2a1pfb2a1pfb.png",
  },
];

