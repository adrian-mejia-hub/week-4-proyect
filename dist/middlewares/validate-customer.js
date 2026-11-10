import { z } from "zod";
const customerSchema = z.object({
    name: z.string().min(1, "El nombre no puede estar vacío"),
    email: z.string().email("El email no es válido"),
    phone: z.string().min(1, "El teléfono no puede estar vacío").optional(),
});
export const validateCustomer = (req, res, next) => {
    const result = customerSchema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json(result.error);
        return;
    }
    next();
};
//# sourceMappingURL=validate-customer.js.map