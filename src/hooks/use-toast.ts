// Thin re-export so the rest of the app imports `toast` from a local,
// consistent path rather than reaching for "sonner" directly everywhere —
// makes it a one-file swap if you ever change toast libraries.

// To use toast anywhere: import { toast } from "@/hooks/use-toast" then toast("Saved successfully").
export { toast } from "sonner";
