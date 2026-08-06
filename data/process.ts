import {
  Search,
  GitBranch,
  PenTool,
  Sparkles,
  BarChart3,
} from "lucide-react";

export const process = [
  {
    number: "01",
    title: "Understand the Problem",
    icon: Search,

    description:
      "Before opening Figma, I spend time understanding the real problem. I talk with stakeholders, review analytics, study existing products, and understand business goals. I also look at what users are trying to achieve and where they struggle. A good design starts with asking the right questions, not jumping straight to solutions.",

    details:
      "Once I understand the problem, I define clear goals for the project. This helps the entire team stay focused and ensures every design decision solves a real user or business need instead of adding unnecessary features.",

    highlights: [
      "User Research",
      "Stakeholder Interviews",
      "Competitive Analysis",
      "Business Goals",
    ],
  },

  {
    number: "02",
    title: "Design Simple Experiences",
    icon: GitBranch,

    description:
      "My goal is to make complex tasks feel simple. I organize information, improve navigation, and remove unnecessary steps so users can complete their work with confidence. I always look for ways to reduce confusion and create experiences that are easy to understand for everyone.",

    details:
      "I explore different ideas through user flows, information architecture, and low-fidelity wireframes before moving into visual design. This allows me to solve usability problems early, saving both development time and business cost.",

    highlights: [
      "User Flows",
      "Information Architecture",
      "Wireframes",
      "Accessibility",
    ],
  },

  {
    number: "03",
    title: "Prototype & Validate",
    icon: PenTool,

    description:
      "I believe every design should be tested before development begins. Interactive prototypes help users and stakeholders experience the product early, making it easier to discover usability issues before they become expensive to fix.",

    details:
      "Feedback is one of the most valuable parts of the design process. I collect feedback from users, product managers, developers, and business stakeholders, then improve the design through multiple iterations until the experience feels natural and intuitive.",

    highlights: [
      "Interactive Prototypes",
      "Usability Testing",
      "Stakeholder Feedback",
      "Iteration",
    ],
  },

  {
    number: "04",
    title: "Build, Measure & Improve",
    icon: Sparkles,

    description:
      "Design doesn't end when development starts. I work closely with engineers during implementation to make sure the final product matches the design and provides the best possible user experience.",

    details:
      "After launch, I review user feedback, monitor product performance, and identify opportunities for future improvements. Every release becomes a learning opportunity that helps create an even better experience in the next iteration.",

    highlights: [
      "Developer Handoff",
      "Design QA",
      "Product Improvements",
      "Continuous Learning",
    ],
  },
  {
  number: "05",
  title: "Measure the Impact",
  icon: BarChart3,

  description:
    "Launching a product is only the beginning. I pay attention to how people actually use the experience after release. Real user behavior often reveals opportunities that no workshop or prototype can predict.",

  details:
    "I review feedback from users, business teams, and analytics to understand what worked well and what can be improved. Every release becomes an opportunity to learn, refine the experience, and make the product more useful over time.",

  highlights: [
    "User Feedback",
    "Analytics",
    "Business Goals",
    "Continuous Improvement",
  ],
},
];