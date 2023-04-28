import { useEffect, useState } from "react";

const ranNum = Math.floor(Math.random() * 100 + 1);
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;
const Intro = ({ totalNft, mintedNft, myNft }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-tr from-transparent to-violet-950 pt-10 m-20">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-center ">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-9xl truncate opacity-40">
            SpaceSuit
          </div>
          <div className="relative pr-32 pt-10">
            <img
              className=" absolute w-40 h-40 transform skew-x-12 border-4 border-purple-500 hover:scale-110"
              src={imgSrc}
              alt="NFT"
            />

            <div className="top-0 w-30 h-30 rounded-full bg-white text-gray-950 flex justify-center items-center">
              Loading...
            </div>
          </div>
          <div className=" pl-40">
            <div className="mt-4 ml-10 text-2xl font-bold items-center">
              SpaceSuit
            </div>
            <div className="mt-2 font-bold text-4xl text-gray-300 m-14">
              Trade NFTs and earn
              <br /> your BLCH token
              <button
                className="block text-sm rounded-full p-2 mt-4 ml-60"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(99,69,237,1) 0%, rgba(224,57,253,1) 100%)",
                }}
              >
                BLCH Airdrop →
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="bg-primaryColor mx-10 p-2 items-center  border-l-4 border-purple-700 rounded-r-lg rounded-l-2xl ">
            <div>총 NFT</div>
            <div className="text-darkPurple">{totalNft}</div>
          </div>
          <div className="bg-primaryColor mx-10 p-2 items-center border-l-4 border-purple-700 rounded-r-lg rounded-l-2xl">
            <div>발행된 NFT</div>
            <div className="text-darkPurple">{mintedNft}</div>
          </div>
          <div className="bg-primaryColor mx-10 p-2 items-center border-l-4 border-purple-700 rounded-r-lg rounded-l-2xl">
            <div>보유 NFT</div>
            <div className="text-darkPurple">{myNft}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
