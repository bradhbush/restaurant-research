export const reportData = {
  title: "U.S. Restaurants: Survey Shows Resilient (But Uneven) Demand",
  date: "July 23, 2026",
  source: "D.A. Davidson & Co.",
  analysts: ["Matt Curtis, CFA", "Andrew Tompkins"],
  
  keyTakeaways: [
    {
      title: "Restaurant Demand Is Proving More Resilient Than Broader Sentiment Implies",
      content: "While respondents reported meaningful deterioration in both their current financial condition and future financial outlooks, restaurant usage patterns appear relatively resilient, with 67% indicating their visit/order frequency is the same or higher versus last year (up from 64% in January)."
    },
    {
      title: "Consumers Remain Optimistic Despite Broadly Weaker Finances",
      content: "Despite broad deterioration in their current financial situation, more than half of respondents still expect their financial condition to improve over the next year. Expectations for restaurant usage over the coming year remained relatively stable versus January."
    },
    {
      title: "Operational and Experiential Factors Are the Clearest Drivers of Incremental Traffic",
      content: "Convenience and speed of service were the strongest positive drivers, followed by promotions, food quality, order accuracy, and menu innovation. Menu prices and personal financial pressures were the strongest drivers of reduced frequency."
    },
    {
      title: "Value Perceptions Weaken Across Nearly All Tracked Chains",
      content: "Perceived value scores declined broadly since January (McDonald's and Dunkin' the only positive outliers). On an absolute basis, Texas Roadhouse, Chili's, and The Cheesecake Factory scored highest on value."
    },
    {
      title: "Brand-Level Frequency Momentum Uneven and Modestly Softer Overall",
      content: "Net frequency momentum was generally flattish to modestly negative, but momentum varied widely across brands, suggesting that consumers remain highly selective."
    }
  ],

  positiveMomentum: [
    {
      company: "Chipotle Mexican Grill",
      ticker: "CMG",
      marketCap: "$43,700m",
      rating: "BUY",
      priceTarget: "$45",
      insights: "Relatively well positioned as restaurant usage growth remains strongest among its core customer base of younger/higher income respondents. Despite skewing slightly negative on net frequency momentum, overall value score was fourth highest in our survey."
    },
    {
      company: "Dutch Bros",
      ticker: "BROS",
      marketCap: "$11,800m",
      rating: "BUY",
      priceTarget: "$90",
      insights: "Fifth strongest on both net frequency momentum and value scores. Restaurant usage growth remains concentrated among its core customer base of younger consumers and higher-income households."
    },
    {
      company: "CAVA Group",
      ticker: "CAVA",
      marketCap: "$7,500m",
      rating: "NEUTRAL",
      priceTarget: "$84",
      insights: "Second strongest brand according to net frequency momentum, suggesting a strong competitive position amid a more selective demand environment."
    },
    {
      company: "Sweetgreen",
      ticker: "SG",
      marketCap: "$800m",
      rating: "NEUTRAL",
      priceTarget: "$7",
      insights: "Third strongest on net frequency momentum and one of only two chains with 30% of respondents reporting higher frequency vs last year. Outsized exposure to younger/higher-income consumers whose restaurant usage is expected to grow the most."
    },
    {
      company: "Black Rock Coffee Bar",
      ticker: "BRCB",
      marketCap: "$400m",
      rating: "BUY",
      priceTarget: "$15",
      insights: "Screened strongest of any concept on net frequency momentum, while also being one of only two concepts with more than 30% of respondents visiting/ordering more often than last year."
    }
  ],

  negativeMomentum: [
    {
      company: "Brinker International",
      ticker: "EAT",
      marketCap: "$8,800m",
      rating: "NEUTRAL",
      priceTarget: "$160",
      insights: "Chili's was fourth weakest on net frequency momentum despite having the second highest value score (roughly stable sequentially)."
    },
    {
      company: "Wingstop",
      ticker: "WING",
      marketCap: "$3,900m",
      rating: "BUY",
      priceTarget: "$230",
      insights: "While value scores were roughly stable relative to January (and middle-of-the-pack overall), WING was third weakest in net frequency momentum and one of only four brands with net frequency in negative double-digit territory."
    },
    {
      company: "Kura Sushi USA",
      ticker: "KRUS",
      marketCap: "$500m",
      rating: "BUY",
      priceTarget: "$65",
      insights: "Fourth highest net frequency momentum, though value scores weakened the most of any brand to reach the lowest ranking in our survey."
    },
    {
      company: "Portillo's",
      ticker: "PTLO",
      marketCap: "$300m",
      rating: "NEUTRAL",
      priceTarget: "$5",
      insights: "Second highest sequential decline in value score to third lowest in our survey, though may be related to smaller footprint/response rates."
    }
  ],

  consumerSentiment: {
    currentFinancialSituation: {
      better: "39% (down from 48% in January)",
      worse: "33% (up from similar amount)",
      same: "28%",
      insight: "Deterioration was broad-based across demographic groups, more pronounced among middle aged and/or older respondents."
    },
    financialOutlook: {
      improve: "51% (down 6pts from January)",
      worsen: "21% (up 7pts from January)",
      same: "28%",
      insight: "Consumers generally remain optimistic despite decreased confidence. Deterioration was less broad-based than current financial situation."
    },
    restaurantFrequency: {
      more: "33%",
      same: "34% (up 11pts from January)",
      less: "33%",
      insight: "67% indicated 'same' or 'more' frequency, up slightly from 64% in January. Patterns are normalizing rather than showing broad-based pullback."
    }
  },

  valuePerceptions: {
    highestValue: [
      { company: "Texas Roadhouse", rank: 1 },
      { company: "Chili's", rank: 2 },
      { company: "The Cheesecake Factory", rank: 3 }
    ],
    lowestValue: [
      { company: "Kura Sushi", rank: -1 },
      { company: "Starbucks", rank: -2 },
      { company: "Portillo's", rank: -3 }
    ],
    sequentialImprovement: ["McDonald's", "Dunkin'"],
    sequentialDecline: ["Kura Sushi", "Portillo's", "Sweetgreen"]
  },

  frequencyDrivers: {
    positive: [
      { factor: "Convenience/Location", strength: "Highest" },
      { factor: "Speed of Service", strength: "Highest" },
      { factor: "Promotions", strength: "High" },
      { factor: "Food Quality", strength: "High" },
      { factor: "Order Accuracy", strength: "Moderate" },
      { factor: "Menu Innovation", strength: "Moderate" }
    ],
    negative: [
      { factor: "Menu Prices", strength: "Highest" },
      { factor: "Personal Finances", strength: "Highest" },
      { factor: "Health/Dietary Considerations", strength: "Moderate" },
      { factor: "At-home Meal Preparation", strength: "Moderate" }
    ]
  },

  allCompaniesMentioned: [
    { name: "BJ's Restaurants, Inc.", ticker: "BJRI", rating: "NEUTRAL", price: "$67.52" },
    { name: "Black Rock Coffee Bar, Inc.", ticker: "BRCB", rating: "BUY", price: "$7.97" },
    { name: "Dutch Bros Inc.", ticker: "BROS", rating: "BUY", price: "$64.95" },
    { name: "CAVA Group, Inc.", ticker: "CAVA", rating: "NEUTRAL", price: "$62.35" },
    { name: "Chipotle Mexican Grill, Inc.", ticker: "CMG", rating: "BUY", price: "$32.20" },
    { name: "Brinker International, Inc.", ticker: "EAT", rating: "NEUTRAL", price: "$187.23" },
    { name: "First Watch Restaurant Group, Inc.", ticker: "FWRG", rating: "BUY", price: "$12.34" },
    { name: "Kura Sushi USA, Inc.", ticker: "KRUS", rating: "BUY", price: "$45.54" },
    { name: "El Pollo Loco Holdings, Inc.", ticker: "LOCO", rating: "NEUTRAL", price: "$15.84" },
    { name: "Portillo's Inc.", ticker: "PTLO", rating: "NEUTRAL", price: "$4.47" },
    { name: "Starbucks Corporation", ticker: "SBUX", rating: "NEUTRAL", price: "$103.98" },
    { name: "Sweetgreen, Inc.", ticker: "SG", rating: "NEUTRAL", price: "$6.30" },
    { name: "Shake Shack Inc.", ticker: "SHAK", rating: "BUY", price: "$55.94" },
    { name: "Wingstop Inc.", ticker: "WING", rating: "BUY", price: "$138.12" }
  ]
};
