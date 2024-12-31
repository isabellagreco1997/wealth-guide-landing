import { supabase } from '../supabase';
import type { NewLead } from '../types/supabase';

export async function createLead(lead: NewLead) {
  const { error } = await supabase
    .from('leads')
    .insert([lead]);

  if (error) {
    throw error;
  }

  return true;
}