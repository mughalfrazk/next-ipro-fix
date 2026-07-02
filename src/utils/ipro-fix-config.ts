// Only public (NEXT_PUBLIC_*) config belongs here — this module is imported by
// the axios client, which runs on both the server and the browser. AUTH_SECRET
// is intentionally NOT exposed here; NextAuth reads it from the environment.
const config = {
  NEXT_PUBLIC_IPRO_FIX_BASE_URL: process.env.NEXT_PUBLIC_IPRO_FIX_BASE_URL ?? ""
};

export default config;
