import EthCrypto from "eth-crypto";


const { SIGNERPRIVATE } = process.env;

  export const signApi = async (random) => {
    const privateKey = SIGNERPRIVATE;
    const messageHash = EthCrypto.hash.keccak256(`${random}`);
    const signature = EthCrypto.sign(privateKey, messageHash)
  return signature;
  }