import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

const styles = {
  buttom: {
    padding: "10px 20px",
    width: 140,
    display: "block",
    margin: "20px auto",
    alignItems: "center",
  },
  form: {
    display: "flex",
  },
  red: {
    color: "#dd0000c5",
  },
};

const required = (value) => (value ? undefined : "(*)");
const maxLength = (max) => (value) =>
  value && value.length < max ? `Necesita mas de ${max} caracteres` : undefined;
const maxLengthN = maxLength(5);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div style={styles.red}>
      <input {...input} placeholder={label} type={type} />
      <br />
      {touched &&
        ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class NewsForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} style={styles.form}>
        <Field
          name="name"
          type="text"
          label="Titulo"
          component={renderField}
          validate={[required, maxLengthN]}
        />
        <Field
          name="desc"
          type="text"
          label="Descripción"
          component={renderField}
          validate={[required, maxLengthN]}
        />
        <div style={styles.button}>
          <button type="submit" >Agregar</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "news-form",
})(NewsForm);
