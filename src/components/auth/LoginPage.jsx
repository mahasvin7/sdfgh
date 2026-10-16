import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  RefreshCw, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Award, 
  ArrowRight,
  HelpCircle,
  X
} from 'lucide-react';

export default function LoginPage() {
  const { loginUser } = useApp();

  // Form fields
  const [selectedRole, setSelectedRole] = useState('evaluator'); // 'evaluator' | 'clinician' | 'student'
  const [email, setEmail] = useState('evaluator@sfic2026.gov.in');
  const [password, setPassword] = useState('Prototype@2026');
  const [showPassword, setShowPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('7K9M2');
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

  // Generate random human-style Gov portal captcha
  const refreshCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
    setErrorMessage('');
  };

  // Role quick switch handler
  const handleRoleSelect = (roleKey) => {
    setSelectedRole(roleKey);
    setErrorMessage('');
    if (roleKey === 'evaluator') {
      setEmail('evaluator@sfic2026.gov.in');
      setPassword('Prototype@2026');
    } else if (roleKey === 'clinician') {
      setEmail('dr.sharma@health.gov.in');
      setPassword('ClinicalReview@2026');
    } else {
      setEmail('student.fellow@aiims.edu.in');
      setPassword('StudentDemo@2026');
    }
  };

  // Submission handler
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Please enter both Email/User ID and Password.');
      return;
    }

    // Captcha validation
    if (captchaInput.trim().toUpperCase() !== captchaCode) {
      setErrorMessage('Captcha verification failed. Please enter the 5 characters shown.');
      return;
    }

    // Prepare session profile
    let profileName = 'SFIC Evaluator';
    let institution = 'SFIC 2026 National Jury Panel';
    if (selectedRole === 'clinician') {
      profileName = 'Dr. Rajesh Sharma, MD (Radiology)';
      institution = 'Department of Radiodiagnosis & Imaging';
    } else if (selectedRole === 'student') {
      profileName = 'Ananya Patel (Student Fellow)';
      institution = 'Biomedical Informatics Research Group';
    }

    loginUser({
      name: profileName,
      email: email,
      role: selectedRole,
      institution: institution,
      loginTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  };

  // Instant one-click guest evaluator access
  const handleInstantGuestAccess = () => {
    loginUser({
      name: 'Guest SFIC Reviewer',
      email: 'guest.reviewer@sfic2026.gov.in',
      role: 'evaluator',
      institution: 'SFIC 2026 Evaluation Panel',
      loginTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Portal Overview & National Theme Context */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Brand Logo & Wordmark */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-md bg-[#17365D] flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <line x1="8" y1="8" x2="16" y2="8" stroke="#13836B" strokeWidth="2.5" />
                <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="2" />
                <line x1="8" y1="16" x2="12" y2="16" stroke="white" strokeWidth="2" />
                <circle cx="15.5" cy="16" r="1.5" fill="#13836B" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-extrabold tracking-tight">
                <span className="text-[#17365D]">SOUL</span>{' '}
                <span className="text-[#13836B]">Radiology</span>
              </div>
              <p className="text-xs text-text-muted font-medium">
                Radiology Report Understanding Prototype
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E8F5F1] text-[#13836B] text-xs font-semibold border border-[#13836B]/20">
              <Award className="w-3.5 h-3.5" />
              SFIC 2026 — Theme 03: Swasth & Samavesh Bharat
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
              AI-Assisted Radiology Report Understanding Platform
            </h1>
            <p className="text-sm text-text-muted leading-relaxed">
              Demonstrating how complex written radiology reports can be translated into structured findings, plain-language explanations, and clear clinician-review prompts for inclusive healthcare communication.
            </p>
          </div>

          {/* Key Prototype Highlights */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-start gap-2.5 text-xs text-text-primary">
              <CheckCircle2 className="w-4 h-4 text-[#13836B] mt-0.5 shrink-0" />
              <span><strong>Predefined Synthetic Analysis:</strong> Deterministic, reproducible test reports for consistent jury review.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-text-primary">
              <CheckCircle2 className="w-4 h-4 text-[#13836B] mt-0.5 shrink-0" />
              <span><strong>Source Traceability:</strong> Interactive highlighting linking structured observations directly to original report sentences.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-text-primary">
              <CheckCircle2 className="w-4 h-4 text-[#13836B] mt-0.5 shrink-0" />
              <span><strong>File Ingestion & Visual Display:</strong> Upload and inspect written reports, with radiological scan viewer for display reference.</span>
            </div>
          </div>

          {/* Instant Demo Quick Start Card */}
          <div className="p-4 rounded-md bg-[#EAF0F8] border border-[#D9E1EA]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#17365D]">Evaluation Access for Judges & Reviewers</p>
                <p className="text-[11px] text-text-muted">Bypass manual entry and explore the full functional prototype immediately.</p>
              </div>
              <button
                type="button"
                onClick={handleInstantGuestAccess}
                className="btn-primary text-xs !py-2 !px-3 font-semibold shrink-0"
              >
                Instant Access <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Authentic Indian Health Portal Login Form */}
        <div className="lg:col-span-6">
          <div className="brand-card p-6 sm:p-7 shadow-sm">
            
            <div className="border-b border-border-default pb-4 mb-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-text-primary">
                    Portal Authentication
                  </h2>
                  <p className="text-xs text-text-muted">
                    सुरक्षित लॉगिन | Secure Evaluation Sign-In
                  </p>
                </div>
                <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-medium border border-slate-200">
                  v1.0 (SFIC 2026)
                </span>
              </div>
            </div>

            {/* Role Switcher Tabs */}
            <div className="mb-5">
              <label className="block text-xs font-medium text-text-primary mb-1.5">
                Select Sign-In Profile / उपयोगकर्ता भूमिका
              </label>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-md border border-border-default">
                <button
                  type="button"
                  onClick={() => handleRoleSelect('evaluator')}
                  className={`py-1.5 px-2 text-xs font-semibold rounded-md transition ${
                    selectedRole === 'evaluator'
                      ? 'bg-white text-[#17365D] shadow-sm border border-slate-200'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  SFIC Evaluator
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleSelect('clinician')}
                  className={`py-1.5 px-2 text-xs font-semibold rounded-md transition ${
                    selectedRole === 'clinician'
                      ? 'bg-white text-[#17365D] shadow-sm border border-slate-200'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  Medical Officer
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleSelect('student')}
                  className={`py-1.5 px-2 text-xs font-semibold rounded-md transition ${
                    selectedRole === 'student'
                      ? 'bg-white text-[#17365D] shadow-sm border border-slate-200'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  Student / Fellow
                </button>
              </div>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200 flex items-start gap-2 text-xs text-[#B42318]">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Sign-In Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              
              {/* User ID / Email */}
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Official Email / Government ID (ईमेल या यूजर आईडी)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm border border-border-default rounded-md bg-white focus:outline-none focus:border-[#13836B] focus:ring-1 focus:ring-[#13836B]"
                    placeholder="name@health.gov.in"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-text-primary">
                    Security Password (पासवर्ड)
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsForgotModalOpen(true)}
                    className="text-[11px] text-[#13836B] hover:underline"
                  >
                    Demo credentials helper?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-9 pr-10 py-2 text-sm border border-border-default rounded-md bg-white focus:outline-none focus:border-[#13836B] focus:ring-1 focus:ring-[#13836B]"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Standard Indian Portal Captcha Verification */}
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Verification Code (कैप्चा कोड दर्ज करें)
                </label>
                <div className="flex items-center gap-2">
                  {/* Styled Captcha Graphic Block */}
                  <div className="bg-[#17365D] text-white font-mono font-bold tracking-widest text-lg px-3.5 py-1.5 rounded-md select-none border border-[#0d213a] shadow-inner flex items-center justify-center min-w-[110px]">
                    <span className="italic tracking-[0.25em]">{captchaCode}</span>
                  </div>
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="p-2 border border-border-default rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
                    title="Refresh Captcha"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    placeholder="Type code"
                    maxLength={5}
                    required
                    className="flex-1 px-3 py-2 text-sm uppercase tracking-wider font-mono border border-border-default rounded-md bg-white focus:outline-none focus:border-[#13836B] focus:ring-1 focus:ring-[#13836B]"
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-text-muted">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-border-default text-[#17365D] focus:ring-[#13836B]"
                  />
                  Remember this evaluation workstation
                </label>
              </div>

              {/* Primary Action Button (Decent 8px radius, 44px min height) */}
              <button
                type="submit"
                className="w-full btn-primary font-semibold text-sm !h-11 mt-2 shadow-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                Sign In to Evaluation Platform
              </button>

            </form>

            {/* Quick Autofill Demo Credentials Indicator */}
            <div className="mt-4 pt-3 border-t border-border-default flex items-center justify-between text-[11px] text-text-muted">
              <span>Demo Mode Active</span>
              <button
                type="button"
                onClick={() => {
                  setCaptchaInput(captchaCode);
                }}
                className="text-[#13836B] font-semibold hover:underline"
              >
                Auto-fill Captcha ({captchaCode})
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Forgot / Demo Credentials Modal */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-card max-w-md w-full p-6 shadow-xl border border-border-default relative">
            <button
              onClick={() => setIsForgotModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-5 h-5 text-[#13836B]" />
              <h3 className="font-bold text-base text-text-primary">Demo Evaluation Credentials</h3>
            </div>
            <p className="text-xs text-text-muted mb-4">
              This prototype is prepared for the SFIC 2026 Evaluation Panel. You can use any of the pre-configured accounts:
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <p className="font-semibold text-[#17365D]">1. SFIC Evaluator / Judge</p>
                <p className="text-slate-600">ID: <code className="text-slate-800">evaluator@sfic2026.gov.in</code></p>
                <p className="text-slate-600">Password: <code className="text-slate-800">Prototype@2026</code></p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <p className="font-semibold text-[#17365D]">2. Medical Officer / Radiologist</p>
                <p className="text-slate-600">ID: <code className="text-slate-800">dr.sharma@health.gov.in</code></p>
                <p className="text-slate-600">Password: <code className="text-slate-800">ClinicalReview@2026</code></p>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setIsForgotModalOpen(false)}
                className="btn-secondary text-xs !py-1.5 !px-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
