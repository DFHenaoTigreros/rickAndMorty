const Select = ({ name, options, handleChange, className }) => {
  return(
    <select key={name} name={name} onChange={handleChange} className={className}>
      {options.map((option) => {return <option value={option}>{option}</option>})}
    </select>
  );
};

export default Select;