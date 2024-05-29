import { ChevronRightIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/outline";

const obj = {
  title: "Java Language to Any Language",
  desc: "Conversion of Java Code to any language you want in an easy way.",
  category: "Optimization",
  Icon: EyeIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-800",
  toColor: "gray-600",

  to: "/ai/javatocpp",
  api: "/ai/javatocpp",

  output: {
    title: "Code Output",
    attr: "content",
    value: "",
    placeholder: "class Name(){",
    // label: "Place some code above to understand how it works",
    type: "code",
    maxLength: 20,
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
      desc: "Write the java code below",
      // n: 1,
      prompts: [
        {
          title: "Language",
          attr: "language",
          value: "",
          placeholder: "JavaScript...",
          label: "Which language are you using, will enable markup highlights",
          type: "text",
          maxLength: 40,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: `JavaScript`,
        },
        {
          title: "Code Editor",
          attr: "content",
          value: "",
          placeholder: "function Name(attr){...",
          label: "Place some code above to understand how it works",
          type: "code",
          maxLength: 2000,
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
