import { useState } from 'react'
import { reduxForm, reset } from 'redux-form'
import { useDispatch } from 'react-redux'
import { LabelField, DishOptions, normalizeTime } from '.'
import axios from 'axios'

const ContactForm = ({ handleSubmit }) => {
    const dispatch = useDispatch()
    const [TypeOfDish, setTypeOfDish] = useState('none')
    const changeType = e => {
        setTypeOfDish(e.target.value)
    }

    const validateData = (values) => {
        let finalValues = {
            name: values.name,
            preparation_time: values.preparation_time
        }
        if (values.type === 'none') {
            finalValues.type = "none"
        }
        if (values.type === undefined || values.type === 'pizza') {
            finalValues.type = "pizza"
            finalValues.no_of_slices = parseInt(values.no_of_slices)
            finalValues.diameter = parseFloat(values.diameter)

        }
        else if (values.type === 'soup') {
            finalValues.type = "soup"
            finalValues.spiciness_scale = parseInt(values.spiciness_scale)
        }
        else if (values.type === 'sandwich') {
            finalValues.type = "sandwich"
            finalValues.slices_of_bread = parseInt(values.slices_of_bread)
        }
        return finalValues
    }

    const SendData = (event) => {
        console.log(event)
        let data = validateData(event)
        axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', data).then((response) => {
            dispatch(reset('dish'))
            setTypeOfDish('none')
        }).catch((error) => {
            console.log(error)
        })
        console.log(data)
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(SendData)}>
                <LabelField
                    name="name"
                    component="input"
                    type="text"
                    label="Name" />
                <LabelField
                    name="preparation_time"
                    component="input"
                    type="text"
                    label="Preparation Time"
                    normalize={normalizeTime}
                />
                <LabelField
                    name="type"
                    component="select"
                    label="Type"
                    onChange={changeType}>
                    <option value='none' >Select</option>
                    <option value='pizza' >pizza</option>
                    <option value='soup'>soup</option>
                    <option value='sandwich'>sandwich</option>
                </LabelField>
                <DishOptions type={TypeOfDish} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'dish',
})(ContactForm)