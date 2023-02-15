import { useReducer } from "react";
import {Sub} from '../types';

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSubs: (newSub: Sub)=>void
    subsLength: number
}

const INITIAL_STATE = {
    nick: '',
    subMonth: 0,
    avatar: '',
    description:'',
    id: 0
}

type FormReducerAction = {
    type : "change-value",
    payload : {
        inputName: string
        inputValue: string
    } 
} | {
    type : "clear"
}

const formReducer = (state : FormState['inputValues'], action: FormReducerAction) => {
    switch(action.type){
        case "change-value":
            const {inputName, inputValue} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        case "clear":
            return INITIAL_STATE

    }
};

const Form = ({onNewSubs, subsLength}: FormProps) => {
    const [inputValues, dispatch] = useReducer( formReducer, INITIAL_STATE);

    const handleSubmit = (evt : React.FormEvent<HTMLFormElement>) => {
        if(inputValues.nick && inputValues.avatar && inputValues.subMonth){
            evt.preventDefault()
            onNewSubs({...inputValues, id: subsLength+1})
            handleClear()
        }
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value} = evt.target
        dispatch({
            type: "change-value",
            payload : {
                inputName : name,
                inputValue: value
            }
        })
    };

    const handleClear = () => {
        dispatch({
            type: "clear"
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nombre'/>
                <input onChange={handleChange} value={inputValues.subMonth} type='number' name='subMonth' placeholder='años'/>
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='url de foto'/>
                <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='descripción'/>
                <button disabled={inputValues.avatar === '' && inputValues.nick === '' && inputValues.description === ''} className='clearFormButton' onClick={handleClear} type='button'>Limpiar formulario</button>
                <button disabled={inputValues.avatar === '' || inputValues.nick === ''} className="addNewButton" type='submit'>Añadir nueva respuesta</button>
            </form>
        </div>
    )
};

export default Form;