import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface DataPoint {
  label: string;
  value: number;
}

interface ChartProps {
  title: string;
  data: DataPoint[];
  type: 'bar' | 'line';
  className?: string;
}

const Chart: React.FC<ChartProps> = ({ title, data, type, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set dimensions
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Colors
    const textColor = theme === 'dark' ? '#e5e7eb' : '#374151';
    const gridColor = theme === 'dark' ? 'rgba(75, 85, 99, 0.2)' : 'rgba(229, 231, 235, 0.6)';
    const barColor = theme === 'dark' ? 'rgba(59, 130, 246, 0.7)' : 'rgba(59, 130, 246, 0.7)';
    const lineColor = theme === 'dark' ? '#3b82f6' : '#3b82f6';
    
    // Find max value for scaling
    const maxValue = Math.max(...data.map(d => d.value));
    const scaleFactor = chartHeight / (maxValue * 1.1);
    
    // Draw axes
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.stroke();
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw grid lines
    const numGridLines = 5;
    ctx.textAlign = 'right';
    ctx.fillStyle = textColor;
    ctx.font = '10px sans-serif';
    
    for (let i = 0; i <= numGridLines; i++) {
      const y = height - padding - (i * chartHeight / numGridLines);
      const value = Math.round((i * maxValue / numGridLines));
      
      // Grid line
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.strokeStyle = gridColor;
      ctx.stroke();
      
      // Y-axis label
      ctx.fillText(value.toString(), padding - 5, y + 3);
    }
    
    // Draw data
    const barWidth = chartWidth / data.length * 0.6;
    const barSpacing = chartWidth / data.length;
    
    if (type === 'bar') {
      data.forEach((point, index) => {
        const x = padding + index * barSpacing + barSpacing * 0.2;
        const barHeight = point.value * scaleFactor;
        const y = height - padding - barHeight;
        
        // Draw bar
        ctx.fillStyle = barColor;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw x-axis label
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.fillText(point.label, x + barWidth / 2, height - padding + 15);
      });
    } else if (type === 'line') {
      // Draw line
      ctx.beginPath();
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 2;
      
      data.forEach((point, index) => {
        const x = padding + index * (chartWidth / (data.length - 1));
        const y = height - padding - point.value * scaleFactor;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      ctx.stroke();
      
      // Draw points
      data.forEach((point, index) => {
        const x = padding + index * (chartWidth / (data.length - 1));
        const y = height - padding - point.value * scaleFactor;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' ? '#3b82f6' : '#3b82f6';
        ctx.fill();
        ctx.strokeStyle = theme === 'dark' ? '#1e3a8a' : '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw x-axis label
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.fillText(point.label, x, height - padding + 15);
      });
    }
    
    // Draw title
    ctx.fillStyle = textColor;
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(title, width / 2, padding / 2);
    
  }, [data, theme, title, type]);
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-all duration-200 ${className}`}>
      <canvas 
        ref={canvasRef} 
        width={500} 
        height={300} 
        className="w-full h-full"
      />
    </div>
  );
};

export default Chart;