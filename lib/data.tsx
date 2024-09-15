import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
const skills = ["Data Engineer", "Data Architect", "Software Enignner"];
const textSkill = ["Data Architect", "Software Enignner"];

const technologies = [
  {
    text: "Python",
    progress: 96,
  },
  {
    text: "PostgressSQL",
    progress: 85,
  },
  {
    text: "DBeaver",
    progress: 20,
  },
  {
    text: "Cloud: AWS",
    progress: 75,
  },
];
const languages = [
  {
    flag: "/spain_flag.png",
    language: "English",
    progress: 90,
  },
  {
    flag: "/spain_flag.png",
    language: "Spanish",
    progress: 60,
  },
  {
    flag: "/spain_flag.png",
    language: "Italian",
    progress: 30,
  },
  {
    flag: "/spain_flag.png",
    language: "French",
    progress: 70,
  },
];
const icons = [
  { id: "1", icon: <Linkedin className="h-4 w-4 text-heading" /> },
  { id: "2", icon: <Github className="h-4 w-4 text-heading" /> },
  { id: "3", icon: <Instagram className="h-4 w-4 text-heading" /> },
  { id: "4", icon: <Twitter className="h-4 w-4 text-heading" /> },
];

const engineering_practices = [
  {
    check: true,
    text: "Data Analytics Engineering",
  },
  {
    check: true,
    text: "Oracle SQL",
  },
  {
    check: false,
    text: "Data Integration",
  },
  {
    check: false,
    text: "Data Generation",
  },
  {
    check: false,
    text: "Data Analytics Engineering",
  },
];
const service_data = [
  {
    img: "/service_icon.png",
    small_title: "2 Developers",
    title: "ETL Design",
    body: "Data models in SAP PowerDesigner ETL process design & implementation: Apache Airflow / AWS / Python.",
    link_text: "get started",
  },
  {
    img: "/service_icon.png",
    small_title: "5 Developers",
    title: "ETL Development",
    body: "ETL pipelines according to the DWH design and architecture (Azure Synapse, Databricks, Azure DevOps).",
    link_text: "get started",
  },
  {
    img: "/service_icon.png",
    small_title: "5 Developers",
    title: "ETL Development",
    body: "ETL pipelines according to the DWH design and architecture (Azure Synapse, Databricks, Azure DevOps).",
    link_text: "get started",
  },
  {
    img: "/service_icon.png",
    small_title: "5 Developers",
    title: "ETL Development",
    body: "ETL pipelines according to the DWH design and architecture (Azure Synapse, Databricks, Azure DevOps).",
    link_text: "get started",
  },
];
const pricings = [
  {
    amount: 29,
    duration: "Hour",
    available: [
      "Create data models in SAP PowerDesigner",
      "Preparation and participation in POCs and demos",
    ],
    unavailable: [
      "Development and implementation of ETL pipelines",
      "Extended Support 6 months",
    ],
  },
  {
    amount: 119,
    duration: "Day",
    available: [
      "Create data models in SAP PowerDesigner",
      "Preparation and participation in POCs and demos",
      "Development and implementation of ETL pipelines",
      "Extended Support 6 months",
    ],
    unavailable: [],
  },
];
const timelineData = [
  {
    id: 1,
    title: "First event",
    date: "2022-01-01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio ut. Quam viverra orci sagittis eu volutpat odio facilisis mauris.",
  },
  {
    id: 2,
    title: "Second event",
    date: "2022-02-01",
    description:
      "Aut eius excepturi ex recusandae eius est minima molestiae. Nam dolores iusto ad fugit reprehenderit hic dolorem quisquam et quia omnis non suscipit nihil sit libero distinctio. Ad dolorem tempora sit nostrum voluptatem qui tempora unde? Sit rerum magnam nam ipsam nesciunt aut rerum necessitatibus est quia esse non magni quae.",
  },
  {
    id: 3,
    title: "Third event",
    date: "2022-03-01",
    description:
      "Sit culpa quas ex nulla animi qui deleniti minus rem placeat mollitia. Et enim doloremque et quia sequi ea dolores voluptatem ea rerum vitae. Aut itaque incidunt est aperiam vero sit explicabo fuga id optio quis et molestiae nulla ex quae quam. Ab eius dolores ab tempora dolorum eos beatae soluta At ullam placeat est incidunt cumque.",
  },
];

const testimonial_count = [
  {
    count: "96",
    text: (
      <p>
        Completed
        <br /> Projects
      </p>
    ),
  },
  {
    count: "8",
    text: (
      <p>
        Years <br /> of Experience
      </p>
    ),
  },
  {
    count: "10+",
    text: <p>Awards Winning</p>,
  },
];
const data = {
  timelineData,
  pricings,
  service_data,
  engineering_practices,
  icons,
  languages,
  technologies,
  textSkill,
  skills,
  testimonial_count,
};

export default data;
