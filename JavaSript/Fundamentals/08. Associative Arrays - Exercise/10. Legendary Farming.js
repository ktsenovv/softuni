function legendaryFarming(input) {
    let items = input.split(' ');
    let materials = {};
    
    const legendaryItems = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath',
    };
    
    let result = '';

    for (let i = 0; i < items.length; i += 2) {
        let quantity = Number(items[i]);
        let material = items[i + 1].toLowerCase();

        if (!materials.hasOwnProperty(material)) {
            materials[material] = 0;
        }

        materials[material] += quantity;

        if (materials[material] >= 250 && material in legendaryItems) {
            result += `${legendaryItems[material]} obtained!\n`;
            materials[material] -= 250;
            break;
        }
    }

    for (let item in legendaryItems) {
        if (!materials.hasOwnProperty(item)) {
            materials[item] = 0;
        }
    }

    let legendaryItemsCollected = Object.entries(materials)
        .filter((item) => hasLegendaryItems(legendaryItems, item[0]))
        .sort((a, b) => sortDescending(a[1], b[1]) || sortAlphabetically(a[0], b[0]))
        .map(formatText)
        .join('\n');

    let junkItemsCollected = Object.entries(materials)
        .filter((item) => !hasLegendaryItems(legendaryItems, item[0]))
        .sort((a, b) => sortAlphabetically(a[0], b[0]))
        .map(formatText)
        .join('\n');
    result += legendaryItemsCollected + '\n' + junkItemsCollected;

    console.log(result);

    function hasLegendaryItems(items, item) {
        return items.hasOwnProperty(item);
    }
 
    function formatText(textArr) {
        return `${textArr[0]}: ${textArr[1]}`;
    }
 
    function sortAlphabetically(a, b) {
        return a.localeCompare(b);
    }
 
    function sortDescending(a, b) {
        return b - a;
    }
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');