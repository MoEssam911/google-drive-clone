import '../../styles/SidebarItem.css'

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const SidebarItem = ({ arrow, icon, label }) => {
    return (
        <div className='text-sm flex py-2 rounded-full hover:bg-[#e9eef6] '>
            <div className="w-7 text-sm">
                {arrow && (<ArrowRightIcon className='text-xs '/>)}
            </div>
            
            <div className='flex gap-3 cursor-pointer'>
                {icon}
                <p>{label}</p>
            </div>
        </div>

    )
}

export default SidebarItem
