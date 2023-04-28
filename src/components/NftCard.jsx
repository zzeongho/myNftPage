import { GiLion } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
const NftCard = ({ tokenId, metadata, mintedNft, account }) => {
  const [countUp, setCountUp] = useState(59);
  const [isDone, setIsDone] = useState(false);

  const handleLikeClick = () => {
    setCountUp((p) => p + (isDone ? -1 : 1));
    setIsDone((p) => !p);
  };

  return (
    <div className="bg-primaryColor p-6 rounded-3xl">
      <div className="flex justify-between pb-2">
        <div className="flex text-sm">
          <div className="text-darkPurple">By</div>
          <div className="ml-2">0x08</div>
        </div>
        <button className="flex pt-2">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="ml-1 w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="ml-1 w-2 h-2 rounded-full bg-gray-100"></div>
        </button>
      </div>
      <div className="relative rounded-2xl border">
        {parseInt(mintedNft) < tokenId && (
          <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-2xl flex justify-center items-center text-2xl font-bold">
            Not Minted.
          </div>
        )}
        <img className="rounded-2xl" src={metadata.image} alt={metadata.name} />
      </div>
      <div className="mt-4 justify-between text-sm font-bold flex  text-gray-300">
        <div className="flex ml-2 text-gray-50">
          SpaceSuit
          <div className="pl-1">#{tokenId}</div>
        </div>
        <div className=" text-darkPurple">5.2ETH</div>
      </div>
      <div className="mt-4 text-xl flex justify-between">
        <Link to={`/${tokenId}`}>
          <button
            disabled={parseInt(mintedNft) < tokenId}
            className="text-xs font-bold rounded-full px-4 py-2 mt-4 block border-2  border-dotted"
            style={{
              background:
                "linear-gradient(90deg, rgba(99,69,237,1) 0%, rgba(224,57,253,1) 100%)",
              fontSize: "0.8rem", // Reduce font size by 20%
              letterSpacing: "-0.05em", // Adjust letter spacing for better readability
            }}
          >
            <span className="px-2">PLACE TO BID</span>
          </button>
        </Link>
        <div className="flex justify-center items-center text-sm pt-3">
          <button
            onClick={handleLikeClick}
            className={`mr-1 ${isDone ? "text-purple-500" : ""}`}
          >
            <AiOutlineHeart />
          </button>
          <div>{countUp}</div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
