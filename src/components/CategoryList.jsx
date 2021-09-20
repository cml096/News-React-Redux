import React, { Component } from "react";
import styled from "styled-components";

const Styled = styled.ul`
  li:hover {
    color: rgba(73, 158, 255, 0.733);
  }
`;

export default class CategoryList extends Component {
  handleClick = (_id) => () => {
    const { selectedCategory } = this.props;
    selectedCategory(_id);
  };
  render() {
    const { dataCategories } = this.props;
    return (
      <Styled>
        {dataCategories.map((x) => (
          <li
            key={x._id}
            onClick={this.handleClick(x._id)}
            className={this.props.selected === x._id ? "selected" : ""}
          >
            {x.name}
          </li>
        ))}
      </Styled>
    );
  }
}
