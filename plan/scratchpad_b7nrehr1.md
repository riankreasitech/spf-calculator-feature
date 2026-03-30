# spf.io Exploration Checklist

- [x] Open spf.io and explore the homepage
- [x] Find and analyze the Pricing page (tiers, credits, charging)
    - [x] Model: Subscription-based with allotted minutes (credits).
    - [x] Pricing: Starts around $99-$199/month, but specific tiers require a custom quote.
- [x] Find and analyze the Features/Platform page (Events, Content, Conversations)
    - [x] Events: Automatic Captions & Translation, Audio Live Streaming, Multilingual Polls
    - [x] Content: Audio Video Captions & Subtitles, Document Translation Portal, Slides Translation
    - [x] Conversations: Multilingual Conversations
- [x] Find and analyze Integration details (Zoom, YouTube, etc.)
    - [x] Zoom: Uses bidirectional translation, requires audio loopback and caption API token.
    - [x] YouTube: Can send live captions/translations to YouTube Live via caption ingestion URL or import existing captions to videos.
- [x] Summarize findings

## Findings
### Pricing
- **Pricing Model**: Spf.io uses a subscription-based model. Each subscription includes a set number of "minutes" that function as credits for translation/captioning.
- **Tiers**: While specific tier names (e.g., Pro, Enterprise) are not explicitly listed with fixed prices on the site, search data and FAQs indicate starting prices around $99-$199/month. Most pricing is handled via "Request a Quote" for a personalized plan.
- **Charging**: You are charged based on the number of minutes used across 50+ supported languages. Additional minutes can be purchased.

### Features/Platform
- **Events**: Tools for live multilingual events, including automatic captions, translations, and interactive polls.
- **Content**: Features for post-production, such as subtitling videos, translating documents, and slides.
- **Conversations**: "Multilingual Conversations" allows people speaking different languages to communicate in real-time.

### Integrations
- **Zoom**: Real-time bidirectional translation. Requires a Zoom caption API token and an audio loopback setup to capture all participants' audio.
- **YouTube**: Supports live captioning and translation for YouTube Live using the "caption ingestion URL" method. It can also import captions/subtitles for uploaded videos.
