const inventoryData = [
    { id: 'warden_spawn_egg', cat: 'nature', en: 'Warden Spawn Egg', he: 'ביצת השרצת וורדן', desc: 'מפלצת עיוורת ענקית ומפחידה ששומעת כל צעד שלכם! ששש... 🤫', img: 'https://minecraft.wiki/images/Warden_Spawn_Egg_JE1_BE1.png' },
    { id: 'allay_spawn_egg', cat: 'nature', en: 'Allay Spawn Egg', he: 'ביצת השרצת אליי', desc: 'פיה מתוקה וכחולה שאוהבת מוזיקה ותאסוף עבורכם חפצים! 🧚‍♂️', img: 'https://minecraft.wiki/images/Allay_Spawn_Egg_JE1_BE1.png' },
    { id: 'frog_spawn_egg', cat: 'nature', en: 'Frog Spawn Egg', he: 'ביצת השרצת צפרדע', desc: 'צפרדע חמודה שקופצת גבוה ואוהבת לאכול רפש! 🐸', img: 'https://minecraft.wiki/images/Frog_Spawn_Egg_JE1_BE1.png' },
    { id: 'tadpole_bucket', cat: 'tools', en: 'Bucket of Tadpole', he: 'דלי עם ראשן', desc: 'ראשן קטנטן וחמוד ששוחה בדלי שלכם עד שיגדל לצפרדע! 🪣', img: 'https://minecraft.wiki/images/Bucket_of_Tadpole_JE1_BE1.png' },
    { id: 'goat_horn', cat: 'tools', en: 'Goat Horn', he: 'קרן עז', desc: 'תוקעים בה ויוצא רעש חזק של מלחמה או מוזיקה מצחיקה! 🐐', img: 'https://minecraft.wiki/images/Goat_Horn_JE1_BE2.png' },
    { id: 'echo_shard', cat: 'nature', en: 'Echo Shard', he: 'רסיס הד', desc: 'רסיס כחול וזוהר מהעיר העתיקה, מלא בקסם אפל! 💠', img: 'https://minecraft.wiki/images/Echo_Shard_JE1_BE1.png' },
    { id: 'recovery_compass', cat: 'tools', en: 'Recovery Compass', he: 'מצפן הצלה', desc: 'מצפן מיוחד שתמיד מראה לכם איפה הפסדתם בפעם האחרונה כדי לחזור לציוד שלכם! 🧭', img: 'https://minecraft.wiki/images/Recovery_Compass_JE1_BE1.gif' },
    { id: 'music_disc_5', cat: 'tools', en: 'Music Disc 5', he: 'תקליט מוזיקה 5', desc: 'תקליט שבור וקריפי עם קולות מוזרים מהמעמקים! 🎵', img: 'https://minecraft.wiki/images/Music_Disc_5_JE1_BE1.png' },
    { id: 'disc_fragment_5', cat: 'nature', en: 'Disc Fragment 5', he: 'שבר תקליט 5', desc: 'חתיכה קטנה של התקליט השבור. תאספו 9 כאלה כדי לתקן אותו! 🧩', img: 'https://minecraft.wiki/images/Disc_Fragment_5_JE1_BE1.png' },
    { id: 'glow_ink_sac', cat: 'nature', en: 'Glow Ink Sac', he: 'שק דיו זוהר', desc: 'דיו נוצץ מדיונונים זוהרים! משמש כדי להאיר שלטים בחושך! ✨', img: 'https://minecraft.wiki/images/Glow_Ink_Sac_JE1_BE2.png' },
    // 1. Building Blocks (building)
    { id: 'stripped_jungle_log', cat: 'building', en: 'Stripped Jungle Log', he: 'בול עץ ג׳ונגל מקולף', desc: 'עץ ג׳ונגל חלק וחמים לרהיטים יוקרתיים. 🌴', img: 'images/stripped_jungle_log.png' },
    { id: 'stripped_acacia_log', cat: 'building', en: 'Stripped Acacia Log', he: 'בול עץ שיטה מקולף', desc: 'עץ סוואנה כתום ומבריק ללא קליפה! 🦒', img: 'images/stripped_acacia_log.png' },
    { id: 'stripped_cherry_log', cat: 'building', en: 'Stripped Cherry Log', he: 'בול עץ דובדבן מקולף', desc: 'עץ ורוד חלקלק ומהודר לחללי מגורים פסטליים. 🌸', img: 'images/stripped_cherry_log.png' },
    { id: 'stripped_dark_oak_log', cat: 'building', en: 'Stripped Dark Oak Log', he: 'בול עץ אלון כהה מקולף', desc: 'עץ שוקולד כהה וחלק, יפהפה לשולחנות וקורות! 🍫', img: 'images/stripped_dark_oak_log.png' },
    { id: 'stripped_mangrove_log', cat: 'building', en: 'Stripped Mangrove Log', he: 'בול עץ מנגרוב מקולף', desc: 'עץ אדמדם חלק שמעניק מראה חם ועשיר. 🪵', img: 'images/stripped_mangrove_log.png' },
    { id: 'stripped_crimson_stem', cat: 'building', en: 'Stripped Crimson Stem', he: 'גזע קרימזון מקולף', desc: 'גזע פטרייתי אדום לוהט ללא קליפה, חסין לחלוטין ללבה! 🔥', img: 'images/stripped_crimson_stem.png' },
    { id: 'stripped_warped_stem', cat: 'building', en: 'Stripped Warped Stem', he: 'גזע וורפד מקולף', desc: 'גזע פטרייתי טורקיז חלקלק מהנת׳ר. 🌀', img: 'images/stripped_warped_stem.png' },
    { id: 'stripped_oak_wood', cat: 'building', en: 'Stripped Oak Wood', he: 'עץ אלון מקולף מכל הצדדים', desc: 'בלוק עץ אלון שכולו עץ חלק מ-6 הכיוונים! 🪵', img: 'images/stripped_oak_log.png' },
    { id: 'stripped_spruce_wood', cat: 'building', en: 'Stripped Spruce Wood', he: 'עץ אשוח מקולף מכל הצדדים', desc: 'עץ אשוח שלם ומקולף מכל עבריו לבנייה מושלמת. 🌲', img: 'images/stripped_spruce_log.png' },
    { id: 'stripped_birch_wood', cat: 'building', en: 'Stripped Birch Wood', he: 'עץ לבנה מקולף מכל הצדדים', desc: 'עץ לבנה בהיר וחלק מכל צדדיו. ✨', img: 'images/stripped_birch_log.png' },
    { id: 'dark_oak_log', cat: 'building', en: 'Dark Oak Log', he: 'בול עץ אלון כהה', desc: 'עץ עבה ועשיר מיערות הגג הכהים, מושלם לאחוזות מפוארות! 🏰', img: 'images/dark_oak_log.png' },
    { id: 'mangrove_log', cat: 'building', en: 'Mangrove Log', he: 'בול עץ מנגרובים', desc: 'עץ אדמדם וחזק שצומח בתוך מימי ביצות המנגרובים! 🪵', img: 'images/mangrove_log.png' },
    { id: 'mangrove_roots', cat: 'building', en: 'Mangrove Roots', he: 'שורשי מנגרובים', desc: 'שורשים מפותלים שמעניקים מראה פראי וטבעי לבנייה! 🌿', img: 'images/mangrove_roots_side.png' },
    { id: 'muddy_mangrove_roots', cat: 'building', en: 'Muddy Mangrove Roots', he: 'שורשי מנגרובים בוציים', desc: 'שורשי מנגרובים מכוסי בוץ חלקלק, משמשים לעיצוב ביצות. 🤎', img: 'images/muddy_mangrove_roots_side.png' },
    { id: 'crimson_stem', cat: 'building', en: 'Crimson Stem', he: 'גזע ארגמן (קרימזון)', desc: 'גזע פטרייתי אדום ולוהט מהנת׳ר! חסין לאש ולא נשרף בלבה. 🔥', img: 'images/crimson_stem.png' },
    { id: 'warped_stem', cat: 'building', en: 'Warped Stem', he: 'גזע מעוות (וורפד)', desc: 'גזע פטרייתי בצבע כחול-טורקיז מהפנט ממימד הנת׳ר! 🌀', img: 'images/warped_stem.png' },
    { id: 'bamboo_block', cat: 'building', en: 'Block of Bamboo', he: 'בלוק במבוק', desc: 'במבוקים קשורים יחד בחבל! חומר בנייה אסייתי יפהפה וקל. 🎋', img: 'images/bamboo_block.png' },
    { id: 'stripped_oak_log', cat: 'building', en: 'Stripped Oak Log', he: 'בול עץ אלון מקולף', desc: 'בול עץ שקילפו ממנו את הקליפה עם גרזן לקבלת עץ חלק ויפה! 🪵', img: 'images/stripped_oak_log.png' },
    { id: 'stripped_spruce_log', cat: 'building', en: 'Stripped Spruce Log', he: 'בול עץ אשוח מקולף', desc: 'עץ אשוח חלק ונקי לבניית קורות תמיכה בבתים. 🌲', img: 'images/stripped_spruce_log.png' },
    { id: 'stripped_birch_log', cat: 'building', en: 'Stripped Birch Log', he: 'בול עץ לבנה מקולף', desc: 'עץ בהיר במיוחד שמעניק מראה מואר וחמים. ✨', img: 'images/stripped_birch_log.png' },
    { id: 'spruce_log', cat: 'building', en: 'Spruce Log', he: 'בול עץ אשוח', desc: 'עץ כהה וריחני מהיערות המושלגים! מצוין לבקתות חורף חמימות. 🌲', img: 'images/spruce_log.png' },
    { id: 'birch_log', cat: 'building', en: 'Birch Log', he: 'בול עץ לבנה (שדר)', desc: 'עץ בהיר עם קליפה לבנה מנוקדת. נותן תחושה נקייה ומודרנית! 🪵', img: 'images/birch_log.png' },
    { id: 'jungle_log', cat: 'building', en: 'Jungle Log', he: 'בול עץ ג׳ונגל', desc: 'בולי עץ ענקיים מהג׳ונגל! עליהם גדלים פולי קקאו טעימים לשוקולד. 🌴', img: 'images/jungle_log.png' },
    { id: 'acacia_log', cat: 'building', en: 'Acacia Log', he: 'בול עץ שיטה (אקציה)', desc: 'עץ ייחודי מהסוואנה עם פנים כתום בוהק! 🦒', img: 'images/acacia_log.png' },
    { id: 'cherry_log', cat: 'building', en: 'Cherry Log', he: 'בול עץ דובדבן', desc: 'עץ ורוד מהפנט מחורשות הדובדבן הפורחות! מרהיב ביופיו. 🌸', img: 'images/cherry_log.png' },
    { id: 'waxed_oxidized_cut_copper_stairs', cat: 'building', en: 'Waxed Oxidized Cut Copper Stairs', he: 'מדרגות נחושת מחומצנת משועוות', desc: 'מדרגות טורקיז מוגנות ששומרות על צבען לנצח! 🏛️', img: 'images/oxidized_cut_copper.png' },
    { id: 'waxed_cut_copper_slab', cat: 'building', en: 'Waxed Cut Copper Slab', he: 'חצי לוח נחושת חתוכה משועוות', desc: 'חצי בלוק נחושת כתום ומבריק שלא יחליד! 🟧', img: 'images/cut_copper.png' },
    { id: 'waxed_exposed_cut_copper_slab', cat: 'building', en: 'Waxed Exposed Cut Copper Slab', he: 'חצי לוח נחושת חשופה משועוות', desc: 'חצי לוח נחושת עם כתמי התיישנות שמקובעים בדונג. 🤎', img: 'images/exposed_cut_copper.png' },
    { id: 'waxed_weathered_cut_copper_slab', cat: 'building', en: 'Waxed Weathered Cut Copper Slab', he: 'חצי לוח נחושת בלויה משועוות', desc: 'חצי לוח נחושת ירקרק שמוגן מפני הגשם. 🌧️', img: 'images/weathered_cut_copper.png' },
    { id: 'waxed_oxidized_cut_copper_slab', cat: 'building', en: 'Waxed Oxidized Cut Copper Slab', he: 'חצי לוח נחושת מחומצנת משועוות', desc: 'חצי לוח טורקיז יוקרתי ומקובע לעיצובים נקיים. 💚', img: 'images/oxidized_cut_copper.png' },
    { id: 'waxed_exposed_copper', cat: 'building', en: 'Waxed Exposed Copper', he: 'נחושת חשופה משועוות', desc: 'נחושת בדרגת התיישנות ראשונה שנשמרת לנצח עם דונג דבורים! 🐝', img: 'images/exposed_copper.png' },
    { id: 'waxed_weathered_copper', cat: 'building', en: 'Waxed Weathered Copper', he: 'נחושת בלויה משועוות', desc: 'נחושת בגוון טורקיז-חום שציפו בדונג כדי שלא תמשיך להשתנות. 🍯', img: 'images/weathered_copper.png' },
    { id: 'waxed_oxidized_copper', cat: 'building', en: 'Waxed Oxidized Copper', he: 'נחושת מחומצנת משועוות', desc: 'נחושת ירוקה מהממת שמקובעת בצבע המושלם שלה! 💚', img: 'images/oxidized_copper.png' },
    { id: 'waxed_cut_copper', cat: 'building', en: 'Waxed Cut Copper', he: 'נחושת חתוכה משועוות', desc: 'לבני נחושת חתוכות שלא מאבדות את הברק הכתום לעולם! 🟧', img: 'images/cut_copper.png' },
    { id: 'waxed_exposed_cut_copper', cat: 'building', en: 'Waxed Exposed Cut Copper', he: 'נחושת חתוכה חשופה משועוות', desc: 'לבני נחושת עם כתמי התיישנות שמקובעות לעיצוב עתיק. 🧱', img: 'images/exposed_cut_copper.png' },
    { id: 'waxed_weathered_cut_copper', cat: 'building', en: 'Waxed Weathered Cut Copper', he: 'נחושת חתוכה בלויה משועוות', desc: 'לבני נחושת ירקרקות שמוגנות מפני שינויי מזג אוויר. 🌧️', img: 'images/weathered_cut_copper.png' },
    { id: 'waxed_oxidized_cut_copper', cat: 'building', en: 'Waxed Oxidized Cut Copper', he: 'נחושת חתוכה מחומצנת משועוות', desc: 'לבני נחושת בטורקיז עתיק ויוקרתי שנשארות כך לתמיד! 🏛️', img: 'images/oxidized_cut_copper.png' },
    { id: 'waxed_cut_copper_stairs', cat: 'building', en: 'Waxed Cut Copper Stairs', he: 'מדרגות נחושת חתוכה משועוות', desc: 'מדרגות נחושת מבריקות שלא יחלידו לעולם! 🪜', img: 'images/cut_copper.png' },
    { id: 'waxed_exposed_cut_copper_stairs', cat: 'building', en: 'Waxed Exposed Cut Copper Stairs', he: 'מדרגות נחושת חשופה משועוות', desc: 'מדרגות נחושת עתיקות ויציבות. 🪜', img: 'images/exposed_cut_copper.png' },
    { id: 'waxed_weathered_cut_copper_stairs', cat: 'building', en: 'Waxed Weathered Cut Copper Stairs', he: 'מדרגות נחושת בלויה משועוות', desc: 'מדרגות ירקרקות שלא ממשיכות לחמצן. 🪜', img: 'images/weathered_cut_copper.png' },
    { id: 'oxidized_cut_copper', cat: 'building', en: 'Oxidized Cut Copper', he: 'נחושת חתוכה מחומצנת', desc: 'לבני נחושת חתוכות בגוון ירוק-טורקיז מושלם! 💚', img: 'images/oxidized_cut_copper.png' },
    { id: 'cut_copper_stairs', cat: 'building', en: 'Cut Copper Stairs', he: 'מדרגות נחושת חתוכה', desc: 'מדרגות כתומות ומבריקות לעלייה לגגות מודרניים! 🪜', img: 'images/cut_copper.png' },
    { id: 'exposed_cut_copper_stairs', cat: 'building', en: 'Exposed Cut Copper Stairs', he: 'מדרגות נחושת חתוכה חשופה', desc: 'מדרגות נחושת שהתחילו להשתנות במזג האוויר. 🤎', img: 'images/exposed_cut_copper.png' },
    { id: 'weathered_cut_copper_stairs', cat: 'building', en: 'Weathered Cut Copper Stairs', he: 'מדרגות נחושת חתוכה בלויה', desc: 'מדרגות נחושת ירקרקות שמתאימות לבתים ליד הים! 🌊', img: 'images/weathered_cut_copper.png' },
    { id: 'oxidized_cut_copper_stairs', cat: 'building', en: 'Oxidized Cut Copper Stairs', he: 'מדרגות נחושת חתוכה מחומצנת', desc: 'מדרגות ירוקות מהודרות בסגנון עתיק! 🏛️', img: 'images/oxidized_cut_copper.png' },
    { id: 'cut_copper_slab', cat: 'building', en: 'Cut Copper Slab', he: 'חצי לוח נחושת חתוכה', desc: 'חצי בלוק נחושת, מושלם לשולחנות ומדפים! 🟧', img: 'images/cut_copper.png' },
    { id: 'exposed_cut_copper_slab', cat: 'building', en: 'Exposed Cut Copper Slab', he: 'חצי לוח נחושת חשופה', desc: 'חצי בלוק נחושת עם כתמי התיישנות ראשונים. 🤎', img: 'images/exposed_cut_copper.png' },
    { id: 'weathered_cut_copper_slab', cat: 'building', en: 'Weathered Cut Copper Slab', he: 'חצי לוח נחושת בלויה', desc: 'חצי בלוק נחושת בצבע טורקיז-חום. 🌧️', img: 'images/weathered_cut_copper.png' },
    { id: 'oxidized_cut_copper_slab', cat: 'building', en: 'Oxidized Cut Copper Slab', he: 'חצי לוח נחושת מחומצנת', desc: 'חצי בלוק בצבע טורקיז טהור למשטחי עבודה יוקרתיים. 💚', img: 'images/oxidized_cut_copper.png' },
    { id: 'waxed_copper_block', cat: 'building', en: 'Waxed Block of Copper', he: 'בלוק נחושת משועווה (בדבש)', desc: 'בלוק נחושת שציפו אותו בדונג דבורים כדי שהצבע הכתום שלו יישמר לנצח! 🍯', img: 'images/copper_block.png' },
    { id: 'iron_block', cat: 'building', en: 'Block of Iron', he: 'בלוק ברזל', desc: 'בלוק מתכתי מוצק וחזק. ממנו בונים את גולם הברזל (Iron Golem) שמגן על כפרים! 🤖', img: 'images/iron_block.png' },
    { id: 'copper_block', cat: 'building', en: 'Block of Copper', he: 'בלוק נחושת', desc: 'בלוק נחושת כתום ומבריק, שעם הזמן משנה את הצבע שלו לירוק בגלל האוויר! 🧡', img: 'images/copper_block.png' },
    { id: 'gold_block', cat: 'building', en: 'Block of Gold', he: 'בלוק זהב', desc: 'בלוק עשוי מ-9 מטילי זהב נוצצים. מרהיב לבניית ארמונות ומקדשים! ✨', img: 'images/gold_block.png' },
    { id: 'netherite_block', cat: 'building', en: 'Block of Netherite', he: 'בלוק נדרייט', desc: 'הבלוק הכי יקר וכבד במשחק! עשוי מנדרייט טהור ואפילו לא נשרף בלבה! 🖤', img: 'images/netherite_block.png' },
    { id: 'exposed_copper', cat: 'building', en: 'Exposed Copper', he: 'נחושת חשופה', desc: 'נחושת שהתחילה להתיישן וקיבלה כתמים חומים-ירקרקים ראשונים. 🤎', img: 'images/exposed_copper.png' },
    { id: 'weathered_copper', cat: 'building', en: 'Weathered Copper', he: 'נחושת בלויה', desc: 'נחושת שכבר כמעט כולה הפכה לטורקיז מהגשם והרוח! 🌧️', img: 'images/weathered_copper.png' },
    { id: 'oxidized_copper', cat: 'building', en: 'Oxidized Copper', he: 'נחושת מחומצנת', desc: 'נחושת בצבע טורקיז-ירוק עתיק מהמם! נראית כמו פסל החירות! 🗽', img: 'images/oxidized_copper.png' },
    { id: 'cut_copper', cat: 'building', en: 'Cut Copper', he: 'נחושת חתוכה', desc: 'בלוק נחושת עם דוגמת ריבועים יפהפייה לרצפות וגגות! 🟧', img: 'images/cut_copper.png' },
    { id: 'exposed_cut_copper', cat: 'building', en: 'Exposed Cut Copper', he: 'נחושת חתוכה חשופה', desc: 'לבני נחושת חתוכות שמתחילות לקבל גוון עתיק ומעניין. 🧱', img: 'images/exposed_cut_copper.png' },
    { id: 'weathered_cut_copper', cat: 'building', en: 'Weathered Cut Copper', he: 'נחושת חתוכה בלויה', desc: 'לבני נחושת ירקרקות שמתאימות לגגות של טירות עתיקות! 🏰', img: 'images/weathered_cut_copper.png' },
    { id: 'deepslate_diamond_ore', cat: 'building', en: 'Deepslate Diamond Ore', he: 'עפרת יהלום בצפחה עמוקה', desc: 'היהלום הכי עמוק ומיוחד בעולם! לחצוב אותו זה תענוג אמיתי. 💎', img: 'images/deepslate_diamond_ore.png' },
    { id: 'nether_gold_ore', cat: 'building', en: 'Nether Gold Ore', he: 'עפרת זהב מהשאול', desc: 'זהב ממימד הנת׳ר הלוהט. הפיגלינים ממש שומרים עליו! 🐷', img: 'images/nether_gold_ore.png' },
    { id: 'nether_quartz_ore', cat: 'building', en: 'Nether Quartz Ore', he: 'עפרת קוורץ מהשאול', desc: 'אבן לבנה מהנת׳ר שנותנת המון נקודות ניסיון ומשמשת לבנייה יוקרתית! ⚪', img: 'images/nether_quartz_ore.png' },
    { id: 'ancient_debris', cat: 'building', en: 'Ancient Debris', he: 'שרידים עתיקים (נדרייט)', desc: 'החומר הכי יקר וחזק במשחק! ממנו מכינים שריון וחרבות נדרייט בלתי מנוצחים! 👑', img: 'images/ancient_debris_side.png' },
    { id: 'coal_block', cat: 'building', en: 'Block of Coal', he: 'בלוק פחם', desc: 'גוש פחם ענקי ושחור! מספיק כדי להבעיר תנור במשך שעות רבות! ⬛', img: 'images/coal_block.png' },
    { id: 'raw_iron_block', cat: 'building', en: 'Block of Raw Iron', he: 'בלוק ברזל גולמי', desc: 'ערימה דחוסה של גושי ברזל לפני התכה. נראה כמו אבנים חומות כבדות! 🪨', img: 'images/raw_iron_block.png' },
    { id: 'raw_copper_block', cat: 'building', en: 'Block of Raw Copper', he: 'בלוק נחושת גולמית', desc: 'גוש ענקי של נחושת שנחצבה מהמערה! 🟠', img: 'images/raw_copper_block.png' },
    { id: 'raw_gold_block', cat: 'building', en: 'Block of Raw Gold', he: 'בלוק זהב גולמי', desc: 'גוש זהב טהור ונוצץ, שוקל המון ומלא בעושר! 🪙', img: 'images/raw_gold_block.png' },
    { id: 'amethyst_block', cat: 'building', en: 'Block of Amethyst', he: 'בלוק אחלמה (אמטיסט)', desc: 'בלוק סגול מרהיב שמשמיע צליל פעמונים קסום כשדורכים עליו! 💜', img: 'images/amethyst_block.png' },
    { id: 'budding_amethyst', cat: 'building', en: 'Budding Amethyst', he: 'בלוק אמטיסט מצמיח', desc: 'בלוק מיוחד שלא ניתן להזיז! עליו צומחים קריסטלים סגולים יפהפיים! 🔮', img: 'images/budding_amethyst.png' },
    { id: 'deepslate_copper_ore', cat: 'building', en: 'Deepslate Copper Ore', he: 'עפרת נחושת בצפחה עמוקה', desc: 'נחושת שחבויה עמוק עמוק באדמה בסלע שחור וקשוח! ⛏️', img: 'images/deepslate_copper_ore.png' },
    { id: 'gold_ore', cat: 'building', en: 'Gold Ore', he: 'עפרת זהב', desc: 'אבן נוצצת בזהב! מתיכים אותה כדי להכין תפוחי זהב ושיקויים. ✨', img: 'images/gold_ore.png' },
    { id: 'deepslate_gold_ore', cat: 'building', en: 'Deepslate Gold Ore', he: 'עפרת זהב בצפחה עמוקה', desc: 'זהב אמיתי שמוסתר בצפחה עמוקה. למצוא אותו זה ממש אוצר! 💰', img: 'images/deepslate_gold_ore.png' },
    { id: 'redstone_ore', cat: 'building', en: 'Redstone Ore', he: 'עפרת רדסטון', desc: 'אבן זוהרת באדום כשדורכים עליה! איתה מכינים מעגלים חשמליים ומלכודות. 🔴', img: 'images/redstone_ore.png' },
    { id: 'deepslate_redstone_ore', cat: 'building', en: 'Deepslate Redstone Ore', he: 'עפרת רדסטון בצפחה עמוקה', desc: 'רדסטון מעמקים שמפיץ אור אדום מסתורי במערות חשוכות! 💡', img: 'images/deepslate_redstone_ore.png' },
    { id: 'emerald_ore', cat: 'building', en: 'Emerald Ore', he: 'עפרת אזמרגד (ברקת)', desc: 'העפרה הכי נדירה בעולם! גדלה רק בהרים הגבוהים ומשמשת למסחר עם כפריים. 💚', img: 'images/emerald_ore.png' },
    { id: 'deepslate_emerald_ore', cat: 'building', en: 'Deepslate Emerald Ore', he: 'עפרת אזמרגד בצפחה עמוקה', desc: 'נדיר בטירוף! למצוא אבן כזו זה כמו לזכות בלוטו של מיינקראפט! 🍀', img: 'images/deepslate_emerald_ore.png' },
    { id: 'lapis_ore', cat: 'building', en: 'Lapis Lazuli Ore', he: 'עפרת לאפיס לזולי', desc: 'אבן עם כתמים כחולים יפהפיים. חובה בשביל לעשות קסמים בשולחן הכישופים! 🔮', img: 'images/lapis_ore.png' },
    { id: 'deepslate_lapis_ore', cat: 'building', en: 'Deepslate Lapis Lazuli Ore', he: 'עפרת לאפיס בצפחה עמוקה', desc: 'אבן כחולה קסומה שחבויה עמוק בסלעי המעמקים! 🌌', img: 'images/deepslate_lapis_ore.png' },
    { id: 'diamond_ore', cat: 'building', en: 'Diamond Ore', he: 'עפרת יהלום', desc: 'החלום של כל שחקן! האבן שממנה חוצבים את היהלומים היקרים לחרב ושריון! 💎', img: 'images/diamond_ore.png' },
    { id: 'bedrock', cat: 'building', en: 'Bedrock', he: 'סלע תשתית (Bedrock)', desc: 'הבלוק הכי חזק במשחק! אי אפשר לשבור אותו אפילו עם פצצות! 🛡️', img: 'images/bedrock.png' },
    { id: 'suspicious_sand', cat: 'building', en: 'Suspicious Sand', he: 'חול חשוד', desc: 'חול של ארכיאולוגים! אם מנקים אותו עם מברשת מגלים אוצרות עתיקים! 🏺', img: 'https://minecraft.wiki/images/Suspicious_Sand_JE2_BE2.png' },
    { id: 'suspicious_gravel', cat: 'building', en: 'Suspicious Gravel', he: 'חצץ חשוד', desc: 'חצץ מסתורי שמוחבאים בתוכו חפצים עתיקים מההיסטוריה של מיינקראפט! 🔍', img: 'https://minecraft.wiki/images/Suspicious_Gravel_JE1_BE1.png' },
    { id: 'red_sand', cat: 'building', en: 'Red Sand', he: 'חול אדום', desc: 'חול מיוחד בצבע כתום-אדום שמגיע ממדבריות הבאדלנדס הצבעוניים! 🏜️', img: 'images/red_sand.png' },
    { id: 'gravel', cat: 'building', en: 'Gravel', he: 'חצץ', desc: 'בלוק שנופל למטה אם אין לו תמיכה. לפעמים כשחוצבים אותו מקבלים אבן צור! 🪨', img: 'images/gravel.png' },
    { id: 'coal_ore', cat: 'building', en: 'Coal Ore', he: 'עפרת פחם', desc: 'אבן מלאה בחתיכות פחם שחורות. מצוינת להכנת לפידים ותנורים! 🪵', img: 'images/coal_ore.png' },
    { id: 'deepslate_coal_ore', cat: 'building', en: 'Deepslate Coal Ore', he: 'עפרת פחם בצפחה עמוקה', desc: 'פחם שקבור עמוק בתוך הסלעים הקשים של המערות החשוכות! ⛏️', img: 'images/deepslate_coal_ore.png' },
    { id: 'iron_ore', cat: 'building', en: 'Iron Ore', he: 'עפרת ברזל', desc: 'האבן הכי חשובה להרפתקן מתחיל! מתיכים אותה כדי לקבל מטילי ברזל חזקים. ⚙️', img: 'images/iron_ore.png' },
    { id: 'deepslate_iron_ore', cat: 'building', en: 'Deepslate Iron Ore', he: 'עפרת ברזל בצפחה עמוקה', desc: 'ברזל חבוי בתוך סלע צפחה כהה, שווה המון לחציבה במעמקים! 🛡️', img: 'images/deepslate_iron_ore.png' },
    { id: 'copper_ore', cat: 'building', en: 'Copper Ore', he: 'עפרת נחושת', desc: 'אבן עם כתמים כתומים וירוקים. אפשר להכין ממנה קולט ברקים ומשקפת! ⚡', img: 'images/copper_ore.png' },
    { id: 'spruce_planks', cat: 'building', en: 'Spruce Planks', he: 'קרשי אשוח', desc: 'קרשים בצבע חום כהה, מושלמים לבניית בקתה חמימה בשלג! 🌲', img: 'images/spruce_planks.png' },
    { id: 'birch_planks', cat: 'building', en: 'Birch Planks', he: 'קרשי לבנה', desc: 'קרשים בהירים ויפים, עושים אור בבית! 🌳', img: 'images/birch_planks.png' },
    { id: 'jungle_planks', cat: 'building', en: 'Jungle Planks', he: 'קרשי ג׳ונגל', desc: 'קרשים שמכינים מעצים ענקיים בג׳ונגל. צבע קצת כתמתם! 🌴', img: 'images/jungle_planks.png' },
    { id: 'acacia_planks', cat: 'building', en: 'Acacia Planks', he: 'קרשי שיטה', desc: 'קרשים כתומים מהסוואנה. מתאימים לבנייה צבעונית ומיוחדת! 🦒', img: 'images/acacia_planks.png' },
    { id: 'cherry_planks', cat: 'building', en: 'Cherry Planks', he: 'קרשי דובדבן', desc: 'קרשים ורודים ומהממים! הבית שלך ייראה כמו צמר גפן מתוק! 🌸', img: 'images/cherry_planks.png' },
    { id: 'dark_oak_planks', cat: 'building', en: 'Dark Oak Planks', he: 'קרשי אלון כהה', desc: 'קרשים ממש כהים, מצוינים לגגות של אחוזות גדולות! 🏚️', img: 'images/dark_oak_planks.png' },
    { id: 'mangrove_planks', cat: 'building', en: 'Mangrove Planks', he: 'קרשי מנגרוב', desc: 'קרשים אדמדמים מעצים שגדלים בתוך ביצות בוץ! 🌿', img: 'images/mangrove_planks.png' },
    { id: 'bamboo_planks', cat: 'building', en: 'Bamboo Planks', he: 'קרשי במבוק', desc: 'קרשים מיוחדים שעשויים מבמבוק! נראה כמו בית בסין! 🎋', img: 'images/bamboo_planks.png' },
    { id: 'crimson_planks', cat: 'building', en: 'Crimson Planks', he: 'קרשי ארגמן', desc: 'קרשים אדומים שלא נשרפים אף פעם כי הם מהנט׳ר! 🔥', img: 'images/crimson_planks.png' },
    { id: 'warped_planks', cat: 'building', en: 'Warped Planks', he: 'קרשי תכלת מעוותים', desc: 'קרשים כחולים מהנט׳ר. האנדרמנים שונאים אותם! 🌀', img: 'images/warped_planks.png' },
    { id: 'bamboo_mosaic', cat: 'building', en: 'Bamboo Mosaic', he: 'פסיפס במבוק', desc: 'בלוק במבוק עם ציור יפה של ריבועים, מושלם לרצפה! 🧩', img: 'images/bamboo_mosaic.png' },
    { id: 'tuff', cat: 'building', en: 'Tuff', he: 'טוף', desc: 'אבן אפורה חזקה שמגיעה מהמערות העמוקות ביותר! 🦇', img: 'images/tuff.png' },
    { id: 'dripstone_block', cat: 'building', en: 'Dripstone Block', he: 'גוש נטיף', desc: 'אבן מיוחדת שממנה גדלים נטיפים שיורדים מהתקרה! 💧', img: 'images/dripstone_block.png' },
    { id: 'grass_block', cat: 'building', en: 'Grass Block', he: 'בלוק דשא', desc: 'הבלוק הכי ירוק ושמח, עליו צומחים פרחים ועצים! 🌿', img: 'https://minecraft.wiki/images/Grass_Block_JE4_BE2.png' },
    { id: 'coarse_dirt', cat: 'building', en: 'Coarse Dirt', he: 'אדמה קשה', desc: 'אדמה יבשה מיוחדת שדשא לא יכול לצמוח עליה אף פעם! 🏜️', img: 'images/coarse_dirt.png' },
    { id: 'podzol', cat: 'building', en: 'Podzol', he: 'פודזול', desc: 'אדמה שמגיעה מיערות של עצי אשוח ענקיים. מושלמת לפטריות! 🍄', img: 'https://minecraft.wiki/images/Podzol_JE3_BE2.png' },
    { id: 'rooted_dirt', cat: 'building', en: 'Rooted Dirt', he: 'אדמה עם שורשים', desc: 'אדמה שיש בה שורשים של עץ האזליה. אם שמים עליה מים היא הופכת לבוץ! 🌱', img: 'images/rooted_dirt.png' },
    { id: 'mud', cat: 'building', en: 'Mud', he: 'בוץ', desc: 'בוץ רך ודביק, חזירים פשוט מתים על זה! אפשר גם להכין ממנו לבנים! 🐷', img: 'images/mud.png' },
    { id: 'crimson_nylium', cat: 'building', en: 'Crimson Nylium', he: 'דשא ארגמן', desc: 'דשא אדום מהנט׳ר החם! עליו צומחים יערות אדומים מפחידים! 🔴', img: 'images/crimson_nylium.png' },
    { id: 'warped_nylium', cat: 'building', en: 'Warped Nylium', he: 'דשא מעוות', desc: 'דשא תכלת מהנט׳ר. האנדרמנים לא אוהבים את הפטריות שצומחות עליו! 🔵', img: 'images/warped_nylium.png' },
    { id: 'oak_planks', cat: 'building', en: 'Oak Planks', he: 'קרשי אלון', desc: 'העץ הכי בסיסי שיש. ממנו בונים את שולחן העבודה ואת הבית הראשון! 🪵', img: 'images/oak_planks.png' },
    { id: 'granite', cat: 'building', en: 'Granite', he: 'גרניט', desc: 'אבן חומה-אדמדמה מגניבה שמוצאים מתחת לאדמה! 🪨', img: 'images/granite.png' },
    { id: 'polished_granite', cat: 'building', en: 'Polished Granite', he: 'גרניט מלוטש', desc: 'גרניט שעבר החלקה ופוליש. נראה מבריק ויפה! ✨', img: 'images/polished_granite.png' },
    { id: 'diorite', cat: 'building', en: 'Diorite', he: 'דיוריט', desc: 'אבן לבנה עם נקודות שחורות, נראית כמו גלידת עוגיות! 🍪', img: 'images/diorite.png' },
    { id: 'polished_diorite', cat: 'building', en: 'Polished Diorite', he: 'דיוריט מלוטש', desc: 'דיוריט חלק למראה יוקרתי ונקי בבסיס שלך. 🏰', img: 'images/polished_diorite.png' },
    { id: 'andesite', cat: 'building', en: 'Andesite', he: 'אנדזיט', desc: 'אבן אפורה שדומה לאבן רגילה אבל קצת יותר כהה ומחוספסת. 🌑', img: 'images/andesite.png' },
    { id: 'polished_andesite', cat: 'building', en: 'Polished Andesite', he: 'אנדזיט מלוטש', desc: 'אנדזיט חלק שמצוין לבניית טירות ומבצרים כהים! 🏰', img: 'images/polished_andesite.png' },
    { id: 'deepslate', cat: 'building', en: 'Deepslate', he: 'צפחה עמוקה', desc: 'אבן ממש חזקה שמוצאים במעמקי האדמה, ליד היהלומים! 💎', img: 'images/deepslate.png' },
    { id: 'cobbled_deepslate', cat: 'building', en: 'Cobbled Deepslate', he: 'צפחה עמוקה מרוצפת', desc: 'צפחה ששברת עם מכוש. היא נראית נהדר לקירות מיוחדים. 🧱', img: 'images/cobbled_deepslate.png' },
    { id: 'polished_deepslate', cat: 'building', en: 'Polished Deepslate', he: 'צפחה עמוקה מלוטשת', desc: 'צפחה שסידרת והחלקת למראה סופר נקי וכהה. 🌌', img: 'images/polished_deepslate.png' },
    { id: 'calcite', cat: 'building', en: 'Calcite', he: 'קלציט', desc: 'אבן לבנה מהממת שעוטפת את המערות של האמטיסט הסגול! 🤍', img: 'images/calcite.png' },
    { id: 'crafter', cat: 'building', en: 'Crafter', he: 'יוצר אוטומטי (Crafter)', desc: 'בלוק מטורף שיכול ליצור דברים לבד לגמרי בעזרת רדסטון! ⚙️', img: 'https://minecraft.wiki/images/Crafter_JE1_BE1.png' },
    { id: 'dirt', cat: 'building', en: 'Dirt', he: 'אדמה', desc: 'הבלוק הכי נפוץ במשחק. מעולה כדי לגדל עליו דברים או לבנות בית חירום! 🌱', img: 'images/dirt.png' },
    { id: 'stone', cat: 'building', en: 'Stone', he: 'אבן', desc: 'האבן הרגילה שמוצאים מתחת לאדמה. נראית מצוין לבנייה חלקה.', img: 'images/stone.png' },
    { id: 'sand', cat: 'building', en: 'Sand', he: 'חול', desc: 'נופל למטה אם אין תחתיו כלום! אפשר לחמם כדי להכין זכוכית. 🏖️', img: 'images/sand.png' },
    { id: 'bricks', cat: 'building', en: 'Bricks', he: 'לבנים', desc: 'בלוק יפהפה לבניית ארובות ובתים קלאסיים.', img: 'images/bricks.png' },
    { id: 'obsidian', cat: 'building', en: 'Obsidian', he: 'אובסידיאן', desc: 'בלוק חזק במיוחד! איתו בונים את השער לנת\'ר. 🌋', img: 'https://minecraft.wiki/images/Obsidian_JE3_BE2.png' },
    { id: 'netherrack', cat: 'building', en: 'Netherrack', he: 'אבן שאול', desc: 'אבן אדומה מהנת\'ר. אש שנדלקת עליה לא נכבית לעולם!', img: 'https://minecraft.wiki/images/Netherrack_JE4_BE2.png' },
    { id: 'diamond_block', cat: 'building', en: 'Block of Diamond', he: 'בלוק יהלום', desc: 'מראה לכולם כמה שאתה עשיר! נוצץ וחזק. 💎', img: 'images/diamond_block.png' },
    { id: 'oak_log', cat: 'building', en: 'Oak Log', he: 'בול עץ אלון', desc: 'הבסיס לכל בנייה. אפשר לעשות מזה קרשים ומקלות. 🌳', img: 'images/oak_log.png' },
    { id: 'cobblestone', cat: 'building', en: 'Cobblestone', he: 'אבן מרוצפת', desc: 'חזק נגד פיצוצים של קריפרים. מעולה לבניית טירות! 🏰', img: 'images/cobblestone.png' },
    { id: 'glass', cat: 'building', en: 'Glass', he: 'זכוכית', desc: 'עושים את זה על ידי חימום חול בתנור. מצוין לחלונות. 🪟', img: 'images/glass.png' },
    { id: 'crafting_table', cat: 'building', en: 'Crafting Table', he: 'שולחן עבודה', desc: 'הבלוק הכי חשוב! איתו מכינים כמעט את כל החפצים במשחק. 🛠️', img: 'https://minecraft.wiki/images/Crafting_Table_JE4_BE3.png' },
    { id: 'enchanting_table', cat: 'building', en: 'Enchanting Table', he: 'שולחן הקסמים', desc: 'עוזר לשפר כלי ושריון בקסמים! ✨', img: 'https://minecraft.wiki/images/Enchanting_Table_JE3_BE3.png' },
    { id: 'tnt', cat: 'building', en: 'TNT', he: 'דינמיט (פצצת TNT)', desc: 'בלוק פצצה אדום ומסוכן! מדליקים עם מצית או רדסטון ורץ פיצוץ ענקי! 💣💥', img: 'https://minecraft.wiki/images/TNT_JE3_BE2.png' },
    { id: 'redstone', cat: 'building', en: 'Redstone Dust', he: 'אבקת רדסטון (חשמל)', desc: 'החשמל של מיינקראפט! מניחים על הרצפה כמו כבל חשמלי להפעלת דלתות, אורות ומלכודות! 🔴⚡', img: 'images/redstone_ore.png' },
    { id: 'redstone_torch', cat: 'building', en: 'Redstone Torch', he: 'לפיד רדסטון', desc: 'לפיד אדום שמספק כוח חשמלי תמידי למעגלים ומכונות! 💡', img: 'https://minecraft.wiki/images/Redstone_Torch_JE2_BE2.png' },
    { id: 'piston', cat: 'building', en: 'Piston', he: 'בוכנה', desc: 'מכונה שדוחפת בלוקים, חפצים ושחקנים קדימה! 🪵⚙️', img: 'https://minecraft.wiki/images/Piston_JE3_BE2.png' },
    { id: 'sticky_piston', cat: 'building', en: 'Sticky Piston', he: 'בוכנה דביקה', desc: 'בוכנה עם סליים שדוחפת בלוקים ומושכת אותם בחזרה! 🟩⚙️', img: 'https://minecraft.wiki/images/Sticky_Piston_JE3_BE2.png' },
    { id: 'hopper', cat: 'building', en: 'Hopper', he: 'משפך', desc: 'משפך ברזל ששואב חפצים מהרצפה ומעביר אותם ישר לתיבה! 📥', img: 'images/hopper.png' },
    { id: 'dispenser', cat: 'building', en: 'Dispenser', he: 'משגר', desc: 'מכונה שיורה חיצים, זורקת שיקויים או שופכת דלי מים כשיש אות רדסטון! 🏹📦', img: 'images/dispenser_front.png' },
    { id: 'minecart', cat: 'building', en: 'Minecart', he: 'קרונית רכבת', desc: 'עגלת מתכת שנוסעת על פסים! אפשר לרכוב בה או להסיע חפצים! 🚃', img: 'https://minecraft.wiki/images/Minecart_JE2_BE2.png' },
    { id: 'rail', cat: 'building', en: 'Rail', he: 'מסילת רכבת', desc: 'פסי רכבת מברזל שעליהם הקרונית טסה במהירות! 🛤️', img: 'https://minecraft.wiki/images/Rail_JE2_BE2.png' },
    { id: 'powered_rail', cat: 'building', en: 'Powered Rail', he: 'מסילה חשמלית', desc: 'מסילת זהב שמאיצה את הקרונית למהירות שיא כשהיא דולקת ברדסטון! ⚡🛤️', img: 'https://minecraft.wiki/images/Powered_Rail_JE2_BE2.png' },
    { id: 'lever', cat: 'building', en: 'Lever', he: 'מנוף', desc: 'מתג להדלקה וכיבוי של מערכות רדסטון, מנורות ומלכודות! 🕹️', img: 'images/lever.png' },
    { id: 'stone_button', cat: 'building', en: 'Stone Button', he: 'כפתור אבן', desc: 'לוחצים עליו והוא פותח דלתות או מפעיל מלכודות לזמן קצר! 🔘', img: 'https://minecraft.wiki/images/Stone_Button_JE2_BE2.png' },
    { id: 'torch', cat: 'building', en: 'Torch', he: 'לפיד', desc: 'מאיר מערות חשוכות ומונע ממפלצות להופיע ליד הבית שלך! 🕯️', img: 'https://minecraft.wiki/images/Torch_JE4_BE2.png' },
    { id: 'soul_torch', cat: 'building', en: 'Soul Torch', he: 'לפיד נשמות כחול', desc: 'לפיד כחול ומסתורי שמבריח חזירי פיגלין בנת׳ר! 💙🔥', img: 'https://minecraft.wiki/images/Soul_Torch_JE1_BE1.png' },

    // 2. Nature & Farming (nature)
    { id: 'ender_pearl', cat: 'nature', en: 'Ender Pearl', he: 'פנינת אנדר (שיגור)', desc: 'פנינה קסומה מאנדרמנים! זורקים אותה ומשתגרים מיד לאן שהיא נוחתת! 👁️✨', img: 'images/ender_pearl.png' },
    { id: 'eye_of_ender', cat: 'nature', en: 'Eye of Ender', he: 'עין האנדר', desc: 'עין קסומה שמאתרת את מבצר האנדר ופותחת את השער לדרקון! 🌌', img: 'images/ender_eye.png' },
    { id: 'elytra', cat: 'nature', en: 'Elytra', he: 'כנפי אליטרה (תעופה)', desc: 'כנפי תעופה נדירות מספינות האנד! שמים על הגב ועפים בשמיים כמו ציפור! 🪽', img: 'images/elytra.png' },
    { id: 'axolotl_spawn_egg', cat: 'nature', en: 'Axolotl Spawn Egg', he: 'ביצת השרצת אקסולוטל', desc: 'לטאת מים ורודה ומתוקה שמגנה עליך במים ומרפאת אותך! 🦎💖', img: 'images/axolotl_spawn_egg.png' },
    { id: 'creeper_spawn_egg', cat: 'nature', en: 'Creeper Spawn Egg', he: 'ביצת השרצת קריפר', desc: 'מפלצת ירוקה שמתגנבת בשקט בלי ששומעים... ועושה בוםםם! 💥', img: 'images/creeper_spawn_egg.png' },
    { id: 'wolf_spawn_egg', cat: 'nature', en: 'Wolf Spawn Egg', he: 'ביצת השרצת זאב / כלב', desc: 'זאב חמוד שאפשר לאלף עם עצם ולהפוך לכלב נאמן שהולך איתך לכל מקום! 🐺', img: 'https://minecraft.wiki/images/Wolf_Spawn_Egg_JE2_BE2.png' },
    { id: 'cat_spawn_egg', cat: 'nature', en: 'Cat Spawn Egg', he: 'ביצת השרצת חתול', desc: 'חתול מתוק שמבריח קריפרים מפחידים ומגרגר במיטה! 🐱', img: 'images/cat_spawn_egg.png' },
    { id: 'bone', cat: 'nature', en: 'Bone', he: 'עצם', desc: 'נופלת משלדים! מאכילים בה זאב פראי כדי שיהפוך לכלב המחמד שלך! 🦴', img: 'images/bone.png' },
    { id: 'string', cat: 'nature', en: 'String', he: 'חוט עכביש', desc: 'חוט דק וחזק מעכבישים! איתו מכינים חכה, קשת ונרות! 🧵', img: 'https://minecraft.wiki/images/String_JE2_BE2.png' },
    { id: 'gunpowder', cat: 'nature', en: 'Gunpowder', he: 'אבק שריפה', desc: 'אבקה מפוצצת מקריפרים ומכשפות! חובה להכנת פצצות TNT וזיקוקים! 💣', img: 'images/gunpowder.png' },
    { id: 'leather', cat: 'nature', en: 'Leather', he: 'עור', desc: 'עור פרה להכנת ספרים, שריון ומסגרות תמונה! 🐂', img: 'images/leather.png' },
    { id: 'bone_meal', cat: 'nature', en: 'Bone Meal', he: 'קמח עצמות (בונמיל)', desc: 'דשן קסום מעצמות שלדים! גורם לצמחים, ירקות ופרחים לגדול בשנייה אחת! 🦴🌱', img: 'images/bone_meal.png' },
    { id: 'dandelion', cat: 'nature', en: 'Dandelion', he: 'שן ארי (סביון)', desc: 'פרח צהוב ושמח שצומח בדשא! אפשר להכין ממנו צבע צהוב ודבורים אוהבות אותו! 🌼', img: 'images/dandelion.png' },
    { id: 'poppy', cat: 'nature', en: 'Poppy', he: 'פרג', desc: 'פרח אדום קלאסי ויפהפה שגולמי ברזל אוהבים להעניק לילדים וכפריים! 🌺', img: 'https://minecraft.wiki/images/Poppy_JE2_BE2.png' },
    { id: 'blue_orchid', cat: 'nature', en: 'Blue Orchid', he: 'סחלב כחול', desc: 'פרח כחול נדיר ומיוחד שגדל רק בביצות! 💙', img: 'images/blue_orchid.png' },
    { id: 'allium', cat: 'nature', en: 'Allium', he: 'אליום (שום בר)', desc: 'כדור פרחים סגול ומהפנט מיערות הפרחים! 💜', img: 'images/allium.png' },
    { id: 'azure_bluet', cat: 'nature', en: 'Azure Bluet', he: 'תכלת השדה', desc: 'פרח קטנטן ועדין בצבע לבן-תכלת לקישוט הגינה! 🩵', img: 'images/azure_bluet.png' },
    { id: 'red_tulip', cat: 'nature', en: 'Red Tulip', he: 'צבעוני אדום', desc: 'צבעוני זקוף ומרשים שמוסיף המון צבע לחצר! 🌷', img: 'https://minecraft.wiki/images/Red_Tulip_JE2_BE2.png' },
    { id: 'oxeye_daisy', cat: 'nature', en: 'Oxeye Daisy', he: 'מרגנית (חיננית)', desc: 'פרח לבן עם מרכז צהוב שמביא תחושת אביב ושמחה! 🤍', img: 'https://minecraft.wiki/images/Oxeye_Daisy_JE2_BE2.png' },
    { id: 'cornflower', cat: 'nature', en: 'Cornflower', he: 'דרדר כחול', desc: 'פרח כחול עמוק שממנו מכינים צבע כחול מהמם לבדים וזכוכית! 🪻', img: 'images/cornflower.png' },
    { id: 'lily_of_the_valley', cat: 'nature', en: 'Lily of the Valley', he: 'שושנת העמקים', desc: 'פרח לבן ונדיר בצורת פעמונים קטנים מיערות עצי האלון הכהים! 🔔', img: 'https://minecraft.wiki/images/Lily_of_the_Valley_JE2_BE2.png' },
    { id: 'sunflower', cat: 'nature', en: 'Sunflower', he: 'חמנייה', desc: 'פרח ענקי שגבוה משחקן ותמיד פונה לעבר השמש הזורחת במזרח! 🌻', img: 'https://minecraft.wiki/images/Sunflower_JE2_BE2.png' },
    { id: 'rose_bush', cat: 'nature', en: 'Rose Bush', he: 'שיח ורדים', desc: 'שיח ורדים אדומים כפול וגבוה לבניית גדרות וארמונות מהאגדות! 🌹', img: 'https://minecraft.wiki/images/Rose_Bush_JE2_BE2.png' },
    { id: 'peony', cat: 'nature', en: 'Peony', he: 'אדמונית', desc: 'שיח פרחים ורוד וריחני שנראה מרהיב בכל כפר! 🌸', img: 'https://minecraft.wiki/images/Peony_JE2_BE2.png' },
    { id: 'oak_leaves', cat: 'nature', en: 'Oak Leaves', he: 'עלי אלון', desc: 'עלי עץ אלון ירוקים, שלפעמים מפילים תפוחים טעימים ומקלות! 🍃', img: 'https://minecraft.wiki/images/Oak_Leaves_JE2_BE2.png' },
    { id: 'spruce_leaves', cat: 'nature', en: 'Spruce Leaves', he: 'עלי אשוח', desc: 'מחטי אשוח כהות וריחניות מיערות החורף והטייגה המושלגת! 🌲', img: 'images/spruce_leaves.png' },
    { id: 'birch_leaves', cat: 'nature', en: 'Birch Leaves', he: 'עלי לבנה', desc: 'עלים ירוקים בהירים ורעננים מעץ השדר הלבן! 🌿', img: 'images/birch_leaves.png' },
    { id: 'jungle_leaves', cat: 'nature', en: 'Jungle Leaves', he: 'עלי ג׳ונגל', desc: 'עלים סבוכים מהג׳ונגל הטרופי הענק! 🌴', img: 'images/jungle_leaves.png' },
    { id: 'cherry_leaves', cat: 'nature', en: 'Cherry Leaves', he: 'עלי דובדבן', desc: 'עלים ורודים מרהיבים שמפזרים עלי כותרת נושרים באוויר! 🌸', img: 'images/cherry_leaves.png' },
    { id: 'azalea_leaves', cat: 'nature', en: 'Azalea Leaves', he: 'עלי אזליה', desc: 'עלי שיח אזליה עשירים ורעננים שמוצאים במערות שופעות! 🍃', img: 'images/azalea_leaves.png' },
    { id: 'flowering_azalea_leaves', cat: 'nature', en: 'Flowering Azalea Leaves', he: 'עלי אזליה פורחת', desc: 'עלי שיח אזליה שמנוקדים בפרחים ורודים קטנים ומתוקים! 🌺', img: 'images/flowering_azalea_leaves.png' },
    { id: 'lily_pad', cat: 'nature', en: 'Lily Pad', he: 'שושנת מים (נופר)', desc: 'עלה שטוח ועגול שצף על המים ואפשר ללכת ולקפוץ עליו כמו צפרדע! 🐸', img: 'https://minecraft.wiki/images/Lily_Pad_JE3_BE2.png' },
    { id: 'bamboo', cat: 'nature', en: 'Bamboo', he: 'במבוק', desc: 'מקל ירוק שצומח לגובה עצום במהירות שיא! פנדות פשוט משוגעות עליו! 🎋', img: 'images/bamboo.png' },
    { id: 'cactus', cat: 'nature', en: 'Cactus', he: 'קקטוס', desc: 'צמח קוצני מהמדבר! זהירות לא לגעת כדי לא לחטוף דקירה! 🌵', img: 'images/cactus_side.png' },
    { id: 'sugar_cane', cat: 'nature', en: 'Sugar Cane', he: 'קנה סוכר', desc: 'צומח ליד מקורות מים! ממנו מכינים סוכר מתוק לעוגות ונייר לספרים! 📜', img: 'https://minecraft.wiki/images/Sugar_Cane_JE3_BE2.png' },
    { id: 'kelp', cat: 'nature', en: 'Kelp', he: 'אצות ים', desc: 'צמחי מים שצומחים לגובה ענק בים! אפשר לייבש בתנור ולאכול חטיף אצות! 🌊', img: 'images/kelp.png' },
    { id: 'spore_blossom', cat: 'nature', en: 'Spore Blossom', he: 'פרח נבגים', desc: 'פרח ענקי שתולים מהתקרה והוא מפיץ חלקיקים ירוקים קסומים וזוהרים באוויר! ✨', img: 'https://minecraft.wiki/images/Spore_Blossom_JE1_BE1.png' },
    { id: 'moss_block', cat: 'nature', en: 'Moss Block', he: 'בלוק טחב', desc: 'בלוק ירוק ורך! אם מפזרים עליו בונמיל הוא מצמיח שטיחי טחב ופרחים לכל עבר! 🟩', img: 'https://minecraft.wiki/images/Moss_Block_JE1_BE1.png' },
    { id: 'oak_sapling', cat: 'nature', en: 'Oak Sapling', he: 'שתיל אלון', desc: 'שתיל קטן וחמוד. אם תשתול אותו באדמה הוא יגדל לעץ ענק! 🌳', img: 'images/oak_sapling.png' },
    { id: 'spruce_sapling', cat: 'nature', en: 'Spruce Sapling', he: 'שתיל אשוח', desc: 'שתיל שיכול לגדול לעץ אשוח גבוה כמו במשחקי שלג! 🌲', img: 'images/spruce_sapling.png' },
    { id: 'birch_sapling', cat: 'nature', en: 'Birch Sapling', he: 'שתיל לבנה', desc: 'שתיל של עץ לבנה. העצים שלו לבנים ויפים עם נקודות! 🌿', img: 'images/birch_sapling.png' },
    { id: 'jungle_sapling', cat: 'nature', en: 'Jungle Sapling', he: 'שתיל ג׳ונגל', desc: 'אם תשתול 4 כאלה יחד, יגדל לך עץ ג׳ונגל מפלצתי ברוחב! 🌴', img: 'images/jungle_sapling.png' },
    { id: 'acacia_sapling', cat: 'nature', en: 'Acacia Sapling', he: 'שתיל שיטה', desc: 'שתיל של עץ סוואנה מיוחד, שגדל תמיד קצת עקום ומעניין! 🦒', img: 'images/acacia_sapling.png' },
    { id: 'cherry_sapling', cat: 'nature', en: 'Cherry Sapling', he: 'שתיל דובדבן', desc: 'השתיל הכי יפה במשחק! גודל לעץ ורוד שמפיל עלי כותרת ורודים! 🌸', img: 'images/cherry_sapling.png' },
    { id: 'dark_oak_sapling', cat: 'nature', en: 'Dark Oak Sapling', he: 'שתיל אלון כהה', desc: 'שתיל של עץ כהה מאוד שחייבים לשתול רביעייה ממנו כדי שיגדל! 🍄', img: 'images/dark_oak_sapling.png' },
    { id: 'mangrove_propagule', cat: 'nature', en: 'Mangrove Propagule', he: 'נבט מנגרוב', desc: 'נבט מוזר שצומח למטה מתחת לעלים במקום באדמה! גודל לעץ מנגרוב! 🌱', img: 'images/mangrove_propagule.png' },

    // 3. Tools & Utilities (tools)
    { id: 'netherite_pickaxe', cat: 'tools', en: 'Netherite Pickaxe', he: 'מכוש נדרייט', desc: 'המכוש הכי מהיר וחזק בעולם! חוצב כל בלוק בשבריר שנייה! ⛏️🖤', img: 'images/netherite_pickaxe.png' },
    { id: 'netherite_axe', cat: 'tools', en: 'Netherite Axe', he: 'גרזן נדרייט', desc: 'חותך עצי ענק בשנייה ועושה מכות קטלניות בקרב! 🪓', img: 'images/netherite_axe.png' },
    { id: 'netherite_shovel', cat: 'tools', en: 'Netherite Shovel', he: 'את חפירה מנדרייט', desc: 'חופר חול, עפר וחצץ במהירות שיא! 🪏', img: 'images/netherite_shovel.png' },
    { id: 'netherite_hoe', cat: 'tools', en: 'Netherite Hoe', he: 'מעדר נדרייט', desc: 'הופך אדמה לשדות חקלאיים ענקיים בקלי קלות! 🌾', img: 'images/netherite_hoe.png' },
    { id: 'spyglass', cat: 'tools', en: 'Spyglass', he: 'משקפת', desc: 'משקפת נחושת ואמטיסט לראות הרים, מפלצות וטירות מרחוק! 🔭', img: 'images/spyglass.png' },
    { id: 'bundle', cat: 'tools', en: 'Bundle', he: 'שק חפצים', desc: 'שק עור קסום שחוסך מקום ומכיל המון חפצים קטנים יחד! 🎒', img: 'images/bundle.png' },
    { id: 'clock', cat: 'tools', en: 'Clock', he: 'שעון זהב', desc: 'מראה אם בחוץ יום או לילה כדי שלא תצאו לחושך עם המפלצות! ⏰', img: 'images/clock_00.png' },
    { id: 'compass', cat: 'tools', en: 'Compass', he: 'מצפן', desc: 'מחט אדומה שתמיד מראה לכם את הדרך חזרה לנקודת ההתחלה שלכם! 🧭', img: 'images/compass_00.png' },
    { id: 'lead', cat: 'tools', en: 'Lead', he: 'רצועה', desc: 'חבל לקשור סוסים, לאמות וכלבים ולקחת אותם איתכם לטיול! 🪢', img: 'images/lead.png' },
    { id: 'name_tag', cat: 'tools', en: 'Name Tag', he: 'תגית שם', desc: 'תגית שאפשר לכתוב עליה שם בסדן ולתת לחיית המחמד שלכם! 🏷️', img: 'images/name_tag.png' },
    { id: 'iron_pickaxe', cat: 'tools', en: 'Iron Pickaxe', he: 'מכוש ברזל', desc: 'חובה בשביל לחצוב יהלומים וזהב מתחת לאדמה. ⛏️', img: 'images/iron_pickaxe.png' },
    { id: 'stone_axe', cat: 'tools', en: 'Stone Axe', he: 'גרזן אבן', desc: 'חותך עץ הרבה יותר מהר מהידיים שלך. 🪓', img: 'images/stone_axe.png' },
    { id: 'water_bucket', cat: 'tools', en: 'Water Bucket', he: 'דלי מים', desc: 'מציל חיים אם אתה נופל למקום גבוה או אם יש לאבה. 💧', img: 'images/water_bucket.png' },
    { id: 'flint_and_steel', cat: 'tools', en: 'Flint and Steel', he: 'אבן צור ופלדה', desc: 'עושה אש! פותח את השער לנת\'ר (The Nether). 🔥', img: 'https://minecraft.wiki/images/Flint_and_Steel_JE4_BE2.png' },
    { id: 'shears', cat: 'tools', en: 'Shears', he: 'מספריים', desc: 'גוזם צמר מכבשים בלי לפגוע בהן ואוסף עלים ירוקים שלמים! ✂️', img: 'https://minecraft.wiki/images/Shears_JE2_BE2.png' },
    { id: 'fishing_rod', cat: 'tools', en: 'Fishing Rod', he: 'חכה', desc: 'זורקים למים ודגים דגים טעימים, ספרים מכושפים ואוצרות! 🎣', img: 'images/fishing_rod.png' },
    { id: 'brush', cat: 'tools', en: 'Brush', he: 'מברשת ארכיאולוגיה', desc: 'מברשת עדינה שמנקה חול וחצץ חשודים כדי לחשוף אוצרות עתיקים! 🏺', img: 'images/brush.png' },

    // 4. Combat & Weapons (weapons)
    { id: 'trident', cat: 'weapons', en: 'Trident', he: 'קלשון אגדי (Trident)', desc: 'נשק אגדי מהמעמקים! אפשר לזרוק אותו והוא יחזור אליך ויורה ברקים בסערה! 🔱⚡', img: 'images/trident.png' },
    { id: 'netherite_sword', cat: 'weapons', en: 'Netherite Sword', he: 'חרב נדרייט', desc: 'החרב החזקה ביותר בעולם! עשויה מנדרייט שחור, לא נשרפת בלבה ועושה נזק עצום! 🖤⚔️', img: 'images/netherite_sword.png' },
    { id: 'netherite_helmet', cat: 'weapons', en: 'Netherite Helmet', he: 'קסדת נדרייט', desc: 'קסדה עמידה וחזקה להגנה על הראש מפני מפלצות וקריפרים! 🪖', img: 'images/netherite_helmet.png' },
    { id: 'netherite_chestplate', cat: 'weapons', en: 'Netherite Chestplate', he: 'שריון חזה מנדרייט', desc: 'השריון הכי חזק במשחק, שום מכה לא תפיל אותך! 🛡️🖤', img: 'images/netherite_chestplate.png' },
    { id: 'netherite_leggings', cat: 'weapons', en: 'Netherite Leggings', he: 'מכנסי נדרייט', desc: 'מגנים על הרגליים בקרבות הכי קשים! 👖', img: 'images/netherite_leggings.png' },
    { id: 'netherite_boots', cat: 'weapons', en: 'Netherite Boots', he: 'מגפי נדרייט', desc: 'מגפיים קשוחות ששומרות על הרגליים מלבה ומכות! 🥾', img: 'images/netherite_boots.png' },
    { id: 'crossbow', cat: 'weapons', en: 'Crossbow', he: 'רובה קשת', desc: 'קשת מוצלבת קטלנית שיורה חיצים במהירות עצומה ואפילו זיקוקים! 🏹💥', img: 'images/crossbow_standby.png' },
    { id: 'arrow', cat: 'weapons', en: 'Arrow', he: 'חץ', desc: 'חץ עץ עם נוצה! משמש כתחמושת לקשת ולרובה קשת! 🎯', img: 'images/arrow.png' },
    { id: 'mace', cat: 'weapons', en: 'Mace', he: 'פטיש קרב (Mace)', desc: 'נשק חדש ומגניב! ככל שאתה קופץ מגבוה יותר, המכה חזקה יותר! 🔨', img: 'images/mace.png' },
    { id: 'diamond_sword', cat: 'weapons', en: 'Diamond Sword', he: 'חרב יהלום', desc: 'הנשק הכי חזק נגד מפלצות, עושה המון נזק! ⚔️', img: 'images/diamond_sword.png' },
    { id: 'bow', cat: 'weapons', en: 'Bow', he: 'קשת', desc: 'מאפשרת לירות חיצים מרחוק. מעולה נגד קריפרים! 🏹', img: 'images/bow.png' },
    { id: 'iron_chestplate', cat: 'weapons', en: 'Iron Chestplate', he: 'שריון ברזל', desc: 'מגן על הלב שלך מפני מכות של זומבים. 🛡️', img: 'images/iron_chestplate.png' },
    { id: 'shield', cat: 'weapons', en: 'Shield', he: 'מגן', desc: 'חוסם חיצים של שלדים ופיצוצים של קריפר. עזר מצוין!', img: 'https://minecraft.wiki/images/Shield_JE2_BE1.png' },

    // 5. Food & Drinks (food)
    { id: 'wheat', cat: 'food', en: 'Wheat', he: 'חיטה', desc: 'צומחת בשדה מזרעים! מאכילים בה פרות וכבשים ואופים ממנה לחם חם! 🌾', img: 'https://minecraft.wiki/images/Wheat_JE2_BE2.png' },
    { id: 'wheat_seeds', cat: 'food', en: 'Wheat Seeds', he: 'זרעי חיטה', desc: 'שותלים באדמה חרושה ליד מים כדי לגדל יבול חיטה זהוב! 🌱', img: 'https://minecraft.wiki/images/Wheat_Seeds_JE2_BE2.png' },
    { id: 'carrot', cat: 'food', en: 'Carrot', he: 'גזר', desc: 'ירק כתום עסיסי שגדל באדמה! חזירים וארנבים רצים אחריו בשמחה! 🥕', img: 'images/carrot.png' },
    { id: 'potato', cat: 'food', en: 'Potato', he: 'תפוח אדמה', desc: 'ירק שמוצאים בכפרים ושותלים בגינה! אפשר לאכול חי או לאפות בתנור! 🥔', img: 'https://minecraft.wiki/images/Potato_JE3_BE2.png' },
    { id: 'baked_potato', cat: 'food', en: 'Baked Potato', he: 'תפוח אדמה אפוי', desc: 'תפו״א חם, רך וטעים ישר מהתנור שממלא המון רעב! 🥔🔥', img: 'images/baked_potato.png' },
    { id: 'beetroot', cat: 'food', en: 'Beetroot', he: 'סלק', desc: 'ירק אדום-סגול שגדל בשדה ומשמש להכנת מרק סלק עשיר! 🟣', img: 'images/beetroot.png' },
    { id: 'beetroot_seeds', cat: 'food', en: 'Beetroot Seeds', he: 'זרעי סלק', desc: 'זרעים קטנים שזורעים באדמה כדי לגדל סלקים טריים! 🌱', img: 'images/beetroot_seeds.png' },
    { id: 'melon_slice', cat: 'food', en: 'Melon Slice', he: 'פלח אבטיח', desc: 'פלח אבטיח עסיסי ומרענן לימי שמש חמים במיינקראפט! 🍉', img: 'https://minecraft.wiki/images/Melon_Slice_JE2_BE2.png' },
    { id: 'melon_seeds', cat: 'food', en: 'Melon Seeds', he: 'גרעיני אבטיח', desc: 'שותלים באדמה וגבעול האבטיח מצמיח אבטיח ענק שלם! 🍉', img: 'https://minecraft.wiki/images/Melon_Seeds_JE2_BE2.png' },
    { id: 'pumpkin', cat: 'food', en: 'Pumpkin', he: 'דלעת', desc: 'דלעת כתומה ענקית שגדלה בשדה! אפשר לגלף לה פרצוף מפחיד או להכין פאי דלעת! 🎃', img: 'images/carved_pumpkin.png' },
    { id: 'pumpkin_seeds', cat: 'food', en: 'Pumpkin Seeds', he: 'גרעיני דלעת', desc: 'זורעים בקרקע כדי לגדל שיחי דלעות שמנמנות! 🎃', img: 'https://minecraft.wiki/images/Pumpkin_Seeds_JE2_BE2.png' },
    { id: 'sweet_berries', cat: 'food', en: 'Sweet Berries', he: 'גרגרי יער מתוקים', desc: 'תותי יער מתוקים וטעימים משיחי קוצים ביער! שועלים מתים עליהם! 🍓', img: 'https://minecraft.wiki/images/Sweet_Berries_JE1_BE1.png' },
    { id: 'cake', cat: 'food', en: 'Cake', he: 'עוגת יום הולדת', desc: 'עוגה מתוקה עם קצפת ותותים! מניחים על שולחן וכל החברים יכולים לאכול ממנה 7 פרוסות! 🎂', img: 'images/cake.png' },
    { id: 'cookie', cat: 'food', en: 'Cookie', he: 'עוגיית שוקולד צ׳יפס', desc: 'עוגייה פריכה עם שבבי שוקולד שמכינים מקקאו וחיטה! 🍪', img: 'images/cookie.png' },
    { id: 'golden_carrot', cat: 'food', en: 'Golden Carrot', he: 'גזר זהב', desc: 'גזר עטוף בזהב טהור! האוכל הכי משביע במשחק, ומשמש גם לרקיחת שיקוי ראיית לילה! 🥕✨', img: 'images/golden_carrot.png' },
    { id: 'glistering_melon_slice', cat: 'food', en: 'Glistering Melon Slice', he: 'פלח אבטיח מנצנץ', desc: 'פלח אבטיח מצופה זהב נוצץ! משמש לרקיחת שיקוי ריפוי מיידי! 🍉✨', img: 'images/glistering_melon_slice.png' },
    { id: 'apple', cat: 'food', en: 'Apple', he: 'תפוח', desc: 'נופל לפעמים מעצים. מילוי בריאות טעים! 🍎', img: 'images/apple.png' },
    { id: 'cooked_beef', cat: 'food', en: 'Cooked Beef', he: 'סטייק מבושל', desc: 'האוכל הכי משביע במשחק. ממלא הרבה לבבות. 🥩', img: 'images/cooked_beef.png' },
    { id: 'golden_apple', cat: 'food', en: 'Golden Apple', he: 'תפוח זהב', desc: 'מביא כוחות על וריפוי מהיר במצבי סכנה! ✨', img: 'images/golden_apple.png' },
    { id: 'bread', cat: 'food', en: 'Bread', he: 'לחם', desc: 'אופים אותו מחיטה שגדלה בשדה. טעים וקל להכנה. 🍞', img: 'images/bread.png' },

    // 6. Books, Magic & Potions (books)
    { id: 'brewing_stand', cat: 'books', en: 'Brewing Stand', he: 'עמדת רקיחה (מתקן שיקויים)', desc: 'שולחן המעבדה של האלכימאי! עליו מניחים בקבוקים ורוקחים את כל סוגי השיקויים! ⚗️', img: 'images/brewing_stand.png' },
    { id: 'cauldron', cat: 'books', en: 'Cauldron', he: 'קדרה (סיר קסמים)', desc: 'סיר ברזל גדול למילוי מים, צביעת שריונות עור או החזקת שיקויים! 🍲', img: 'images/cauldron.png' },
    { id: 'glass_bottle', cat: 'books', en: 'Glass Bottle', he: 'בקבוק זכוכית', desc: 'בקבוקון ריק שיוצרים מזכוכית. ממלאים בו מים או שיקויים קסומים! 🧪', img: 'images/glass_bottle.png' },
    { id: 'potion', cat: 'books', en: 'Potion of Healing', he: 'שיקוי ריפוי', desc: 'בקבוק קסם ורוד זוהר שמרפא ומחזיר לבבות בריאות באופן מיידי! 💖🧪', img: 'https://minecraft.wiki/images/Potion_of_Healing_JE2_BE2.png' },
    { id: 'splash_potion', cat: 'books', en: 'Splash Potion of Healing', he: 'שיקוי ריפוי מתנפץ', desc: 'שיקוי עם צוואר עקום שזורקים על הרצפה או על חברים כדי לרפא אותם ברגע! 💥🧪', img: 'https://minecraft.wiki/images/Splash_Potion_of_Healing_JE2_BE2.png' },
    { id: 'lingering_potion', cat: 'books', en: 'Lingering Potion', he: 'שיקוי ענן נשאר (Lingering)', desc: 'שיקוי שמכינים עם נשימת דרקון ומייצר ענן קסם שנשאר על הקרקע! 💨🧪', img: 'https://minecraft.wiki/images/Lingering_Potion_of_Healing_JE2_BE2.png' },
    { id: 'blaze_powder', cat: 'books', en: 'Blaze Powder', he: 'אבקת להבה (בלייז)', desc: 'אבקה כתומה לוהטת מהנת׳ר שמשמשת כדלק החיוני להפעלת עמדת השיקויים! ⚡', img: 'images/blaze_powder.png' },
    { id: 'magma_cream', cat: 'books', en: 'Magma Cream', he: 'קרם מאגמה', desc: 'חומר לוהט מקוביות מאגמה! משמש לרקיחת שיקוי חסינות לאש ולבה! 🔥', img: 'https://minecraft.wiki/images/Magma_Cream_JE3_BE2.png' },
    { id: 'ghast_tear', cat: 'books', en: 'Ghast Tear', he: 'דמעת גאסט', desc: 'דמעה קסומה מרוח רפאים בנת׳ר! משמשת לרקיחת שיקוי התחדשות בריאות (Regeneration)! 💧', img: 'images/ghast_tear.png' },
    { id: 'fermented_spider_eye', cat: 'books', en: 'Fermented Spider Eye', he: 'עין עכביש מותססת', desc: 'עין עכביש עם סוכר ופטריה שהופכת שיקויים להשפעות הפוכות ושיקויי נזק! 🕷️', img: 'images/fermented_spider_eye.png' },
    { id: 'book', cat: 'books', en: 'Book', he: 'ספר', desc: 'מכיל ידע וקסמים. אפשר לכתוב בו!', img: 'images/book.png' },
    { id: 'bookshelf', cat: 'books', en: 'Bookshelf', he: 'מדף ספרים', desc: 'חיבור למגדל קסמים, נותן בונוס לקסם. 📚', img: 'images/bookshelf.png' },
    { id: 'enchanted_book', cat: 'books', en: 'Enchanted Book', he: 'ספר מכושף', desc: 'ספר עם קסם מיוחד בפנים! אפשר לשים את הקסם על חרב או שריון בעזרת סדן (Anvil). 🌟', img: 'images/enchanted_book.png' },
    { id: 'book_and_quill', cat: 'books', en: 'Book and Quill', he: 'ספר ונוצה', desc: 'ספר ריק שאפשר לכתוב בו סיפורים או רעיונות משלך! 🪶', img: 'https://minecraft.wiki/images/Book_and_Quill_JE2_BE2.png' },
    { id: 'written_book', cat: 'books', en: 'Written Book', he: 'ספר כתוב', desc: 'ספר שכבר כתבו בו משהו וסגרו אותו. 📖', img: 'images/written_book.png' }
];

let currentView = 'chest'; // 'chest' | 'carousel'
let currentCategory = 'building';
let searchQuery = '';
let searchResultsOverride = null;

const mainContent = document.getElementById('main-content');
const tooltip = document.getElementById('mc-tooltip');
const ttEn = document.getElementById('tt-en');
const ttHe = document.getElementById('tt-he');
const ttDesc = document.getElementById('tt-desc');

const categoryMeta = {
    'building': { title: '🧱 בלוקי בנייה (Building Blocks)' },
    'nature': { title: '🌱 טבע וחקלאות (Natural Blocks)' },
    'tools': { title: '⛏️ כלי עבודה ושירות (Tools & Utilities)' },
    'weapons': { title: '⚔️ קרב ונשק (Combat & Weapons)' },
    'food': { title: '🍎 אוכל ושתייה (Food & Drinks)' },
    'books': { title: '📚 ספרים וקסמים (Books & Magic)' }
};

const categoryOrder = ['building', 'nature', 'tools', 'weapons', 'food', 'books'];

// Built-in Kids Crafting Recipes Knowledge Base with 3x3 Grid & Sub-crafting
const craftingRecipes = [
    {
        keywords: ['תפוח זהב', 'תפוח מוזהב', 'גולדן אפל', 'גולדן', 'golden apple', 'golden_apple'],
        title: '🍏 איך מכינים תפוח זהב (Golden Apple)?',
        summary: 'כדי להכין תפוח זהב מנצנץ וטעים, צריך <strong>תפוח רגיל אחד (Apple)</strong> ו-<strong>8 מטילי זהב (Gold Ingots)</strong>!',
        ingredients: [
            { name: 'תפוח (Apple) x1', img: 'images/apple.png' },
            { name: 'מטיל זהב (Gold Ingot) x8', img: 'images/raw_gold_block.png' }
        ],
        grid: [
            ['images/raw_gold_block.png', 'images/raw_gold_block.png', 'images/raw_gold_block.png'],
            ['images/raw_gold_block.png', 'images/apple.png', 'images/raw_gold_block.png'],
            ['images/raw_gold_block.png', 'images/raw_gold_block.png', 'images/raw_gold_block.png']
        ],
        resultImg: 'images/golden_apple.png',
        resultName: 'תפוח זהב (Golden Apple)',
        subcraft: [
            '<strong>🍎 תפוח:</strong> נופל לפעמים כששוברים עלי עץ אלון.',
            '<strong>🪙 מטילי זהב:</strong> חוצבים עפרות זהב במערות ומתיכים אותן בתנור.'
        ],
        instructions: [
            '<strong>השורה העליונה:</strong> 3 מטילי זהב.',
            '<strong>השורה האמצעית:</strong> מטיל זהב מימין, תפוח רגיל באמצע, ומטיל זהב משמאל.',
            '<strong>השורה התחתונה:</strong> 3 מטילי זהב.'
        ]
    },
    {
        keywords: ['מעמד שריון', 'מעמד שיריון', 'armor stand', 'ארמור סטנד', 'שריון'],
        title: '🛡️ איך מכינים מעמד שריון (Armor Stand)?',
        summary: 'כדי להכין מעמד שריון (Armor Stand) במיינקראפט, צריך <strong>6 מקלות (Sticks)</strong> ו-<strong>חצי לוח אבן חלק (Smooth Stone Slab)</strong> אחד.',
        ingredients: [
            { name: 'מקל (Stick) x6', img: 'images/stick.png' },
            { name: 'חצי לוח אבן חלק (Smooth Stone Slab) x1', img: 'images/smooth_stone_slab_side.png' }
        ],
        grid: [
            ['images/stick.png', 'images/stick.png', 'images/stick.png'],
            [null, 'images/stick.png', null],
            ['images/stick.png', 'images/smooth_stone_slab_side.png', 'images/stick.png']
        ],
        resultImg: 'images/armor_stand.png',
        resultName: 'מעמד שריון (Armor Stand)',
        subcraft: [
            '<strong>🥢 מקלות:</strong> מכינים מלוחות עץ (Wood Planks) בשולחן העבודה.',
            '<strong>🪨 חצי לוח אבן חלק (Smooth Stone Slab):</strong>',
            '1. שורפים אבן ריצוף (Cobblestone) בתנור כדי לקבל אבן רגילה (Stone).',
            '2. שורפים את האבן הרגילה פעם נוספת בתנור כדי לקבל אבן חלקָה (Smooth Stone).',
            '3. מניחים 3 יחידות של אבן חלקָה בשולחן העבודה בשורה אחת כדי לקבל חצאי לוחות (Slabs).'
        ],
        instructions: [
            '<strong>השורה העליונה:</strong> מקל בכל אחת משלושת המשבצות (3 מקלות לאורך כל השורה).',
            '<strong>השורה האמצעית:</strong> מקל אחד במשבצת האמצעית.',
            '<strong>השורה התחתונה:</strong> מקל במשבצת השמאלית, חצי לוח אבן חלק באמצע, ומקל בימנית.'
        ]
    },
    {
        keywords: ['דגל', 'banner', 'בנר', 'דגלים'],
        title: '🚩 איך מכינים דגל (Banner)?',
        summary: 'כדי להכין דגל צבעוני במיינקראפט, צריך <strong>מקל אחד (Stick)</strong> ו-<strong>6 יחידות צמר (Wool)</strong> בכל צבע שתרצה!',
        ingredients: [
            { name: 'מקל (Stick) x1', img: 'images/stick.png' },
            { name: 'צמר (Wool) x6', img: 'https://minecraft.wiki/images/White_Wool_JE2_BE2.png' }
        ],
        grid: [
            ['https://minecraft.wiki/images/White_Wool_JE2_BE2.png', 'https://minecraft.wiki/images/White_Wool_JE2_BE2.png', 'https://minecraft.wiki/images/White_Wool_JE2_BE2.png'],
            ['https://minecraft.wiki/images/White_Wool_JE2_BE2.png', 'https://minecraft.wiki/images/White_Wool_JE2_BE2.png', 'https://minecraft.wiki/images/White_Wool_JE2_BE2.png'],
            [null, 'images/stick.png', null]
        ],
        resultImg: 'https://minecraft.wiki/images/White_Banner.png',
        resultName: 'דגל (Banner)',
        subcraft: [
            '<strong>🐑 צמר:</strong> גוזמים כבשים בעזרת מספריים (Shears).',
            '<strong>🥢 מקל:</strong> מכינים מ-2 קרשי עץ בשולחן העבודה.'
        ],
        instructions: [
            '<strong>שתי השורות העליונות:</strong> ממלאים את כל 6 המשבצות בצמר.',
            '<strong>השורה התחתונה:</strong> מניחים מקל אחד במשבצת האמצעית.'
        ]
    },
    {
        keywords: ['עוגה', 'cake', 'עוגת יום הולדת'],
        title: '🎂 איך מכינים עוגה (Cake)?',
        summary: 'כדי להכין עוגה מפנקת, צריך <strong>3 דליי חלב</strong>, <strong>2 סוכר</strong>, <strong>ביצה אחת</strong> ו-<strong>3 חיטה</strong>!',
        ingredients: [
            { name: 'דלי חלב (Milk Bucket) x3', img: 'images/water_bucket.png' },
            { name: 'סוכר (Sugar) x2', img: 'images/calcite.png' },
            { name: 'ביצה (Egg) x1', img: 'images/diorite.png' },
            { name: 'חיטה (Wheat) x3', img: 'images/bread.png' }
        ],
        grid: [
            ['images/water_bucket.png', 'images/water_bucket.png', 'images/water_bucket.png'],
            ['images/calcite.png', 'images/diorite.png', 'images/calcite.png'],
            ['images/bread.png', 'images/bread.png', 'images/bread.png']
        ],
        resultImg: 'https://minecraft.wiki/images/Cake_JE4.png',
        resultName: 'עוגה (Cake)',
        subcraft: [
            '<strong>🥛 חלב:</strong> לוחצים עם דלי ריק על פרה.',
            '<strong>🌾 חיטה:</strong> קוצרים שדה חיטה.'
        ],
        instructions: [
            '<strong>השורה העליונה:</strong> 3 דליי חלב.',
            '<strong>השורה האמצעית:</strong> סוכר, ביצה באמצע, וסוכר.',
            '<strong>השורה התחתונה:</strong> 3 יחידות חיטה.'
        ]
    },
    {
        keywords: ['בוכנה', 'piston', 'פיסטון'],
        title: '⚙️ איך מכינים בוכנה (Piston)?',
        summary: 'כדי להכין בוכנה שדוחפת בלוקים, צריך <strong>3 קרשי עץ</strong>, <strong>4 אבנים מרוצפות</strong>, <strong>מטיל ברזל אחד</strong> ו-<strong>אבק רדסטון אחד</strong>!',
        ingredients: [
            { name: 'קרשי עץ (Planks) x3', img: 'images/oak_planks.png' },
            { name: 'אבן מרוצפת (Cobblestone) x4', img: 'images/cobblestone.png' },
            { name: 'מטיל ברזל (Iron Ingot) x1', img: 'images/iron_block.png' },
            { name: 'רדסטון (Redstone Dust) x1', img: 'images/redstone_ore.png' }
        ],
        grid: [
            ['images/oak_planks.png', 'images/oak_planks.png', 'images/oak_planks.png'],
            ['images/cobblestone.png', 'images/iron_block.png', 'images/cobblestone.png'],
            ['images/cobblestone.png', 'images/redstone_ore.png', 'images/cobblestone.png']
        ],
        resultImg: 'https://minecraft.wiki/images/Piston.png',
        resultName: 'בוכנה (Piston)',
        subcraft: [],
        instructions: [
            '<strong>השורה העליונה:</strong> 3 קרשי עץ.',
            '<strong>השורה האמצעית:</strong> אבן מרוצפת, ברזל באמצע, ואבן מרוצפת.',
            '<strong>השורה התחתונה:</strong> אבן מרוצפת, רדסטון באמצע, ואבן מרוצפת.'
        ]
    },
    {
        keywords: ['חרב', 'sword', 'חרב יהלום', 'חרבות'],
        title: '⚔️ איך מכינים חרב יהלום (Diamond Sword)?',
        summary: 'כדי להכין חרב יהלום קטלנית, צריך <strong>מקל אחד</strong> ו-<strong>2 יהלומים טהורים</strong>.',
        ingredients: [
            { name: 'מקל (Stick) x1', img: 'images/stick.png' },
            { name: 'יהלום (Diamond) x2', img: 'images/diamond_block.png' }
        ],
        grid: [
            [null, 'images/diamond_block.png', null],
            [null, 'images/diamond_block.png', null],
            [null, 'images/stick.png', null]
        ],
        resultImg: 'https://minecraft.wiki/images/Diamond_Sword_JE3_BE3.png',
        resultName: 'חרב יהלום (Diamond Sword)',
        subcraft: [
            '<strong>💎 יהלומים:</strong> חוצבים עפרות יהלום במערות עמוקות עם מכוש ברזל ומעלה.'
        ],
        instructions: [
            'סדר בטור האמצעי: יהלום למעלה, יהלום באמצע, ומקל למטה!'
        ]
    },
    {
        keywords: ['לפיד', 'torch', 'לפידים', 'אור'],
        title: '💡 איך מכינים לפיד (Torch)?',
        summary: 'להכנת 4 לפידים מאירי מערות, צריך רק <strong>מקל אחד</strong> ו-<strong>פחם אחד</strong>!',
        ingredients: [
            { name: 'מקל (Stick) x1', img: 'images/stick.png' },
            { name: 'פחם (Coal) x1', img: 'images/coal_ore.png' }
        ],
        grid: [
            [null, null, null],
            [null, 'images/coal_ore.png', null],
            [null, 'images/stick.png', null]
        ],
        resultImg: 'https://minecraft.wiki/images/Torch_JE4_BE2.png',
        resultName: 'לפיד (Torch x4)',
        subcraft: [
            '<strong>🪵 פחם:</strong> חוצבים עפרת פחם עם מכוש או שורפים בולי עץ בתנור לקבלת פחם עץ.'
        ],
        instructions: [
            'שים פחם ישירות מעל מקל אחד בכל מקום ברשת!'
        ]
    }
];

// Comprehensive Hebrew & English Morphological Normalizer (Singular/Plural/Prefix/Suffix)
function getWordStems(word) {
    if (!word) return [];
    let w = word.toLowerCase().trim();
    if (w.length <= 1) return [w];

    const stems = new Set([w]);

    // Strip common Hebrew prefixes: ה, ב, ל, מ, ש, כ, ו
    if (w.length >= 4 && /^[הבלמשכו]/.test(w)) {
        stems.add(w.slice(1));
    }

    // Strip Hebrew plural and construct suffixes: ים, ות, י, יו, ת, יה
    if (w.endsWith('ים') && w.length >= 4) {
        stems.add(w.slice(0, -2)); // e.g. קרשים -> קרש, יהלומים -> יהלום, תפוחים -> תפוח
        stems.add(w.slice(0, -2) + 'י'); // קרשי
    }
    if (w.endsWith('ות') && w.length >= 4) {
        stems.add(w.slice(0, -2)); // e.g. חרבות -> חרב, פטריות -> פטריה
        stems.add(w.slice(0, -2) + 'ה');
        stems.add(w.slice(0, -2) + 'ת');
    }
    if (w.endsWith('י') && w.length >= 4) {
        stems.add(w.slice(0, -1)); // e.g. קרשי -> קרש, שתילי -> שתיל, בולי -> בול
        stems.add(w.slice(0, -1) + 'ים');
    }

    // English plurals: s, es, ies
    if (w.endsWith('ies') && w.length >= 5) {
        stems.add(w.slice(0, -3) + 'y');
    } else if (w.endsWith('es') && w.length >= 4) {
        stems.add(w.slice(0, -2));
    } else if (w.endsWith('s') && w.length >= 3) {
        stems.add(w.slice(0, -1));
    }

    return Array.from(stems);
}

function matchSearchTerms(queryStr, itemText) {
    const qTokens = queryStr.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (qTokens.length === 0) return true;

    const itemTokens = itemText.toLowerCase().split(/[\s,./()"'`_-]+/).filter(Boolean);
    const itemStems = new Set();
    itemTokens.forEach(t => {
        getWordStems(t).forEach(s => itemStems.add(s));
    });

    // Every word in the query must have at least one matching stem in the item text
    return qTokens.every(qToken => {
        const qStems = getWordStems(qToken);
        return qStems.some(qs => {
            if (itemText.toLowerCase().includes(qs)) return true;
            for (const is of itemStems) {
                if (is.includes(qs) || qs.includes(is)) return true;
            }
            return false;
        });
    });
}

function renderItems() {
    if (!mainContent) return;
    mainContent.innerHTML = '';

    let itemsToProcess = inventoryData;

    // Filter by search query with complete Singular/Plural Hebrew Stemming
    if (searchQuery.trim() !== '') {
        itemsToProcess = inventoryData.filter(item => {
            const fullItemText = `${item.he} ${item.en} ${item.desc} ${item.cat}`;
            return matchSearchTerms(searchQuery, fullItemText);
        });
    } else if (currentCategory !== 'all') {
        itemsToProcess = inventoryData.filter(item => item.cat === currentCategory);
    }

    if (itemsToProcess.length === 0) {
        mainContent.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888; font-size: 1.3rem;">
                🔍 לא נמצאו פריטים מתאימים לחיפוש "${searchQuery}"... נסה לשאול את ה-AI! 🤖
            </div>
        `;
        return;
    }

    if (currentView === 'chest') {
        mainContent.className = 'view-chest';
        
        const categoriesToRender = (currentCategory === 'all' && searchQuery.trim() === '')
            ? categoryOrder 
            : [...new Set(itemsToProcess.map(i => i.cat))];

        categoriesToRender.forEach(catKey => {
            const items = itemsToProcess.filter(item => item.cat === catKey);
            if (items.length === 0) return;

            const section = document.createElement('div');
            section.className = 'category-section';

            const title = document.createElement('div');
            title.className = 'category-title';
            title.textContent = categoryMeta[catKey] ? categoryMeta[catKey].title : catKey;
            section.appendChild(title);

            const slotsContainer = document.createElement('div');
            slotsContainer.className = 'section-slots';

            items.forEach(item => {
                const slot = document.createElement('div');
                slot.className = 'chest-slot';

                const img = document.createElement('img');
                img.src = item.img;
                img.alt = item.en;
                img.onerror = () => {
                    img.onerror = null;
                    img.src = 'https://minecraft.wiki/images/Chest.png';
                };

                slot.addEventListener('mouseenter', (e) => showTooltip(e, item));
                slot.addEventListener('mousemove', (e) => moveTooltip(e));
                slot.addEventListener('mouseleave', hideTooltip);

                slot.appendChild(img);
                slotsContainer.appendChild(slot);
            });

            section.appendChild(slotsContainer);
            mainContent.appendChild(section);
        });
    } else {
        mainContent.className = 'view-carousel';
        itemsToProcess.forEach(item => {
            const el = document.createElement('div');
            el.className = 'carousel-item';
            el.innerHTML = `
                <img src="${item.img}" alt="${item.en}" onerror="this.onerror=null; this.src='https://minecraft.wiki/images/Chest.png'">
                <h2>${item.he}</h2>
                <h3>${item.en}</h3>
                <p>${item.desc}</p>
            `;
            mainContent.appendChild(el);
        });
    }
}

function renderVisualCraftingRecipe(r) {
    let gridHtml = '<div class="grid-3x3">';
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const itemImg = r.grid[row][col];
            gridHtml += `
                <div class="grid-cell">
                    ${itemImg ? `<img src="${itemImg}" alt="item" onerror="this.onerror=null; this.src='images/stick.png'">` : ''}
                </div>
            `;
        }
    }
    gridHtml += '</div>';

    return `
        <div class="crafting-card">
            <div class="crafting-title">${r.title}</div>
            <div class="crafting-summary">${r.summary}</div>
            
            <div>
                <strong>📦 המצרכים הנדרשים:</strong>
                <div class="ingredients-list">
                    ${r.ingredients.map(ing => `
                        <div class="ingredient-pill">
                            <img src="${ing.img}" alt="${ing.name}" onerror="this.onerror=null; this.src='images/bedrock.png'">
                            <span>${ing.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${r.subcraft ? `
                <div class="subcraft-guide">
                    <strong>🔍 כיצד משיגים ומכינים את החומרים:</strong>
                    <div style="margin-top: 6px; line-height: 1.6;">
                        ${r.subcraft.map(s => `<div>${s}</div>`).join('')}
                    </div>
                </div>
            ` : ''}

            <div>
                <strong>🛠️ סידור הפריטים בשולחן העבודה (Crafting Table):</strong>
                <div class="crafting-bench-area">
                    ${gridHtml}
                    <div class="crafting-arrow">➔</div>
                    <div class="result-box">
                        <div class="result-slot">
                            <img src="${r.resultImg}" alt="${r.resultName}" onerror="this.onerror=null; this.src='https://minecraft.wiki/images/Chest.png'">
                        </div>
                        <span style="font-size: 0.85rem; color: #ffd700;">${r.resultName}</span>
                    </div>
                </div>
            </div>

            <div>
                <strong>📋 שלבי הסידור ברשת 3x3:</strong>
                <div style="margin-top: 6px;">
                    ${r.instructions.map(inst => `<div class="ai-step">${inst}</div>`).join('')}
                </div>
            </div>
        </div>
    `;
}

let allMinecraftRecipes = {};

// Fetch local full recipes JSON
fetch('recipes.json')
    .then(res => res.json())
    .then(data => {
        allMinecraftRecipes = data;
        console.log('Loaded', Object.keys(data).length, 'recipes from recipes.json');
    })
    .catch(err => console.warn('recipes.json not loaded yet', err));

function cleanItemId(rawId) {
    if (!rawId) return null;
    return rawId.replace('minecraft:', '').trim();
}

function findRecipeInFullDatabase(query) {
    if (!allMinecraftRecipes || Object.keys(allMinecraftRecipes).length === 0) return null;
    
    const q = query.toLowerCase().trim();
    
    // Smart Transliteration & Term Normalization (Supports: "דיימונד chestplate", "שריון יהלום", "צ'סטפלייט", etc.)
    let normalized = q
        .replace(/דיימונד|דימונד/g, 'diamond')
        .replace(/איירון|אירון/g, 'iron')
        .replace(/גולדן|גולד/g, 'golden')
        .replace(/נדרייט|נדריט/g, 'netherite')
        .replace(/קופר/g, 'copper')
        .replace(/לדר/g, 'leather')
        .replace(/צ'סטפלייט|צסטפליט|שריון חזה|חולצת שריון|שריון גוף/g, 'chestplate')
        .replace(/קסדה|הלמט/g, 'helmet')
        .replace(/מכנסיים|לגינגס|רגליים/g, 'leggings')
        .replace(/מגפיים|בוטס|נעליים/g, 'boots')
        .replace(/חרב|סוורד/g, 'sword')
        .replace(/מכוש|פיקאקס/g, 'pickaxe')
        .replace(/גרזן|אקס/g, 'axe')
        .replace(/את|שובל/g, 'shovel')
        .replace(/מעדר|הו/g, 'hoe');

    // Check direct combinations like "diamond chestplate" -> "diamond_chestplate"
    const materials = ['diamond', 'iron', 'golden', 'netherite', 'copper', 'leather', 'chainmail'];
    const equipTypes = ['chestplate', 'helmet', 'leggings', 'boots', 'sword', 'pickaxe', 'axe', 'shovel', 'hoe'];

    for (const mat of materials) {
        for (const eq of equipTypes) {
            if (normalized.includes(mat) && normalized.includes(eq)) {
                targetId = `${mat}_${eq}`;
                break;
            }
        }
        if (targetId) break;
    }

    // Map common Hebrew names to recipe IDs
    const hebrewMap = {
        'שריון יהלום': 'diamond_chestplate',
        'שריון ברזל': 'iron_chestplate',
        'שריון זהב': 'golden_chestplate',
        'שריון עור': 'leather_chestplate',
        'שריון נחושת': 'copper_chestplate',
        'תפוח זהב': 'golden_apple',
        'תפוח מוזהב': 'golden_apple',
        'גולדן אפל': 'golden_apple',
        'גולדן': 'golden_apple',
        'מעמד שריון': 'armor_stand',
        'מעמד שיריון': 'armor_stand',
        'ארמור סטנד': 'armor_stand',
        'דגל': 'white_banner',
        'חרב יהלום': 'diamond_sword',
        'חרב': 'iron_sword',
        'מכוש': 'iron_pickaxe',
        'מכוש יהלום': 'diamond_pickaxe',
        'מיכוש': 'iron_pickaxe',
        'לפיד': 'torch',
        'תנור': 'furnace',
        'לחם': 'bread',
        'עוגה': 'cake',
        'בוכנה': 'piston',
        'משפך': 'hopper',
        'קשת': 'bow',
        'חץ': 'arrow',
        'מגן': 'shield',
        'דלי': 'bucket',
        'מצפן': 'compass',
        'שעון': 'clock',
        'שולחן עבודה': 'crafting_table',
        'שולחן כישופים': 'enchanting_table',
        'סדן': 'anvil',
        'חבית': 'barrel',
        'קופסה': 'chest',
        'תיבה': 'chest',
        'מיטה': 'white_bed',
        'דלת': 'oak_door',
        'סירה': 'oak_boat',
        'פצצה': 'tnt',
        'tnt': 'tnt',
        'משקפת': 'spyglass',
        'מוט ברק': 'lightning_rod'
    };

    if (!targetId) {
        for (const [heb, id] of Object.entries(hebrewMap)) {
            if (q.includes(heb)) {
                targetId = id;
                break;
            }
        }
    }

    if (!targetId) {
        // Try English match
        const matchingKey = Object.keys(allMinecraftRecipes).find(k => normalized.includes(k.replace(/_/g, ' ')) || normalized.includes(k));
        if (matchingKey) targetId = matchingKey;
    }

    if (!targetId || !allMinecraftRecipes[targetId]) return null;

    const rawRecipe = allMinecraftRecipes[targetId];
    return formatRecipeFromMinecraftJson(targetId, rawRecipe);
}

function formatRecipeFromMinecraftJson(recipeId, recipe) {
    const grid = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    const ingredientsMap = {};

    if (recipe.type === 'minecraft:crafting_shaped') {
        const pattern = recipe.pattern;
        const key = recipe.key;

        for (let r = 0; r < pattern.length; r++) {
            const rowStr = pattern[r];
            for (let c = 0; c < rowStr.length; c++) {
                const char = rowStr[c];
                if (char !== ' ' && key[char]) {
                    let itemVal = key[char];
                    let rawName = typeof itemVal === 'string' ? itemVal : (itemVal.item || (itemVal.tag ? itemVal.tag : (Array.isArray(itemVal) ? itemVal[0].item : 'stone')));
                    const cleanName = cleanItemId(rawName);
                    grid[r][c] = `images/${cleanName}.png`;
                    ingredientsMap[cleanName] = (ingredientsMap[cleanName] || 0) + 1;
                }
            }
        }
    } else if (recipe.type === 'minecraft:crafting_shapeless') {
        const ingredients = recipe.ingredients || [];
        let slotIdx = 0;
        ingredients.forEach(ing => {
            let rawName = typeof ing === 'string' ? ing : (ing.item || (Array.isArray(ing) ? ing[0].item : 'item'));
            const cleanName = cleanItemId(rawName);
            const row = Math.floor(slotIdx / 3);
            const col = slotIdx % 3;
            if (row < 3) {
                grid[row][col] = `images/${cleanName}.png`;
                ingredientsMap[cleanName] = (ingredientsMap[cleanName] || 0) + 1;
                slotIdx++;
            }
        });
    }

    const resultId = recipe.result ? (typeof recipe.result === 'string' ? cleanItemId(recipe.result) : cleanItemId(recipe.result.id || recipeId)) : recipeId;
    
    // Find Hebrew name from inventoryData if available
    const itemInInv = inventoryData.find(i => i.id === resultId);
    const titleHe = itemInInv ? itemInInv.he : resultId.replace(/_/g, ' ');

    const ingredientsList = Object.entries(ingredientsMap).map(([name, count]) => {
        const inv = inventoryData.find(i => i.id === name);
        const nameHe = inv ? inv.he : name.replace(/_/g, ' ');
        return {
            name: `${nameHe} x${count}`,
            img: `images/${name}.png`
        };
    });

    return {
        title: `🛠️ איך מכינים ${titleHe} (${resultId.replace(/_/g, ' ')})?`,
        summary: `כדי להכין <strong>${titleHe}</strong> במיינקראפט, סדר את המצרכים בשולחן העבודה לפי הרשת שלמטה! 🌟`,
        ingredients: ingredientsList,
        grid: grid,
        resultImg: `images/${resultId}.png`,
        resultName: titleHe,
        instructions: [
            '1. פתח שולחן עבודה (Crafting Table).',
            '2. הנח את המצרכים בדיוק במשבצות המסומנות ברשת ה-3x3 למטה.',
            '3. גרור את הפריט המוגמר ישירות לתיק שלך! 🎉'
        ]
    };
}

let cooldownTimerInterval = null;

function checkAiRateLimit() {
    const MAX_REQUESTS = 15;
    const TIME_WINDOW_MS = 60 * 1000;
    const now = Date.now();
    let history = JSON.parse(localStorage.getItem('aiQueryHistory') || '[]');
    
    history = history.filter(time => now - time < TIME_WINDOW_MS);
    
    if (history.length >= MAX_REQUESTS) {
        const oldestTime = history[0];
        const timeLeft = Math.ceil((TIME_WINDOW_MS - (now - oldestTime)) / 1000);
        return { allowed: false, timeLeft };
    }
    
    history.push(now);
    localStorage.setItem('aiQueryHistory', JSON.stringify(history));
    return { allowed: true };
}

function startCooldownTimer(timeLeft) {
    const aiStatus = document.getElementById('ai-status');
    if (cooldownTimerInterval) clearInterval(cooldownTimerInterval);
    
    let currentLeft = timeLeft;
    aiStatus.style.color = '#ff6b6b';
    aiStatus.textContent = `🤖 העוזר נח... חוזר בעוד ${currentLeft} שניות ⏳`;
    
    cooldownTimerInterval = setInterval(() => {
        currentLeft--;
        if (currentLeft <= 0) {
            clearInterval(cooldownTimerInterval);
            cooldownTimerInterval = null;
            aiStatus.style.color = '';
            aiStatus.textContent = '⚡ מנוע חיפוש חכם פעיל';
        } else {
            aiStatus.textContent = `🤖 העוזר נח... חוזר בעוד ${currentLeft} שניות ⏳`;
        }
    }, 1000);
}

// Ask AI / NLP Engine
async function handleAiQuery(query) {
    if (!query || query.trim() === '') return;
    
    const rateLimit = checkAiRateLimit();
    if (!rateLimit.allowed) {
        startCooldownTimer(rateLimit.timeLeft);
        return;
    }

    const aiResponseBox = document.getElementById('ai-response-box');
    const aiResponseContent = document.getElementById('ai-response-content');
    const aiStatus = document.getElementById('ai-status');

    aiResponseBox.classList.remove('hidden');
    aiResponseBox.classList.remove('collapsed');
    const toggleBtn = document.getElementById('toggle-ai-box');
    if (toggleBtn) {
        toggleBtn.textContent = '▲';
        toggleBtn.title = 'צמצם';
    }
    aiResponseContent.innerHTML = '⏳ חושב ומפענח את השאלה מתוך 1,500+ מתכוני המשחק... 🧠';
    aiStatus.textContent = '🔄 מפענח שאילתת יצירה (Crafting Engine)...';

    // 1. Check custom handcrafted recipes first
    const lowerQuery = query.toLowerCase();
    const recipeMatch = craftingRecipes.find(r => r.keywords.some(k => lowerQuery.includes(k)));

    if (recipeMatch) {
        aiStatus.textContent = '✨ מענה מובנה ועשיר ממאגר היצירה (Google Overview Style)';
        aiResponseContent.innerHTML = renderVisualCraftingRecipe(recipeMatch);
        return;
    }

    // 2. Check full database of 1,055 official Minecraft recipes!
    const dbRecipeMatch = findRecipeInFullDatabase(query);
    if (dbRecipeMatch) {
        aiStatus.textContent = '⚡ מענה מיידי מתוך מאגר 1,055 מתכוני Minecraft הרשמיים (0 טוקנים / 100% דיוק)!';
        aiResponseContent.innerHTML = renderVisualCraftingRecipe(dbRecipeMatch);
        return;
    }

    // 3. Try querying Ollama Local API
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const prompt = `אתה מומחה מיינקראפט ידידותי לילד בן 8. ענה בעברית פשוטה, קצרה ומשעשעת עם אימוג'ים לשאלה: "${query}". אם השאלה היא איך מכינים פריט, פרט את המצרכים ואת השלבים בשולחן העבודה.`;

        const res = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'llama3.2:latest',
                prompt: prompt,
                stream: false
            }),
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
            const data = await res.json();
            aiStatus.textContent = '🟢 מענה התקבל ממודל השפה המקומי (Local LLM)!';
            aiResponseContent.innerHTML = `
                <div style="line-height: 1.7;">${data.response.replace(/\n/g, '<br>')}</div>
            `;
            return;
        }
    } catch (err) {
        // Fallback
    }

    // 4. Fuzzy Kids Intent Resolver (When an 8-year-old describes an item instead of its exact name)
    const fuzzyKidsMap = [
        { terms: ['שורף אוכל', 'מבשל אוכל', 'מבשל בשר', 'מתיך', 'אבן חמה', 'מבשל במערה'], matchId: 'furnace', nameHe: 'תנור (Furnace)', recipe: 'furnace' },
        { terms: ['שמגן על הכפר', 'איש מברזל', 'רובוט ברזל', 'עוזר לכפרים', 'גולם'], matchId: 'iron_block', nameHe: 'גולם ברזל (Iron Golem / Iron Block)' },
        { terms: ['לעוף', 'דואה', 'כנפיים', 'זיקוקים', 'אליטרה'], matchId: 'elytra', nameHe: 'אליטרה - כנפי תעופה (Elytra / Wings)' },
        { terms: ['להשתגר', 'שיגור', 'זורק ומשתגר', 'אנדרמן כדור', 'פנינה'], matchId: 'ender_pearl', nameHe: 'פנינת אנדר (Ender Pearl)' },
        { terms: ['קלשון', 'ברקים', 'יורה ברקים', 'מזלג ענק', 'טריידנט'], matchId: 'trident', nameHe: 'קלשון אגדי (Trident)' },
        { terms: ['משקפת', 'לראות רחוק', 'זום'], matchId: 'spyglass', nameHe: 'משקפת (Spyglass)' },
        { terms: ['רכבת', 'קרונית', 'פסים', 'מסילה'], matchId: 'minecart', nameHe: 'קרונית רכבת (Minecart)' },
        { terms: ['כלב', 'זאב', 'חבר שלי', 'לאלף כלב'], matchId: 'wolf_spawn_egg', nameHe: 'זאב / כלב מחמד (Wolf)' },
        { terms: ['חתול', 'מבריח קריפר', 'מיאו'], matchId: 'cat_spawn_egg', nameHe: 'חתול (Cat)' },
        { terms: ['קריפר', 'מתפוצץ ירוק', 'מפלצת ירוקה', 'בום'], matchId: 'creeper_spawn_egg', nameHe: 'קריפר (Creeper)' },
        { terms: ['לטאה ורודה', 'אקסולוטל', 'דג ורוד'], matchId: 'axolotl_spawn_egg', nameHe: 'אקסולוטל (Axolotl)' },
        { terms: ['החרב הכי חזקה', 'חרב שחורה', 'חרב נדרייט'], matchId: 'netherite_sword', nameHe: 'חרב נדרייט (Netherite Sword)' },
        { terms: ['מנגנת', 'סגולה שמשמיעה צליל', 'קריסטל סגול', 'אבן סגולה'], matchId: 'amethyst_block', nameHe: 'בלוק אמטיסט (Amethyst Block)' },
        { terms: ['מפוצץ', 'פצצה', 'פיצוץ', 'דינמיט'], matchId: 'tnt', nameHe: 'TNT / פצצה', recipe: 'tnt' },
        { terms: ['דוחף בלוקים', 'דוחף דברים', 'מזיז בלוקים'], matchId: 'piston', nameHe: 'בוכנה (Piston)', recipe: 'piston' },
        { terms: ['מגן מחיצים', 'חוסם מפלצות', 'מגן עץ'], matchId: 'shield', nameHe: 'מגן (Shield)', recipe: 'shield' },
        { terms: ['שומר על שריון', 'בובה של בגדים', 'מעמיד שריון', 'בובה לשריון'], matchId: 'armor_stand', nameHe: 'מעמד שריון (Armor Stand)', recipe: 'armor_stand' },
        { terms: ['תפוח נוצץ', 'תפוח מזהב', 'תפוח קסום', 'תפוח נותן כוחות'], matchId: 'golden_apple', nameHe: 'תפוח זהב (Golden Apple)', recipe: 'golden_apple' },
        { terms: ['בונמיל', 'בונמייל', 'קמח עצמות', 'לגדל מהר', 'דשן', 'מצמיח צמחים', 'להצמיח'], matchId: 'bone_meal', nameHe: 'קמח עצמות / בונמיל (Bone Meal)' },
        { terms: ['להכין שיקוי', 'שיקויים', 'מעבדת שיקויים', 'עמדת שיקויים', 'עמדת רקיחה'], matchId: 'brewing_stand', nameHe: 'עמדת רקיחה / שיקויים (Brewing Stand)' },
        { terms: ['סיר קסמים', 'סיר ברזל', 'קדרה'], matchId: 'cauldron', nameHe: 'קדרה / סיר קסמים (Cauldron)' },
        { terms: ['עוגה', 'יומולדת', 'עוגת יום הולדת'], matchId: 'cake', nameHe: 'עוגה (Cake)' },
        { terms: ['לגזוז צמר', 'מספריים', 'לחתוך עלים'], matchId: 'shears', nameHe: 'מספריים (Shears)' },
        { terms: ['לדוג דגים', 'חכה', 'דייג'], matchId: 'fishing_rod', nameHe: 'חכה (Fishing Rod)' }
    ];

    let detectedIntent = null;
    for (const f of fuzzyKidsMap) {
        if (f.terms.some(t => lowerQuery.includes(t))) {
            detectedIntent = f;
            break;
        }
    }

    if (detectedIntent) {
        aiStatus.textContent = '💡 פענוח כוונות חכם לילדים (Kids Intent AI Engine)';
        
        // If there is a recipe, show it!
        const rMatch = craftingRecipes.find(r => r.keywords.some(k => detectedIntent.matchId.includes(k) || (detectedIntent.recipe && detectedIntent.recipe.includes(k))));
        
        if (rMatch) {
            aiResponseContent.innerHTML = `
                <div style="background: rgba(91, 135, 49, 0.25); border: 2px solid #5b8731; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
                    🎯 <strong>הבנתי בדיוק למה אתה מתכוון!</strong><br>
                    חיפשת משהו בסגנון <em>"${query}"</em>? הכוונה היא ל-<strong>${detectedIntent.nameHe}</strong>! הנה איך מכינים אותו:
                </div>
                ${renderVisualCraftingRecipe(rMatch)}
            `;
            return;
        } else {
            aiResponseContent.innerHTML = `
                <div style="background: rgba(91, 135, 49, 0.25); border: 2px solid #5b8731; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
                    🎯 <strong>הבנתי בדיוק למה אתה מתכוון!</strong><br>
                    חיפשת <em>"${query}"</em>? הכוונה שלך היא ל-<strong>${detectedIntent.nameHe}</strong>! 🌟<br>
                    סיננתי עבורך את הפריט בתיבה למטה!
                </div>
            `;
            searchQuery = detectedIntent.matchId;
            renderItems();
            return;
        }
    }

    // 5. Fallback: Intent Search
    aiStatus.textContent = '🔍 בוצע ניתוח כוונות חכם וסינון הפריטים בתיבה';
    aiResponseContent.innerHTML = `
        סיננתי עבורך את כל הפריטים המתאימים ביותר לחיפוש <strong>"${query}"</strong>! 🎯<br>
        הסתכל בתיבה למטה כדי לראות אותם, או לחץ על <strong>"🏠 דף הבית"</strong> למעלה כדי לחזור לכל הפריטים!
    `;
}

// Event Listeners for Search & AI
const homeBtn = document.getElementById('home-btn');
const searchInput = document.getElementById('search-input');
const aiBtn = document.getElementById('ai-btn');
const clearSearchBtn = document.getElementById('clear-search-btn');
const closeAiBox = document.getElementById('close-ai-box');

function resetToHome() {
    searchQuery = '';
    currentCategory = 'all';
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
    if (document.getElementById('ai-response-box')) {
        document.getElementById('ai-response-box').classList.add('hidden');
    }
    const catBtns = document.querySelectorAll('.cat-btn');
    catBtns.forEach(b => {
        b.classList.remove('active');
        if (b.getAttribute('data-cat') === 'all') b.classList.add('active');
    });
    renderItems();
}

if (homeBtn) {
    homeBtn.addEventListener('click', resetToHome);
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (clearSearchBtn) {
            if (searchQuery.length > 0) {
                clearSearchBtn.classList.remove('hidden');
            } else {
                clearSearchBtn.classList.add('hidden');
            }
        }
        renderItems();
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            // Search is already live on input. Just blur to close mobile keyboard.
            searchInput.blur();
        }
    });
}

if (aiBtn) {
    aiBtn.addEventListener('click', () => {
        handleAiQuery(searchInput.value);
    });
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        renderItems();
    });
}

const toggleAiBox = document.getElementById('toggle-ai-box');
const aiHeaderToggle = document.getElementById('ai-header-toggle');
const aiResponseBox = document.getElementById('ai-response-box');

function toggleAiBoxState() {
    if (!aiResponseBox) return;
    const isCollapsed = aiResponseBox.classList.toggle('collapsed');
    if (toggleAiBox) {
        toggleAiBox.textContent = isCollapsed ? '▼' : '▲';
        toggleAiBox.title = isCollapsed ? 'הרחב' : 'צמצם';
    }
}

if (toggleAiBox) {
    toggleAiBox.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleAiBoxState();
    });
}

if (aiHeaderToggle) {
    aiHeaderToggle.addEventListener('click', toggleAiBoxState);
}

function showTooltip(e, item) {
    ttEn.textContent = item.en;
    ttHe.textContent = item.he;
    ttDesc.textContent = item.desc;
    tooltip.classList.remove('hidden');
    moveTooltip(e);
}

function moveTooltip(e) {
    const x = e.pageX + 15;
    const y = e.pageY + 15;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function hideTooltip() {
    tooltip.classList.add('hidden');
}

const catBtns = document.querySelectorAll('.cat-btn');
catBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-cat');
        renderItems();
    });
});

// Initial Render
renderItems();


