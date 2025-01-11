document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const resetButton = document.getElementById("reset-button");

    // Load saved state from localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id); // Get the saved state
        if (savedState === "true") {
            checkbox.checked = true; // Restore checked state
        }

        // Save state when a checkbox is clicked
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Reset button functionality
    resetButton.addEventListener("click", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Uncheck all checkboxes
            localStorage.removeItem(checkbox.id); // Clear localStorage for the checkbox
        });
    });
});

 // Function to dynamically generate the checklist from the array
 function generateChecklist() {
    const section = document.getElementById('categories');
    const categories = {};

    // Group locations by category
    locations.forEach(location => {
        if (!categories[location.category]) {
            categories[location.category] = [];
        }
        categories[location.category].push(location.name);
    });

    // Build HTML for each category
    section.innerHTML = '';  // Clear previous content
    Object.keys(categories).forEach(category => {
        const div = document.createElement('div');
        div.classList.add('category');

        const h2 = document.createElement('h2');
        h2.textContent = category;
        div.appendChild(h2);

        const ul = document.createElement('ul');
        categories[category].forEach((item, index) => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `${category.toLowerCase()}-${index}`;

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = item;

            li.appendChild(checkbox);
            li.appendChild(label);
            ul.appendChild(li);
        });

        div.appendChild(ul);
        section.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    generateChecklist();
})

const locations = [
    { category: "UA (Undead Asylum)", name: "Soul of a Lost Undead - Outside Asylum" },
    { category: "FS (Firelink Shrine)", name: "Firebomb - Outside Petrus" },
    { category: "FS (Firelink Shrine)", name: "Humanity - Firelink Well" },
    { category: "FS (Firelink Shrine)", name: "Soul of a Lost Undead - Outside Firelink Elevator" },
    { category: "FS (Firelink Shrine)", name: "Cracked Red Eye Orb - Firelink Elevator Drop" },
    { category: "FS (Firelink Shrine)", name: "Morning Star" },
    { category: "FS (Firelink Shrine)", name: "Talisman" },
    { category: "FS (Firelink Shrine)", name: "Homeward Bone - Firelink Elevator Drop" },
    { category: "FS (Firelink Shrine)", name: "Lloyd's Talisman" },
    { category: "FS (Firelink Shrine)", name: "Soul of a Lost Undead - Outside Frampt" },
    { category: "FS (Firelink Shrine)", name: "Soul of a Lost Undead - Above Frampt" },
    { category: "FS (Firelink Shrine)", name: "Large Soul of a Lost Undead - Graveyard 1" },
    { category: "FS (Firelink Shrine)", name: "Large Soul of a Lost Undead - Graveyard 2" },
    { category: "FS (Firelink Shrine)", name: "Zweihander" },
    { category: "FS (Firelink Shrine)", name: "Winged Spear" },
    { category: "FS (Firelink Shrine)", name: "Caduceus Round Shield" },
    { category: "FS (Firelink Shrine)", name: "Binoculars" },
    { category: "FS (Firelink Shrine)", name: "Ring of Sacrifice - Jump onto Aqueduct" },
    { category: "FS (Firelink Shrine)", name: "Soul of a Lost Undead - Aqueduct Cliff" },
    { category: "FS (Firelink Shrine)", name: "Soul of a Lost Undead - Aqueduct Entrance" },
    { category: "FS (Firelink Shrine)", name: "Soul of a Lost Undead - Sewer Rat" },
    { category: "FS (Firelink Shrine)", name: "Undead Asylum F2 West Key" },
    { category: "UB (Undead Burg)", name: "Soul of a Lost Undead - Window Corpse" },
    { category: "UB (Undead Burg)", name: "Large Soul of a Lost Undead - Barrel Drop" },
    { category: "UB (Undead Burg)", name: "Rubbish - Undead Burg" },
    { category: "UB (Undead Burg)", name: "Humanity - Undead Burg Entrance Wall" },
    { category: "UB (Undead Burg)", name: "Soul of a Lost Undead - Upper Burg Fogwall House" },
    { category: "UB (Undead Burg)", name: "Wooden Shield" },
    { category: "UB (Undead Burg)", name: "Uchigatana" },
    { category: "UB (Undead Burg)", name: "Orange Guidance Soapstone" },
    { category: "UB (Undead Burg)", name: "Residence Key" },
    { category: "UB (Undead Burg)", name: "Throwing Knife" },
    { category: "UB (Undead Burg)", name: "Light Crossbow" },
    { category: "UB (Undead Burg)", name: "Standard Bolt" },
    { category: "UB (Undead Burg)", name: "Black Firebomb - Side House Chest" },
    { category: "UB (Undead Burg)", name: "Soul of a Lost Undead - Firebomb Throwers" },
    { category: "UB (Undead Burg)", name: "Black Knight guarding Blue Tearstone Ring" },
    { category: "UB (Undead Burg)", name: "Blue Tearstone Ring" },
    { category: "UB (Undead Burg)", name: "Havel's Ring" },
    { category: "UB (Undead Burg)", name: "Crystal Lizard hidden in Barrel" },
    { category: "UB (Undead Burg)", name: "Large Soul of a Lost Undead - After Taurus" },
    { category: "UB (Undead Burg)", name: "White Sign Soapstone" },
    { category: "UB (Undead Burg)", name: "Claymore" },
    { category: "UB (Undead Burg)", name: "Soul of a Nameless Soldier - Hellkite Bridge" },
    { category: "UB (Undead Burg)", name: "Gold Pine Resin - 3x Gold Pine Resin in Chest behind Locked Door" },
    { category: "UP (Undead Parish)", name: "Black Knight in Tower" },
    { category: "UP (Undead Parish)", name: "Alluring Skull" },
    { category: "UP (Undead Parish)", name: "Mystery Key" },
    { category: "UP (Undead Parish)", name: "Large Soul of a Lost Undead - Hollow Room Rafters" },
    { category: "UP (Undead Parish)", name: "Knight Shield" },
    { category: "UP (Undead Parish)", name: "Halberd" },
    { category: "UP (Undead Parish)", name: "Basement Key" },
    { category: "UP (Undead Parish)", name: "Berenike Knight" },
    { category: "UP (Undead Parish)", name: "Fire Keeper Soul - Undead Parish" },
    { category: "UP (Undead Parish)", name: "Large Soul of a Nameless Soldier - Parish Window" },
    { category: "UP (Undead Parish)", name: "Humanity - Parish Barrel" },
    { category: "UA2 (Undead Asylum 2)", name: "Crest Shield" },
    { category: "UA2 (Undead Asylum 2)", name: "Rusted Iron Ring" },
    { category: "UA2 (Undead Asylum 2)", name: "Peculiar Doll" },
    { category: "UB (Lower Undead Burg)", name: "Twin Humanities - Lower Burg Torch Hollows" },
    { category: "UB (Lower Undead Burg)", name: "Mail Breaker" },
    { category: "UB (Lower Undead Burg)", name: "Large Soul of a Lost Undead - Barrel outside Capra" },
    { category: "UB (Lower Undead Burg)", name: "Large Soul of a Lost Undead - Hallway to Depths" },
    { category: "UB (Lower Undead Burg)", name: "Thief Mask" },
    { category: "UB (Lower Undead Burg)", name: "Black Leather Armor" },
    { category: "UB (Lower Undead Burg)", name: "Black Leather Gloves" },
    { category: "UB (Lower Undead Burg)", name: "Black Leather Boots" },
    { category: "UB (Lower Undead Burg)", name: "Target Shield" },
    { category: "UB (Lower Undead Burg)", name: "Key to Depths" },
    { category: "UB (Lower Undead Burg)", name: "Sorcerer Hat" },
    { category: "UB (Lower Undead Burg)", name: "Sorcerer Cloak" },
    { category: "UB (Lower Undead Burg)", name: "Sorcerer Gauntlets" },
    { category: "UB (Lower Undead Burg)", name: "Sorcerer Boots" },
    { category: "UB (Lower Undead Burg)", name: "Sorcerer's Catalyst" },
    { category: "DE (Depths)", name: "Large Ember" },
    { category: "DE (Depths)", name: "Sewer Chamber Key" },
    { category: "DE (Depths)", name: "Blighttown Key" },
    { category: "BT (Blighttown)", name: "Dragon Scale - Blighttown" },
    { category: "BT (Blighttown)", name: "Twin Humanities - Great Hallow Entrance" },
    { category: "BT (Blighttown)", name: "Soul of Quelaag" },
    { category: "BT (Blighttown)", name: "Sorcery: Remedy" },
    { category: "BT (Blighttown)", name: "Key to New Londo Ruins" },
    { category: "VotD (Valley of the Drakes)", name: "Large Soul of a Nameless Soldier - New Londo Door" },
    { category: "VotD (Valley of the Drakes)", name: "Astora's Straight Sword" },
    { category: "VotD (Valley of the Drakes)", name: "Dragon Crest Shield" },
    { category: "VotD (Valley of the Drakes)", name: "Soul of a Proud Knight - Undead Dragon" },
    { category: "VotD (Valley of the Drakes)", name: "Humanity - Corpse in Small Cave" },
    { category: "VotD (Valley of the Drakes)", name: "Brigand Hood" },
    { category: "VotD (Valley of the Drakes)", name: "Brigand Armor" },
    { category: "VotD (Valley of the Drakes)", name: "Brigand Gauntlets" },
    { category: "VotD (Valley of the Drakes)", name: "Brigand Trousers" },
    { category: "VotD (Valley of the Drakes)", name: "Spider Shield - Brigand Armor Set" },
    { category: "VotD (Valley of the Drakes)", name: "Red Tearstone Ring" },
    { category: "DB (Darkroot Basin)", name: "Crystal Lizard near Hunter Set" },
    { category: "DB (Darkroot Basin)", name: "Leather Armor" },
    { category: "DB (Darkroot Basin)", name: "Leather Gloves" },
    { category: "DB (Darkroot Basin)", name: "Leather Boots" },
    { category: "DB (Darkroot Basin)", name: "Longbow" },
    { category: "DB (Darkroot Basin)", name: "Feather Arrow" },
    { category: "DB (Darkroot Basin)", name: "Grass Crest Shield" },
    { category: "DB (Darkroot Basin)", name: "Black Knight near Bonfire" },
    { category: "DB (Darkroot Basin)", name: "Knight Helm" },
    { category: "DB (Darkroot Basin)", name: "Knight Armor" },
    { category: "DB (Darkroot Basin)", name: "Knight Gauntlets" },
    { category: "DB (Darkroot Basin)", name: "Knight Leggings" },
    { category: "DG (Darkroot Gardens)", name: "Soul of the Moonlight Butterfly" },
    { category: "DG (Darkroot Gardens)", name: "Divine Ember" },
    { category: "DG (Darkroot Gardens)", name: "Stone Helm" },
    { category: "DG (Darkroot Gardens)", name: "Stone Armor" },
    { category: "DG (Darkroot Gardens)", name: "Stone Gauntlets" },
    { category: "DG (Darkroot Gardens)", name: "Stone Leggings" },
    { category: "DG (Darkroot Gardens)", name: "Enchanted Ember" },
    { category: "DG (Darkroot Gardens)", name: "Best Boi Loot" },
    { category: "DG (Darkroot Gardens)", name: "Soul of Sif" },
    { category: "SF (Sen's Fortress)", name: "Divine Blessing - Sen's Fortress" },
    { category: "SF (Sen's Fortress)", name: "Rare Ring of Sacrifice - Sen's Fortress" },
    { category: "SF (Sen's Fortress)", name: "Large Titanite Shard - Sen's Fortress Trap Chest" },
    { category: "SF (Sen's Fortress)", name: "Ring of Steel Protection" },
    { category: "SF (Sen's Fortress)", name: "Lightning Spear" },
    { category: "SF (Sen's Fortress)", name: "Flame Stoneplate Ring" },
    { category: "SF (Sen's Fortress)", name: "Ricard's Rapier" },
    { category: "SF (Sen's Fortress)", name: "Sniper Crossbow" },
    { category: "SF (Sen's Fortress)", name: "Cage Key" },
    { category: "SF (Sen's Fortress)", name: "Core of an Iron Golem" },
    { category: "AL (Anor Londo)", name: "Demon Titanite - Anor Londo Giants" },
    { category: "AL (Anor Londo)", name: "Crystal Halberd" },
    { category: "AL (Anor Londo)", name: "Twinkling Titanite - Anor Londo" },
    { category: "AL (Anor Londo)", name: "Demon Titanite - Anor Londo Elevator" },
    { category: "AL (Anor Londo)", name: "Divine Blessing - Anor Londo Rafters" },
    { category: "AL (Anor Londo)", name: "Ring of the Sun's Firstborn" },
    { category: "AL (Anor Londo)", name: "Sorcery: Great Magic Weapon" },
    { category: "AL (Anor Londo)", name: "Black Iron Helm" },
    { category: "AL (Anor Londo)", name: "Black Iron Armor" },
    { category: "AL (Anor Londo)", name: "Black Iron Gauntlets" },
    { category: "AL (Anor Londo)", name: "Black Iron Leggings" },
    { category: "AL (Anor Londo)", name: "Greatsword" },
    { category: "AL (Anor Londo)", name: "Black Iron Greatshield" },
    { category: "AL (Anor Londo)", name: "Havel's Helm" },
    { category: "AL (Anor Londo)", name: "Havel's Armor" },
    { category: "AL (Anor Londo)", name: "Havel's Gauntlets" },
    { category: "AL (Anor Londo)", name: "Havel's Leggings" },
    { category: "AL (Anor Londo)", name: "Dragon Tooth" },
    { category: "AL (Anor Londo)", name: "Havel's Greatshield" },
    { category: "AL (Anor Londo)", name: "Occult Club" },
    { category: "AL (Anor Londo)", name: "Gold Coin - Anor Londo Mimic" },
    { category: "AL (Anor Londo)", name: "Silver Coin - Anor Londo Mimic" },
    { category: "AL (Anor Londo)", name: "Demon Titanite - Anor Londo Bedroom" },
    { category: "AL (Anor Londo)", name: "Silver Knight Helm" },
    { category: "AL (Anor Londo)", name: "Silver Knight Armor" },
    { category: "AL (Anor Londo)", name: "Silver Knight Gauntlets" },
    { category: "AL (Anor Londo)", name: "Silver Knight Leggings" },
    { category: "AL (Anor Londo)", name: "Titanite Chunk - near Giant Blacksmith" },
    { category: "AL (Anor Londo)", name: "Hawk Ring" },
    { category: "AL (Anor Londo)", name: "Soul of Ornstein" },
    { category: "AL (Anor Londo)", name: "Soul of Smough" },
    { category: "AL (Anor Londo)", name: "Lordvessel" },
    { category: "AL (Anor Londo)", name: "Soul of Gwyndolin" },
    { category: "AL (Anor Londo)", name: "Brass Helm" },
    { category: "AL (Anor Londo)", name: "Brass Armor" },
    { category: "AL (Anor Londo)", name: "Brass Gauntlets" },
    { category: "AL (Anor Londo)", name: "Brass Leggings" },
    { category: "AL (Anor Londo)", name: "Miracle: Sunlight Blade" },
    { category: "PW (Painted World)", name: "Painting Guardian Hood" },
    { category: "PW (Painted World)", name: "Painting Guardian Robe" },
    { category: "PW (Painted World)", name: "Painting Guardian Gloves" },
    { category: "PW (Painted World)", name: "Painting Guardian Waistcloth" },
    { category: "PW (Painted World)", name: "Annex Key" },
    { category: "PW (Painted World)", name: "Soul of Priscilla" },
    { category: "PW (Painted World)", name: "Dark Ember" },
    { category: "NL (New Londo)", name: "Fire Keeper Soul - New Londo" },
    { category: "NL (New Londo)", name: "Key to the Seal" },
    { category: "NL (New Londo)", name: "Very Large Ember" },
    { category: "NL (New Londo)", name: "Titanite Chunk - Chest before Four Kings" },
    { category: "NL (New Londo)", name: "Titanite Chunk - Chest behind Illusory Wall" },
    { category: "TA (The Abyss)", name: "Bequeathed Lord Soul Shard (Four Kings)" },
    { category: "DA (Duke's Archives)", name: "Broken Pendant" },
    { category: "DA (Duke's Archives)", name: "Twinkling Titanite - Archives Chest" },
    { category: "DA (Duke's Archives)", name: "Crystal Knight Shield" },
    { category: "DA (Duke's Archives)", name: "Archive Tower Cell Key" },
    { category: "DA (Duke's Archives)", name: "Archive Prison Extra Key" },
    { category: "DA (Duke's Archives)", name: "Archive Tower Giant Door Key" },
    { category: "DA (Duke's Archives)", name: "Avelyn" },
    { category: "DA (Duke's Archives)", name: "Twinkling Titanite - Archives Chest 2" },
    { category: "DA (Duke's Archives)", name: "Sorcery: Strong Magic Shield" },
    { category: "DA (Duke's Archives)", name: "Enchanted Falchion" },
    { category: "DA (Duke's Archives)", name: "Archive Tower Giant Cell Key" },
    { category: "DA (Duke's Archives)", name: "Crystal Ember" },
    { category: "DA (Duke's Archives)", name: "Six-Eyed Helm of the Channelers" },
    { category: "DA (Duke's Archives)", name: "Robe of the Channelers" },
    { category: "DA (Duke's Archives)", name: "Gauntlets of the Channelers" },
    { category: "DA (Duke's Archives)", name: "Waistcloth of the Channelers" },
    { category: "DA (Duke's Archives)", name: "Prism Stone - Duke's Archives" },
    { category: "DA (Duke's Archives)", name: "Large Magic Ember" },
    { category: "CC (Crystal Cave)", name: "Bequeathed Lord Soul Shard (Seath)" },
    { category: "DR (Demon Ruins)", name: "Gold-Hemmed Black Hood" },
    { category: "DR (Demon Ruins)", name: "Gold-Hemmed Black Cloak" },
    { category: "DR (Demon Ruins)", name: "Gold-Hemmed Black Gloves" },
    { category: "DR (Demon Ruins)", name: "Gold-Hemmed Black Skirt" },
    { category: "DR (Demon Ruins)", name: "Chaos Flame Ember" },
    { category: "DR (Demon Ruins)", name: "Large Flame Ember" },
    { category: "DR (Demon Ruins)", name: "Demon's Catalyst" },
    { category: "DR (Demon Ruins)", name: "Orange Charred Ring" },
    { category: "LI (Lost Izalith)", name: "Soul of a Great Hero - Lost Izalith" },
    { category: "LI (Lost Izalith)", name: "Red Titanite Slab - Chaos Eater Pit" },
    { category: "LI (Lost Izalith)", name: "Pyromancy: Chaos Fire Whip" },
    { category: "LI (Lost Izalith)", name: "Lord Soul (Bed of Chaos)" },
    { category: "TC (The Catacombs)", name: "Darkmoon Seance Ring" },
    { category: "TC (The Catacombs)", name: "Rite of Kindling" },
    { category: "TotG (Tomb of Giants)", name: "Large Divine Ember" },
    { category: "TotG (Tomb of Giants)", name: "White Titanite Chunk - Drop from Halberd-wielding Black Knight" },
    { category: "TotG (Tomb of Giants)", name: "Lord Soul (Nito)" },
    { category: "KoFF (Kiln of the First Flame)", name: "Soul of Gwyn, Lord of Cinder" }
];

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    
    // Load saved state from localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === "true") {
            checkbox.checked = true;
        }

        // Save state when clicked
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const resetButton = document.getElementById("reset-button");

    // Load saved state from localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === "true") {
            checkbox.checked = true;
        }

        // Save state when clicked
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Reset button functionality
    resetButton.addEventListener("click", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Uncheck all checkboxes
            localStorage.removeItem(checkbox.id); // Clear localStorage for the checkbox
        });
    });
});
