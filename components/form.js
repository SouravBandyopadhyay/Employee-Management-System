import AddUserForm from './addUserForm';
import UpdateUserForm from './updateUserForm';

export default function Form() {
  const flag = false;
  return (
    <div className="container mx-auto">
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  );
}
