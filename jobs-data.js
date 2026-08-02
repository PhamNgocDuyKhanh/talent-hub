/* ==========================================================================
   jobs-data.js
   Single source of truth for every open role.
   -> To add a role: copy an object below and fill in the fields.
   -> "id" follows {role-slug}-{team-code}-{sequence} — lowercase,
      hyphen-separated, stable (never reuse or renumber an id once it's
      been shared as a deep link). Team codes in use: cbtw, iftg
      (InfoTrack Global), mm (MessageMedia), cs (ClickSend), ps
      (Pepperstone). This id also becomes the "#job=<id>" URL hash used
      for shareable links, so keep it short and URL-safe.
   -> "blurb" and "responsibilities" are placeholder copy pulled from the
      role title only — swap them for real JD content when you have it.
   -> "qualifications", "successMetrics", and "whyUs" are OPTIONAL arrays
      for when you have a full job description to show (see the ClickSend
      role for an example). Omit any of the three on roles that only have
      short-form copy — the drawer skips sections that aren't present.
   -> "applyUrl" should point at the real ATS/job posting. Leave blank to
      fall back to the mailto quick-apply flow.
   ========================================================================== */

export const JOBS = [
  // ==========================================
  // Company: CBTW
  // ==========================================
  {
    id: "product-manager-cbtw-01",
    title: "Senior Product Manager",
    company: "CBTW",
    companyUrl: "https://cbtw.tech/about",
    department: "Product",
    techStack: ["Product Management"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Own the roadmap for a cross-border product team and turn customer problems into shipped features.",
    responsibilities: [
      "Drive strategic product initiatives, process improvement efforts, and product and capability evolution activities aligned with CBTW’s vision, operational objectives, and long-term business direction",
      "Contribute to scalable product approaches, governance models, and reusable product and delivery approaches across initiatives, engagements, and cross-functional collaboration areas",
      "Guide prioritization, product governance, and continuous improvement activities to strengthen delivery consistency, product quality, and operational scalability",
      "Partner with internal stakeholders and client teams to support strategic opportunities, proposals, quotations, and solution positioning activities",
      "Lead or facilitate discovery sessions, requirement analysis, and business discussions to understand client goals, operational challenges, and product expectations",
      "Translate business needs into scalable product approaches, delivery strategies, and actionable recommendations for balancing business value, technical feasibility, and delivery constraints",
      "Contribute to scope definition, estimation, proposal validation, and solution refinement activities across opportunities and engagements",
      "Guide complex product delivery activities across multiple projects, products, or client engagements while ensuring alignment between roadmap priorities, delivery milestones, stakeholder expectations, and operational constraints",
      "Support Product Management and cross-functional teams in structuring requirements, refining product scope, and maintaining consistency across delivery initiatives",
      "Monitor delivery risks, dependencies, and scope evolution while facilitating cross-functional alignment, governance, and decision-making activities",
      "Contribute to release planning, governance improvements, and delivery quality initiatives across engagements",
      "Lead the adoption of AI-assisted practices to improve product analysis, requirement engineering, backlog management, documentation quality, proposal preparation, and delivery efficiency",
      "Promote effective usage of AI-assisted tools and modern AI product patterns to enhance collaboration, productivity, and decision-making across the Product Management function",
      "Contribute to AI-enabled solution approaches and product capabilities such as LLM-powered services, semantic search, knowledge retrieval systems, automation workflows, and AI-assisted operational processes",
      "Mentor and support Product team members through coaching, onboarding, knowledge sharing, and capability development initiatives",
      "Contribute to recruitment, interview processes, and evaluation activities for Product Management roles when needed",
      "Act as a secondary leadership layer within the Product Management function, supporting leadership continuity, operational alignment, and capability growth across teams"
    ],
    qualifications: [
      "13+ years of experience in Product Management, Product Ownership, Business Analysis, or related delivery roles across strategic initiatives, client engagements, and complex delivery environments",
      "Proven experience in senior product leadership activities involving proposals, delivery governance, stakeholder management, and organizational improvement initiatives",
      "Strong leadership presence with the ability to influence stakeholders, align cross-functional teams, and facilitate strategic discussions across business, delivery, and technology areas",
      "Excellent verbal and written communication skills in English, with experience mentoring, coaching, or supporting capability development within Product Management teams",
      "Strong understanding of product governance, roadmap structuring, backlog management, Agile delivery practices, and release planning across multiple projects or engagements",
      "Proven ability to balance business objectives, technical feasibility, operational scalability, and delivery constraints in product discovery, requirement analysis, and solution design activities",
      "Strong experience supporting proposals, quotations, estimation activities, discovery engagements, and scalable solution approaches aligned with business objectives",
      "Strong consulting mindset with the ability to understand client goals, operational challenges, and organizational constraints across different business contexts",
      "Hands-on experience leveraging AI-assisted tools to improve product analysis, documentation, requirement engineering, backlog management, proposal preparation, and collaboration activities",
      "Strong understanding of AI-enabled product capabilities and modern AI patterns such as LLM-powered services, semantic search, knowledge retrieval systems, and automation workflows",
      "Strong conceptual understanding of APIs, integrations, enterprise platforms, cloud-based systems, data structures, and scalable enterprise software delivery approaches",
      "Familiarity with data pipelines and modern AI concepts such as vector embeddings, Retrieval-Augmented Generation (RAG), document chunking, and knowledge indexing used in LLM-powered applications",
      "Experience working in consulting, enterprise platforms, digital transformation, or AI-enabled product environments involving complex stakeholder and delivery structures (Nice to have)",
      "Strong technical background or exposure to enterprise architecture, system integration, cloud-based platforms, data pipelines, or scalable backend service ecosystems (Nice to have)",
      "Familiarity with modern AI ecosystems and concepts such as LLM-enabled applications, semantic search, knowledge retrieval systems, vector databases, or AI-assisted operational workflows (Nice to have)",
      "Experience contributing to coaching, training, onboarding, or capability development initiatives within Product Management or cross-functional teams (Nice to have)",
      "Relevant certifications or training in Agile, Product Management, cloud technologies, enterprise architecture, or AI-related domains (e.g., SAFe, PSPO, PMP, AWS, Azure, AI Product Management, Generative AI, or similar) are considered a plus (Nice to have)"
    ],
  },

  // ==========================================
  // Company: ClickSend
  // ==========================================
  {
    id: "nodejs-cs-01",
    title: "BE (NodeJS / TypeScript) Engineer",
    company: "ClickSend",
    companyUrl: "",
    department: "Engineering",
    techStack: ["Node.js", "TypeScript", "AWS"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Build backend services in Node.js/TypeScript for a global messaging platform.",
    responsibilities: [
      "Write TypeScript and/or JavaScript software for deployment to Lambdas in AWS",
      "Perform quality assurance activities (unit testing, integration testing, technical review, code review, etc.)",
      "Participate in an agile software development team alongside testers, developers, and product owners to deliver quality software in a timely manner",
      "Report on status during standup meetings",
      "Participate in design meetings as required",
      "Collaborate with team members to ensure on-time delivery for every feature",
      "Propose innovative solutions to increase performance and quality while lowering total costs",
      "Provide continuous support and guidance to less senior colleagues through regular coaching, and support them in fulfilling their personal development plan"
    ],
    qualifications: [
      "3+ years of Node.js experience (Mid-level), or 5+ years (Senior-level)",
      "AWS Lambda development experience using Node/TypeScript/JavaScript, familiar with Serverless Framework or AWS SAM",
      "Some experience with asynchronous worker processes",
      "Strong experience designing, building, and maintaining microservices-based architectures",
      "Hands-on experience with distributed system challenges such as latency, partial failures, retries, and timeouts",
      "Agile software development experience",
      "Strong experience working with APIs — particularly integrating with APIs — and technical QA for unit testing and API integration testing",
      "Solid experience with AWS services, especially CloudFormation, infrastructure as code, S3, Lambda, API Gateway, SQS, ECS, and DynamoDB. Experience with Jira and Git/GitHub",
      "Comfortable communicating in English",
      "Happy to coach, mentor, and train less senior colleagues"
    ],
    successMetrics: [
      "Participation in software development with an agile team",
      "Finishing coding tasks as assigned",
      "Reviewing code written by peers",
      "Writing automated test scripts to perform unit and integration tests for your code",
      "Continually improving your skills by taking courses as agreed with your manager",
      "Sharing your skills with others",
      "Obtaining certifications in your core skills as agreed with your manager"
    ],
    whyUs: [
      "The latest technologies for product development",
      "The finest IT tools to raise your potential to even greater heights",
      "The power to deliver truly awesome products",
      "Professional training and certification programs",
      "English training with a native English teacher",
      "Flexible schedules, great benefits and bonuses",
      "Private health care program, extended to family members",
      "Access to global opportunities",
      "Greenfield software development"
    ],
  },

  // ==========================================
  // Company: CreditorWatch
  // ==========================================
  {
    id: "php-cw-01",
    title: "PHP Integration Engineer",
    company: "CreditorWatch",
    companyUrl: "",
    department: "Engineering",
    techStack: ["PHP", "AWS"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Build robust system-to-system integrations, automated onboarding flows, and scalable RESTful APIs using PHP.",
    responsibilities: [
      "Build and maintain system-to-system integrations aligned to our orchestration layer direction (customer, product, pricing, subscription, access)",
      "Deliver automated customer onboarding flows that provision accounts/configuration and enable subscription management and customer access",
      "Implement robust sync patterns (delta/incremental sync, batching, idempotency, retries, safe re-runs and partial failure handling)",
      "Embed observability (structured logs, metrics, alerts), so integrations are easy to operate and troubleshoot",
      "Partner with product and ops to support internal admin experiences that manage customers, settings and configuration",
      "Contribute to platform AI uplift where it intersects with integrations, including enabling MCP-based services/tool patterns with traceability and safe access",
      "Provide continuous support and guidance to less senior colleagues through regular coaching activities and support them in fulfilling their personal development plans"
    ],
    qualifications: [
      "At least 4 years of experience working with PHP Development",
      "Deep understanding of how to build performant, reliable, decoupled, testable and maintainable code with PHP (preferably Symfony, Laravel)",
      "Experience with building services and RESTful APIs",
      "Strong experience delivering integrations across multiple systems (MS Dynamics, Salesforce, Databrick APIs, data sync, background jobs)",
      "A reliability-first mindset: error handling, idempotency, retries, and operational readiness",
      "Experience designing service contracts/interfaces and mapping between schemas",
      "Comfort collaborating across engineering/product/ops, making system boundaries and source-of-truth explicit",
      "Good English communication skills (both verbal & written), especially in the global software development environment",
      "Experience integrating with ERP/finance systems and subscription/billing domains (Nice to have)",
      "Experience with orchestration patterns for scheduled/batch jobs and monitoring (Nice to have)",
      "Familiarity with MCP concepts or building tool-style APIs for AI clients (Nice to have)",
      "Be happy to coach, mentor and train less senior colleagues (Nice to have)"
    ],
  },

  // ==========================================
  // Company: hipages
  // ==========================================
  {
    id: "nodejstl-hp-01",
    title: "Tech Lead (NodeJS, Microservices)",
    company: "hipages",
    companyUrl: "",
    department: "Engineering",
    techStack: ["Node.js", "React", "TypeScript"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Lead delivery teams, design scalable architectures, and drive production reliability using Node.js, TypeScript, and React.js.",
    responsibilities: [
      "Write TypeScript and/or JavaScript software for deployment to Lambdas in AWS",
      "Break down ambiguous initiatives into clear technical designs and sequenced, cross-repo work for the team to execute",
      "Own production reliability for the team — lead incident response and turn recurring issues into structural fixes",
      "Build team-level process and tooling that multiplies the team's output, not just your own",
      "Stay hands-on — ship code personally and review the team's pull requests",
      "Act as the engineering counterpart to product and design, owning delivery from planning through launch"    
    ],
    qualifications: [
      "7+ years of software engineering experience, including 2+ years leading delivery teams",
      "Proven ability to break down ambiguous initiatives into technical specs and sequenced, cross-repo work",
      "Strong incident and production-ownership experience — comfortable diagnosing, fixing, and preventing recurrence of live issues",
      "Strong expertise in Node.js, React.js, and TypeScript, with working proficiency in PHP",
      "Proven fluency with AI-assisted development tools — able to direct, review, and ship AI-generated code confidently",
      "Track record of mentoring engineers and building team-level processes or documentation that scale beyond yourself",
      "Strong English communication skills, written and verbal — able to write clearly for both engineers and non-technical stakeholders",    
    ],
    niceToHave: [
      "XP techniques (pair programming, TDD) (Nice to have)",
      "Experience with event-driven architectures, RabbitMQ, and Apache Kafka",
      "Familiarity with observability tools (Honeycomb, Datadog, or similar)",
      "Experience with Terraform or infrastructure-as-code",
      "NoSQL database experience",
      "Background in marketplace platforms or two-sided marketplaces",
      "Experience working in distributed/remote teams across time zones"    
    ],    
  },

  // ==========================================
  // Company: InfoTrack Global
  // ==========================================
  {
    id: "tech-architect-iftg-01",
    title: "Technical Architect — Core Platform (.NET)",
    company: "InfoTrack Global",
    companyUrl: "",
    department: "Engineering",
    techStack: [".NET / C#", "Microservices", "AWS"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Architect and evolve a scalable, modular, and extensible SaaS core platform using C# and .NET ecosystems.",
    responsibilities: [
      "Architect and evolve a scalable, modular, and extensible SaaS core platform used by global feature teams",
      "Define and enforce architectural standards, patterns, and best practices to ensure consistency and maintainability across all platform components",
      "Collaborate with cross-functional teams (product, DevOps, QA, and regional feature teams) to align on platform capabilities, shared services, and integration strategies",
      "Identify and eliminate duplication of work across teams by designing reusable services, shared libraries, and standard APIs",
      "Own the technical roadmap for the core platform in alignment with product vision and long-term scalability goals",
      "Conduct architecture reviews, technical audits, and evaluate new tools/technologies to improve system performance and development efficiency",
      "Mentor and guide engineers in the team, encouraging sound engineering decisions and promoting a strong technical culture",
      "Ensure the platform is secure, resilient, and performs at scale, considering multi-region requirements",
      "Participate in incident reviews and root cause analysis for major issues that impact the platform or regional feature teams"
    ],
    qualifications: [
      "Proven experience (15+ years) in software development, with at least 3+ years in a software architect or senior technical leadership role including hands-on ownership designing complex, core platform systems",
      "Strong experiences of microservices, event-driven design, event sourcing and asynchronous communication patterns",
      "Strong proficiency in applying CQRS to complex domains, including event-driven modeling, read model optimization, and ensuring data consistency through suitable convergence and conflict resolution mechanisms",
      "Hands-on experience with messaging platforms such as RabbitMQ, Kafka, Mass Transit or similar",
      "Strong knowledge of distributed system design: data consistency, eventual consistency, failover, resiliency patterns, etc",
      "Hands-on experience designing scalable platforms with clear boundaries and modular components that support downstream development teams, with strong emphasis on reliability, scalability, and observability",
      "Experience with cloud platforms (AWS, GCP, or Azure), CI/CD pipelines, and containerization (e.g., Docker, Kubernetes)",
      "Experience in C# and .NET ecosystems, including modern frameworks and tools",
      "Knowledge of Microfrontend architecture is a plus",
      "Excellent communication skills with the ability to explain complex technical concepts to stakeholders across different geographies and levels of technical expertise",
      "Strong leadership and collaboration skills in a distributed team environment",
      "Strong English communication"
    ],
    whoYouWillBeWorkingWith: [
      "Engineering team members",
      "Product management team"
    ],
    howYouWillAddValue: [
      "Raising the bar of what-good-looks-like within the Company Engineering",
      "Design, development, and delivery of quality, maintainable backend, web applications",
      "Creation of APIs which will be consumed both internally and externally",
      "Involvement in data-driven product experimentation",
      "Writing clean, scalable, testable code to support and enable the growth of the company",
      "Participation in discussions of system architecture",
      "Coaching and mentoring of more junior team members"
    ],
  },
  {
    id: "product-owner-iftg-01",
    title: "Product Owner",
    company: "InfoTrack Global",
    companyUrl: "",
    department: "Product",
    techStack: ["Product Management"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Own the backlog for a product squad and keep delivery tied to business priorities.",
    responsibilities: [
      "Groom and prioritize the sprint backlog",
      "Act as the day-to-day voice of the customer for the team",
      "Coordinate releases with stakeholders"
    ],
  },

  // ==========================================
  // Company: MessageMedia
  // ==========================================
  {
    id: "java-engineer-mm-01",
    title: "Senior Java Engineer (Large-scale Microservices, AWS)",
    company: "MessageMedia",
    companyUrl: "https://messagemedia.com/au/",
    department: "Engineering",
    techStack: ["Java", "AWS", "Microservices"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Build and scale Java microservices on AWS that move millions of messages a day.",
    responsibilities: [
      "Work as software engineer on the web-based application product in JAVA-related and open-source technologies",
      "Develop and enhance product offerings in accordance with design, consistent with business objectives",
      "Continuously research and implement new technologies to maximize development efficiency",
      "Identify potential issues and working out possible solutions",
      "Provide continuous support and guidance to less senior colleagues through regular coaching activities and support them in fulfilling their personal development plans"
    ],
    qualifications: [
      "At least 3+ YoE for the Medior level and 5+ years for the Senior level. If you’re confident in your skills, don’t hesitate to apply regardless of your years of experience",
      "Proven hands-on experience on Java ecosystem, Spring boot, core Java concepts: OOP, Collections, Threading, Concurrency, memory management, etc.",
      "Experience with one of NoSQL databases: MongoDB/Cassandra/graph DB (Neo4j)",
      "Well-versed in writing structured, well-documented, maintainable, and clean code",
      "Strong experience in Restful API design and integration",
      "Strong experience designing, building, and maintaining microservices-based architectures, event-driven architecture",
      "Hands-on experience with distributed system challenges such as latency, partial failures, retries, and timeouts, etc.",
      "Demonstrate your experience with design patterns, coding standards, TDD",
      "Understanding of agent-based systems and tool calling architectures",
      "Exposure to MCP (Model Context Protocol) or similar tool orchestration frameworks",
      "Cloud-based technologies: AWS, OpenShift, Docker is a BIG plus",
      "Experience with Kotlin/NodeJS/Python/ReactJS is a BIG plus",
      "Working knowledge of functional programming languages is a BIG plus",
      "Be happy to coach, mentor and train less senior colleagues",
      "Good command of English (both written/verbal) is essential"
    ],
  },

  // ==========================================
  // Company: Pepperstone — Trading Platform
  // ==========================================
  {
    id: "fullstack-lead-ps-01",
    title: "Fullstack TypeScript/JavaScript Tech Lead",
    company: "Pepperstone — Trading Platform",
    companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/",
    department: "Engineering",
    techStack: ["TypeScript", "React", "Node.js"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Lead a fullstack team building trading platform features end to end.",
    responsibilities: [
      "Guide architecture and code quality across the fullstack team",
      "Ship React/Node features for a live trading platform",
      "Mentor engineers and run technical planning"
    ],
  },
  {
    id: "fullstack-engineer-ps-01",
    title: "Fullstack Engineer (NodeJS, ReactJS)",
    company: "Pepperstone — Trading Platform",
    companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/",
    department: "Engineering",
    techStack: ["Node.js", "React"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Build customer-facing trading features across a Node.js and React stack.",
    responsibilities: [
      "Develop features across the Node.js/React stack",
      "Work closely with product and design on trading platform UX",
      "Write automated tests and keep deployments smooth"
    ],
  },
  {
    id: "data-engineer-ps-01",
    title: "Senior Data Engineer",
    company: "Pepperstone — Trading Platform",
    companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/",
    department: "Data",
    techStack: ["Data Engineering", "AWS"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Design data pipelines that power trading analytics and reporting.",
    responsibilities: [
      "Build and maintain scalable data pipelines",
      "Partner with analytics and platform teams on data models",
      "Own data quality and pipeline observability"
    ],
  },
  {
    id: "salesforce-ps-01",
    title: "Salesforce Engineer",
    company: "Pepperstone — Trading Platform",
    companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/",
    department: "Salesforce",
    techStack: ["Salesforce"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Build and customize Salesforce solutions supporting global trading operations.",
    responsibilities: [
      "Develop Apex, Lightning, and configuration-based solutions",
      "Integrate Salesforce with downstream systems",
      "Partner with business stakeholders on requirements"
    ],
  },
  {
    id: "salesforce-mulesoft-ps-01",
    title: "Salesforce Integration Engineer — Mulesoft",
    company: "Pepperstone — Trading Platform",
    companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/",
    department: "Salesforce",
    techStack: ["Salesforce"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Connect Salesforce to the wider platform through Mulesoft integrations.",
    responsibilities: [
      "Design and build Mulesoft integration flows",
      "Ensure reliable, monitored data sync between systems",
      "Troubleshoot integration issues end to end"
    ],
  },
  {
    id: "salesforce-datacloud-ps-01",
    title: "Salesforce Data Cloud Integration Engineer",
    company: "Pepperstone — Trading Platform",
    companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/",
    department: "Salesforce",
    techStack: ["Salesforce"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Bring customer data into Salesforce Data Cloud for a unified view across teams.",
    responsibilities: [
      "Build and maintain Data Cloud integrations",
      "Model unified customer profiles across sources",
      "Support downstream marketing and service use cases"
    ],
    applyUrl: "https://careers-collaborationbetterstheworldvi.icims.com/jobs/1573/ps-%7c-salesforce-data-cloud-integration-engineer/job"
  },
  {
    id: "qa-salesforce-ps-01",
    title: "Senior QA Engineer (Salesforce Platform)",
    company: "Pepperstone — Trading Platform",
    companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/",
    department: "QA",
    techStack: ["Salesforce", "QA & Testing"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Own quality for Salesforce releases through a mix of manual and automated testing.",
    responsibilities: [
      "Write and execute test plans for Salesforce releases",
      "Build and maintain automated test suites",
      "Triage bugs with engineering and product"
    ],
  },
  {
    id: "ai-engineer-ps-01",
    title: "AI Engineer",
    company: "Pepperstone — Trading Platform",
    companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/",
    department: "Engineering",
    techStack: ["AI/ML", "Python"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Build applied AI features into a live trading platform, from prototype to production.",
    responsibilities: [
      "Prototype and ship applied AI/ML features",
      "Work with platform teams to productionize models",
      "Evaluate model performance and iterate quickly"
    ],
  },
  {
    id: "operations-manager-ps-01",
    title: "Operations Manager",
    company: "Pepperstone — Trading Platform",
    companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/",
    department: "Operations",
    techStack: ["Operations"],
    location: "HCMC",
    type: "Full-time",
    blurb: "Keep the delivery engine running — resourcing, process, and day-to-day team operations.",
    responsibilities: [
      "Manage resourcing and delivery operations across teams",
      "Improve internal process and reporting",
      "Partner with leadership on team health and growth"
    ],
  }
];
