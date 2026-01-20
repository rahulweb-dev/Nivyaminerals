export const minerals = [
  {
    id: "iron-ore",
    name: "Iron Ore",
    slug: "iron-ore",
    shortDesc: "High-grade hematite and magnetite iron ore suitable for steel production.",
    description: "Our Iron Ore is sourced from premium deposits, offering high iron content with low impurities. We supply both Hematite and Magnetite fines and lumps, essential for the global steel manufacturing industry. Our stringent quality control ensures consistent chemical composition for optimal furnace performance.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80",
    specs: [
      { label: "Fe Content", value: "62% - 65%" },
      { label: "Silica (SiO2)", value: "< 4.0%" },
      { label: "Alumina (Al2O3)", value: "< 2.5%" },
      { label: "Moisture", value: "8% Max" },
      { label: "Size", value: "0-10mm (Fines), 10-40mm (Lumps)" }
    ],
    applications: ["Steel Manufacturing", "Pig Iron Production", "Sponge Iron", "Construction"],
    availableGrades: ["Fe 64%", "Fe 62%", "Fe 58%"],
    exportCountries: ["China", "Japan", "South Korea", "Europe"]
  },
  {
    id: "bauxite",
    name: "Bauxite",
    slug: "bauxite",
    shortDesc: "Premium aluminum ore with high alumina content for metallurgical use.",
    description: "We provide high-quality Bauxite, the primary source of aluminum. Our bauxite is characterized by high alumina and low silica content, making it ideal for the Bayer process in alumina refineries. Sourced from sustainable mines, we ensure reliable supply for metallurgical applications.",
    image: "https://images.unsplash.com/photo-1599939571322-792a326991f2?auto=format&fit=crop&q=80",
    specs: [
      { label: "Alumina (Al2O3)", value: "45% - 52%" },
      { label: "Silica (SiO2)", value: "< 5.0%" },
      { label: "Iron Oxide (Fe2O3)", value: "10% - 20%" },
      { label: "Moisture", value: "10% Max" },
      { label: "Size", value: "0-100mm (Crushed)" }
    ],
    applications: ["Aluminum Production", "Refractories", "Abrasives", "Cement"],
    availableGrades: ["Metallurgical Grade", "Chemical Grade"],
    exportCountries: ["UAE", "China", "India", "Russia"]
  },
  {
    id: "limestone",
    name: "Limestone",
    slug: "limestone",
    shortDesc: "High-purity calcium carbonate for cement and steel industries.",
    description: "Our Limestone is extracted from high-purity calcium carbonate deposits. It is a vital raw material for the cement industry, steel manufacturing (as flux), and chemical industries. We offer various grades tailored to specific industrial requirements, ensuring optimal reactivity and purity.",
    image: "https://images.unsplash.com/photo-1595116708688-662bd365a122?auto=format&fit=crop&q=80",
    specs: [
      { label: "CaO", value: "52% - 55%" },
      { label: "Silica (SiO2)", value: "< 1.5%" },
      { label: "Magnesia (MgO)", value: "< 1.0%" },
      { label: "Whiteness", value: "> 90%" },
      { label: "Size", value: "10-40mm, 40-80mm" }
    ],
    applications: ["Cement Manufacturing", "Steel Flux", "Glass Industry", "Construction Aggregates"],
    availableGrades: ["Cement Grade", "Steel Grade", "Chemical Grade"],
    exportCountries: ["Bangladesh", "Vietnam", "Malaysia", "Qatar"]
  },
  {
    id: "silica-sand",
    name: "Silica Sand",
    slug: "silica-sand",
    shortDesc: "Washed and processed silica sand for glass and foundry use.",
    description: "We supply premium Silica Sand with high SiO2 content, processed to remove impurities like iron and clay. It is essential for glass manufacturing, foundry casting, and water filtration. Our sand is available in various mesh sizes to meet precise industrial specifications.",
    image: "https://images.unsplash.com/photo-1621258661678-18e4043b238e?auto=format&fit=crop&q=80",
    specs: [
      { label: "SiO2", value: "> 99.0%" },
      { label: "Fe2O3", value: "< 0.020%" },
      { label: "Al2O3", value: "< 0.5%" },
      { label: "Moisture", value: "< 5%" },
      { label: "AFS", value: "40-50, 50-60" }
    ],
    applications: ["Glass Manufacturing", "Foundry Casting", "Ceramics", "Water Filtration"],
    availableGrades: ["Glass Grade", "Foundry Grade"],
    exportCountries: ["Saudi Arabia", "Kuwait", "Japan", "Thailand"]
  },
  {
    id: "granite",
    name: "Granite Blocks",
    slug: "granite",
    shortDesc: "Premium dimensional granite blocks for construction and monuments.",
    description: "Our Granite Blocks are quarried from exclusive deposits known for their unique colors and structural integrity. Ideal for architectural cladding, flooring, and monuments. We supply rough blocks as well as dressed stones ready for further processing.",
    image: "https://images.unsplash.com/photo-1614867972827-0c2b292e597c?auto=format&fit=crop&q=80",
    specs: [
      { label: "Density", value: "2600-2800 kg/m3" },
      { label: "Water Absorption", value: "< 0.2%" },
      { label: "Compressive Strength", value: "> 200 MPa" },
      { label: "Colors", value: "Black, Red, Grey" }
    ],
    applications: ["Construction", "Monuments", "Countertops", "Flooring"],
    availableGrades: ["Grade A", "Commercial Grade"],
    exportCountries: ["USA", "Europe", "Vietnam", "Taiwan"]
  },
  {
    id: "quartz",
    name: "Quartz",
    slug: "quartz",
    shortDesc: "High-purity quartz lumps and grit for engineered stone and silicon.",
    description: "We offer high-purity Quartz suitable for engineered stone, semiconductor silicon production, and ceramics. Our quartz features low iron content and high brightness, ensuring superior quality for aesthetic and technical applications.",
    image: "https://images.unsplash.com/photo-1618218168350-6e7c8115209f?auto=format&fit=crop&q=80",
    specs: [
      { label: "SiO2", value: "> 99.5%" },
      { label: "Fe2O3", value: "< 0.01%" },
      { label: "Whiteness", value: "Snow White / Glassy" },
      { label: "Size", value: "Lumps, Grit, Powder" }
    ],
    applications: ["Engineered Stone", "Silicon Metal", "Solar Cells", "Ceramics"],
    availableGrades: ["A Grade", "B Grade", "Semi-Quartz"],
    exportCountries: ["China", "Vietnam", "Spain", "Italy"]
  }
];

export const services = [
  {
    id: "mining",
    title: "Mining Operations",
    icon: "Pickaxe",
    description: "Sustainable extraction using advanced machinery and safety protocols."
  },
  {
    id: "processing",
    title: "Processing & Crushing",
    icon: "Settings",
    description: "State-of-the-art crushing and screening plants to ensure size consistency."
  },
  {
    id: "supply",
    title: "Bulk Supply",
    icon: "Container",
    description: "Capability to supply large volumes for mega infrastructure projects."
  },
  {
    id: "logistics",
    title: "Export Logistics",
    icon: "Ship",
    description: "End-to-end handling from mine to port, including customs and freight."
  },
  {
    id: "quality",
    title: "Quality Testing",
    icon: "FlaskConical",
    description: "In-house laboratories to verify chemical composition and physical properties."
  },
  {
    id: "packaging",
    title: "Custom Packaging",
    icon: "Package",
    description: "Flexible packaging options: Loose, Jumbo Bags (1-1.5T), or Containerized."
  }
];
