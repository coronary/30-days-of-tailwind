const videos = [
    {
        "title": "Indian Hawker Food in Singapore",
        "channel": "DancingBacons",
        "views": "2.4K views\n28 minutes ago"
    },
    {
        "title": "SCL Season 2 Preview! Featuring Mango, Zain, Axe, & More!",
        "channel": "Hugs86",
        "views": "606 views\n1 hour ago"
    },
    {
        "title": "Let's Learn Prisma! (with Nikolas Burk) — Learn With Jason",
        "channel": "Jason Lengstorf",
        "views": "207 views\n3 hours ago"
    },
    {
        "title": "Stylish ways to grab the ledge",
        "channel": "RadarSSBM",
        "views": "644 views\n3 hours ago"
    },
    {
        "title": "Sweet Anita's Funniest Drunk Moments",
        "channel": "Sweet Anita",
        "views": "16K views\n4 hours ago"
    },
    {
        "title": "pokemon crystal randomized shenanigans",
        "channel": "ProZD",
        "views": "26K views\n4 hours ago"
    },
    {
        "title": "GG Melee makes everyone rage quit | Stream Highlights",
        "channel": "GG Melee",
        "views": "1.9K views\n5 hours ago"
    },
    {
        "title": "i threw up in front of 10,000 people...",
        "channel": "Jdowns",
        "views": "193 views\n6 hours ago"
    },
    {
        "title": "Zack Snyder's Justice League Review - YMS",
        "channel": "YourMovieSucksDOTorg",
        "views": "81K views\n6 hours ago"
    },
    {
        "title": "紅遍全網的爆漿小點心，不用烤箱就能做！",
        "channel": "美食台foodvideo",
        "views": "1.4K views\n7 hours ago"
    },
    {
        "title": "The Pengest Munch Ep. 48: Pasha's Peri-Peri (Limehouse)",
        "channel": "The CNSR",
        "views": "65K views\n7 hours ago"
    },
    {
        "title": "Are You Doing All These In Your Interviews?",
        "channel": "Web Dev Simplified",
        "views": "4.2K views\n7 hours ago"
    },
    {
        "title": "Michael Pulizzi's \"FLATBAR\" Part",
        "channel": "ThrasherMagazine",
        "views": "20K views\n7 hours ago"
    },
    {
        "title": "First Wash in 3 Years Ferrari 458 Daily Driver",
        "channel": "AMMO NYC",
        "views": "85K views\n7 hours ago"
    },
    {
        "title": "10 CSS Pro Tips - Code this, NOT that!",
        "channel": "Fireship",
        "views": "25K views\n9 hours ago"
    },
    {
        "title": "Paul Pierce Fired from ESPN for Spicy Instagram Live | DESUS & MERO | SHOWTIME",
        "channel": "DESUS & MERO on SHOWTIME",
        "views": "28K views\n9 hours ago"
    },
    {
        "title": "Using ALL the Ultimates | Fitzy Weekly 60",
        "channel": "Fitzyhere",
        "views": "18K views\n9 hours ago"
    },
    {
        "title": "[1271] The Deceptively Cheap-Looking Commando Lock",
        "channel": "LockPickingLawyer",
        "views": "112K views\n10 hours ago"
    },
    {
        "title": "New Wilderness Off Grid Cabin, Milling Lumber, Building an Outhouse and a Ladder",
        "channel": "My Self Reliance",
        "views": "120K views\n11 hours ago"
    },
    {
        "title": "Gluten Free Korean Veggie Pancake",
        "channel": "Just One Cookbook",
        "views": "2.8K views\n11 hours ago"
    },
    {
        "title": "限時限量的鮮爽，嘗了它，才是春天啊！",
        "channel": "美食台foodvideo",
        "views": "683 views\n11 hours ago"
    },
    {
        "title": "Earworm is back! Here’s a preview",
        "channel": "Vox",
        "views": "67K views\n11 hours ago"
    },
    {
        "title": "Inside Pharrell & David Grutman's Goodtime Hotel In Miami Beach | Open Door | Architectural Digest",
        "channel": "Architectural Digest",
        "views": "55K views\n11 hours ago"
    },
    {
        "title": "Turn 7 Basic Ingredients into Restaurant Style Ramen",
        "channel": "Pro Home Cooks",
        "views": "28K views\n12 hours ago"
    },
    {
        "title": "山珍海味配上它，搭！",
        "channel": "美食台foodvideo",
        "views": "782 views\n13 hours ago"
    },
    {
        "title": "Next.js & Contentful Site Build Tutorial #7 - Generating Paths",
        "channel": "The Net Ninja",
        "views": "1.3K views\n14 hours ago"
    },
    {
        "title": "Daily Melee Community Highlights: ZAIN SUFFOCATES PIKACHU",
        "channel": "Gloomshot - Melee",
        "views": "1.8K views\n17 hours ago"
    },
    {
        "title": "厨房好帮手，适配中西餐——新疆番茄制品绝了！How to use high-quality Xinjiang tomato products in cooking丨曼食慢语",
        "channel": "曼食慢语 Amanda Tastes",
        "views": "12K views\n18 hours ago"
    },
    {
        "title": "DON'T SHOOT UP THE PARTY - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "90K views\n19 hours ago"
    },
    {
        "title": "CHAIN ON FEAT. JPEGMAFIA - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "95K views\n19 hours ago"
    },
    {
        "title": "THE LIGHT - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "50K views\n19 hours ago"
    },
    {
        "title": "WINDOWS FEAT. SOGONE SOFLEXY - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "39K views\n19 hours ago"
    },
    {
        "title": "OLD NEWS FEAT. BAIRD - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "28K views\n19 hours ago"
    },
    {
        "title": "DEAR LORD - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "22K views\n19 hours ago"
    },
    {
        "title": "COUNT ON ME - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "28K views\n19 hours ago"
    },
    {
        "title": "THE LIGHT PT. II - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "27K views\n19 hours ago"
    },
    {
        "title": "WHEN I BALL - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "30K views\n19 hours ago"
    },
    {
        "title": "WHAT'S THE OCCASION - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "33K views\n19 hours ago"
    },
    {
        "title": "BANKROLL FEAT. A$AP ROCKY & A$AP FERG - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "79K views\n19 hours ago"
    },
    {
        "title": "I'LL TAKE YOU ON FEAT. CHARLIE WILSON - BROCKHAMPTON",
        "channel": "BROCKHAMPTON",
        "views": "37K views\n19 hours ago"
    },
    {
        "title": "Doja Cat - Kiss Me More (Official Video) ft. SZA",
        "channel": "Doja Cat",
        "views": "3.5M views\n19 hours ago"
    },
    {
        "title": "#1 Mets Fan Glenn Close on Her Legendary Acting & Broadway Career | Ext. Interview | DESUS & MERO",
        "channel": "DESUS & MERO on SHOWTIME",
        "views": "13K views\n19 hours ago"
    },
    {
        "title": "Amoeba Hollywood Is Open In Our New Location",
        "channel": "Amoeba",
        "views": "4.2K views\n21 hours ago"
    },
    {
        "title": "ericdoa live at Subculture Party | Apr 2, 2021",
        "channel": "flashmemories",
        "views": "257 views\n22 hours ago"
    },
    {
        "title": "Ravenna Golden live at Subculture Party | Apr 2, 2021",
        "channel": "flashmemories",
        "views": "190 views\n22 hours ago"
    },
    {
        "title": "What'ch'all Doin' In Here [Music Movie] - Vizier & The Golden Witch",
        "channel": "Ygg Studio",
        "views": "1.4K views\n22 hours ago"
    },
    {
        "title": "Desus Had Sympathy COVID, FIU Hires Coach Horny, & History-Making Baby | DESUS & MERO | SHOWTIME",
        "channel": "DESUS & MERO on SHOWTIME",
        "views": "45K views\n22 hours ago"
    },
    {
        "title": "How I FINALLY Made 100-Year Old Eggs | Homemade Century Eggs 2.0",
        "channel": "emmymade",
        "views": "173K views\n23 hours ago"
    },
    {
        "title": "Melee Cheater Caught on Ludwig's Subathon!",
        "channel": "Hugs86",
        "views": "7.4K views\n1 day ago"
    },
    {
        "title": "S2j Reviews CHEF RACH's COOKBOOK (Pt.2 Basics)",
        "channel": "Johnny S2J",
        "views": "463 views\n1 day ago"
    },
    {
        "title": "What The Khloe Kardashian Leak REALLY Exposed, PewDiePie, MrBeast, COVID Scammers, Biden & More News",
        "channel": "Philip DeFranco",
        "views": "851K views\n1 day ago"
    },
    {
        "title": "Iglooghost - Lei Line Eon ALBUM REVIEW",
        "channel": "theneedledrop",
        "views": "33K views\n1 day ago"
    },
    {
        "title": "Easy Spaetzle with Bacon, Cabbage, and Cheese | Kenji's Cooking Show",
        "channel": "J. Kenji López-Alt",
        "views": "94K views\n1 day ago"
    },
    {
        "title": "Tuna, egg, and chicken salad | homemade mascarpone dressing",
        "channel": "Adam Ragusea",
        "views": "191K views\n1 day ago"
    },
    {
        "title": "Board Game Reviews Ep #124: WASTELAND EXPRESS DELIVERY SERVICE",
        "channel": "ProZD",
        "views": "15K views\n1 day ago"
    },
    {
        "title": "What is MERN Stack?",
        "channel": "Code with Ania Kubów",
        "views": "4K views\n1 day ago"
    },
    {
        "title": "16 Tricks Only The Best FALCON PROS Use",
        "channel": "SSBM Tutorials",
        "views": "8.3K views\n1 day ago"
    },
    {
        "title": "\"Mang0 paid someone to snipe me?\" -Hbox || SSBM community highlights #220",
        "channel": "Pengboys",
        "views": "10K views\n1 day ago"
    },
    {
        "title": "Join Us!",
        "channel": "Corridor Crew",
        "views": "254K views\n1 day ago"
    },
    {
        "title": "How To Get Started As A Freelance Web Developer",
        "channel": "Web Dev Simplified",
        "views": "7.1K views\n1 day ago"
    },
    {
        "title": "CLEAN Game but it's August 2020",
        "channel": "Fitzyhere",
        "views": "22K views\n1 day ago"
    },
    {
        "title": "Crème Caramel (Flan) | Basics with Babish (feat. Dominique Ansel)",
        "channel": "Babish Culinary Universe",
        "views": "677K views\n1 day ago"
    },
    {
        "title": "Crumb-Coating a Triple-Layer Cake with Dawn Konofaos",
        "channel": "King Arthur Baking Company",
        "views": "434 views\n1 day ago"
    },
    {
        "title": "Next.js & Contentful Site Build Tutorial #6 - Styled JSX",
        "channel": "The Net Ninja",
        "views": "1.7K views\n1 day ago"
    },
    {
        "title": "Next.js & Contentful Site Build Tutorial #5 - Using Images from Contentful",
        "channel": "The Net Ninja",
        "views": "1.1K views\n1 day ago"
    },
    {
        "title": "Daily Melee Community Highlights: TIGHT SEQUENCE BY MANGO THE BIRD MACHINE",
        "channel": "Gloomshot - Melee",
        "views": "1.7K views\n1 day ago"
    },
    {
        "title": "Hitman 3 Psycho Stealth Kills (Chongqing, China)",
        "channel": "StealthGamerBR ™",
        "views": "57K views\n1 day ago"
    },
    {
        "title": "Why I Stopped Eating Meat, Dairy & Seafood 🤫",
        "channel": "Seonkyoung Longest",
        "views": "73K views\n1 day ago"
    },
    {
        "title": "D Neak \"Take Out\" (Official Video)",
        "channel": "Jeremiah Phillips",
        "views": "30K views\n1 day ago"
    },
    {
        "title": "MY BIGGEST INSECURITES - TRUTH OR DAB SPICY CHALLENGE",
        "channel": "PaymoneyWubby Highlights",
        "views": "156K views\n1 day ago"
    },
    {
        "title": "The OFFICIAL CRT Tier List!",
        "channel": "Hugs86",
        "views": "7.3K views\n2 days ago"
    },
    {
        "title": "Giving Fans $15,000! & Valkyrae, Pokimane, America's Religion \"Problem\", & More News",
        "channel": "Philip DeFranco",
        "views": "911K views\n2 days ago"
    },
    {
        "title": "JOBA | MEET THE ROADRUNNERS",
        "channel": "BROCKHAMPTON",
        "views": "199K views\n2 days ago"
    },
    {
        "title": "Cold Call: Kader",
        "channel": "ThrasherMagazine",
        "views": "195K views\n2 days ago"
    },
    {
        "title": "R.A. The Rugged Man - Montero (Lil Nas X Remix)",
        "channel": "RAtheRuggedManTV",
        "views": "82K views\n2 days ago"
    },
    {
        "title": "S2J Reviews CHEF RACH's COOKBOOK (Pt.1 Basics)",
        "channel": "Johnny S2J",
        "views": "1.2K views\n2 days ago"
    },
    {
        "title": "Self Care with Sarah Schauer",
        "channel": "Trixie Mattel",
        "views": "460K views\n2 days ago"
    },
    {
        "title": "Troll Your Boss With The Jamstack (with Cassidy Williams) — Learn With Jason",
        "channel": "Jason Lengstorf",
        "views": "993 views\n2 days ago"
    },
    {
        "title": "Godspeed You! Black Emperor - G_d's Pee AT STATE'S END ALBUM REVIEW",
        "channel": "theneedledrop",
        "views": "79K views\n2 days ago"
    },
    {
        "title": "Let's Rank All the Poke Balls and Gym Badges",
        "channel": "ProZD",
        "views": "151K views\n2 days ago"
    },
    {
        "title": "Presage Exotic Mission Developer Deep Dive",
        "channel": "Bungie",
        "views": "37K views\nStreamed 2 days ago"
    },
    {
        "title": "PPMD & Toph Start A Podcast FOR THE PEOPLE! | Radio Melee Ep 1",
        "channel": "GG Melee",
        "views": "7.4K views\n2 days ago"
    },
    {
        "title": "Pusher Bearings \"High Stakes\" Video",
        "channel": "ThrasherMagazine",
        "views": "57K views\n2 days ago"
    },
    {
        "title": "God designing human taste buds",
        "channel": "ian kung",
        "views": "178K views\n2 days ago"
    },
    {
        "title": "Quick-fire Questions 🔥 - Tech Edition! with @Colby Fayock",
        "channel": "Code with Ania Kubów",
        "views": "1.2K views\n2 days ago"
    },
    {
        "title": "How to Master ANY Camera - Functional Filmmaking",
        "channel": "Corridor Crew",
        "views": "201K views\n2 days ago"
    },
    {
        "title": "Easy Hand-Drawn SVG Animation #Shorts",
        "channel": "Fireship",
        "views": "39K views\n2 days ago"
    },
    {
        "title": "The Crunchiest Homemade Latkes (3 Ways)",
        "channel": "Joshua Weissman",
        "views": "529K views\n2 days ago"
    },
    {
        "title": "This TP Strat is still so good",
        "channel": "Fitzyhere",
        "views": "42K views\n2 days ago"
    },
    {
        "title": "BETTER THAN TAKEOUT - Vegetable Chow Mein HK Style Stir Fry Noodles (豉油皇炒面)",
        "channel": "Souped Up Recipes",
        "views": "28K views\n2 days ago"
    },
    {
        "title": "[1270] Same Garbage, Different Name... A Common Problem",
        "channel": "LockPickingLawyer",
        "views": "315K views\n2 days ago"
    },
    {
        "title": "How this New York island became a mass grave",
        "channel": "Vox",
        "views": "377K views\n2 days ago"
    },
    {
        "title": "春日限定莫忘它，酒香醇厚，甜糯松軟",
        "channel": "美食台foodvideo",
        "views": "6.7K views\n2 days ago"
    },
    {
        "title": "Next.js & Contentful Site Build Tutorial #4 - Outputting Recipe Data",
        "channel": "The Net Ninja",
        "views": "2.3K views\n2 days ago"
    },
    {
        "title": "Daily Melee Community Highlights: MANGOFORTY BBB",
        "channel": "Gloomshot - Melee",
        "views": "2.2K views\n2 days ago"
    },
    {
        "title": "17 Korean Snacks and Drinks",
        "channel": "DancingBacons",
        "views": "191K views\n2 days ago"
    },
    {
        "title": "Training Mode Tournaments #22 KoDoRiN (Marth) vs. Gahtzu (Falcon) - Grand Finals SSBM",
        "channel": "Team OXY",
        "views": "284 views\n2 days ago"
    },
    {
        "title": "Training Mode Tournaments #22 KoDoRiN (Marth) vs. Ben (Sheik) - Losers Finals SSBM",
        "channel": "Team OXY",
        "views": "89 views\n2 days ago"
    },
    {
        "title": "Training Mode Tournaments #22 Mot$ (Fox) vs. Ben (Sheik) - Losers Semis SSBM",
        "channel": "Team OXY",
        "views": "42 views\n2 days ago"
    },
    {
        "title": "Training Mode Tournaments #22 KoDoRiN (Marth) vs. Gahtzu (Falcon) - Winners Finals SSBM",
        "channel": "Team OXY",
        "views": "71 views\n2 days ago"
    }
]

module.export = {
    videos   
}