"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Building2, 
  MapPin, 
  Globe,
  Leaf,
  UserCircle2
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NgoOnboardingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ngoDetails, setNgoDetails] = useState({
    name: '',
    location: '',
    domains: [] as string[]
  });
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  const predefinedDomains = [
    "Education", "Environment", "Healthcare", 
    "Human Rights", "Animal Welfare", "Arts & Culture",
    "Disaster Relief", "Poverty Alleviation"
  ];

  const commonCities = [
    "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX",
    "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX", "San Diego, CA",
    "Dallas, TX", "San Jose, CA", "Austin, TX", "Jacksonville, FL",
    "Fort Worth, TX", "Columbus, OH", "San Francisco, CA", "Charlotte, NC",
    "Indianapolis, IN", "Seattle, WA", "Denver, CO", "Washington, DC",
    "Boston, MA", "Mumbai, India", "Delhi, India", "Bengaluru, India",
    "London, UK", "Toronto, Canada", "Sydney, Australia"
  ];

  const filteredCities = commonCities.filter(city => 
    city.toLowerCase().includes(ngoDetails.location.toLowerCase())
  );

  const toggleDomain = (domain: string) => {
    setNgoDetails(prev => {
      const domains = prev.domains;
      if (domains.includes(domain)) {
        return { ...prev, domains: domains.filter(d => d !== domain) };
      } else {
        return { ...prev, domains: [...domains, domain] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ngoDetails.domains.length === 0) {
      alert("Please select at least one primary domain.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/dashboard');
    }, 1500);
  };

  const steps = [
    {
      id: 1,
      title: 'Sign Up',
      description: 'Account created successfully.',
      isCompleted: true,
      isActive: false,
    },
    {
      id: 2,
      title: 'Organization Details',
      description: 'Provide information to help volunteers understand your cause.',
      isCompleted: false,
      isActive: true,
    },
    {
      id: 3,
      title: 'Start Making an Impact',
      description: 'Find volunteers and manage projects.',
      isCompleted: false,
      isActive: false,
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col md:flex-row font-sans">
      
      {/* Left Sidebar */}
      <div className="w-full md:w-[35%] lg:w-[30%] bg-white border-r border-slate-200 p-8 md:p-12 flex flex-col min-h-screen shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center transform -rotate-6 transition-transform hover:rotate-0 duration-300">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Sahyog</span>
        </div>

        <div className="mb-10">
          <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Welcome NGO!</p>
          <h1 className="text-3xl font-bold text-slate-900 leading-tight">
            Let's set your organization up for success!
          </h1>
        </div>

        {/* Stepper */}
        <div className="flex-1">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className={`absolute left-[11px] top-8 bottom-[-24px] w-[2px] transition-colors duration-300 ${
                    step.isCompleted ? 'bg-emerald-500' : 'bg-slate-100'
                  }`} />
                )}
                
                <div className={`flex items-start gap-4 transition-all duration-300 ${
                  step.isActive ? 'opacity-100 translate-x-1' : 'opacity-60 hover:opacity-80'
                }`}>
                  <div className="mt-0.5 relative bg-white z-10">
                    {step.isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 fill-emerald-50" />
                    ) : step.isActive ? (
                      <div className="w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                      </div>
                    ) : (
                      <Circle className="w-6 h-6 text-slate-300" />
                    )}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-base mb-1 ${
                      step.isActive ? 'text-slate-900' : 'text-slate-700'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      step.isActive ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-auto pt-8 border-t border-slate-100">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
              <UserCircle2 className="w-4 h-4" />
            </div>
            <p>Need help? <Link href="/support" className="text-emerald-600 font-medium hover:underline">Contact Support</Link></p>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-8 md:p-12 lg:p-20 overflow-y-auto">
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Register your NGO
            </h2>
            <p className="text-slate-500 text-lg">
              Help volunteers understand what your organization does and where you're located.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Organization Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Building2 className="h-5 w-5" />
                </div>
                <input 
                  type="text" 
                  required
                  value={ngoDetails.name}
                  onChange={(e) => setNgoDetails({...ngoDetails, name: e.target.value})}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none text-slate-700 placeholder:text-slate-400"
                  placeholder="e.g. Global Green Initiative"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 ml-1">Primary Domains</label>
              <div className="flex flex-wrap gap-2">
                {predefinedDomains.map((domain) => (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => toggleDomain(domain)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      ngoDetails.domains.includes(domain)
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {domain}
                  </button>
                ))}
              </div>
              {ngoDetails.domains.length === 0 && (
                <p className="text-xs text-rose-500 ml-1">Please select at least one primary domain.</p>
              )}
            </div>

            <div className="space-y-2 relative">
              <label className="text-sm font-semibold text-slate-700 ml-1">Headquarters / Location</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <input 
                  type="text" 
                  required
                  value={ngoDetails.location}
                  onFocus={() => setShowLocationSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowLocationSuggestions(false), 200)}
                  onChange={(e) => {
                    setNgoDetails({...ngoDetails, location: e.target.value});
                    setShowLocationSuggestions(true);
                  }}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none text-slate-700 placeholder:text-slate-400"
                  placeholder="e.g. San Francisco, CA"
                  autoComplete="off"
                />
              </div>
              {/* Autocomplete Dropdown */}
              {showLocationSuggestions && ngoDetails.location.length > 0 && filteredCities.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
                  {filteredCities.map((city, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setNgoDetails({ ...ngoDetails, location: city });
                        setShowLocationSuggestions(false);
                      }}
                      className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-slate-700 text-sm border-b border-slate-100 last:border-0 transition-colors"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                By completing this, you agree to our <Link href="/terms" className="text-emerald-600 hover:underline">Terms of Service</Link>
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-emerald-400 text-white cursor-wait'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_4px_14px_0_rgb(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? 'Saving...' : 'Complete Setup'} 
                {!isSubmitting && <CheckCircle2 className="w-5 h-5" />}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
