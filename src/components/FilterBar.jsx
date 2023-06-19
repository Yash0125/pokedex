import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const FilterBar = () => {
  const { active, handleCheckbox } = useContext(PokemonContext);

  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className="filter-by-type">
        <span>Filter</span>

        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="grass"
            id="grass"
          />
          <label htmlFor="grass">Plant</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fire"
            id="fire"
          />
          <label htmlFor="fire">Fire</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="bug"
            id="bug"
          />
          <label htmlFor="bug">Bug</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fairy"
            id="fairy"
          />
          <label htmlFor="fairy">fairy</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="dragon"
            id="dragon"
          />
          <label htmlFor="dragon">Dragón</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="shadow"
            id="shadow"
          />
          <label htmlFor="shadow">shadow</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="ground"
            id="ground"
          />
          <label htmlFor="ground">ground</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="normal"
            id="normal"
          />
          <label htmlFor="normal">Normal</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="psychic"
            id="psychic"
          />
          <label htmlFor="psychic">Psychic</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="steel"
            id="steel"
          />
          <label htmlFor="steel">steel</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="dark"
            id="dark"
          />
          <label htmlFor="dark">dark</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="electric"
            id="electric"
          />
          <label htmlFor="electric">electric</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fighting"
            id="fighting"
          />
          <label htmlFor="fighting">fighting</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="flying"
            id="flying"
          />
          <label htmlFor="flying">flying</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="ice"
            id="ice"
          />
          <label htmlFor="ice">ice</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="poison"
            id="poison"
          />
          <label htmlFor="poison">poison</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="rock"
            id="rock"
          />
          <label htmlFor="rock">rock</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="water"
            id="water"
          />
          <label htmlFor="water">water</label>
        </div>
      </div>
    </div>
  );
};