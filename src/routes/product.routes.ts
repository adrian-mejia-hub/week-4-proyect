import { Router, type Request, type Response } from "express";
import pool from "../config/db.js";
import { validateProduct } from "../middlewares/validate-product.js";

const router: Router = Router();

// Controlador para crear producto
const createProduct = async (req: Request, res: Response) => {
    /*#swagger.tags = ['Menu']
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos del producto',
        required: true,
        schema: {
            name: "Agua fresca",
            description: "De Jamaica",
            price: 15,
            cost: 8,
            stock: 20
        }
      }
    */
    try {
        const { name, description, price, cost = 0, stock = 0 } = req.body;
        const result = await pool.query(
            "INSERT INTO products (name, description, price, cost, stock) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, description, price, cost, stock]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error al crear el producto:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

router.post("/menu", validateProduct, createProduct);

export default router;
