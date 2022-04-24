import React, { useEffect, useState } from 'react';
import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Explorer.module.css'
import { useTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'

import { useConnect, useAccount, defaultChains, defaultL2Chains } from 'wagmi'

import Explorer from '../components/explorer/Explorer/Explorer';
import { useQuery, useLazyQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';

const ExplorerPage: NextPage = () => {
  // const [{ data, error, loading }, sendTransaction] = useTransaction({
  //   request: {
  //     to: '0x0FfCfcC9EB64597c1522b5e4507020Ccc29054e5',
  //     value: BigNumber.from('10000000000000000'), // 1 ETH
  //   },
  // })

  // const handleClick = () => {
  //   sendTransaction({ to: "0x0FfCfcC9EB64597c1522b5e4507020Ccc29054e5", value: utils.parseEther("0.01") })
  // }

  const [{ data: accountData, error: accountError, loading: accountLoading }] = useAccount({
    fetchEns: true,
  })

  const GET_ESCHESTS = gql`
query esChests($topLeftLat: Float!, $topLeftLng: Float!, $bottomRightLat: Float!, $bottomRightLng: Float!) {
  esChests(topLeftLat: $topLeftLat, topLeftLng: $topLeftLng, bottomRightLat: $bottomRightLat, bottomRightLng: $bottomRightLng) {
     _id
     layerId
     entityId
     name
     entityType
     treasureType
     geohash
     vaultId
  }
}
`;

const [locationView, setLocationView] = useState({
  bottomRightLat: 50.6947835623981,
  bottomRightLng: -4.298977126489433,
  topLeftLat: 55.84454044023525,
  topLeftLng: -12.736477126489433,
})

const { loading:entitiesLoading, error:entitiesError, data:entities } = useQuery(GET_ESCHESTS, {
  variables: { 
    topLeftLat: locationView.topLeftLat,
    topLeftLng: locationView.topLeftLng,
    bottomRightLat: locationView.bottomRightLat,
    bottomRightLng: locationView.bottomRightLng,
  } }
);

useEffect(() => {
  console.log(entities)
},[entities])

useEffect(() => {
  console.log(entitiesError)
}, [entitiesError])



  return (
    <div className={styles.container}>
      <Head>
        <title>MintHunt.io</title>
        <meta name="description" content="MintHunt - Powered by Trove-Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Explorer entities={entities} entitiesLoading={entitiesLoading} entitiesError={entitiesError} locationView={locationView} setLocationView={setLocationView} />
    </div>
  )
}

export default withApollo(ExplorerPage);
