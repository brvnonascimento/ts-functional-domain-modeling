import { strict, string, TypeOf } from 'io-ts';
import { walletAmount } from './walletAmount.valueObject';

export const wallet = strict({
  id: string,
  amount: walletAmount,
});

export type Wallet = TypeOf<typeof wallet>;
