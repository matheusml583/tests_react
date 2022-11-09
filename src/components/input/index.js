import './style.css'

const Input = (props) => {

    const change = (e) => props.changed(e.target.value)

    return(
        <div>
            <input
                className='inputForm'
                type={props.type}
                placeholder={props.placeholder}
                value={props.model}
                onChange={change}
            >
            </input>
        </div>
    )
}

export default Input