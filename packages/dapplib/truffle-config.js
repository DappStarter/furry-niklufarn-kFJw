require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture street cruise pumpkin modify grid argue oppose gesture'; 
let testAccounts = [
"0x5525abc9ed44ca0579cd7ef1bf4ef4cde899de33ff84ec7d8b60e5f33eeddf7a",
"0xfe8e23e02f23987edef80e6ed65cc9803ad3c22160992936b092dd829090af6d",
"0xbfdc5136bde92e2928d67543ca809cea539fd7e31daac0d13d28c26efb8f5923",
"0x9404720c3df3f972d7a1a863bb5425b86371461ea636340a361f72b7576370ac",
"0xe11045dc2ce4a0f3a46f50be3e7dfbf43553a5cc2a9704236932f992d2323838",
"0x4e3c4c6cd3f44e40f23b264376a64a4091e72295b211fc5a3fe2421177defaea",
"0xf5fe650c936fa68e07bcefc3cbc1556e1fdec923a930284df0476cde87d32568",
"0x5de374f575d634d70872c9c00453b20de72c8c3da87cdb043e5945737e764b3e",
"0xc387c38b3f28417606acc6c42245b2f3c12fda9ec290439688096f86e2c88e03",
"0x232e539deec0b697f9b4cfdc286f88b5e0ddaa76f5f7b9ce6dc33bd6c75b00b1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

