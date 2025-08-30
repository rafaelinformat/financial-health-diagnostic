
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  HeartPulse,
  Stethoscope,
  LineChart,
  User,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
  FileText,
} from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isCollapsed: boolean;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon: Icon,
  label,
  isCollapsed,
  isActive,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        'flex items-center px-3 py-3 mb-1 rounded-lg transition-all duration-200',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-foreground/70 hover:bg-accent hover:text-accent-foreground'
      )}
    >
      <Icon className="w-5 h-5 mr-3" />
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/financial-health', label: 'Saúde Financeira', icon: HeartPulse },
    { to: '/financial-treatment', label: 'Tratamento Financeiro', icon: Stethoscope },
    { to: '/monitoring', label: 'Monitoramento', icon: LineChart },
    { to: '/account', label: 'Minha Conta', icon: User },
    { to: '/help', label: 'Central de Ajuda', icon: HelpCircle },
  ];

  return (
    <div
      className={cn(
        'h-screen bg-sidebar border-r border-border p-4 transition-all duration-300',
        isCollapsed ? 'w-20' : 'w-64',
        className
      )}
    >
      <div className="flex items-center justify-between mb-8">
        {!isCollapsed && (
          <div className="text-lg font-semibold ml-2">FinHealth</div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-lg p-2 hover:bg-muted transition-colors duration-200"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="space-y-1">
        {links.map((link) => (
          <SidebarLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
            isCollapsed={isCollapsed}
            isActive={location.pathname === link.to || location.pathname.startsWith(`${link.to}/`)}
          />
        ))}
      </div>

      <div className="absolute bottom-4 w-full pr-8">
        <Link
          to="/login"
          className={cn(
            'flex items-center px-3 py-3 rounded-lg text-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-200',
          )}
        >
          <LogOut className="w-5 h-5 mr-3" />
          {!isCollapsed && <span>Sair</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
