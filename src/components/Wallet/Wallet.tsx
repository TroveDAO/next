import React, { useEffect, useState } from 'react';
import { useConnect, useAccount, defaultChains, defaultL2Chains } from 'wagmi'
import Loader from '..//elements/Loader/Loader'
import provider, { getEthersProvider } from '../../lib/provider';

import { stringToColor, hexToRgb } from '../../utils/stringToColor';
import gql from 'graphql-tag';
import { useQuery, useLazyQuery} from '@apollo/react-hooks';
import { Button, ButtonGroup } from '@chakra-ui/react'
import NFT from '../NFT/NFT';
import { NftProvider, useNft } from "use-nft"
import ethers from "ethers"
import { Provider } from 'wagmi'
import { Grid, GridItem } from '@chakra-ui/react'

const GET_MY_NFTS = gql`
query getMyNfts($network: String!) {
  getMyNfts(network: $network) {
    token_address
    token_id
    owner
    amount
    contract_type
    name
    symbol
    token_uri
    metadata {
      image
      description
      external_url
      attributes
    }
    is_valid
  }
}
`;



const Wallet = () => {

    const { loading:myNFTsLoading, error:myNFTsError, data:myNFTs } = useQuery(GET_MY_NFTS, {
        variables: { 
            network: "matic-testnet"
        }
    });


    // useEffect(() => {
    //     const getProvider = async () => {
    //         const newProvider = await getEthersProvider("matic-testnet");
    //         setProvider(newProvider)
    //     }
    //     getProvider();
    // }, [])

    const fetcher = ["ethers", { ethers, provider:  provider }]


    useEffect(() => {
        console.log("nfts")
        console.log(myNFTs)
    }, [myNFTs])

    if(myNFTsLoading) {
        return (
            <Loader />
        )
    }
    return (
        <>
        <NftProvider 
        //@ts-ignore
        fetcher={fetcher}>

    <Grid templateColumns='repeat(5, 1fr)' gap={6}>

        {!myNFTsLoading && myNFTs.getMyNfts.map((nft, index) => {
                const hex = stringToColor(`${nft.name}pl`);
                const rgba = hexToRgb(hex);

            return (
                <GridItem w='200px' h='200px' bg={`${hex}`} >
                <NFT address={nft.token_address} id={nft.token_id} hit={nft} />
                </GridItem>
            )
        })}
    </Grid>
        </NftProvider>
        </>
    )
}

export default Wallet;