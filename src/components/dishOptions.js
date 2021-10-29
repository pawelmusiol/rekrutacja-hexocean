import { LabelField, normalizeNumber } from '.'

const Pizza = () => {
    return (
        <>
            <LabelField
                label="Number of slices"
                name="no_of_slices"
                component='input'
                type='number'
                min="0"
                normalize={normalizeNumber}
            />
            <LabelField
                label="Diameter"
                name="diameter"
                component='input'
                type='number'
                min="0,00"
            />
        </>
    )
}
const Soup = () => {
    return (
        <LabelField
            label="Spicyness"
            name="spiciness_scale"
            component='input'
            type='number'
            normalize={normalizeNumber}
            min="1"
            max="10"
        />
    )
}

const Sandwich = () => {
    return (
        <LabelField
            label="Slices of bread"
            name="slices_of_bread"
            component='input'
            type='number'
            min="0"
            normalize={normalizeNumber}
        />
    )
}

const None = () => {
    return <LabelField
        label=""
        name="hidden"
        component='input'
        type='hidden'
    />
}

const TypesOfDishes = [
    {
        type: 'none',
        field: <None />
    },
    {
        type: 'pizza',
        field: <Pizza />
    },
    {
        type: 'soup',
        field: <Soup />
    },
    {
        type: 'sandwich',
        field: <Sandwich />
    }

]

const DishOptions = ({ type }) => {
    const result = TypesOfDishes.find((dish) => dish.type === type)
    return result.field
}

export default DishOptions