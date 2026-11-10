import pool from "../config/db.js";

export const getAllCustomers = async () => {
    const result = await pool.query("SELECT * FROM customers ORDER BY id ASC");
    return result.rows;
};

export const getCustomerById = async (id: number) => {
    const result = await pool.query("SELECT * FROM customers WHERE id = $1", [id]);
    return result.rows[0] ?? null;
};

export const insertCustomer = async (name: string, email: string, phone: string) => {
    const result = await pool.query(
        "INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
        [name, email, phone]
    );
    return result.rows[0];
};

export const updateCustomer = async (id: number, name: string, email: string, phone: string) => {
    const result = await pool.query(
        "UPDATE customers SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *",
        [name, email, phone, id]
    );
    return result.rows[0] ?? null;
};

