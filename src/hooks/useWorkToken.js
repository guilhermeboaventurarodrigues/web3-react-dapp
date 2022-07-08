import UseWeb3 from "./useWeb3";
import WorkToken from "../contracts/worktoken.json";

const useToken = () => {
  const { contract } = UseWeb3({
    contractABI: WorkToken.abi,
    contractAddress: WorkToken.address,
  });

  return { contract };
};

export default useToken;
