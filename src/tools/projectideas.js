import { MenuAlt2Icon } from "@heroicons/react/solid";

const obj = {
  title: "Project Ideas",
  desc: "Project Ideas for you..",
  category: "Content",
  Icon: MenuAlt2Icon,
  // tags: [],
  permissions: ["user"],

  fromColor: "yellow-400",
  toColor: "yellow-600",

  to: "/ai/projectideas",
  api: "/ai/projectideas",

  output: {
    title: "Answer",
    desc: "The following detailed project idea has been generated",
    // Icon: RefreshIcon,
    // color: "",
  },

  prompts: [
    {
      title: "Entry Text",
      desc: "Write small sentence or paragraph on your project idea.",
      // n: 1,
      prompts: [
        {
          title: "Title",
          attr: "title",
          value: "",
          placeholder: "The Subject",
          label: "The title you were planning to give the project.",
          // type: "textarea",
          maxLength: 350,
          // max: 100,
          min: 5,
          required: true,
          error: "",
          example: "Health Project with Machine learning",
        },
        {
          title: "Field",
          attr: "field",
          value: "",
          placeholder: "Healthcare, Education, Portfolio",
          label: "Who the main group are you are making for",
          // type: "textarea",
          maxLength: 100,
          // max: 100,
          // min: 5,
          // required: true,
          error: "",
          example: "Healthcare",
        },
        {
          title: "Description",
          attr: "desc",
          value: "",
          placeholder: "An article about how to make a health...",
          label: "A short description of what the project idea will be about",
          type: "textarea",
          maxLength: 6000,
          // max: 100,
          // min: 100,
          // required: true,
          error: "",
          example:
            "An article about why its important to use storybook to document your progress even when working without a javascript framework to help you understand what you are doing.",
        },
        {
          title: "Keywords",
          attr: "keywords",
          value: "",
          placeholder: "Tech, code, etc...",
          label: "A summary of keywords that the article will consist of",
          // type: "textarea",
          maxLength: 100,
          // max: 100,
          // min: 4,
          // required: true,
          error: "",
          example: "Coding, development, html, css, js",
        },
      ],
      example: {
        output:
          "Storybook is a development environment for UI components. It helps you iterate faster on UI code. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.\n\nI believe in Storybook’s value, and I’m sure it will improve your workflow. But I’m also going to share with you a different approach that can help you save some time without using a JavaScript framework.",
        // outputs: [],
        // Icon: RefreshIcon,
        // color: "",
      },
    },
  ],
};

export default obj;
