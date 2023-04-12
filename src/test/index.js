import axios from "./axios.js";

const getProducts = async () => {
  try {
    const response = await axios.get("/api/test");

    console.log("Server response:", response);
  } catch (err) {
    console.log(err);
  }
};

const createProduct = async () => {
  try {
    const response = await axios.post("/api/test", {
      title: "pinza",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_72pKdR5CL8Mh-WdnW50yiHPrMY56Edga8FjqYmg&s",
      price: 100,
    });

    return getProducts();
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (id) => {
  try {
    await axios.put("/api/test/", {
      title: "pinza",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_72pKdR5CL8Mh-WdnW50yiHPrMY56Edga8FjqYmg&s",
      price: 120,
    });

    return getProducts();
  } catch (err) {
    console.log(err);
  }
};
const deleteProduct = async (id) => {
  try {
    await axios.delete("/api/test/64373b0e51bc57fe300b8e98");

    return getProducts();
  } catch (err) {
    console.log(err);
  }
};

const createdUser = await createProduct();

updateProduct(createdUser.id);
getProducts();
