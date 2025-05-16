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

const people_sparks = new Map([
    ['ailment1', ['Hidden', 'Mild', 'Intermittent', 'Growing', 'Medicated', 'Denied', 'Unexplained', 'Constant', 'Diminishing', 'Permanent', 'Debilitating', 'Obvious']]
    , ['ailment2', ['Insomnia', 'Migraines', 'Arthritis', 'Nausea', 'Fixation', 'Blindness', 'Deafness', 'Melancholy', 'Shaking', 'Frailty', 'Coughing', 'Lethargy']]
    , ['appearance1', ['Delicate', 'Short', 'Robust', 'Hard', 'Haggard', 'Cold', 'Warm', 'Youthful', 'Soft', 'Sickly', 'Tall', 'Rough']]
    , ['appearance2', ['Armoured', 'Tattered', 'Vibrant', 'Crude', 'Eclectic', 'Traditional', 'Comfortable', 'Gaudy', 'Drab', 'Decorated', 'Functional', 'Elegant']]
    , ['background1', ['Deprived', 'Pious', 'Outcast', 'Military', 'Insular', 'Nomadic', 'Drudgery', 'Mercantile', 'Feral', 'Prestigious', 'Academic', 'Pampered']]
    , ['background2', ['War', 'Migration', 'Riding', 'Study', 'Exile', 'Joy', 'Sickness', 'Escape', 'Injury', 'Friendship', 'Execution', 'Romance']]
    , ['desire1', ['Escape', 'Wealth', 'Status', 'Knowledge', 'Mastery', 'Heirloom', 'Marriage', 'Truth', 'Travel', 'Power', 'Security', 'Forgiveness']]
    , ['desire2', ['Freedom', 'Love', 'Legacy', 'Recovery', 'Revenge', 'Duty', 'Fear', 'Guilt', 'Recognition', 'Defiance', 'Curiosity', 'Hatred']]
    , ['heraldry1', ['Light', 'Hot', 'Earthy', 'Rich', 'Metallic', 'Brilliant', 'Grey', 'Jewelled', 'Subdued', 'Airy', 'Cold', 'Dark']]
    , ['heraldry2', ['Beast', 'Bird', 'Fish', 'Weapon', 'Crown', 'Tree', 'Flower', 'Bodypart', 'Structure', 'Ring', 'Tool', 'Star']]
    , ['personality1', ['Cautious', 'Spiritual', 'Intellectual', 'Ambitious', 'Serene', 'Righteous', 'Empathetic', 'Unstable', 'Prying', 'Melancholic', 'Cynical', 'Rash']]
    , ['personality2', ['Botany', 'History', 'Music', 'Gambling', 'Animals', 'Art', 'Cookery', 'Craft', 'Fishing', 'Fashion', 'Hunting', 'Stories']]
    , ['relationship1', ['Adoring', 'Reluctant', 'Secret', 'Estranged', 'Hateful', 'Distant', 'Harmonious', 'Intimate', 'Recent', 'Sworn', 'Tumultuous', 'Resentful']]
    , ['relationship2', ['Kin', 'Friend', 'Lover', 'Spouse', 'Supporter', 'Ally', 'Rival', 'Successor', 'Mentor', 'Peer', 'Enemy', 'Guardian']]
    , ['task1', ['Investigate', 'Capture', 'Destroy', 'Transport', 'Retrieve', 'Mend', 'Break', 'Guard', 'Aid', 'Salvage', 'Conceal', 'Hunt']]
    , ['task2', ['Knight', 'Seer', 'Vassals', 'Livestock', 'Monument', 'Gold', 'Ruin', 'Animals', 'Dwelling', 'Holding', 'Bridge', 'Warband']]
    , ['voice1', ['Whispering', 'Soothing', 'Smooth', 'Flat', 'Mumbled', 'Weak', 'Strong', 'Hesitant', 'Melodic', 'Gravelly', 'Erratic', 'Booming']]
    , ['voice2', ['Formal', 'Poetic', 'Precise', 'Intense', 'Rambling', 'Detached', 'Passionate', 'Terse', 'Relaxed', 'Blunt', 'Boisterous', 'Friendly']]
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
    // ROLL AND ASSIGN HOLDING FEATURES
    for (let [key, value] of holding_sparks) {
        setInner(key, value[Math.floor(Math.random() * 12)]);
    }
}

function generatePerson() {
    // ROLL FOR KNIGHT, VAGABOND, VASSAL
    let roll6 = Math.floor(Math.random() * 6) + 1;
    // ASSIGN TEXT
    switch (roll6) {
        case 1:
            // KNIGHT
            roll6 = Math.floor(Math.random() * 6) + 1;
            let roll12 = Math.floor(Math.random() * 12) + 1;
            setInner('kvv', 'This person is a Knight who has sworn the Oath: The ' + roll6 + '-' + roll12 + ' Knight.');
            break;
        case 2 || 3:
            // VAGABOND
            setInner('kvv', 'This person is a Vagabond, their loyalty is their own.');
            break;
        default:
            // VASSAL
            setInner('kvv', 'This person is a Vassal of the Realm.');
            break;
    }

    // ROLL AND ASSIGN PERSON FEATURES
    for (let [key, value] of people_sparks) {
        setInner(key, value[Math.floor(Math.random() * 12)]);
    }
}

function setInner(element_id, text) {
    document.getElementById(element_id).innerHTML = text;
}