const fs = require('fs');
const https = require('https');
const path = require('path');

const URL = 'https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.20/items.json';
const OUTPUT_FILE = path.join(__dirname, '..', 'raw_items.json');

console.log('Fetching raw Minecraft items from:', URL);

https.get(URL, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        try {
            const items = JSON.parse(data);
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(items, null, 2));
            console.log(`Success! Downloaded ${items.length} items and saved to ${OUTPUT_FILE}`);
        } catch (e) {
            console.error('Error parsing JSON:', e.message);
        }
    });
}).on('error', (err) => {
    console.error('Error fetching data:', err.message);
});
