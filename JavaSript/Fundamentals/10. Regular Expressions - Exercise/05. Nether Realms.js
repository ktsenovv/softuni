function netherRealms(input) {
    let demonsList = input.split(/[, ]+/g);
    let demons = {};

    let healthPattern = /[^0-9.\/+*-]/g;
    let sumPattern = /[+-]?\d+\.?\d*/g;
    let damagePattern = /\*|\//g;
 
    for (let demon of demonsList) {
        let health = 0;
        let damage = 0;

        if (demon.match(healthPattern) != null) {
            for (let char of demon.match(healthPattern)) {
                health += char.charCodeAt(0);
            }
        }
 
        let digits = demon.match(sumPattern);
 
        if (digits != null) {
            for (let digit of digits) {
                damage += Number(digit);
            }
        }
 
        let subtractOrMultiply = demon.match(damagePattern);
 
        if (subtractOrMultiply != null) {
            for (let operand of subtractOrMultiply) {
                if (operand == '*') {
                    damage *= 2;
                } else {
                    damage /= 2;
                }
            }
        }
 
        demons[demon] = {};
        demons[demon]['health'] = health;
        demons[demon]['damage'] = damage;
    }
 
    let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, valuesObj] of sorted) {
        console.log(`${name} - ${valuesObj['health']} health, ${valuesObj['damage'].toFixed(2)} damage`);
    }
}

netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('');
netherRealms('M3ph1st0**, Azazel');
console.log('');
netherRealms('Gos/ho');