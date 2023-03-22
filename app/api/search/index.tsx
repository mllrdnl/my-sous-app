// import axios from "axios";
// import { GetStaticProps, InferGetStaticPropsType } from "next";
// import { MongoClient } from "mongodb";

// import { Ingredient } from "@/types";

// const { MONGO_URI } = process.env;
// const { MONGO_DB } = process.env;

// if (!MONGO_URI) throw new Error("MONGO_URI not defined");
// if (!MONGO_DB) throw new Error("MONGO_DB not defined");

// export const getStaticProps: GetStaticProps = async (context) => {
//   const mongoClient = new MongoClient(MONGO_URI);

//   const data = await mongoClient.db(MONGO_DB).collection('ingredients').find({}).toArray();

//   console.log('Data!', data)
// };
