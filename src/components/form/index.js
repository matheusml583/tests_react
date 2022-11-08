import './style.css'
import Input from '../input'

const Form = (props) => {
    return(
        <div className="bodyForm">
            <div className='titleForm'>
                <strong>{props.title}</strong>
            </div>
            <div className='contentForm'>
                <Input type='text' placeholder='Nome' />
                <Input type='number' placeholder='Idade' />
                <Input type='text' placeholder='Email' />
                <Input type='text' placeholder='Telefone' />
                <button className='btn_submit'>ENVIAR</button>
            </div>
        </div>
    )
}

export default Form