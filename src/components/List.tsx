import {Sub} from '../types';

interface Props {
    subs: Array<Sub>
}

export default function List ({subs}: Props){

    const renderList = (): JSX.Element[] => {
        return ( subs.map(sub=>{
                    return (
                    <li key={sub.nick}>
                        <img src={sub.avatar} alt='avatar de sub'/>
                        <h4>{sub.nick}(<small>{sub.subMonth}</small>)</h4>
                        <p>{sub.description?.substring(0,100)}</p>
                    </li>
                    )
                })
                )
    }

    return (
        <ul>{renderList()}</ul>
    )
}