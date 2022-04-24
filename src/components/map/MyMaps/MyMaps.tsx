import React, { useEffect, useState } from 'react';
import { useConnect, useAccount, defaultChains, defaultL2Chains } from 'wagmi'
import Loader from '../../elements/Loader/Loader'
import { useNft } from "use-nft"
import { Box, Text } from '@chakra-ui/react';
import { useOnChainNFT } from '../../../lib/wagmi/hooks';
import NFT from '../../NFT/NFT';
import { data as localhostData } from '../../../deployments/localhost';

const MyMaps = () => {

    const { tokensByOwner } = useOnChainNFT();

    const [{ data: accountData, error: accountError, loading: accountLoading }] = useAccount({
        fetchEns: true,
      })

    const [maps, setMaps] = useState();
    

    useEffect(() => {
        const getTokens = async () => {
            const resullt = await tokensByOwner({ _owner: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" })
            console.log(resullt)
            setMaps(resullt)
        }
        if(accountData?.address) {
            getTokens()
        }
    }, [accountLoading])

    return(
    <>
      <Box>
        {JSON.stringify(maps)}
        {maps && <NFT address={localhostData.contracts.onChainNFT.address} id={maps[0]} />}
      </Box>

    </>
    )
}

export default MyMaps;