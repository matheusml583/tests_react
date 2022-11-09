import React, {useState,useEffect} from 'react'
import './style.css'
import Input from '../input'

const Form = (props) => {

    const [valueNome, setNome] = useState("") 
    const [valueIdade, setIdade] = useState("") 
    const [valueEmail, setEmail] = useState("") 
    const [valueTelefone, setTelefone] = useState("") 

    useEffect(()=>{
        console.log(valueNome)
    },[valueNome])


    const save = async () => {
        var data = {valueNome, valueEmail, valueIdade, valueTelefone}
         var resp = await fetch("http://192.168.3.147:8080/api_form/mock/create.php", {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
            method: "POST",
        })
        console.log(await resp.json())
        setTimeout(() => {
            window.location.reload()
        }, 1500)
    }

    return(
        <div className="bodyForm">
            <div className='titleForm'>
                <strong>{props.title}</strong>
            </div>
            <div className='contentForm'>
                <Input type='text' placeholder='Nome' model={valueNome} changed={setNome} />
                <Input type='number' placeholder='Idade' model={valueIdade} changed={setIdade} />
                <Input type='text' placeholder='Email' model={valueEmail} changed={setEmail} />
                <Input type='text' placeholder='Telefone' model={valueTelefone} changed={setTelefone} />
                <button className='btn_submit' onClick={save}>ENVIAR</button>
            </div>
        </div>
    )
}

export default Form