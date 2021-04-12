import { string, Branded, TypeOf, brand } from 'io-ts';
import validator from 'validator';

type UserEmailBrand = {
  readonly UserEmail: unique symbol;
};

export const userEmail = brand(
  string,
  (email): email is Branded<string, UserEmailBrand> => validator.isEmail(email),
  'UserEmail'
);

export type UserEmail = TypeOf<typeof userEmail>;
