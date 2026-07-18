// Picks the server-only var when running in Node, falls back to the public
// build-time var for the browser. Follows the pattern: pair NEXT_PUBLIC_X
// (browser) with X (server/Docker) when the values differ per environment.
const serverOrClient = (serverVar: string | undefined, clientVar: string | undefined) =>
  typeof window === "undefined" ? (serverVar ?? clientVar ?? "") : (clientVar ?? "");

const config = {
  BASE_URL: serverOrClient(process.env.IPRO_FIX_BASE_URL, process.env.NEXT_PUBLIC_IPRO_FIX_BASE_URL)
};

export default config;
