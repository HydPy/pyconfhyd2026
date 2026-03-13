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
          abstract:
            'The moment an LLM decides its own next step, your system stops being predictable. This session explores how the Microsoft Agent Framework restores order to agentic systems by embedding LLMs within "workflow-first" architectures.  Whether you prefer programmatic SDKs or visual UI-driven design, you will learn how to bridge the gap between AI experimentation and robust, production-ready automation.',
          highlights: [
            'Reframing Autonomy: Why "Workflow-First" design is superior to "Prompt-Only" orchestration for mission-critical applications.',
            'The Microsoft Agent Framework: A deep dive into using the SDK to define explicit states, transitions, and tool-invocation boundaries.',
            'Hybrid Intelligence: How to strategically use LLMs only where they add value—such as classification or reasoning—while keeping the skeletal flow deterministic.',
            'The Safety Net: Implementing robust error handling, automated retries, and validation logic to prevent agents from "hallucinating" their way out of a workflow.',
          ],
        },
        {
          title: "Developing a Python SDK for AI Agent's Observability",
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Track 2',
          speakers: [getSpeaker('soumendra-kumar-sahoo')],
          abstract:
            'In the world of agentic AI, visibility is the difference between a reliable system and a "black box" liability. This session dives into the development of a high-scale Python SDK designed for enterprise-grade AI observability. Processing over one billion traces per month for a unified AI platform, this library enables real-time tracking of agent decisions, tool calls, and LLM latencies.',
          highlights: [
            'The Observability Gap: Identifying why traditional APM tools fall short when tracking non-deterministic AI agent workflows and long-running "thought" chains.',
            "Architecture for Scale: How to design a Python library capable of handling 1 billion+ monthly traces without introducing significant latency to the agent's execution.",
            'Buy vs. Build: The strategic decision-making process behind developing a custom SDK over using existing open-source frameworks.',
            'Feature Minimums: Defining the "Critical Path" for agent tracing—from nesting spans in recursive loops to capturing metadata for prompt versioning."',
          ],
        },
        {
          title:
            'Debugging in Production: What Unit Tests Did Not Save You From',
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Track 3',
          speakers: [getSpeaker('syed-fahad')],
          abstract:
            'Your CI/CD pipeline is green, your coverage is at 90%, yet your production logs are bleeding red. This session explores the "Testing Paradox"—why high-quality unit tests often fail to predict the chaotic reality of live production environments. We will dissect real-world Python failures triggered by concurrency race conditions, "silent" async failures, and external dependency drift.',
          highlights: [
            'The Mocking Trap: Why over-reliance on mocks can mask integration failures and create a "false sense of security" in your test suite.',
            'The Async "Black Hole": Debugging common pitfalls in asyncio and background tasks where exceptions often vanish without a trace.',
            'Logging as Code: Moving from "lazy logging" to structured, contextual telemetry that actually helps you find the root cause in minutes, not hours.',
            'Concurrency & Race Conditions: Practical techniques for identifying bugs that only surface under high load or specific multi-threaded interleaving.',
          ],
        },
      ],
      [
        {
          title: 'Building the Real World: How Code & AI Disrupt Real Estate',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Track 1 | Main Stage',
          speakers: [getSpeaker('abhijith-reddy')],
          abstract:
            'In this session, we will unpack the ASBL Engineering Charter, exploring how a culture of ownership, velocity, and AI-first automation solves complex real-world challenges. We’ll discuss the practical application of AI in streamlining sales workflows, optimizing construction timelines, and building dependable resident ecosystems. Join us to see how applying high-velocity software patterns to the built environment creates more than just buildings—it creates a scalable, intelligent future for urban development.',
          highlights: [
            'The "Tech-Native" Builder: How applying a software engineering mindset transforms traditional real estate workflows.',
            'AI Beyond the Hype: Practical use cases for AI in construction optimization, sales automation, and financial forecasting.',
            'The Engineering Charter: Lessons in building a high-velocity culture that prioritizes ownership and automated decision-making.',
            'End-to-End Synergy: Bridging the gap between code and concrete to improve the resident experience from day one.',
          ],
        },
        {
          title:
            'Good Systems, Good Sleep: Teaching Your Systems to Fix Themselves (Using Python, Not Magic)',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Track 2',
          speakers: [getSpeaker('ria-bhatia')],
          abstract:
            'It is 3 a.m. and your production environment is failing—does your system wait for a human, or does it know how to recover? This session moves beyond reactive "firefighting" to explore the architecture of Self-Healing Systems. We will examine how to use Python to build resilient feedback loops that detect configuration drift, stuck processes, and service degradation in real-time. By implementing automated remediation patterns—without the "magic" of over-engineered platforms—you can design systems that fix themselves, ensuring operational stability and, more importantly, a good night\'s sleep.',
          highlights: [
            'The Anatomy of a "Self-Healer": Decoding the three-step loop of Observe, Decide, and Act within a Python-native context.',
            'Detecting the "Silent Fail": Using Python to identify subtle warning signals—like memory creep or I/O hangs—before they trigger a total system outage.',
            'Safe Remediation Patterns: How to implement automated restarts, circuit breakers, and "rollback-on-failure" logic that reduces human intervention.',
            'Avoiding the "Feedback Loop of Death": Practical strategies to ensure your self-healing scripts don\'t accidentally make a bad situation worse through runaway automation.',
          ],
        },
        {
          title:
            'Optimization at Scale: Engineering Production-Ready Decision Systems in Python',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Track 3',
          speakers: [getSpeaker('chakravarthy-ch')],
          abstract:
            'This session breaks down the journey of transforming a Python-based optimization prototype into a robust, production-ready system. We move beyond "solver tuning" to look at the holistic engineering of decision systems. We will explore how refining model formulation, streamlining data ingestion, and implementing distributed computing can drastically reduce latency.',
          highlights: [
            'The Scalability Wall: Identifying why traditional Python optimization prototypes fail in production.',
            'Architecting for Speed: Strategies for simplifying inputs and refining model formulations for faster convergence.',
            'Beyond the GIL: Leveraging distributed computing and efficient data processing to handle high-concurrency workloads.',
            'Production Patterns: Practical "Lessons Learned" for data scientists transitioning from experimentation to reliable system engineering.',
          ],
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
          abstract:
            'As we move from passive chatbots to autonomous AI agents, we grant LLMs the power to execute code, call APIs, and modify databases—often with "god-mode" privileges and zero audit trails. This session provides a high-stakes, security-first walkthrough of how Python-based agents can be exploited through prompt injection and tool abuse.',
          highlights: [
            'The Autonomy Paradox: Why the same features that make agents powerful (tool use, planning, and memory) create a massive, unmanaged attack surface.',
            'Live Exploit Walkthrough: Witness a multi-stage attack where a simple user prompt triggers unauthorized database access and full data exfiltration.',
            'The 5 Layers of Agentic Threat: A deep dive into the Perception, Reasoning, Tool, Action, and Memory layers to identify where your architecture is most vulnerable.',
            'Hardening the "Hot Path": Practical Python patterns using Pydantic and Guardrails to enforce strict schema validation and prevent tool argument hijacking.',
          ],
        },
        {
          title: 'Asyncio Upgrade Playbook: 3.10–3.14 Changes You Can’t Ignore',
          type: 'Talk',
          time: '11:45 - 12:15 PM',
          location: 'Track 2',
          speakers: [getSpeaker('atul-bhosale')],
          abstract:
            'Python’s asyncio has undergone a radical transformation from version 3.10 to 3.14, moving from "implicit magic" to structured, explicit concurrency. This session provides a practical roadmap for developers, highlighting critical breaking changes in 3.14—such as the get_event_loop() RuntimeError—and the removal of legacy child watchers.',
          highlights: [
            'The 3.14 Breaking Point: Understand why legacy patterns like implicit loop creation now raise RuntimeError and how to transition to get_running_loop().',
            'Structured Concurrency with TaskGroups: Master the new gold standard for managing multiple tasks, ensuring that if one fails, they all fail gracefully.',
            'Legacy Cleanup: Learn how to strip out deprecated child watcher configurations and event loop policies that are being removed in 3.14.',
            'Modern API Level-up: Practical implementation of asyncio.timeout() for cleaner code and asyncio.Runner for managing complex application lifecycles.',
          ],
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
          abstract:
            "Chatbots have become ubiquitous, yet they often feel clinical and disconnected. This session demonstrates how to transform generic, text-heavy AI into living, multilingual avatars using a high-performance RAG pipeline. We will explore the technical journey of building a system that doesn't just translate text, but understands intent across languages using language-aware embeddings.",
          highlights: [
            'Beyond Translation: Designing a multilingual RAG pipeline that detects intent and utilizes language-specific embedding strategies to maintain semantic accuracy.',
            'The "Living" Interface: How to move from static text responses to real-time, lip-synced digital avatars that boost user engagement.',
            'DIY Lip-Sync (Rhubarb): A technical walkthrough of mapping audio phonemes to visual visemes in the browser for a custom 3D animated experience.',
            'Streaming at Scale (WebRTC): Implementing the LiveKit protocol and WebSockets to achieve the ultra-low latency required for natural, "face-to-face" human-AI conversation.',
          ],
        },
        {
          title: '',
          company: 'M37 Labs',
          logo: '/images/sponsors/m37-labs-1.png',
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
          abstract:
            'This session explores the engineering journey of deploying Enterprise AI across terminal optimization, document understanding, and multi-step workflow automation. We will unpack the critical architectural patterns required to make AI safe and dependable—including rigorous evaluation harnesses, latency management, and standardized platforms that allow a single proven pattern to scale across global deployments.',
          highlights: [
            'The Production-First Framework: Why starting with the end-to-end workflow is the only way to ensure AI adds real business value.',
            'Decision Intelligence at Scale: Combining optimization and machine learning to solve high-concurrency logistics challenges.',
            'The Engineering of Reliability: Implementing evaluation harnesses and governance to ensure "safe" AI in real-world environments.',
            'From Copilots to Agents: Moving from simple chat interfaces to autonomous systems that execute complex, multi-step tasks via APIs.',
          ],
        },
        {
          title: 'Apache Ray: Scaling and Distributing ML Applications',
          type: 'Talk',
          time: '12:20 - 12:50 PM',
          location: 'Track 2',
          speakers: [getSpeaker('karthikeyan-vk')],
          abstract:
            'As datasets outgrow local memory, traditional ML pipelines inevitably stall or crash. This session introduces Apache Ray as the unified framework for scaling Python-based machine learning from a single laptop to a distributed cluster. We will explore how to eliminate I/O bottlenecks through intelligent data sharding and streaming, ensuring GPUs remain fully utilized.',
          highlights: [
            'Breaking the Memory Wall: Strategies for handling "Out of Memory" (OOM) errors by moving from monolithic data loading to distributed Ray Data shards.',
            'From Decorators to Distributed Systems: How to use @ray.remote to turn standard Python functions and classes into distributed tasks and actors with minimal code changes.',
            'GPU Optimization: Techniques to prevent "starving" your accelerators by implementing efficient data streaming and prefetching loops.',
            'Orchestration Simplified: A look at how Ray handles worker discovery, failure recovery, and result synchronization across multiple CPUs and GPUs.',
          ],
        },
        {
          title:
            'From Python to Pocket: Fine-Tuning Gemma with LoRA for On-Device AI',
          type: 'Talk',
          time: '12:20 - 12:50 PM',
          location: 'Track 3',
          speakers: [getSpeaker('dinoy-raj-k')],
          abstract:
            'While cloud LLMs offer immense power, production-grade applications often require the privacy, speed, and cost-efficiency that only on-device execution can provide. This session deconstructs the end-to-end Python workflow for transforming Google’s Gemma model into a specialized, mobile-ready AI using Parameter-Efficient Fine-Tuning (PEFT) and the LoRA technique. ',
          highlights: [
            'PEFT & LoRA Mastery: A deep dive into using the Python PEFT library to inject low-rank adaptation layers, enabling high-quality fine-tuning without the massive hardware overhead.',
            "The Gemma Workflow: Step-by-step guidance on fine-tuning the Gemma-2B or 7B backbone with domain-specific datasets while preserving the core model's intelligence.",
            'Conversion & Optimization: How to leverage the MediaPipe Python APIs to convert fine-tuned checkpoints into highly optimized formats compatible with mobile hardware.',
            'On-Device Deployment: Navigating the MediaPipe LLM Inference SDK to bridge Python-trained models with native Android applications.',
          ],
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
          abstract:
            'Traditional DAG-based pipelines often fail because they focus on tasks rather than the data they produce. This session introduces Dagster’s asset-based orchestration, a paradigm shift that treats data pipelines as observable, testable systems. We will live-build a robust Medallion Architecture (Bronze, Silver, Gold) starting from simple local CSVs and evolving into a schema-validated SQLite system.',
          highlights: [
            'The Asset-First Revolution: Why shifting from "Task-based" to "Software-Defined Assets" eliminates the most common hidden failures in data engineering.',
            'Building the Medallion Layer: A practical walkthrough of structuring data evolution—from raw ingestion (Bronze) to refined, analytics-ready tables (Gold).',
            'Schema as a Contract: Implementing strict validation and normalization to catch "silent data corruption" before it hits your downstream models.',
            'Event-Driven Automation: Using Dagster Sensors to trigger pipelines automatically based on file arrivals or external system changes',
          ],
        },
        {
          title:
            'Python Concurrency Chaos: Async, Threads, GIL-free, and Beyond',
          type: 'Talk',
          time: '02:10 - 02:40 PM',
          location: 'Track 3',
          speakers: [getSpeaker('vivek-keshore')],
          abstract:
            'Python\'s concurrency landscape is undergoing its most significant transformation in a decade. As we move toward a "No-GIL" era, developers are caught between the established paradigms of asyncio and threading and the emerging world of sub-interpreters. This talk untangles the "concurrency chaos," providing a clear roadmap for when to use each model.',
          highlights: [
            'The GIL Evolution: A deep dive into the "Free-threaded" Python builds and what the removal of the Global Interpreter Lock actually means for your existing codebase.',
            'Asyncio vs. Threads: A pragmatic comparison of I/O-bound vs. CPU-bound performance, debunking common myths about which is "faster."',
            'Sub-interpreters (PEP 684): Understanding how interpreters provide a middle ground for true parallelism within a single process.',
            'Concurrency Pitfalls: Live-coding examples of race conditions and deadlocks that persist even in a GIL-free environment.',
          ],
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
          abstract:
            'This talk explores the strategic "Oxidation" of Python applications, demonstrating how to identify computational hot-paths and offload them to Rust. By leveraging PyO3 for seamless FFI and Rayon for data parallelism, we can bypass the Global Interpreter Lock (GIL) and achieve true multi-core throughput. Attendees will walk away with a practical roadmap for building, benchmarking, and distributing high-performance, memory-safe Python extensions that scale.',
          highlights: [
            'Shattering the GIL Wall: Understand why CPython’s Global Interpreter Lock limits CPU-bound scaling and how Python::allow_threads unlocks native Rust parallelism.',
            'The Power Couple (PyO3 + Maturin): A deep dive into the modern toolkit that makes writing and packaging Rust extensions as easy as standard Python modules.',
            'Zero-Cost Concurrency: How to implement high-throughput data processing using Rust’s Rayon library for effortless .par_iter() execution.',
            'Architectural Strategy: Learn the "Orchestrator-Engine" pattern—keeping high-level logic in Python while accelerating the "hot path" in Rust.',
          ],
        },
        {
          title: 'Learn Async programming by playing Soccer',
          type: 'Talk',
          time: '02:45 - 03:15 PM',
          location: 'Track 3',
          speakers: [getSpeaker('akhil-teja')],
          abstract:
            'Introducing a custom-built soccer game designed specifically for PyConf Hyderabad 2026 to explain asynchronous programming through real-time gameplay. By building a high-performance game server from scratch—without the "magic" of web frameworks—we will deconstruct async/await primitives and explore how to handle rapid-fire data passes. ',
          highlights: [
            'Zero-Framework Architecture: Learn how to build a functional HTTP server and game engine from the ground up using only Python’s standard library and asyncio.',
            'The Soccer Analogy: See async primitives in action by relating them to game mechanics: non-blocking passes, player positioning, and event loops.',
            'Server-Sent Events (SSE): Master the art of pushing real-time updates from the server to the client to keep the game state in sync.',
            'Concurrency without Chaos: Discover how to identify and prevent race conditions using Locks and other synchronization primitives within a shared game state.',
          ],
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
          abstract:
            'Leveraging a massive dataset of minute-by-minute code snapshots from over 20,000 students at IIT Madras, this session utilizes AI coding agents to deconstruct the actual process of learning Python. we will define how Python pedagogy must evolve in the era of LLMs to focus on what students truly need to master. This talk offers a rare, data-backed look at the transition from novice coder to proficient programmer through the lens of modern AI analysis.',
          highlights: [
            'AI as a Pedagogical Mirror: Learn how AI agents can be used to "replay" student sessions to identify common pitfalls that traditional grading misses.',
            'Strategic Problem Solving: Insights into the efficacy of different attempt styles—is it better to "solve and move" or "iterate and return" later?',
            'Teaching in the LLM Era: A provocative look at how our curriculum should shift now that basic coding can be automated, focusing on the core competencies that still require human intuition.',
          ],
        },
        {
          title:
            'Context Engineering: The Make-or-Break Skill for Production AI',
          type: 'Talk',
          time: '03:40 - 04:10 PM',
          location: 'Track 2',
          speakers: [getSpeaker('tezan-sahu')],
          abstract:
            'The gap between a "perfect" AI demo and a failing production system is rarely the model—it is the context. While the industry obsesses over prompt engineering, 80% of production failures stem from poorly architected context windows that lead to hallucinations, ballooning costs, and latency spikes. This session introduces Context Engineering as a rigorous discipline, offering a systematic framework for writing, selecting, compressing, and isolating data. We will dissect the "Seven Deadly Sins" of context design and provide a battle-tested blueprint for building resilient, secure, and cost-effective AI applications at scale',
          highlights: [
            'The 4 Pillars of Context: A deep dive into the fundamental strategies of Write, Select, Compress, and Isolate to maintain high-fidelity AI reasoning.',
            'The Seven Deadly Sins: Real-world post-mortems of anti-patterns like Context Bloat and Temporal Confusion that sabotage production reliability.',
            'The Token Economy: Practical techniques for semantic compression and summarization that can slash operational costs by 10x without sacrificing accuracy.',
            'Security as a Context Boundary: How to defend against prompt injection and adversarial retrieval by enforcing strict privilege separation within the context window.',
          ],
        },
        {
          title:
            'DeepSwingr - A Differentiable Framework for Cricket Ball Swing Optimization',
          type: 'Talk',
          time: '03:40 - 04:10 PM',
          location: 'Track 3',
          speakers: [getSpeaker('pavan-b-govindaraju')],
          abstract:
            'This session introduces DeepSwingr, a Python-based framework that transforms the traditional physics of cricket ball swing into a differentiable neural model. Unlike black-box machine learning, DeepSwingr embeds aerodynamic constraints directly into the architecture, enabling gradient-based optimization of swing trajectories.',
          highlights: [
            'The Differentiable Advantage: Why moving from static simulations to differentiable models allows us to use "calculus-on-tap" for automatic optimization.',
            'Physics-Informed Neural Networks (PINNs): Learn the design patterns for encoding the Navier-Stokes principles and Magnus effect directly into neural layers.',
            'Architecture of DeepSwingr: A walkthrough of the Python implementation—leveraging automatic differentiation to bridge the gap between a physical simulator and a learner.',
            'Solving the "Black Box" Problem: How embedding physical constraints ensures model predictions remain within the bounds of reality, increasing trust and interpretability',
          ],
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
