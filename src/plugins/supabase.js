import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://flsuhobogukprkfyoefc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsc3Vob2JvZ3VrcHJrZnlvZWZjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODYyOTA0NCwiZXhwIjoyMDA0MjA1MDQ0fQ.a_8V4KHFYdSEEoPXPDEUJzInBbOXzDfjzj9-kyX0jSY"
);
