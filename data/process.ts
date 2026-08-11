import {
  Search,
  GitBranch,
  PenTool,
  MessageSquare,
  Rocket,
} from "lucide-react";

export const process = [
  {
    number: "01",
    title: "Understand the Problem",
    icon: Search,

    description:
      "Before opening Figma, I try to understand what is actually broken. I talk with stakeholders, review the existing experience, understand business goals, and identify where users are struggling. In healthcare, this often means untangling complex information, workflows, and constraints before thinking about the interface.",

    details:
      "The goal is to understand the problem from both sides: what users need and what the business is trying to achieve. A strong design starts with the right questions rather than jumping straight to a visual solution.",

    highlights: [
      "User Research",
      "Stakeholder Interviews",
      "Existing Experience Review",
      "Business Goals",
    ],
  },

  {
    number: "02",
    title: "Define the Experience",
    icon: GitBranch,

    description:
      "Once the problem is clear, I turn it into an experience that can actually be designed. I map journeys, organize information, define navigation, and identify the moments where users need the most clarity. This is where complexity gets reduced before visual design begins.",

    details:
      "I use user journeys, information architecture, and flows to understand how people should move through the experience. This gives the team a shared direction before investing time in high-fidelity design.",

    highlights: [
      "User Journeys",
      "Information Architecture",
      "User Flows",
      "Accessibility",
    ],
  },

  {
    number: "03",
    title: "Design the Solution",
    icon: PenTool,

    description:
      "I explore solutions through wireframes and progressively refined interfaces. I focus on hierarchy, readability, interaction patterns, accessibility, and visual consistency rather than designing screens in isolation. The goal is not simply to make an interface look good — it is to make the task feel obvious.",

    details:
      "I move from structure to visual design progressively, using prototypes and reusable components where appropriate. This allows me to solve interaction problems early while building a consistent visual language across the product.",

    highlights: [
      "Wireframes",
      "UI Design",
      "Interaction Design",
      "Design Systems",
    ],
  },

  {
    number: "04",
    title: "Validate & Iterate",
    icon: MessageSquare,

    description:
      "I rarely expect the first version to be the final version. I use prototypes to walk through the experience with project managers, internal teams, developers, onshore stakeholders, and clients. Feedback from each stage helps expose gaps, refine decisions, and improve the experience before development.",

    details:
      "Iteration is a continuous part of my process. Designs move through multiple rounds of review and refinement until the experience is clear, usable, accessible, and aligned with the requirements of everyone involved.",

    highlights: [
      "Interactive Prototypes",
      "Usability Testing",
      "Stakeholder Reviews",
      "Iteration",
    ],
  },

  {
    number: "05",
    title: "Deliver & Evolve",
    icon: Rocket,

    description:
      "Good design has to survive beyond the Figma file. I work closely with developers during handoff and implementation, review the final experience, and help resolve design questions that appear during development. Once the product is released, feedback and real-world usage become inputs for the next iteration.",

    details:
      "I stay involved beyond the handoff wherever possible. Design QA, implementation discussions, feedback, and future improvements all help ensure the final product remains aligned with the original experience we set out to create.",

    highlights: [
      "Developer Handoff",
      "Design QA",
      "Product Feedback",
      "Continuous Improvement",
    ],
  },
];