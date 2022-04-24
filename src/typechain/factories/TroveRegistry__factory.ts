/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TroveRegistry, TroveRegistryInterface } from "../TroveRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_hideServ",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "layerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum TroveRegistry.EntityType",
        name: "entityType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum TroveRegistry.TreasureType",
        name: "treasureType",
        type: "uint8",
      },
    ],
    name: "EntityAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "layerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum TroveRegistry.EntityType",
        name: "entityType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum TroveRegistry.TreasureType",
        name: "treasureType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "geohash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "entityContract",
        type: "address",
      },
    ],
    name: "EntityReady",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "layerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NewLayer",
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
    inputs: [
      {
        internalType: "uint256",
        name: "layerId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "enum TroveRegistry.EntityType",
        name: "entityType",
        type: "uint8",
      },
      {
        internalType: "enum TroveRegistry.TreasureType",
        name: "treasureType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "entityContract",
        type: "address",
      },
    ],
    name: "addEntity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "prover",
        type: "address",
      },
    ],
    name: "createLayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "entities",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "entityContract",
        type: "address",
      },
      {
        internalType: "enum TroveRegistry.EntityType",
        name: "entityType",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
      {
        internalType: "string",
        name: "geohash",
        type: "string",
      },
      {
        internalType: "enum TroveRegistry.TreasureType",
        name: "treasureType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "vaultId",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "entitiesCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
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
        name: "layerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "geohash",
        type: "string",
      },
    ],
    name: "fullfillGeohash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "layerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
    ],
    name: "getEntity",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "entityContract",
            type: "address",
          },
          {
            internalType: "enum TroveRegistry.EntityType",
            name: "entityType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "status",
            type: "bool",
          },
          {
            internalType: "string",
            name: "geohash",
            type: "string",
          },
          {
            internalType: "enum TroveRegistry.TreasureType",
            name: "treasureType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "vaultId",
            type: "uint256",
          },
        ],
        internalType: "struct TroveRegistry.Entity",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "layers",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "layerId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "prover",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        name: "layerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entityId",
        type: "uint256",
      },
    ],
    name: "removeEntity",
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
        internalType: "address",
        name: "_vault",
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
        name: "_verifier",
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
  "0x60806040523480156200001157600080fd5b5060405162001769380380620017698339810160408190526200003491620000c8565b6200003f3362000065565b600180546001600160a01b0319166001600160a01b039290921691909117905562000121565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8051620000c28162000107565b92915050565b600060208284031215620000df57620000df600080fd5b6000620000ed8484620000b5565b949350505050565b60006001600160a01b038216620000c2565b6200011281620000f5565b81146200011e57600080fd5b50565b61163880620001316000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063715018a61161008c5780638da5cb5b116100665780638da5cb5b146101b65780639e9198c2146101cf578063ab435727146101f2578063f2fde38b1461021857600080fd5b8063715018a6146101885780637aa721f01461019057806385535cc5146101a357600080fd5b80631fa851ed116100bd5780631fa851ed1461014f578063366a7e091461016257806342683b701461017557600080fd5b80630a44bba4146100e457806312b1a1781461011a57806317e955261461013a575b600080fd5b6101046100f2366004610ead565b60076020526000908152604090205481565b60405161011191906113b0565b60405180910390f35b61012d610128366004610f79565b61022b565b6040516101119190611398565b61014d610148366004610e15565b610452565b005b61014d61015d366004610fb6565b6104b4565b61014d610170366004610f79565b61059e565b61014d610183366004610e3e565b61060c565b61014d6106d0565b61014d61019e366004610ece565b610706565b61014d6101b1366004610e15565b61094a565b6000546001600160a01b03166040516101119190611224565b6101e26101dd366004610ead565b6109a3565b60405161011194939291906112dd565b610205610200366004610f79565b610a60565b6040516101119796959493929190611269565b61014d610226366004610e15565b610bd1565b6040805160e0810182526060808252600060208301819052928201839052808201839052608082015260a0810182905260c0810191909152600083815260066020908152604080832085845290915290819020815160e0810190925280548290829061029690611523565b80601f01602080910402602001604051908101604052809291908181526020018280546102c290611523565b801561030f5780601f106102e45761010080835404028352916020019161030f565b820191906000526020600020905b8154815290600101906020018083116102f257829003601f168201915b505050918352505060018201546001600160a01b0381166020830152604090910190600160a01b900460ff16600281111561034c5761034c611550565b600281111561035d5761035d611550565b81526001820154600160a81b900460ff161515602082015260028201805460409092019161038a90611523565b80601f01602080910402602001604051908101604052809291908181526020018280546103b690611523565b80156104035780601f106103d857610100808354040283529160200191610403565b820191906000526020600020905b8154815290600101906020018083116103e657829003601f168201915b5050509183525050600382015460209091019060ff16600181111561042a5761042a611550565b600181111561043b5761043b611550565b815260200160048201548152505090505b92915050565b6000546001600160a01b031633146104855760405162461bcd60e51b815260040161047c90611378565b60405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600084815260066020908152604080832086845290915290206104db906002018383610c8a565b50600084815260066020908152604080832086845290915290819020600181018054600160a81b7fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff82168117928390556003840154600485015495517f7489cacfeae49ad1b2d626ddd76d9b2d797dc8ac4a392e3087a59d3e94dfb31b96610590968c968c96919560ff600160a01b8304811696811695600289019592909304169290916001600160a01b0390911690611413565b60405180910390a150505050565b6003546001600160a01b031633146105c85760405162461bcd60e51b815260040161047c90611388565b6000918252600660209081526040808420928452919052902060010180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff169055565b600061061760045490565b6000818152600560205260409020909150610633818787610c8a565b50600181018290556002810180546001600160a01b0380871673ffffffffffffffffffffffffffffffffffffffff1992831617909255600383018054928616929091169190911790556040517fd72d670c5fdfb209118d285694e9d139bd8757168f3e410f8fd524b1beca9075906106b2908890889086908990611232565b60405180910390a16106c8600480546001019055565b505050505050565b6000546001600160a01b031633146106fa5760405162461bcd60e51b815260040161047c90611378565b6107046000610c2d565b565b600087815260076020526040812054604080516101006020601f8b01819004028201810190925260e081018981529293509182918a908a90819085018382808284376000920191909152505050908252506001600160a01b038416602082015260400186600281111561077b5761077b611550565b81526020016000151581526020016040518060200160405280600081525081526020018560018111156107b0576107b0611550565b8152602090810185905260008a8152600682526040808220858352835290208251805191926107e492849290910190610d0e565b5060208201516001820180546001600160a01b0390921673ffffffffffffffffffffffffffffffffffffffff198316811782556040850151927fffffffffffffffffffffff0000000000000000000000000000000000000000001617600160a01b83600281111561085757610857611550565b02179055506060820151600182018054911515600160a81b027fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff909216919091179055608082015180516108b5916002840191602090910190610d0e565b5060a082015160038201805460ff1916600183818111156108d8576108d8611550565b021790555060c091909101516004909101556000888152600760205260409020805460010190557f9d7ad63e119c9aae49c9b5c184a029fca4083340620eddc7b20208f54ea72710888289898989604051610938969594939291906113be565b60405180910390a15050505050505050565b6000546001600160a01b031633146109745760405162461bcd60e51b815260040161047c90611378565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6005602052600090815260409020805481906109be90611523565b80601f01602080910402602001604051908101604052809291908181526020018280546109ea90611523565b8015610a375780601f10610a0c57610100808354040283529160200191610a37565b820191906000526020600020905b815481529060010190602001808311610a1a57829003601f168201915b5050505060018301546002840154600390940154929390926001600160a01b0391821692501684565b6006602090815260009283526040808420909152908252902080548190610a8690611523565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab290611523565b8015610aff5780601f10610ad457610100808354040283529160200191610aff565b820191906000526020600020905b815481529060010190602001808311610ae257829003601f168201915b505050600184015460028501805494956001600160a01b0383169560ff600160a01b850481169650600160a81b909404909316935091610b3e90611523565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6a90611523565b8015610bb75780601f10610b8c57610100808354040283529160200191610bb7565b820191906000526020600020905b815481529060010190602001808311610b9a57829003601f168201915b505050506003830154600490930154919260ff1691905087565b6000546001600160a01b03163314610bfb5760405162461bcd60e51b815260040161047c90611378565b6001600160a01b038116610c215760405162461bcd60e51b815260040161047c90611317565b610c2a81610c2d565b50565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054610c9690611523565b90600052602060002090601f016020900481019282610cb85760008555610cfe565b82601f10610cd15782800160ff19823516178555610cfe565b82800160010185558215610cfe579182015b82811115610cfe578235825591602001919060010190610ce3565b50610d0a929150610d82565b5090565b828054610d1a90611523565b90600052602060002090601f016020900481019282610d3c5760008555610cfe565b82601f10610d5557805160ff1916838001178555610cfe565b82800160010185558215610cfe579182015b82811115610cfe578251825591602001919060010190610d67565b5b80821115610d0a5760008155600101610d83565b803561044c816115ce565b803561044c816115e2565b803561044c816115ef565b60008083601f840112610dcd57610dcd600080fd5b50813567ffffffffffffffff811115610de857610de8600080fd5b602083019150836001820283011115610e0357610e03600080fd5b9250929050565b803561044c816115fc565b600060208284031215610e2a57610e2a600080fd5b6000610e368484610d97565b949350505050565b60008060008060608587031215610e5757610e57600080fd5b843567ffffffffffffffff811115610e7157610e71600080fd5b610e7d87828801610db8565b94509450506020610e9087828801610d97565b9250506040610ea187828801610d97565b91505092959194509250565b600060208284031215610ec257610ec2600080fd5b6000610e368484610e0a565b600080600080600080600060c0888a031215610eec57610eec600080fd5b6000610ef88a8a610e0a565b975050602088013567ffffffffffffffff811115610f1857610f18600080fd5b610f248a828b01610db8565b96509650506040610f378a828b01610da2565b9450506060610f488a828b01610dad565b9350506080610f598a828b01610e0a565b92505060a0610f6a8a828b01610d97565b91505092959891949750929550565b60008060408385031215610f8f57610f8f600080fd5b6000610f9b8585610e0a565b9250506020610fac85828601610e0a565b9150509250929050565b60008060008060608587031215610fcf57610fcf600080fd5b6000610fdb8787610e0a565b9450506020610fec87828801610e0a565b935050604085013567ffffffffffffffff81111561100c5761100c600080fd5b61101887828801610db8565b95989497509550505050565b61102d816114a7565b82525050565b80151561102d565b61102d816114d1565b61102d816114dc565b81835260006020840193506110638385846114e7565b601f19601f8401165b9093019392505050565b6000611080825190565b8084526020840193506110978185602086016114f3565b601f19601f82011661106c565b600081546110b181611523565b8085526020850194506001821680156110d157600181146110e357611111565b60ff1983168652602086019350611111565b60008581526020902060005b8381101561110b578154888201526001909101906020016110ef565b87019450505b50505092915050565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b601081526000602082017f4e6f74207468652076657269666965720000000000000000000000000000000081529150611148565b805160e08084526000919084019061119b8282611076565b91505060208301516111b06020860182611024565b5060408301516111c3604086018261103b565b5060608301516111d66060860182611033565b50608083015184820360808601526111ee8282611076565b91505060a083015161120360a0860182611044565b5060c083015161121660c086018261121e565b509392505050565b8061102d565b6020810161044c8284611024565b6060808252810161124481868861104d565b9050611253602083018561121e565b6112606040830184611024565b95945050505050565b60e0808252810161127a818a611076565b90506112896020830189611024565b611296604083018861103b565b6112a36060830187611033565b81810360808301526112b58186611076565b90506112c460a0830185611044565b6112d160c083018461121e565b98975050505050505050565b608080825281016112ee8187611076565b90506112fd602083018661121e565b61130a6040830185611024565b6112606060830184611024565b6020808252810161044c81602681527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160208201527f6464726573730000000000000000000000000000000000000000000000000000604082015260600190565b6020808252810161044c8161111a565b6020808252810161044c8161114f565b602080825281016113a98184611183565b9392505050565b6020810161044c828461121e565b60a081016113cc828961121e565b6113d9602083018861121e565b81810360408301526113ec81868861104d565b90506113fb606083018561103b565b6114086080830184611044565b979650505050505050565b6101208101611422828c61121e565b61142f602083018b61121e565b8181036040830152611441818a6110a4565b9050611450606083018961103b565b61145d6080830188611044565b81810360a083015261146f81876110a4565b905061147e60c0830186611033565b61148b60e083018561121e565b611499610100830184611024565b9a9950505050505050505050565b60006001600160a01b03821661044c565b806114c2816115ae565b919050565b806114c2816115be565b600061044c826114b8565b600061044c826114c7565b82818337506000910152565b60005b8381101561150e5781810151838201526020016114f6565b8381111561151d576000848401525b50505050565b60028104600182168061153757607f821691505b6020821081141561154a5761154a61157f565b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60038110610c2a57610c2a611550565b60028110610c2a57610c2a611550565b6115d7816114a7565b8114610c2a57600080fd5b60038110610c2a57600080fd5b60028110610c2a57600080fd5b806115d756fea26469706673582212200360f40486062dee783bcce92a5639af4ebcacf9fac915e8db1e3d14445d777264736f6c63430008070033";

type TroveRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TroveRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TroveRegistry__factory extends ContractFactory {
  constructor(...args: TroveRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _hideServ: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TroveRegistry> {
    return super.deploy(_hideServ, overrides || {}) as Promise<TroveRegistry>;
  }
  getDeployTransaction(
    _hideServ: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_hideServ, overrides || {});
  }
  attach(address: string): TroveRegistry {
    return super.attach(address) as TroveRegistry;
  }
  connect(signer: Signer): TroveRegistry__factory {
    return super.connect(signer) as TroveRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TroveRegistryInterface {
    return new utils.Interface(_abi) as TroveRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TroveRegistry {
    return new Contract(address, _abi, signerOrProvider) as TroveRegistry;
  }
}