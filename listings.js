/*
 * ============================================================
 *  EMPIRE REAL ESTATE — LISTINGS DATA
 * ============================================================
 *  To ADD a listing: copy one { ... } block, paste it at the top
 *  of the array, and edit the values.
 *  To REMOVE a listing (sold / expired): delete its block, or set
 *  status: "Sold" / "Pending" to keep it with a badge.
 *
 *  Fields:
 *    status      "Active" | "Price Reduced" | "Pending" | "Sold"
 *    type        short label shown on the card (e.g. "Lakefront", "Land")
 *    title       headline for the card
 *    address     street, city, ST ZIP
 *    price       number (no $ or commas). Use null for "Call for price"
 *    beds/baths  number or null (hidden when null)
 *    sqft        number or null
 *    acres       number or null
 *    mls         MLS number (string) or null
 *    agent       listing agent name
 *    description 1–3 sentences, from the MLS remarks
 *    url         full listing page (photos live there — we link, we
 *                don't copy MLS photos onto this site)
 *    photo       OPTIONAL path to a photo YOU own the rights to,
 *                e.g. "assets/listings/4087-hwy-8.jpg". Leave "" to
 *                show the branded placeholder card.
 *
 *  Facts below were taken from public MLS-syndicated pages on
 *  Oct 27, 2026 (source URLs in each entry). Re-check prices and
 *  status before publishing.
 * ============================================================
 */
window.EMPIRE_LISTINGS = [
  {
    status: "Just Listed",
    type: "Condo",
    title: "Updated 3-Bedroom Condo at Pineridge",
    address: "334 Brookside Dr, Unit 5, Mayville, WI 53050",
    price: 225000,
    beds: 3,
    baths: 2,
    sqft: 1140,
    acres: null, // complex acreage only — not the unit
    mls: "50334880",
    agent: "Shelly Kindschuh · (920) 574-6884",
    description:
      "Completely updated, meticulously maintained 2004 Pineridge condo with gas fireplace and an attached 2-car garage. New flooring, fixtures, trim, toilets and sinks, Nest thermostats and a Ring camera; interior repainted 2025–2026. Most new furniture included (except bedroom set and desk). Within a block of the TAG Center (swimming, exercise) and a dog park.",
    // Sources: https://www.premierrealty.group/property/RANW-50334880/
    //          https://www.klapperichrealestate.com/homes-for-sale/334-Brookside-Drive-Unit-5-Mayville-WI-53050-441431843
    url: "https://www.premierrealty.group/property/RANW-50334880/",
    photo: ""
  },
  {
    status: "Active",
    type: "Lakefront Resort",
    title: "Pine Valley Lodge on the Moen Lake Chain",
    address: "4000 Lakeshore Dr, Rhinelander, WI 54501",
    price: 1499999,
    beds: null,
    baths: null,
    sqft: null,
    acres: 27.28,
    mls: "217391",
    agent: "Joshua Vollmar",
    description:
      "Historic Northwoods resort on 27 acres with 1,900 ft of frontage on the Moen Lake Chain: a classic 1920s lodge with full liquor license bar and lounge, a 5,000 sq ft recreation hall, guest cabins, an owner's residence and a sandy beach.",
    // Source: https://www.bolenrealty.com/real-estate/4000-lakeshore-dr-rhinelander-wi-54501/217391/197066163
    url: "https://gnmls.xposureapp.com/portal/wisconsin/InteractiveLink?u=1378732&l=217391&t=ici&h=J9%2BaNPkmHH7A7zHBgmzp9HNMk%2FU%3D",
    photo: ""
  },
  {
    status: "Active",
    type: "Hobby Farm",
    title: "15+ Acre Hobby Farm with Pole Building & Horse Stalls",
    address: "N3262 State Road 175, Brownsville, WI 53006",
    price: 699000,
    beds: 7,
    baths: 2.5,
    sqft: 5000,
    acres: 15.31,
    mls: "50333032",
    agent: "Shelly Kindschuh",
    description:
      "7-bedroom farmhouse with a large 2016 addition and main-floor primary suite. 55×96 pole building with 4 horse stalls, 3+ stall garage with 220V, 40×50 Quonset, chicken coop and barn. Pre-approval / proof of funds required to show.",
    // Source: https://www.coldwellbanker.com/wi/brownsville/n3262-state-road-175/lid-P00800000HHSSAf6NS3WPCV7J8Nro9IRt6hWEzYm
    url: "https://www.coldwellbanker.com/wi/brownsville/n3262-state-road-175/lid-P00800000HHSSAf6NS3WPCV7J8Nro9IRt6hWEzYm",
    photo: ""
  },
  {
    status: "Active",
    type: "Wooded Home",
    title: "Turn-Key Country Home on 1.56 Wooded Acres",
    address: "383 CTH B, Pelican Lake, WI 54463",
    price: 459900,
    beds: 2,
    baths: 2,
    sqft: 1550,
    acres: 1.56,
    mls: "220004",
    agent: "Shelly Kindschuh",
    description:
      "Immaculate 2006-built home with Brazilian Tiger hardwood throughout, cathedral-ceiling living room, 3-season room, main-floor primary and laundry, upstairs loft suite with claw-foot tub, and a detached 2-car garage with room for toys.",
    // Source: https://www.ezhomesearch.com/propertydetails/us/wi/pelican-lake/383-cth-b-54463/220004/
    url: "https://gnmls.xposureapp.com/portal/wisconsin/InteractiveLink?u=1378732&l=220004&t=mls&h=IGKmGWo5B1a6t4DlSDjE540NgAo%3D",
    photo: ""
  },
  {
    status: "Price Reduced",
    type: "Riverfront",
    title: "Peshtigo River Retreat on 7 Acres",
    address: "4087 Hwy 8, Argonne, WI 54511",
    price: 189900,
    beds: 2,
    baths: 1,
    sqft: 1040,
    acres: 7.08,
    mls: "218689",
    agent: "Shelly Kindschuh",
    description:
      "Year-round home or cabin with 180 ft of Peshtigo River frontage on just over 7 wooded acres with open field areas. Bonus office/den, full basement, and two garages for boats, UTVs and snowmobiles.",
    // Source: https://www.firstweber.com/realestate/details/26037785/4087-hwy-8-argonne-wi-54511 (price reduced to $189,900 on 10/16/2026)
    url: "https://listings.northwoodsrealtors.org/listing/Forest-WI/4087-Hwy-8/37vn5",
    photo: ""
  }
];

/*
 * Recent closings shown in the "Recent Results" strip.
 * Source: realty.com office profile https://www.realty.com/office/23678353/empire_real_estate
 * side: "Listing" = we represented the seller, "Selling" = we represented the buyer.
 */
window.EMPIRE_RECENT_SALES = [
  { address: "308 Lake Ave, Florence, WI", side: "Listing" },
  { address: "N3729 Doemel Ln, White Lake, WI", side: "Selling" },
  { address: "11339 Old 8 Rd, Crandon, WI", side: "Selling" },
  { address: "16788 Nicolet Rd, Townsend, WI", side: "Selling" },
  { address: "Old Oak Trl, Rhinelander, WI (land)", side: "Selling" }
];
