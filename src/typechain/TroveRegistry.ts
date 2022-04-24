/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type EntityStruct = {
  name: string;
  entityContract: string;
  entityType: BigNumberish;
  status: boolean;
  geohash: string;
  treasureType: BigNumberish;
  vaultId: BigNumberish;
};

export type EntityStructOutput = [
  string,
  string,
  number,
  boolean,
  string,
  number,
  BigNumber
] & {
  name: string;
  entityContract: string;
  entityType: number;
  status: boolean;
  geohash: string;
  treasureType: number;
  vaultId: BigNumber;
};

export interface TroveRegistryInterface extends utils.Interface {
  functions: {
    "addEntity(uint256,string,uint8,uint8,uint256,address)": FunctionFragment;
    "createLayer(string,address,address)": FunctionFragment;
    "entities(uint256,uint256)": FunctionFragment;
    "entitiesCounter(uint256)": FunctionFragment;
    "fullfillGeohash(uint256,uint256,string)": FunctionFragment;
    "getEntity(uint256,uint256)": FunctionFragment;
    "layers(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeEntity(uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setVaultAddress(address)": FunctionFragment;
    "setVerifierAddress(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addEntity",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createLayer",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "entities",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "entitiesCounter",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fullfillGeohash",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getEntity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "layers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeEntity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setVaultAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVerifierAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addEntity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createLayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "entities", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "entitiesCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fullfillGeohash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getEntity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "layers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeEntity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVerifierAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "EntityAdded(uint256,uint256,string,uint8,uint8)": EventFragment;
    "EntityReady(uint256,uint256,string,uint8,uint8,string,bool,uint256,address)": EventFragment;
    "NewLayer(string,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EntityAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EntityReady"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewLayer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type EntityAddedEvent = TypedEvent<
  [BigNumber, BigNumber, string, number, number],
  {
    layerId: BigNumber;
    entityId: BigNumber;
    name: string;
    entityType: number;
    treasureType: number;
  }
>;

export type EntityAddedEventFilter = TypedEventFilter<EntityAddedEvent>;

export type EntityReadyEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    string,
    number,
    number,
    string,
    boolean,
    BigNumber,
    string
  ],
  {
    layerId: BigNumber;
    entityId: BigNumber;
    name: string;
    entityType: number;
    treasureType: number;
    geohash: string;
    status: boolean;
    vaultId: BigNumber;
    entityContract: string;
  }
>;

export type EntityReadyEventFilter = TypedEventFilter<EntityReadyEvent>;

export type NewLayerEvent = TypedEvent<
  [string, BigNumber, string],
  { name: string; layerId: BigNumber; owner: string }
>;

export type NewLayerEventFilter = TypedEventFilter<NewLayerEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TroveRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TroveRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addEntity(
      layerId: BigNumberish,
      name: string,
      entityType: BigNumberish,
      treasureType: BigNumberish,
      vaultId: BigNumberish,
      entityContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createLayer(
      name: string,
      owner: string,
      prover: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    entities(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number, boolean, string, number, BigNumber] & {
        name: string;
        entityContract: string;
        entityType: number;
        status: boolean;
        geohash: string;
        treasureType: number;
        vaultId: BigNumber;
      }
    >;

    entitiesCounter(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    fullfillGeohash(
      layerId: BigNumberish,
      entityId: BigNumberish,
      geohash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getEntity(
      layerId: BigNumberish,
      entityId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[EntityStructOutput]>;

    layers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string] & {
        name: string;
        layerId: BigNumber;
        owner: string;
        prover: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeEntity(
      layerId: BigNumberish,
      entityId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVaultAddress(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVerifierAddress(
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addEntity(
    layerId: BigNumberish,
    name: string,
    entityType: BigNumberish,
    treasureType: BigNumberish,
    vaultId: BigNumberish,
    entityContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createLayer(
    name: string,
    owner: string,
    prover: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  entities(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number, boolean, string, number, BigNumber] & {
      name: string;
      entityContract: string;
      entityType: number;
      status: boolean;
      geohash: string;
      treasureType: number;
      vaultId: BigNumber;
    }
  >;

  entitiesCounter(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fullfillGeohash(
    layerId: BigNumberish,
    entityId: BigNumberish,
    geohash: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getEntity(
    layerId: BigNumberish,
    entityId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<EntityStructOutput>;

  layers(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, string] & {
      name: string;
      layerId: BigNumber;
      owner: string;
      prover: string;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  removeEntity(
    layerId: BigNumberish,
    entityId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVaultAddress(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVerifierAddress(
    _verifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addEntity(
      layerId: BigNumberish,
      name: string,
      entityType: BigNumberish,
      treasureType: BigNumberish,
      vaultId: BigNumberish,
      entityContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createLayer(
      name: string,
      owner: string,
      prover: string,
      overrides?: CallOverrides
    ): Promise<void>;

    entities(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number, boolean, string, number, BigNumber] & {
        name: string;
        entityContract: string;
        entityType: number;
        status: boolean;
        geohash: string;
        treasureType: number;
        vaultId: BigNumber;
      }
    >;

    entitiesCounter(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fullfillGeohash(
      layerId: BigNumberish,
      entityId: BigNumberish,
      geohash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getEntity(
      layerId: BigNumberish,
      entityId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<EntityStructOutput>;

    layers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string] & {
        name: string;
        layerId: BigNumber;
        owner: string;
        prover: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    removeEntity(
      layerId: BigNumberish,
      entityId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setVaultAddress(_vault: string, overrides?: CallOverrides): Promise<void>;

    setVerifierAddress(
      _verifier: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EntityAdded(uint256,uint256,string,uint8,uint8)"(
      layerId?: null,
      entityId?: null,
      name?: null,
      entityType?: null,
      treasureType?: null
    ): EntityAddedEventFilter;
    EntityAdded(
      layerId?: null,
      entityId?: null,
      name?: null,
      entityType?: null,
      treasureType?: null
    ): EntityAddedEventFilter;

    "EntityReady(uint256,uint256,string,uint8,uint8,string,bool,uint256,address)"(
      layerId?: null,
      entityId?: null,
      name?: null,
      entityType?: null,
      treasureType?: null,
      geohash?: null,
      status?: null,
      vaultId?: null,
      entityContract?: null
    ): EntityReadyEventFilter;
    EntityReady(
      layerId?: null,
      entityId?: null,
      name?: null,
      entityType?: null,
      treasureType?: null,
      geohash?: null,
      status?: null,
      vaultId?: null,
      entityContract?: null
    ): EntityReadyEventFilter;

    "NewLayer(string,uint256,address)"(
      name?: null,
      layerId?: null,
      owner?: null
    ): NewLayerEventFilter;
    NewLayer(name?: null, layerId?: null, owner?: null): NewLayerEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addEntity(
      layerId: BigNumberish,
      name: string,
      entityType: BigNumberish,
      treasureType: BigNumberish,
      vaultId: BigNumberish,
      entityContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createLayer(
      name: string,
      owner: string,
      prover: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    entities(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    entitiesCounter(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fullfillGeohash(
      layerId: BigNumberish,
      entityId: BigNumberish,
      geohash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getEntity(
      layerId: BigNumberish,
      entityId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    layers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeEntity(
      layerId: BigNumberish,
      entityId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVaultAddress(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVerifierAddress(
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addEntity(
      layerId: BigNumberish,
      name: string,
      entityType: BigNumberish,
      treasureType: BigNumberish,
      vaultId: BigNumberish,
      entityContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createLayer(
      name: string,
      owner: string,
      prover: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    entities(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    entitiesCounter(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fullfillGeohash(
      layerId: BigNumberish,
      entityId: BigNumberish,
      geohash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getEntity(
      layerId: BigNumberish,
      entityId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    layers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeEntity(
      layerId: BigNumberish,
      entityId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVaultAddress(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVerifierAddress(
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
