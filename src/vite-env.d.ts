/// <reference types="vite/client" />

import { Eip1193Provider } from "./@types/eip-1193-provider";

declare global {
  interface Window {
    ethereum: Eip1193Provider | undefined | null;
  }
}
