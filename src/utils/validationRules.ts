import joi from "joi";

export const validationRules : Record<string, joi.ObjectSchema> = {
  "/users/login": joi.object({
    username: joi.string().min(3).required(),
    password: joi.string().required(),
  }),

  "/users/form":joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    password: joi.string().alphanum().required(),
    age:joi.number().required(),
    email:joi.string().email().required(),
    address:joi.string().alphanum().required()
  })
};
