import { boolean, strict, TypeOf } from 'io-ts';
import { userEmail } from './userEmail.valueObject';

export const userEmailContactInfo = strict({
  email: userEmail,
  isVerified: boolean,
});

export type UserEmailContactInfo = TypeOf<typeof userEmailContactInfo>;

export type VerifiedUserEmailContactInfo = UserEmailContactInfo & {
  readonly isVerified: true;
};
