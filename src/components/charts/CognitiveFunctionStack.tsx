import React from 'react';

type FunctionStackProps = {
  type: string;
  functions: string[]; // e.g. ['Ni', 'Te', 'Fi', 'Se']
};

export default function CognitiveFunctionStack({ type, functions }: FunctionStackProps) {
  const functionColors: Record<string, string> = {
    Ni: '#bfdbfe', // blue-200
    Ne: '#93c5fd', // blue-300
    Si: '#bbf7d0', // green-200
    Se: '#86efac', // green-300
    Ti: '#fef08a', // yellow-200
    Te: '#fde047', // yellow-300
    Fi: '#fecaca', // red-200
    Fe: '#fca5a5', // red-300
  };

  const labels = ['主機能 (Dominant)', '補助機能 (Auxiliary)', '代替機能 (Tertiary)', '劣等機能 (Inferior)'];
  
  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-center font-bold text-gray-800 mb-4">{type}の認知機能スタック</h3>
      <div className="space-y-2">
        {functions.map((func, index) => {
          // Extract the 2-letter function code for color (e.g. "Fi" from "Fi（内向的感情）")
          const funcCode = func.substring(0, 2);
          return (
            <div key={index} className="flex items-center">
              <div className="w-32 text-xs text-gray-500 text-right pr-3">
                {labels[index]}
              </div>
              <div 
                className="flex-1 h-10 rounded-lg flex items-center pl-4 font-bold text-gray-700 shadow-sm relative overflow-hidden"
                style={{ backgroundColor: functionColors[funcCode] || '#e5e7eb' }}
              >
                <span className="text-sm mr-2">{func}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
