import { supabase } from '../supabase';
import type { NewLead } from '../types/supabase';
import { ApiError } from './errors';

export async function createLead(lead: NewLead) {
  try {
    const { error } = await supabase
      .from('leads')
      .insert([lead])
      .single();

    if (error) {
      throw new ApiError(
        error.message,
        error.code,
        error.details
      );
    }

    return true;
  } catch (error: any) {
    // Handle Supabase errors
    if (error?.code === '23505') {
      throw new ApiError(
        "This email is already registered",
        error.code,
        error.details
      );
    }
    throw error;
  }
}