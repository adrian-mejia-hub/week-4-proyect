import express, {} from "express";
import swaggerRouter from "./routes/swagger.router.js";
import productRoutes from "./routes/product.routes.js";
import cors from "cors";
import pool from "./config/db.js";
const port = process.env.PORT || 3000;
const app = express();
// Middlewares 
app.use(express.json());
app.use(cors());
app.use("/api/docs", swaggerRouter);
app.use("/api", productRoutes);
app.get("/", (req, res) => {
    /*#swagger.tags = ['Tests']*/
    res.json({
        status: "Server online",
        version: "1.0.0"
    });
});
app.get("/api/menu", async (req, res) => {
    /*#swagger.tags = ['Menu']*/
    try {
        const result = await pool.query("SELECT * FROM products");
        res.json(result.rows);
    }
    catch (error) {
        console.error("Error al obtener el menú:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map