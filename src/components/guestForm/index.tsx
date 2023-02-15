import { Sub } from "../../types";
import Form from "../Form";
import './styles.css';
import {AiOutlineForm} from 'react-icons/ai';

interface GuestFormProps {
    handleNewSub: (newSub: Sub) => void
    subsLength: number
}

const GuestForm = ({handleNewSub, subsLength}: GuestFormProps) => {
    return (
        <div>
            <div className='formTitle' >
                <span>Formulario de inscripción</span>
                <AiOutlineForm/>
            </div>
            <Form onNewSubs={handleNewSub} subsLength={subsLength}/>
        </div>
    )
};

export default GuestForm;