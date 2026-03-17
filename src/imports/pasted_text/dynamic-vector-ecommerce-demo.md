1.4 In-Store Mode – Using Dynamic Vector While Walking the Aisles (2–3 screens)
Screen 10 – In-Store Mode Toggle

Toggle in the home screen:

Small pill at top: “You’re near Migros Geneva Cornavin – Switch to In-Store Mode?”

Tap → open secondary home screen in “in-store” theme (more emphasis on scanning and navigation).

Screen 11 – In-Store Checklist

Header: “Fondue Kit In-Store”

Show a checklist style:

Each item with:

Icon of aisle or small map mini-icon.

“Cheese – Aisle 5 · Shelf 3”.

Checkbox to mark “Got it”.

“Optimize path” CTA: reorders list into shortest walking route.

Screen 12 – Visual Search In-Store

Camera-view screen:

Prompt: “Take a photo of any cheese and we’ll suggest the best fondue mix.”

Bottom: “Powered by Dynamic Vector multimodal RAG”.

After capture, show:

Suggested cheese and bundle modifications.

1.5 Merchant / Store Supervisor Mobile (Optional but Recommended, 2–3 screens)
Design a lightweight internal app view for Migros employees:

Screen 13 – Supervisor Overview

KPIs:

“Fondue bundles today: 124”.

“Auto-approved: 92% · Human review: 8%”.

“Avg margin: 14.2% (+2.1%)”.

List of “Bundles flagged for review” with quick approve/reject.

Screen 14 – Bundle Detail for Review

Show the same bundle card as customer sees.

Extra section: “Model reasoning (summarized)” – 3 bullets.

Buttons: Approve / Modify / Reject.

2. Ecommerce Qdrant Dataset Example – Dynamic Vector Mobile
The second mobile concept is more agnostic / B2B-ish: a generic ecommerce retailer powered by Qdrant datasets and Dynamic Vector. This is ideal as a demo app to show to Qdrant, HF, or judges.

Again, assume 390×844.

2.1 Brand & Theme
Neutral brand: “Dynamic Vector Commerce” or “DV-Shop”.

Colors: dark slate primary, electric blue highlights for “vector / data” feel.

Use subtle geometric backgrounds that hint at “vectors” and “embeddings”.

2.2 Onboarding: Explain Qdrant-Powered Personalization (2–3 screens)
Screen 1 – Welcome

Title: “Dynamic Vector Commerce”.

Subtext: “Ecommerce powered by Qdrant datasets & agentic RAG.”

Visual: minimal grid of dots with one bright vector arrow.

Screen 2 – How it works

Three horizontal illustrated tiles:

“We learn from public Qdrant datasets”

“Our search is calibrated on real-world BM25/BM42 benchmarks.”

“We adapt to your store”

“Point us at your product feed & we build vector indexes on the fly.”

“We respect your data”

“Customer data never trains global models; we only store vectors.”

Screen 3 – Choose mode

Radiobuttons:

“Shop as a customer (demo)”.

“View as merchandiser / operator”.

2.3 Customer Mode – Home & Search (3–4 screens)
Screen 4 – Customer Home

App bar: logo + “DV-Shop”.

Big search input:

Placeholder: “Search anything… (‘green running shoes under CHF 120’)”.

Under search:

“What’s new” horizontal chips:

“Sports”. “Electronics”. “Home & Kitchen”. “Groceries”.

“Dynamic Bundles” section:

Card: “Starter Home Office Setup”

“Monitors, keyboard, chair · 18% cheaper as a bundle · In stock”.

Card: “New Apartment Basics”.

Screen 5 – Query Example 1: Complex Text Search

User query: “Quiet dishwasher, under CHF 800, for a 4-person family”.

Show Dynamic Vector thinking:

Line: “Rewritten query (Qdrant hybrid): ‘silent dishwasher 4 person energy efficient < 800’”.

Tag: “Hybrid search: BM42 + vectors”.

Results list:

Each result shows badge: “Hybrid rank” with small K and score.

Micro tags:

“BM42 hit”. “Dense hit”. “Episode boosted”.

2.4 Product Detail – Qdrant Dataset Demo (2–3 screens)
Screen 6 – Product Detail (Qdrant Dataset-Inspired)

Show a product (e.g., “Green Trail Running Shoes”).

Section: “Why this was recommended”:

“Matched your query terms: ‘green’, ‘under 120’ (BM42).”

“Matched your click history on trail gear (vectors).”

“Episode: users who bought this also bought hydration pack X.”

Section: “Compare with similar”:

Horizontal related items row:

Each card labels the Qdrant signal: “BM42 top-1”, “Hybrid boosted”, etc.

Screen 7 – Add to Cart + Dynamic Cross-Sell

When “Add to cart” is tapped:

Bottom sheet: “Complete your kit”

“Socks · recommended (episode-based)”

“Water bottle · recommended (minicoil dataset pattern)”.

Short explanation text referencing “learned from Qdrant benchmark patterns” (for demo).

2.5 Multi-Turn Conversational Shopping (2–3 screens)
Screen 8 – Chat-First UI

Whole screen chat interface, like WhatsApp but in DV-Shop branding.

System message at top: “Ask for anything. I’ll search our catalog and build bundles.”

User message: “I’m moving into a new studio, need essentials for under CHF 500.”

Assistant (Apertus) messages:

1st: clarifying questions (if needed).

2nd: “Got it, I’ll propose 2 bundles: Minimal and Comfort.”

Screen 9 – Bundles in Chat

Show two embedded cards in chat:

“Minimal Setup – CHF 320” (bed, basic kitchen set, cleaning kit).

“Comfort Setup – CHF 480” (upgraded mattress, extra storage).

Buttons inside cards:

“Inspect bundle” / “Add to cart”.

Under each card, small line:

“Optimized with Qdrant hybrid RAG · BM42 + dense + episodes”.

2.6 Operator / Merchandiser Mobile (3–4 screens)
This mode visualizes the Qdrant datasets and search quality.

Screen 10 – Operator Home

Tabs: “Quality”, “Traffic”, “Catalog”.

In “Quality”:

Mini dashboards:

“Hybrid vs BM42 only: NDCG@10” – gauge.

“Top failing queries (no relevant results)”.

Screen 11 – Query Debugger

Input at top: “quiet dishwasher 800”.

Results:

Top 3 documents with:

Highlighted matched terms.

Bars showing BM42 vs dense scores.

Flags: “Episode boost applied? yes/no”.

Screen 12 – Dataset Explorer

Show a list of Qdrant HF datasets integrated:

“Qdrant/bm25” – 12k docs.

“Qdrant/minicoil-v1” – 50k docs.

Tap into one:

Show example query/label pairs and current performance.

2.7 Checkout Flow – Closing the Loop (2 screens)
Screen 13 – Cart Summary

Standard ecommerce cart, but with:

A banner: “Dynamic Vector saved you ~CHF 27 by optimizing combinations.”

Line per item showing:

“Price vs typical alternative” mini label.

Screen 14 – Confirmation

After payment success:

Show summary:

“3 bundles, 11 items.”

“We’ll use this order to improve your future suggestions (without storing personal text).”

CTA: “View how your recommendations are improved” → optional analytics screen.

2.8 Cross-Cutting Elements You Should Specify in Figma
For both concepts, define:

Typography scale:

H1, H2, body, captions.

Color system:

Primaries, neutral text, backgrounds, semantic colors (success, warning, info).

Components:

Search bar.

Bundle card.

Product row.

Chat bubble.

Progress stepper (3-step “agent thinking” bar).

Bottom sheets.

Switches, chips, tags (“BM42 hit”, “Episode boosted”, “Hybrid search”).

States:

Loading (skeleton cards).

Error (e.g., “no stock – we’ll suggest alternatives”).

Empty states (no history, first-time use).

Make sure each of the two flows (Migros supermarket, generic ecommerce Qdrant dataset shop) has:

10–12 primary screens plus a handful of states (loading/empty/error),

Enough component detail that a Figma designer can wire an interactive prototype,

Clear references to Dynamic Vector / agentic RAG behavior visible in the UI (not hidden “magic”).

This full description is your 15+ pages of text-equivalent design spec for two mobile mockup systems.