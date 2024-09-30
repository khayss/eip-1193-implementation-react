import { createContext, useEffect, useReducer } from "react";
import { EthereumContextType } from "../@types/common";
import {
  handleAccountsChange,
  handleChainChange,
  handleConnect,
  handleDisconnect,
} from "../handlers/handlers";
import {
  ethereumReducer,
  initialEthereumState,
} from "../reducers/ethereum.reducer";

export const EthereumContext = createContext<EthereumContextType | null>(null);

export const EthereumContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [ethereumState, ethereumDispatch] = useReducer(
    ethereumReducer,
    initialEthereumState
  );
  const { ethereum } = window;
  useEffect(() => {
    if (ethereum) {
      ethereum.on("accountsChanged", handleAccountsChange(ethereumDispatch));
      ethereum.on("chainChanged", handleChainChange(ethereumDispatch));
      ethereum.on("disconnect", handleDisconnect(ethereumDispatch));
      ethereum.on("connect", handleConnect(ethereumDispatch));
    }
    return () => {
      ethereum?.removeListener(
        "accountsChanged",
        handleAccountsChange(ethereumDispatch)
      );
      ethereum?.removeListener(
        "chainChanged",
        handleChainChange(ethereumDispatch)
      );
      ethereum?.removeListener(
        "disconnect",
        handleDisconnect(ethereumDispatch)
      );
      ethereum?.removeListener("connect", handleConnect(ethereumDispatch));
    };
  }, [ethereum]);

  const handleConnectWallet = () => {};
  const handleDisconnectWallet = () => {};
  return (
    <EthereumContext.Provider
      value={{
        ...ethereumState,
        handleConnectWallet,
        handleDisconnectWallet,
      }}
    >
      {children}
    </EthereumContext.Provider>
  );
};
