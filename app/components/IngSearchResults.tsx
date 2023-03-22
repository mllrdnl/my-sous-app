import React from "react";
import styles from "../styles/SearchResults.module.css";

import { Ingredient } from "@/types";

const IngSearchResults = ({ ingredients }: { ingredients: Ingredient[] }) => {
  return (
    <div className={styles.resultsBody}>
      <div>
        {ingredients.map((ingredient) => (
          <p key={ingredient.id}>{ingredient.name}</p>
        ))}
      </div>
    </div>
  );
};

export default IngSearchResults;
