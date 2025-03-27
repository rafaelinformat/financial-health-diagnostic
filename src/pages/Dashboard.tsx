
import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, LightbulbIcon } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import HealthCard from '@/components/HealthCard';
import KpiCard from '@/components/KpiCard';
import { Card } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Financial Health Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your business health and get actionable insights
          </p>
        </div>
        
        {/* Health Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HealthCard
            title="Overall Financial Health"
            description="Your business is performing well with strong fundamentals"
            value={85}
            colorScheme="success"
          />
          <HealthCard
            title="Cash Flow Status"
            description="Moderate cash flow with room for improvement"
            value={65}
            colorScheme="warning"
          />
          <HealthCard
            title="Growth Potential"
            description="Excellent growth prospects based on current trends"
            value={92}
            colorScheme="success"
          />
        </div>
        
        {/* KPI Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard
              title="Revenue"
              value="125,000"
              change={12.5}
              prefix="$"
            />
            <KpiCard
              title="Expenses"
              value="82,000"
              change={5.2}
              prefix="$"
            />
            <KpiCard
              title="Profit Margin"
              value="28.5"
              change={2.1}
              suffix="%"
            />
            <KpiCard
              title="Cash Reserve"
              value="43,000"
              change={-8.3}
              prefix="$"
            />
          </div>
        </div>
        
        {/* Recommendations Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <LightbulbIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Optimize Working Capital</h3>
                    <div className="inline-block">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">High Impact</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Consider negotiating better payment terms with suppliers to improve cash flow and working capital efficiency.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <LightbulbIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Review Pricing Strategy</h3>
                    <div className="inline-block">
                      <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">Medium Impact</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Current profit margins suggest room for strategic price adjustments in key product lines.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(item => (
                <div key={item} className="flex justify-between items-center border-b border-border pb-4">
                  <div>
                    <h3 className="font-medium">Payment received</h3>
                    <p className="text-sm text-muted-foreground">Invoice #1234 - Client Name</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$5,240.00</div>
                    <p className="text-xs text-muted-foreground">Today, 2:30 PM</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Upcoming Payments */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Payments</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(item => (
                <div key={item} className="flex justify-between items-center border-b border-border pb-4">
                  <div>
                    <h3 className="font-medium">Subscription Renewal</h3>
                    <p className="text-sm text-muted-foreground">Software Service</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$899.00</div>
                    <p className="text-xs text-muted-foreground">Due in 5 days</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
