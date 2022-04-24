import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'

import { useConnect, useAccount, defaultChains, defaultL2Chains } from 'wagmi'
import { useOnChainNFT } from '../lib/wagmi/hooks';

import Loader from '../components/elements/Loader/Loader'
// import { NftGallery } from 'react-nft-gallery';
// import { useMoralis, useNFTBalances } from "react-moralis";
import { useEffect } from 'react'
import { NETWORKS } from "../constants";


import MyMaps from '../components/map/MyMaps/MyMaps'

const Home: NextPage = () => {
  // const [{ data, error, loading }, sendTransaction] = useTransaction({
  //   request: {
  //     to: '0x0FfCfcC9EB64597c1522b5e4507020Ccc29054e5',
  //     value: BigNumber.from('10000000000000000'), // 1 ETH
  //   },
  // })

  // const handleClick = () => {
  //   sendTransaction({ to: "0x0FfCfcC9EB64597c1522b5e4507020Ccc29054e5", value: utils.parseEther("0.01") })
  // }

  // const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  // const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();

  /// 📡 What chain are your contracts deployed to?
  const initialNetwork = NETWORKS.localhost; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

  const DEBUG = true;
  const NETWORKCHECK = true;
  const USE_BURNER_WALLET = true; // toggle burner wallet feature
  const USE_NETWORK_SELECTOR = false;

  const { mint } = useOnChainNFT();

  const [{ data: accountData, error: accountError, loading: accountLoading }] = useAccount({
    fetchEns: true,
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>MintHunt.io</title>
        <meta name="description" content="MintHunt - Powered by Trove-Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Hello {accountData && accountData.address}
        </h3>

        {accountLoading && <Loader />}


        <Button onClick={async () => {
          await mint({_userText : "test"})
        }}>Mint</Button>


        <MyMaps />

        {/* <div className={styles.grid}>
          <Link href='https://twitter.com/ilyxium' isExternal>
            <Button
              backgroundColor="#BB86FC"
              borderRadius="25px"
              margin={2.5}
              _hover={{
                bg: '#121212'
              }}
              _active={{
                bg: '#121212'
              }}
              onClick={() => ""}
            >
              <p>Follow me on twitter</p>
            </Button>
          </Link>
          

          <Button
              backgroundColor="#32CD32"
              borderRadius="25px"
              margin={2.5}
              _hover={{
                bg: '#121212'
              }}
              _active={{
                bg: '#121212'
              }}
              onClick={async () => await sendTransaction()}
            >
              <p>Donate some ETH</p>
            </Button>
        </div> */}
      </main>
    </div>
  )
}

export default Home
