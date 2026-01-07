import React from 'react';

type CompatibilityRadarProps = {
  love: number;
  friendship: number;
  work: number;
  type1: string;
  type2: string;
};

export default function CompatibilityRadar({ love, friendship, work, type1, type2 }: CompatibilityRadarProps) {
  // SVG configuration
  const size = 300;
  const center = size / 2;
  const radius = 100;
  
  // Calculate points (Top: Love, Bottom Right: Work, Bottom Left: Friendship)
  // Angles: -90 (Top), 30 (Bottom Right), 150 (Bottom Left)
  const angleLove = -90 * (Math.PI / 180);
  const angleWork = 30 * (Math.PI / 180);
  const angleFriendship = 150 * (Math.PI / 180);

  const getPoint = (value: number, angle: number) => {
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  };

  const pointLove = getPoint(love, angleLove);
  const pointWork = getPoint(work, angleWork);
  const pointFriendship = getPoint(friendship, angleFriendship);

  const points = `${pointLove} ${pointWork} ${pointFriendship}`;

  // Background triangle (outline for 100%)
  const bgLove = getPoint(100, angleLove);
  const bgWork = getPoint(100, angleWork);
  const bgFriendship = getPoint(100, angleFriendship);
  const bgPoints = `${bgLove} ${bgWork} ${bgFriendship}`;

  // Grid lines (50%)
  const gridLove = getPoint(50, angleLove);
  const gridWork = getPoint(50, angleWork);
  const gridFriendship = getPoint(50, angleFriendship);
  const gridPoints = `${gridLove} ${gridWork} ${gridFriendship}`;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="max-w-full h-auto">
        {/* Background Circle/Triangle */}
        <circle cx={center} cy={center} r={radius} fill="#f3f4f6" stroke="none" />
        <polygon points={bgPoints} fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <polygon points={gridPoints} fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Axes */}
        <line x1={center} y1={center} x2={bgLove.split(',')[0]} y2={bgLove.split(',')[1]} stroke="#e5e7eb" strokeWidth="1" />
        <line x1={center} y1={center} x2={bgWork.split(',')[0]} y2={bgWork.split(',')[1]} stroke="#e5e7eb" strokeWidth="1" />
        <line x1={center} y1={center} x2={bgFriendship.split(',')[0]} y2={bgFriendship.split(',')[1]} stroke="#e5e7eb" strokeWidth="1" />

        {/* The data polygon */}
        <polygon points={points} fill="rgba(59, 130, 246, 0.5)" stroke="#2563eb" strokeWidth="2" />

        {/* Labels */}
        <text x={center} y={center - radius - 15} textAnchor="middle" className="text-sm font-bold fill-gray-700">恋愛: {love}</text>
        <text x={center + radius * 0.86 + 10} y={center + radius * 0.5 + 10} textAnchor="start" className="text-sm font-bold fill-gray-700">仕事: {work}</text>
        <text x={center - radius * 0.86 - 10} y={center + radius * 0.5 + 10} textAnchor="end" className="text-sm font-bold fill-gray-700">友情: {friendship}</text>

        {/* Center label */}
        <text x={center} y={center + 5} textAnchor="middle" className="text-xs fill-gray-500 font-medium">
          {type1} x {type2}
        </text>
      </svg>
    </div>
  );
}
