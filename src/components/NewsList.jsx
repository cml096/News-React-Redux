import React, { Component } from "react";
import styled from "styled-components";

const Styled = styled.ul`
  li {
    border: 1px solid;
    padding: 8px;
    align-items: center;
    margin: 5px;
  }
  button {
    border-radius: 2px;
    border: none;
    color: white;
    background-color: #b40000c2;
  }
`;

export default class NewsList extends Component {
  handleClick = (_id) => () => {
    const { deleteNews } = this.props;
    deleteNews(_id);
  };
  render() {
    const { dataNews } = this.props;
    return (
      <Styled>
        {dataNews.map((x) => (
          <li key={x._id}>
            <h3>{x.name}</h3>
            <hr />
            <p>{x.desc}</p>
            <button type="submit" onClick={this.handleClick(x._id)}>
              Eliminar
            </button>
          </li>
        ))}
      </Styled>
    );
  }
}
