import Web3 from 'web3';

// Import the ethers library
import { ethers } from "ethers";


// 
// const provider = ethers.getDefaultProvider("kovan", {
//     etherscan: "Q2HXIWPVIGUTGAH5FHU7CDY4UQA1ND25PP",
//     infura: "bc7ae83f636c4d5fb7d227283cc2918c",
//     alchemy: "k2VwGnvtKNZmjscjokIic_sO8d6YDUrU",
//     pocket: "6124eb55f6d1650033d7dbbf"
// });

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")


export const getEthersProvider = async (network) => {
    let provider;
    switch(network) {
        case "matic-testnet":
           provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/16730a405a254c81b8721025f50b815f")
            console.log(provider)
           break;
        default:
         provider = ethers.getDefaultProvider(network, {
            etherscan: "Q2HXIWPVIGUTGAH5FHU7CDY4UQA1ND25PP",
            infura: "bc7ae83f636c4d5fb7d227283cc2918c",
            alchemy: "k2VwGnvtKNZmjscjokIic_sO8d6YDUrU",
            pocket: "6124eb55f6d1650033d7dbbf"
        });
        }
    return provider;
}

export const getWeb3Instance = async (network) => {
     const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-kovan.alchemyapi.io/v2/k2VwGnvtKNZmjscjokIic_sO8d6YDUrU'));
    return web3;
}

export const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-kovan.alchemyapi.io/v2/k2VwGnvtKNZmjscjokIic_sO8d6YDUrU'));


// const ALCHEMY_URL = "https://polygon-mumbai.g.alchemy.com/v2/ymPcS8qsIDYJf0mWlPPE715k07PEI-F9";
// const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);

export default provider;