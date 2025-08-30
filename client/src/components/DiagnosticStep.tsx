
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface DiagnosticStepProps {
  step: number;
  currentStep: number;
  title: string;
  description: string;
  onClick?: () => void;
}

const DiagnosticStep: React.FC<DiagnosticStepProps> = ({
  step,
  currentStep,
  title,
  description,
  onClick,
}) => {
  const isActive = step === currentStep;
  const isCompleted = step < currentStep;
  
  return (
    <div
      className={cn(
        'flex flex-col items-start p-6 border rounded-lg transition-all duration-300',
        isActive ? 'border-primary bg-primary/5' : 'border-border',
        isCompleted ? 'border-success/30 bg-success/5' : '',
        onClick ? 'cursor-pointer hover:shadow-md' : ''
      )}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div
          className={cn(
            'flex items-center justify-center w-10 h-10 rounded-full text-white font-medium mr-3',
            isActive ? 'bg-primary' : '',
            isCompleted ? 'bg-success' : '',
            !isActive && !isCompleted ? 'bg-gray-300' : ''
          )}
        >
          {isCompleted ? <Check className="w-5 h-5" /> : step}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default DiagnosticStep;
