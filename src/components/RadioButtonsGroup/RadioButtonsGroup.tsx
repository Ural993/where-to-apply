import './style.scss';

interface RadioButtonsGroupType {
  options: string[];
  onChange: (value: string) => void;
}

export const RadioButtonsGroup = ({ options, onChange }: RadioButtonsGroupType) => {
  return (
    <div className="radio-group-wrapper">
      {options.map((item, ind) => (
        <label className="radio" key={ind}>
          {item}
          <input type="radio" value={item} name="radio" onClick={() => onChange(item)} />
        </label>
      ))}
    </div>
  );
};
