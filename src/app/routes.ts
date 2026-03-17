import { createBrowserRouter } from "react-router";
import { AppSelector } from "./screens/AppSelector";
import { ScreenShowcase } from "./components/ScreenShowcase";
import { FeatureHighlights } from "./screens/FeatureHighlights";
import { Documentation } from "./screens/Documentation";
import { Welcome } from "./screens/Welcome";
import { Personalization } from "./screens/Personalization";
import { Privacy } from "./screens/Privacy";
import { OnboardingSuccess } from "./screens/OnboardingSuccess";
import { Home } from "./screens/Home";
import { SearchActive } from "./screens/SearchActive";
import { FondueBundle } from "./screens/FondueBundle";
import { CustomizeBundle } from "./screens/CustomizeBundle";
import { StockoutCase } from "./screens/StockoutCase";
import { InStoreMode } from "./screens/InStoreMode";
import { VisualSearch } from "./screens/VisualSearch";
import { SupervisorDashboard } from "./screens/SupervisorDashboard";
import { SupervisorReview } from "./screens/SupervisorReview";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: AppSelector,
      },
      {
        path: "showcase",
        Component: ScreenShowcase,
      },
      {
        path: "features",
        Component: FeatureHighlights,
      },
      {
        path: "docs",
        Component: Documentation,
      },
      {
        path: "migros",
        Component: Welcome,
      },
      {
        path: "personalization",
        Component: Personalization,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
      {
        path: "onboarding-success",
        Component: OnboardingSuccess,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "search-active",
        Component: SearchActive,
      },
      {
        path: "fondue-bundle",
        Component: FondueBundle,
      },
      {
        path: "customize-bundle",
        Component: CustomizeBundle,
      },
      {
        path: "stockout-case",
        Component: StockoutCase,
      },
      {
        path: "in-store",
        Component: InStoreMode,
      },
      {
        path: "visual-search",
        Component: VisualSearch,
      },
      {
        path: "supervisor-dashboard",
        Component: SupervisorDashboard,
      },
      {
        path: "supervisor-review",
        Component: SupervisorReview,
      },
    ],
  },
]);