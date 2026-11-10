import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
export declare const productSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    price: z.ZodNumber;
    cost: z.ZodOptional<z.ZodNumber>;
    stock: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const validateProduct: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validate-product.d.ts.map