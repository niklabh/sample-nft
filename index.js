const fs = require('fs');

// Zac Awakened 1%
// Eta Awakened 1%
// Zac 4%
// Eta 4%
// Experiment “A” Genotype A/B Silent mutation  5 %
// Cetus 10 %
// Saurian 10 %
// Drakeling C 10 %
// BoosterPack 55%



// boosterPack.jpg
// cetus.jpg
// drakeling.jpg
// etaAwakened.jpg
// etaNormal.jpg
// 'Experiment “A” Genotype.jpg'
// saurian.jpg
// zacAwakened.jpg
// zacNormal.jpg

const totalNFTs = 10000;

const imageUri = 'https://raw.githubusercontent.com/niklabh/sample-nft/main/image/';

const TEMPLATE = [
    { name: "Awakened Zac Lightblade", percentage: 1, image: "zacAwakened.jpg", cardNo: 248, rank: "SSS", description: "A Skylab Scout soldier of the Elite Division. Scouts are military personnel trained in surveillance and intelligence gathering, usually operating ahead of the main force to assess enemy positions and movements. His origins are unknown, but he swore allegiance to Skylab and the protection of the people at a young age, climbing the career ladder to the elite division at the age of 18. He has now served in Skylab's Reconnaissance Division for 23 years. This is the awakened form of Zac, the powers of nature and elements flow through him. – This is a unique Phygital Nft. Skylab Phygital Nfts will be shipped to your home, please see Official Channels for instructions on how to claim your physical counterpart" },
    { name: "Eta Awakened", percentage: 1, image: "etaAwakened.jpg", cardNo: 249, rank: "SSS", description: "Eta is an 18 year old boy from a ancient village tribe on the outskirts far away from Sykalb city, he is an outgoing and friendly person and is much loved by those around him and his mother. The Symbol and guardian of the tribe is the Raven, he provided the Tribe with an ancient magical power ages ago which lets the tribe harmonise with nature and manipulate its energies. But to receive these powers you have to pass the temple trials at age 18 and receive the blessing of the raven. This is a unique Phygital Nft. Skylab Phygital Nfts will be shipped to your home, please see Official Channels for instructions on how to claim your physical counterpart." },
    { name: "Zac Lightblade", percentage: 4, image: "zacNormal.jpg", cardNo: 246, rank: "S", description: "A Skylab Scout soldier of the Elite Division. Scouts are military personnel trained in surveillance and intelligence gathering, usually operating ahead of the main force to assess enemy positions and movements. His origins are unknown, but he swore allegiance to Skylab and the protection of the people at a young age, climbing the career ladder to the elite division at the age of 18. He has now served in Skylab's Reconnaissance Division for 23 years.This Card may entitle to you for future benefits and rewards." },
    { name: "Eta Ravensong", percentage: 4, image: "etaNormal.jpg", cardNo: 247, rank: "S", description: "Eta is an 18 year old boy from a ancient village tribe on the outskirts far away from Sykalb city, he is an outgoing and friendly person and is much loved by those around him and his mother. The Symbol and guardian of the tribe is the Raven, he provided the Tribe with an ancient magical power ages ago which lets the tribe harmonise with nature and manipulate its energies. But to receive these powers you have to pass the temple trials at age 18 and receive the blessing of the raven. This Card may entitle to you for future benefits and rewards." },
    { name: "Experiment \"A\" Genotype", percentage: 5, image: "ExperimentAGenotype.jpg", cardNo: 179, rank: "S", description: "A creature with unknown origins, it is a result of constant testing and experimenting on Genetic sequences in the Laboratories of Sector 65. Its Handlike wings shifts the bodyweight making it hard for it to move, as well impossible to fly. Big claws attached to each finger and the muscular and fast movement making it a highly deadly encounter. Since the incident in sector 65 this creature has since been missing, or nobody survived to report back. This Card may entitle to you for future benefits and rewards." },
    { name: "Cetus", percentage: 10, image: "cetus.jpg", cardNo: 71, rank: "B", description: "Cetus have a tough, resilient skin, typically a muted grey, textured with scale like structures that resemble teeth. Their bodies are characterised by a powerful, uneven tail, often curved upwards, and distinctively pointed fins. A Cetus snout is particularly sharp, jutting forward to overshadow a crescent-shaped mouth with razor-sharp, triangular teeth, adding to their formidable, fantastical appearance. Living mostly in the coastal regions close to Skylab city makes them a common encounter. This Card may entitle to you for future benefits and rewards." },
    { name: "Saurian", percentage: 10, image: "saurian.jpg", cardNo: 15, rank: "A", description: "Saurian are small reptiloid creatures that live in the vast areas of the outskirts of Skylab City. Equipped with long claws and fast runners, they appear dangerous, but their small size makes them less dangerous than other creatures in the wilds of the Outskirts. Due to their intelligent nature, they adapted and began to prey on the livestock of the surrounding farmers, in return making them an easy target and open to hunting. This Card may entitle to you for future benefits and rewards." },
    { name: "Drakeling C", percentage: 10, image: "drakeling.jpg", cardNo: 65, rank: "A", description: "Drakelings are reptiloid creatures found in the mountainous regions on the outskirts. They get their name from the fact that they look like baby dragons. Because of their appearance and the fact that they were mistaken for drakes, they were hunted by poachers and became a delicacy in distant regions. This Card may entitle to you for future benefits and rewards." },
    { name: "BoosterPack", percentage: 55, image: "boosterPack.jpg", cardNo: 64, rank: "O", description: "Astar zkEVM, Yoki Campaign Booster Pack! Holding and opening one of these packs in the future will entitle you to cards from this booster pack series.  Get the chance to draw Legendary and Awakened cards! This booster pack is capped and limited to the Yoki Campaign of Astar! Full opening of this booster pack will take place at a later date, check our social media for details and announcements." }
];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function main() {
    const NFTS = [];

    for (let i = 0; i < TEMPLATE.length; i++) {
        const nft = TEMPLATE[i];
        const count = (totalNFTs * nft.percentage) / 100;

        for (let j = 0; j < count; j++) {
            NFTS.push({
                name: `${nft.name} #${i}`,
                description: nft.description,
                image: `${imageUri}${nft.image}`,
                attributes: [
                    { trait_type: "rank", value: nft.rank },
                    { trait_type: "card_number", value: nft.cardNo }
                ]
            });
        }
    }

    shuffle(NFTS);

    for (let i = 0; i < NFTS.length; i++) {
        fs.writeFileSync(`${i}`, JSON.stringify(NFTS[i]));
    }
}

main();