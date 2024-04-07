import Image from 'next/image';
import React from 'react';
import HoverDesc from './HoverDesc';

interface Props {
    imageUrl: string;
    name: string;
    contractAddress: string;
    tokenId: string;
    description: string;
}

const NFTCard = (props: Props) => {
    return (
        <div className="w-1/2 lg:w-1/3">
            <a
                href={`https://opensea.io/assets/ethereum/${props.contractAddress}/${props.tokenId}`}
                target="_blank"
                rel="noreferrer"
                // group used for group-hover for HoverDesc
                className="group flex flex-col items-center justify-center m-4 p-4 text-center hover:bg-stone-800"
            >
                <Image
                    src={props.imageUrl}
                    alt={props.name}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="rounded-3xl w-full object-cover h-fit mb-6"
                ></Image>

                <h2 className="text-wrap w-9/12">{props.name}</h2>
                {/* toggles between visibily when the whole group is hovered on */}
                <div className="hidden group-hover:block">
                    <HoverDesc description={props.description}></HoverDesc>
                </div>
            </a>
        </div>
    );
};

export default NFTCard;
