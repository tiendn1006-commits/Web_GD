import { forwardRef } from 'react';

export const Input = forwardRef(({ 
  label, 
  error, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
          ${error 
            ? 'border-red-400 focus:border-red-500' 
            : 'border-gray-200 focus:border-pastel-pink-500'
          }
          focus:outline-none focus:ring-2 focus:ring-pastel-pink-200
          ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
