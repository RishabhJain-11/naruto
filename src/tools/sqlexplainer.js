import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "SQL Explainer",
  desc: "Explain SQL Code",
  category: "Explainer",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/sqlexplainer",
  api: "/ai/sqlexplainer",

  output: {
    title: "Output",
    value: "",
    // placeholder: "class Name(){",
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
      title: "Input",
      desc: "Enter the Problem you want to solve",
      // n: 1,
      prompts: [
        {
          title: "Problem Statement Input",
          attr: "content",
          value: "",
          placeholder:
            "For eg... Palindrome String. Give me brute force solution.",
          label: "",
          type: "textarea",
          maxLength: 10,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Distributed Systems",
        },
      ],
      example: {
        output: `Hello World`,
        color: "blue",
      },
    },
  ],
};

export default obj;
