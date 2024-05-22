import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "HTML Inserter",
  desc: "Inserts HTML to your project description.",
  category: "Programming",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/htmlmaker",
  api: "/ai/htmlmaker",

  output: {
    title: "Code Output",
    attr: "content",
    value: "",
    placeholder: "class Name(){",
    // label: "Place some code above to understand how it works",
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

  prompts: [
    {
      title: "Input",
      desc: "Add Description",
      // n: 1,
      prompts: [
        {
          title: "Input",
          attr: "content",
          value: "",
          placeholder: "Want a HTML Code for a Basic Portfolio Project.",
          label: "",
          type: "textarea",
          maxLength: 10000,
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
