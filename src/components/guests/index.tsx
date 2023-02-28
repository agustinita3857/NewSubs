import { FaPaw } from 'react-icons/fa';
import { Sub } from '../../types';
import GuestForm from '../guestForm';
import List from '../List';

interface GuestsProps {
    handleSubs: (newSub: Sub)=> void
    subs: Sub[]
    handleDeleteSub: (sub: Sub)=> void
}

const Guests = ({subs, handleSubs, handleDeleteSub}: GuestsProps) => {
    return (
        <div className='flex'>
            <div>
                <div className='text-gray-700 flex text-xl font-semibold justify-center m-3 underline'>
                    <div>Nuestros Inquilinos</div>
                    <FaPaw/>
                </div>
                <List subs={subs} removeSub={handleDeleteSub}/>
            </div>
            <GuestForm handleNewSub={handleSubs} subsLength={subs.length} />
        </div>
    )
};

export default Guests;