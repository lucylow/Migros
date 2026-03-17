import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function Privacy() {
  return (
    <MobileFrame>
      <div className="pt-[44px] px-6 pb-20 min-h-full bg-white">
        {/* Header */}
        <div className="flex items-center gap-4 py-4">
          <Link to="/personalization">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="flex-1">
            <div className="flex gap-2 justify-center">
              <div className="w-8 h-1 bg-orange-500 rounded-full" />
              <div className="w-8 h-1 bg-orange-500 rounded-full" />
              <div className="w-8 h-1 bg-gray-200 rounded-full" />
            </div>
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Title */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-100 rounded-full p-6">
                <Shield className="w-16 h-16 text-orange-600" />
              </div>
            </div>
            <h1 className="text-2xl text-gray-900 mb-2">Your data, your control.</h1>
            <p className="text-gray-600">Privacy-first AI recommendations</p>
          </div>

          {/* Privacy features */}
          <div className="space-y-4 bg-gray-50 rounded-3xl p-6">
            <div className="flex gap-4">
              <div className="bg-green-100 rounded-full p-3 h-fit">
                <Lock className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">Never train on personal data</h3>
                <p className="text-sm text-gray-600">
                  We never use your personal shopping data to train AI models. Your privacy is guaranteed.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            <div className="flex gap-4">
              <div className="bg-blue-100 rounded-full p-3 h-fit">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">Anonymous patterns only</h3>
                <p className="text-sm text-gray-600">
                  All recommendations are computed from anonymous, aggregated shopping patterns.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            <div className="flex gap-4">
              <div className="bg-purple-100 rounded-full p-3 h-fit">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">Swiss data protection</h3>
                <p className="text-sm text-gray-600">
                  All data stored in Switzerland under strict GDPR and Swiss DPA compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4">
            <p className="text-sm text-gray-700 text-center">
              Figma Make is not designed for collecting PII or securing sensitive data. This is a demo application.
            </p>
          </div>

          {/* Learn more link */}
          <div className="text-center">
            <button className="text-orange-600 text-sm hover:underline">
              View detailed privacy policy →
            </button>
          </div>
        </motion.div>

        {/* Continue button */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[342px]">
          <Link to="/onboarding-success">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl transition-colors shadow-lg">
              Okay, continue
            </button>
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
