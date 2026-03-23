import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { createGHLContact } from '../services/gohighlevel';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { NorthPointeLogo } from './NorthPointeLogo';

interface GateSectionProps {
  onSubmit: (name: string, email: string) => void;
}

interface FormData {
  name: string;
  email: string;
}

export function GateSection({ onSubmit }: GateSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Submit to GoHighLevel
      const result = await createGHLContact({
        name: data.name,
        email: data.email,
        source: 'Website Gate Entry',
        tags: ['investor-network', 'gated-entry'],
      });

      if (result.success) {
        setSubmitStatus('success');
        // Wait a moment to show success message, then proceed
        setTimeout(() => {
          onSubmit(data.name, data.email);
        }, 1000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1643612695138-7d697b4e60d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzcyUyMGIlMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMG1pZHJpc2V8ZW58MXx8fHwxNzczODA3Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg w-full mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-sm shadow-2xl border border-[var(--gold)]/20">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <NorthPointeLogo variant="dark" />
            <div className="h-px w-16 bg-[var(--gold)] mt-6 mx-auto"></div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl mb-4 text-center text-[var(--emerald-dark)]">
            Access Private Multifamily Investment Opportunities
          </h2>
          
          <p className="text-center text-gray-600 mb-8 leading-relaxed">
            Join the North Pointe Investor Network to receive access to curated apartment investment opportunities.
          </p>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800 text-sm">Successfully registered! Redirecting...</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-800 text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-[var(--black)]">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                {...register('name', {
                  required: 'Full name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z\s'-]+$/,
                    message: 'Please enter a valid name',
                  },
                })}
                className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John Smith"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-[var(--black)]">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
                className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john@example.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--black)] py-4 px-6 rounded-sm transition-all duration-300 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Success!
                </>
              ) : (
                'Enter Investor Network'
              )}
            </button>
          </form>

          <p className="text-xs text-center text-gray-500 mt-6">
            By entering, you agree to receive investment opportunities and updates from North Pointe Capital Group.
          </p>
        </div>
      </div>
    </div>
  );
}