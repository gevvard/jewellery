import React from 'react';

const Input = ({errors,register, ...props}) => {
  console.log('error: ', errors)
  return (
    <label>

            <span>
                {
                  errors
                }
            </span>

      <div>
        <input
          {...register}
          {...props}
        />
      </div>
    </label>
  );
};

export default Input;