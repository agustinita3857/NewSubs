import { Sub } from "../../types";
import Form from "../Form";
import {AiOutlineForm} from 'react-icons/ai';

interface GuestFormProps {
    handleNewSub: (newSub: Sub) => void
    subsLength: number
}

const GuestForm = ({handleNewSub, subsLength}: GuestFormProps) => {
    return (
        <div>
            <div className='text-gray-700 text-xl font-semibold flex items-center justify-center text-center' >
                <span className='m-3 whitespace-nowrap'>Formulario de inscripción</span>
                <AiOutlineForm/>
            </div>
            <Form onNewSubs={handleNewSub} subsLength={subsLength}/>
        </div>
    )
};

export default GuestForm;