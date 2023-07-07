import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://flsuhobogukprkfyoefc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsc3Vob2JvZ3VrcHJrZnlvZWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2MjkwNDQsImV4cCI6MjAwNDIwNTA0NH0.w3QMLkFwNc8_2YMf4WEpRV4XVdwsC80qcyH2TG_hWkw"
);
