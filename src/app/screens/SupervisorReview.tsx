import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, AlertTriangle, CheckCircle, X, Edit, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function SupervisorReview() {
  return (
    <MobileFrame>
      <div className="pt-[44px] pb-20 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-[44px] z-10">
          <Link to="/supervisor-dashboard">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-900">Bundle Review</div>
            <div className="text-xs text-orange-600">B-3421</div>
          </div>
          <div className="w-10" />
        </div>

        <div className="px-6 pt-6 space-y-6 pb-32">
          {/* Alert banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 flex gap-3"
          >
            <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-orange-900 mb-1">Flagged for Review</h3>
              <p className="text-sm text-orange-700">Unusual quantity combination detected by supervisor agent</p>
            </div>
          </motion.div>

          {/* Customer info */}
          <div className="bg-white rounded-2xl p-4">
            <h3 className="text-gray-900 mb-3">Customer Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Customer ID</span>
                <span className="text-gray-900">#8742</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bundle Type</span>
                <span className="text-gray-900">Fondue Kit for 8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location</span>
                <span className="text-gray-900">Geneva</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Requested Time</span>
                <span className="text-gray-900">2 min ago</span>
              </div>
            </div>
          </div>

          {/* Bundle preview */}
          <div className="bg-white rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=600"
              alt="Fondue"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-gray-900 mb-2">Fondue Kit for 8</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Price</span>
                <span className="text-2xl text-gray-900">CHF 142.80</span>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                7 items · Serves 8 · Margin: 16.3%
              </div>
            </div>
          </div>

          {/* Items list */}
          <div className="bg-white rounded-2xl p-4 space-y-3">
            <h3 className="text-gray-900 mb-3">Bundle Items</h3>
            {[
              { name: 'Emmentaler AOP 400g', qty: 6, flag: true },
              { name: 'Bio Vollmilch 1L', qty: 4, flag: false },
              { name: 'Baguette Rustique', qty: 3, flag: false },
              { name: 'White Wine', qty: 2, flag: false },
            ].map((item, i) => (
              <div key={i} className={`flex items-center justify-between pb-3 border-b border-gray-100 last:border-0 ${item.flag ? 'bg-orange-50 -mx-4 px-4 py-2 rounded-xl' : ''}`}>
                <div className="flex items-center gap-2">
                  <div className="text-gray-900">{item.name}</div>
                  {item.flag && <AlertTriangle className="w-4 h-4 text-orange-600" />}
                </div>
                <div className="text-gray-600">× {item.qty}</div>
              </div>
            ))}
          </div>

          {/* Model reasoning */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="text-purple-900">Model Reasoning (Summarized)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Quantity flag:</strong> Customer requested 6× Emmentaler (400g each = 2.4kg total). This is 50% more than typical 8-person fondue ratios.
                </span>
              </li>
              <li className="flex gap-2">
                <div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Historical pattern:</strong> Customer #8742 has ordered large cheese quantities before (previous avg: 2.1kg for 8 people).
                </span>
              </li>
              <li className="flex gap-2">
                <div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Confidence:</strong> Bundle has 87% similarity to successful past orders, but quantity deviation triggered manual review threshold (&gt;30%).
                </span>
              </li>
            </ul>
          </div>

          {/* Recommendation */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <h4 className="text-blue-900 mb-2">AI Recommendation</h4>
            <p className="text-sm text-blue-700 mb-3">
              Based on customer history, this appears to be a valid order. Customer consistently orders larger portions. Suggest approval.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-600">
              <CheckCircle className="w-4 h-4" />
              <span>Confidence: 87%</span>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-2xl p-4">
            <label className="text-sm text-gray-700 block mb-2">Add Review Notes (Optional)</label>
            <textarea
              placeholder="Add any comments about this review..."
              className="w-full border-2 border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:border-orange-300"
              rows={3}
            />
          </div>
        </div>

        {/* Fixed bottom actions */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-gray-200 p-4 space-y-2">
          <div className="grid grid-cols-3 gap-2">
            <Link to="/supervisor-dashboard">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl transition-colors flex flex-col items-center gap-1">
                <CheckCircle className="w-5 h-5" />
                <span className="text-xs">Approve</span>
              </button>
            </Link>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl transition-colors flex flex-col items-center gap-1">
              <Edit className="w-5 h-5" />
              <span className="text-xs">Modify</span>
            </button>
            <Link to="/supervisor-dashboard">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl transition-colors flex flex-col items-center gap-1">
                <X className="w-5 h-5" />
                <span className="text-xs">Reject</span>
              </button>
            </Link>
          </div>
          <p className="text-xs text-center text-gray-500">
            Decision will be logged and used to improve future bundle validations
          </p>
        </div>
      </div>
    </MobileFrame>
  );
}