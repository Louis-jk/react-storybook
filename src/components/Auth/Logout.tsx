import { LoginProps } from './Login';

const Logout: React.FC<LoginProps> = ({handleToggle}) => {
    return ( 
        <div className='cursor-pointer flex justify-center items-center min-w-20 min-h-10 bg-yellow-400 text-black rounded-md' onClick={handleToggle}>Logout</div>
     );
}
 
export default Logout;