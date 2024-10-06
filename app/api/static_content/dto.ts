import { z } from "zod";

const createSchema = z.object({
  key: z.string(),
  value: z.string(),
});

const dto = { createSchema };
export default dto;
