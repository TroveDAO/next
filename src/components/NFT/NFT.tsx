import React, { useEffect } from 'react';
import { useConnect, useAccount, defaultChains, defaultL2Chains } from 'wagmi'
import Loader from '../elements/Loader/Loader'
import { useNft } from "use-nft"
import { Box, Text } from '@chakra-ui/react';

const NFT = (props) => {
    const { address, id, hit } = props;
    const { loading, error, nft } = useNft(
        address,
        id
      )

      useEffect(() => {
        console.log(nft)
      }, [nft])
      

      useEffect(() => {
        console.log(error)
      }, [error])

      if (loading) return <Loader />

      if (error) return <div></div>


    return(
    <>
      <Box>
       <Text>{nft.name}</Text> 
        <img src={nft.image} alt="" />
        {/* <p>{JSON.stringify(nft)}</p> */}
      </Box>

    </>
    )
}

export default NFT;