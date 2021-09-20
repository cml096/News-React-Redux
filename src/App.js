import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "./components/Category";
import News from "./components/News";
import { bindActionCreators } from "redux";
import * as reducerCategory from "./reducer/reducerCategory";
import * as reducerNews from "./reducer/reducerNews";
import { reset } from "redux-form";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const { getCategories, getNews } = props;
    getCategories();
    getNews();
  }
  render() {
    const {
      dataCategories,
      createCategory,
      deleteCategory,
      selectedCategory,
      dataNews,
      createNews,
      deleteNews,
      selected,
    } = this.props;
    return (
      <div className="App">
        <Category
          dataCategories={dataCategories}
          createCategory={createCategory}
          selectedCategory={selectedCategory}
          deleteCategory={deleteCategory}
          selected={selected}
        />
        <News 
          dataNews={dataNews} 
          createNews={createNews} 
          selectedCategory={selected} 
          deleteNews={deleteNews}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    Categories: { data: dataCategories, selected },
  } = state;
  const {
    News: { data: dataNews },
  } = state;
  return {
    dataCategories,
    dataNews: dataNews.filter((x) => x.category_id === selected),
    selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { createCategory, ...restCategory } = reducerCategory;
  const { createNews, ...restNews } = reducerNews;
  const bac = bindActionCreators(
    {
      ...restCategory,
      ...restNews,
    },
    dispatch
  );
  return {
    ...bac,
    createCategory: (payload) => {
      dispatch(createCategory(payload));
      dispatch(reset("category-form"));
    },
    createNews: (payload) => {
      dispatch(createNews(payload));
      dispatch(reset("news-form"));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
