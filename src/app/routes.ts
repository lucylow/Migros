import { AppSelector } from "./screens/AppSelector";
import { ScreenShowcase } from "./components/ScreenShowcase";
import { FeatureHighlights } from "./screens/FeatureHighlights";
import { Documentation } from "./screens/Documentation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppSelector,
  },
  {
    path: "/showcase",
    Component: ScreenShowcase,
  },
  {
    path: "/features",
    Component: FeatureHighlights,
  },
  {
    path: "/docs",
    Component: Documentation,
  },
  {
    path: "/migros",
    Component: Welcome,
  },
  {
    path: "/personalization",
    Component: Personalization,
  },
  {
    path: "/privacy",
    Component: Privacy,
  },
  {
    path: "/onboarding-success",
    Component: OnboardingSuccess,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/search-active",
    Component: SearchActive,
  },
  {
    path: "/fondue-bundle",
    Component: FondueBundle,
  },
  {
    path: "/customize-bundle",
    Component: CustomizeBundle,
  },
  {
    path: "/stockout-case",
    Component: StockoutCase,
  },
  {
    path: "/in-store",
    Component: InStoreMode,
  },
  {
    path: "/visual-search",
    Component: VisualSearch,
  },
  {
    path: "/supervisor-dashboard",
    Component: SupervisorDashboard,
  },
  {
    path: "/supervisor-review",
    Component: SupervisorReview,
  },
]);