import { useReducer, useState } from "react";
import { on } from "stream";
import {Sub} from '../types';

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSubs: (newSub: Sub)=>void
}

const INITIAL_STATE = {
    nick: '',
    subMonth: 0,
    avatar: '',
    description:'',
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

const Form = ({onNewSubs}: FormProps) => {
    const [inputValues, dispatch] = useReducer( formReducer, INITIAL_STATE);

    const handleSubmit = (evt : React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSubs(inputValues)
        handleClear()
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
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick'/>
                <input onChange={handleChange} value={inputValues.subMonth} type='number' name='subMonth' placeholder='subMonth'/>
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'/>
                <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'/>
                <button onClick={handleClear} type='button'>Clear de Form</button>
                <button type='submit'>Save new sub!</button>
            </form>
        </div>
    )
};

export default Form;