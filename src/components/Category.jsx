import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";

const style = {
  borderRadius: "2px",
  border: "none",
  color: "white",
  backgroundColor: "#b40000c2",
};

export default class Category extends Component {
  handleClick = () => {
    const { deleteCategory, selected } = this.props;
    console.log(selected);
    deleteCategory(selected);
  };
  render() {
    const { dataCategories, createCategory, selectedCategory, selected } = this.props;
    return (
      <div className="Line">
        <CategoryForm onSubmit={createCategory} />
        <p>Seleccione</p>
        <CategoryList
          dataCategories={dataCategories}
          selectedCategory={selectedCategory}
          selected={selected}
        />
        <div>
          {selected ? (
            <button 
              type="submit" 
              style={style} 
              onClick={this.handleClick}
            >
              Eliminar Categoria
            </button>
          ) : (
            <span>-</span>
          )}
        </div>
      </div>
    );
  }
}
