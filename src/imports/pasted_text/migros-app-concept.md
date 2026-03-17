1. Migros Supermarket Mobile – Dynamic Vector Retail Brain
Design a Migros-branded mobile app concept that embeds Dynamic Vector (Qdrant + agentic RAG) into the shopper experience. Use Migros’ visual language: orange primary, white background, neutral greys, friendly rounded corners, large type.

Assume device: iPhone 15 Pro / 390×844.

1.1 Onboarding & Value Proposition (3–4 screens)
Screen 1 – Welcome / Hero

Full-screen hero illustration: simple abstract grocery basket made of soft orange shapes.

Header text:

“Migros Dynamic Vector” (H1, bold, 24–28pt).

Subheader:

“Smart bundles, less waste, faster shopping.”

Bullet list:

“Ask for ‘fondue for 6 in Geneva on Friday’ and get everything in one tap.”

“Real-time stock-aware suggestions.”

“Multilingual: DE / FR / IT / EN.”

Primary CTA: “Get started”.

Secondary: “Browse as guest”.

Screen 2 – Permissions & Personalization

Top: “Help us personalize your shop”.

Cards with toggles:

“Dietary preferences” (vegan, vegetarian, lactose-free) – chips with icons.

“Languages you speak” – segmented buttons DE / FR / IT / EN; allow multi-select.

“Household size” – slider (1–6).

CTA: “Continue”.

Screen 3 – Data & Privacy

Title: “Your data, your control.”

Two checklists:

“We never train models on your personal data.”

“All recommendations are computed from anonymous patterns.”

Small text link: “View details” → modal (later screen).

CTA: “Okay, continue”.

Screen 4 – Onboarding Success

Simple illustration of 3 agents (Shopper, Inventory, Pricing) as characters.

Text: “Agents ready: Shopper, Inventory, Pricing, Supervisor”.

Progress dots show you’re on step 3/3.

Button: “Go to Home”.

1.2 Home Screen – Dynamic Vector Search Hub (2–3 variants)
Screen 5 – Home: Search + Smart Bundles

App bar:

Left: Migros logo (M icon).

Center: “Migros – Dynamic Vector”.

Right: profile avatar.

Main elements:

Dynamic search bar (primary element):

Placeholder: “Describe what you need… (‘fondue for 6 on Friday’)”.

Mic icon on right for voice input.

Below: language chips (“DE”, “FR”, “IT”, “EN”) showing current language (e.g., DE highlighted).

Smart bundle suggestions carousel:

Card 1: “Fondue Night for 4–6”

Subtext: “Calculated from your past orders and today’s stock”.

Tag: “Bundle · Saves 12% vs buying separately”.

Card 2: “Weekly family staples”

Card 3: “Veggie Friday dinner”.

Quick actions row:

Icon buttons:

“Scan product” (barcode icon).

“My lists”.

“Orders”.

“Deals”.

Footer nav:

Home, Browse, Cart, Dynamic Vector, Profile.

Dynamic Vector tab has special glowing orange dot.

Screen 6 – Home: After a query typed

User typed: “Fondue for 6, Geneva, Friday evening”.

Show “agentic thinking” inline:

A subtle 3-step horizontal progress indicator:

Step 1: “Understanding request” (Shopper).

Step 2: “Checking stock & bundles” (Inventory).

Step 3: “Optimizing price” (Pricing).

Each step lights up with micro-animation (dots or shimmer).

Under “Suggestions in progress”, fade-in skeleton cards representing upcoming bundles.

1.3 Fondue Kit Result – Agentic Bundle Screen (3–4 states)
Screen 7 – Fondue Bundle Overview

Title: “Fondue Kit for 6 – Friday, Geneva”.

Subheading: “Dynamic Vector created this bundle just for you.”

Main bundle card:

Hero fondue photo.

Summary row:

“Items: 7 · Serves 6”.

“In stock for Friday 18–20h delivery”.

Price info:

Big price: “CHF 82.40”.

Comparison: “You save 11.6% vs individual items”.

Items list:

Each row shows product image, name, quantity, availability.

“Emmentaler AOP 400g · x3 · In stock” (green dot).

“Bio Vollmilch 1L · x3 · In stock”.

“Baguette Rustique · x2 · In stock”.

Optional extras with toggle “incl.”:

Cornichons, white wine, garlic.

Dynamic toggles:

“Adjust headcount (4–8)” – stepper; see price and quantities update live.

“Budget level” – slider: “Value ↔ Premium”.

Explanation drawer (collapsible):

Title: “Why this bundle?”

Apertus-generated text: 3–4 bullet points:

“Optimized for 6 adults with 300g cheese per person.”

“Selected products from your usual Migros branch in Geneva.”

“Includes lactose-free options based on your profile (optional).”

CTA:

Primary: “Add all to cart”.

Secondary: “Customize bundle”.

Screen 8 – Customize Bundle

Same layout but each item has:

Quantity stepper.

Replace icon.

When tapping “Replace”, open bottom sheet:

“Alternative cheeses for fondue” list (ranked by Dynamic Vector).

Show an “Episode hint” tag on items:

“This combo has 92% success rate for fondue nights like yours.”

Screen 9 – Edge case: partial stockout

Highlight one item with orange warning:

“Baguette Rustique · Limited for Friday, suggested alternative: Ciabatta Classic.”

Banner: “Dynamic Vector updated your bundle to avoid stockouts. You still save 9.2%.”

