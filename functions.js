// ARRAY TO HOLD RANDOM VALUES
let noise = [];

// HEX SPARKS
const feature1 = [
    'Buried'
    , 'Colourful'
    , 'Adorned'
    , 'Spiked'
    , 'Split'
    , 'Entombed'
    , 'Reflective'
    , 'Veiled'
    , 'Hot'
    , 'Drowned'
    , 'Desecrated'
    , 'Isolated'
];
const feature2 = [
    'Brook'
    , 'Seat'
    , 'Pit'
    , 'Cave'
    , 'Monolith'
    , 'Mound'
    , 'Cairn'
    , 'Pond'
    , 'Waterfall'
    , 'Spring'
    , 'Arch'
    , 'Henge'
];
const wonder1 = [
    'Pleasure'
    , 'Secrets'
    , 'Prophecy'
    , 'Healing'
    , 'Desire'
    , 'Memory'
    , 'Death'
    , 'Strength'
    , 'Temptation'
    , 'Pain'
    , 'Regret'
    , 'Time'
];
const wonder2 = [
    'Light'
    , 'Flames'
    , 'Stones'
    , 'Beasts'
    , 'Sparks'
    , 'Trails'
    , 'Mist'
    , 'Colours'
    , 'Plants'
    , 'Wind'
    , 'Water'
    , 'Shadows'
];
const landscape1 = [
    'Barren'
    , 'Dry'
    , 'Grey'
    , 'Sparse'
    , 'Sharp'
    , 'Teeming'
    , 'Still'
    , 'Soft'
    , 'Overgrown'
    , 'Vivid'
    , 'Sodden'
    , 'Lush'
];
const landscape2 = [
    'Marsh'
    , 'Heath'
    , 'Crags'
    , 'Peaks'
    , 'Forest'
    , 'Valley'
    , 'Hills'
    , 'Meadow'
    , 'Bog'
    , 'Lakes'
    , 'Glades'
    , 'Plain'
];
const otherworld1 = [
    'Acidic'
    , 'Black'
    , 'Smoke'
    , 'Frozen'
    , 'Dead'
    , 'Broken'
    , 'Colossal'
    , 'Living'
    , 'Burning'
    , 'Sludge'
    , 'White'
    , 'Sweet'
];
const otherworld2 = [
    'Flats'
    , 'Labyrinth'
    , 'Ruins'
    , 'Stairs'
    , 'Desert'
    , 'Craters'
    , 'Cavern'
    , 'Jungle'
    , 'Dunes'
    , 'Tunnels'
    , 'Island'
    , 'Mountain'
];
const weather1 = [
    'Gentle'
    , 'Fleeting'
    , 'Persistent'
    , 'Bright'
    , 'Thin'
    , 'Cool'
    , 'Hot'
    , 'Solid'
    , 'Dull'
    , 'Faint'
    , 'Abundant'
    , 'Harsh'
];
const weather2 = [
    'Rain'
    , 'Gusts'
    , 'Cloud'
    , 'Sunlight'
    , 'Mist'
    , 'Humidity'
    , 'Thunder'
    , 'Dust'
    , 'Warmth'
    , 'Drizzle'
    , 'Breeze'
    , 'Fog'
];
const sky1 = [
    'Glittering'
    , 'Violet'
    , 'Sapphire'
    , 'Pale'
    , 'Fiery'
    , 'Ivory'
    , 'Slate'
    , 'Pink'
    , 'Golden'
    , 'Bloody'
    , 'Bright'
    , 'Inky'
];
const sky2 = [
    'Aurora'
    , 'Haze'
    , 'Marble'
    , 'Glow'
    , 'Billows'
    , 'Swirl'
    , 'Streaks'
    , 'Dapple'
    , 'Rays'
    , 'Pillars'
    , 'Shimmer'
    , 'Swells'
];
const water1 = [
    'Crystal'
    , 'Teal'
    , 'Pearlescent'
    , 'Mucky'
    , 'Cobalt'
    , 'Verdant'
    , 'Frosted'
    , 'Dark'
    , 'Verdigris'
    , 'Silver'
    , 'Emerald'
    , 'Jade'
];
const water2 = [
    'Silk'
    , 'Ripples'
    , 'Abyss'
    , 'Churn'
    , 'Froth'
    , 'Mirror'
    , 'Surge'
    , 'Glass'
    , 'Surf'
    , 'Rapids'
    , 'Spray'
    , 'Bubbles'
];
const flora1 = [
    'Aromatic'
    , 'Ashen'
    , 'Blooming'
    , 'Twisted'
    , 'Towering'
    , 'Fruitful'
    , 'Stinging'
    , 'Vibrant'
    , 'Brittle'
    , 'Thorny'
    , 'Sturdy'
    , 'Resinous'
];
const flora2 = [
    'Grasses'
    , 'Heather'
    , 'Shrubs'
    , 'Brambles'
    , 'Canopy'
    , 'Ferns'
    , 'Trunks'
    , 'Vines'
    , 'Conifers'
    , 'Saplings'
    , 'Reeds'
    , 'Roots'
];
const fauna1 = [
    'Watchful'
    , 'Helpful'
    , 'Graceful'
    , 'Loud'
    , 'Mischievous'
    , 'Deceitful'
    , 'Enlightening'
    , 'Placid'
    , 'Beautiful'
    , 'Mighty'
    , 'Hostile'
    , 'Aloof'
];
const fauna2 = [
    'Ungulates'
    , 'Songbirds'
    , 'Canines'
    , 'Rodents'
    , 'Amphibians'
    , 'Insects'
    , 'Felines'
    , 'Reptiles'
    , 'Hawks'
    , 'Mustelids'
    , 'Fowl'
    , 'Bears'
];

// FUNCTION TO ROLL RANDOM MYTH PHASE
function nextPhase() {
    for (i = 0; i < 18; i++) {
        noise[i] = Math.floor(Math.random() * 12);
    }

    return null
}

// HOLDING SPARKS
const h_styles = [
    'Dark'
    , 'Ruined'
    , 'Hostile'
    , 'Ancient'
    , 'Ornate'
    , 'Wild'
    , 'Pristine'
    , 'Fortified'
    , 'Unfinished'
    , 'Welcoming'
    , 'Proud'
    , 'Bright'
];
const h_features = [
    'Turrets'
    , 'Tower'
    , 'Wall'
    , 'Battlements'
    , 'Citadel'
    , 'Gate'
    , 'Spire'
    , 'Dome'
    , 'Beacons'
    , 'Bridge'
    , 'Pillars'
    , 'Moat'
];
const b_styles = [
    'Filthy'
    , 'Abandoned'
    , 'Joyous'
    , 'Sophisticated'
    , 'Industrious'
    , 'Humble'
    , 'Majestic'
    , 'Hallowed'
    , 'Rustic'
    , 'Solemn'
    , 'Bustling'
    , 'Immaculate'
];
const b_features = [
    'Marketplace'
    , 'Forge'
    , 'Library'
    , 'Fountain'
    , 'Temple'
    , 'Forum'
    , 'Tomb'
    , 'Garden'
    , 'Hall'
    , 'Workshops'
    , 'Arena'
    , 'Garrison'
];
const k_centers = [
    'Hearth'
    , 'Throne'
    , 'Musicians'
    , 'Pool'
    , 'Advisers'
    , 'Servants'
    , 'Shrine'
    , 'Table'
    , 'Reliquary'
    , 'Cauldron'
    , 'Chandelier'
    , 'Guards'
];
const k_decor = [
    'Antlers'
    , 'Silver'
    , 'Heraldry'
    , 'Bones'
    , 'Flowers'
    , 'Scripture'
    , 'Jewles'
    , 'Wreaths'
    , 'Candles'
    , 'Fur'
    , 'Tapestries'
    , 'Shields'
];
const f_qual = [
    'Spiced'
    , 'Herbal'
    , 'Crunchy'
    , 'Sour'
    , 'Dry'
    , 'Fermented'
    , 'Salted'
    , 'Salted'
    , 'Wet'
    , 'Fatty'
    , 'Chewy'
    , 'Sweet'
    , 'Mild'
];
const f_type = [
    'Fish'
    , 'Fruit'
    , 'Stew'
    , 'Mushrooms'
    , 'Pie'
    , 'Cheese'
    , 'Nuts'
    , 'Cake'
    , 'Porridge'
    , 'Bread'
    , 'Vegetable'
    , 'Meat'
];
const g_theme = [
    'Military'
    , 'Abundant'
    , 'Traditional'
    , 'Specialist'
    , 'Industrious'
    , 'Innovative'
    , 'Secretive'
    , 'Simple'
    , 'Simple'
    , 'Strong'
    , 'Decorated'
    , 'Fine'
    , 'Lucky'
];
const g_type = [
    'Textile'
    , 'Livestock'
    , 'Grain'
    , 'Mead'
    , 'Tools'
    , 'Stone'
    , 'Wood'
    , 'Pottery'
    , 'Metal'
    , 'Leather'
    , 'Honey'
    , 'Herb'
];
const l_rarity = [
    'Antique'
    , 'Intricate'
    , 'Unique'
    , 'Scarce'
    , 'Hazardous'
    , 'Flawless'
    , 'Luminous'
    , 'Lost'
    , 'Esoteric'
    , 'Sacred'
    , 'Mythical'
    , 'Beautiful'
];
const l_type = [
    'Jewel'
    , 'Wine'
    , 'Spice'
    , 'Fragrance'
    , 'Silk'
    , 'Fur'
    , 'Artwork'
    , 'Sword'
    , 'Creature'
    , 'Ore'
    , 'Root'
    , 'Scripture'
];
const d_theme = [
    'Betrayal'
    , 'Jealousy'
    , 'Rivalry'
    , 'Infidelity'
    , 'Coup'
    , 'Ambition'
    , 'Redemption'
    , 'Revelation'
    , 'Wrath'
    , 'Greed'
    , 'Banishment'
    , 'Manipulation'
];
const d_detail = [
    'Brawl'
    , 'Poison'
    , 'Oath'
    , 'Feast'
    , 'Letters'
    , 'Disguise'
    , 'Inheritance'
    , 'Assassin'
    , 'Family'
    , 'Alcohol'
    , 'Blackmail'
    , 'Gold'
];
const w_desc = [
    'Secretive'
    , 'Violent'
    , 'Looming'
    , 'Sudden'
    , 'Ongoing'
    , 'Prophecied'
    , 'Mysterious'
    , 'Sanctioned'
    , 'Unseen'
    , 'Vast'
    , 'Escalating'
    , 'Concealed'
];
const w_incident = [
    'Disease'
    , 'Famine'
    , 'Raids'
    , 'Invasion'
    , 'Abduction'
    , 'Storm'
    , 'Fire'
    , 'Revolt'
    , 'Exodus'
    , 'Beast'
    , 'Killing'
    , 'Theft'
];
const n_subj = [
    'Duel'
    , 'Birth'
    , 'Market'
    , 'Trial'
    , 'Ritual'
    , 'Mercenaries'
    , 'Festival'
    , 'Tournament'
    , 'Punishment'
    , 'Performance'
    , 'Death'
    , 'Marriage'
];
const n_mood = [
    'Pensive'
    , 'Joyous'
    , 'Content'
    , 'Divided'
    , 'Furious'
    , 'Skeptical'
    , 'Adoring'
    , 'Nostalgic'
    , 'Unified'
    , 'Bleak'
    , 'Solemn'
    , 'Optimistic'
];

function generateHolding() {
    for (i = 0; i < 18; i++) {
        noise[i] = Math.floor(Math.random() * 12);
        if (noise[i] == 12) {
            print("I'm here!")
        }
    }
    document.getElementById('h-style').innerHTML = h_styles[noise[0]];
    document.getElementById('h-feature').innerHTML = h_features[noise[1]];
    document.getElementById('b-style').innerHTML = b_styles[noise[2]];
    document.getElementById('b-feature').innerHTML = b_features[noise[3]];
    document.getElementById('k-center').innerHTML = k_centers[noise[4]];
    document.getElementById('k-decor').innerHTML = k_decor[noise[5]];
    document.getElementById('f-quality').innerHTML = f_qual[noise[6]];
    document.getElementById('f-type').innerHTML = f_type[noise[7]];
    document.getElementById('g-theme').innerHTML = g_theme[noise[8]];
    document.getElementById('g-type').innerHTML = g_type[noise[9]];
    document.getElementById('l-rarity').innerHTML = l_rarity[noise[10]];
    document.getElementById('l-type').innerHTML = l_type[noise[11]];
    document.getElementById('d-theme').innerHTML = d_theme[noise[12]];
    document.getElementById('d-detail').innerHTML = d_detail[noise[13]];
    document.getElementById('w-desc').innerHTML = w_desc[noise[14]];
    document.getElementById('w-incident').innerHTML = w_incident[noise[15]];
    document.getElementById('n-subject').innerHTML = n_subj[noise[16]];
    document.getElementById('n-mood').innerHTML = n_mood[noise[17]];
}