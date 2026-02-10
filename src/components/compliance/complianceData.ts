export const certificationSections = [
  {
    id: "soc2",
    title: "SOC 2: The SaaS Standard for Enterprise Trust",
    intro: "SOC 2, once a competitive differentiator, is now a table stakes attestation for organizations looking to demonstrate mature cybersecurity and privacy practices to North American enterprise buyers. It provides a standardized framework for service organizations to protect customer data based on defined trust principles.",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Ends the RFP Roadblock:",
        text: "Moves you from the \"untrusted vendor\" pile to the \"strategic partner\" list, preventing seven-figure deals from stalling in 300-row security questionnaires.",
      },
      {
        bold: "Institutional Credibility:",
        text: "Instills confidence in stakeholders by providing an independent, third-party audit of your internal controls.",
      },
    ],
    keyInfo: {
      label: "Key Components (Trust Services Criteria):",
      text: "Assessments are conducted against five pillars: Security, Availability, Processing Integrity, Confidentiality, and Privacy.",
    },
    pathLabel: "Your Path to SOC 2:",
    pathItems: [
      {
        bold: "Readiness Assessment:",
        text: "A critical \"look under the hood\" to identify high-risk control gaps before the official audit.",
      },
      {
        bold: "Type 1 Report:",
        text: "A point-in-time snapshot of your control design.",
      },
      {
        bold: "Type 2 Report:",
        text: "An evaluation of both design and operating effectiveness over a period of time (typically 6–12 months).",
      },
    ],
  },
  {
    id: "iso27001",
    title: "ISO 27001: The Global Pass-Key for Market Access",
    intro: "ISO 27001 is the universal language of security required to compete in international enterprise markets and win high-value government tenders outside North America. It uses a top-down, risk-based approach to build an effective Information Security Management System (ISMS).",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Unlocks Global Revenue:",
        text: "Prevents the \"border closure\" that blacklists providers from European and Asian enterprise markets.",
      },
      {
        bold: "Accelerates Tenders:",
        text: "Satisfies international security requirements for high-value tenders without repetitive questionnaires.",
      },
    ],
    keyInfo: {
      label: "Key Requirements:",
      text: "Focuses on Information Security Incident Management, Asset Management, and Access Control to ensure the confidentiality, integrity, and availability of sensitive data.",
    },
    pathLabel: "Our Collaborative Services:",
    pathItems: [
      { text: "ISO 27001 Gap Discovery" },
      { text: "ISMS Implementation Support" },
      { text: "Internal Audit & Certification Readiness" },
    ],
  },
  {
    id: "pci",
    title: "PCI DSS: The Transaction Engine for Secure Revenue",
    intro: "PCI DSS is the mandatory lifeblood for any organization handling cardholder data, ensuring your ability to process payments and handle cardholder data without interruption.",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Prevents Revenue Blackouts:",
        text: "Avoids merchant account suspensions that can freeze your company's cash flow overnight.",
      },
      {
        bold: "Protects Profit Margins:",
        text: "Reduces the risk of non-compliance fines and increased processing fees.",
      },
    ],
    keyInfo: {
      label: "Requirements & Validation:",
      text: "Standardized requirements for safeguarding credit and debit card data across the Payment Card Industry.",
    },
    pathLabel: "",
    pathItems: [
      { text: "PCI Report on Compliance (RoC)" },
      { text: "Self-Assessment Questionnaire (SAQ) Support" },
      { text: "Network Segmentation Validation" },
    ],
  },
  {
    id: "nist",
    title: "NIST 800-171: The Gateway to Federal Contracts",
    intro: "Win more federal contracts by meeting the mandatory cybersecurity requirements for protecting Controlled Unclassified Information (CUI) on non-federal systems. NIST SP 800-171 sets the blueprint for any organization acting as a government contractor.",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Contractual Eligibility:",
        text: "Meets mandatory requirements for organizations working with federal government agencies.",
      },
      {
        bold: "Foundation for CMMC:",
        text: "Serves as the technical prerequisite and roadmap for achieving CMMC Certification.",
      },
    ],
    keyInfo: {
      label: "Key Control Families:",
      text: "Focuses on 14 families including Access Control, Incident Response, Configuration Management, and Audit & Accountability.",
    },
    pathLabel: "Assessment Services:",
    pathItems: [
      { text: "NIST 800-171 Readiness Review" },
      { text: "Gap Analysis & Remediation Support" },
      { text: "System Security Plan (SSP) Development" },
    ],
  },
  {
    id: "healthcare",
    title: "HITRUST: Proactive, Strategic Audit Harmonization",
    intro: "HITRUST empowers organizations in highly regulated industries to build and demonstrate a mature cybersecurity and compliance strategy through a unified framework.",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Differentiate in Saturated Markets:",
        text: "Positions you as a leader in security by meeting a globally recognized standard.",
      },
      {
        bold: "Reduce Audit Fatigue:",
        text: "Consolidates efforts across over 50 standards (ISO, NIST, HIPAA) to minimize redundancies and sync timelines.",
      },
      {
        bold: "AI Risk Management:",
        text: "Specialized assessments for responsible AI governance and ethical data practices.",
      },
    ],
    keyInfo: null,
    pathLabel: "Assessment Tiers:",
    pathItems: [
      {
        bold: "e1 Assessment:",
        text: "Foundational level for early-stage organizations.",
      },
      {
        bold: "i1 Assessment:",
        text: "Progressive level for maturing organizations.",
      },
      {
        bold: "r2 Assessment:",
        text: "Comprehensive risk-based assessment for high-maturity teams.",
      },
    ],
  },
  {
    id: "fedramp",
    title: "FedRAMP: The Federal Fast-Track for Cloud Innovation",
    intro: "Secure your Authorization to Operate (ATO) and open the door to the world's largest buyer: the U.S. Federal Government. FedRAMP provides a standardized approach to security for cloud products used by federal agencies.",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "\"Do Once, Use Many\":",
        text: "Allows cloud service offerings to be authorized once and reused across multiple federal agencies, saving significant time and cost.",
      },
      {
        bold: "Unlock Billions in Potential:",
        text: "Prevents the \"Agency Blockade\" that keeps cloud services legally invisible to federal agencies.",
      },
    ],
    keyInfo: {
      label: "Impact Levels:",
      text: "Services are categorized into Low, Moderate, or High impact levels based on the sensitivity of the data they handle.",
    },
    pathLabel: "",
    pathItems: [],
  },
  {
    id: "cmmc",
    title: "CMMC: The Defense Supply Chain Key",
    intro: "Prove your cybersecurity maturity matches the mission and secure your place in the Department of Defense (DoD) supply chain.",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Mandatory Contract Eligibility:",
        text: "Any business bidding on DoD work must meet the specified CMMC level.",
      },
      {
        bold: "Prevents Procurement Exclusion:",
        text: "Failure to meet CMMC levels means disqualification from new bids and potential loss of existing contracts.",
      },
    ],
    keyInfo: null,
    pathLabel: "Tiered Program Levels:",
    pathItems: [
      {
        bold: "Level 1 (Foundational):",
        text: "Focused on basic safeguarding of Federal Contract Information (FCI).",
      },
      {
        bold: "Level 2 (Advanced):",
        text: "Aligned with the 110 requirements in NIST SP 800-171 Revision 2.",
      },
      {
        bold: "Level 3 (Expert):",
        text: "Focuses on protecting Controlled Unclassified Information (CUI) from Advanced Persistent Threats.",
      },
    ],
  },
  {
    id: "gdpr",
    title: "GDPR: The Foundation for Global Privacy Trust",
    intro: "The General Data Protection Regulation (GDPR) sets the global baseline for properly collecting, using, and protecting personal data.",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Builds International Confidence:",
        text: "Strengthens trust with clients and stakeholders by demonstrating transparent data governance.",
      },
      {
        bold: "Reduces Legal Exposure:",
        text: "Helps avoid heavy non-compliance penalties, which can reach up to 4% of annual revenue.",
      },
    ],
    keyInfo: {
      label: "Core Principles:",
      text: "Adherence to Lawfulness, Data Minimization, Storage Limitation, and Integrity ensures data is handled responsibly.",
    },
    pathLabel: "",
    pathItems: [],
  },
  {
    id: "hipaa",
    title: "HIPAA: Build Trust with Safeguarded Health Data",
    intro: "Demonstrate you have the required safeguards in place to protect sensitive electronic Protected Health Information (ePHI).",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Avoid Harsh Penalties:",
        text: "Prevents your company from falling under significant financial penalties for failing to comply with federal standards.",
      },
      {
        bold: "Unlocks Healthcare Partnerships:",
        text: "Proves to healthcare providers and partners that you are a \"safe\" choice for medical data processing.",
      },
    ],
    keyInfo: null,
    pathLabel: "Key Rules:",
    pathItems: [
      {
        bold: "Privacy Rule:",
        text: "Defines individuals' rights over their medical data.",
      },
      {
        bold: "Security Rule:",
        text: "Sets technical standards for protecting electronic PHI.",
      },
      {
        bold: "Breach Notification Rule:",
        text: "Outlines protocols and timelines for data incidents.",
      },
    ],
  },
  {
    id: "sox",
    title: "SOX: Strengthening Corporate Governance",
    intro: "For public companies, Sarbanes-Oxley (SOX) compliance is the bedrock of financial integrity and investor confidence.",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Verified Financial Integrity:",
        text: "Ensures internal controls protect financial data from tampering.",
      },
      {
        bold: "Restores Investor Trust:",
        text: "Files regular reports attesting to the accuracy of financial disclosures and security controls.",
      },
    ],
    keyInfo: null,
    pathLabel: "",
    pathItems: [],
  },
  {
    id: "nis2",
    title: "NIS2 & DORA: European Regulatory Resilience",
    intro: "These EU mandates introduce a new era of enforcement for critical infrastructure and finance, moving from \"vague intent\" to \"proven resilience\".",
    strategicValueLabel: "The Strategic Value:",
    strategicValues: [
      {
        bold: "Avoid the €10M Negligence Penalty:",
        text: "Regulators can impose fines up to 2% of global turnover and hold directors personally liable.",
      },
      {
        bold: "Operational Continuity:",
        text: "Protects your \"license to operate\" in key European financial and utility markets.",
      },
    ],
    keyInfo: null,
    pathLabel: "Key Requirements:",
    pathItems: [
      {
        bold: "Incident Reporting:",
        text: "Mandatory reporting of major cyber incidents within 24 to 72 hours.",
      },
      {
        bold: "Executive Accountability:",
        text: "Direct C-level responsibility for cybersecurity risk management.",
      },
    ],
  },
];
