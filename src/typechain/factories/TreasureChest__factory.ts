/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TreasureChest, TreasureChestInterface } from "../TreasureChest";

const _abi = [
  {
    inputs: [],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "treasureAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "addTreasure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mintItem",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "openChest",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requestsIds",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
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
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newVaultAddress",
        type: "address",
      },
    ],
    name: "setVaultAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newVerifiedAddress",
        type: "address",
      },
    ],
    name: "setVerifierAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
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
  "0x610120604052603560c081815290620033de60e03980516200002a916010916020909101906200018d565b503480156200003857600080fd5b50604080518082018252600d81526c151c99585cdd5c9950da195cdd609a1b60208083019182528351808501909452600384526254524360e81b90840152815173dd3782915140c8f3b190b5d67eac6dc5760c46e99373a36085f69e2889c224210f603d836748e7dc008893929091620000b5916000916200018d565b508051620000cb9060019060208401906200018d565b505050620000e8620000e26200013760201b60201c565b6200013b565b6001600160601b0319606092831b811660a052911b166080527f6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f460085567016345785d8a00006009556200027a565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200019b9062000233565b90600052602060002090601f016020900481019282620001bf57600085556200020a565b82601f10620001da57805160ff19168380011785556200020a565b828001600101855582156200020a579182015b828111156200020a578251825591602001919060010190620001ed565b50620002189291506200021c565b5090565b5b808211156200021857600081556001016200021d565b6002810460018216806200024857607f821691505b602082108114156200025e576200025e62000264565b50919050565b634e487b7160e01b600052602260045260246000fd5b60805160601c60a05160601c61312a620002b460003960008181610b5001526111510152600081816109800152611122015261312a6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c8063715018a6116100e3578063b21ca0991161008c578063c87b56dd11610066578063c87b56dd14610337578063e985e9c51461034a578063f2fde38b1461038657600080fd5b8063b21ca099146102f1578063b66d168c14610311578063b88d4fde1461032457600080fd5b806394985ddd116100bd57806394985ddd146102c357806395d89b41146102d6578063a22cb465146102de57600080fd5b8063715018a61461029757806385535cc51461029f5780638da5cb5b146102b257600080fd5b806323b872dd116101455780636352211e1161011f5780636352211e1461025e578063691c65d41461027157806370a082311461028457600080fd5b806323b872dd1461021857806342842e0e1461022b5780636075eb7d1461023e57600080fd5b8063081812fc11610176578063081812fc146101d0578063095ea7b3146101f057806317e955261461020557600080fd5b806301ffc9a71461019257806306fdde03146101bb575b600080fd5b6101a56101a0366004612250565b610399565b6040516101b29190612c6c565b60405180910390f35b6101c361047e565b6040516101b29190612cca565b6101e36101de36600461220d565b610510565b6040516101b29190612b9a565b6102036101fe366004612184565b610569565b005b610203610213366004612024565b61060d565b610203610226366004612082565b610666565b610203610239366004612082565b610697565b61025161024c36600461220d565b6106b2565b6040516101b29190612e2b565b6101e361026c36600461220d565b6108eb565b61025161027f366004612024565b610920565b610251610292366004612024565b610a72565b610203610ab6565b6102036102ad366004612024565b610aec565b6006546001600160a01b03166101e3565b6102036102d136600461222e565b610b45565b6101c3610b9b565b6102036102ec366004612151565b610baa565b6102516102ff36600461220d565b600f6020526000908152604090205481565b61020361031f3660046121b7565b610bb5565b6102036103323660046120d2565b610cad565b6101c361034536600461220d565b610ce5565b6101a5610358366004612045565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610203610394366004612024565b610da4565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061042c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061047857507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606000805461048d90612f7a565b80601f01602080910402602001604051908101604052809291908181526020018280546104b990612f7a565b80156105065780601f106104db57610100808354040283529160200191610506565b820191906000526020600020905b8154815290600101906020018083116104e957829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661054d5760405162461bcd60e51b815260040161054490612d9b565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610574826108eb565b9050806001600160a01b0316836001600160a01b031614156105a85760405162461bcd60e51b815260040161054490612e0b565b336001600160a01b03821614806105e257506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6105fe5760405162461bcd60e51b815260040161054490612d5b565b6106088383610e00565b505050565b6006546001600160a01b031633146106375760405162461bcd60e51b815260040161054490612dbb565b600d805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6106703382610e7b565b61068c5760405162461bcd60e51b815260040161054490612e1b565b610608838383610f2d565b61060883838360405180602001604052806000815250610cad565b6000818152600260205260408120546001600160a01b03166106e65760405162461bcd60e51b815260040161054490612cdb565b336106f0836108eb565b6001600160a01b0316146107165760405162461bcd60e51b815260040161054490612dab565b6000828152600e6020526040812060040154905b6000848152600e602052604090206004015481101561088b576000848152600e602052604090206004018054601191908390811061076a5761076a61303e565b9060005260206000200154815481106107855761078561303e565b600091825260208083206003909202909101546012805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03928316908117909155600c54888552600e9093526040909320600401805463f242432a93909216913391601191879081106107f8576107f861303e565b9060005260206000200154815481106108135761081361303e565b90600052602060002090600302016002015460016040518563ffffffff1660e01b81526004016108469493929190612bec565b600060405180830381600087803b15801561086057600080fd5b505af1158015610874573d6000803e3d6000fd5b50505050808061088390612fd4565b91505061072a565b506108958361105c565b6000838152600e60205260408120906108ae8282611e47565b6108bc600183016000611e47565b60028201600090556003820160006108d49190611e47565b6108e2600483016000611e81565b50909392505050565b6000818152600260205260408120546001600160a01b0316806104785760405162461bcd60e51b815260040161054490612d7b565b600d546000906001600160a01b0316331461094d5760405162461bcd60e51b815260040161054490612ddb565b6009546040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906109b5903090600401612b9a565b60206040518083038186803b1580156109cd57600080fd5b505afa1580156109e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a059190612292565b1015610a235760405162461bcd60e51b815260040161054490612d4b565b6000610a2e600a5490565b9050610a3a8382611104565b6000610a4a60085460095461111e565b6000818152600f602052604090208390559050610a6b600a80546001019055565b5092915050565b60006001600160a01b038216610a9a5760405162461bcd60e51b815260040161054490612d6b565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b03163314610ae05760405162461bcd60e51b815260040161054490612dbb565b610aea6000611259565b565b6006546001600160a01b03163314610b165760405162461bcd60e51b815260040161054490612dbb565b600c805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b8d5760405162461bcd60e51b815260040161054490612dfb565b610b9782826112b8565b5050565b60606001805461048d90612f7a565b610b97338383611776565b6006546001600160a01b03163314610bdf5760405162461bcd60e51b815260040161054490612dbb565b604080516060810182526001600160a01b039485168152602081019384529081019182526011805460018101825560009190915290517f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c686003909202918201805473ffffffffffffffffffffffffffffffffffffffff1916919095161790935590517f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c69830155517f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c6a90910155565b610cb73383610e7b565b610cd35760405162461bcd60e51b815260040161054490612e1b565b610cdf84848484611819565b50505050565b6000818152600260205260409020546060906001600160a01b0316610d1c5760405162461bcd60e51b815260040161054490612deb565b6000828152600e6020526040812060020154610d379061184c565b6000848152600e60209081526040918290209151929350610d7d92610d69929160038301918691601091839101612a05565b6040516020818303038152906040526119a9565b604051602001610d8d9190612b61565b604051602081830303815290604052915050919050565b6006546001600160a01b03163314610dce5760405162461bcd60e51b815260040161054490612dbb565b6001600160a01b038116610df45760405162461bcd60e51b815260040161054490612cfb565b610dfd81611259565b50565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610e42826108eb565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610eaf5760405162461bcd60e51b815260040161054490612d3b565b6000610eba836108eb565b9050806001600160a01b0316846001600160a01b03161480610ef55750836001600160a01b0316610eea84610510565b6001600160a01b0316145b80610f2557506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610f40826108eb565b6001600160a01b031614610f665760405162461bcd60e51b815260040161054490612dcb565b6001600160a01b038216610f8c5760405162461bcd60e51b815260040161054490612d1b565b610f97600082610e00565b6001600160a01b0383166000908152600360205260408120805460019290610fc0908490612f07565b90915550506001600160a01b0382166000908152600360205260408120805460019290610fee908490612e9b565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000611067826108eb565b9050611074600083610e00565b6001600160a01b038116600090815260036020526040812080546001929061109d908490612f07565b9091555050600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b610b97828260405180602001604052806000815250611b64565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634000aea07f000000000000000000000000000000000000000000000000000000000000000084866000604051602001611185929190612c7a565b6040516020818303038152906040526040518463ffffffff1660e01b81526004016111b293929190612c36565b602060405180830381600087803b1580156111cc57600080fd5b505af11580156111e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120491906121ec565b5060008381526007602052604081205461122390859083903090611b97565b600085815260076020526040902054909150611240906001612e9b565b600085815260076020526040902055610f258482611bd1565b600680546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000828152600f602090815260408083205490519092916112de91859160019101612e39565b60408051601f1981840301815291905280516020909101206011549091506000906113098184612e9b565b61131490600a612e9b565b61131e9190612fe8565b90506113526040518060a0016040528060608152602001606081526020016000815260200160608152602001606081525090565b6000848152600e60209081526040909120825180518493611377928492910190611e9f565b5060208281015180516113909260018501920190611e9f565b5060408201516002820155606082015180516113b6916003840191602090910190611e9f565b50608082015180516113d2916004840191602090910190611f23565b5090505060005b82811015611660576011546040516000919081906113fd908a908690602001612c7a565b6040516020818303038152906040528051906020012060001c6114209190612e9b565b61142b90600a612e9b565b6114359190612fe8565b905060006011828154811061144c5761144c61303e565b90600052602060002090600302016001015411156114e8576000868152600e6020908152604082206004018054600181810183559184529190922001829055601180548390811061149f5761149f61303e565b9060005260206000209060030201600101546114bb9190612f07565b601182815481106114ce576114ce61303e565b90600052602060002090600302016001018190555061164d565b6000868152600e602052604090206004015461164d575b6000868152600e602052604090206004015461164d57611520816001612e9b565b90506000601182815481106115375761153761303e565b90600052602060002090600302016001015411156115d3576000868152600e6020908152604082206004018054600181810183559184529190922001829055601180548390811061158a5761158a61303e565b9060005260206000209060030201600101546115a69190612f07565b601182815481106115b9576115b961303e565b9060005260206000209060030201600101819055506114ff565b6115de600282612f07565b90506000601182815481106115f5576115f561303e565b9060005260206000209060030201600101541115611648576000868152600e6020908152604082206004018054600181810183559184529190922001829055601180548390811061158a5761158a61303e565b6114ff565b508061165881612fd4565b9150506113d9565b50604080518082018252600d81527f547265617375726543686573740000000000000000000000000000000000000060208083019182526000888152600e9091529290922090516116b19290611e9f565b50604080518082018252600481527f524152450000000000000000000000000000000000000000000000000000000060208083019182526000888152600e9091529290922090516117089260019092019190611e9f565b506000848152600e60208181526040808420600281018790558151808301909252601182527f412074726561737572652063686573742e00000000000000000000000000000082840190815294899052929091525161176d9260039092019190611e9f565b50505050505050565b816001600160a01b0316836001600160a01b031614156117a85760405162461bcd60e51b815260040161054490612d2b565b6001600160a01b0383811660008181526005602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319061180c908590612c6c565b60405180910390a3505050565b611824848484610f2d565b61183084848484611c04565b610cdf5760405162461bcd60e51b815260040161054490612ceb565b60608161188c57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156118b657806118a081612fd4565b91506118af9050600a83612ed4565b9150611890565b60008167ffffffffffffffff8111156118d1576118d1613054565b6040519080825280601f01601f1916602001820160405280156118fb576020820181803683370190505b509050815b85156119a057611911600182612f07565b90506000611920600a88612ed4565b61192b90600a612ee8565b6119359088612f07565b611940906030612eb3565b905060008160f81b90508084848151811061195d5761195d61303e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611997600a89612ed4565b97505050611900565b50949350505050565b60608151600014156119c957505060408051602081019091526000815290565b60006040518060600160405280604081526020016130b560409139905060006003845160026119f89190612e9b565b611a029190612ed4565b611a0d906004612ee8565b90506000611a1c826020612e9b565b67ffffffffffffffff811115611a3457611a34613054565b6040519080825280601f01601f191660200182016040528015611a5e576020820181803683370190505b509050818152600183018586518101602084015b81831015611aca576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101611a72565b600389510660018114611ae45760028114611b2e57611b56565b7f3d3d0000000000000000000000000000000000000000000000000000000000007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe830152611b56565b7f3d000000000000000000000000000000000000000000000000000000000000006000198301525b509398975050505050505050565b611b6e8383611d58565b611b7b6000848484611c04565b6106085760405162461bcd60e51b815260040161054490612ceb565b600084848484604051602001611bb09493929190612c95565b60408051601f19818403018152919052805160209091012095945050505050565b60008282604051602001611be69291906129df565b60405160208183030381529060405280519060200120905092915050565b60006001600160a01b0384163b15611d50576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290611c61903390899088908890600401612ba8565b602060405180830381600087803b158015611c7b57600080fd5b505af1925050508015611cab575060408051601f3d908101601f19168201909252611ca891810190612271565b60015b611d05573d808015611cd9576040519150601f19603f3d011682016040523d82523d6000602084013e611cde565b606091505b508051611cfd5760405162461bcd60e51b815260040161054490612ceb565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610f25565b506001610f25565b6001600160a01b038216611d7e5760405162461bcd60e51b815260040161054490612d8b565b6000818152600260205260409020546001600160a01b031615611db35760405162461bcd60e51b815260040161054490612d0b565b6001600160a01b0382166000908152600360205260408120805460019290611ddc908490612e9b565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b508054611e5390612f7a565b6000825580601f10611e63575050565b601f016020900490600052602060002090810190610dfd9190611f5d565b5080546000825590600052602060002090810190610dfd9190611f5d565b828054611eab90612f7a565b90600052602060002090601f016020900481019282611ecd5760008555611f13565b82601f10611ee657805160ff1916838001178555611f13565b82800160010185558215611f13579182015b82811115611f13578251825591602001919060010190611ef8565b50611f1f929150611f5d565b5090565b828054828255906000526020600020908101928215611f135791602002820182811115611f13578251825591602001919060010190611ef8565b5b80821115611f1f5760008155600101611f5e565b6000611f85611f8084612e70565b612e54565b905082815260208101848484011115611fa057611fa0600080fd5b611fab848285612f42565b509392505050565b80356104788161306a565b80356104788161307e565b80516104788161307e565b803561047881613086565b80356104788161308c565b80516104788161308c565b600082601f83011261200957612009600080fd5b8135610f25848260208601611f72565b805161047881613086565b60006020828403121561203957612039600080fd5b6000610f258484611fb3565b6000806040838503121561205b5761205b600080fd5b60006120678585611fb3565b925050602061207885828601611fb3565b9150509250929050565b60008060006060848603121561209a5761209a600080fd5b60006120a68686611fb3565b93505060206120b786828701611fb3565b92505060406120c886828701611fd4565b9150509250925092565b600080600080608085870312156120eb576120eb600080fd5b60006120f78787611fb3565b945050602061210887828801611fb3565b935050604061211987828801611fd4565b925050606085013567ffffffffffffffff81111561213957612139600080fd5b61214587828801611ff5565b91505092959194509250565b6000806040838503121561216757612167600080fd5b60006121738585611fb3565b925050602061207885828601611fbe565b6000806040838503121561219a5761219a600080fd5b60006121a68585611fb3565b925050602061207885828601611fd4565b6000806000606084860312156121cf576121cf600080fd5b60006121db8686611fb3565b93505060206120b786828701611fd4565b60006020828403121561220157612201600080fd5b6000610f258484611fc9565b60006020828403121561222257612222600080fd5b6000610f258484611fd4565b6000806040838503121561224457612244600080fd5b60006121a68585611fd4565b60006020828403121561226557612265600080fd5b6000610f258484611fdf565b60006020828403121561228657612286600080fd5b6000610f258484611fea565b6000602082840312156122a7576122a7600080fd5b6000610f258484612019565b6122bc81612f1e565b82525050565b8015156122bc565b806122bc565b60006122da825190565b8084526020840193506122f1818560208601612f4e565b601f01601f19169290920192915050565b6122bc81612f2f565b6122bc81612f37565b600061231e825190565b61232c818560208601612f4e565b9290920192915050565b6000815461234381612f7a565b60018216801561235a576001811461236b5761239b565b60ff1983168652818601935061239b565b60008581526020902060005b8381101561239357815488820152600190910190602001612377565b838801955050505b50505092915050565b601481526000602082017f436865737420646f6573206e6f74206578697374000000000000000000000000815291505b5060200190565b603281526000602082017f4552433732313a207472616e7366657220746f206e6f6e20455243373231526581527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015291505b5060400190565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181527f646472657373000000000000000000000000000000000000000000000000000060208201529150612431565b601c81526000602082017f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000815291506123d4565b602481526000602082017f4552433732313a207472616e7366657220746f20746865207a65726f2061646481527f726573730000000000000000000000000000000000000000000000000000000060208201529150612431565b601981526000602082017f4552433732313a20617070726f766520746f2063616c6c657200000000000000815291506123d4565b602c81526000602082017f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657881527f697374656e7420746f6b656e000000000000000000000000000000000000000060208201529150612431565b600f81526000602082017f4e6f7420656e6f756768204c494e4b0000000000000000000000000000000000815291506123d4565b603881526000602082017f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7781527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060208201529150612431565b602a81526000602082017f4552433732313a2062616c616e636520717565727920666f7220746865207a6581527f726f20616464726573730000000000000000000000000000000000000000000060208201529150612431565b602981526000602082017f4552433732313a206f776e657220717565727920666f72206e6f6e657869737481527f656e7420746f6b656e000000000000000000000000000000000000000000000060208201529150612431565b60208082527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373910190815260006123d4565b602c81526000602082017f4552433732313a20617070726f76656420717565727920666f72206e6f6e657881527f697374656e7420746f6b656e000000000000000000000000000000000000000060208201529150612431565b601981526000602082017f5975206e6f74206f776e6572206f662064697320636865737400000000000000815291506123d4565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260006123d4565b602981526000602082017f4552433732313a207472616e73666572206f6620746f6b656e2074686174206981527f73206e6f74206f776e000000000000000000000000000000000000000000000060208201529150612431565b601081526000602082017f4e6f742074686520766572696669657200000000000000000000000000000000815291506123d4565b602f81526000602082017f4552433732314d657461646174613a2055524920717565727920666f72206e6f81527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060208201529150612431565b601f81526000602082017f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c00815291506123d4565b602181526000602082017f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6581527f720000000000000000000000000000000000000000000000000000000000000060208201529150612431565b603181526000602082017f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f81527f776e6572206e6f7220617070726f76656400000000000000000000000000000060208201529150612431565b7f2f00000000000000000000000000000000000000000000000000000000000000815260005b5060010190565b60006129eb82856122ca565b6020820191506129fb82846122ca565b5060200192915050565b7f7b226e616d65223a22000000000000000000000000000000000000000000000081526009016000612a378288612336565b7f222c20226465736372697074696f6e223a22000000000000000000000000000081526012019150612a698287612336565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a81527f2022676f6f646e6573222c202276616c7565223a20220000000000000000000060208201526036019150612ac18286612314565b7f227d5d2c0000000000000000000000000000000000000000000000000000000081527f22696d616765223a2022000000000000000000000000000000000000000000006004820152600e019150612b198285612336565b9150612b24826129b2565b9150612b308284612314565b7f2e706e67227d00000000000000000000000000000000000000000000000000008152600601979650505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000008152601d016000612b938284612314565b9392505050565b6020810161047882846122b3565b60808101612bb682876122b3565b612bc360208301866122b3565b612bd060408301856122ca565b8181036060830152612be281846122d0565b9695505050505050565b60a08101612bfa82876122b3565b612c0760208301866122b3565b612c1460408301856122ca565b612c216060830184612302565b81810360808301526000815260208101612be2565b60608101612c4482866122b3565b612c5160208301856122ca565b8181036040830152612c6381846122d0565b95945050505050565b6020810161047882846122c2565b60408101612c8882856122ca565b612b9360208301846122ca565b60808101612ca382876122ca565b612cb060208301866122ca565b612cbd60408301856122b3565b612c6360608301846122ca565b60208082528101612b9381846122d0565b60208082528101610478816123a4565b60208082528101610478816123db565b6020808252810161047881612438565b6020808252810161047881612492565b60208082528101610478816124c6565b6020808252810161047881612520565b6020808252810161047881612554565b60208082528101610478816125ae565b60208082528101610478816125e2565b602080825281016104788161263c565b6020808252810161047881612696565b60208082528101610478816126f0565b6020808252810161047881612722565b602080825281016104788161277c565b60208082528101610478816127b0565b60208082528101610478816127e2565b602080825281016104788161283c565b6020808252810161047881612870565b60208082528101610478816128ca565b60208082528101610478816128fe565b6020808252810161047881612958565b6020810161047882846122ca565b60408101612e4782856122ca565b612b93602083018461230b565b6000612e5f60405190565b9050612e6b8282612fa7565b919050565b600067ffffffffffffffff821115612e8a57612e8a613054565b601f19601f83011660200192915050565b60008219821115612eae57612eae612ffc565b500190565b600060ff8216915060ff831692508260ff03821115612eae57612eae612ffc565b600082612ee357612ee3613012565b500490565b6000816000190483118215151615612f0257612f02612ffc565b500290565b600082821015612f1957612f19612ffc565b500390565b60006001600160a01b038216610478565b600081610478565b600060ff8216610478565b82818337506000910152565b60005b83811015612f69578181015183820152602001612f51565b83811115610cdf5750506000910152565b600281046001821680612f8e57607f821691505b60208210811415612fa157612fa1613028565b50919050565b601f19601f830116810181811067ffffffffffffffff82111715612fcd57612fcd613054565b6040525050565b60006000198214156129d8576129d8612ffc565b600082612ff757612ff7613012565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61307381612f1e565b8114610dfd57600080fd5b801515613073565b80613073565b7fffffffff00000000000000000000000000000000000000000000000000000000811661307356fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220594e971fc5100a6d418707de1e13272e5eea8080ee573ce53fee9436123c7fad64736f6c63430008070033697066733a2f2f516d524d4d445771704c57624c79757a4864554253756263536d4665473662336b656372734d3174754153744c75";

type TreasureChestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureChestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureChest__factory extends ContractFactory {
  constructor(...args: TreasureChestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TreasureChest> {
    return super.deploy(overrides || {}) as Promise<TreasureChest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TreasureChest {
    return super.attach(address) as TreasureChest;
  }
  connect(signer: Signer): TreasureChest__factory {
    return super.connect(signer) as TreasureChest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureChestInterface {
    return new utils.Interface(_abi) as TreasureChestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureChest {
    return new Contract(address, _abi, signerOrProvider) as TreasureChest;
  }
}