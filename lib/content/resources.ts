export interface ResourceHubItem {
    slug: string;
    name: string;
    description: string;
    href: string;
}

export interface GettingStartedStep {
    title: string;
    description: string;
}

export interface CaseStudyItem {
    slug: string;
    title: string;
    organization: string;
    industry:
    | "Religious"
    | "Conferences"
    | "Corporate"
    | "Education"
    | "Community";
    deploymentType: "In-person" | "Virtual" | "Hybrid";
    summary: string;
    impact: string;
}

export interface FaqEntry {
    question: string;
    answer: string;
}

export const resourceHubItems: ResourceHubItem[] = [
    {
        slug: "blog",
        name: "Blog",
        description:
            "Product updates, accessibility strategies, and localization best practices.",
        href: "/resources/blog"
    },
    {
        slug: "case-studies",
        name: "Case Studies",
        description:
            "Real implementations across church, corporate, education, and event environments.",
        href: "/resources/case-studies"
    },
    {
        slug: "training-center",
        name: "Training Center",
        description:
            "Operator onboarding material, runbooks, and setup walkthrough sessions.",
        href: "/resources/training-center"
    },
    {
        slug: "documentation",
        name: "Documentation",
        description:
            "Technical setup guides, integration prerequisites, and platform checklists.",
        href: "/resources/documentation"
    },
    {
        slug: "faq",
        name: "FAQ",
        description:
            "Answers for language support, internet requirements, caption delivery, and correction workflows.",
        href: "/resources/faq"
    }
];

export const gettingStartedSteps: GettingStartedStep[] = [
    {
        title: "Request a Quote or Demo",
        description:
            "Share goals, event volume, and language requirements with the spf.io team."
    },
    {
        title: "Choose Delivery Platform",
        description:
            "Confirm output target such as Zoom, YouTube, in-person projection, or hybrid stack."
    },
    {
        title: "Configure Audio Capture",
        description:
            "Set up Cloud Loopback, local virtual audio cable, or direct microphone feed."
    },
    {
        title: "Assign Language Channels",
        description:
            "Select target languages and connect required platform tokens (for example Zoom caption token)."
    },
    {
        title: "Go Live and Share Access",
        description:
            "Launch from operations workflow and distribute caption/translation links to attendees."
    }
];

export const caseStudyItems: CaseStudyItem[] = [
    {
        slug: "fac-radford",
        title: "Inclusive multilingual ministry growth",
        organization: "FAC Radford",
        industry: "Religious",
        deploymentType: "In-person",
        summary:
            "Expanded worship accessibility so non-English speakers could participate in real time.",
        impact:
            "Improved belonging and comprehension during live services."
    },
    {
        slug: "google-digital-garage",
        title: "Accessible digital skills delivery",
        organization: "Google Digital Garage",
        industry: "Education",
        deploymentType: "Virtual",
        summary:
            "Used automated captioning to broaden access for online training audiences.",
        impact:
            "Scaled multilingual learning access without heavy manual operations."
    },
    {
        slug: "databricks-dais-2024",
        title: "High-scale conference captioning",
        organization: "Databricks DAIS 2024",
        industry: "Conferences",
        deploymentType: "Hybrid",
        summary:
            "Delivered high-accuracy captions for complex technical sessions at scale.",
        impact:
            "Increased accessibility and clarity for global conference audiences."
    },
    {
        slug: "altoona-alliance-church",
        title: "Welcoming multilingual community participation",
        organization: "Altoona Alliance Church",
        industry: "Community",
        deploymentType: "Hybrid",
        summary:
            "Built inclusive engagement for local international students and ESL attendees.",
        impact:
            "Improved communication and ongoing community participation."
    },
    {
        slug: "smartsheet-global-events",
        title: "Inclusive global internal events",
        organization: "Smartsheet",
        industry: "Corporate",
        deploymentType: "Virtual",
        summary:
            "Supported multilingual internal communication across distributed team events.",
        impact:
            "Raised accessibility consistency for organization-wide updates."
    }
];

export const blogThemes = [
    {
        title: "Private live translation",
        summary:
            "Audio-only modes and secure access controls for private multilingual sessions."
    },
    {
        title: "Distinct AI voices",
        summary:
            "Expanded synthesized voice options for more natural multilingual output."
    },
    {
        title: "Visual accessibility improvements",
        summary:
            "Enhanced translated slide readability with zoom and display controls."
    }
];

export const faqEntries: FaqEntry[] = [
    {
        question: "How many languages are supported?",
        answer:
            "spf.io supports broad multilingual caption and translation coverage, with exact language availability based on workflow and platform integration."
    },
    {
        question: "Does the platform require stable internet?",
        answer:
            "Yes. Real-time captioning and translation require a reliable internet connection for audio processing and output delivery."
    },
    {
        question: "How do attendees view captions and translations?",
        answer:
            "Output can be delivered through native platform captions, browser overlays, embedded viewers, and mobile links or QR entry points."
    },
    {
        question: "Can captions be corrected during live sessions?",
        answer:
            "Yes. Human-in-the-loop workflows and operator supervision can be used to improve terminology and live output quality."
    },
    {
        question: "Which platforms can I integrate with?",
        answer:
            "Common integrations include Zoom, YouTube Live, Teams, Webex, and production tools such as OBS or vMix."
    }
];

export const supportLinks = [
    {
        label: "Request technical onboarding",
        href: "/request-quote"
    },
    {
        label: "Open pricing and estimator",
        href: "/pricing"
    },
    {
        label: "View integrations guidance",
        href: "/product/integrations"
    }
];

export function getResourceHubItem(slug: string): ResourceHubItem {
    const item = resourceHubItems.find((entry) => entry.slug === slug);

    if (!item) {
        throw new Error(`Missing resource hub item for slug: ${slug}`);
    }

    return item;
}