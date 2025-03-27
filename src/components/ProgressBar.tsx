
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  colorScheme?: 'success' | 'warning' | 'danger' | 'primary';
}

const getColorScheme = (colorScheme: string, value: number, max: number) => {
  const percentage = (value / max) * 100;
  
  if (colorScheme !== 'auto') return colorScheme;
  
  if (percentage >= 80) return 'success';
  if (percentage >= 50) return 'warning';
  return 'danger';
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  className,
  size = 'md',
  showValue = false,
  colorScheme = 'primary',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const actualColorScheme = getColorScheme(colorScheme, value, max);
  
  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };
  
  const colorSchemes = {
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
    primary: 'bg-primary',
  };
  
  return (
    <div className={cn('w-full', className)}>
      <div className="w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={cn(
            'transition-all duration-500 ease-out rounded-full',
            heights[size],
            colorSchemes[actualColorScheme as keyof typeof colorSchemes]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <div className="mt-1 text-xs text-gray-500">{Math.round(percentage)}%</div>
      )}
    </div>
  );
};

export default ProgressBar;
