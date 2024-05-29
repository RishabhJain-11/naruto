import { ChevronRightIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/outline";

const obj = {
  title: "Javascript Language to Typescript Language",
  desc: "Conversion of Javascript Code to Typescript Language in easy way.",
  category: "Optimization",
  Icon: EyeIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-800",
  toColor: "gray-600",

  to: "/ai/javascripttotypescript",
  api: "/ai/javascripttotypescript",

  output: {
    title: "Code Output",
    attr: "content",
    value: "",
    placeholder: "class Name(){",
    label: "Place some code above to understand how it works",
    type: "code",
    maxLength: 10,
    // max: 100,
    min: 3,
    required: true,
    error: "",
    example: `function HelloWorld(text){ 
	let text || "Hello World"; 
	console.log(text);
}`,
  },

  prompts: [
    {
      title: "Convert the Code",
      desc: "Write the Javascript Code below",
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
      },
    },
  ],
};

export default obj;
