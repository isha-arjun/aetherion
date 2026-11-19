// Textbook-depth chapters for Aetherion Learning Mode.
// Each chapter is authored in-app and is independent of external reading links.
export const COURSE_CHAPTERS = {
  "0:0": {
    subtitle: "The engineering mindset: turning needs into systems that work",
    outcomes: [
      "Distinguish engineering from science, invention, and routine construction.",
      "Describe a system using inputs, processes, outputs, feedback, and boundaries.",
      "Translate a human need into measurable engineering requirements.",
      "Explain constraints, trade-offs, stakeholders, and failure modes."
    ],
    sections: [
      { title: "1. What engineering actually is", paragraphs: [
        "Engineering is the disciplined creation or improvement of things that solve real problems. Those things may be physical objects, software, services, infrastructure, processes, or combinations of them. An engineer does not begin by asking, “What technology would be impressive to use?” The better first question is, “Who has a problem, what outcome would help them, and what evidence would show that the solution works?”",
        "Science aims to build reliable explanations of the natural world. Engineering uses scientific knowledge, mathematics, experience, design methods, and testing to make systems that achieve chosen goals. The two activities overlap: an engineering project may need new scientific understanding, and scientific research often depends on engineered instruments. But their central questions differ. Science often asks what is true and why; engineering asks what can be made to work, for whom, under which constraints, and with what risks.",
        "An invention is a new idea or mechanism. A prototype is an early representation used to learn. A product or deployed system must work for real users in its intended environment. A clever prototype is not automatically a successful product. It may be too expensive, unreliable, difficult to repair, unsafe, confusing, or impossible to manufacture consistently.",
        "Engineering is therefore an evidence-based cycle: understand the need, define success, explore alternatives, model or prototype, test, learn, and improve. Documentation matters because decisions should be understandable and repeatable by people other than the original designer."
      ]},
      { title: "2. Think in systems, not isolated parts", paragraphs: [
        "A system is a collection of interacting elements organised to achieve a purpose. A robot is not merely a motor or a program. It includes a user, a task, a mechanical structure, sensors, electronics, software, a power source, an environment, and procedures for setup and maintenance. A failure in one part can affect the whole system.",
        "A useful first model is input → process → output. Inputs are information, energy, or materials entering the system. The process transforms them. Outputs are the results. For a writing robot, inputs might include text, a sheet of paper, a selected writing style, and a start command. The process interprets the text, locates the writing area, plans pen movement, and controls the mechanism. Outputs include marks on paper, status information, and perhaps a record of completion.",
        "This model is a beginning, not a complete description. Real systems interact with their environment. Paper may be misaligned; lighting may change; a pen may run dry; a user may press stop. Feedback is information about the result that is used to adjust behaviour. If a system measures its position and corrects movement, it uses feedback. If it simply performs a fixed sequence without checking the result, it is operating open-loop.",
        "A system boundary states what is included in the analysis. If the writing robot is the system, the user and room may be external, but their effects still matter. Boundaries are chosen for a purpose: include enough context to understand performance, interfaces, and risks."
      ]},
      { title: "3. Requirements: turn wishes into testable statements", paragraphs: [
        "A need describes a desired outcome in the user's language. A requirement translates that need into a statement that can guide design and be checked. “The robot should write beautifully” is not yet a useful engineering requirement because different people may interpret it differently. “For the defined test font and paper, the robot shall place the centre of each test character within 2 mm of its target position in at least  nine out of ten trials” is much more testable. The exact threshold would need to be justified by the use case.",
        "Good requirements are clear, necessary, feasible, measurable where possible, and verifiable. Avoid mixing several unrelated demands into one sentence. Distinguish functional requirements (what the system does) from performance requirements (how well it does it), interface requirements (how it connects to other things), environmental requirements (conditions it must tolerate), and constraints (limits the design must respect).",
        "Every requirement should have a verification method. Inspection checks a property directly, analysis uses calculations or models, demonstration shows behaviour, and test measures performance under defined conditions. For example, a maximum device width may be verified by measurement; a positioning accuracy requirement needs a repeatable test with a defined reference.",
        "Traceability links each need to requirements, design elements, and verification evidence. If a requirement has no planned test, it may be impossible to prove that it was met. If a test does not link to a requirement or learning question, ask why it is being performed."
      ]},
      { title: "4. Constraints and trade-offs", paragraphs: [
        "Engineering decisions are made under constraints. Common constraints include cost, time, available tools, size, mass, energy, materials, reliability, maintainability, skill, and safety. A constraint is not necessarily a defect; it is part of the design situation.",
        "Optimising one metric can make another worse. A stronger frame may be heavier. A faster mechanism may consume more energy or create more vibration. A highly accurate sensor may cost more and require more complex calibration. Engineers make trade-offs explicitly rather than pretending one design is best in every dimension.",
        "A weighted decision matrix can help compare concepts. First define criteria, then assign importance weights, then score each concept against each criterion using a consistent scale. Multiply scores by weights and compare totals. The result is not an objective truth: scores depend on evidence, assumptions, and chosen weights. Use the matrix to structure discussion, not to hide judgement behind arithmetic.",
        "A useful design record says what was chosen, what alternatives were considered, what evidence mattered, what assumptions remain, and what future result could cause the decision to change."
      ]},
      { title: "5. Stakeholders, context, and responsible design", paragraphs: [
        "The person who pays for a system may not be the person who uses it, maintains it, or is affected by it. These groups are stakeholders. A school robot, for example, may affect students, teachers, technicians, cleaners, parents, and visitors. Their needs may differ.",
        "Context changes what counts as success. A prototype used on a quiet desk may behave differently in a busy classroom. A device that works for one paper size may fail with another. A user with limited dexterity may need larger controls or a different loading process. Inclusive design asks who might be excluded by assumptions about users, environments, language, ability, or access.",
        "Responsible engineering considers foreseeable misuse, failure, privacy, security, repair, waste, and environmental impact. A design review should ask not only “Does it work?” but also “How could it fail, who could be affected, and how would someone notice and recover?” Physical hardware experiments should use appropriate supervision and safe, low-energy setups."
      ]},
      { title: "6. A repeatable engineering workflow", paragraphs: [
        "A practical workflow begins with problem discovery. Observe the task, speak with stakeholders where appropriate, and distinguish symptoms from root causes. Then write a problem statement that names the user, context, difficulty, and desired outcome without prematurely choosing a solution.",
        "Next, create requirements and acceptance criteria. Research existing approaches and identify what is already known. Generate more than one concept. Compare concepts against the requirements and constraints. Select a concept with reasons, then model the important uncertainties before building.",
        "Build the smallest prototype that can answer the most important question. A paper mock-up can test layout; a browser simulation can test logic; a CAD model can test geometry; a supervised low-voltage prototype can test an interface. Record what the prototype can and cannot demonstrate.",
        "Test against pre-written criteria. Record conditions, measurements, failures, and unexpected behaviour. Do not change the pass criteria after seeing results just to make the prototype appear successful. Analyse the evidence, update the design, and repeat. A final report should state the result, limitations, and next steps honestly."
      ]}
    ],
    glossary: [
      ["System", "A set of interacting elements organised to achieve a purpose."],
      ["Stakeholder", "A person or group that uses, maintains, pays for, or is affected by a system."],
      ["Requirement", "A clear statement of a needed system property or behaviour."],
      ["Constraint", "A limit or condition that the design must respect."],
      ["Verification", "Evidence that the system meets its specified requirements."],
      ["Validation", "Evidence that the system solves the intended real-world need."],
      ["Prototype", "An early representation built to explore or test an idea."],
      ["Feedback", "Information about a result that is used to adjust system behaviour."],
      ["Traceability", "Links between needs, requirements, design decisions, and tests."]
    ],
    worked: [
      { title: "Worked example: define a desk-writing robot", steps: [
        "Start with the need: a user wants typed text reproduced on a sheet of paper.",
        "Identify stakeholders: the user, anyone loading paper or replacing the pen, and anyone sharing the workspace.",
        "Set a system boundary: include the frame, paper positioning, pen mechanism, controller, software, and user interface. Treat the user and room as external influences.",
        "List inputs: text, page dimensions, paper position, pen choice, and start/stop commands.",
        "List outputs: written marks, completion status, and an error or pause message when the task cannot continue.",
        "Write measurable requirements. Example: the system shall stop and report an alignment error if the detected page boundary is outside its calibrated range.",
        "Define a test: deliberately provide several supported and unsupported page positions, record whether the system detects each case, and compare results with the requirement.",
        "Record assumptions: the paper is flat, the selected pen is compatible, and the test surface is stable. These assumptions must later be checked."
      ], conclusion: "Notice that this example does not choose a motor or camera first. It defines the problem and evidence before selecting components." }
    ],
    practice: [
      { difficulty: "Foundation", prompt: "Choose an everyday device. Identify its user, purpose, three inputs, three outputs, and one important environmental influence.", solution: "A phone might receive touch, power, and network data; output light, sound, and transmitted data; and be affected by temperature or signal quality. Many answers are possible if the boundary is stated." },
      { difficulty: "Applied", prompt: "Rewrite “the robot should be fast” as a measurable requirement. State the operating conditions and how you would test it.", solution: "One possible form: “Under the defined paper size and text sample, the system shall complete the test page within 4 minutes in at least 9 of 10 trials.” The time limit must be chosen from user needs, not invented as a universal standard." },
      { difficulty: "Analysis", prompt: "A design team chooses a heavier frame because it reduces vibration. Name two possible benefits, two costs, and one experiment that could inform the decision.", solution: "Benefits may include improved stiffness and more stable writing. Costs may include greater mass, material use, and transport difficulty. Compare vibration and positioning error across frame concepts under the same defined test conditions." },
      { difficulty: "Design", prompt: "Write a short problem statement for a robot that helps reproduce notes on paper. Do not name a specific motor, sensor, or mechanism.", solution: "A strong statement identifies who needs the help, the task and context, the difficulty being addressed, and the desired outcome. It avoids locking the team into a solution before alternatives are explored." }
    ],
    lab: {
      title: "Lab 0.1 — System teardown and requirements",
      objective: "Practise analysing a real system without taking it apart or using tools.",
      materials: "A familiar device, a notebook, and a timer. No disassembly is required.",
      procedure: [
        "Choose a device you can observe safely, such as a desk lamp, calculator, or printer.",
        "Write its purpose in one sentence from the user's perspective.",
        "Draw a boundary around the system and list what is inside and outside it.",
        "Record at least five inputs, five outputs, and three environmental influences.",
        "Write five functional or performance requirements. Make at least three measurable.",
        "For each measurable requirement, define an inspection, analysis, demonstration, or test.",
        "Identify three plausible failure modes and describe how a user would notice each one."
      ],
      deliverable: "A one-to-two-page system brief with a block diagram, requirements table, and failure-mode list.",
      rubric: ["System boundary and stakeholders are clear.", "Inputs, processes, outputs, and interfaces are correctly identified.", "Requirements are unambiguous and testable.", "Verification methods match the requirements.", "Assumptions and limitations are stated."]
    },
    assessment: [
      { question: "Which statement is the strongest performance requirement?", options: ["The device should feel premium.", "The robot should be clever.", "The system shall place the pen within 2 mm of target in at least 9 of 10 defined trials.", "The robot should use modern components."], answer: 2, explanation: "It defines a measurable outcome and a repeatable success threshold." },
      { question: "What is the main difference between verification and validation?", options: ["They mean exactly the same thing.", "Verification checks specified requirements; validation checks whether the intended need is met.", "Validation is only for software.", "Verification happens only after manufacturing."], answer: 1, explanation: "A system can meet its written specification yet still fail to solve the user's real problem." },
      { question: "Why define a system boundary?", options: ["To pretend external influences do not exist.", "To decide what is included in the analysis while still recognising relevant interfaces.", "To avoid identifying stakeholders.", "To remove the need for testing."], answer: 1, explanation: "Boundaries keep analysis manageable; interfaces and external influences still matter." },
      { question: "A heavier frame reduces vibration but increases mass. This is an example of:", options: ["A trade-off.", "A syntax error.", "A requirement trace.", "A unit conversion."], answer: 0, explanation: "Improving one property can worsen another, so the decision must be evaluated against the overall requirements." }
    ],
    mastery: "You are ready to move on when you can analyse an unfamiliar device, create a clear system boundary, write measurable requirements, choose appropriate verification methods, and explain at least two design trade-offs without relying on vague claims."
  },
  "0:1": {
    subtitle: "Build a reliable engineering notebook and a repeatable digital workflow",
    outcomes: ["Explain why engineering work needs traceable records.", "Organise project files so another person can navigate them.", "Distinguish source files, evidence, decisions, and deliverables.", "Write a useful technical decision record."],
    sections: [
      { title: "1. Engineering is a team memory problem", paragraphs: [
        "Engineering projects create many kinds of information: requirements, sketches, source code, calculations, test data, photos, meeting notes, decisions, and release files. If this information is scattered or named inconsistently, the team loses time and may make decisions using outdated evidence.",
        "Documentation is not decoration. It preserves why a design exists, what was tested, which version produced a result, and what remains uncertain. A future teammate should be able to answer: what is this file, which project does it belong to, what changed, and where is the supporting evidence?",
        "A useful notebook records observations separately from interpretations. “The measured position differed by 3 mm in trial four” is an observation. “The frame flex caused the error” is an interpretation that needs evidence. Keeping them distinct makes reviews more honest."
      ]},
      { title: "2. Design a project information structure", paragraphs: [
        "Start with a small number of predictable folders. For example: 00-admin for scope and planning; 01-requirements for needs and acceptance criteria; 02-research for sources and summaries; 03-design for diagrams and CAD; 04-software for source code; 05-tests for procedures and raw results; 06-reports for reviewed deliverables; and archive for superseded material.",
        "The exact names matter less than consistency. Avoid a folder called “final final latest” and filenames such as “thing2new”. Prefer descriptive names that include the subject and, when useful, a date or version. Never overwrite raw test data; preserve the original and create a processed copy.",
        "A README should explain the project's purpose, current status, how the folders are organised, how to reproduce important results, and where to find the current approved deliverables. A new collaborator should not need a private explanation to get started."
      ]},
      { title: "3. Version history and change control", paragraphs: [
        "Version control records changes to files over time. A commit should represent a coherent change and have a message that explains what changed. Small, focused commits are easier to review and reverse than one enormous commit containing unrelated edits.",
        "A version history is not a substitute for backups, testing, or review. It cannot prove that code is correct or that a measurement is valid. It helps answer which version changed, when it changed, and what the author intended.",
        "When a result is reported, record the version of the software, design, dataset, or procedure that produced it. Otherwise, another person may repeat the experiment with a different configuration and obtain a different result without understanding why."
      ]},
      { title: "4. Technical decision records", paragraphs: [
        "A decision record captures context, options, criteria, the selected option, reasons, consequences, and unresolved questions. It should be written close to the time the decision is made.",
        "For example, a team might choose a browser-based simulation before buying physical parts. The record can explain that the simulation tests coordinate logic cheaply, while acknowledging that it cannot prove motor torque, mechanical stiffness, or real sensor performance.",
        "Good records preserve uncertainty. “Selected because the available evidence best fits the current requirements” is more honest than “selected because it is the best technology.” Decisions can be revisited when requirements or evidence change."
      ]},
      { title: "5. Communicating technical work", paragraphs: [
        "A useful technical update states the goal, work completed, evidence, blockers, and next action. Replace “it works now” with a description of the test, conditions, result, and known limitations.",
        "Use diagrams when relationships are easier to see than to describe. Label arrows, units, boundaries, and assumptions. A diagram without labels can create more confusion than it removes.",
        "Write for the reader who must make a decision. Put the conclusion and important evidence early, then provide enough detail for review. Separate facts, assumptions, estimates, and recommendations."
      ]}
    ],
    glossary: [["Version control","A system for recording and reviewing changes to project files."],["Commit","A recorded set of changes with an explanatory message."],["Raw data","Original observations preserved before processing or interpretation."],["Decision record","A note explaining context, options, rationale, consequences, and uncertainty."],["Reproducibility","The ability to repeat a process using recorded methods and configuration."]],
    worked: [{ title: "Worked example: record a sensor-selection decision", steps: [
      "Context: the prototype needs to estimate the distance to a page edge.",
      "Options: compare an optical sensor, a camera-based method, and a simple mechanical guide.",
      "Criteria: expected accuracy, lighting sensitivity, cost, integration effort, and ease of calibration.",
      "Evidence: record what is known from specifications or controlled tests; label estimates clearly.",
      "Decision: choose the option that best satisfies current requirements, not the option with the most impressive description.",
      "Consequences: list new software, calibration, mounting, and maintenance work created by the choice.",
      "Review trigger: revisit the decision if the accuracy test fails or the operating environment changes."
    ], conclusion: "A decision record makes the reasoning reviewable and gives the team a clear trigger for reconsidering it." }],
    practice: [
      { difficulty: "Foundation", prompt: "Propose a folder structure for a project that contains CAD, code, test data, and reports.", solution: "A clear structure separates requirements, design, software, tests, reports, and administration. Include a README that explains where current files live." },
      { difficulty: "Applied", prompt: "Rewrite the commit message “updates” so it explains a focused change to a robot simulator.", solution: "For example: “Add boundary checks for simulated paper coordinates.” A good message states the change, not just that something happened." },
      { difficulty: "Analysis", prompt: "Why should raw sensor readings be preserved if a cleaned dataset is easier to analyse?", solution: "The raw data preserves the original evidence. Processing choices can be reviewed, alternative filters can be tested, and errors in cleaning can be corrected." }
    ],
    lab: { title: "Lab 0.2 — Create an engineering notebook", objective: "Create a project workspace another person can understand.", materials: "A GitHub repository or a local folder, a README, and a short project idea.", procedure: ["Create folders for requirements, research, design, software, tests, and reports.", "Write a README explaining the purpose and structure.", "Create one requirement and its planned test.", "Write one technical decision record with at least two alternatives.", "Add a change log entry and identify the current project version."], deliverable: "A navigable project notebook with README, one requirement, one decision record, and a change log.", rubric: ["Folders are predictable and clearly named.", "README explains how to navigate the project.", "Decision record compares alternatives using criteria.", "Evidence and assumptions are distinguished.", "A new collaborator could identify the current version."] },
    assessment: [
      { question: "Why preserve raw test data?", options: ["It makes the folder larger.", "It allows processing choices and original observations to be reviewed.", "It guarantees the experiment was correct.", "It replaces a test procedure."], answer: 1, explanation: "Raw data protects the original evidence and allows later re-analysis." },
      { question: "What should a technical decision record include?", options: ["Only the selected option.", "Context, alternatives, criteria, rationale, consequences, and uncertainty.", "Only a screenshot.", "A list of unrelated tasks."], answer: 1, explanation: "A decision record preserves the reasoning and its limitations." }
    ],
    mastery: "You are ready when another person can navigate your project, identify its current version, find the evidence behind a claim, and understand why a key decision was made."
  },
  "0:2": {
    subtitle: "Decompose problems and design algorithms before choosing tools",
    outcomes: ["Use decomposition, pattern recognition, abstraction, and algorithm design.", "Describe an algorithm independently of a programming language.", "Use flowcharts and pseudocode to communicate logic.", "Test normal cases, boundaries, and exceptional conditions."],
    sections: [
      { title: "1. Four pillars of computational thinking", paragraphs: [
        "Computational thinking is a way to formulate problems so that a person or computer can solve them systematically. It is useful even when the final solution is mechanical, electronic, or organisational rather than software.",
        "Decomposition breaks a large problem into smaller parts. A sorting robot can be divided into object detection, classification, destination selection, motion planning, actuation, and result verification. Each part can be designed and tested, but the interfaces between parts must also be considered.",
        "Pattern recognition looks for similarities across cases. If the robot processes many objects using the same sequence, that repeated sequence can become one reusable procedure. Patterns are useful, but a designer must notice when a case differs and needs special handling.",
        "Abstraction keeps the details relevant to the current question. When designing a route planner, a grid cell may be represented as free or blocked. Material colour and surface texture may be irrelevant to that first model. Later, those details may become important for a vision system.",
        "Algorithm design describes a finite, ordered process that transforms inputs into outputs. An algorithm should state what happens, what conditions change the path, and how it finishes. “Use AI to sort objects” is not an algorithm; it hides the actual decisions."
      ]},
      { title: "2. Inputs, outputs, state, and invariants", paragraphs: [
        "Before writing steps, define the inputs and outputs. Inputs may be values, sensor readings, user commands, or files. Outputs may be decisions, movements, reports, or updated data. Also identify the system state: information that must be remembered between steps.",
        "For a page-alignment process, state might include the estimated page corners, the confidence of the estimate, and whether calibration has been completed. If the confidence is too low, the system should not silently continue as if the estimate were reliable.",
        "An invariant is a condition that should remain true throughout an algorithm or at a defined point. A queue-processing routine might preserve the rule that every item is either waiting, being processed, completed, or explicitly rejected. Invariants help reveal missing states and logic errors."
      ]},
      { title: "3. Express algorithms with pseudocode and flowcharts", paragraphs: [
        "Pseudocode describes logic in readable language without requiring the exact syntax of a programming language. It should be precise enough that two people would implement the same behaviour.",
        "A flowchart uses symbols and arrows to show sequence and decisions. A rectangle commonly represents an action, a diamond a decision, and an arrow the direction of control. Keep diagrams readable: one decision per diamond, labelled branches, and a clear start and end.",
        "Example: read a distance value; if the reading is missing, report sensor unavailable; otherwise, if it is below the threshold, report near; otherwise report clear. Notice that missing data is checked before the numeric comparison."
      ]},
      { title: "4. Edge cases and defensive design", paragraphs: [
        "A normal case is the expected situation. A boundary case is at or near a limit. An exceptional case includes missing, invalid, contradictory, or unavailable information. Algorithms that only handle the normal case are fragile.",
        "For a distance threshold of 20 cm, test 12 cm, 20 cm, and 28 cm. Decide explicitly whether equality means near or clear. Also test no reading, a negative value, a value outside the sensor's supported range, and a reading that changes suddenly.",
        "Defensive design does not mean predicting every imaginable event. It means identifying plausible failure conditions, deciding how the system should respond, and making uncertainty visible. Sometimes the correct response is to pause and ask for human input rather than guess."
      ]},
      { title: "5. Efficiency and clarity", paragraphs: [
        "An algorithm can be correct but unnecessarily slow or difficult to understand. Efficiency considers resources such as time and memory. For a list of n values, scanning every item once takes work proportional to n. Comparing every item with every other item may take work proportional to n squared.",
        "Do not optimise prematurely. First create a correct, understandable baseline and test it. Measure performance using representative inputs. Then improve the part that evidence shows is a bottleneck.",
        "Readable names, small functions, clear branches, and explicit error handling are engineering tools. A clever one-line expression is not better if teammates cannot review it or if it hides important failure behaviour."
      ]}
    ],
    glossary: [["Decomposition","Breaking a complex problem into smaller manageable parts."],["Abstraction","Keeping relevant details while temporarily hiding irrelevant complexity."],["Algorithm","A finite, ordered method for solving a defined problem."],["Pseudocode","A language-independent description of program logic."],["Invariant","A condition that should remain true during a process."],["Edge case","An unusual, boundary, or exceptional input condition."]],
    worked: [{ title: "Worked example: classify a sensor reading", steps: [
      "Define input: one distance reading in centimetres, or a missing/invalid value.",
      "Define output: NEAR, CLEAR, or SENSOR_UNAVAILABLE.",
      "Define threshold: 20 cm. Decide that values below 20 are NEAR and values equal to or above 20 are CLEAR.",
      "Check whether the reading exists and is numeric. If not, return SENSOR_UNAVAILABLE.",
      "Check whether the value is within the sensor's supported range. If not, return SENSOR_UNAVAILABLE or an explicit OUT_OF_RANGE state.",
      "Compare the valid value with 20 and return the appropriate classification.",
      "Test 12, 19.9, 20, 20.1, missing, text input, and an out-of-range value."
    ], conclusion: "The important design decision is not the comparison itself; it is defining the meaning of boundaries and invalid inputs before implementation." }],
    practice: [
      { difficulty: "Foundation", prompt: "Decompose the task “prepare a robot to write a page” into at least six independent stages.", solution: "Possible stages: receive text, validate text, identify page, calibrate coordinates, plan strokes, move pen, monitor progress, detect completion, report status." },
      { difficulty: "Applied", prompt: "Write pseudocode for a door indicator that reports OPEN, CLOSED, or SENSOR_UNAVAILABLE. Include missing data.", solution: "Read sensor. If missing or invalid, report SENSOR_UNAVAILABLE. Else if state indicates open, report OPEN. Else report CLOSED. A real design should define how contradictory sensor states are handled." },
      { difficulty: "Analysis", prompt: "A classification algorithm works for ordinary values but fails when the reading is exactly the threshold. What was probably missing from the design?", solution: "The boundary rule was not specified. The algorithm must decide whether equality belongs to the lower or upper category and test that exact value." },
      { difficulty: "Design", prompt: "Design a process for handling an object whose category confidence is too low. Explain why your chosen response is appropriate.", solution: "A robust option is to route it to an unknown/review state and notify an operator rather than making an unsupported guess. The exact policy depends on the system's consequences and requirements." }
    ],
    lab: { title: "Lab 0.3 — Algorithm design without code", objective: "Create and test a language-independent algorithm.", materials: "Paper or a digital diagram tool.", procedure: ["Choose a simple sorting or alignment task.", "Define inputs, outputs, state, and assumptions.", "Write pseudocode with clear sequence and decision branches.", "Draw a flowchart that matches the pseudocode.", "Create at least eight test cases, including boundaries and missing data.", "Walk through each test manually and record expected output.", "Revise the algorithm where a test reveals ambiguity."], deliverable: "A pseudocode listing, matching flowchart, and test table.", rubric: ["Inputs and outputs are explicit.", "Branches have unambiguous conditions.", "The algorithm terminates or defines repeated operation.", "Boundary and invalid cases are handled.", "Flowchart and pseudocode agree."] },
    assessment: [
      { question: "Which computational-thinking technique temporarily hides irrelevant detail?", options: ["Decomposition", "Abstraction", "Actuation", "Calibration"], answer: 1, explanation: "Abstraction focuses attention on the details relevant to the current problem." },
      { question: "Why test the exact threshold value?", options: ["It makes the program longer.", "It reveals whether the boundary rule is defined.", "It measures battery voltage.", "It removes the need for normal tests."], answer: 1, explanation: "Boundary values often expose ambiguity in comparisons and category definitions." },
      { question: "A sensor reading is missing. What is the strongest default behaviour?", options: ["Pretend it is zero.", "Reuse an unrelated old value without warning.", "Enter a defined unavailable/error state.", "Choose a random category."], answer: 2, explanation: "Missing information should be handled explicitly rather than silently converted into a misleading value." }
    ],
    mastery: "You are ready when you can explain a problem as inputs, state, decisions, and outputs; produce matching pseudocode and a flowchart; and demonstrate that your algorithm handles boundaries and invalid cases."
  },
  "0:3": {
    subtitle: "From user needs to a design that can be verified",
    outcomes: ["Write clear functional and non-functional requirements.", "Create acceptance criteria and verification methods.", "Use traceability to connect needs, design, and tests.", "Identify assumptions, risks, and requirement conflicts."],
    sections: [
      { title: "1. Needs, requirements, and specifications", paragraphs: [
        "A need explains a problem or desired outcome from a stakeholder's perspective. A requirement states a property or behaviour the system must satisfy. A specification organises requirements and supporting details into a controlled description of what the system is expected to do.",
        "A common mistake is to jump from a need directly to a component. “I need the robot to find the paper edge” is a need. “Use a camera” is a proposed design choice. A requirement might say, “The system shall estimate the page boundary within the defined tolerance under the specified lighting conditions.” That requirement leaves room to compare different technical approaches.",
        "Requirements should be necessary, clear, feasible, consistent, and verifiable. Avoid words such as fast, easy, robust, intuitive, or accurate unless they are defined. Avoid combining several behaviours into one requirement, because it becomes difficult to determine what failed."
      ]},
      { title: "2. Functional and quality requirements", paragraphs: [
        "Functional requirements describe what the system does: accept text, identify a page, pause on command, save a configuration, or report completion. Quality or non-functional requirements describe how well it performs or the conditions it must satisfy: response time, accuracy, reliability, usability, maintainability, privacy, or energy use.",
        "Interface requirements define interactions with other systems or components, including data formats, electrical signals, mechanical mounting, and communication protocols. Environmental requirements describe temperature, lighting, vibration, dust, or other operating conditions. Constraints may specify available budget, dimensions, approved components, or a required platform.",
        "These categories overlap in practice. The purpose of classification is not bureaucracy; it is to make sure important properties are not forgotten and that each requirement has an appropriate verification method."
      ]},
      { title: "3. Make requirements measurable and verifiable", paragraphs: [
        "A measurable requirement identifies the quantity or observable condition, the operating context, and the acceptance threshold. A good test defines the setup, procedure, measurement method, number of trials where appropriate, and pass/fail rule.",
        "For example, “the system shall stop when the user presses Stop” can be tested by issuing the command during defined operating states and measuring whether the system enters the specified safe paused state. The test must define what “stop” means for the mechanism; simply turning off a display may not be enough.",
        "Verification methods include inspection, analysis, demonstration, and test. Inspection checks a visible or documented property. Analysis uses calculations or models. Demonstration shows a capability. Test collects measured evidence under controlled conditions. Choose a method that actually supports the claim."
      ]},
      { title: "4. Traceability and change impact", paragraphs: [
        "A traceability matrix links stakeholder needs to system requirements, subsystem design elements, and verification evidence. It helps answer whether every important need has been addressed and whether every requirement has a planned proof.",
        "Traceability is especially valuable when requirements change. If the page-size requirement changes, the team can identify affected sensing, coordinate mapping, mechanical travel, user-interface choices, and tests. Without traceability, changes can create hidden inconsistencies.",
        "A requirement should have an identifier, a clear statement, a rationale where useful, a priority, a verification method, and a status. Keep the matrix proportionate to the project. A small learning prototype may use a simple table; a complex system may need a formal requirements tool."
      ]},
      { title: "5. Risks, assumptions, and conflicts", paragraphs: [
        "An assumption is something treated as true for the current design but not yet confirmed. An assumption should be recorded with a plan to check it if it matters. For example, assuming that all paper is flat may invalidate a page-alignment method.",
        "A risk is an uncertain event or condition that could affect objectives. Record the cause, possible consequence, likelihood or uncertainty, severity, and planned response. Do not use a risk score as a substitute for thinking: explain why a risk matters and what evidence could reduce uncertainty.",
        "Requirements can conflict. A smaller device may have less mechanical travel; a faster process may reduce accuracy; a low-cost sensor may be less reliable under variable lighting. Resolve conflicts by returning to stakeholder priorities, analysing evidence, and documenting trade-offs."
      ]},
      { title: "6. Review and baseline", paragraphs: [
        "A requirements review asks whether statements are clear, complete, consistent, feasible, and verifiable. Reviewers should be able to identify ambiguous terms and missing conditions before implementation begins.",
        "A baseline is an agreed version used as a reference for design and testing. It can change, but changes should be recorded and assessed. A baseline is not a claim that the requirements are perfect; it is a controlled starting point.",
        "A strong requirements package contains the problem statement, stakeholder list, system boundary, requirement set, assumptions, constraints, verification plan, traceability, and unresolved questions. This gives design work a stable foundation while allowing evidence-based revision."
      ]}
    ],
    glossary: [["Functional requirement","A statement of a required system behaviour or capability."],["Non-functional requirement","A statement about system quality or operating constraints."],["Acceptance criterion","A condition that defines whether an outcome is acceptable."],["Verification method","The way evidence will be collected to check a requirement."],["Traceability matrix","A table connecting needs, requirements, design elements, and tests."],["Baseline","An agreed reference version controlled through a change process."],["Assumption","An unverified condition temporarily treated as true."],["Risk","An uncertain condition that could affect project objectives."]],
    worked: [{ title: "Worked example: create a verifiable requirement", steps: [
      "Vague need: “The robot should not damage the page if alignment is wrong.”",
      "Clarify the intended behaviour: the robot must detect an alignment condition outside its supported range and pause before writing.",
      "Draft requirement: “Before enabling pen contact, the system shall verify that the estimated page boundary lies within the calibrated workspace; otherwise it shall remain in a non-writing state and display an alignment warning.”",
      "Define verification: provide several page positions inside and outside the calibrated workspace and observe the system state and warning.",
      "Define evidence: record the input position, estimated boundary, controller state, displayed message, and pass/fail result.",
      "Record limitations: this test checks the logic and detection threshold; it does not prove that the physical pen mechanism cannot mark the page for another reason."
    ], conclusion: "The requirement is useful because it describes observable behaviour and a test, while keeping the implementation open." }],
    practice: [
      { difficulty: "Foundation", prompt: "Classify these as functional or quality requirements: accept a stop command; complete a task within a stated time; store a user's page profile; keep saved profiles private.", solution: "Accept stop command and store a profile are functional. Completion time is a performance/quality requirement. Privacy is a quality requirement. Some requirements can be classified in more than one useful way." },
      { difficulty: "Applied", prompt: "Write a verification method for a requirement that the interface must show whether a task is running, paused, or complete.", solution: "Create a test procedure that triggers each state, checks the displayed label for each, and records whether the display matches the controller state. Include transition cases." },
      { difficulty: "Analysis", prompt: "A requirement says “the system shall be reliable.” Explain why it is weak and how to improve it.", solution: "Reliable is undefined. Identify the relevant failure, operating conditions, observation period or trial count, and acceptable failure threshold. Choose a measure that reflects the actual use case." }
    ],
    lab: { title: "Lab 0.4 — Requirements and verification pack", objective: "Create a testable specification for a small engineering system.", materials: "The SCRIPTOR concept or another simple device idea, a document or spreadsheet.", procedure: ["Write a problem statement and identify at least three stakeholder groups.", "Define the system boundary and list assumptions and constraints.", "Write at least eight requirements across function, performance, interface, and usability.", "Give each requirement a unique ID and a verification method.", "Create a traceability table linking each requirement to a test or analysis.", "Identify five risks and propose a response for each.", "Review the pack for vague words, contradictions, and requirements without tests."], deliverable: "A requirements specification, traceability matrix, verification plan, and risk register.", rubric: ["Requirements are clear and individually testable.", "Conditions and thresholds are defined where needed.", "Verification methods provide relevant evidence.", "Traceability is complete.", "Risks, assumptions, and conflicts are explicit."] },
    assessment: [
      { question: "Why should a requirement avoid specifying a component too early?", options: ["Components are never important.", "It can unnecessarily restrict alternative designs before the need is understood.", "Requirements must be vague.", "It removes the need for verification."], answer: 1, explanation: "A requirement should normally define the needed outcome; design choices can then be compared against it." },
      { question: "Which method is best for checking a specified maximum physical dimension?", options: ["Inspection or measurement.", "A marketing survey only.", "A code style review.", "An unrelated simulation."], answer: 0, explanation: "Direct measurement provides evidence for a dimensional requirement." },
      { question: "What is the purpose of traceability?", options: ["To make a long spreadsheet.", "To link needs and requirements to design and verification evidence.", "To replace a project plan.", "To guarantee there are no risks."], answer: 1, explanation: "Traceability reveals gaps and helps assess the impact of changes." }
    ],
    mastery: "You are ready when you can produce a requirements pack in which every requirement is clear, every important need is represented, every requirement has a verification method, and assumptions and risks are visible."
  }
};
