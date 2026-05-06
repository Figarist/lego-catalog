const fs = require('fs');
const path = require('path');

/**
 * localize_db.js
 * 
 * This script reads the localized LEGO data, iterates through every model,
 * and adds a 'pl' key to the title (t) and category (c) objects,
 * using the Ukrainian (uk) string as a placeholder.
 */

const inputFile = path.join(__dirname, 'data_localized.js');
const outputFile = path.join(__dirname, 'data_pl_ready.js');

function processData() {
    try {
        if (!fs.existsSync(inputFile)) {
            console.error(`Error: ${inputFile} not found.`);
            return;
        }

        let content = fs.readFileSync(inputFile, 'utf8');
        
        // Find the LEGO_DATA array
        const startMatch = content.match(/const\s+LEGO_DATA\s*=\s*\[/);
        if (!startMatch) {
            console.error('Error: Could not find LEGO_DATA array start.');
            return;
        }

        const startIdx = content.indexOf('[', startMatch.index);
        const endIdx = content.lastIndexOf(']');

        if (startIdx === -1 || endIdx === -1) {
            console.error('Error: Could not find array boundaries.');
            return;
        }

        const arrayStr = content.substring(startIdx, endIdx + 1);
        
        // Parsing as JS object using Function constructor (safer for JS files than JSON.parse)
        let data;
        try {
            data = new Function(`return ${arrayStr}`)();
        } catch (e) {
            console.error('Error parsing array string:', e.message);
            return;
        }

        console.log(`Processing ${data.length} models...`);

        data.forEach(item => {
            // Update Title (t)
            if (item.t && typeof item.t === 'object') {
                item.t.pl = item.t.uk || '';
            }

            // Update Category (c) - support both string (key) and object
            if (item.c && typeof item.c === 'object') {
                item.c.pl = item.c.uk || '';
            }
        });

        // Generate new file content
        const newArrayStr = JSON.stringify(data, null, 1);
        const finalContent = `// Localized LEGO Data (Polish Ready)\nconst LEGO_DATA = ${newArrayStr};`;

        fs.writeFileSync(outputFile, finalContent);
        console.log(`Success! Generated: ${outputFile}`);
        console.log('You can now rename this to data_localized.js or update your script reference.');

    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

processData();
