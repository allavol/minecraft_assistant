---
name: mc-fetch-images
description: Scans the inventory data for missing or guessed images and uses web search to find the exact Minecraft Wiki image URLs.
---

# Minecraft Image Fetcher (mc-fetch-images)

מיומנות זו נועדה לתקן תמונות שבורות או חסרות באתר המיינקראפט שלנו.

## אופן הפעולה (Workflow)

1. **סריקה:** פתח את הקובץ `c:\Yona\minecraft\script.js`.
2. **איתור פריטים לתיקון:** חפש כ-5 פריטים שהתמונה שלהם נראית כמו ניחוש (למשל סתם `Name.png` במקום השם הארוך של הויקי) או שהיא חסרה לגמרי.
3. **חיפוש ברשת:** עבור כל פריט, השתמש בכלי `search_web` כדי לחפש את הפריט עם המילה "image" והדומיין `minecraft.wiki` (למשל: `query: "Oak Sapling image site:minecraft.wiki"`).
4. **חילוץ הכתובת:** מצא בתוצאות החיפוש או בקוד העמוד את הכתובת האמיתית של קובץ התמונה (תבנית רגילה תהיה `https://minecraft.wiki/images/Name_With_Underscores.png`).
5. **עדכון הנתונים:** השתמש בכלי העריכה (`multi_replace_file_content`) כדי לעדכן את השדה `img` של הפריטים ב-`script.js`.
6. **דיווח:** הודע למשתמש אלו תמונות תוקנו.
