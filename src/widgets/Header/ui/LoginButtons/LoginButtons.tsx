import { Button } from 'shared/ui/Button/Button';

export const LoginButtons = ({ isAuth }: { isAuth?: boolean }) => {
  if (isAuth) return <div>User Profile</div>;
  
  return (
    <div>
      <Button label="Login" />
      <Button label="Register" />
    </div>
  );
};
