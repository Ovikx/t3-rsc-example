import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";
import superjson from "superjson";
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "/api/trpc" })],
  transformer: superjson,
});
