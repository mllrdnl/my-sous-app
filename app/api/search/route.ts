import type { NextPage, NextApiRequest, NextApiResponse } from "next";

import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { MongoClient } from "mongodb";

import { Ingredient } from "@/types";

const { MONGO_URI } = process.env;
const { MONGO_DB } = process.env;

if (!MONGO_URI) throw new Error("MONGO_URI not defined");
if (!MONGO_DB) throw new Error("MONGO_DB not defined");

export const getStaticProps: GetStaticProps = async (context) => {
  const mongoClient = new MongoClient(MONGO_URI);

  const data = await mongoClient
    .db(MONGO_DB)
    .collection("ingredients")
    .find()
    .toArray();

  console.log("Data!", data);

  // const result = await axios.get<{ ingredients: Ingredient[] }>(
  //   "http://localhost:3000/api/search/"
  // );

  return {
    props: {
      ingredients: data,
    },
    revalidate: 60,
  };
};

// const Ingredients: NextPage = ({
//   ingredients,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   return (
//     <>
//     </>
//   )
// }
