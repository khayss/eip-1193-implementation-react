import { EthereumAction } from "../@types/ethereum";

export const handleAccountsChange =
  (dispatch: React.Dispatch<EthereumAction>) => (accounts: string[]) => {
    dispatch({
      type: "ACCOUNT_CHANGE_EVENT",
      payload: accounts[0],
    });
  };

export const handleChainChange =
  (dispatch: React.Dispatch<EthereumAction>) => (chainId: string) => {
    dispatch({
      type: "CHAIN_CHANGE_EVENT",
      payload: chainId,
    });
  };

export const handleDisconnect =
  (dispatch: React.Dispatch<EthereumAction>) =>
  (error: { code: number; message: string }) => {
    console.log(error.code, error.message);
    dispatch({
      type: "DISCONNECT_EVENT",
    });
  };

export const handleConnect =
  (dispatch: React.Dispatch<EthereumAction>) => (info: { chainId: string }) => {
    console.log("Connected", info);
    dispatch({
      type: "CONNECT_EVENT",
      payload: info.chainId,
    });
  };
