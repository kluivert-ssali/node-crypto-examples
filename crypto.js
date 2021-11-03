const { createHash } = require('crypto');

// create astring hash
function hash(input) {
    return createHash('sha256').update(input).digest('hex');

}

// compare two hashed passwords

let password = 'kingslayer is the king of code';
const hash1 = hash(password);
console.log(hash1);
