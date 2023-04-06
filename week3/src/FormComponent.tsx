import styles from "./formComponent.module.css";
import "./formComponent.css";

import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  range: number;
};

const countryOptions = ['USA', 'Canada', 'Mexico', 'Brazil', 'China', 'India'];

const FormComponent: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    range: 0,
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = values;
    if (!name || name.length < 3) {
      setErrors({ ...errors, name: 'Name must be at least 3 characters long' });
      return;
    }
    if (!email || !isValidEmail(email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
      return;
    }
    if (!password) {
      setErrors({ ...errors, password: 'Password is required' });
      return;
    }
    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
      return;
    }
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name*</label>
        <input type="text" id="name" name="name" value={values.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password*</label>
        <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password*</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select id="country" name="country" value={values.country} onChange={handleChange}>
          <option value="">Select a country</option>
          {countryOptions.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="range">{values.range}</label>
        <input type="range" id="range" name="range" min={0} max={100} value={values.range} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


export default FormComponent;