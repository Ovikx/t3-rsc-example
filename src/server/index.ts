import { z } from "zod";
import { procedure, router } from "./trpc";

export const appRouter = router({
  uppercaseString: procedure.input(z.string()).query(async (opts) => {
    return opts.input.toUpperCase();
  }),
});

export type AppRouter = typeof appRouter;
export const caller = appRouter.createCaller({});
