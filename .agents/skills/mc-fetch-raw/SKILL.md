---
name: mc-fetch-raw
description: Fetches a raw list of hundreds of Minecraft items from an open-source API and saves it locally.
---

# Minecraft Raw Item Fetcher (mc-fetch-raw)

מיומנות זו אחראית אך ורק על שלב ה-**Fetch** מתוך הפייפליין שלנו.
תפקידה הוא למשוך נתונים טכניים גולמיים של כל הפריטים במיינקראפט מהרשת ולשמור אותם מקומית כהכנה לשלב הבא.

## Workflow

1. השתמש בכלי `read_url_content` עם הכתובת הבאה כדי להוריד את רשימת הפריטים:
   `https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.20/items.json`
2. שמור את התוכן שקיבלת (JSON) לתוך קובץ מקומי באמצעות הכלי `write_to_file`. קרא לקובץ בשם:
   `c:\Yona\minecraft\raw_items.json`
3. ודא שהקובץ נשמר בהצלחה.
4. דווח למשתמש (לי) שהורדת הנתונים הגולמיים הושלמה בהצלחה, והצע להפעיל את הסקיל השני (`mc-adapt-kids`) כדי להתחיל לתרגם אותם לילדים.
