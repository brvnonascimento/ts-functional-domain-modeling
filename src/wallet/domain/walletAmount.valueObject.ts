import { brand, Branded, number, TypeOf, Validation } from 'io-ts';

type WalletAmountBrand = {
  readonly WalletAmount: unique symbol;
};

const isPositive = (amount: number): boolean => amount >= 0;

export const walletAmount = brand(
  number,
  (amount): amount is Branded<number, WalletAmountBrand> => isPositive(amount),
  'WalletAmount'
);

export type WalletAmount = TypeOf<typeof walletAmount>;

export const createWalletAmount = (
  amount: number
): Validation<Branded<number, WalletAmountBrand>> =>
  walletAmount.decode(amount);
