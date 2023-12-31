import "./Select.css"

const Select = ({name, options, handleChange}) => {

  return (
    <select key={name} name={name} onChange={handleChange} className={"button"}>
      {options.map((option) => <option value={option}>{option}</option>)}
    </select>
  );
};

export default Select;