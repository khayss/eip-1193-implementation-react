import { WalletState } from "../@types/common";
import { EthereumState } from "../@types/ethereum";
import { EthereumAction } from "../@types/ethereum";

const initialWalletState: WalletState = {
  account: null,
};

export const initialEthereumState: EthereumState = {
  provider: null,
  wallet: initialWalletState,
};
export const ethereumReducer = (
  state: EthereumState,
  action: EthereumAction
): EthereumState => {
  switch (action.type) {
    case "SET_PROVIDER":
      return { ...state, provider: action.payload };
    default:
      return state;
  }
};
