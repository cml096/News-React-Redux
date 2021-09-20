import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

const styles = {
  form: {
    borderBottom: "1px solid",
    padding: "20px",
  },
  red: {
    color: "#dd0000c5",
    padding: "5px",
  }
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

class CategoryForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} style={styles.form}>
        <p>Agregar Categoria</p>
        <Field
          name="name"
          type="text"
          label="Nombre"
          component={renderField}
          validate={[required, maxLengthN]}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "category-form",
})(CategoryForm);
