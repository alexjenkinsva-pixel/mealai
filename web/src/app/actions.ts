'use server';

import { supabase } from '@/lib/supabase';

export async function pingHealthCheck() {
  const { error } = await supabase.from('health_check').insert({});
  if (error) throw new Error(error.message);
  return 'ok';
}
