import { useEffect, useState } from 'react'
import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'

import Wallet from '../components/Wallet/Wallet';

import { useConnect, useAccount, defaultChains, defaultL2Chains } from 'wagmi'

import Loader from '../components/elements/Loader/Loader'
import { withApollo } from '../lib/apollo';
import { isLoggedIn, clearAuthTokens } from 'axios-jwt'

// import gql from 'graphql-tag';
// import { withApollo } from '../lib/apollo';
// import { useQuery, useLazyQuery} from '@apollo/react-hooks';

const Home: NextPage = () => {
  const [isLogged, setIsLogged] = useState(typeof window === 'undefined' ? false : isLoggedIn());

  const [{ data: accountData, error: accountError, loading: accountLoading }] = useAccount({
    fetchEns: true,
  })

  useEffect(() => {
      console.log(accountData)
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>MintHunt.io</title>
        <meta name="description" content="MintHunt - Powered by Trove-Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {isLogged ? 
        <>
        <h1>You are logged in.</h1>
        <Wallet />
        </>
        :
        <div>
            <h1>You are not logged in.</h1>
        </div>
      }
      </main>
    </div>
  )
}

export default withApollo(Home);
