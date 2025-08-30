
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  change,
  prefix = '',
  suffix = '',
  className,
}) => {
  const isPositive = change !== undefined ? change >= 0 : undefined;
  
  return (
    <div className={cn(
      'glass-card p-6 flex flex-col h-full card-animated',
      className
    )}>
      <h3 className="text-muted-foreground mb-3">{title}</h3>
      <div className="text-3xl font-bold mt-auto">
        {prefix}{value}{suffix}
      </div>
      {change !== undefined && (
        <div className="flex items-center mt-2">
          {isPositive ? (
            <ArrowUpIcon className="w-4 h-4 mr-1 text-success" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 mr-1 text-danger" />
          )}
          <span className={cn(
            'text-sm font-medium',
            isPositive ? 'text-success' : 'text-danger'
          )}>
            {Math.abs(change).toFixed(1)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default KpiCard;
