import { useContext } from "react";
import { EthereumContext } from "../contexts/ethereum.context";

export const useEthereum = () => {
  const context = useContext(EthereumContext);
  if (!context) {
    throw new Error("useEthereum must be used within an EthereumProvider");
  }
  return context;
};