import React from 'react';

function MusicToggle({ enabled, onToggle }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <label className="font-semibold text-white text-lg flex items-center">
        <span className="mr-2"></span> Background Music
      </label>
      <button
        type="button"
        onClick={() => onToggle(!enabled)}
        aria-pressed={enabled}
        className={`
          w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300
          focus:outline-none shadow-inner border-2
          ${enabled 
            ? 'bg-green-400 border-yellow-400' 
            : 'bg-yellow-100 border-yellow-400'
          }
        `}
      >
        <span
          className={`
            w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300
            ${enabled ? 'translate-x-6' : ''}
            border-2
            ${enabled ? 'border-green-500' : 'border-yellow-400'}
          `}
        />
      </button>
      <span className={`text-sm font-bold ${enabled ? 'text-white' : 'text-white'}`}>
        {enabled ? 'On' : 'Off'}
      </span>
    </div>
  );
}

export default MusicToggle;
