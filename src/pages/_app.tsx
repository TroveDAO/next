import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { WagmiProvider } from 'wagmi'
// import { WalletProvider } from '../context/wallet-provider'
import { Page } from '../components/Page'
import { theme } from '../styles/theme'
// import { MoralisProvider } from "react-moralis";
import { NextDataHooksProvider } from 'next-data-hooks';
import provider, { getEthersProvider } from '../lib/provider';
import ethers from "ethers"
import { NftProvider } from "use-nft"

function MyApp({ Component, pageProps }: AppProps) {
  const { children, ...rest } = pageProps;
  const fetcher = ["ethers", { ethers, provider:  provider }]
  return (
    <WagmiProvider autoConnect>
    {/* <MoralisProvider appId="zLATrm1EogMtgfrj1CVUOTzIrdgJFQSmBvM7LU3L" serverUrl="https://0mnygzcrl18o.usemoralis.com:2053/server"> */}
    <NftProvider 
        //@ts-ignore
        fetcher={fetcher}>
        <ChakraProvider theme={theme}>
          <Page>
          <NextDataHooksProvider {...rest}>
            <Component {...pageProps} />
          </NextDataHooksProvider>
          </Page>
        </ChakraProvider>
      {/* </MoralisProvider> */}
      </NftProvider>
    </WagmiProvider>
  )
}

export default MyApp
