import { SPEAKERS } from '@/speakers';
import { CONFERENCE } from '@/conference';
import { type } from 'os';

export const getSpeaker = (slug) => {
  return SPEAKERS.find((speaker) => speaker.slug === slug);
};

export const SCHEDULE = {
  day1: {
    title: 'Workshop',
    date: CONFERENCE.workshopDate,
    day: CONFERENCE.workshopDay,
    venueName: 'EPAM Systems',
    sessions: [
      [
        {
          title: 'Registrations',
          time: '08:45 - 10:00 AM',
          location: 'Registration Desk',
        },
      ],
      [
        {
          time: '10:00 - 12:50 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475140722394136768',
          title: 'Optimizing Pytorch Models',
          location: 'Track 1 | Tesla + Turing',
          speakers: [getSpeaker('jaidev-deshpande')],
          abstract:
            'Most AI models never leave a Jupyter notebook. This workshop shows how to turn real-world PyTorch codebases into deployable, efficient binaries—covering practical techniques for optimizing and exporting complex models to production at low cost.',
          highlights: [
            'Beyond the Notebook: Move from research scripts to production-grade binaries.',
            'SoTA Portability: Learn to adapt unoptimized research code for real-world consumption.',
            'Edge Optimization: Master exports for CoreML, TensorRT, and ONNX Runtime.',
            'Practical Recipes: Interactive walkthroughs of computer vision model optimization.',
          ],
        },
        {
          time: '10:00 - 12:50 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475140876203331645',
          title: 'PEP 684 + 554 + 669 True Parallelism in Python',
          speakers: [getSpeaker('ramachandra-vikas-chamarthi')],
          location: 'Track 2 | Aryabhata + Hoppers',
          abstract:
            'Although Python is widely used, real parallelism still hurts. HPC and AI systems are limited by GIL, intensive multiprocessing, and blind execution. This workshop demonstrates how genuine parallelism, isolation, and observability in PEP 684, 554, and 669 ultimately resolve this issue.',
          highlights: [
            'Breaking the GIL: Leveraging sub-interpreters for multi-core scaling without the overhead of multiprocessing. Agent-Style Execution: Building isolated, safe execution environments for AI-focused tasks.',
            'Modern Observability: Using PEP 669 hooks to detect infinite loops and unsafe behavior with minimal performance impact.',
            'Performance Engineering: Measuring trade-offs and design patterns for modern HPC systems.',
          ],
        },
        {
          time: '10:00 - 12:50 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1480788721182707822',
          title:
            'Engineering Trustworthy LLM Agents: Observability, Evals, and Security Guardrails',
          speakers: [
            getSpeaker('sanchit-balchandani'),
            getSpeaker('dineshsuriya-d'),
          ],
          location: 'Track 3 | Varahimira + Bhaskar',
          abstract:
            'Building an LLM agent is simple; making it production-ready is not. This hands-on workshop bridges the gap between a fragile prototype and a robust system by teaching you how to diagnose failures, measure performance, and secure agentic workflows. Using Python and real-world scenarios, you will move beyond basic prompting to implement professional engineering discipline through observability, automated evaluations, and active security guardrails.',
          highlights: [
            'Full-Lifecycle Engineering: Transition from "vibe-based" development to data-driven engineering using a deliberately fragile mini-project.',
            'Deep Observability: Go beyond basic logging to track distributed traces, token usage, and intermediate reasoning steps using OpenTelemetry and tools like Langfuse or Arize.',
            'Performance & Cost Optimization: Learn to identify cacheable prompts and monitor latency to reduce operational overhead.',
            'Modern Evaluation Frameworks: Use DeepEval to run metric-based tests and treat prompts as versioned, testable assets rather than static strings.',
            'Advanced Security Guardrails: Implement multi-layered defense strategies—including NeMo Guardrails and NLP-based checks—to prevent prompt injection and data leakage.',
            'Hands-on Implementation: A practical session balancing "light theory" with heavy coding to solve real-world issues like invalid tool calls and silent errors.',
          ],
        },
      ],
      [
        {
          title: 'Lunch Break',
          time: '12:50 - 02:00 PM',
          location: 'Dining Area | First Floor',
        },
      ],
      [
        {
          time: '02:00 - 04:50 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475141021699539205',
          title: 'Designing Reliable Agentic AI for Real-World Systems',
          location: 'Track 1 | Tesla + Turing',
          speakers: [getSpeaker('sonu-kumar')],
          abstract:
            'While many AI projects rely on "vibe coding" and prompt-heavy hacks, this workshop demonstrates why disciplined system design is the only way to move agentic AI from a prototype to a reliable production environment.',
          highlights: [
            'Memory Architecture: Designing tiered memory systems that balance performance and cost.',
            'Agentic RAG: Beyond simple retrieval—implementing context management for smarter agent reasoning.',
            'Orchestration & Governance: Moving from single-script agents to complex, observable multi-agent workflows.',
            'Software Fundamentals: Ensuring your AI agents remain deterministic, testable, and production-safe.',
          ],
        },
        {
          time: '02:00 - 04:50 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475141172174262416',
          title:
            'Mastering the Multi-Stack: Orchestrated Debugging with Python and Beyond',
          speakers: [getSpeaker('satyam-soni')],
          location: 'Track 2 | Aryabhata + Hoppers',
          abstract:
            'In the era of microservices and full-stack applications, debugging a Python backend in isolation is rarely enough. Developers often find themselves juggling multiple terminal tabs to start a FastAPI server, a Vite frontend, and a debugger, leading to "context-switch fatigue." This workshop teaches you how to turn VS Code into a powerful orchestration engine.',
          highlights: [
            'Unified Orchestration: Automate complex environment startups using tasks.json and compounds.',
            'Advanced debugpy: Master the "Remote Attach" pattern to debug processes managed by modern tools like uv.',
            'Smart Automation: Use Problem Matchers to ensure the debugger waits for "Server Ready" signals before attaching.',
            'Synchronized Workflows: Learn to trigger and terminate backend and frontend sessions simultaneously for a clean development cycle',
          ],
        },
        {
          time: '02:00 - 04:50 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475141262482083964',
          title:
            'Zero to Lakehouse Hero: Your Entire Data Lakehouse in Docker — Powered by Python & Apache',
          speakers: [getSpeaker('sourav-roy')],
          location: 'Track 3 | Varahimira + Bhaskar',
          abstract:
            'Break free from vendor lock-in by building a fully functional, real-time data lakehouse using nothing but Python, Docker, and the Apache open-source ecosystem. This intensive, hands-on workshop guides you through spinning up a production-grade stack—including Kafka, Flink, Iceberg, and Paimon—to orchestrate seamless data flow from raw streams to interactive BI dashboards in Apache Superset.',
          highlights: [
            'Orchestration: Python-driven workflows and Docker Compose.',
            'Storage & Format: Apache Iceberg vs. Apache Paimon (The "Side-by-Side" deep dive).',
            'Processing: Real-time streaming with Apache Kafka and PyFlink.',
            'Analysis: Interactive SQL with Trino/Spark and visual analytics via Apache Superset.',
          ],
        },
      ],
    ],
  },
  day2: {
    title: 'Conference',
    date: CONFERENCE.conferenceDate,
    day: CONFERENCE.conferenceDay,
    venueName: 'Engineering Staff College of India',
    sessions: [
      [
        {
          title: 'Registrations',
          time: '07:45 - 09:00 AM',
          location: 'Registration Desk',
        },
      ],
      [
        {
          title: 'Opening Note',
          time: '09:00 - 09:15 AM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title: 'Data Science in the age of LLMs',
          type: 'Talk',
          keynote: true,
          time: '09:15 - 10:15 AM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('parul-pandey')],
        },
      ],
      [
        {
          title: 'Making Agents Behave: Building Deterministic LLM Workflows',
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('asha-holla')],
        },
        {
          title: "Developing a Python SDK for AI Agent's Observability",
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Track 2',
          speakers: [getSpeaker('soumendra-kumar-sahoo')],
        },
        {
          title:
            'Debugging in Production: What Unit Tests Did Not Save You From',
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Track 3',
          speakers: [getSpeaker('syed-fahad')],
        },
      ],
      [
        {
          title: 'Building the Real World: How Code & AI Disrupt Real Estate',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('abhijith-reddy')],
        },
        {
          title:
            'Good Systems, Good Sleep: Teaching Your Systems to Fix Themselves (Using Python, Not Magic)',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Track 2',
          speakers: [getSpeaker('ria-bhatia')],
        },
        {
          title:
            'Optimization at Scale: Engineering Production-Ready Decision Systems in Python',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Track 3',
          speakers: [getSpeaker('chakravarthy-ch')],
        },
      ],
      [
        {
          title: 'Tea Break',
          break: true,
          time: '11:25 - 11:45 AM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          title: 'How AI Agents Go Rogue: A Security First Python Walkthrough',
          type: 'Talk',
          time: '11:45 - 12:15 PM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('nitin-sharma')],
        },
        {
          title: 'Asyncio Upgrade Playbook: 3.10–3.14 Changes You Can’t Ignore',
          type: 'Talk',
          time: '11:45 - 12:15 PM',
          location: 'Track 2',
          speakers: [getSpeaker('atul-bhosale')],
        },
        {
          title: 'Beyond Texts: Pouring Life into Multilingual Chatbots',
          type: 'Talk',
          time: '11:45 - 12:15 PM',
          location: 'Track 3',
          speakers: [
            getSpeaker('ritesh-chintakindi'),
            getSpeaker('benjamin-alladi'),
          ],
        },
        {
          title: '',
          company: 'M37 Labs',
          logo: '/images/sponsors/m37-labs.png',
          type: 'Open Space',
          time: '11:45 - 12:15 PM',
          location: 'Track 4 | Open Space',
          speakers: [],
        },
      ],
      [
        {
          title:
            'Agents, APIs, and Outcomes: Building Enterprise AI That Works',
          type: 'Talk',
          time: '12:20 - 12:50 PM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('som-dutta')],
        },
        {
          title: 'Apache Ray: Scaling and Distributing ML Applications',
          type: 'Talk',
          time: '12:20 - 12:50 PM',
          location: 'Track 2',
          speakers: [getSpeaker('karthikeyan-vk')],
        },
        {
          title:
            'From Python to Pocket: Fine-Tuning Gemma with LoRA for On-Device AI',
          type: 'Talk',
          time: '12:20 - 12:50 PM',
          location: 'Track 3',
          speakers: [getSpeaker('dinoy-raj-k')],
        },
      ],
      [
        {
          title: 'Lunch Break',
          break: true,
          time: '12:50 - 02:10 PM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          title: 'AI in SDLC - Panel Discussion',
          type: 'Panel',
          time: '02:10 - 02:40 PM',
          location: 'Track 1 | Main Stage',
          speakers: [
            getSpeaker('usha-rengaraju'),
            getSpeaker('anand-s'),
            getSpeaker('lakshman-peethani'),
          ],
        },
        {
          title: 'Designing production grade data pipelines With Dagster',
          type: 'Talk',
          time: '02:10 - 02:40 PM',
          location: 'Track 2',
          speakers: [getSpeaker('manoj-ampolu')],
        },
        {
          title:
            'Python Concurrency Chaos: Async, Threads, GIL-free, and Beyond',
          type: 'Talk',
          time: '02:10 - 02:40 PM',
          location: 'Track 3',
          speakers: [getSpeaker('vivek-keshore')],
        },
      ],
      [
        {
          title: 'Lightning Talks',
          type: 'Lightning Talk',
          time: '02:45 - 03:15 PM',
          location: 'Track 1 | Main Stage',
          talks: [
            {
              title: 'AI Driven Modernization',
              time: '02:45 - 02:55 PM',
              speaker: getSpeaker('lakshman-peethani'),
            },
            {
              title: 'Engineering for Real time Constraints in Voice Systems',
              time: '02:55 - 03:05 PM',
              speaker: getSpeaker('nikita-bhatnagar'),
            },
            {
              title:
                'What Does Your Codebase Say About You When Nobody’s Looking?',
              time: '03:05 - 03:15 PM',
              speaker: getSpeaker('jai-prakash'),
            },
          ],
        },
        {
          title: 'Python + Rust for High-Performance Systems',
          type: 'Talk',
          time: '02:45 - 03:15 PM',
          location: 'Track 2',
          speakers: [getSpeaker('ponnam-karthik')],
        },
        {
          title: 'Learn Async programming by playing Soccer',
          type: 'Talk',
          time: '02:45 - 03:15 PM',
          location: 'Track 3',
          speakers: [getSpeaker('akhil-teja')],
        },
        {
          title: '',
          company: 'DP World',
          logo: '/images/sponsors/dp-world.png',
          type: 'Open Space',
          time: '02:45 - 03:15 PM',
          location: 'Track 4 | Open Space',
          speakers: [],
        },
      ],
      [
        {
          title: 'Tea Break',
          break: true,
          time: '03:20 - 03:40 PM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          title: 'How students learn Python',
          type: 'Talk',
          time: '03:40 - 04:10 PM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('anand-s')],
        },
        {
          title:
            'Context Engineering: The Make-or-Break Skill for Production AI',
          type: 'Talk',
          time: '03:40 - 04:10 PM',
          location: 'Track 2',
          speakers: [getSpeaker('tezan-sahu')],
        },
        {
          title:
            'DeepSwingr - A Differentiable Framework for Cricket Ball Swing Optimization',
          type: 'Talk',
          time: '03:40 - 04:10 PM',
          location: 'Track 3',
          speakers: [getSpeaker('pavan-b-govindaraju')],
        },
      ],
      [
        {
          title: 'Lightning Talks',
          type: 'Lightning Talk',
          time: '04:15 - 04:45 PM',
          location: 'Track 1 | Main Stage',
          talks: [],
        },
      ],
      [
        {
          title: '',
          type: 'Talk',
          keynote: true,
          time: '04:45 - 05:45 PM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('manivannan-elangovan')],
        },
      ],
      [
        {
          title: 'Closing Note + HydPy 10 years Celebrations',
          time: '05:45 - 06:00 PM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
    ],
  },
};
