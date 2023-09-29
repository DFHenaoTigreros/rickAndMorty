const Select = ({ name, options, handleChange }) => {
  return(
    <select key={name} name={name} onChange={handleChange}>
      {options.map((option) => {return <option value={option}>{option}</option>})}
    </select>
  );
};

export default Select;