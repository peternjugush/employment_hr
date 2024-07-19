import {Link} from 'react-router-dom';

const  Navbar = () => {
    return ( 
        <nav className='bg-gray-800 py-4'>
            <div className='container max-auto flex justify-between items-center'>
            <Link to="/login" className='text-white hover:text-green-300'>        <img className="size-16" src="src\assets\Grey Circle Frame Fashion Logo.png" alt="" /></Link>
            <ul className='flex space-x-4'>
            <li>
            <Link to="/" className='text-white hover:text-green-300'>Home</Link>
            </li>
            <li>
            <Link to="/about" className='text-white hover:text-green-300'>About</Link>
            </li>
            <li>
            <Link to="/registrater" className='text-white hover:text-green-300'>Registeration</Link>
            </li>
            <li>
            <Link to="/featuresform" className='text-white hover:text-green-300'>Features</Link>   
            </li>
             <li>
            <Link to="/payrollform" className='text-white hover:text-green-300'>Payroll</Link>   
            </li>
             <li>
            <Link to="/dashboard" className='text-white hover:text-green-300'>Dashboard</Link>   
            </li>
             <li>
            <Link to="/documentmanagement" className='text-white hover:text-green-300'>Documents</Link>   
            </li>
            </ul>
            </div>
            
        </nav>
    )
}

export default Navbar;