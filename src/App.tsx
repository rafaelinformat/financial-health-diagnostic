
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FinancialHealth from "./pages/FinancialHealth";
import FinancialTreatment from "./pages/FinancialTreatment";
import Monitoring from "./pages/Monitoring";
import Account from "./pages/Account";
import HelpCenter from "./pages/HelpCenter";
import DiagnosticHistory from "./pages/DiagnosticHistory";
import DiagnosticDetail from "./pages/DiagnosticDetail";
import DiagnosticDetailed from "./pages/DiagnosticDetailed";
import NotFound from "./pages/NotFound";
import DiagnosticDetailFeb from './pages/DiagnosticDetailFeb';
import DiagnosticDetailDec2024 from './pages/DiagnosticDetailDec2024';
import DiagnosticDetailNov2023 from './pages/DiagnosticDetailNov2023';
import DiagnosticDetailJan2025 from './pages/DiagnosticDetailJan2025';
import DiagnosticDetailTecnoMontagens from './pages/DiagnosticDetailTecnoMontagens';
import DiagnosticDetailFeb2025 from './pages/DiagnosticDetailFeb2025';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/financial-health" element={<FinancialHealth />} />
          <Route path="/financial-health/history" element={<DiagnosticHistory />} />
          <Route path="/financial-health/details/:id" element={<DiagnosticDetail />} />
          <Route path="/financial-health/details-jan-2025/:id" element={<DiagnosticDetailJan2025 />} />
          <Route path="/financial-health/details-feb/:id" element={<DiagnosticDetailFeb />} />
          <Route path="/financial-health/details-dec-2024/:id" element={<DiagnosticDetailDec2024 />} />
          <Route path="/financial-health/details-nov-2023/:id" element={<DiagnosticDetailNov2023 />} />
          <Route path="/financial-health/details-tecno-montagens/:id" element={<DiagnosticDetailTecnoMontagens />} />
          <Route path="/financial-health/details-feb2025/:id" element={<DiagnosticDetailFeb2025 />} />
          <Route path="/financial-health/detailed" element={<DiagnosticDetailed />} />
          <Route path="/financial-treatment" element={<FinancialTreatment />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/account" element={<Account />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
