/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EnergyToken, EnergyTokenInterface } from "../EnergyToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "defaultOperators",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "AuthorizedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "RevokedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Sent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "authorizeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    name: "awardEnergy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "granularity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "isOperatorFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "revokeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_energyExchanger",
        type: "address",
      },
    ],
    name: "setEnergyExchanger",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027513803806200275183398101604081905262000034916200046f565b6040805180820182526006815265456e6572677960d01b60208083019182528351808501909452600384526245475960e81b9084015281519192918491620000809160029190620002b9565b50815162000096906003906020850190620002b9565b508051620000ac90600490602084019062000348565b5060005b81518110156200011c57600160056000848481518110620000d557620000d5620005f6565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055806200011381620005ac565b915050620000b0565b506040516329965a1d60e01b8152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d906200017a9030907fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce2177054908290600401620004c7565b600060405180830381600087803b1580156200019557600080fd5b505af1158015620001aa573d6000803e3d6000fd5b50506040516329965a1d60e01b8152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d91506200020b9030907faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a908290600401620004c7565b600060405180830381600087803b1580156200022657600080fd5b505af11580156200023b573d6000803e3d6000fd5b505050505050506200025c620002566200026360201b60201c565b62000267565b506200063c565b3390565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620002c7906200054c565b90600052602060002090601f016020900481019282620002eb576000855562000336565b82601f106200030657805160ff191683800117855562000336565b8280016001018555821562000336579182015b828111156200033657825182559160200191906001019062000319565b5062000344929150620003a0565b5090565b82805482825590600052602060002090810192821562000336579160200282015b828111156200033657825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000369565b5b80821115620003445760008155600101620003a1565b6000620003ce620003c88462000514565b620004f5565b90508083825260208201905082856020860282011115620003f257620003f2600080fd5b60005b858110156200042257816200040b88826200042c565b8452506020928301929190910190600101620003f5565b5050509392505050565b8051620004398162000622565b92915050565b600082601f830112620004555762000455600080fd5b815162000467848260208601620003b7565b949350505050565b600060208284031215620004865762000486600080fd5b81516001600160401b03811115620004a157620004a1600080fd5b62000467848285016200043f565b620004ba816200053a565b82525050565b80620004ba565b60608101620004d78286620004af565b620004e66020830185620004c0565b620004676040830184620004af565b60006200050160405190565b90506200050f82826200057d565b919050565b60006001600160401b038211156200053057620005306200060c565b5060209081020190565b60006001600160a01b03821662000439565b6002810460018216806200056157607f821691505b60208210811415620005775762000577620005e0565b50919050565b601f19601f83011681018181106001600160401b0382111715620005a557620005a56200060c565b6040525050565b6000600019821415620005c357620005c3620005ca565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6200062d816200053a565b81146200063957600080fd5b50565b612105806200064c6000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80638da5cb5b116100e3578063dd62ed3e1161008c578063fc673c4f11610066578063fc673c4f14610344578063fd70269814610357578063fe9d93031461036a57600080fd5b8063dd62ed3e146102e5578063f2fde38b1461031e578063fad8b32a1461033157600080fd5b80639bd9bbc6116100bd5780639bd9bbc6146102ac578063a9059cbb146102bf578063d95b6371146102d257600080fd5b80638da5cb5b14610278578063959b8c3f1461029157806395d89b41146102a457600080fd5b8063313ce5671161014557806362ad1b831161011f57806362ad1b831461023257806370a0823114610247578063715018a61461027057600080fd5b8063313ce56714610209578063556f0dc714610218578063593fae8f1461021f57600080fd5b8063095ea7b311610176578063095ea7b3146101c557806318160ddd146101e557806323b872dd146101f657600080fd5b806306e485381461019257806306fdde03146101b0575b600080fd5b61019a61037d565b6040516101a79190611d40565b60405180910390f35b6101b86103df565b6040516101a79190611d5f565b6101d86101d336600461151d565b610468565b6040516101a79190611d51565b6001545b6040516101a79190611f07565b6101d861020436600461141f565b610482565b60126040516101a79190611f52565b60016101e9565b6101e961022d36600461151d565b6105cc565b61024561024036600461146f565b610629565b005b6101e96102553660046113a0565b6001600160a01b031660009081526020819052604090205490565b610245610665565b6009546001600160a01b03166040516101a79190611cb0565b61024561029f3660046113a0565b61069b565b6101b861077d565b6102456102ba366004611550565b61078c565b6101d86102cd36600461151d565b6107af565b6101d86102e03660046113e2565b610862565b6101e96102f33660046113e2565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b61024561032c3660046113a0565b610903565b61024561033f3660046113a0565b61095f565b6102456103523660046115b1565b610a41565b6102456103653660046113a0565b610a79565b61024561037836600461164b565b610add565b606060048054806020026020016040519081016040528092919081815260200182805480156103d557602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116103b7575b5050505050905090565b6060600280546103ee9061201f565b80601f016020809104026020016040519081016040528092919081815260200182805461041a9061201f565b80156103d55780601f1061043c576101008083540402835291602001916103d5565b820191906000526020600020905b81548152906001019060200180831161044a57509395945050505050565b600033610476818585610afc565b60019150505b92915050565b60006001600160a01b0383166104b35760405162461bcd60e51b81526004016104aa90611e87565b60405180910390fd5b6001600160a01b0384166104d95760405162461bcd60e51b81526004016104aa90611eb7565b600033905061050a818686866040518060200160405280600081525060405180602001604052806000815250610bb0565b610536818686866040518060200160405280600081525060405180602001604052806000815250610d11565b6001600160a01b038086166000908152600860209081526040808320938516835292905220548381101561057c5760405162461bcd60e51b81526004016104aa90611ea7565b610590868361058b8785611fbf565b610afc565b6105be8287878760405180602001604052806000815250604051806020016040528060008152506000610e35565b6001925050505b9392505050565b600a546000906001600160a01b031633146105f95760405162461bcd60e51b81526004016104aa90611ee7565b61062383836040518060200160405280600081525060405180602001604052806000815250610fc7565b50919050565b6106333386610862565b61064f5760405162461bcd60e51b81526004016104aa90611e97565b61065e85858585856001610fd5565b5050505050565b6009546001600160a01b0316331461068f5760405162461bcd60e51b81526004016104aa90611df0565b610699600061104d565b565b336001600160a01b03821614156106c45760405162461bcd60e51b81526004016104aa90611dc0565b6001600160a01b03811660009081526005602052604090205460ff1615610715573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff19169055610744565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b6060600380546103ee9061201f565b6107aa33848484604051806020016040528060008152506001610fd5565b505050565b60006001600160a01b0383166107d75760405162461bcd60e51b81526004016104aa90611e87565b6000339050610808818286866040518060200160405280600081525060405180602001604052806000815250610bb0565b610834818286866040518060200160405280600081525060405180602001604052806000815250610d11565b6104768182868660405180602001604052806000815250604051806020016040528060008152506000610e35565b6000816001600160a01b0316836001600160a01b031614806108cd57506001600160a01b03831660009081526005602052604090205460ff1680156108cd57506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b806105c557506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff169392505050565b6009546001600160a01b0316331461092d5760405162461bcd60e51b81526004016104aa90611df0565b6001600160a01b0381166109535760405162461bcd60e51b81526004016104aa90611da0565b61095c8161104d565b50565b6001600160a01b0381163314156109885760405162461bcd60e51b81526004016104aa90611dd0565b6001600160a01b03811660009081526005602052604090205460ff16156109dc573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610a08565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b610a4b3385610862565b610a675760405162461bcd60e51b81526004016104aa90611e97565b610a73848484846110b7565b50505050565b6009546001600160a01b03163314610aa35760405162461bcd60e51b81526004016104aa90611df0565b600a80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b610af8338383604051806020016040528060008152506110b7565b5050565b6001600160a01b038316610b225760405162461bcd60e51b81526004016104aa90611d70565b6001600160a01b038216610b485760405162461bcd60e51b81526004016104aa90611ef7565b6001600160a01b0380841660008181526008602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610ba3908590611f07565b60405180910390a3505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90610c259089907f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89590600401611d25565b60206040518083038186803b158015610c3d57600080fd5b505afa158015610c51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7591906113c1565b90506001600160a01b03811615610d08576040517f75ab97820000000000000000000000000000000000000000000000000000000081526001600160a01b038216906375ab978290610cd5908a908a908a908a908a908a90600401611cbe565b600060405180830381600087803b158015610cef57600080fd5b505af1158015610d03573d6000803e3d6000fd5b505050505b50505050505050565b6001600160a01b03851660009081526020819052604090205483811015610d4a5760405162461bcd60e51b81526004016104aa90611d90565b6001600160a01b03808716600090815260208190526040808220878503905591871681529081208054869290610d81908490611fa7565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987878787604051610dd993929190611f15565b60405180910390a4846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef86604051610e249190611f07565b60405180910390a350505050505050565b6040517faabbb8ca000000000000000000000000000000000000000000000000000000008152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90610eaa9089907fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b90600401611d25565b60206040518083038186803b158015610ec257600080fd5b505afa158015610ed6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efa91906113c1565b90506001600160a01b03811615610f8f576040517e23de290000000000000000000000000000000000000000000000000000000081526001600160a01b038216906223de2990610f58908b908b908b908b908b908b90600401611cbe565b600060405180830381600087803b158015610f7257600080fd5b505af1158015610f86573d6000803e3d6000fd5b50505050610fbd565b8115610fbd576001600160a01b0386163b15610fbd5760405162461bcd60e51b81526004016104aa90611e00565b5050505050505050565b610a738484848460016111ff565b6001600160a01b038616610ffb5760405162461bcd60e51b81526004016104aa90611d80565b6001600160a01b0385166110215760405162461bcd60e51b81526004016104aa90611ed7565b33611030818888888888610bb0565b61103e818888888888610d11565b610d0881888888888888610e35565b600980546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0384166110dd5760405162461bcd60e51b81526004016104aa90611db0565b336110ed81866000878787610bb0565b6001600160a01b038516600090815260208190526040902054848110156111265760405162461bcd60e51b81526004016104aa90611ec7565b6001600160a01b0386166000908152602081905260408120868303905560018054879290611155908490611fbf565b92505081905550856001600160a01b0316826001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a40988787876040516111a393929190611f15565b60405180910390a360006001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040516111ef9190611f07565b60405180910390a3505050505050565b6001600160a01b0385166112255760405162461bcd60e51b81526004016104aa90611de0565b6000339050846001600082825461123c9190611fa7565b90915550506001600160a01b03861660009081526020819052604081208054879290611269908490611fa7565b9091555061127f90508160008888888888610e35565b856001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d8787876040516112c693929190611f15565b60405180910390a3856001600160a01b031660006001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040516111ef9190611f07565b600061132561132084611f7c565b611f60565b90508281526020810184848401111561134057611340600080fd5b61134b848285611fe7565b509392505050565b803561047c816120b5565b805161047c816120b5565b600082601f83011261137d5761137d600080fd5b813561138d848260208601611312565b949350505050565b803561047c816120c9565b6000602082840312156113b5576113b5600080fd5b600061138d8484611353565b6000602082840312156113d6576113d6600080fd5b600061138d848461135e565b600080604083850312156113f8576113f8600080fd5b60006114048585611353565b925050602061141585828601611353565b9150509250929050565b60008060006060848603121561143757611437600080fd5b60006114438686611353565b935050602061145486828701611353565b925050604061146586828701611395565b9150509250925092565b600080600080600060a0868803121561148a5761148a600080fd5b60006114968888611353565b95505060206114a788828901611353565b94505060406114b888828901611395565b935050606086013567ffffffffffffffff8111156114d8576114d8600080fd5b6114e488828901611369565b925050608086013567ffffffffffffffff81111561150457611504600080fd5b61151088828901611369565b9150509295509295909350565b6000806040838503121561153357611533600080fd5b600061153f8585611353565b925050602061141585828601611395565b60008060006060848603121561156857611568600080fd5b60006115748686611353565b935050602061158586828701611395565b925050604084013567ffffffffffffffff8111156115a5576115a5600080fd5b61146586828701611369565b600080600080608085870312156115ca576115ca600080fd5b60006115d68787611353565b94505060206115e787828801611395565b935050604085013567ffffffffffffffff81111561160757611607600080fd5b61161387828801611369565b925050606085013567ffffffffffffffff81111561163357611633600080fd5b61163f87828801611369565b91505092959194509250565b6000806040838503121561166157611661600080fd5b600061166d8585611395565b925050602083013567ffffffffffffffff81111561168d5761168d600080fd5b61141585828601611369565b60006116a583836116ad565b505060200190565b6116b681611fd6565b82525050565b60006116c6825190565b80845260209384019383018060005b838110156116fa5781516116e98882611699565b9750602083019250506001016116d5565b509495945050505050565b8015156116b6565b806116b6565b600061171d825190565b808452602084019350611734818560208601611ff3565b601f01601f19169290920192915050565b602581526000602082017f4552433737373a20617070726f76652066726f6d20746865207a65726f20616481527f6472657373000000000000000000000000000000000000000000000000000000602082015291505b5060400190565b602281526000602082017f4552433737373a2073656e642066726f6d20746865207a65726f20616464726581527f73730000000000000000000000000000000000000000000000000000000000006020820152915061179b565b602781526000602082017f4552433737373a207472616e7366657220616d6f756e7420657863656564732081527f62616c616e6365000000000000000000000000000000000000000000000000006020820152915061179b565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181527f64647265737300000000000000000000000000000000000000000000000000006020820152915061179b565b602281526000602082017f4552433737373a206275726e2066726f6d20746865207a65726f20616464726581527f73730000000000000000000000000000000000000000000000000000000000006020820152915061179b565b602481526000602082017f4552433737373a20617574686f72697a696e672073656c66206173206f70657281527f61746f72000000000000000000000000000000000000000000000000000000006020820152915061179b565b602181526000602082017f4552433737373a207265766f6b696e672073656c66206173206f70657261746f81527f72000000000000000000000000000000000000000000000000000000000000006020820152915061179b565b60208082527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373910190815260005b5060200190565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260006119ec565b602481526000602082017f4552433737373a207472616e7366657220746f20746865207a65726f2061646481527f72657373000000000000000000000000000000000000000000000000000000006020820152915061179b565b602c81526000602082017f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f81527f7220666f7220686f6c64657200000000000000000000000000000000000000006020820152915061179b565b602981526000602082017f4552433737373a207472616e7366657220616d6f756e7420657863656564732081527f616c6c6f77616e636500000000000000000000000000000000000000000000006020820152915061179b565b602681526000602082017f4552433737373a207472616e736665722066726f6d20746865207a65726f206181527f64647265737300000000000000000000000000000000000000000000000000006020820152915061179b565b602381526000602082017f4552433737373a206275726e20616d6f756e7420657863656564732062616c6181527f6e636500000000000000000000000000000000000000000000000000000000006020820152915061179b565b60208082527f4552433737373a2073656e6420746f20746865207a65726f2061646472657373910190815260006119ec565b601181526000602082017f4e6f74207468652065786368616e676572000000000000000000000000000000815291506119ec565b602381526000602082017f4552433737373a20617070726f766520746f20746865207a65726f206164647281527f65737300000000000000000000000000000000000000000000000000000000006020820152915061179b565b60ff81166116b6565b6020810161047c82846116ad565b60c08101611ccc82896116ad565b611cd960208301886116ad565b611ce660408301876116ad565b611cf3606083018661170d565b8181036080830152611d058185611713565b905081810360a0830152611d198184611713565b98975050505050505050565b60408101611d3382856116ad565b6105c5602083018461170d565b602080825281016105c581846116bc565b6020810161047c8284611705565b602080825281016105c58184611713565b6020808252810161047c81611745565b6020808252810161047c816117a2565b6020808252810161047c816117fc565b6020808252810161047c81611856565b6020808252810161047c816118b0565b6020808252810161047c8161190a565b6020808252810161047c81611964565b6020808252810161047c816119be565b6020808252810161047c816119f3565b6020808252810161047c81604d81527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460208201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60408201527f6b656e73526563697069656e7400000000000000000000000000000000000000606082015260800190565b6020808252810161047c81611a25565b6020808252810161047c81611a7f565b6020808252810161047c81611ad9565b6020808252810161047c81611b33565b6020808252810161047c81611b8d565b6020808252810161047c81611be7565b6020808252810161047c81611c19565b6020808252810161047c81611c4d565b6020810161047c828461170d565b60608101611f23828661170d565b8181036020830152611f358185611713565b90508181036040830152611f498184611713565b95945050505050565b6020810161047c8284611ca7565b6000611f6b60405190565b9050611f778282612046565b919050565b600067ffffffffffffffff821115611f9657611f9661209f565b601f19601f83011660200192915050565b60008219821115611fba57611fba612073565b500190565b600082821015611fd157611fd1612073565b500390565b60006001600160a01b03821661047c565b82818337506000910152565b60005b8381101561200e578181015183820152602001611ff6565b83811115610a735750506000910152565b60028104600182168061203357607f821691505b6020821081141561062357610623612089565b601f19601f830116810181811067ffffffffffffffff8211171561206c5761206c61209f565b6040525050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6120be81611fd6565b811461095c57600080fd5b806120be56fea264697066735822122042581b2d84e9659439044f5081c97b6deec92bfeb524e15756f9a3d6c7b869b564736f6c63430008070033";

type EnergyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnergyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnergyToken__factory extends ContractFactory {
  constructor(...args: EnergyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    defaultOperators: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnergyToken> {
    return super.deploy(
      defaultOperators,
      overrides || {}
    ) as Promise<EnergyToken>;
  }
  getDeployTransaction(
    defaultOperators: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(defaultOperators, overrides || {});
  }
  attach(address: string): EnergyToken {
    return super.attach(address) as EnergyToken;
  }
  connect(signer: Signer): EnergyToken__factory {
    return super.connect(signer) as EnergyToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnergyTokenInterface {
    return new utils.Interface(_abi) as EnergyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnergyToken {
    return new Contract(address, _abi, signerOrProvider) as EnergyToken;
  }
}
