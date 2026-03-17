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
import { SupervisorAdHome } from "./screens/SupervisorAdHome";
import { SupervisorAdBrief } from "./screens/SupervisorAdBrief";
import { SupervisorAdPreview } from "./screens/SupervisorAdPreview";
import { SupervisorAdDetail } from "./screens/SupervisorAdDetail";
import { SupervisorAdPublish } from "./screens/SupervisorAdPublish";
import { SupervisorAdAnalytics } from "./screens/SupervisorAdAnalytics";
import { SupervisorAdVideo } from "./screens/SupervisorAdVideo";
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
      {
        path: "supervisor-ad-home",
        Component: SupervisorAdHome,
      },
      {
        path: "supervisor-ad-brief",
        Component: SupervisorAdBrief,
      },
      {
        path: "supervisor-ad-preview",
        Component: SupervisorAdPreview,
      },
      {
        path: "supervisor-ad-detail",
        Component: SupervisorAdDetail,
      },
      {
        path: "supervisor-ad-publish",
        Component: SupervisorAdPublish,
      },
      {
        path: "supervisor-ad-analytics",
        Component: SupervisorAdAnalytics,
      },
      {
        path: "supervisor-ad-video",
        Component: SupervisorAdVideo,
      },
    ],
  },
]);