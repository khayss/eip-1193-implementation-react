import { EthereumState } from "./ethereum";

export interface EthereumContextType extends EthereumState {
  handleConnectWallet: () => void;
  handleDisconnectWallet: () => void;
}

export interface WalletState {
  account: string | null;
}
