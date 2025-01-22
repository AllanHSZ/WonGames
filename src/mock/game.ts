import { ENUM_GAME_RATING } from 'graphql/generated/globalTypes'
import { QueryGameBySlug_Game } from 'graphql/generated/QueryGameBySlug'
import { Query_Games } from 'graphql/generated/QueryHome'
import Highlight from './highlight'

export const SimpleGameMock: { [key: string]: Query_Games } = {
  legacyOfKain: {
    id: 'legacyOfKain',
    name: 'Legacy of Kain™ Soul Reaver 1&2 Remastered',
    slug: 'legacy-of-kain',
    cover: {
      url: 'https://images.gog-statics.com/1f281fb4ad6546c6c928d19b1052d5b36deaf30a3fd8c8044338525df7bfc0e9_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Aspyr' }, { name: 'Crystal Dynamics' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Action' },
      { name: 'Adventure' },
      { name: 'Fantasy' }
    ],
    price: 18.2
  },
  rogueWaters: {
    id: 'rogueWaters',
    name: 'Rogue Waters',
    slug: 'rogue-waters',
    cover: {
      url: 'https://images.gog-statics.com/22ce35b7c57a4ac13c93fbb8539fb14d708c0b3f103c3f6303eb9076bc5651b7_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Ice Code Games' }],
    platforms: [{ name: 'windows' }, { name: 'linux' }],
    categories: [
      { name: 'Action' },
      { name: 'Adventure' },
      { name: 'Fantasy' }
    ],
    price: 18.2
  },
  gris: {
    id: 'gris',
    name: 'GRIS',
    slug: 'gris',
    cover: {
      url: 'https://images.gog-statics.com/2711f1155f42d68a57c9ad2fb755a49839e6bc17a22b4a0bc262b0e35cb73115_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Nomada Studio' }, { name: 'Devolver Digital' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Adventure' },
      { name: 'Puzzle' },
      { name: 'Platformer' }
    ],
    price: 9.61
  },
  dustborn: {
    id: 'dustborn',
    name: 'Dustborn',
    slug: 'dustborn',
    cover: {
      url: 'https://images.gog-statics.com/eaf3a1fdb7735fec4d3c418de0881778cb02e1a3d9d9e92e6a396febba4bb393_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Red Thread Games' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Action' },
      { name: 'Adventure' },
      { name: 'Exploration' }
    ],
    price: 0
  },
  nightShiftNurses: {
    id: 'nightShiftNurses',
    name: 'Night Shift Nurses',
    slug: 'night-shift-nurses',
    cover: {
      url: 'https://images.gog-statics.com/9fddf5e246ffbaf1cd721a8db5e5a7e44687a81ffe70ef7880886879a1d52180_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Shiravune' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Simularion' },
      { name: 'Visual Novel' },
      { name: 'Narrative' }
    ],
    price: 12.26
  },
  symphonia: {
    id: 'symphonia',
    name: 'Symphonia',
    slug: 'symphonia',
    cover: {
      url: 'https://images.gog-statics.com/ed9b440c4aee73be129163823a14b8442c7bcabe7b7cd63c1c8c91bb67864873_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Sunny Peak' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Action' },
      { name: 'Adventure' },
      { name: 'Platformer' }
    ],
    price: 0
  },
  theWitcher3WildHunt: {
    id: 'theWitcher3WildHunt',
    name: 'The Witcher 3: Wild Hunt',
    slug: 'the-witcher-3-wild-hunt',
    cover: {
      url: 'https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'CD PROJEKT RED' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Role-playing' },
      { name: 'Adventure' },
      { name: 'Fantasy' }
    ],
    price: 26.6
  },
  firewatch: {
    id: 'firewatch',
    name: 'Firewatch',
    slug: 'firewatch',
    cover: {
      url: 'https://images.gog-statics.com/ea5dfc6d442698e70d3a5a0bf65ea17eb2703c4d727aa09f8b20f07bbc227b48_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Campo Santo' }],
    platforms: [{ name: 'windows' }, { name: 'linux' }],
    categories: [
      { name: 'Adventure' },
      { name: 'Simularion' },
      { name: 'Mystery' }
    ],
    price: 0
  },
  fallout4: {
    id: 'fallout4',
    name: 'Fallout 4: Game of the Year Edition',
    slug: 'fallout-4-game-of-the-year-edition',
    cover: {
      url: 'https://images.gog-statics.com/8b074a51347f0377d0a60ac241e8c5535d829540fe9c2e7ddf9277e4cc6d53d1_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Nomada Studio' }, { name: 'Devolver Digital' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Action' },
      { name: 'Role-playing' },
      { name: 'Open World' }
    ],
    promotionalPrice: 9.82,
    price: 24.56
  },
  tombRaiderGoty: {
    id: 'tombRaiderGoty',
    name: 'Tomb Raider GOTY',
    slug: 'tomb-raider-goty',
    cover: {
      url: 'https://images.gog-statics.com/74ef44a280dd89f7764b2e31a3356cb7fa90f89a0227038191e2714ccfd3cbdb_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Crystal Dynamics ' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Action' },
      { name: 'Adventure' },
      { name: 'Survival' }
    ],
    promotionalPrice: 1.19,
    price: 7.98
  },
  citizenSleeper2StarwardVector: {
    id: 'citizenSleeper2StarwardVector',
    name: 'Citizen Sleeper 2: Starward Vector',
    slug: 'citizen-sleeper-2-starward-vector',
    cover: {
      url: 'https://images.gog-statics.com/f8d5056938166764355f543d30ffafe5c4621170c8df4ba2cd1b8e144282d653_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Jump Over The Age' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Role-playing' },
      { name: 'Adventure' },
      { name: 'Sci-fi' }
    ],
    price: 0
  },
  starWarsEpisode1JediPowerBattles: {
    id: 'starWarsEpisode1JediPowerBattles',
    name: 'Star Wars™: Episode I: Jedi Power Battles™',
    slug: 'star-wars-episode-i-jedi-power-battles',
    cover: {
      url: 'https://images.gog-statics.com/b759322dd8b875a57e5eba85e919f697cf03e7185ccfe30a6f5b31f247d61598_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Aspyr' }],
    platforms: [{ name: 'windows' }],
    categories: [{ name: 'Action' }, { name: 'Adventure' }, { name: 'Sci-fi' }],
    promotionalPrice: 11.03,
    price: 12.26
  },
  ultrakill: {
    id: 'ultrakill',
    name: 'ULTRAKILL',
    slug: 'ultrakill',
    cover: {
      url: 'https://images.gog-statics.com/54878b7e9d8a40fd4d88e9f02bdb8005c8b5cf31c07475e1e9511e552b9c9bc6_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Arsi "Hakita" Patala' }],
    categories: [{ name: 'Shooter' }, { name: 'Action' }, { name: 'Sci-fi' }],
    platforms: [{ name: 'windows' }],
    price: 15.99
  },
  aftermath: {
    id: 'aftermath',
    name: 'Aftermath',
    slug: 'aftermath',
    cover: {
      url: 'https://images.gog-statics.com/a4977e0d4562be078d9a7d4d54c5e1f00a70b81239b18f3697a2a1a677e39b2a_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'ONE-O-ONE GAMES' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Action' },
      { name: 'Adventure' },
      { name: 'Open World' }
    ],
    price: 0
  },
  anAmazingWizardDemo: {
    id: 'anAmazingWizardDemo',
    name: 'An Amazing Wizard Demo',
    slug: 'an-amazing-wizard-demo',
    cover: {
      url: 'https://images.gog-statics.com/b1db866cb3263bae467b5983f1e914b6a95e1abf89e74b46035a322d6746ddf4_product_tile_extended_432x243.webp'
    },
    developers: [{ name: 'Jump Over The Age' }],
    platforms: [{ name: 'windows' }, { name: 'linux' }],
    categories: [
      { name: 'Action' },
      { name: 'Metroidvania' },
      { name: 'Roguelike' }
    ],
    price: 0
  },
  cyberpunk2077: {
    id: 'cyberpunk2077',
    name: 'Cyberpunk 2077',
    slug: 'cyberpunk-2077',
    cover: {
      url: 'https://images.gog-statics.com/90b287f4b41f72d83b72fc6bb282f423e7672fc9709351c8be4702ea502b7d63_bg_crop_1680x655.jpg'
    },
    developers: [{ name: 'CD PROJEKT RED' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Role-playing' },
      { name: 'Action' },
      { name: 'Sci-fi' }
    ],
    price: 40.91
  },
  boxville2Demo: {
    id: 'boxville2Demo',
    name: 'Boxville 2 Demo',
    slug: 'boxville-2-demo',
    cover: {
      url: 'https://images.gog-statics.com/528eb04593c9f305e8f4669d719fd43d48bfcab99d78d2cd51cd27b729870e34_bg_crop_1920x655.jpg'
    },
    developers: [{ name: 'ONE-O-ONE GAMES' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Adventure' },
      { name: 'Point-and-click' },
      { name: 'Puzzle' }
    ],
    price: 0
  },
  tombRaiderIvViRemastered: {
    id: 'tombRaiderIvViRemastered',
    name: 'Tomb Raider IV-VI Remastered',
    slug: 'tomb-raider-iv-vi-remastered',
    cover: {
      url: 'https://images.gog-statics.com/7948a41a05c5977046373e9748f87fde1ae18d1964f5cd8627458fd956cc4909_bg_crop_1680x655.jpg'
    },
    developers: [{ name: 'Aspyr' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Action' },
      { name: 'Adventure' },
      { name: 'Exploration' }
    ],
    price: 16.38
  },
  baldursGate3: {
    id: 'baldursGate3',
    name: "Baldur's Gate 3",
    slug: 'baldurs-gate-iii',
    cover: {
      url: 'https://images.gog-statics.com/6142569dc721f23b35277e83ac93173e472e36215f8c7b71dc005b132bda3319_bg_crop_1680x655.jpg'
    },
    developers: [{ name: 'Larian Studios' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Role-playing' },
      { name: 'Turn-based' },
      { name: 'Fantasy' }
    ],
    price: 40.93
  },
  stalker2: {
    id: 'stalker2',
    name: 'S.T.A.L.K.E.R. 2',
    slug: 'stalker-2',
    cover: {
      url: 'https://images.gog-statics.com/9424991433b75669ae54d96d9b963e81d004db27ce4398c3dd9cfcb898c56d1c_bg_crop_1680x655.jpg'
    },
    developers: [{ name: 'GSC Game World' }],
    platforms: [{ name: 'windows' }],
    categories: [
      { name: 'Action' },
      { name: 'Adventure' },
      { name: 'Survival' }
    ],
    price: 48.94
  },
  dishonored2: {
    id: 'dishonored2',
    name: 'Dishonored 2',
    slug: 'dishonored=2',
    cover: {
      url: 'https://images.gog-statics.com/289e928b26e5abe852b36cad737d6ec7fc6a86e0e67236c504d288f7ae9e9e57_bg_crop_1680x655.jpg'
    },
    developers: [{ name: 'Arkane Studios' }],
    platforms: [{ name: 'windows' }, { name: 'linux' }],
    categories: [{ name: 'Action' }, { name: 'FPP' }, { name: 'Stealth' }],
    price: 18.41
  }
}

export const GameMock: { [key: string]: QueryGameBySlug_Game } = {
  [SimpleGameMock.legacyOfKain.slug]: {
    id: SimpleGameMock.legacyOfKain.id,
    name: SimpleGameMock.legacyOfKain.name,
    short_description: 'Celebrate Soul Reaver’s 25th Anniversary',
    price: SimpleGameMock.legacyOfKain.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '12-10-2024',
    gallery: [
      {
        src: 'https://images.gog-statics.com/b00796ebafc6ceee533e3cdc0e7d5e4220a3dd90477ba01d9f5bc9d3fd428950.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/b7dd56d7d37917ab494bde4cde7ec4551388ef5c362b0aaa3b026a44be520927.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/197f5f9b165c2d1eb6abbde596d46dd99476d59786285a1f0913ba1f3a65e95a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/f63ac02049ea45adb7d5f02e220a60003a0a7c83931013344ad479e71d235897.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/437998148be4fc7428ec8536cf1c573f8d052dd39a3497543561bf703c192349.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.legacyOfKain.cover,
    developers: SimpleGameMock.legacyOfKain.developers,
    platforms: SimpleGameMock.legacyOfKain.platforms,
    categories: SimpleGameMock.legacyOfKain.categories,
    publisher: { name: 'Aspyr' },
    description: `<strong>Celebrate Soul Reaver’s 25th Anniversary</strong><br>
Experience the epic conflict of Kain and Raziel in original form or with remastered graphics.
<br><br><strong>Included Game Titles</strong><br>
Legacy of Kain: Soul Reaver
<br>
Legacy of Kain: Soul Reaver 2
<br><br><strong>Experience the Legendary Narrative</strong><br>
Centuries after your former master, Kain, betrays and executes you, you rise again and embark on a relentless quest for revenge. 
<br><br><strong>Wield the Powers of a Wraith</strong><br>
Slay your former vampire brethren with your claws, bolts of telekinetic energy, and the elemental Wraith Blade. Grow stronger by devouring the souls of your enemies.
<br><br><strong>Shift Between Realms</strong><br>
The Elder God has granted you the ability to shift between the Spectral and Material Realms. Traverse the realms to solve puzzles, reveal new paths, and defeat your foes.
            <p class="description__copyrights">
            Legacy of Kain: Soul Reaver 1-2 Remastered © 2024 Crystal Dynamics group of companies. All rights reserved. LEGACY OF KAIN, SOUL REAVER, SOUL REAVER 2, LEGACY OF KAIN: SOUL REAVER 1-2 REMASTERED, CRYSTAL DYNAMICS, and the CRYSTAL DYNAMICS logo are trademarks of the Crystal Dynamics group of companies. © 2024 Aspyr Media, Inc. Aspyr is a registered trademark of Aspyr Media, Inc., and the Aspyr star logo is a trademark of Aspyr Media. All other marks and logos are the property of their respective owners. All rights reserved.
        </p>`
  },
  [SimpleGameMock.rogueWaters.slug]: {
    id: SimpleGameMock.rogueWaters.id,
    name: SimpleGameMock.rogueWaters.name,
    short_description: 'Celebrate Soul Reaver’s 25th Anniversary',
    price: SimpleGameMock.rogueWaters.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '12-10-2024',
    gallery: [
      {
        src: 'https://images.gog-statics.com/b00796ebafc6ceee533e3cdc0e7d5e4220a3dd90477ba01d9f5bc9d3fd428950.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/b7dd56d7d37917ab494bde4cde7ec4551388ef5c362b0aaa3b026a44be520927.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/197f5f9b165c2d1eb6abbde596d46dd99476d59786285a1f0913ba1f3a65e95a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/f63ac02049ea45adb7d5f02e220a60003a0a7c83931013344ad479e71d235897.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/437998148be4fc7428ec8536cf1c573f8d052dd39a3497543561bf703c192349.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.rogueWaters.cover,
    developers: SimpleGameMock.rogueWaters.developers,
    publisher: { name: 'Aspyr' },
    categories: SimpleGameMock.rogueWaters.categories,
    platforms: SimpleGameMock.rogueWaters.platforms,
    description: `<p><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/rogue_waters_game_soundtrack/new_finishers-2e-gif-11f55.mp4" type="video/mp4"></video></p><h4>BECOME THE PIRATE CAPTAIN</h4><p>
&nbsp;
</p><p>
Set sail as <i><strong>Captain Cutter</strong></i>, a pirate caught in a deadly struggle for power and vengeance. Navigate dangerous waters, unleash mythical sea creatures, and outwit enemies as you chase legendary treasure and confront dark secrets.
</p><p>
&nbsp;
</p><ul><li>Embark on a journey of loyalty, betrayal, and revenge, as you unravel the mysteries of the <i>Sea Shepherd prophecy</i> and face the immortal <i><strong>Captain Blackbone</strong></i>.</li><li>Use your <strong>Pirate Cave</strong><i>(HUB)</i> to <strong>equip ship upgrades &amp; crew members</strong> before each run.</li><li>Each run generates new encounters, requiring careful navigation as you work your way toward Captain Blackbone.</li><li>Enjoy a rich, story-driven adventure across 3 acts, with endless replayability.</li></ul><p>
&nbsp;
</p><p><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/rogue_waters_game_soundtrack/new_fun_with_ropes-2e-gif-34480.mp4" type="video/mp4"></video></p><h4>ASSEMBLE YOUR CREW</h4><p>
&nbsp;
</p><p>
Recruit and grow your pirate crew, discovering their hidden potential as you lead them into battle. It's your responsibility to mold them into the legendary pirates they were destined to be.
</p><p>
&nbsp;
</p><ul><li>Recruit from <strong>6 unique classes</strong>, each with distinct abilities and playstyles for your ship’s crew.</li><li>After each run, <strong>upgrade your crew’s skills</strong> to increase their effectiveness.</li><li><strong>Damage persists across runs</strong>, requiring you to swap out crew members to allow them time to heal.</li></ul><p>
&nbsp;
</p><p><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/rogue_waters_game_soundtrack/new_strategic-2e-gif-3b237.mp4" type="video/mp4"></video></p><h4>EVER-CHANGING LAND AND SEA</h4><p>
&nbsp;
</p><p>
Face new challenges as the game world shifts procedurally with each run, offering fresh secrets, combat scenarios, and treasures to discover.
</p><p>
&nbsp;
</p><ul><li>Encounters feature diverse pirate factions and enemy types—<i>choose your battles wisely</i>.</li><li>Your crew will engage enemies on <strong>ships and land</strong> alike.</li><li><strong>Visit shops</strong> to heal, upgrade crew, buy cannons, and repair your ship.</li><li>You can <strong>extort shops for loot</strong>, but it’ll lead to a fight.</li></ul><p>
&nbsp;
</p><p><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/rogue_waters_game_soundtrack/new_seabattle-2e-gif-bb2b2.mp4" type="video/mp4"></video></p><h4>TURN THE TIDES</h4><p>
&nbsp;
</p><p>
Customize your naval encounters with cannons and ship artillery. Unleash powerful shots during naval combat to destroy enemy ship modules and gain the upper hand in boarding fights.
</p><p>
&nbsp;
</p><ul><li>Encounters begin with Sea Battles where you can use cannons to target key areas of enemy ships.</li><li>Both your ship and the enemy's have distinct buffs that can be destroyed.</li><li>Crew members can be targeted and killed during battle, so defend your ship and crew before boarding.</li></ul><p>
&nbsp;
</p><p><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/rogue_waters_game_soundtrack/new_combination-2e-gif-2042a.mp4" type="video/mp4"></video></p><h4>THOUGHT-PROVOKING TACTICS</h4><p>
&nbsp;
</p><p>
Experience a fresh take on turn-based tactical combat that replicates the visceral intensity of cloak-and-dagger duels. Use the environment to gain the upper hand like never before.
</p><p>
&nbsp;
</p><ul><li>The <strong>boarding phase</strong> involves hand-to-hand combat where your crew faces off against enemies.</li><li>Use your crew's unique abilities to <strong>maneuver and pin enemies against obstacles</strong> for fatal damage.</li><li><strong>Leverage the environment</strong> by pushing enemies into spikes, grabbing one-time weapons, or swinging into position with ropes.</li></ul><p>
&nbsp;
</p><p><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/rogue_waters_game_soundtrack/new_monsters-2e-gif-302b6.mp4" type="video/mp4"></video></p><h4>SUMMON CREATURES FROM THE DEEP</h4><p>
&nbsp;
</p><p>
Legendary sea creatures, once thought to be myths, roam the oceans of <i>Rogue Waters</i>. Free them from captivity and gain their trust to summon them in battle.
</p><p>
&nbsp;
</p><p>
Summon 3 sea monsters to assist in the boarding phase:
</p><p>
&nbsp;
</p><ul><li><strong>The Kraken</strong> crushes nearby enemies.</li><li><strong>The Mermaid</strong> disrupts and pushes enemies in any direction.</li><li><strong>The Giant Snail</strong> drops a deadly spiked obstacle on the deck.</li></ul><p>
&nbsp;
</p><p><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/rogue_waters_game_soundtrack/new_rogue_story-2e-gif-65cfd.mp4" type="video/mp4"></video></p><h4>A ROGUE-LITE PIRATE ADVENTURE</h4><p>
Each run resets your equipment and items, but unlocks permanent upgrades for your crew, ship, and Captain Cutter, allowing you to grow stronger with every battle.
</p><p>
&nbsp;
</p><p>
Items and upgrades reset between each run:
</p><p>
&nbsp;
</p><ul><li><strong>Personal items</strong> (character equipment): additional weapons, attack modifiers, and side upgrades for abilities.</li><li><strong>Shipboard weapons</strong> (cannons and similar items): each new run begins with a usable, basic starter set.</li><li><strong>Ship modules</strong> reset as well.</li></ul><p>
&nbsp;
</p><p>
Each run permanently increases your progress:
</p><p>
&nbsp;
</p><ul><li><strong>Unlock skill trees</strong> for crew members and Captain Cutter.</li><li>Acquire <strong>ship and port facility upgrades</strong> in the Pirate Cave (HUB).</li></ul><p class="description__copyrights">
            Rogue Waters © ® 2024 Ice Code Games SA. Published by Tripwire Presents. Tripwire Presents® and Tripwire® are Registered Trademarks owned by Tripwire Interactive LLC. All rights reserved.
        </p>`
  },
  [SimpleGameMock.gris.slug]: {
    id: SimpleGameMock.gris.id,
    name: SimpleGameMock.gris.name,
    short_description:
      'Gris is a hopeful young girl lost in her own world, dealing with a painful experience in her life',
    price: SimpleGameMock.gris.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '12-13-2018',
    gallery: [
      {
        src: 'https://images.gog-statics.com/866d80a214e6474eef2f50f350d58ed9abff6572eba587b0b54ef90cf22d143d.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/79649dfcabf5755320d6c53f4cbe091fa68274041a0ad7dff932ee592be7dc63.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/09e0dd3ff7864f4c5a1eb2c9ac0de6175d99b67712df6ac746865284631ce12b.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/b74c81e4c16a5409bd595e5adf744c7f3c73d1e950d8a7680e3c67b401d3fd29.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/a5a17126d9d9ca8652c390f51b0da28f010245bbc067eeeb717cba5285784b5c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/e5b0f73435262c6f43211b02ff3b465f1f5d0a15c3b6a023b53ded7ddb992cf0.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/7bc918ddc951b4778f89b6b0311edcac5c9eb282b0650d94871dba402475a1a6.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/326a52a83dbb4df7a43633f8d7b15301db206f1ded9602030ad4a21c38ea303d.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/b19433cd9278013d99a933fa01f60020100f3f58c6f9c44ed5e82a021378a494.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.gris.cover,
    developers: SimpleGameMock.gris.developers,
    publisher: { name: 'Nomada Studio' },
    categories: SimpleGameMock.gris.categories,
    platforms: SimpleGameMock.gris.platforms,
    description: `Gris is a hopeful young girl lost in her own world, dealing with a painful experience in her life. Her journey through sorrow is manifested in her dress, which grants new abilities to better navigate her faded reality. As the story unfolds, Gris will grow emotionally and see her world in a different way, revealing new paths to explore using her new abilities.
<br><br>
GRIS is a serene and evocative experience, free of danger, frustration or death. Players will explore a meticulously designed world brought to life with delicate art, detailed animation, and an elegant original score. Through the game light puzzles, platforming sequences, and optional skill-based challenges will reveal themselves as more of Gris’s world becomes accessible.

            
            <p class="description__copyrights">
            Copyright 2018 Nomada Studio. All Rights Reserved.
        </p>`
  },
  [SimpleGameMock.dustborn.slug]: {
    id: SimpleGameMock.dustborn.id,
    name: SimpleGameMock.dustborn.name,
    short_description:
      'Dustborn is a single-player, story-driven action-adventure game about hope, love, friendships, robots…and the power of words.',
    price: SimpleGameMock.dustborn.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '08-20-2024',
    gallery: [
      {
        src: 'https://images.gog-statics.com/272ab92752be78981232dbdc9b704b852e0670324a75aad5be804e8842952750.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/e5bdd1d87e9c5a0d0d061686f7f31797dce90095dba1cdbbdaafbced1c40d338.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/0f6d1dfeb106e8ae338d4f6695d4646762753909d0757661bef387164b14fe89.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/aaba198137480fe1740bdc68af07544336a25c94569c82804239d74b9cdf64c3.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/560859a94e089a4f1afe088bd79c359a404ddbf7defc8b38a00daaffe67fa24a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/8986c726698730c153794615853cbc984c568217d6d7ed3133008b19a2f56f72.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/25e373950c352188c80712a41fd19b0edfa7d3aa44d0b7060342fd3f7026f3ed.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.dustborn.cover,
    developers: SimpleGameMock.dustborn.developers,
    publisher: { name: 'Red Thread Games' },
    categories: SimpleGameMock.dustborn.categories,
    platforms: SimpleGameMock.dustborn.platforms,
    description: `<img class="bb_img" src="https://items.gog.com/dustborn/dustborn_gog_keyart_header_transparent-0b3cc.png"><br><br>
Dustborn is a single-player, story-driven action-adventure game about hope, love, friendships, robots…and the power of words.
<br><br>
You play Pax: exile, con-artist, Anomal — with the ability to weaponize language. Looking for a new life and a way out, Pax has been hired to transport an important package from Pacifica to Nova Scotia, across the Justice-controlled American Republic. Sounds like a legit reason for a road-trip, right?
<br><br>
So pack your bags, assemble a crew with their own peculiar powers, and get ready to travel the country!
<br><br>
Explore the stunning Neo-Western landscapes of an alternate history America on a robot-driven tour bus, and stop at a dozen locations along the road to build your crew, manage relationships, complete missions, and face increasingly difficult challenges. But the people you stole the package from want it back, and the authoritarian Justice is hot on your heels, so don’t forget to pack your baseball bat!
<br><br>
(And, oh yeah, you’re travelling undercover as a punk-rock band, so you’ll definitely need to brush up on your musical skills before your next gig.)
<br><br>
At the end of the road lies salvation…but to get there, you’ll need to cross an entire continent.
<br><br><h4>THE POWER OF WORDS</h4><br>
Words have power. Like, actual power. Fight with Shouts and use Vox in conversations to manipulate people and talk your way out of hairy situations. Craft new words, and learn to wield a lingual arsenal against enemies...and friends.
<br><br><h4>A ROAD TRIP ACROSS A DIVIDED CONTINENT</h4><br><img class="bb_img" src="https://items.gog.com/dustborn/dustborn_gog_map-25463.png"><br>
On the road across an alternate history America, you’ll stop at iconic locations, take on unexpected assignments, meet a colorful cast of characters, enlist new crew members, and evade (or fight) your pursuers. See beautiful sights along the highway, rendered in a colorful graphic-novel-inspired art style that brings stunning 2D illustrations to 3D life.
<br><br><h4>A DIVERSE CAST OF CHARACTERS</h4><br><img class="bb_img" src="https://items.gog.com/dustborn/DUSTBORN_CREW-bb6c2.png"><br>
Your crew is your (found) family. Round up, manage and lean on a motley mob of misfits with peculiar powers, compelling stories and clashing personalities. Branching dialogues lead to choices that shape relationships and change how your crew feels about themselves and others.
<br><br><h4>GAMEPLAY AS VARIED AS THE LANDSCAPE</h4><br>
In each location you’ll explore, investigate and chat with the people you meet, use the crew to overcome challenges, craft new Shouts and Vox, and rehearse with your band. You might also find yourself throwing Molotov cocktails from a motorbike, swing a baseball bat to take down helicopters…and more. You know, just normal everyday stuff.


            
            <p class="description__copyrights">
            Dustborn © 2024 Red Thread Games AS. All rights reserved. Published by Quantic Dream. Dustborn, Red Thread Games and the Red Thread Games logo are trademarks of Red Thread Games AS. Quantic Dream and Quantic Dream logos are trademarks of Quantic Dream S.A.S. All rights reserved.
        </p>`
  },
  [SimpleGameMock.nightShiftNurses.slug]: {
    id: SimpleGameMock.nightShiftNurses.id,
    name: SimpleGameMock.nightShiftNurses.name,
    short_description: `A washed-up mad doctor gets a second chance from an unexpected source: the former subject of his deranged experiments. The '90s classic visual novel returns with a modern remake!`,
    price: SimpleGameMock.nightShiftNurses.price,
    rating: ENUM_GAME_RATING.BR18,
    release_date: '12-17-2024',
    gallery: [
      {
        src: 'https://images.gog-statics.com/7fa468258b41ee8fb7df91a62fcddf68900ba42ed878d1e2fa8b3f9c00850768.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/e9735e123b7bb7c6999b32309c39ba27f4835f1b728185567b000b7848194172.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/29ef4e70ed70f056e177e2c966ffb297bf3e77cbd728a3c3f7543187ce928072.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/0c7c00b16968b81e04a7ff66fafd1729322214197ede35e866b735b867de1e30.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/5b25648f36eb8a74211244a5ee5e939ee4051c75343d7212acf5aa62e8a88cf0.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/b6ac88a5c9e67aab8f26ecda5e3da97133f7fb9210592e7d822d645ab9a66027.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/8b53075d7986439bcbfa62af55c1f177b2521e8a39af92cb99e6d015066e9d89.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.nightShiftNurses.cover,
    developers: SimpleGameMock.nightShiftNurses.developers,
    publisher: { name: 'Shiravune' },
    categories: SimpleGameMock.nightShiftNurses.categories,
    platforms: SimpleGameMock.nightShiftNurses.platforms,
    description: `<p>A washed-up mad doctor gets a second chance from an unexpected source: the former subject of his deranged experiments. The '90s classic visual novel returns with a modern remake!
</p><h4>FEATURES<br>
&nbsp;</h4><ul><li>0.5 hours of story</li><li>All-new English translation</li><li>Full Japanese voice acting by seasoned professionals</li></ul><h4>STORY</h4><p><br>
Ryuji Hirasaka. A depraved doctor with severe personality issues. Despite his genius, he has no interest in anything but humiliating and toying with other people, whom he views as nothing more than subjects to use for his experiments.&nbsp;<br><br>
One day, Hirasaka receives a request to work on a temporary basis at St. Juliana Hospital. Waiting there for him is one of his former victims—Narumi Jinguji.&nbsp;<br><br>
Narumi makes Hirasaka an unexpected proposal. Her goal is to create the world's most corrupt hospital ward, and she wants Hirasaka’s help to mold the perfect staff for it.&nbsp;<br><br>
Hirasaka finds himself perplexed by such an extraordinary proposal. However, the chance to finally realize his twisted ambitions is a temptation he cannot resist. Will St. Juliana Hospital become a den of mad science, or will Hirasaka's incompetence and unlikability spell the end for the Night Shift before it even begins?
</p><h4>CHARACTERS</h4><p><br><img src="https://items.gog.com/night_shift_nurses/chara01_eng-506f1.png">&nbsp;<br>
Ren Nanase (Voice: Kaname Shirotsuki)&nbsp;<br><br>
One of Hirasaka’s new charges, and a candidate to become a nurse on the special ward.&nbsp;<br>
To Hirasaka, she is the perfect test subject. Her looks and her devoted approach to patient care make her the epitome of an “angel in white.&nbsp;<br>
Upon first meeting Hirasaka, Ren's straightforward personality leads her to treat him with sincerity and respect rather than avoid him.&nbsp;<br><br><img src="https://items.gog.com/night_shift_nurses/chara02_eng-0402b.png">&nbsp;<br>
Ako Fujisawa (Voice: Nagomi Naruse)&nbsp;<br><br>
One of the candidates to become a nurse on the special ward.&nbsp;<br>
A mild-mannered woman, she evokes the image of a sheltered beauty with a somehow otherworldly quality about her. Her quiet personality seems to act against her, and she often gets teased.&nbsp;<br>
Ako appears to be aware of this aspect of herself too.&nbsp;<br><br><img src="https://items.gog.com/night_shift_nurses/chara03_eng-c9939.png">&nbsp;<br>
Hikaru Kodama (Voice: Haruto Tsuruya)&nbsp;<br><br>
One of the candidates to become a nurse on the special ward.&nbsp;<br>
Extremely energetic, she could be sympathetically described as naïve. A less generous assessment might be that she is mentally immature, without a hint of womanly charm or composure.&nbsp;<br>
However, when with her patients, Hikaru shows herself to be an extremely devoted and tolerant nurse, winning her a great deal of trust. She’s feisty too, and doesn’t hesitate to let Hirasaka know exactly what she thinks of him.&nbsp;<br><br><img src="https://items.gog.com/night_shift_nurses/chara04_eng-519e0.png">&nbsp;<br>
Remi Shinjo (Voice: Kanna Natsuki)&nbsp;<br><br>
One of the candidates to become a nurse in the special ward.&nbsp;<br>
A clean freak and a perfectionist, she is hard on both herself and others in her role as nurse supervisor. While herself brilliant, she is just as intolerant of her subordinates’ mistakes as her beautiful yet severe appearance suggests.&nbsp;<br>
Although this talented queen bee tends toward a prideful and confrontational manner, she shows a fragile, delicate side when her own failings are pointed out.&nbsp;<br><br><img src="https://items.gog.com/night_shift_nurses/chara05_eng-47ebf.png">&nbsp;<br>
Makoto Karino (Voice: Mako Ayane)&nbsp;<br><br>
A patient, admitted after being involved in a car accident. Currently receiving rehabilitation for the aftereffects of the crash.&nbsp;<br>
The daughter of the head surgeon, her selfish behavior causes those around her to see her as a nuisance. Her arrogant personality leads her to treat Hirasaka as a piece of trash from the get-go.&nbsp;<br><br><img src="https://items.gog.com/night_shift_nurses/chara06_eng-04ab3.png">&nbsp;<br>
Narumi Jinguji (Voice: Mashiro Kazahana)&nbsp;<br><br>
One of the most influential people at the hospital, she is the one to suggest the plan that kicks off our story.&nbsp;<br>
While both talented and beautiful, her true intentions remain shrouded in mystery. Why would she propose this plan in spite of the fact she has been on the receiving end of Hirasaka’s evil ways in the past? What led her to go out of her way to invite the very object of her hatred to work with her?&nbsp;<br>
None see beyond her bewitching mask to the truth that lies hidden within.
</p><br><p class="module">This Game may contain content not appropriate for all ages or may not be appropriate for viewing at work.</p><br><p class="module">Buying this game on GOG you will receive a censored version of the game.</p>`
  },
  [SimpleGameMock.symphonia.slug]: {
    id: SimpleGameMock.symphonia.id,
    name: SimpleGameMock.symphonia.name,
    short_description: `In the realm of Symphonia, music acts as a source of life and energy. But since the founders and their orchestra vanished the inhabitants are divided, and the world slowly falls into silence. What if there was a way to gather a new orchestra? That's the question Philemon, the mysterious musician in Symphonia, will have to answer. `,
    price: SimpleGameMock.symphonia.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '12-5-2024',
    gallery: [
      {
        src: 'https://images.gog-statics.com/ed466b212e74f9a317871c9bff529a4a25f08eea89cfe65465c0154e12971f38.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/80eb8178cce7cf279df6a82f390500217b7aedefa376e311ee02bf656bb206a6.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/de35705b88f2ce6e3316faf368704f5eab968f35533cdcf568b7f1760d2045ad.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/e1f356e9a68f0c08a51f137a4158a144d83b7a1c02523c9c1090159aee0337b7.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/a8d20669a3f08e9df06416bd1655579619063761315759f7f440cb29bd10832d.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/e38901376f6ff91c8c25434b7446079e194773a8e7a7a2aa713f161be47ce735.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/1ba8b41931a970c58e81fe8c2cf0dd9964d349109f476a91103016e0209957b0.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/1186e71ee09ac1198e1637dc5bc75ed7ddc14c6f0ee9cad32febdfeb12ca93d8.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.symphonia.cover,
    developers: SimpleGameMock.symphonia.developers,
    publisher: { name: 'Sunny Peak' },
    categories: SimpleGameMock.symphonia.categories,
    platforms: SimpleGameMock.symphonia.platforms,
    description: `<div style="overflow: hidden;"><a href="https://www.gog.com/game/symphonia_demo"><img src="https://items.gog.com/symphonia/prod_main_banner-405bc.png" style="margin: 5px 15px 0 10px; float: left; width: 250px"></a><span style="display: block;"><br><br> Symphonia Demo is available 
<a href="https://www.gog.com/game/symphonia_demo"><b>here</b></a></span></div><br><hr><br>
In the realm of Symphonia, music acts as a source of life and energy. But since the founders and their orchestra vanished the inhabitants are divided, and the world slowly falls into silence. What if there was a way to gather a new orchestra? That's the question Philemon, the mysterious musician in Symphonia, will have to answer.&nbsp;<br><img src="https://items.gog.com/symphonia/symphonia_gog_long_description_violinist_en_aug2023-6618f.png">&nbsp;<br><br>
Embody a mysterious violinist, brought back to life in a declining world. Your violin and bow are both your instrument and a means of transport. Catapult yourself through the world, and complete levels by solving exciting platforming challenges while re-activating the machinery that brings life and energy back to this world.&nbsp;<br><img src="https://items.gog.com/symphonia/symphonia_gog_long_description_musical_world_en_aug2023-d3dfb.png">&nbsp;<br><br>
Discover a musical world, based on the symphonic orchestra, and filled with colourful characters. Each area in Symphonia has its own distinct feel and characters, and each room is hand-crafted. Meet prodigious musicians and try to convince them to join the orchestra.&nbsp;<br><img src="https://items.gog.com/symphonia/symphonia_gog_long_description_orchestral_soundtrack_en_aug2023-468a5.png">&nbsp;<br><br>
A unique soundtrack, based on the romantic musical period, crafted by composer Olivier Esman. Enjoy the performance of the Scoring Orchestra Paris, recorded specifically for Symphonia and written by composer Olivier Esman and his team. Play engrossing concerts, each centred around one of the families of instruments – Strings, Brass and Woodwinds.&nbsp;<br><strong>Explore, navigate, play the violin, gather musicians. Awaken Symphonia.</strong>&nbsp;<br><img src="https://items.gog.com/symphonia/symphonia_gog_long_description_features_en_aug2023-c1b11.png">&nbsp;<br>
&nbsp;
<p></p><ul><li>Experience and overcome great platforming challenges with all of Philemon's abilities</li><li>Discover various environments which combine music and machinery</li><li>Play the violin to activate level elements and bring life to the realm</li><li>Gather musical Prodigies and play breathtaking concerts to bring music, joy, and glory, back to the land</li></ul><p class="description__copyrights">
            © 2024 Headup GmbH, all rights reserved.<br>
© 2024 Sunny Peak.
        </p>`
  },
  [SimpleGameMock.theWitcher3WildHunt.slug]: {
    id: SimpleGameMock.theWitcher3WildHunt.id,
    name: SimpleGameMock.theWitcher3WildHunt.name,
    short_description:
      'You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.',
    price: SimpleGameMock.theWitcher3WildHunt.price,
    rating: ENUM_GAME_RATING.BR16,
    release_date: '08-30-2016',
    gallery: [
      {
        src: 'https://images.gog-statics.com/e6b978f13174499c55f2b8dcc4ab9d08eae7886ab4c72c4b8d0193a97d6babbd.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/6a849f720c9d70a9932fc32ac957ae98c8d49a1dbc7fd14ef343139faf6e9072.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/c61b9494ed2312bf6227fe75e145a7ec4f43b19c64b3d0e8320e715ca3383e7f.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/edf320c47c0ab40022875da1f35805d44a66407ba52104e35079d92dd619f265.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/057efab166b0bce212729a3149de647ed5f55614645ff00a3d7d88afcdf7e6a3.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/afc7cfc877ce2687d2fa08a401aa536aa30c853c6ce125e8f38f15d26ae46f31.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/c645ad1c248dbcd72f47155232e25b5e5bf9a0de52728220a8d3e9b749d970fc.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/75f26a48a98bd0e0bdda9be3526bebb5e004f55b3d39591b16484c87085ad840.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.theWitcher3WildHunt.cover,
    developers: SimpleGameMock.theWitcher3WildHunt.developers,
    publisher: { name: 'CD PROJEKT RED' },
    categories: SimpleGameMock.theWitcher3WildHunt.categories,
    platforms: SimpleGameMock.theWitcher3WildHunt.platforms,
    description: `<img src="https://items.gog.com/the_witcher_3_wild_hunt/COVER_970x300_EN.png"><h3>One of the most acclaimed RPGs of all time
Now ready for a new generation</h3><hr><div style="overflow: hidden;"><img src="https://items.gog.com/the_witcher_3_wild_hunt/rewards_logo.png" style="margin: 5px 15px 0 10px; float: left"><span style="display: block;"><br><a href="https://www.thewitcher.com/my-rewards" target="”_blank”"><b>Rewards for owning The Witcher 3: Wild Hunt</b></a><br>

Launch The Witcher 3: Wild Hunt via <b>GOG GALAXY 2.0</b> and start playing. Your rewards will be waiting for you in the Royal Palace in Vizima. Check the letter from Yennefer in your inventory for help locating them!</span></div><br><hr><br><img src="https://items.gog.com/the_witcher_3_wild_hunt/ABOUT_970x300_EN.png"><br><br>
  You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.<br><br>
  The Complete Edition contains the base game, offering a huge, over 100-hour long, open-world adventure, as well as both of its massive story expansions: Hearts of Stone &amp; Blood and Wine worth an extra 50 hours of gameplay!<br><br>
  It also comes with all additional content released for the game, alongside new features and items, including a built-in Photo Mode, swords, armor, and alternate outfits inspired by The Witcher Netflix series — and more!<br><br><img src="https://items.gog.com/the_witcher_3_wild_hunt/Updated_970x300_EN.png"><br><br>
  Behold the dark fantasy world of the Continent like never before! This edition of The Witcher 3: Wild Hunt has been enhanced with numerous visual and technical improvements, including vastly improved level of detail, a range of community created and newly developed mods for the game, real-time ray tracing, and more — all implemented with the power of modern PCs in mind.<br><br><img src="https://items.gog.com/the_witcher_3_wild_hunt/Monster_Slayer_970x300_EN.png"><br><br>
  Trained from early childhood and mutated to gain superhuman skills, strength, and reflexes, witchers are a counterbalance to the monster-infested world in which they live.<br><ul><li>Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable weapons, mutating potions, and combat magic.</li><li>Hunt down a wide variety of exotic monsters, from savage beasts prowling mountain passes to cunning supernatural predators lurking in the shadowy back alleys of densely populated cities.</li><li>Invest your rewards to upgrade your weaponry and buy custom armor, or spend them on horse races, card games, fist fighting, and other pleasures life brings.</li></ul><img src="https://items.gog.com/the_witcher_3_wild_hunt/Open_World_970x300_EN.png"><br><br>
  Built for endless adventure, the massive open world of The Witcher sets new standards in terms of size, depth, and complexity.<br><ul><li>Traverse a fantastical open world: explore forgotten ruins, caves, and shipwrecks, trade with merchants and dwarven smiths in cities, and hunt across the open plains, mountains, and seas.</li><li>Deal with treasonous generals, devious witches, and corrupt royalty to provide dark and dangerous services.</li><li>Make choices that go beyond good &amp; evil, and face their far-reaching consequences.</li></ul><img src="https://items.gog.com/the_witcher_3_wild_hunt/Child_of_Prophercy_970x300_EN.png"><br><br>
  Take on the most important contract of your life: to track down the child of prophecy, the key to saving or destroying this world.<br><ul><li>In times of war, chase down the child of prophecy, a living weapon foretold by ancient elven legends.</li><li>Struggle against ferocious rulers, spirits of the wilds, and even a threat from beyond the veil – all hell-bent on controlling this world.</li><li>Define your destiny in a world that may not be worth saving.</li></ul><p class="description__copyrights">
            The Witcher 3: Wild Hunt © 2016 CD Projekt S.A. All Rights Reserved.
        </p>`
  },
  [SimpleGameMock.firewatch.slug]: {
    id: SimpleGameMock.firewatch.id,
    name: SimpleGameMock.firewatch.name,
    short_description:
      'Firewatch is a single-player first-person mystery set in the Wyoming wilderness.',
    price: SimpleGameMock.firewatch.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '02-09-2016',
    gallery: [
      {
        src: 'https://images.gog-statics.com/d76197ca79791a55709db471482cde7b3c503f03422fab38eb3d8c4c1efdfd85.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/fca53cc271241166ba7cb060904ddfec6af2f3726a5c25d0cb1b5211a7bbd87e.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/82a80d1bb5f6631a565979ed0459192b3945d91257fadea5a6e7c583440caee3.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/69a2e4ed06844679947bf443cd08fdba6c9906f1fb6901b0040856c78d0bbd04.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/adee00306813df3087e6c32a27a0e78ac0260a43490ef28f4e0e6d47df25d5cc.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/cac040f45943af6b6668821d6481924853b1f98d6ca523f1ebd112459fc17876.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/224520bfaa2774868f57858fd2378c9877148f7799d04aa5a2a8693bad3b155f.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/1614252003f0e4d28989ed7587594bfaebf4588d580eb4250d20f95775cc262b.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/419f827d8856b962fce9e775226e668765b785bf4eae1878cb14a5b90ca170b3.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.firewatch.cover,
    developers: SimpleGameMock.firewatch.developers,
    publisher: { name: 'Campo Santo' },
    categories: SimpleGameMock.firewatch.categories,
    platforms: SimpleGameMock.firewatch.platforms,
    description: `<b>Firewatch</b> is a single-player first-person mystery set in the Wyoming wilderness. 
 <br><br>
The year is 1989. You are a man named Henry who has retreated from his messy life to work as a fire lookout in the Wyoming wilderness. Perched high atop a mountain, it’s your job to look for smoke and keep the wilderness safe. An especially hot, dry summer has everyone on edge. Your supervisor Delilah is available to you at all times over a small, handheld radio—your only contact with the world you've left behind. But when something strange draws you out of your lookout tower and into the forest, you’ll explore a wild and unknown environment, facing questions and making choices that can build or destroy the only meaningful relationship you have. 
<br><br><i>A Note: Firewatch is a video game about adults having adult conversations about adult things. If you plan on playing with a younger gamer, that might be good to know going in.</i><ul class="description__features"><li class="description__features-point">A stunningly beautiful wilderness environment that expands as you explore.</li><li class="description__features-point">A tailor-made story: the choices you make shape the narrative and build relationships.</li><li class="description__features-point">An edge-of-your-seat mystery.</li><li class="description__features-point">Secrets and discoveries to be made over every hill. </li><li class="description__features-point">Living, breathing characters brought to life by Cissy Jones (The Walking Dead: Season 1) and Rich Sommer (Mad Men)</li><li class="description__features-point">A spectacular wilderness environment by Olly Moss (Illustrator) and Jane Ng (The Cave, Brutal Legend)</li><li class="description__features-point">A thrilling story and script by Sean Vanaman and Jake Rodkin (The Walking Dead: Season 1, Poker Night at the Inventory)</li><li class="description__features-point">A stirring original soundtrack by Chris Remo (Gone Home)</li><li class="description__features-point">Fluid first-person animation by James Benson (Ori &amp; The Blind Forest)</li><li class="description__features-point">Gameplay scripting and design work by Patrick Ewing (Twitter) and Nels Anderson (Mark of the Ninja)</li><li class="description__features-point">Programming by Will Armstrong (Bioshock II), Ben Burbank (Costume Quest 2, Space Base DF-9), and Paolo Surricchio (Deadpool, Call of Duty Advanced Warfare)</li></ul><p class="description__copyrights">
            © 2016 Campo Santo Productions, LLC. All rights reserved.Enter copyright information
        </p>`
  },
  [SimpleGameMock.fallout4.slug]: {
    id: SimpleGameMock.fallout4.id,
    name: SimpleGameMock.fallout4.name,
    short_description:
      'Fallout 4: Game of the Year Edition includes the base game and all the following add-ons.',
    price: SimpleGameMock.fallout4.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '12-10-2024',
    gallery: [
      {
        src: 'https://images.gog-statics.com/7d890f4fd6cae24928c39263d6cc1be1d98f033d97a2bcbbabd8a27257a1a1cc.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/fb681f9ec219169674a65f1d59e2e95323840dec14bafb791b1802565b21ce2e.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/13e6b550e16944ad923c38f78afdac27371f5ead8c74960da8ca8ecc0013ecc2.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/74a643bd9078760178b5abd58764d74875165d18a3dbf43d1cc01d81a8c38c9a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/fa3f573db170679b3f572135afa15d204bd454d7cc4e19db12fcc7a199cd7107.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/9f9b21e69addf88b99bd9dd8ac6c1546cf0b1f4c42094145b1fb364248d2029a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/cc63089464cd54b9cbf883cca5f2554cba178a588037f5d1e41a08c3e6c9cde5.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/df0286f619b32b743d866613082d699a5f8156676deb5d4b168a3370b5b2e534.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/f11b2773c16dcf16eb5db4c6fc152a02fe6e4e4a2726c7eeeadd54191f1fbd04.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/de5b92e045f86bb3f5f9a2c5cb24e9c58ebe63bcbae4bfac46353431b87c0b8d.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/09e8e59ff909c5436a64f2609f0b7b9385449dac762ae3aa0fb56c9df56923a3.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/076cd11e6858e18e0059ff608fa179e76fe8144a2d731784db2e315585fec7ec.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.fallout4.cover,
    developers: SimpleGameMock.fallout4.developers,
    publisher: { name: 'Aspyr' },
    categories: SimpleGameMock.fallout4.categories,
    platforms: SimpleGameMock.fallout4.platforms,
    description: `<p><img src="https://items.gog.com/fallout_4/fallout4_reviewscore_graphic-09.jpg"></p><br><hr><b>Fallout 4: Game of the Year Edition</b> includes the base game and all the following add-ons:
<br><br><ul class="bb_ul"><li><b>Far Harbor</b> - A new case from Valentine’s Detective Agency leads you on a search for a young woman and a secret colony of synths. Travel off the coast of Maine to the mysterious island of Far Harbor, where higher levels of radiation have created a more feral world.</li><li><b>Automatron</b> - The mysterious Mechanist has unleashed a horde of evil robots into the Commonwealth, including the devious Robobrain. Hunt them down and harvest their parts to build and mod your own custom robot companions.</li><li><b>Nuka-World</b> - Take a trip to Nuka-World, a vast amusement park now a lawless city of Raiders. Explore an all-new region with an open wasteland and park zones like Safari Adventure, Dry Rock Gulch, Kiddie Kingdom, and the Galactic Zone.</li><li><b>Wasteland Workshop</b> - With the Wasteland Workshop, design and set cages to capture live creatures – from raiders to Deathclaws! Tame them or have them face off in battle, even against your fellow settlers.</li><li><b>Contraptions Workshop</b> - Machines that sort! Machines that build! Machines that combine! With Fallout 4 Contraptions, use conveyer belts, scaffolding kits, track kits, even logic gates to construct crazy and complex gadgets to improve your Wasteland settlements.</li><li><b>Vault-Tec Workshop</b> - Build a brighter future underground with the all-new Vault-Tec Workshop. Create a massive Vault and attract new Dwellers using pre-war industrial kits complete with retro-nostalgic furniture, lighting, and art.</li></ul><br><hr>
Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming.
<br><br>
As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.<h4>Key Features:</h4><ul class="bb_ul"><li><b>Freedom and Liberty!</b><br>
Do whatever you want in a massive open world with hundreds of locations, characters, and quests. Join multiple factions vying for power or go it alone, the choices are all yours.
<br><br></li><li><b>You’re S.P.E.C.I.A.L!</b><br>
Be whoever you want with the S.P.E.C.I.A.L. character system. From a Power Armored soldier to the charismatic smooth talker, you can choose from hundreds of Perks and develop your own playstyle.
<br><br></li><li><b>Super Deluxe Pixels!</b><br>
An all-new next generation graphics and lighting engine brings to life the world of Fallout like never before. From the blasted forests of the Commonwealth to the ruins of Boston, every location is packed with dynamic detail. 
<br><br></li><li><b>Violence and V.A.T.S.!</b><br>
Intense first or third person combat can also be slowed down with the new dynamic Vault-Tec Assisted Targeting System (V.A.T.S) that lets you choose your attacks and enjoy cinematic carnage.
<br><br></li><li><b>Collect and Build!</b><br>
Collect, upgrade, and build thousands of items in the most advanced crafting system ever. Weapons, armor, chemicals, and food are just the beginning - you can even build and manage entire settlements.</li></ul><br><p class="module">Please note that the DRM-Free version of Fallout 4 GOTY does not include the Creation Club feature. For a premium modding experience, we recommend  <a href="https://www.nexusmods.com/fallout4">Nexus Mods</a>, which provides free access to tens of thousands of amazing modifications, and hundreds of curated <a href="https://next.nexusmods.com/fallout4/collections">collections</a>.</p><p class="description__copyrights">
            © 2015 Bethesda Softworks LLC, a ZeniMax Media company. Bethesda, Bethesda Softworks, Bethesda Game Studios, ZeniMax and related logos are registered
trademarks or trademarks of ZeniMax Media Inc. in the U.S. and/or other countries. Fallout, Vault Boy, and related logos are registered trademarks or trademarks of
Bethesda Softworks LLC in the U.S. and/or other countries. All other trademarks or trade names are the property of their respective owners. All Rights Reserved.
        </p>`
  },
  [SimpleGameMock.tombRaiderGoty.slug]: {
    id: SimpleGameMock.tombRaiderGoty.id,
    name: SimpleGameMock.tombRaiderGoty.name,
    short_description:
      'Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor.',
    price: SimpleGameMock.tombRaiderGoty.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '05-03-2013',
    gallery: [
      {
        src: 'https://images.gog-statics.com/5acb32deb96bf5151e67785db75cf4efb874687c93564963ed93bd079dd2c060.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/80df6adece62b0111450a102a35f8ad26fe62d6efec33e54f9cdd58e8ab72be8.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/bfba9b11b2873c39fb3eac1197269b5902273f6285b7d75148b8501d0a889d8c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/8103375c6c6f36bb260692f31571d1753a99dece325aaee1623a25a1dc66a807.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/3495f6f6aebc914d49489a23683f98804d4983fddbf00df8c1b550f0956b138f.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/d45ad4b55e231d04000c577d4c819f05e2fb20fe312c38fb780de62bb0773b44.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/3924b1a003389962e10e0470e55eaaa5c4da395e5bc133f58c394ad2931736dc.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/1aef63ce8358bec2b2496ee8f2aa0f22c0ac4398310dddad963e653c19c711e1.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/bc9574895a85fdd51642cb15a088f70e3c3657266e911ff249b5d9c46fbad242.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.tombRaiderGoty.cover,
    developers: SimpleGameMock.tombRaiderGoty.developers,
    publisher: { name: 'Crystal Dynamics' },
    categories: SimpleGameMock.tombRaiderGoty.categories,
    platforms: SimpleGameMock.tombRaiderGoty.platforms,
    description: `<img src="https://items.gog.com/tomb_raider_goty/TP_Fall_30_3.gif"><br><br>

Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor. Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold. Download the Turning Point trailer to see the beginning of Lara’s epic adventure.

<h4>KEY FEATURES:</h4><ul><li>A Turning Point: Experience Lara Croft’s intense origin story from a young woman to a hardened survivor.
</li><li>An All-New Raiding Experience: Explore a mysterious island filled with environmental puzzles, visceral combat, and tombs to discover.
</li><li>Fight to Live: Salvage resources, gain experience, and upgrade Lara’s weapons and tools to survive the island’s hostile inhabitants.</li></ul><p class="description__copyrights">
            TOMB RAIDER © 2013 Crystal Dynamics group of companies. All rights reserved. TOMB RAIDER, LARA CROFT, CRYSTAL DYNAMICS, the CRYSTAL DYNAMICS logo, EIDOS, and the EIDOS logo are trademarks of the Crystal Dynamics and Eidos Interactive Corp. group of companies.
        </p>`
  },
  [SimpleGameMock.citizenSleeper2StarwardVector.slug]: {
    id: SimpleGameMock.citizenSleeper2StarwardVector.id,
    name: SimpleGameMock.citizenSleeper2StarwardVector.name,
    short_description:
      'The highly anticipated sequel to one of 2022’s most acclaimed RPGs, Citizen Sleeper 2: Starward Vector takes players to the Starward Belt, a richly realised, ramshackle set of habitats in an asteroid belt full of secrets, stories, and characters trying to make ends meet.',
    price: SimpleGameMock.citizenSleeper2StarwardVector.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '01-31-2025',
    gallery: [
      {
        src: 'https://images.gog-statics.com/b82412dc3167c12319edd66d9c1efcd788a927c2554f5d9d9acf55a79250c32c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/39f635083738cce0551f08becd104d6d030a08d5ce1e655eb76327efedbe608a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/35278e5668c329f936f6c6625aaeafa52a5b537358ce7ff8a7000fb56d1fe887.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/af5ced150c21ab270a830b81ef8caf1bccdb9679d8dfaaa527f15423c110873c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/cc6aaabfa1e2f854b3c1d43e87a2911c33f29ff511a5a236f0398d7f1b967387.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/319f2bf45a43cca399b6c6de45a962c1f3aa58c9d8bed23c1212d500bebf4886.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/3799b223bd68153bd4d388983a9ee7ff5246e275933baf2ec73270bead62d3a5.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/43dc8c95b512783ac9e876eaa16dc4df9f3e88291c392b1f187ffb9633e4b023.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/17130d03d2cbbee4e5b7e5d2d169b48c5adf60f7dae954c85291f0d6107bde6a.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.citizenSleeper2StarwardVector.cover,
    developers: SimpleGameMock.citizenSleeper2StarwardVector.developers,
    publisher: { name: 'Fellow Traveller' },
    categories: SimpleGameMock.citizenSleeper2StarwardVector.categories,
    platforms: SimpleGameMock.citizenSleeper2StarwardVector.platforms,
    description: `<h3>BUZZ</h3><p><i>“Citizen Sleeper 2 goes even harder on its RPG roots with its bold new twists on its tabletop dice rolls”</i></p><p>
- Eurogamer
</p><p>
&nbsp;
</p><p><i>“...radically different to the first game, but even this early on, it’s doing everything I want a deep, dense RPG to do”</i></p><p>
- VG247
</p><p>
&nbsp;
</p><p><i>“I am extremely eager to throw myself back into Gareth Damian Martin’s rich and compelling crisis.”</i></p><p>
- Super Jump Magazine
</p><h3>ABOUT THIS GAME</h3><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/header_a_dice_driven_rpg_en-36185.png"></p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/Topheaderanim-97a55.gif"></p><p>
The highly anticipated sequel to one of 2022’s most acclaimed RPGs, Citizen Sleeper 2: Starward Vector takes players to the Starward Belt, a richly realised, ramshackle set of habitats in an asteroid belt full of secrets, stories, and characters trying to make ends meet.
</p><p>
&nbsp;
</p><p>
You are a sleeper, an emulation of a human mind housed in an artificial body. You are on the run from the corporation that made you and the gang that seeks to control you. Commandeer a ship, build a network of crew and allies, and take on challenging contracts as you seek to build a future for yourself.
</p><p>
&nbsp;
</p><p>
Choose a class, configure your skills and assemble your crew in unique tabletop-inspired gameplay. Your future depends on the roll of a dice, as you make difficult choices in a complex world. Reinventing the award-winning systems of Citizen Sleeper, this dice-driven RPG will satisfy both fans of the original game and new players alike.
</p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/banner_end-749fe.png"></p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/header_ship_crew_contract_en-6a998.png"></p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/Topheaderanim-97a55.gif"></p><p>
To stay one step ahead of your pursuers you’ll need three things: A belt-worthy ship, a tight crew and a contract or two.
</p><p>
&nbsp;
</p><p>
The ship you stole. It’s a ragged old Rig that’s seen better days, but it’s all you’ve got. Upgrade your ship to extend its range, reach new locations and turn it from a hovel to a home.
</p><p>
&nbsp;
</p><p>
Your crew starts with Serafin, your fellow escapee and a rock-solid pilot. But you’ll need scrappers, engineers and all sorts to take on the work that’ll keep you flying. From temporary contractors to new residents of the Rig, each of these characters has their own story, skills and troubles. Choose carefully.
</p><p>
Contracts take place far from the bars and shops of the Belt’s many hubs. These high-risk jobs each have their own challenges. From exploring treacherous derelicts and risky heists, to asteroid surveying and ship repair, you’ll need to make the most of your skills, crew and resources to complete the contract and get paid.&nbsp;
</p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/banner_end-749fe.png">&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/LocationNav-9d2d7.gif"></p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/subbanner_stay_ahead_of_your_past_en-feda9.png"></p><p>
Soon after escaping from your corporate overlords, you fell under the control of a local criminal gang and its leader, Laine. Now, after a desperate attempt to free yourself from servitude by rewriting the very code that governs your system, you are on the run again, this time with a malfunctioning body, a price on your head and no memory of your past.&nbsp;
</p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/subbanner_reboot_rebuild_repair_en-a6545.png"></p><p>
&nbsp;
</p><p>
Nothing in the Belt ever runs smooth, including your artificial body. Citizen Sleeper’s revolutionary dice system returns, revised for the sequel. Manage your stress or take damage to your dice. Deal with glitches as they accrue in your system. Push yourself to get lucky and make this cycle count.&nbsp;
</p><p>
&nbsp;
</p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/DicePush-1433c.gif"></p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/subbanner_push_your_luck_en-3c84b.png"></p><p>
&nbsp;
</p><p>
Each character class now has a unique “Push” ability, upgradable and customisable, that can help you turn the tide of a difficult job or send you into a dangerous spiral depending on how and when you choose to use it. Reroll your dice to change your fate, or focus a single die to bet everything on a big success. Each class offers different tactical possibilities.
</p><p>
&nbsp;
</p><p>
&nbsp;<img src="https://items.gog.com/citizen_sleeper_2_starward_vector/subbanner_do_the_job_en-51155.png"></p><p>
&nbsp;
</p><p>
Contracts offer a new kind of focussed, tactical gameplay to the Citizen Sleeper experience. You’ll need to prepare carefully and choose the right approach for these multi-cycle, high-risk, high-reward jobs, but you’ll also have to react and adapt to both the roll of the dice and the twists and turns of each task.
</p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/Map2Nav-69ecc.gif"></p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/subbanner_navigate_the_belt_en-edc32.png"></p><p>
&nbsp;
</p><p>
The Starward Belt offers a bigger, more varied world than the original game. Instead of living on a single station, you'll chart a course from hub to hub with complete freedom, taking on jobs and setting goals as you see fit. A living world, the Belt rewards curiosity and care, but it's up to you to decide which locations and stories deserve your time and resources.
</p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/subbanner_choose_your_future_en-5a1b5.png"></p><p>
&nbsp;
</p><p>
Player choice is a massive part of the Citizen Sleeper experience, and the sequel deepens this with new skill checks that allow you to express your class and character in scenes, as well as branching storylines that will ask you to make hard choices. The future of your character is up to you.
</p><p>
&nbsp;
</p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/transmission_end_en-0b556.png"></p><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/Topheaderanim-97a55.gif"></p><h3>ABOUT THE DEVELOPER</h3><p><img src="https://items.gog.com/citizen_sleeper_2_starward_vector/jota_logo-3473d.png"></p><p>
Jump Over the Age is a one-person game development studio founded by Gareth Damian Martin (they/them). Gareth is the winner of GDCA and Indiecade awards, and has been nominated for a Games Award, multiple IGF Awards, a GDC Award, and four BAFTAs. They have been named both “An accomplished world-builder” (Edge Magazine) and “one of the most exciting indie talents around” (Eurogamer).<br><br>
For Citizen Sleeper 2: Starward Vector Gareth is once again joined by renowned comic book artist, Guillaume Singelin and celebrated composer, Amos Roddy - the same exceptionally talented development team responsible for Citizen Sleeper’s moving narrative, eye-popping art and immersive music and sound.
</p><p class="description__copyrights">
            © 2023 Jump Over The Age. Published by Fellow Traveller ®. Fellow Traveller is a registered trademark of Surprise Attack Pty Ltd trading as Fellow Traveller Games. All rights reserved.
        </p>`
  },
  [SimpleGameMock.starWarsEpisode1JediPowerBattles.slug]: {
    id: SimpleGameMock.starWarsEpisode1JediPowerBattles.id,
    name: SimpleGameMock.starWarsEpisode1JediPowerBattles.name,
    short_description: 'Celebrate Soul Reaver’s 25th Anniversary',
    price: SimpleGameMock.starWarsEpisode1JediPowerBattles.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '01-23-2025',
    gallery: [
      {
        src: 'https://images.gog-statics.com/1406c1058e5db51ada4a03411321f724fa01606bc5ac633bf2865e73e7a2a39a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/074c2664ec584da4088ffbc676826b25cc5f1520aa376f014959dcbe9d06af8a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/b9ba9fd4220b2a228d0189cece7a47af7164868f30da58d9ab168bdc66d91e2b.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/74e1cc87c15a22c06d3e6a97f1eb8da8adf029890d7866bb2e136169b2a42cac.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/951d6ac9014a181d4fa18fe83a2e7150f3b8916aca71bd8492c0cb22fd1297d1.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/e486dfcbe04f6ec2ff8072e840411825a8566325db25c340a4b957d532800d95.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.starWarsEpisode1JediPowerBattles.cover,
    developers: SimpleGameMock.starWarsEpisode1JediPowerBattles.developers,
    publisher: { name: 'Aspyr' },
    categories: SimpleGameMock.starWarsEpisode1JediPowerBattles.categories,
    platforms: SimpleGameMock.starWarsEpisode1JediPowerBattles.platforms,
    description: `<b>Deflect. Defeat. Destroy!</b><br>
Take back the Theed Palace in this fast and furious lightsaber action game. You will have the power of the Force and your trusty lightsaber to help you ward off legions of battle droids, destroyer droids, assassins, and other creatures from Star Wars: The Phantom Menace.
<h4>KEY FEATURES</h4><br><b>Jump into Side-Scrolling Arcade Action in the Star Wars Galaxy</b><br>
Play as Mace Windu, Obi-Wan Kenobi, Plo Koon, Adi Gallia, or Qui-Gon Jinn facing off against droids and other familiar foes from Star Wars: The Phantom Menace<br><br>
Or, play as one of the previously locked characters such as Darth Maul, Captain Panaka, Queen Amidala, Ki-Adi Mundi, and the Battle Droid, now available from the start!<br><br><b>Bring a Friend in Classic Couch Co-op</b><br>
Battle side-by-side with a companion in 2-player couch co-op for the entire 10-level campaign and bonus mini-games<br><br><b>Classic &amp; New Game+</b><br>
Use classic or modern control schemes, toggle your Lightsaber colors to match the films, enjoy new playable characters such as the Tusken Raider, enter classic cheat codes like Big Head Mode, and discover more surprises in this 25th anniversary celebration of Star Wars: Episode I: Jedi Power Battles

            
            <p class="description__copyrights">
            The Lucasfilm logo, STAR WARS and related properties are trademarks and/or copyrights, in the United States and other countries, of Lucasfilm Ltd. and/or its affiliates. © &amp; ™ 2024 Lucasfilm Ltd. All rights reserved. © 2023 Aspyr Media, Inc. Aspyr is a registered trademark of Aspyr Media, Inc., and the Aspyr star logo is a trademark of Aspyr Media. All other marks and logos are the property of their respective owners. All rights reserved.
        </p>`
  },
  [SimpleGameMock.ultrakill.slug]: {
    id: SimpleGameMock.ultrakill.id,
    name: SimpleGameMock.ultrakill.name,
    short_description:
      'ULTRAKILL is a fast-paced ultraviolent old school FPS that fuses together classic shooters like Quake, modern shooters like Doom (2016) and character action games like Devil May Cry.',
    price: SimpleGameMock.ultrakill.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '03-08-2020',
    gallery: [
      {
        src: 'https://images.gog-statics.com/b91827eaf22244159f505ab355f2ba266dfc94e726428e961abd521743cc9925.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/5c1507897ccf89dfa26d5e1163635d933ab841160658ab92eef7101291128247.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/53dbe3125cb52eef1159f931cbc9a253c482e1e2eeadb651509c6834a212841d.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/ec8ee88cf4bfd0f9088f9add3243469a5291d209c25fd7f65ced8e0c6089487b.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/ee01ecaff37f355a4fe198579abcf74811d87f34807ac1bd6cc7e1621081133c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/d287ded34891d319aa6f5b79734f5a09c72cba2a810d8a6bfd96be77db16fa4a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/68a7f0bf79c5e973eb8fe0b9aa596f61274aee9336a9cd4051edd1f73393da3f.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/ae7d96fef3a927f934470a5d9323cad095d6c58a9e49582dd8475cd08d761535.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/550f470ca2e97cdc7a6eb8848f8b63e78a4729a80b786856968e299f657aa9cd.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.ultrakill.cover,
    developers: SimpleGameMock.ultrakill.developers,
    publisher: { name: 'New Blood Interactive' },
    categories: SimpleGameMock.ultrakill.categories,
    platforms: SimpleGameMock.ultrakill.platforms,
    description: `<div style="overflow: hidden;"><a href="https://www.gog.com/game/ultrakill_demo"><img src="https://items.gog.com/ultrakill/ultrakill.jpg" style="margin: 5px 15px 0 10px; float: left; width: 250px"></a><span style="display: block;"><br><br>ULTRAKILL DEMO is available <a href="https://www.gog.com/game/ultrakill_demo"><b>here</b></a></span></div><br><hr><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/ultrakill/mp4/MANKIND_IS_DEAD_2.gif.mp4" type="video/mp4"></video><br><br><b><i>ULTRAKILL</i></b> is a fast-paced ultraviolent old school FPS that fuses together classic shooters like <i>Quake</i>, modern shooters like <i>Doom (2016)</i> and character action games like <i>Devil May Cry</i>.
<br><br>
Mankind has gone extinct and the only beings left on earth are machines fueled by <b>blood</b>.
<br>
But now that blood is starting to run out on the surface...
<br>
Machines are racing to the depths of <b>Hell</b> in search of more.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/ultrakill/mp4/BLOOD_IS_FUEL.gif.mp4" type="video/mp4"></video><br><br><ul class="bb_ul"><li>Use your many movement abilities to stay mobile and avoid the relentless attacks of the dead, demons and other machines.
<br></li><li>Destroy them with an arsenal of incredibly powerful weapons, each with multiple available variations.
<br></li><li>Soak yourself in their blood to regain health and keep fighting.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/ultrakill/mp4/HELL_IS_FULL.gif.mp4" type="video/mp4"></video><br><br></li><li>Kill fast and with SSStyle to rack up combos and gain points that can be used on weapon variations between missions.
<br></li><li>Master the many levels to achieve high ranks and take on unique optional challenges.
<br></li><li>Explore the varied and unique campaign environments inspired by <b>Dante's Inferno</b> to find plentiful hidden secrets</li></ul><p class="description__copyrights">
            © New Blood Interactive
        </p>`
  },
  [SimpleGameMock.aftermath.slug]: {
    id: SimpleGameMock.aftermath.id,
    name: SimpleGameMock.aftermath.name,
    short_description:
      'Description Charlie Gray was at the top of the world. A talented engineer and European astronaut, her career had brought her to where most people could only dream of; but following a reentry to earth gone wrong, and the traumatic events that ensued',
    price: SimpleGameMock.aftermath.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '02-05-2025',
    gallery: [
      {
        src: 'https://images.gog-statics.com/093445042d45105d6e010b2f6dcbc5ed2bf2bf25cecf4302996aad152007a35c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/41c14a15567c7ec566f81e1b733b05ff9a71a6ebe4b50118550ea858a6f9dd2d.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/93f0e43cca08c9767acfc969115b29525c3eb8a0b4760adef810124837b33e9a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/9757c580e37e985f5aa02ecf93e49f3767c44cd5258bda1ffd363fdcdef4cbe3.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/cf9a3461b5ac53b7e622de381320c36b0703bacccc760be193cb462c9d0ec470.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/a332f3304e0ce41a2ea3b7cb921afceddc78756d10332479db90eac1f303e8d9.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/679e6897441e549ff35a10781dc38e00cf62bd494878616af235353d63423a87.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/65d50b39b2a5f63cdf4d104947447ece53afb740b37075c7f941aa2dd90fe9c8.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.aftermath.cover,
    developers: SimpleGameMock.aftermath.developers,
    publisher: { name: 'META Publishing' },
    categories: SimpleGameMock.aftermath.categories,
    platforms: SimpleGameMock.aftermath.platforms,
    description: `Charlie Gray was at the top of the world. A talented engineer and European astronaut, her career had brought her to where most people could only dream of; but following a reentry to earth gone wrong, and the traumatic events that ensued, Charlie returns a broken spirit. With her life spiralling into darker and darker places, Charlie now finds herself Isolated in a deserted, defragmented world. The only thing she knows is that she has to find the one thing that still matters: Sammy. 

<br><br>
Analyze your surroundings and utilise the urban resources at your disposal. Mundane, everyday items can become an invaluable tool in your fight against the enigmatic beings that now occupy the city. Study alien weaknesses and find the best approach to take down those that might want to use you as an offering. 
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/aftermath/mp4/features.gif.mp4"></video><br><br><ul class="bb_ul"><li><b>A POWERFUL HUMAN STORY</b></li></ul>What form does humanity take when faced with unimaginable events? Do we unite and become stronger, or do we fall apart? Does our past still shape us, or do we find strength in focusing on what could be? AFTERMATH delves deeply into philosophical, psychological and other questions that might get asked if we find ourselves in an impossible situation.

<br><br><ul class="bb_ul"><li><b>UNIQUE VISUAL DESIGN</b></li></ul>With stunning aesthetics created by the brilliant mind of enigmatic Italian visual arts master Alessandro Bavari, the artist behind the design of Ridley’s Scott Alien: Covenant and Suspiria.
<br><br><ul class="bb_ul"><li><b>LIFE AND DEATH ARE A MYSTERY</b></li></ul>Charlie is locked in a waking nightmare. What is happening and why is a core mystery that plagues Charlie’s every moment. If death isn’t the end, then what is?
<br><br><ul class="bb_ul"><li><b>AN ORIGINAL SOUNDTRACK</b></li></ul>AFTERMATH features a rich and varied soundtrack, featuring original work from artists such as UNKLE, Planet Funk and many more. 
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/aftermath/mp4/gameplay.gif.mp4"></video><br><br><ul class="bb_ul"><li><b>FACE YOUR FOE</b></li></ul>Charlie is being hunted by an unseen adversary. Unfold the mystery of this seemingly invincible “hunter” and use every facet of your arsenal to outwit them and survive. But what other forces could be lurking in the remains of the city and beyond? What fate has fallen humanity? 

<br><br><ul class="bb_ul"><li><b>STAY HEALTHY, STAY READY</b></li></ul>Eating the right food, maintaining mental health and physical stamina keeps you one step ahead of your enemy, helping you stay alert and ready to outwit your opponents. 
<br><br><ul class="bb_ul"><li><b>REALISTIC CRAFTING</b></li></ul>AFTERMATH uses Charlie’s engineering mind and scientific approach to create a new take on crafting, rather than a simple system. Observe and take notes of your surroundings to invent a blueprint and then find and combine the necessary parts to adapt and overcome. 
<br><br><ul class="bb_ul"><li><b>A FAMILIAR SETTING</b></li></ul>Explore a detailed recreation of a city steeped in history, defragmented by the terrifying power of an ancient alien artifact, looming ominously above.<h4><b>So how will you approach the AFTERMATH? Will you become prey, or will you overcome your physical and mental obstacles to become the hunter.</b></h4><p class="description__copyrights">
            ONE-O-ONE Games is the video game label created by Centounopercento – 101%. META Publishing is a trademark of Postmeta Games Limited.
        </p>`
  },
  [SimpleGameMock.anAmazingWizardDemo.slug]: {
    id: SimpleGameMock.anAmazingWizardDemo.id,
    name: SimpleGameMock.anAmazingWizardDemo.name,
    short_description:
      'Your village lies in ruins, and you have no memory of the events that led to its destruction. Fragments of your past are missing, and you awaken in a strange, unfamiliar world, with no recollection of how you got there.',
    price: SimpleGameMock.anAmazingWizardDemo.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '07-27-2024',
    gallery: [
      {
        src: 'https://images.gog-statics.com/06f95eefd7bbaeeae652c84e4b8a954f57ab166250f8e452dd064fa1ad88c0a1.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/c3588d90bced3e408e3fba750a3471598f6af480b8241b97069fae8da3bc591c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/3bbb3919be838e7c6197ccf07f9e0ea8b83a191c9ef194b05ca884df63ae28f5.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/4133e305be90067ed9c3d4de6aaf7c3cf2d4eded7edd25ae68761e93628b3b1c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/f08bf342eedeb28f4c593a9c27bcfa8fe83c6e61f8b7a6aac418a1e5658ace1e.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/5294cccd18a4757e97b1b303fe8a068e3cdbf9a109d5c7620250254022a4c05a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/141a01da581d86fc4dbc3f850ff32d3f296c297fee22008204869b5b725a6042.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/ab04b44574b34d1db7cae32ec3f43e62b23a524fa6c62ccd1da4f69eb132c76e.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/84afb64d7487ccced460ef4eaa19d143915045b7d92175e7c65e9be81c4edd72.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/093d2abf90ac8388a50da44001f9d0e1a6f053f1cfc7b67a97f8d58e79013416.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/23f540938816684e83ce72c8347cb77edc88f7ba82a50af340235782d9394108.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.anAmazingWizardDemo.cover,
    developers: SimpleGameMock.anAmazingWizardDemo.developers,
    publisher: { name: 'Tiny Goblins, Erabit' },
    categories: SimpleGameMock.anAmazingWizardDemo.categories,
    platforms: SimpleGameMock.anAmazingWizardDemo.platforms,
    description: `<div style="overflow: hidden;"><a href="https://www.gog.com/game/an_amazing_wizard"><img src="https://items.gog.com/an_amazing_wizard/main_main_an_amazing_wizard.png" style="margin: 5px 15px 0 10px; float: left; width: 250px"></a><span style="display: block;"><br><br>An Amazing Wizard is coming soon and can be wishlisted 
<a href="https://www.gog.com/game/an_amazing_wizard"><b>here</b></a></span></div><br><hr><br><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/an_amazing_wizard_demo/icewizard-2e-gif-18fbf.mp4" type="video/mp4"></video><br><img src="https://items.gog.com/an_amazing_wizard_demo/aaw_create_your_spells-e3ea3.png"><br><ul class="bb_ul"><li>Learn 60 Spells of 7 elements</li><li>Merge Spells into one to set the order of effects</li><li>Enchant your Spells and Weapons</li><li>Choose Level-up Perks</li></ul><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/an_amazing_wizard_demo/create_your_spells-2e-gif-ced52.mp4" type="video/mp4"></video><br><br><img src="https://items.gog.com/an_amazing_wizard_demo/everchanging_worlds-8e5ec.png"><br><strong>A stunning 2D roguelike with ranged combat!</strong><br>
Explore two unique worlds: the Ancient Desert and The Hell. Discover hidden rooms, complete challenges, avoid traps, collect loot, and open cursed chests. <span class="bb_strike">Psst. Don't bully the Shopkeeper.</span><br><br><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/an_amazing_wizard_demo/everchanging_worlds-2e-gif-d153f.mp4" type="video/mp4"></video><br><br><img src="https://items.gog.com/an_amazing_wizard_demo/boss_battles-8f444.png"><br>
Each world has distinctive <strong>mobs </strong>and <strong>elites</strong>. At the end the <strong>boss of the world</strong> awaits you. But fear not! Each Elemental class has its subclasses, so you can find your own playstyle! 
<br><strong>Be a SUMMONER, MELEE BRAWLER, or THROW FIREBALLS with a boomerang effect.</strong><br><br><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/an_amazing_wizard_demo/aaw_bosses-2e-gif-b7f0a.mp4" type="video/mp4"></video><br><br><img src="https://items.gog.com/an_amazing_wizard_demo/story_of_a_wizard-675f3.png"><br>
Your village lies in ruins, and you have no memory of the events that led to its destruction. Fragments of your past are missing, and you awaken in a strange, unfamiliar world, with no recollection of how you got there. You will meet bizarre creatures who will assist you on your Journey. Beating the game on each next difficulty will uncover bits of truth about this world and you. <strong>Reclaim your memories, learn the truth about your power, and free yourself from this world!</strong><br><br><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/an_amazing_wizard_demo/aaw_dialogues-2e-gif-50972.mp4" type="video/mp4"></video><br><br><img src="https://items.gog.com/an_amazing_wizard_demo/all_features-36e8f.png"><br><ul class="bb_ul"><li><strong>100 PERMANENT UPGRADES</strong></li><li><strong>5 ELEMENTAL PLAYSTYLES</strong></li><li><strong>60 UNIQUE SPELLS</strong></li><li><strong>100 ENCHANTMENTS</strong></li><li><strong>2 WORLDS</strong></li></ul>*x2 in the current full game's beta state.<h4>New in Prologue</h4><ul class="bb_ul"><li>NEW DESERT MAP</li><li>NEW BOSSES x2</li><li>NEW SPELL MERGING SYSTEM</li><li>NEW ELITES</li><li>DIFFICULTY LEVELS x2</li></ul><h4>Your feedback and content requests are welcomed on our Discord <a href="http://discord.com/invite/nS6FvfzhJv" target="_blank" rel=" noopener">(https://discord.com/invite/nS6FvfzhJv)</a></h4><video muted="" loop="" preload="auto" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/an_amazing_wizard_demo/earthwizardsummon-2e-gif-b6103.mp4" type="video/mp4"></video>`
  },
  [SimpleGameMock.cyberpunk2077.slug]: {
    id: SimpleGameMock.cyberpunk2077.id,
    name: SimpleGameMock.cyberpunk2077.name,
    short_description:
      'Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.',
    price: SimpleGameMock.cyberpunk2077.price,
    rating: ENUM_GAME_RATING.BR18,
    release_date: '12-10-2022',
    gallery: [
      {
        src: 'https://images.gog-statics.com/06ec2f91e7f4a4b372c947307da3a6814b1c190be3fc1f4535ed9c2049c13dae.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/1b6963d25e96ca334bd3a2f85cb2899c252403b63d84e65835427d4df4ddb86a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/8e558ade20ae8710c765d65f30fa549000eccb7491504425c568ceea844755bf.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/40f995ffffa8f902b740990e01b51d8252aa232ba171c7ddc008c076d779ee7e.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/9d3d36f44e3496d5072e5eda1a99828f5636af11ead0558b634fb7075ba17863.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/0f12b91b0c4613ecffd6815d3dff17eac2fbe21310600ed0f2f10d640f478eae.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/bb0d4e9ebbfa88201e73842fb87af7703d880862f8a01498cbd4a66bdf355c60.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/73aaf4c34c2736f8e35cca5b9697d499a6c842f58a8c3dd0c5e01d4a7fb4b860.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/424a223577daebdb102dd5f1c2ef096f93df58e5e51051d42c183e711c2d97ea.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/bf8e70f4f45cce1da992ad01697ea61cf0fbe3c30f34e7be4fb588aa77139c4e.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/63bb90a5dc06df0530fd85c1ac057527de6ef2653249e3b2f958316602cb4370.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/c54dc68aaa570133b3500f79ddafabe50ee61b9cba42be1efba14269d360c1b8.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/67a2f65e8135b8def0c5ad73ea623f5c34ded20d8dcadc514ac51e47bed9525a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/4b295d49002ea6b2e3d63b523cc29bfcf3b27cb1ce8ba409ebb980db9f77692a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/ea1d80d5d59efd630d1c8531315d72549812d592bc8decc7d1e86940ec3d48c7.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.cyberpunk2077.cover,
    developers: SimpleGameMock.cyberpunk2077.developers,
    publisher: { name: 'CD PROJEKT RED' },
    categories: SimpleGameMock.cyberpunk2077.categories,
    platforms: SimpleGameMock.cyberpunk2077.platforms,
    description: `
        <a href="https://www.gog.com/game/cyberpunk_2077_ultimate_edition"><img src="https://items.gog.com/not_a_cp_pl/ENG_1540X400_bundle_banner_cyberpunk_phantom_liberty.png"></a><br><hr><img src="https://items.gog.com/not_a_cp/addon_en.png"><hr><br><p><img src="https://items.gog.com/not_a_cp/ABOUT1.jpg">&nbsp;<br><br><strong>Cyberpunk 2077</strong> is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?&nbsp;<br><br><img src="https://items.gog.com/not_a_cp/22.jpg">&nbsp;<br><br><strong>CUSTOMIZE YOUR CYBERPUNK WITH UPDATE 2.2!</strong><br>
Express yourself with free Update 2.2! Customize your character with new variants of cosmetic cyberware, tattoos, and makeup. Take your ride to the next level with Rayfield’s exclusive CrystalCoat technology, letting you swap colors on luxury and sports cars. Plus, dive into the enhanced photo mode to capture every moment in stunning detail.<br><br><img src="https://items.gog.com/not_a_cp/NGU_CREATE_YOUR_OWN_CYBERPUNK_EN-42d45.png">&nbsp;<br><br><strong>CREATE YOUR OWN CYBERPUNK&nbsp;</strong><br>
Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City.&nbsp;<br><br><img src="https://items.gog.com/not_a_cp/NGU_EXPLORE_THE_CITY_OF_FUTURE_EN-c4cbf.png">&nbsp;<br><br><strong>EXPLORE THE CITY OF THE FUTURE&nbsp;</strong><br>
Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to go, when to go, and how to get there.&nbsp;<br><br><img src="https://items.gog.com/not_a_cp/NGU_BUILD_YOUR_LEGEND_EN-b968c.png">&nbsp;<br><br><strong>BUILD YOUR LEGEND&nbsp;</strong><br>
Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.&nbsp;<br><br><img src="https://items.gog.com/not_a_cp/NGU_EQUIPPED_WITH_IMPROVEMENTS_EN-b2d88.png">&nbsp;<br><br><strong>EQUIPPED WITH IMPROVEMENTS&nbsp;</strong><br>
Experience Cyberpunk 2077 with a host of changes and improvements to gameplay and economy, the city, map usage, and more.&nbsp;<br><br><img src="https://items.gog.com/not_a_cp/NGU_INCLUDES_FREE_ADDITIONAL_CONTENT_EN-ce6da.png">&nbsp;<br><br><strong>CLAIM EXCLUSIVE ITEMS&nbsp;</strong><br>
Claim in-game swag &amp; digital goodies inspired by CD PROJEKT RED games as part of the My Rewards program.&nbsp;
</p><br><br><hr><a target="“_blank”" href="https://www.gog.com/promo/cyberpunk_hub"><img alt="" src="https://items.gog.com/not_a_cp/learn_more.png"></a><hr><center><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/TGA.png"><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/BAFTA_2.png"><br><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp1.png"><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp2.png"><hr>

* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams is available in English only.

            
            <p class="description__copyrights">
            CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. ©
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
        </p></center>`
  },
  [SimpleGameMock.boxville2Demo.slug]: {
    id: SimpleGameMock.boxville2Demo.id,
    name: SimpleGameMock.boxville2Demo.name,
    short_description:
      'Boxville 2, from Triomatica Games, is the next part of an adventure game about cans living in a box city.',
    price: SimpleGameMock.boxville2Demo.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '12-20-2024',
    gallery: [
      {
        src: 'https://images.gog-statics.com/be8cbbef8ecc5aa7863b08694192696438d94c8e86baad31be523a5aa0a4ea4f.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/5a5da19f164cc9ef37d6d98e01f75c13c7272c624761bdccccba29f36bebdacf.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/54388614ca1091ba9603000afb94727ffa281e89ed65ba58c74c70a9955609d5.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/d9b6694d3b4cc3c1c462c01fd4cab938c3683def1d2bb893bcba1df8d4f86e87.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/ec6962ae3cc46fd1bf8682e887fe89bc0bbf7764bb5be6db8e750fb624b842c7.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.boxville2Demo.cover,
    developers: SimpleGameMock.boxville2Demo.developers,
    publisher: { name: 'Triomatica Games' },
    categories: SimpleGameMock.boxville2Demo.categories,
    platforms: SimpleGameMock.boxville2Demo.platforms,
    description: `<div style="overflow: hidden;"><a href="https://www.gog.com/game/boxville_2"><img src="https://items.gog.com/boxville_2/main_main_boxville_2.png" style="margin: 5px 15px 0 10px; float: left; width: 250px"></a><span style="display: block;"><br><br>Boxville 2 is coming soon and can be wishlisted 
<a href="https://www.gog.com/game/boxville_2"><b>here</b></a></span></div><br><hr><br><p>
Boxville 2, from Triomatica Games, is the next part of an adventure game about cans living in a box city.
</p><p>
&nbsp;
</p><p>
Two can friends had an important job from the mayor to set up fireworks for the city's celebration. But due to a mistake, the fireworks went off wrong, causing chaos in the city. Worse, one of the friends went missing. Now, the main character, a red can, has to explore different areas and secret spots in Boxville and even travel outside the city to fix everything and find his friend.
</p><p>
&nbsp;
</p><p>
What you can expect to see and hear in Boxville:<br>
&nbsp;
</p><p>
- Hand-drawn graphics — all backgrounds and characters are carefully drawn by our artists.
</p><p>
- Every animation and sound is created especially for each interaction.
</p><p>
- Unique music track was created for every scene to accomplish the atmosphere of the game.
</p><p>
- Tens of logical puzzles and mini-games are tightly incorporated into the story of the game.
</p><p>
- There are no words in the game — all characters communicate via cartoony sketches.
</p>`
  },
  [SimpleGameMock.tombRaiderIvViRemastered.slug]: {
    id: SimpleGameMock.tombRaiderIvViRemastered.id,
    name: SimpleGameMock.tombRaiderIvViRemastered.name,
    short_description:
      'Play the next series of Tomb Raider adventures in this remastered collection of the Darkness Trilogy.',
    price: SimpleGameMock.tombRaiderIvViRemastered.price,
    rating: ENUM_GAME_RATING.BR18,
    release_date: '02-14-2025',
    gallery: [
      {
        src: 'https://images.gog-statics.com/1d6e41404874b6d072943674129e28a2f33aa6284f7a8979b02cd2ce61b63813.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/378f694a3ae847c630691cc5e594698bdb24f2b3cabecb16194bf580d682ac52.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/97f775b56eab8bd95f4c5d0aa8896eed220cdb101df57bf9a7fb579a5ce26789.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/1bafc601cdc090a8271aff46423fb47361148e3a2c1466425375f55438966339.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/0a55add439ef6db6d558963371bbb50d18e2a5cc0de8e9ec2d7a6440ca1d62ed.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/234d6ebb77ce0742b9b0681238e758c6550ed39d8eb4efc544a2ecc7bf70648b.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/55700446384ae919b2d76d216ddf15e1f5d5ce81ce267a02111eabe8b63f7f6d.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/06bf174a6d47359bf231dd4d874c76ed9102e6c0f3806a82521e9f9753a4ab67.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.tombRaiderIvViRemastered.cover,
    developers: SimpleGameMock.tombRaiderIvViRemastered.developers,
    publisher: { name: 'Aspyr' },
    categories: SimpleGameMock.tombRaiderIvViRemastered.categories,
    platforms: SimpleGameMock.tombRaiderIvViRemastered.platforms,
    description: `Her legacy lives on!</b><br><br>
Play the next series of Tomb Raider adventures in this remastered collection of the Darkness Trilogy.<br>
&nbsp;
<h4>Included Game Titles</h4><br><b>Tomb Raider: The Last Revelation</b> – Lara Croft discovers the lost tomb of the Egyptian God Set, unwittingly unleashing him and fulfilling an ancient prophecy—one that plunges mankind into darkness.<br><br><b>Tomb Raider: Chronicles</b> – Following the events of The Last Revelation, Lara Croft is buried in an Egyptian tomb and is presumed dead. At her memorial, those closest to her reminisce about secrets from her past.<br><br><b>Tomb Raider: The Angel of Darkness</b> – Accused of murder, Lara becomes a fugitive on the run, while uncovering a sinister conspiracy involving alchemical experiments and the search for ancient artifacts.<br>
&nbsp;
<h4>Key Features</h4><br><b>See the Classic &amp; Remastered Visuals</b>:&nbsp;Play with the original polygonal models or swap to the remastered graphics at any time<br><br><b>Travel the Globe</b>: Follow Lara Croft around iconic locales including Cairo, Rome, Paris, and many more<br><br><b>Experience Lara’s Darkest Adventures</b>: Uncover the secrets of Lara Croft’s past and shed light on the mystery of her disappearance

            
            <p class="description__copyrights">
            TOMB RAIDER IV-VI REMASTERED © 2024 Crystal Dynamics group of companies. All rights reserved. TOMB RAIDER, LARA CROFT, CRYSTAL DYNAMICS, and the CRYSTAL DYNAMICS logo are trademarks of the Crystal Dynamics group of companies. © 2024 Aspyr Media, Inc. Aspyr is a registered trademark of Aspyr Media, Inc., and the Aspyr star logo is a trademark of Aspyr Media. All other marks and logos are the property of their respective owners. All rights reserved.
        </p>`
  },
  [SimpleGameMock.baldursGate3.slug]: {
    id: SimpleGameMock.baldursGate3.id,
    name: SimpleGameMock.baldursGate3.name,
    short_description:
      'Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.',
    price: SimpleGameMock.baldursGate3.price,
    rating: ENUM_GAME_RATING.BR16,
    release_date: '08-03-2023',
    gallery: [
      {
        src: 'https://images.gog-statics.com/12eb24fb7b04b4dacab55fdfc1c58f4c3539dc17955282317e50c621a12fa436.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/48327bab9f9d3b910cb476a59f9123fdb523fafe408cf3f72059073bf3360619.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/5c69db376648f7c760814b5979ca65fdd3be8aaf107971bde74f8e934d5f7703.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/90f7a7df0dd334dc2ace23f5706aed763292b7a0f5e5d09d3d84db58ab6306af.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/d8bb3aa39ff762c8134206d3bd0da3a59c8686eb3ce0042e1e8ca1e07f2a1bf9.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/639a138ae552da51c50f1a276f5a07f07eb7a4bf0374dcb4603d1aabfacde26d.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/e4c3041febd7d67799dba72185877866274ca505d6b5f2ecc12443ecdc360458.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/4ac85d615a085c8c24b1fcc6f63b7b2bc8dcda6c2b7fcc0d691871666c3de201.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/031b5010e665b8794be92683cfd3e03fa8d0cf9aa4bb2755055f0e4fb3381c8f.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/fddd5a08c0610b69a19bd7e1ef9a2ed566afd816514627618321d6a4ecf17808.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/85d0ddfcefd0762721e4e5b6869711d81dee2c16a7f3eac7e670d085341a10e5.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/b4961a5c582c1122c3271d4bfbcb998432906aa11c8607e89e9c9eb5ce58c8c3.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/2edb2f2b8575fdc81ed448ebede970b53e0967edc40d94af2f73d7fc12909cb1.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/799d396ed73de5cec866e0de32b5d65a9870db5b8d519588726bf3a995351416.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/f8b0ad06e204d77cc974f92c0bcc3e572907fbaacd7f76dc247bf4e38b7ab6f8.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.baldursGate3.cover,
    developers: SimpleGameMock.baldursGate3.developers,
    publisher: { name: 'Larian Studios' },
    categories: SimpleGameMock.baldursGate3.categories,
    platforms: SimpleGameMock.baldursGate3.platforms,
    description: `<p class="module">Cross-platform multiplayer with Steam is supported.</p><br><img src="https://items.gog.com/baldur's_gate_3/KeyArt_new_gif.gif"><br><br>
Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. 
<br><br>
Mysterious abilities are awakening inside you, drawn from a Mind Flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.  
<br><br>
From the creators of Divinity: Original Sin 2 comes a next-generation RPG, set in the world of Dungeons and Dragons.  

<br><br><p style="text-align:center;"><img src="https://items.gog.com/baldur's_gate_3/gather_your_party_new_gif.gif" alt="" width="100%"></p><br>


Choose from a wide selection of D&amp;D races and classes, or play as an origin character with a hand-crafted background. Adventure, loot, battle and romance as you journey through the Forgotten Realms and beyond. Play alone, and select your companions carefully, or as a party of up to four in multiplayer. 
<br><br><img src="https://items.gog.com/baldur's_gate_3/An_expansive_original_story.new.png"><br><br>
Abducted, infected, lost. You are turning into a monster, but as the corruption inside you grows, so does your power. That power may help you to survive, but there will be a price to pay, and more than any ability, the bonds of trust that you build within your party could be your greatest strength. Caught in a conflict between devils, deities, and sinister otherworldly forces, you will determine the fate of the Forgotten Realms together.

<br><br><p style="text-align:center;"><img src="https://items.gog.com/baldur's_gate_3/Next_Gen_new_gif.gif" alt="" width="100%"></p><br>
Forged with the new Divinity 4.0 engine, Baldur’s Gate 3 gives you unprecedented freedom to explore, experiment, and interact with a world that reacts to your choices. A grand, cinematic narrative brings you closer to your characters than ever before, as you venture through our biggest world yet. 
<br><br><img src="https://items.gog.com/baldur's_gate_3/No_adventure_will_be_the_same.new.png"><br><br>
The Forgotten Realms are a vast, detailed and diverse  world, and there are secrets to be discovered all around you -- verticality is a vital part of exploration. Sneak, dip, shove, climb, and jump as you journey from the depths of the Underdark to the glittering rooftops of the Upper City. How you survive, and the mark you leave on the world, is up to you.
<br><br><img src="https://items.gog.com/baldur's_gate_3/01_Bullets_points.new.png"><br><ul class="bb_ul">allows you to combine your forces in combat, and split your party to follow your own quests and agendas. Concoct the perfect plan together… or introduce an element of chaos when your friends least expect it.</ul><br><img src="https://items.gog.com/baldur's_gate_3/02_Bullets_points.new.png"><br><ul class="bb_ul">offer a hand-crafted experience, each with their own unique traits, agenda, and outlook on the world. Their stories intersect with the entire narrative, and your choices will determine whether those stories end in redemption, salvation, domination, or many other outcomes. </ul><br><img src="https://items.gog.com/baldur's_gate_3/03_Bullets_points.new.png"><br><ul class="bb_ul">based on the D&amp;D 5e ruleset. Team-based initiative, advantage &amp; disadvantage, and roll modifiers join combat cameras, expanded environmental interactions, and a new fluidity in combat that rewards strategy and foresight. </ul><br><img src="https://items.gog.com/baldur's_gate_3/04_Bullets_points.new.png"><br><ul class="bb_ul">through your choices, and the roll of the dice. No matter who you play, or what you roll, the world and its inhabitants will react to your story.</ul><br><img src="https://items.gog.com/baldur's_gate_3/05_Bullets_points.new.png"><br><ul class="bb_ul">allows you to pause the world around you at any time even outside of combat. Whether you see an opportunity for a tactical advantage before combat begins, want to pull off a heist with pin-point precision, or need to escape a fiendish trap. Split your party, prepare ambushes, sneak in the darkness -- create your own luck!  </ul><br><p style="text-align:center;"><img src="https://items.gog.com/baldur's_gate_3/Final_Image_new_gif.gif" alt="" width="100%"></p><p class="description__copyrights">
            © 2020 WIZARDS OF THE COAST. ALL RIGHTS RESERVED. WIZARDS OF THE COAST, BALDUR’S GATE, DUNGEONS &amp; DRAGONS, D&amp;D, AND THEIR RESPECTIVE LOGOS
ARE REGISTERED TRADEMARKS OF WIZARDS OF THE COAST LLC
© 2020 LARIAN STUDIOS. ALL RIGHTS RESERVED. LARIAN STUDIOS IS A REGISTERED TRADEMARK OF ARRAKIS NV, AFFILIATE OF LARIAN STUDIOS GAMES LTD.
ALL COMPANY NAMES, BRAND NAMES, TRADEMARKS AND LOGOS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS.
        </p>`
  },
  [SimpleGameMock.stalker2.slug]: {
    id: SimpleGameMock.stalker2.id,
    name: SimpleGameMock.stalker2.name,
    short_description:
      'Discover the legendary S.T.A.L.K.E.R. universe and experience.',
    price: SimpleGameMock.stalker2.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '11-20-2024',
    gallery: [
      {
        src: 'https://images.gog-statics.com/626ca2497e7a3b10ef47a3c6e858d088593400966d8a5512ff4fe1cfb317544a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/c29b76b0f000926ba3556082f27f84f13828ef802ff2f47ce26780ac335e79ce.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/889491eae1f42a690bd9a537edd28ff97ff689c0736c8bd29ccd47972f04b713.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/de3a74475b97b455de856eea941c013f047427af5aee8c2458a7ece99795997c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/6abc1fc2dcae8c658c87a21d4eda84fc3f7f052d6a68b6391476b78cb96e268b.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/9cc1d3e8ac7c6a855e6743cb350a2e0631325163db93de73792a7d9745a83d2d.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/000744ba5f7b9bf6945d312a3badcfe314529cc307f1eb142024eefb620572c4.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/b8957e101da8cf0776d452ebcfe67635433444cdcf8c608a15443e7e35e0f932.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/980ca385f463f405331dc1620f273a19fc31866f690555fb6caa787398c77a8c.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/560f3fab44da73baa1f58aad02c627fcc59279b69e58f2a7fe4e689c17f59722.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.stalker2.cover,
    developers: SimpleGameMock.stalker2.developers,
    publisher: { name: 'GSC Game World' },
    categories: SimpleGameMock.stalker2.categories,
    platforms: SimpleGameMock.stalker2.platforms,
    description: `<h4><strong>Discover the legendary S.T.A.L.K.E.R. universe and experience:</strong>
&nbsp;</h4><ul><li>Unique gameplay built on a blend of FPS, horror, and immersive sim</li><li>It is a non-linear story, with a variety of paths that lead to one of the several endings</li><li>Benchmark-setting graphics developed using cutting-edge photogrammetry and scanning technologies</li><li>Advanced artificial intelligence systems that will keep engaged even the most hard-boiled players</li><li>Immersive survival mechanics like hunger, sleeping, bleeding, radiation effects that enrich the gameplay</li><li>Dynamic day-night cycle and weather will add even more realism to the gameplay experience</li><li>Mod support gives the freedom to the creative stalker to extend and enrich the game universe</li><li>Multiplayer mode, will be added after release as a free update</li></ul><p><br></p><p><img src="https://items.gog.com/s.t.a.l.k.e.r._2_heart_of_chornobyl/1.gif"><br><br>
&nbsp;
</p><p>
Chornobyl Exclusion Zone has changed dramatically after the second massive explosion in the year 2006. Violent mutants, deadly anomalies, and warring factions have made the Zone a very tough place to survive. Nevertheless, artifacts of unbelievable value attracted many people called S.T.A.L.K.E.R.s, who entered the Zone for their own risk, striving to make a fortune out of it or even to find the Truth concealed in the Heart of Chornobyl.<br>
&nbsp;
</p><h4>EPIC NONLINEAR STORY IN SEAMLESS OPEN WORLD</h4><p>
Take over a role of the lone stalker and explore photorealistic seamless open world in a 64-km² radioactive zone with a variety of environments that reveal post-apocalyptic atmosphere from different angles. Make your way through the Zone to define your destiny as you choose your paths within highly branching epic story.<br>
&nbsp;
</p><p><img src="https://items.gog.com/s.t.a.l.k.e.r._2_heart_of_chornobyl/2.gif"><br>
&nbsp;
</p><h4>VARIETY OF ENEMIES AND HUNDREDS OF WEAPON COMBINATIONS</h4><p>
Meet members of different factions deciding who of them worth your friendship and who deserve a bullet. Engage intense gunfights with a variety of enemies that follow different tactics trying to outsmart you. Choose your preferable firearms from 30 types of weapons with numerous modifications that allow creating hundreds of distinctive lethal combinations.
</p><p>
&nbsp;
</p><p><img src="https://items.gog.com/s.t.a.l.k.e.r._2_heart_of_chornobyl/3.gif"><br>
&nbsp;
</p><h4>LEGENDARY MUTANTS WITH DIFFERENT BEHAVIOUR MODELS</h4><p>
Prepare to encounter horrifying mutated creatures that will try to slaughter you following different behaviour model. Each mutant may appear in different subtypes which makes their behaviour less predictible. Truly extreme danger represent regions with lairs with numerous mutants hunting in large groups.
</p><p>
&nbsp;
</p><p><img src="https://items.gog.com/s.t.a.l.k.e.r._2_heart_of_chornobyl/4.gif"><br>
&nbsp;
</p><h4>ARTIFACTS OF INCREDIBLE VALUE AND UNFORGIVING ANOMALIES</h4><p>
The most valuable artifacts and secrets of the Zone are hidden in the most dangerous places. Beware of the hazardous anomalies and unique devastating arch-anomalies as you hunt for highly valuable artifacts scattered around the Zone. Will you dare to unveil the mysteries of the Zone that took lives of many others before you?<br>
&nbsp;
</p><p><img src="https://items.gog.com/s.t.a.l.k.e.r._2_heart_of_chornobyl/5.gif"></p><p>
&nbsp;
</p><h4><strong>GOOD HUNTING, STALKER!</strong>
&nbsp;</h4><p><img src="https://items.gog.com/s.t.a.l.k.e.r._2_heart_of_chornobyl/6.gif"></p><p class="description__copyrights">
            S.T.A.L.K.E.R. 2: Heart of Chornobyl © 2024 GSC Game World Global Ltd. <br>S.T.A.L.K.E.R. 2 is a registered trademark of GSC Game World Global Ltd. All other trademarks, logos and copyrights are property of their respective owners. All rights reserved. 
        </p>`
  },
  [SimpleGameMock.dishonored2.slug]: {
    id: SimpleGameMock.dishonored2.id,
    name: SimpleGameMock.dishonored2.name,
    short_description:
      'Reprise your role as a supernatural assassin in Dishonored 2.',
    price: SimpleGameMock.dishonored2.price,
    rating: ENUM_GAME_RATING.BR0,
    release_date: '11-11-2016',
    gallery: [
      {
        src: 'https://images.gog-statics.com/912c19a772271fd77c4a2e1e622119844059570cf8c8c1f53f0bd99ab7441aca.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/341769032c17a97d267b98eb65c759a0becb8fb4d2aa4eee6d56b3c6994ffd98.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/d6713040b11174508fc2a35cb5f57e11075bd220c258574c314a42aee15ea358.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/3b9df9651ff5d0530c993785f57d6dae33f09e1d78d7c77098992bfe4caf9f99.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/6211a3266ffbc2e0a6030d1a2225423710c226f3ca28da207dd8c8bcd2f7364a.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/352304427802fef2eaae21bbeb71cd104c5633905a0459e0a26f3cf3c95e3637.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/0c7a41d10b927a252f4ff4eb96f69a88b8ecb6579db5a665fea7e3f74ad47d74.jpg',
        label: null
      },
      {
        src: 'https://images.gog-statics.com/97fcb4a8490d5d79eabad18cf3f9e43e9a23484b128414386b4bda2eedf11500.jpg',
        label: null
      }
    ],
    cover: SimpleGameMock.dishonored2.cover,
    developers: SimpleGameMock.dishonored2.developers,
    publisher: { name: 'Bethesda Softworks LLC' },
    categories: SimpleGameMock.dishonored2.categories,
    platforms: SimpleGameMock.dishonored2.platforms,
    description: `Reprise your role as a supernatural assassin in Dishonored 2.<br><br>
Praised by PC Gamer as “brilliant”, IGN as “amazing” and “a super sequel, declared a “masterpiece” by Eurogamer, and hailed “a must-play revenge tale among the best in its class” by Game Informer, Dishonored 2 is the follow up to Arkane Studio's first-person action blockbuster and winner of more than 100 'Game of the Year' awards, Dishonored.<br><br>
Play your way in a world where mysticism and industry collide. Will you choose to play as Empress Emily Kaldwin or the royal protector, Corvo Attano? Will you make your way through the game unseen, make full use of its brutal combat system, or use a blend of both? How will you combine your character's unique set of powers, weapons and gadgets to eliminate your enemies? The story responds to your choices, leading to intriguing outcomes, as you play through each of the game's hand-crafted missions.
<h4>Story:</h4>
Dishonored 2 is set 15 years after the Lord Regent has been vanquished and the dreaded Rat Plague has passed into history. An otherworldly usurper has seized Empress Emily Kaldwin’s throne, leaving the fate of the Isles hanging in the balance. As Emily or Corvo, travel beyond the legendary streets of Dunwall to Karnaca, the once-dazzling coastal city that holds the keys to restoring Emily to power. Armed with the Mark of the Outsider and powerful new abilities, track down your enemies and take back what’s rightfully yours.

<h4>Key Features:</h4><ul><li><b>The Assassins</b><br>
As fully voiced characters, Emily Kaldwin and Corvo Attano now bring their own perspectives and emotional responses to the world and story. Use each character’s set of powers, gadgets and uniquely-tuned weapons in creative ways as you explore the world – whether you fight your way through the city streets or sneak across the rooftops - and which enemies you decide to eliminate or spare.
&nbsp;</li><li><b>Supernatural Powers</b><br>
Advanced bonecharm crafting and all-new upgrade trees allow you to customize your powers in vastly different ways. Become a living shadow to silently stalk your targets, link enemies so they share a common fate, or mesmerize your foes and dominate their minds. Choose from nearly infinite combinations of violence, nonlethal combat, powers and weapons to accomplish your objectives.
&nbsp;</li><li><b>Imaginative World</b><br>
From the grimy, rat-infested streets of Dunwall to the lush, exotic coasts of a decaying Karnaca, immerse yourself in stylized locales created by Arkane’s premiere art and narrative teams. The world is a character in its own right, rich with story, architecture and eclectic characters. It is also punctuated by signature mission locations, such as the Dust District, ravaged by dust storms and warring factions, and a madman’s mansion made of shifting walls, deadly traps and clockwork soldiers.
&nbsp;</li><li><b>The Void Engine</b><br>
Dishonored 2 is beautifully brought to life with the new Void Engine, a leap forward in rendering technology, built from id Tech and highly-customized by Arkane Studios. Designed to support world-class art direction and take full advantage of the powerful hardware this generation has to offer, the Void Engine allows for significant advances to all game systems, including responsive stealth and combat Artificial Intelligence, lighting and graphical rendering, impressively dense urban environments, and story presentation.</li></ul><p class="description__copyrights">
            © 2016 Bethesda Softworks LLC, a ZeniMax Media company. Developed in association with Arkane Studios. Dishonored, Arkane, Void Engine powered by id Tech, Bethesda, Bethesda Softworks, ZeniMax and related logos are registered trademarks or trademarks of ZeniMax Media Inc. in the U.S. and/or other countries. All Rights Reserved.
        </p>`
  }
}

export function getRecomended() {
  return {
    title: 'Recommended Games',
    highlight: Highlight.tombraider,
    games: [
      SimpleGameMock.theWitcher3WildHunt,
      SimpleGameMock.gris,
      SimpleGameMock.starWarsEpisode1JediPowerBattles,
      SimpleGameMock.fallout4,
      SimpleGameMock.ultrakill,
      SimpleGameMock.tombRaiderGoty
    ]
  }
}
