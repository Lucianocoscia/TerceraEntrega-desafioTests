import { buildSchema } from "graphql";

const schema = buildSchema(`
    input ProductInput {
        title: String,
        thumbnail: String,
        price: Int,
    }
    type Product {
        id: ID!, 
        title: String,
        thumbnail: String,
        price: Int,
    }
    type Query{
        getProduct(id: ID!): Product,
        getAll: [Product]

    }
    type Mutation {
        create(data: ProductInput): Product,
        update(id: ID!, data: ProductInput): Product,
        deleteDocument(id: ID!): Product,
    }
`);

export default schema;
