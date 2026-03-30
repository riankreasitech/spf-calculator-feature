export interface ProductPageContent {
    slug: string;
    name: string;
    shortDescription: string;
    heroDescription: string;
    useCases: string[];
    keyFeatures: string[];
    setupModel: string[];
}

export function getProductPage(slug: string): ProductPageContent {
    const page = productPages.find((item) => item.slug === slug);

    if (!page) {
        throw new Error(`Missing product page content for slug: ${slug}`);
    }

    return page;
}

export const productPages: ProductPageContent[] = [
    {
        slug: "events",
        name: "Events",
        shortDescription:
            "Live captions, translation audio, and multilingual engagement for in-person and online events.",
        heroDescription:
            "Deliver accessible real-time translation for conferences, ministry gatherings, summits, and hybrid broadcasts.",
        useCases: [
            "Large conferences with multilingual attendees",
            "Church services requiring live captions on mobile and big screens",
            "Corporate all-hands and global town halls",
            "Hybrid events with remote and in-room participants"
        ],
        keyFeatures: [
            "Automatic live captions and translation in 60+ languages",
            "Audio live streaming for translated listening channels",
            "Multilingual polls for audience interaction",
            "Director mode for human-in-the-loop accuracy control"
        ],
        setupModel: [
            "Select destination platform and session format",
            "Connect audio source via Cloud Loopback, local loopback, or direct microphone",
            "Configure language channels and publish attendee viewing links"
        ]
    },
    {
        slug: "content",
        name: "Content",
        shortDescription:
            "Transcribe and translate videos, documents, and slides while preserving context and format.",
        heroDescription:
            "Turn recordings and documents into multilingual assets that are searchable, reusable, and accessible.",
        useCases: [
            "Post-event video subtitle generation for global replay audiences",
            "Corporate document localization with consistent terminology",
            "Training materials and lesson content translation",
            "Multilingual slide packs for distributed teams"
        ],
        keyFeatures: [
            "Video subtitling and transcription export (SRT, VTT)",
            "Document translation portal with layout preservation",
            "Slide translation for visual accessibility",
            "Custom AI vocabulary support for domain-specific terms"
        ],
        setupModel: [
            "Upload media or document batches to the content workspace",
            "Choose target languages and optional custom AI profile",
            "Review edits and export translated deliverables"
        ]
    },
    {
        slug: "conversations",
        name: "Conversations",
        shortDescription:
            "Real-time 1-on-1 and small-group multilingual dialogue for faster decisions and stronger relationships.",
        heroDescription:
            "Enable teams, communities, and support staff to speak naturally across language barriers in real time.",
        useCases: [
            "Cross-language pastoral and community conversations",
            "Customer support calls requiring bilingual clarity",
            "Small-team remote meetings across regions",
            "In-person sessions with live two-way translation"
        ],
        keyFeatures: [
            "Bidirectional voice and text translation",
            "Support for 40+ conversation language pairs",
            "Web-based access without app installation",
            "Flexible usage across in-person, remote, or hybrid sessions"
        ],
        setupModel: [
            "Create or join a conversation room in the browser",
            "Select source and target languages per participant",
            "Start speaking or typing with instant translated output"
        ]
    }
];

export const integrationRows = [
    {
        platform: "Zoom",
        input: "Cloud Loopback or Local Loopback",
        output: "Native Caption API",
        bidirectional: "Yes",
        setupComplexity: "Medium"
    },
    {
        platform: "YouTube Live",
        input: "Cloud Loopback or RTMP source",
        output: "Caption Ingestion URL",
        bidirectional: "No",
        setupComplexity: "Medium"
    },
    {
        platform: "Microsoft Teams",
        input: "Cloud Loopback or RTMP path",
        output: "External viewer or overlay",
        bidirectional: "No",
        setupComplexity: "Medium"
    },
    {
        platform: "Webex",
        input: "Cloud Loopback",
        output: "Native integration or external viewer",
        bidirectional: "No",
        setupComplexity: "Medium"
    },
    {
        platform: "OBS / vMix",
        input: "Direct source feed",
        output: "Browser overlay source",
        bidirectional: "No",
        setupComplexity: "Low"
    }
];
