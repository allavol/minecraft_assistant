---
name: mc-adapt-kids
description: Reads raw Minecraft items, selects 10 missing items, adapts them with fun Hebrew descriptions for an 8-year-old, and adds them to the website.
---

# Minecraft Kids Adapter (mc-adapt-kids)

מיומנות זו אחראית על שלב ה-**Adapt** מתוך הפייפליין שלנו.
תפקידה הוא להיות יצירתית, לקחת נתונים משעממים ולתרגם אותם לתוכן מרתק עבור ילד בן 8.

## Workflow

1. **קריאת הנתונים:** פתח וקרא את קובץ ה-`c:\Yona\minecraft\raw_items.json`.
2. **סינון:** בדוק איזה פריטים כבר קיימים בקובץ האתר שלנו (`c:\Yona\minecraft\script.js`).
3. **בחירה (Batching):** בחר בדיוק **10 פריטים חדשים** מתוך הרשימה הגולמית (שלא קיימים עדיין באתר).
4. **יצירתיות ועיבוד:** עבור כל אחד מ-10 הפריטים, צור את הנתונים הבאים בראשך:
   - `id`: ה-name מה-JSON.
   - `cat`: חלק את הפריט לאחת הקטגוריות הקיימות (weapons, tools, building, nature, food, books). אם לאף אחד מהפריטים אין קטגוריה מתאימה, עצור את העבודה והתייעץ עם המשתמש כדי לפתוח קטגוריה חדשה. אל תמציא קטגוריות על דעת עצמך.
   - `en`: ה-displayName באנגלית.
   - `he`: תרגום מדויק לעברית.
   - `desc`: תיאור קצר, מצחיק ומגניב שילד בן 8 יאהב. **חובה** לכלול אימוג'י רלוונטי.
   - `img`: כתובת תמונה מ-Minecraft Wiki (בד"כ תבנית כזו: `https://minecraft.wiki/images/Name_With_Underscores.png`).
5. **הזרקה לאתר:** השתמש בכלי `replace_file_content` או `multi_replace_file_content` כדי להוסיף את 10 הפריטים החדשים לתוך מערך `inventoryData` ב-`c:\Yona\minecraft\script.js`.
6. **סיכום:** כתוב למשתמש הודעה שמחה על כך ש-10 פריטים חדשים נוספו לאתר, ופרט אלו פריטים נוספו (רק השמות שלהם בעברית).
