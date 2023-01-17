import classes from './Auth.module.css';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile'
import UserForm from './UserForm';

const Auth = () => {
  const { isAuthenticated } = useSelector(state => state.authReducer);

  return (
    <div className={classes.auth}>
      <section>
        {isAuthenticated ? <UserProfile /> : <UserForm />}
      </section>
    </div>
  );
};

export default Auth;
