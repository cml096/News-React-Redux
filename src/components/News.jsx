import React, { Component } from "react";
import NewsForm from "./NewsForm";
import NewsList from "./NewsList";

export default class News extends Component {
  handleSubmit = payload => {
    const { createNews, selectedCategory} = this.props;
    createNews({ ...payload, category_id: selectedCategory })
  }
  render() {
    const { dataNews, deleteNews } = this.props;
    return (
      <div>
        <h2>Notcias</h2>
        <NewsForm onSubmit={this.handleSubmit} />
        <NewsList dataNews={dataNews} deleteNews={deleteNews} />
      </div>
    );
  }
}
