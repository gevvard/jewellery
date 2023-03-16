import React, {useState} from 'react';
import RangeSlider from "./RangeSlider";
import css from "./filters.module.scss"

const Filters = ({ setRangeValues, rangeValues, openFilter }) => {
  const [values, setValues] = useState(rangeValues);

  return (
    <div>
      <RangeSlider
        setRangeValues={setValues}
        rangeValues={values}
      />
      <button
        className={css.saveBtn}
        onClick={() => {
          setRangeValues(values);
          openFilter(false);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default Filters;