import React from 'react';
import GreyedCard from '@/components/GreyedCard';
// import { fetchEthereumAddressNfts } from '@/lib/fetchEthereumAddressNfts';

function App() {
    const requirementList = [
        'User Input: The application should allow users to input an Ethereum address. Upon submission, the application should fetch and display the NFTs owned by that address.',
        'Fetching NFT Data: Simplehash is a popular NFT API. Use one of their endpoints (https://docs.simplehash.com/reference/overview) to fetch the address\'s NFTs. Ensure you handle the API request asynchronously and manage loading states appropriately. The NFT’s contract address and token ID should be returned by Simplehash, which should be used in generating the OpenSea URL.',
        'Displaying NFTs: Present the NFTs in a responsive grid layout. Each item in the grid should display the NFT\'s image and name.',
        'Error Handling: Implement error handling for the API request, including displaying a user-friendly message if no NFTs are found or if the Ethereum address is invalid.',
        'Styling and Responsiveness: The application should be styled in a clean and accessible manner, as well as being responsive to the user\'s device.',
        'Other Requirements',
        'Display a maximum of 50 of the address\'s NFTs.',
        'Only display NFTs that have a media trait as a static image (no GIFs or videos).',
        'Fonts and some styling components have been provided. Use these as you see fit.',
        'constants.ts has our Simplehash test API key and some Ethereum addresses you can use for testing.',
        'Adhere to the TypeScript, ESLint, and Prettier configurations we\'ve already set up in the repo.',
    ]

    const evalCriteria = [
        'Functionality: The core functionality works as described, with the ability to input an address and fetch and display the NFTs.',
        'Code Quality: The code is well-organized, clean, and follows best practices for React development.',
        'Error Handling: The application gracefully handles and displays errors.',
        'UI/UX Design: The application feels close to our web and mobile\'s apps design, and is user-friendly with a responsive design that provides a good experience across devices.',
        'Creativity: Any additional features or creative solutions that enhance the user experience.',
    ]

    const submissionInstructions = [
        'Please share your GitHub repository containing your project with daniel@callback.xyz. Include a README file with:',
        'An overview of the project.',
        'Instructions on how to set up and run your application.',
        'A brief explanation of any special features or considerations.',
    ]

    return (
        <div className="min-h-dvh">
            <div className="text-white p-6">
                <h1 className="text-4xl">
                    Hello! This is Callback's take home assignment. Thank you for taking the time to read and code this.
                </h1>

                <GreyedCard classes='my-4'>
                    <h2 className="text-2xl mb-2">
                        Objective:
                    </h2>

                    <p className="text-lg">
                        Your task is to create a React webpage that displays all the NFTs owned by a given Ethereum address (e.g. 0x3F5B1C698D8709Ad1Df6abdB7b836507948CE296) on the Ethereum blockchain.
                        <br />
                        The NFTs should be presented in a grid-like fashion, showcasing the image of each NFT along with the name displayed under the image.
                        <br />
                        Clicking on the image or name should link to the NFT's OpenSea page, which is given by https://opensea.io/assets/ethereum/&#123;contractAddress&#125;/&#123;tokenId&#125;.
                    </p>
                </GreyedCard>

                <GreyedCard classes='my-4'>
                    <h2 className="text-2xl">
                        Requirements:
                    </h2>
                    {
                        requirementList.map((reqText, idx) => (
                            <p className="my-1" key={idx}>
                                {reqText}
                            </p>
                        ))
                    }
                </GreyedCard>
                
                <GreyedCard classes='my-4'>
                    <h2 className="text-2xl">
                        Evaluation Criteria:
                    </h2>
                    {
                        evalCriteria.map((criteria, idx) => (
                            <p className="my-1" key={idx}>
                                {criteria}
                            </p>
                        ))
                    }
                </GreyedCard>

                <GreyedCard classes='my-4'>
                    <h2 className="text-2xl">
                        Submission Instructions:
                    </h2>
                    {
                        submissionInstructions.map((instruction, idx) => (
                            <p className="my-1" key={idx}>
                                {instruction}
                            </p>
                        ))
                    }
                </GreyedCard>

            </div>
        </div>
    );
}

export default App;
