const fs = require('fs');
const { createCanvas } = require('canvas');

function selectTrait() {
    const randomNum = Math.random() * 100;
    if (randomNum < 1) return 'Awakened Zac';
    if (randomNum < 2) return 'Awakened Eta';
    if (randomNum < 6) return 'Zac';
    if (randomNum < 10) return 'Eta';
    if (randomNum < 25) return 'Monster';
    if (randomNum < 60) return 'Poster';
    return 'Coin';
}

function generateRandomImage() {
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    ctx.fillRect(0, 0, 200, 200);
    return canvas.toDataURL('image/png');
}

function main() {
    for (let i = 0; i < 100; i++) {
        const imageDataUri = generateRandomImage();

        const metadata = {
            name: `NFT #${i}`,
            description: "Randomly generated NFT",
            image: imageDataUri,
            attributes: [{ trait_type: "Trait", value: selectTrait() }]
        };

        const metadataName = `metadata-${i}.json`;
        fs.writeFileSync(metadataName, JSON.stringify(metadata));
    }
}

main();