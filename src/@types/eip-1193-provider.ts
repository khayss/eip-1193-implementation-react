interface RequestArguments {
  method: string;
  params?: unknown[] | Record<string, unknown>;
}

export interface Eip1193Provider {
  // Request methods
  request(args: RequestArguments): Promise<unknown>;

  // Event emitters
  on(event: "accountsChanged", listener: (accounts: string[]) => void): void;
  on(event: "chainChanged", listener: (chainId: string) => void): void;
  on(
    event: "disconnect",
    listener: (error: { code: number; message: string }) => void
  ): void;
  on(event: "connect", listener: (info: { chainId: string }) => void): void;

  // Remove event listeners
  removeListener(
    event: "accountsChanged",
    listener: (accounts: string[]) => void
  ): void;
  removeListener(
    event: "chainChanged",
    listener: (chainId: string) => void
  ): void;
  removeListener(
    event: "disconnect",
    listener: (error: { code: number; message: string }) => void
  ): void;
  removeListener(
    event: "connect",
    listener: (info: { chainId: string }) => void
  ): void;
}
