import { useEffect, useState } from "react";
import NftCard from "./NftCard";
import axios from "axios";

const Nfts = ({ mintedNft, account }) => {
  const [nfts, setNfts] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      for (let i = 0; i < 4; i++) {
        const tokenId = i + 1 + (p - 1) * 4;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        nftArray.push({ tokenId, metadata: response.data });
      }

      setNfts(nftArray);
      setCurrentPage(p);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNfts(1);
  }, []);

  const prevPage = () => {
    if (currentPage > 1) {
      getNfts(currentPage - 1);
    }
  };

  const nextPage = () => {
    getNfts(currentPage + 1);
  };

  return (
    <div className="max-w-screen-xl mx-40 pt-4">
      <div className="flex justify-between">
        <div className="flex">
          <div className=" font-bold text-lg">Top collections</div>
        </div>
        <div className="flex">
          <div
            className="mr-3 flex justify-center items-center border-4 p-2 w-10 h-10 rounded-md border-purple-700 bg-primaryColor hover:bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 cursor-pointer"
            onClick={prevPage}
          >
            <button className="text-gray-500 hover:text-white font-bold">
              ←
            </button>
          </div>
          <div
            className="mr-3 flex justify-center items-center border-4 p-2 w-10 h-10 rounded-md border-purple-700 bg-primaryColor hover:bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 cursor-pointer"
            onClick={nextPage}
          >
            <button className="text-gray-500 hover:text-white font-bold">
              →
            </button>
          </div>
        </div>
      </div>

      <ul className="mt-8 grid grid-cols-1 xl:grid-cols-4 justify-items-center gap-8 overflow-hidden">
        {nfts ? (
          nfts.map((v, i) => {
            return (
              <NftCard
                key={i}
                tokenId={v.tokenId}
                metadata={v.metadata}
                mintedNft={mintedNft}
                account={account}
              />
            );
          })
        ) : (
          <div>로딩중...</div>
        )}
      </ul>
    </div>
  );
};

export default Nfts;
