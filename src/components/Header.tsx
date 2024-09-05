import { Dispatch, SetStateAction } from 'react';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Logo from './Logo';

type HeaderProps = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};
const Header: React.FC<HeaderProps> = ({ isLogin, setIsLogin }) => {
  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className='flex flex-row w-full justify-between items-center bg-indigo-800 text-white py-3 px-5'>
      <div>
        <Logo />
      </div>
      <div className='flex flex-row justify-between items-center'>
        {isLogin ? (
          <Logout handleToggle={handleToggle} />
        ) : (
          <Login handleToggle={handleToggle} />
        )}
      </div>
    </div>
  );
};

export default Header;
