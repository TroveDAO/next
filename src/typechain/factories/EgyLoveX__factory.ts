/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EgyLoveX, EgyLoveXInterface } from "../EgyLoveX";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ammount",
        type: "uint256",
      },
    ],
    name: "exchangeBurn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061011b806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063be180f1214602d575b600080fd5b603c6038366004606b565b6050565b6040516047919060a2565b60405180910390f35b60015b92915050565b803560538160cc565b803560538160e0565b60008060408385031215607f57607f600080fd5b6000608985856059565b92505060206098858286016062565b9150509250929050565b8115158152602081016053565b600073ffffffffffffffffffffffffffffffffffffffff82166053565b60d38160af565b811460dd57600080fd5b50565b8060d356fea2646970667358221220b65fd37d48bf26defabe4d457feefb9b2f2f166b5266caca4d97c24c38e382de64736f6c63430008070033";

type EgyLoveXConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EgyLoveXConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EgyLoveX__factory extends ContractFactory {
  constructor(...args: EgyLoveXConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EgyLoveX> {
    return super.deploy(overrides || {}) as Promise<EgyLoveX>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EgyLoveX {
    return super.attach(address) as EgyLoveX;
  }
  connect(signer: Signer): EgyLoveX__factory {
    return super.connect(signer) as EgyLoveX__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EgyLoveXInterface {
    return new utils.Interface(_abi) as EgyLoveXInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EgyLoveX {
    return new Contract(address, _abi, signerOrProvider) as EgyLoveX;
  }
}
