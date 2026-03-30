export interface SolutionCapabilityMap {
    challenge: string;
    capability: string;
}

export interface SolutionProofPoint {
    customer: string;
    detail: string;
}

export interface SolutionVertical {
    slug: string;
    name: string;
    shortDescription: string;
    heroDescription: string;
    challenges: string[];
    capabilityMap: SolutionCapabilityMap[];
    outcomes: string[];
    proofPoints: SolutionProofPoint[];
    ctaLabel: string;
}

export const solutionVerticals: SolutionVertical[] = [
    {
        slug: "church",
        name: "Church",
        shortDescription:
            "Multilingual worship accessibility for sermons, services, and small groups.",
        heroDescription:
            "Support diverse congregations with live captions and translation experiences that keep people fully engaged.",
        challenges: [
            "Serving attendees across many languages in one service",
            "Translating sermon recordings for week-long ministry impact",
            "Supporting small groups where participants switch languages often"
        ],
        capabilityMap: [
            {
                challenge: "Large multilingual worship gatherings",
                capability: "Live captions on projection screens and attendee phones"
            },
            {
                challenge: "Terminology drift in faith-specific language",
                capability: "Human-in-the-loop editing and custom vocabulary profiles"
            },
            {
                challenge: "Follow-up content accessibility",
                capability: "Sermon transcription and multilingual subtitle exports"
            }
        ],
        outcomes: [
            "Higher participation from non-native speakers",
            "Improved retention through multilingual replay assets",
            "Consistent accessibility across worship and community groups"
        ],
        proofPoints: [
            {
                customer: "One Voice Fellowship",
                detail: "Scaled multilingual worship support across regular services."
            },
            {
                customer: "FAC Radford",
                detail: "Built a stronger inclusive ministry experience for diverse attendees."
            },
            {
                customer: "Union Church",
                detail: "Improved cross-language participation in community programs."
            }
        ],
        ctaLabel: "Request church solution quote"
    },
    {
        slug: "conferences",
        name: "Conferences",
        shortDescription:
            "Real-time localization for global summits and high-volume sessions.",
        heroDescription:
            "Deliver multilingual event experiences at scale while maintaining speaker clarity, attendee engagement, and operational speed.",
        challenges: [
            "Traditional interpreting costs scale quickly for large agendas",
            "Technical terminology can reduce translation confidence",
            "Q&A and audience interactions often exclude language minorities"
        ],
        capabilityMap: [
            {
                challenge: "High session count and large attendance",
                capability: "Real-time conference translation with scalable channels"
            },
            {
                challenge: "Niche vocabulary across tracks",
                capability: "AI vocabulary fine-tuning and event-specific glossaries"
            },
            {
                challenge: "Low multilingual engagement",
                capability: "Multilingual polls and Q&A workflows"
            }
        ],
        outcomes: [
            "Broader international attendee participation",
            "Lower localization cost per session compared to fully manual models",
            "Faster localization setup for recurring conferences"
        ],
        proofPoints: [
            {
                customer: "CES 2025",
                detail: "Supported multilingual accessibility for global event audiences."
            },
            {
                customer: "Data + AI Summit",
                detail: "Delivered high-accuracy live captioning for technical content."
            },
            {
                customer: "Volvo and Panasonic",
                detail: "Validated enterprise-grade conference translation workflows."
            }
        ],
        ctaLabel: "Request conference solution quote"
    },
    {
        slug: "corporate-events",
        name: "Corporate Events",
        shortDescription:
            "Inclusive internal and external communication for distributed teams.",
        heroDescription:
            "Enable accessible communication across global offices, leadership updates, and hybrid event programs.",
        challenges: [
            "Global teams need consistent communication across language barriers",
            "Accessibility requirements must be met reliably",
            "Hybrid event operations increase technical complexity"
        ],
        capabilityMap: [
            {
                challenge: "Executive and town hall communication",
                capability: "Virtual interpreting and multilingual caption channels"
            },
            {
                challenge: "Compliance and inclusive communication standards",
                capability: "Accessible slide translation and caption delivery options"
            },
            {
                challenge: "Scattered workflows across teams",
                capability: "Centralized accessibility management and deployment guidance"
            }
        ],
        outcomes: [
            "Higher comprehension in multinational internal comms",
            "More consistent accessibility posture across event types",
            "Reduced friction for hybrid launch operations"
        ],
        proofPoints: [
            {
                customer: "Accenture",
                detail: "Supported multilingual communication standards across events."
            },
            {
                customer: "Delta",
                detail: "Improved accessibility outcomes for enterprise communication."
            },
            {
                customer: "Smartsheet",
                detail: "Operationalized inclusive meeting and event experiences."
            }
        ],
        ctaLabel: "Request corporate event quote"
    },
    {
        slug: "education",
        name: "Education",
        shortDescription:
            "Multilingual classroom and parent communication support for schools and programs.",
        heroDescription:
            "Help schools and education programs provide equitable learning experiences for students, families, and educators.",
        challenges: [
            "ESL learners need real-time support in class and video content",
            "Parent communication often suffers from language gaps",
            "Educators need reusable translated material quickly"
        ],
        capabilityMap: [
            {
                challenge: "Live instruction inclusivity",
                capability: "Real-time lecture captions and multilingual translation channels"
            },
            {
                challenge: "Family engagement",
                capability: "Parent-school meeting translation workflows"
            },
            {
                challenge: "Curriculum localization backlog",
                capability: "Media-to-lesson subtitle and translation toolchain"
            }
        ],
        outcomes: [
            "Improved student comprehension for multilingual cohorts",
            "Stronger parent-teacher communication consistency",
            "Faster turnaround for translated learning assets"
        ],
        proofPoints: [
            {
                customer: "Google Digital Garage",
                detail: "Scaled accessible digital-skills training to wider audiences."
            }
        ],
        ctaLabel: "Request education quote"
    },
    {
        slug: "government",
        name: "Government",
        shortDescription:
            "Public-facing multilingual access for town halls and essential communication.",
        heroDescription:
            "Deliver public information equitably with scalable caption and translation options for community-facing programs.",
        challenges: [
            "Critical public information must reach non-native speakers quickly",
            "Town halls need consistent accessibility at scale",
            "Operational teams need predictable setup under time constraints"
        ],
        capabilityMap: [
            {
                challenge: "Urgent or scripted public announcements",
                capability: "Scripted material automation with pre-loaded speech content"
            },
            {
                challenge: "In-person public events",
                capability: "Live microphone-to-caption workflows and mobile subtitle delivery"
            },
            {
                challenge: "Large audience reach",
                capability: "QR and link-based distribution for attendee caption access"
            }
        ],
        outcomes: [
            "Broader access to public updates for multilingual communities",
            "More resilient accessibility operations for civic events",
            "Improved trust through inclusive communication delivery"
        ],
        proofPoints: [
            {
                customer: "Public Service Deployments",
                detail: "Applied scalable access patterns for multilingual civic engagement."
            }
        ],
        ctaLabel: "Request government deployment quote"
    },
    {
        slug: "theater-performing-arts",
        name: "Theater and Performing Arts",
        shortDescription:
            "Live performance accessibility with script-aware and adaptive caption workflows.",
        heroDescription:
            "Expand audience inclusion in theater and performing arts with caption systems designed for scripted and dynamic productions.",
        challenges: [
            "Ad-libs and script deviation can break static caption flows",
            "Productions require content protection controls",
            "Audio quality can vary significantly in live stage environments"
        ],
        capabilityMap: [
            {
                challenge: "Script timing and line delivery",
                capability: "Script-to-caption release tools for controlled line progression"
            },
            {
                challenge: "Mixed scripted and improvised performance",
                capability: "Instant switching between scripted and automated caption modes"
            },
            {
                challenge: "Audience readability",
                capability: "Smart wrap and display tuning for dense dialogue"
            }
        ],
        outcomes: [
            "Higher accessibility for multilingual and deaf/hard-of-hearing audiences",
            "Better caption accuracy under real stage constraints",
            "Expanded reach for digital and hybrid theater experiences"
        ],
        proofPoints: [
            {
                customer: "Carla's Quince",
                detail: "Demonstrated multilingual online theater accessibility patterns."
            }
        ],
        ctaLabel: "Request performing arts quote"
    }
];

export function getSolutionVertical(slug: string): SolutionVertical {
    const item = solutionVerticals.find((vertical) => vertical.slug === slug);

    if (!item) {
        throw new Error(`Missing solution vertical for slug: ${slug}`);
    }

    return item;
}