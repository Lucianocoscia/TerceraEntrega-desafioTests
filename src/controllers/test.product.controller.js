import ContenedorMongo from "../classes/ContenedorMongo.js";

import { Product } from "../models/product.model.js";

const productApi = new ContenedorMongo(Product);

const create = async (req, res, next) => {
  try {
    const response = await productApi.save(req.body);

    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    await productApi.update(id, req.body);
    res.status(200).send("producto actualizado");
  } catch (err) {
    next(err);
  }
};

const deleteDocument = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productApi.delete(id);

    res.status(200).send("producto eliminado");
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const response = await productApi.getAll();

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

export const testController = {
  create,
  update,
  deleteDocument,
  getAll,
};
