import {NavLink, Form} from 'react-router-dom'
import logomark from '../assets/logomark.svg'
import {FaTrash} from 'react-icons/fa'

const Navbar = ({userName}) => {
  return (
    <nav>
        <NavLink to='/' aria-label='Go to Home'>
        <img src={logomark} height={30} alt="" />
        <span>HomeBudget</span>
        </NavLink>
        {userName && (
            <Form method='post' action='/logout' onSubmit={(e) => {
                if(!confirm('Are you sure you want delete user and all data?')) {
                    e.preventDefault()
                }
            }}>
             <button type="submit" className='btn btn--warning'>
                <span>Delete User</span>
                <FaTrash size={20} />
            </button>
            </Form>
        )}
    </nav>
  )
}
export default Navbar