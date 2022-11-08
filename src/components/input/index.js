import './style.css'

const Input = (props) => {
    return(
        <div>
            <input
                className='inputForm'
                type={props.type}
                placeholder={props.placeholder}
            >
            </input>
        </div>
    )
}

export default Input