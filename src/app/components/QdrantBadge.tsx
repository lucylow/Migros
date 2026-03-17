import { Zap, Database, TrendingUp, Sparkles } from 'lucide-react';

interface QdrantBadgeProps {
  type: 'bm42' | 'dense' | 'hybrid' | 'episode';
  size?: 'sm' | 'md';
}

export function QdrantBadge({ type, size = 'sm' }: QdrantBadgeProps) {
  const badges = {
    bm42: {
      label: 'BM42',
      icon: Database,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      tooltip: 'BM42 keyword search hit',
    },
    dense: {
      label: 'Dense',
      icon: Sparkles,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      tooltip: 'Dense vector similarity match',
    },
    hybrid: {
      label: 'Hybrid',
      icon: Zap,
      color: 'bg-orange-50 text-orange-700 border-orange-200',
      tooltip: 'Hybrid BM42 + dense search',
    },
    episode: {
      label: 'Episode',
      icon: TrendingUp,
      color: 'bg-green-50 text-green-700 border-green-200',
      tooltip: 'Episode learning boosted',
    },
  };

  const badge = badges[type];
  const Icon = badge.icon;

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  return (
    <div
      className={`inline-flex items-center gap-1 ${badge.color} border rounded-full ${sizeClasses}`}
      title={badge.tooltip}
    >
      <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
      <span>{badge.label}</span>
    </div>
  );
}
