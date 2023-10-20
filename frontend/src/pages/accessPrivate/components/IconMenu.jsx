import { BiMenu } from 'react-icons/bi';

export const IconMenu = ({ toggleSidebar }) => {

    if( !toggleSidebar ) return;

  return (
    <div className="icon-menu">
        <BiMenu className='icon' onClick={toggleSidebar} />
    </div>
  )
}
