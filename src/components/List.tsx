import {Sub} from '../types';
import {BsTrash} from 'react-icons/bs';

interface Props {
    subs: Array<Sub>
    removeSub: (e:Sub) => void
}

export default function List ({subs, removeSub}: Props){

    const renderList = (): JSX.Element[] => {
        return ( subs.map(sub=>{
                    return (
                    <li key={sub.nick}>
                        <img src={sub.avatar} alt='avatar de sub'/>
                        <h2>{sub.nick}(<small>{sub.subMonth}</small>)</h2>
                        <p>{sub.description?.substring(0,100)}</p>
                        <div>
                            <button onClick={()=>removeSub(sub)}><BsTrash/></button>
                        </div>
                    </li>
                    )
                })
                )
    }

    return (
        <ul>{renderList()}</ul>
    )
}