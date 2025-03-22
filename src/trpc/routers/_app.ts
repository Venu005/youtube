import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
    // keep adding your functions here
  bye: baseProcedure
    .input(
      z.object({
        name: z.string(),
        age: z.number().min(0).max(100),
      })
    )
    .query((opts) => {
      return {
        greeting: `bye ${opts.input.name} ${opts.input.age}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
