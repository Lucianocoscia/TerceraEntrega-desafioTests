import ContenedorMongo from "../classes/ContenedorMongo.js";

import { Product } from "../models/product.model.js";

const productApi = new ContenedorMongo(Product);

const create = async ({ data }) => {
  try {
    const response = await productApi.save(data);
    return response;
    // res.status(201).json(response);
  } catch (err) {
    console.log({ Error: err });
    throw "Error creating product";
  }
};

const update = async ({ id, data }) => {
  try {
    // const { id } = req.params;

    const response = await productApi.update(id, data);
    // res.status(200).send("producto actualizado");
    return response;
  } catch (err) {
    // next(err);
    console.log({ Error: err });
    throw "Error updating product";
  }
};

const deleteDocument = async ({ id }) => {
  try {
    // const { id } = req.params;
    const response = await productApi.delete(id);

    // res.status(200).send("producto eliminado");
    return response;
  } catch (err) {
    console.log({ Error: err });
    throw "Error deleting product";
  }
};

const getAll = async () => {
  try {
    const response = await productApi.getAll();

    // res.status(200).json(response);
    return response;
  } catch (err) {
    console.log({ Error: err });
    throw "Error getting all products";
  }
};
const getProduct = async ({ id }) => {
  try {
    const response = await productApi.getById(id);

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const testController = {
  create,
  update,
  deleteDocument,
  getAll,
  getProduct,
};
