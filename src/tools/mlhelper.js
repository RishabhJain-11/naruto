import { ChevronRightIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/outline";

const obj = {
  title: "Machine Learning Helper",
  desc: "Gives Optimized Jupyter Code",
  category: "Programming",
  Icon: EyeIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-800",
  toColor: "gray-600",

  to: "/ai/mlhelper",
  api: "/ai/mlhelper",

  output: {
    title: "Code Output",
    type: "code",
    maxLength: 2000,
    min: 3,
    required: true,
    error: "",
    example: `function HelloWorld(text){ 
      let text || "Hello World"; 
      console.log(text);
  }`,
    desc: "The following key points detected",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Jupyter Code",
      desc: "Describe what help you want in short..",
      // n: 1,
      prompts: [
        {
          title: "Code Editor",
          attr: "content",
          value: "",
          placeholder: "function Name(attr){...",
          label: "Place some code above to understand how it works",
          type: "code",
          maxLength: 20000,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: `function HelloWorld(text){ 
      let text || "Hello World"; 
      console.log(text);
  }`,
        },
      ],
      example: {
        output: ``,
        outputs: [
          "The code above is a function definition.",
          "It defines a new function called `HelloWorld` that takes a single argument called `text`",
          "The body of the function is a single line of code that prints out the value of `text` if it is defined, or `Hello World` if it is not defined.",
        ],
        // Icon: TerminalIcon,
        // color: "gray",
      },
    },
  ],
};

export default obj;
