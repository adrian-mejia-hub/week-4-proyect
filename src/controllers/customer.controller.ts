import type { Request, Response } from "express";
import {
    getAllCustomers,
    getCustomerById,
    insertCustomer,
    updateCustomer,
} from "../models/customer.model.js";

export const getAll = async (_req: Request, res: Response) => {
    try {
        const customers = await getAllCustomers();
        res.json(customers);
    } catch (error) {
        console.error("Error al obtener clientes:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const customer = await getCustomerById(Number(req.params.id));
        if (!customer) {
            res.status(404).json({ error: "Cliente no encontrado" });
            return;
        }
        res.json(customer);
    } catch (error) {
        console.error("Error al obtener cliente:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const { name, email, phone } = req.body;
        const customer = await insertCustomer(name, email, phone);
        res.status(201).json(customer);
    } catch (error) {
        console.error("Error al crear cliente:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const { name, email, phone } = req.body;
        const customer = await updateCustomer(Number(req.params.id), name, email, phone);
        if (!customer) {
            res.status(404).json({ error: "Cliente no encontrado" });
            return;
        }
        res.json(customer);
    } catch (error) {
        console.error("Error al actualizar cliente:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

