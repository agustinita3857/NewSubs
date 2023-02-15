import './styles.css';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

interface MenuItem {
    name: string
    path: string
}

interface MenuProps {
    menuItems: Array<MenuItem>
}




const Menu = ({menuItems}: MenuProps) => {
    const navigate = useNavigate();

    const handleItemSelect = (item : string) => {
        navigate(item)
    };

return (
    <div className='menuContainer'>
        {
        menuItems.map(((item, id) => {
            return (
            <button key={id} onClick={()=>handleItemSelect(item.path)} className='menuItem'>{item.name}</button>
            )
        }))
        }
    </div>
)
};

export default Menu;