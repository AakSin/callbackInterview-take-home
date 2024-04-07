# Callback Take-Home

This project involved creating a frontend interface for fetching all NFTs for a provided address. The dynamic route `[address]/gallery` provides the address to the component, which is then passed on to an async API call from `fetchEthereumAddressNfts.ts`. The response from that is used to show an error or generate a grid of individual NFT elements using the `NFTCard.tsx` component.

## Set-up

`npm run dev` for deployment on localhost.

`npm run lint` for ESLint.

`npm run build` for production build.

Update/create `SIMPLEHASH_API_KEY` in `.env.local` with your API key.

## Consideratons/Features

Emphasis was placed on proper error management. The code effectively handles and presents the users with all 3 common possible error cases currently:

-   **Bad API Key**: response provided by <a href="https://docs.simplehash.com/reference/nfts-by-owners">SimpleHash</a>.
-   **Invalid Address**: checked by <a href="https://docs.web3js.org/api/web3-validator/function/isAddress/">Web3-Utils</a>.
-   **No Static Image NFTs**: filtered by frontend.

A clean, response, grid-like UI was generated based off present design language at Callback. An additional hover component was provided to add descriptions and context to NFTs.

Initally, I had gone with playing with the dominant color of the NFT (provided by SimpleHash API) for some styling elements like the element box background color or hover box color but it made the design too cluttered and incohesive.
