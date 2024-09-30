import { WalletState } from "./common";
import { Eip1193Provider } from "./eip-1193-provider";

export interface EthereumState {
  provider: Eip1193Provider | null | undefined;
  wallet: WalletState;
}

export type EthereumAction =
  | SetProviderAction
  | DisconnectEventAction
  | ConnectEventAction
  | ChainChangeEventAction
  | AccountChangeEventAction;

interface SetProviderAction {
  type: "SET_PROVIDER";
  payload: Eip1193Provider;
}

interface DisconnectEventAction {
  type: "DISCONNECT_EVENT";
}

interface ConnectEventAction {
  type: "CONNECT_EVENT";
  payload: string;
}

interface ChainChangeEventAction {
  type: "CHAIN_CHANGE_EVENT";
  payload: string;
}

interface AccountChangeEventAction {
  type: "ACCOUNT_CHANGE_EVENT";
  payload: string;
}
