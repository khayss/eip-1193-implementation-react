import { WalletState } from "../@types/common";

export const initialWalletState: WalletState = {
  account: null,
  isConnected: false,
  isError: false,
  errorMessage: null,
  isConnecting: false,
};
