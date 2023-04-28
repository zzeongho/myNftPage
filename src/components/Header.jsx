import { useEffect, useState } from "react";
import { GiLion } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from "axios";
import { BiWallet } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";

const Header = ({ account, setAccount }) => {
  const [coinPrice, setCoinPrice] = useState();
  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
      );
      setCoinPrice([
        { symbol: "BTC", price: response.data[0].trade_price },
        { symbol: "ETH", price: response.data[1].trade_price },
        { symbol: "MATIC", price: response.data[2].trade_price },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCoinPrice();
  }, []);
  return (
    <>
      <header className="max-w-screen-xl mx-auto p-4 flex justify-between font-bold ">
        <Link>
          <div className="flex items-center text-gray-50">
            <GiLion size={28} />
            <div className="ml-1 text-xl">Ble-chess</div>
          </div>
        </Link>

        <div className="flex items-center">
          {coinPrice && (
            <div className="flex tiems-center">
              {coinPrice && (
                <ul className="flex text-gray-100 text-sm">
                  {coinPrice.map((v, i) => {
                    return (
                      <li key={i} className="ml-2">
                        {v.symbol}: {(v.price / 1000).toLocaleString()}KW
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
          {account ? (
            <div className="flex items-center p-2 bg-gray-800 rounded-full ml-4">
              <div className="bg-primaryColor w-6 h-6 rounded-full flex justify-center items-center">
                <AiFillStar />
              </div>
              <div>
                {account.substring(0, 4)}...{account.slice(-4)}
              </div>
            </div>
          ) : (
            <button
              onClick={onClickAccount}
              className="flex items-center p-2 bg-gray-800 rounded-full ml-4"
            >
              <div>
                <BiWallet />
              </div>
              <div>
                <div className="ml-1">Connect</div>
              </div>
            </button>
          )}
        </div>
      </header>
      <div className=" bg-primaryColor m-10 p-6 rounded-xl mx-40 mt-2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="font-bold text-xl transform -skew-x-12">BLCH</div>

            <div
              className="bg-darkBlue p-2 flex ml-20 items-center rounded-2xl "
              style={{ border: "2px dotted gray" }}
            >
              <span className="text-white pr-2">
                <VscSearch size={14} />
              </span>
              <input
                type="text"
                placeholder="Search Artwork"
                className="bg-darkBlue text-xs text-white placeholder-white focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 text-darkPurple">Home</div>
            <div className="mr-4">Explore</div>
            <div className="mr-4">Ranking</div>
            <div className="mr-4">Create</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
