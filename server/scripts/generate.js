const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const generateKeyPairs = (num) => {
    const keyPairs = []
    for (let i = 0; i < num; i++) {
        const privateKey = secp.utils.randomPrivateKey();
        const publicKey = secp.getPublicKey(privateKey);
        keyPairs.push([toHex(publicKey), toHex(privateKey)]);
    }
    return keyPairs;
};

module.exports = {generateKeyPairs};
