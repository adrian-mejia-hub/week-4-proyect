import { z } from "zod";
export const productSchema = z.object({
    name: z.string().min(1, "El nombre no puede estar vacío"),
    description: z.string().min(1, "La descripción no puede estar vacía"),
    price: z.number().positive("El precio debe ser mayor a 0"),
    cost: z.number().min(0, "El costo debe ser mayor o igual a 0").optional(),
    stock: z.number().int("El stock debe ser un entero").min(0, "El stock debe ser mayor o igual a 0").optional(),
});
export const validateProduct = (req, res, next) => {
    const result = productSchema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json(result.error);
        return;
    }
    next();
};
//# sourceMappingURL=validate-product.js.map