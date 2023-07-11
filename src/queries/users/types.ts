import type * as i from 'types';

export type User = {
  id: string;
  email: string;
  name: string;
  created_at: string;
};

export type CreateUserProps = {
  email: string;
  name: string;
};

export type UpdateUserProps = {
  email: string;
  values: Partial<i.User>;
};
