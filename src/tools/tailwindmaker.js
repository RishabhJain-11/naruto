import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Tailwind Helper and Classes Creator",
  desc: "Ready made Tailwind Classes",
  category: "Helpers",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/tailwindmaker",
  api: "/ai/tailwindmaker",

  output: {
    title: "Code Output",
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
      desc: "Enter the code you want to add classes to..",
      // n: 1,
      prompts: [
        {
          title: "Code Input",
          attr: "content",
          value: "",
          placeholder:
            "For eg... Palindrome String. Give me brute force solution.",
          label: "",
          type: "code",
          maxLength: 10,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Distributed Systems",
        },
        {
          title: "Description of what all features to add.",
          attr: "desc",
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
