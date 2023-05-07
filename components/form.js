import { useReducer } from 'react';
import { BiPlus } from 'react-icons/bi';
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      className="grid lg:grid-cols-2 w-2/3 gap-4 mb-2"
      onSubmit={handleSubmit}
    >
      <div className="input-type">
        <input
          type="text"
          placeholder="First Name"
          onChange={setFormData}
          name="firstName"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          placeholder="Last Name"
          onChange={setFormData}
          name="LastName"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="email"
          onChange={setFormData}
          placeholder="Email"
          name="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          placeholder="Salary"
          name="salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          // placeholder="Date"
          onChange={setFormData}
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            name="status"
            onChange={setFormData}
            value="Active"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            name="status"
            value="Inactive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 border-green-500 hover:text-green-500">
        Add{' '}
        <span>
          <BiPlus size={24} />
        </span>
      </button>
    </form>
  );
}
