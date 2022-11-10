import './style.css'

const Input = (props) => {

    const change = (e) => props.changed(e.target.value)

    return(
        <input
            className='inputForm'
            type={props.type}
            placeholder={props.placeholder}
            value={props.model}
            onChange={change}
        >
        </input>
    )
}

export default Input