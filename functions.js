// ARRAY TO HOLD RANDOM VALUES
let noise = [];

// HEX SPARK MAP
const hex_sparks = new Map([
    ['feature1', ['Buried', 'Colourful', 'Adorned', 'Spiked', 'Split', 'Entombed', 'Reflective', 'Veiled', 'Hot', 'Drowned', 'Desecrated', 'Isolated']]
    , ['feature2', ['Brook', 'Seat', 'Pit', 'Cave', 'Monolith', 'Mound', 'Cairn', 'Pond', 'Waterfall', 'Spring', 'Arch', 'Henge']]
    , ['wonder1', ['Seat', 'Pit', 'Cave', 'Monolith', 'Mound', 'Cairn', 'Pond', 'Waterfall', 'Spring', 'Arch', 'Henge', 'Light']]
    , ['wonder2', ['Light', 'Flames', 'Stones', 'Beasts', 'Sparks', 'Trails', 'Mist', 'Colours', 'Plants', 'Wind', 'Water', 'Shadows']]
    , ['landscape1', ['Barren', 'Dry', 'Grey', 'Sparse', 'Sharp', 'Teeming', 'Still', 'Soft', 'Overgrown', 'Vivid', 'Sodden', 'Lush']]
    , ['landscape2', ['Marsh', 'Heath', 'Crags', 'Peaks', 'Forest', 'Valley', 'Hills', 'Meadow', 'Bog', 'Lakes', 'Glades', 'Plain']]
    , ['otherworld1', ['Acidic', 'Black', 'Smoke', 'Frozen', 'Dead', 'Broken', 'Colossal', 'Living', 'Burning', 'Sludge', 'White', 'Sweet']]
    , ['otherworld2', ['Flats', 'Labyrinth', 'Ruins', 'Stairs', 'Desert', 'Craters', 'Cavern', 'Jungle', 'Dunes', 'Tunnels', 'Island', 'Mountain']]
    , ['weather1', ['Gentle', 'Fleeting', 'Persistent', 'Bright', 'Thin', 'Cool', 'Hot', 'Solid', 'Dull', 'Faint', 'Abundant', 'Harsh']]
    , ['weather2', ['Fleeting', 'Persistent', 'Bright', 'Thin', 'Cool', 'Hot', 'Solid', 'Dull', 'Faint', 'Abundant', 'Harsh', 'Aromatic']]
    , ['sky1', ['Glittering', 'Violet', 'Sapphire', 'Pale', 'Fiery', 'Ivory', 'Slate', 'Pink', 'Golden', 'Bloody', 'Bright', 'Inky']]
    , ['sky2', ['Violet', 'Sapphire', 'Pale', 'Fiery', 'Ivory', 'Slate', 'Pink', 'Golden', 'Bloody', 'Bright', 'Inky', 'Crystal']]
    , ['water1', ['Sapphire', 'Pale', 'Fiery', 'Ivory', 'Slate', 'Pink', 'Golden', 'Bloody', 'Bright', 'Inky', 'Crystal', 'Teal']]
    , ['water2', ['Silk', 'Ripples', 'Abyss', 'Churn', 'Froth', 'Mirror', 'Surge', 'Glass', 'Surf', 'Rapids', 'Spray', 'Bubbles']]
    , ['flora1', ['Aromatic', 'Ashen', 'Blooming', 'Twisted', 'Towering', 'Fruitful', 'Stinging', 'Vibrant', 'Brittle', 'Thorny', 'Sturdy', 'Resinous']]
    , ['flora2', ['Grasses', 'Heather', 'Shrubs', 'Brambles', 'Canopy', 'Ferns', 'Trunks', 'Vines', 'Conifers', 'Saplings', 'Reeds', 'Roots']]
    , ['fauna1', ['Watchful', 'Helpful', 'Graceful', 'Loud', 'Mischievous', 'Deceitful', 'Enlightening', 'Placid', 'Beautiful', 'Mighty', 'Hostile', 'Aloof']]
    , ['fauna2', ['Ungulates', 'Songbirds', 'Canines', 'Rodents', 'Amphibians', 'Insects', 'Felines', 'Reptiles', 'Hawks', 'Mustelids', 'Fowl', 'Bears']]
]);

// HOLDING SPARK MAP
const holding_sparks = new Map([
    ['bailey1', ['Filthy', 'Abandoned', 'Joyous', 'Sophisticated', 'Industrious', 'Humble', 'Majestic', 'Hallowed', 'Rustic', 'Solemn', 'Bustling', 'Immaculate']]
    , ['bailey2', ['Marketplace', 'Forge', 'Library', 'Fountain', 'Temple', 'Forum', 'Tomb', 'Garden', 'Hall', 'Workshops', 'Arena', 'Garrison']]
    , ['drama1', ['Betrayal', 'Jealousy', 'Rivalry', 'Infidelity', 'Coup', 'Ambition', 'Redemption', 'Revelation', 'Wrath', 'Greed', 'Banishment', 'Manipulation']]
    , ['drama2', ['Brawl', 'Poison', 'Oath', 'Feast', 'Letters', 'Disguise', 'Inheritance', 'Assassin', 'Family', 'Alcohol', 'Blackmail', 'Gold']]
    , ['food1', ['Spiced', 'Herbal', 'Crunchy', 'Sour', 'Dry', 'Fermented', 'Salted', 'Wet', 'Fatty', 'Chewy', 'Sweet', 'Mild']]
    , ['food2', ['Fish', 'Fruit', 'Stew', 'Mushrooms', 'Pie', 'Cheese', 'Nuts', 'Cake', 'Porridge', 'Bread', 'Vegetable', 'Meat']]
    , ['goods1', ['Military', 'Abundant', 'Traditional', 'Specialist', 'Industrious', 'Innovative', 'Secretive', 'Simple', 'Strong', 'Decorated', 'Fine', 'Lucky']]
    , ['goods2', ['Textile', 'Livestock', 'Grain', 'Mead', 'Tools', 'Stone', 'Wood', 'Pottery', 'Metal', 'Leather', 'Honey', 'Herb']]
    , ['holding1', ['Dark', 'Ruined', 'Hostile', 'Ancient', 'Ornate', 'Wild', 'Pristine', 'Fortified', 'Unfinished', 'Welcoming', 'Proud', 'Bright']]
    , ['holding2', ['Turrets', 'Tower', 'Wall', 'Battlements', 'Citadel', 'Gate', 'Spire', 'Dome', 'Beacons', 'Bridge', 'Pillars', 'Moat']]
    , ['keep1', ['Hearth', 'Throne', 'Musicians', 'Pool', 'Advisers', 'Servants', 'Shrine', 'Table', 'Reliquary', 'Cauldron', 'Chandelier', 'Guards']]
    , ['keep2', ['Garrison', 'Antlers', 'Silver', 'Heraldry', 'Bones', 'Flowers', 'Scripture', 'Jewels', 'Wreaths', 'Candles', 'Fur', 'Tapestries', 'Shields']]
    , ['luxuries1', ['Antique', 'Intricate', 'Unique', 'Scarce', 'Hazardous', 'Flawless', 'Luminous', 'Lost', 'Esoteric', 'Sacred', 'Mythical', 'Beautiful']]
    , ['luxuries2', ['Jewel', 'Wine', 'Spice', 'Fragrance', 'Silk', 'Fur', 'Artwork', 'Sword', 'Creature', 'Ore', 'Root', 'Scripture']]
    , ['news1', ['Duel', 'Birth', 'Market', 'Trial', 'Ritual', 'Mercenaries', 'Festival', 'Tournament', 'Punishment', 'Performance', 'Death', 'Marriage']]
    , ['news2', ['Pensive', 'Joyous', 'Content', 'Divided', 'Furious', 'Sceptical', 'Adoring', 'Nostalgic', 'Unified', 'Bleak', 'Solemn', 'Optimistic']]
    , ['woe1', ['Secretive', 'Violent', 'Looming', 'Sudden', 'Ongoing', 'Prophecised', 'Mysterious', 'Sanctioned', 'Unseen', 'Vast', 'Escalating', 'Concealed']]
    , ['woe2', ['Disease', 'Famine', 'Raids', 'Invasion', 'Abduction', 'Storm', 'Fire', 'Revolt', 'Exodus', 'Beast', 'Killing', 'Theft']]
]);

// FUNCTION TO ROLL RANDOM MYTH PHASE
function nextPhase() {
    // ROLL FOR MYTH ENCOUNTER
    let roll6 = Math.floor(Math.random() * 6) + 1;
    // ASSIGN MYTH TEXT
    switch (roll6) {
        case 1:
            // ENCOUNTER RANDOM MYTH
            roll6 = Math.floor(Math.random() * 6) + 1;
            setInner('myths', 'The Company encounters a random Myth: #' + roll6 + '.');
            break;
        case 2 || 3:
            // ENCOUNTER NEAREST MYTH
            setInner('myths', 'The Company encounters the nearest Myth.');
            break;
        default:
            // ENCOUNTER LANDMARK
            setInner('myths', 'The Company encounters this hex\'s Landmark.');
            break;
    }

    // ROLL AND ASSIGN NATURE FEATURES
    for (let [key, value] of hex_sparks) {
        setInner(key, value[Math.floor(Math.random() * 12)]);
    }
}

function generateHolding() {
    for (let [key, value] of holding_sparks) {
        setInner(key, value[Math.floor(Math.random() * 12)]);
    }
}

function setInner(element_id, text) {
    document.getElementById(element_id).innerHTML = text;
}