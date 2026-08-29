---
name: mc-item-scraper
description: Scans Reddit and YouTube for new trending Minecraft items and adds them to the local inventory website.
---

# סריקת פריטי מיינקראפט חדשים (Minecraft Item Scraper)

מיומנות זו נועדה לעזור לסוכן לחפש באופן אוטומטי פריטים חדשים ששחקני מיינקראפט מדברים עליהם, ולהוסיף אותם לאתר האינוונטורי שלנו.

## אופן הפעולה (Workflow)

1. **בדיקת מלאי קיים:** קרא את הקובץ `c:\Yona\minecraft\script.js` ובדוק אילו פריטים כבר קיימים אצלנו, כדי שלא נוסיף כפילויות.
2. **חיפוש ברשת (Search):** השתמש בכלי `search_web` כדי לחפש ברדיט וביוטיוב (לדוגמה: "Minecraft new items Reddit", "Minecraft trending items YouTube"). חפש פריטים שעדיין לא קיימים במאגר שלנו.
3. **ניתוח (Analyze):** בחר 1-2 פריטים פופולריים חדשים לחלוטין (שלא מופיעים ברשימה שבדקת).
3. **הכנת הנתונים:** עבור כל פריט, תרגם את שמו לעברית, כתוב תיאור קצר, חמוד וברור שמתאים לילד בן 8 (כולל אימוג'י!), ומצא כתובת URL לתמונה של הפריט (לרוב מ-`https://minecraft.wiki/images/...`).
4. **עדכון הקוד:** פתח את הקובץ `c:\Yona\minecraft\script.js` והוסף את הפריטים החדשים לתוך מערך `inventoryData` תחת הקטגוריה המתאימה (weapons, tools, food, building, books). השתמש בכלי `replace_file_content` או `multi_replace_file_content`.
5. **דיווח:** הצג דיווח מסכם למשתמש אלו פריטים הוספו בהצלחה.
