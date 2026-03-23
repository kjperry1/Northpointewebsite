import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { createGHLContact } from '../services/gohighlevel';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
}

export function FinalCTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
        source: 'Website CTA Form',
        tags: ['investor-network', 'bottom-cta'],
      });

      if (result.success) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[var(--emerald-dark)] to-[var(--emerald)] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="h-px w-24 bg-[var(--gold)] mb-10 mx-auto"></div>
        
        <h2 className="text-4xl md:text-6xl mb-6">
          Join the North Pointe Investor Network
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Gain access to exclusive multifamily investment opportunities, detailed market analysis, and quarterly performance updates.
        </p>

        {/* Contact Form */}
        <div className="max-w-md mx-auto mb-12">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-400/50 rounded-sm flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
              <p className="text-green-100 text-sm">Thank you! We'll be in touch soon.</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-400/50 rounded-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
              <p className="text-red-100 text-sm">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <div className="text-left">
              <Input
                type="text"
                {...register('name', {
                  required: 'Full name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
                className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white/10 text-white placeholder:text-white/50 ${
                  errors.name ? 'border-red-400' : 'border-white/30'
                }`}
                placeholder="Full Name"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>
              )}
            </div>

            <div className="text-left">
              <Input
                type="email"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
                className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white/10 text-white placeholder:text-white/50 ${
                  errors.email ? 'border-red-400' : 'border-white/30'
                }`}
                placeholder="Email Address"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--black)] py-4 px-6 rounded-sm transition-all duration-300 tracking-wide shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Submitted!
                </>
              ) : (
                'Join the Network'
              )}
            </button>
          </form>
        </div>

        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="mb-2 text-[var(--gold)]">Contact</h4>
              <p className="text-white/70">info@northpointecapital.com</p>
            </div>
            <div>
              <h4 className="mb-2 text-[var(--gold)]">Location</h4>
              <p className="text-white/70">Serving Markets Nationwide</p>
            </div>
            <div>
              <h4 className="mb-2 text-[var(--gold)]">Investment Focus</h4>
              <p className="text-white/70">Multifamily Real Estate</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-xs text-white/50">
          <p>© {new Date().getFullYear()} North Pointe Capital Group. All rights reserved.</p>
          <p className="mt-2">
            Securities offered through private placement. This is not an offer to sell securities.
          </p>
        </div>
      </div>
    </section>
  );
}