import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  dataset: import.meta.env.VITE_REACT_APP_DATASET,
  apiVersion: import.meta.env.VITE_REACT_APP_API_VERSION,
  useCdn: true,
});
