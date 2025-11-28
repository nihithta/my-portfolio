import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'ScholarSync-MCP: Real-Time Research Integration for AI Agents',
        description: "Developed a protocol server that empowers AI agents to search, retrieve, and organize academic papers from arXiv in real time, overcoming LLM knowledge cutoffs.\nAutomated topic-based research workflows, enabling structured, up-to-date insights for conversational AI and research assistants.",
        tools: ['Python', 'MCP', 'arXiv API', 'LLM', 'GenAI Infrastructure'],
        role: 'AI Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'InboxGPT: AI-Powered Email Triage Assistant',
        description: 'Implemented a LangGraph pipeline combining GPT-4o-mini, embeddings (text-embedding-3-small), and an in-memory vector store for semantic email classification.\nEngineered few-shot prompting with structured output parsing (Pydantic) to enforce consistent triage into Ignore, Notify, and Respond categories.',
        tools: ['LangGraph', 'OpenAI GPT-4o', 'Pydantic', 'Python', 'Vector Store', 'Embeddings'],
        role: 'GenAI Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Medical Contract Parsing Agent',
        description: 'Built a Medical Contract Parsing Agent using knowledge graphs + direct LLM APIs with few-shot learning and prompt engineering for structured extraction and semantic analysis of provider contracts.\nDeveloped at Model N to automate complex healthcare contract processing.',
        tools: ['Python', 'LLM APIs', 'Knowledge Graphs', 'Neo4j', 'Prompt Engineering', 'Few-Shot Learning'],
        role: 'AI Intern',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Medicaid Triage Agent',
        description: 'Engineering a Medicaid Triage Agent with LangGraph Agents and Model Context Protocol (MCP), applying controllable summarization and LLM evaluation to optimize routing, prioritization, and compliance.\nAutomating workflows previously handled by 40 analysts at Model N.',
        tools: ['LangGraph', 'MCP', 'Python', 'LLM Evaluation', 'Workflow Automation'],
        role: 'AI Intern',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 5,
        name: 'Theft Detection & Kitchen Hygiene Solutions',
        description: 'Worked on Theft Detection & Kitchen Hygiene solutions using Faster R-CNN, YOLOv8, SAM, Transformers which is to be implemented in 500+ retail stores across the US.\nDeveloped computer vision models for real-time monitoring and compliance at MokSa.ai.',
        tools: ['Faster R-CNN', 'YOLOv8', 'SAM', 'Transformers', 'Python', 'Computer Vision', 'PyTorch'],
        role: 'Growth & ML Intern',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 6,
        name: 'Web Scraping & RAG Pipeline for AI Tool',
        description: 'Developed and optimized 10+ web scrapers for an AI tool, ensuring efficient and structured data extraction.\nEngineered a seamless RAG pipeline, integrating retrieval and generation components for improved AI performance at MadScientist.',
        tools: ['Python', 'BeautifulSoup', 'Selenium', 'RAG', 'LangChain', 'Web Scraping'],
        role: 'AI Intern',
        code: '',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },