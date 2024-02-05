import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY


export const supabase = createClient(
  supabaseUrl as string,
  supabaseAnonKey as string
);

export const supabaseAdmin = createClient(
  supabaseUrl as string,
  supabaseServiceRoleKey as string
);
