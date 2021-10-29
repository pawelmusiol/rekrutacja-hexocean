import { Field } from 'redux-form'

const LabelField = ({ name, component, type, children, onChange, label, min, max, normalize, validate }) => {
    const required = value => value ? undefined : 'Required'
    let componentToRender = renderField
    if (component === 'select') {
        componentToRender = 'select'
    }
    return (
        <div className="label-input">
            <label htmlFor={name}>{label}</label>
            <Field
                validate={[required]}
                normalize={normalize}
                min={min}
                max={max}
                name={name}
                component={componentToRender}
                type={type}
                children={children}
                onChange={onChange}
            />

        </div>
    )

}

const renderField = ({ input, min, max, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <input {...input} type={type} min={min} max={max} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

export default LabelField