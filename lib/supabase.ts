import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUP_URL as string,
  process.env.NEXT_PUBLIC_SUP_KEY as string
);