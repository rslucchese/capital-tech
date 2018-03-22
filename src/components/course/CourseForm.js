import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Endereço de email inválido'
    : undefined
;

const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
      ? true
      : undefined
;

export const CourseForm = ({ handleSubmit, pristine, reset, submitting, heading, authors, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="nome"
                label="Nome"
                placeholder="Seu nome"
                component={FieldInput}
            />

            <Field
                type="text"
                name="sobrenome"
                label="Sobrenome"
                placeholder="Seu sobrenome"
                component={FieldInput}
            />

            <Field
                type="text"
                name="email"
                label="Email"
                placeholder="nome@email.com"
                validate={email}
                component={FieldInput}
            />

            <Field
                type="text"
                name="telefone"
                label="Telefone"
                placeholder="(55) 5555-5555"
                component={FieldInput}
            />

            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Salvar</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Resetar Formulario</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancelar</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.nome) {
        errors.nome = 'Obrigatório';
    }

    if (!values.sobrenome) {
        errors.sobrenome = 'Obrigatório';
    }

    if (!values.email) {
        errors.email = 'Obrigatório';
    }

    if (!values.telefone) {
        errors.telefone = 'Obrigatório';
    }

    if(phoneNumber(values.telefone)) {
        errors.telefone = 'Numero de telefone inválido';
    }

    return errors;
};



CourseForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'CourseForm',
    validate
})(CourseForm);
