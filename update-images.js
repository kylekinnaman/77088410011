const fs = require('fs');
const path = require('path');

const imageDirs = {
    hero: 'images/hero',
    avatar: 'images/avatar'
};

const manifest = {};

for (const key in imageDirs) {
    const dir = imageDirs[key];
    try {
        const files = fs.readdirSync(dir);
        manifest[key] = files.map(file => path.join(dir, file));
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error);
        manifest[key] = [];
    }
}

fs.writeFileSync('image-manifest.json', JSON.stringify(manifest, null, 2));

console.log('Image manifest created successfully!');
