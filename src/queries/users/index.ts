import type * as i from 'types';
import { PostgrestError } from '@supabase/supabase-js';

import { supabase } from 'src/utils';

export async function getUserByEmail(email: string): Promise<i.User | null> {
  const { data } = await supabase
    .from('users')
    .select('id, email, name, finished_onboarding, group, created_at')
    .eq('email', email)
    .single();

  return data;
}

export async function createUser({
  email,
  name,
}: i.CreateUserProps): Promise<{ data: i.User | null; error: PostgrestError | null }> {
  const { data, error } = await supabase
    .from('users')
    .insert({
      email,
      name,
    })
    .select('id, email, name, finished_onboarding, group, created_at');

  return {
    data: data as unknown as i.User,
    error,
  };
}

export async function updateUser({
  email,
  values,
}: i.UpdateUserProps): Promise<{ data: i.User | null; error: PostgrestError | null }> {
  const { data, error } = await supabase
    .from('users')
    .update(values)
    .eq('email', email)
    .select('id, email, name, finished_onboarding, group, created_at');

  return {
    data: data as unknown as i.User,
    error,
  };
}
