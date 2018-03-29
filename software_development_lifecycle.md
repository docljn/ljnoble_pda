
# Software Development Life Cycle
[Software Development Life Cycle](http://www.tutorialspoint.com/sdlc/index.htm)
- definitions:
  - "a series of planned activities to develop or alter software products"
  - "the process used to design, develop and test high-quality software"
  - aka "Software Development Process" as defined by ISO/IEC 12207

## stages:
  1. Planning and Requirement Analysis
    - information collected from team, customer, sales, market surveys, domain experts
    - conduct product feasibility study (economic, operational, technical)
    - plan (basic approach, QA requirement, risks associated)
  2. Defining Requirements
    - clearly defined and documented
    - approved by customer/market analyst
    - the Software Requirement Specification (SRS) document contains all product requirements to be designed and developed during the project life cycle
  3. Designing Product Architecture
    - may be more than one design approach for the product architecture
    - a Design Document Specification (DDS) proposes & documents an approach (there may be many of these)
    - design choice is based on risk/robustness/modularity/budget/time
    - the DDS defines:
      - all architectural modules
      - communication & data flow representation with external/3rd party modules
      - minute detail of internal design of all modules
  4. Building/Developing the Product
    - code is generated as per DDS following coding guidelines & using programming tools
    - language choice relates to type of software
  5. Testing the Product
    - all stages include testing
    - specifically: defect reporting, tracking, fixing & retesting
    - complete when product reaches quality standards defined in SRS
  6. Deployment in the Market and Maintenance
    - can be in stages e.g. User Acceptance Testing (UAT) with limited release into a segment of the business environment
    - feedback can result in changes/enhancements
    - maintenance follows deployment

## Process Models
### Waterfall
  - first SDLC approach
  - aka "linear-sequential life cycle model"
  - each phase must be completed before the next phase can begin (no overlap)
  - output of phase one is input of phase two, etc.
#### Advantages & Disadvantages
Advantages:
  - departmentalisation, schedule control, clear structure
  - simple
  - easy to manage due to rigid model
  - one, clearly defined, phase at at a time
  - clear milestones
  - well-documented process & results
Disadvantages:
  - limited reflection / revision
  - no working software until late in the cycle
  - high risk & uncertainty
  - complex, OO projects, long & ongoing projects are not well served
  - cannot accommodate changing requirements (high risk)
  - adjusting scope can terminate a project
  - big bang integration means no early identifying on tech/business bottlenecks or challenges
#### Phases in development process
  - all possible requirements are captured and documented
  - system design based on requirements specifies hardware, system requirements & system architecture
  - small units are developed, tested for functionality (unit testing) and integrated in the next stage
  - post-integration, the system is tested for faults and failures
  - following testing (functional and non-functional), product is deployed
  - patches or improved versions are released (maintenance delivers to customer)
#### Iteration in development process
??????????????????? This is a separate model in the link we are given, aka incremental model https://www.tutorialspoint.com/sdlc/sdlc_iterative_model.htm
#### Factors affecting choice of approach
Good for:
  - well-documented, clear, fixed requirements (no ambiguity)
  - stable product definition
  - well-understood, non-dynamic technology
  - well resourced, available expertise
  - short duration
#### Production of functional & non-functional requirements specification
?????????????????????????????

### Incremental
  - aka "Iterative Model", "Evolutionary Acquisition", "Incremental Build"
  - simple implementation of a small set of software requirements evolves until complete system is ready for deployment
  - each iteration involves design modifications and new functional capabilities, and follows the cycle from requirements to testing
#### Advantages & Disadvantages
Advantages:
  - early working functionality: operational product after each increment
  - results early and regularly: rapid customer evaluation & feedback
  - parallel development
  - measurable progress
  - change is less costly, thus better supported
  - testing & debugging is easier in smaller iterations
  - each iteration is an easily-managed milestone, and identifies/resolves risks which can be utilised/applied to the next
  - high risk parts are done first
  - good for large / mission-critical projects
Disadvantages:
  - may need more resources
  - changing requirements can still cause problems
  - more management required, and greater complexity
  - because not all requirements are gathered, may have issues with architecture or design
  - defining increments may require whole system definition
  - unknown end point: risky
  - risk analysis requires skilled resources, and can prevent progress
#### Phases in development process
  - requirements -> repeat(design & development -> testing -> implementation)
#### Iteration in development process
???????????
#### Factors affecting choice of approach
Good for:
  - clearly defined & understood system requirements
  - some functionalities/enhancements may evolve
  - time-to-market is constrained
  - new tech is being used & learned during development
  - resources will be contracted during specific iterations
  - some high risk features/goals which may change


### Spiral
  - Incremental release/refinement + Waterfall systematic/controlled approach
  - emphasis on risk analysis
  - learning with maturity can minimise risk
#### Advantages & Disadvantages
Advantages:
  - elements can be added without conflicting with previous requirements/design
  - accommodate changing requirements
  - extensive use of prototypes
  - more accurate capture of requirements
  - more risky parts developed earlier to help risk management
  - orderly transition to maintenance
  - early user involvement
Disadvantages:
  - very strict management required to avoid infinite spiral loop
  - complex management
  - unclear end point
  - expensive for small projects
  - unsuitable for small/low risk projects
  - extensive documentation required for intermediate stages
#### Phases in development process
Four phases are passed through in each spiral (one of each per spiral):
  1. Identification
    - business requirements
    - system requirements
    - subsystem requirements
    - unit requirements
  2. Design
    - conceptual design
    - architectural design
    - logical design of modules
    - physical product design
    - final design
  3. Construct/Build
    - Proof of Concept
    - working model with version number
    - all sent to customer for feedback
  4. Evaluaton/Risk Analysis
    - identify/estimate/monitor technical feasibility & management risks
    - e.g. schedule slippage, cost overrun
    - after testing, customer evaluates after each iteration
    - feedback results in a new spiral to implement changes/additions etc
#### Iteration in development process
????????????????????????
#### Factors affecting choice of approach
Good for:
  - budget constraint
  - risk evaluation is important
  - long-term projects, as allows for changes to requirements with time/economic priorities
  - customer unsure of requirements
  - complex requirements must be evaluated to get clarity
  - new product line requires customer feedback
  - significant change expected

### Verification and Validation model
????????????????????????????? Very similar to Waterfall
https://www.tutorialspoint.com/sdlc/sdlc_v_model.htm

### Big Bang model
????????????????????????????? Very little planning, analysis, predictability
https://www.tutorialspoint.com/sdlc/sdlc_bigbang_model.htm

### Agile
  - based on "adaptive software development methods" rather than predictive approach
  - combine iterative & incremental with focus on adaptability & customer satisfaction
  - rapid delivery of working software
  - no detailed planning: clarity is only on features required
  - small, incremental builds include focusing on specific features
  - cross-functional teams working on all stages simultaneously during small time frames
  - every product needs to be handled differently
*Agile Manifesto Principles*
  - Individuals and interactions
    - self-organisation
    - self-motivation
    - co-location
    - pair programming
  - Working software
    - best means of communicating with customers to understand requirements
    - minimal documentation provided
  - Customer collaboration
    - required to get proper product requirements
  - Responding to change
    - quick response to change
    - continuous development
#### Advantages & Disadvantages
Advantages:
  - realistic
  - teamwork, cross-training
  - minimal planning, rules, documentation
  - rapid demonstration of functionality, early partial working solutions
  - fixed/changing requirements & environments
  - overall context gives plan, agile gives development and delivery
  - flexible
  - easy to manage
Disadvantages:
  - can't handle complex dependencies
  - risk regarding sustainability, maintainability, extensibility
  - will not work without overall plan, agile leader, agile product manager
  - scope, functionality & adjustments to meet deadlies driven by strict delivery management
  - customer feedback must be clear
  - high dependency on individual developers, as minimal documentation (also makes it hard to bring in new team members)
#### Phases in development process
  - repeat(planning - requirements analysis - design - build - test)
#### Iteration in development process
?????????????????????????????
#### Factors affecting choice of approach
??????????????????????????
#### Using Scrum or Kanban
*TODO
  - produce an Agile Product Roadmap
  - use User Stories to capture Requirements
  - product a Product Backlog
  - manage and track progress
  - present results
  - seek feedback
  - reflect on future improvements*

### Prototyping
#### Advantages & Disadvantages
#### Phases in development process
#### Iteration in development process
#### Factors affecting choice of approach




### RAD
  - prototyping & iterative development with no specific planning
  - writing the software includes the planning required for development
#### Advantages & Disadvantages
#### Phases in development process
#### Iteration in development process
#### Factors affecting choice of approach
