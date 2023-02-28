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
    <div className='flex flex-col h-fit mr-5 w-1/6'>
        {
        menuItems.map(((item, id) => {
            return (
            <button key={id} onClick={()=>handleItemSelect(item.path)} 
                className='bg-light-green border-2 rounded-lg border-solid border-black text-base font-semibold my-1 mx-0 p-4 hover:shadow-lg'>
                    {item.name}
            </button>
            )
        }))
        }
    </div>
)
};

export default Menu;