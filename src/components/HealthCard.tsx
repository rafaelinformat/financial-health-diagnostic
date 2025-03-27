
import React from 'react';
import { cn } from '@/lib/utils';
import ProgressBar from './ProgressBar';

interface HealthCardProps {
  title: string;
  description: string;
  value: number;
  className?: string;
  colorScheme?: 'success' | 'warning' | 'danger' | 'primary';
}

const HealthCard: React.FC<HealthCardProps> = ({
  title,
  description,
  value,
  className,
  colorScheme = 'primary',
}) => {
  // Removed the incorrect comparison with 'auto'
  const getColorScheme = () => {
    if (value >= 80) return 'success';
    if (value >= 50) return 'warning';
    return 'danger';
  };

  const finalColorScheme = colorScheme || getColorScheme();

  return (
    <div className={cn(
      'glass-card p-6 card-animated',
      className
    )}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ProgressBar 
        value={value} 
        max={100} 
        colorScheme={finalColorScheme} 
        size="md" 
        className="mb-4" 
      />
      <p className="text-muted-foreground mb-3">{description}</p>
      <div className="text-4xl font-bold">{value}%</div>
    </div>
  );
};

export default HealthCard;
