"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/IngSearch.module.css";
import { FaSearch } from "react-icons/fa";
import IngSearchResults from "./IngSearchResults";
import { store } from "@/store";
import { setStartupIngredients } from "@/store/ingSearchSlice";

export default async function IngSearch() {
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setSearch("");
  //   router.push(`/${search}/`);
  // };

  return (
    <div>
      <form className={styles.searchForm}>
        <label className={styles.ingLabel}>Ingredients</label>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            name="ingSearchBar"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
            placeholder="ex: black beans, rice, tomatoes..."
          />
          <button className={styles.searchBtn}>
            <FaSearch id="searchIcon" />
          </button>
        </div>
        <p className={styles.subIngLabel}>
          search & select 2 - 4 ingredients from your fridge/pantry
        </p>
      </form>

      <div>Ingredients</div>
      <IngSearchResults
        ingredients={store.getState().search.startupIngredients}
      />
    </div>
  );
}
