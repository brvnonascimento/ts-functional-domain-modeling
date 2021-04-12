import { strict, string, TypeOf } from 'io-ts';
import {
  userEmailContactInfo,
  VerifiedUserEmailContactInfo,
} from './userEmailContactInfo.valueObject';

const user = strict({
  id: string,
  name: string,
  emailContactInfo: userEmailContactInfo,
});

export type User = TypeOf<typeof user>;

export type VerifiedUser = User & {
  readonly emailContactInfo: VerifiedUserEmailContactInfo;
};

export const changeUserName = (
  user: VerifiedUser,
  newUserName: string
): VerifiedUser => ({
  ...user,
  name: newUserName,
});
