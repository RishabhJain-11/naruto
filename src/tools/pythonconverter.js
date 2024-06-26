import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Python Language Converter",
  desc: "Convert your Python Language in any language you want.",
  category: "Optimization",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "green-500",
  toColor: "blue-500",

  to: "/ai/pythonconverter ",
  api: "/ai/pythonconverter",

  output: {
    title: "Code Output",
    value: "",
    // placeholder: "class Name(){",
    type: "code",
    maxLength: 20,
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
      title: "Entry Text",
      desc: "Python Conversion to any Language Possible",
      // n: 1,
      prompts: [
        {
          title: "Python Code",
          attr: "content",
          value: "",
          placeholder: "Write your Python Code here...",
          label: "",
          type: "textarea",
          maxLength: 60,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example:
            "The Sun is over 4.5 billion years old and has a temperature of around 10,000 degrees Fahrenheit. The Sun's light reaches the Earth in eight minutes. Coronal mass ejections are gases on the Sun's surface erupt, shooting far out into space.",
        },
        {
          title: "Language",
          attr: "language",
          value: "",
          placeholder: "C++, Java ...",
          maxLength: 60,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example:
            "The Sun is over 4.5 billion years old and has a temperature of around 10,000 degrees Fahrenheit. The Sun's light reaches the Earth in eight minutes. Coronal mass ejections are gases on the Sun's surface erupt, shooting far out into space.",
        },
      ],
      example: {
        // output: "",
        outputs: [
          "The sun is very old, over 4.5 billion years",
          "At 10,000 degrees, sun is also very hot",
          "Gasses called coronal mass ejections erupt from the sun",
        ],
        // Icon: RefreshIcon,
        color: "blue",
      },
    },
  ],
};

export default obj;
