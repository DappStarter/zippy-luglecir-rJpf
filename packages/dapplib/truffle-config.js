require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture strategy deny oval million gloom entire metal gasp'; 
let testAccounts = [
"0x3443ed5be5c0411b53758ffd1413771663fe5fef6fa03161486f0f9862d13a78",
"0x52982fd74b866efcfe6636a54d28189875f6f77fd063da04e6197e261eb46610",
"0xda784b6f9c3fd5e0dc81e660f98320952a6e87e6bbf123228d59e86ede274ad8",
"0xddb7022c77311c53378ddddc15f8b46fe2a900a4c1b89e4122687305b2f652ee",
"0x25381282d863eb3cc55f4b35144f959b3300815a3aee018a7c1fd4dcf61d98fb",
"0x476e6683de9dde6e35bb69a43e2c73f0245d16999e0830033354bef3e7fed400",
"0x4e32afb037c7d2cac35885dea29f8355064ecbe6dd16a7e1a177c573f9493cd3",
"0x20950cbcf8d4f1191482a9f1b2e6d841742f1b33e2a932d7728b2b83e8160814",
"0xfeca0edfd889c0aeb0af24bb1c914b75236232606d75547092f792c669cea33f",
"0xb9ddaef0a8752bf927a21a396a287c76b704f1828b5cdd0ab11c6ad73a3fdd34"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


