import { ChevronRightIcon } from "@heroicons/react/solid";

import { EyeIcon } from "@heroicons/react/outline";

const obj = {
  title: "Explain Code",
  desc: "Interpret some code based on the language, code, and syntax provided",
  category: "Explainers",
  Icon: EyeIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-800",
  toColor: "gray-600",

  to: "/ai/code/interpret",
  api: "/ai/code/interpret",

  output: {
    title: "Code Output",
    // attr: "content",
    value: "",
    placeholder: "function Name(attr){...",
    label: "Place some code above to understand how it works",
    type: "code",
    maxLength: 10,
    // max: 100,
    min: 3,
    required: true,
    error: "",
    //     example: `function HelloWorld(text){
    // 	let text || "Hello World";
    // 	console.log(text);
    // }`,
  },

  prompts: [
    {
      title: "Interpret Code",
      desc: "Write details about your code below",
      // n: 1,
      prompts: [
        {
          title: "Language",
          attr: "language",
          value: "",
          placeholder: "JavaScript...",
          label: "Which language are you using, will enable markup highlights",
          type: "text",
          maxLength: 400,
          // options: [{ title: "2nd Grader", value: "2nd Grader", desc: "Explain this like I'm 5 years old", Icon: AnnotationIcon },],
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: `Java`,
        },
        {
          title: "Code Editor",
          attr: "content",
          value: "",
          placeholder: "function Name(attr){...",
          label: "Place some code above to understand how it works",
          type: "code",
          maxLength: 1000,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        HelloWorld helloWorld = new HelloWorld();
        helloWorld.greet("Alice");
        int a = 5;
        int b = 7;
        int sum = helloWorld.add(a, b);
        System.out.println("The sum of " + a + " and " + b + " is: " + sum);
    }

    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public int add(int x, int y) {
        return x + y;
    }
}`,
        },
      ],
      example: {
        output: ``,
        outputs: [
          `Sure, here's an explanation of the Java program:

          Class Definition:
          public class HelloWorld: This defines a public class named HelloWorld.
          
          Main Method:
          public static void main(String[] args): This is the main method where the execution of the program begins. public means it can be accessed from outside the class, static means it belongs to the class rather than an instance, void means it does not return any value, and String[] args is an array of strings that can be used to pass command-line arguments.
          
          Printing to Console:
          System.out.println("Hello, World!");: This line prints the text "Hello, World!" to the console.
          
          Creating an Instance:
          HelloWorld helloWorld = new HelloWorld();: This creates a new instance of the HelloWorld class named helloWorld.
          
          Calling Methods:
          helloWorld.greet("Alice");: This calls the greet method on the helloWorld object with the argument "Alice".
          int a = 5; and int b = 7;: These lines declare and initialize two integer variables a and b.
          int sum = helloWorld.add(a, b);: This calls the add method on the helloWorld object with the arguments a and b, and stores the result in the variable sum.
          System.out.println("The sum of " + a + " and " + b + " is: " + sum);: This prints the sum of a and b to the console.
          
          Method Definitions:
          public void greet(String name): This defines a method named greet that takes a String argument named name. It prints a greeting message including the name.
          public int add(int x, int y): This defines a method named add that takes two integer arguments x and y, adds them, and returns the result.
          In summary, this program prints "Hello, World!" to the console, greets a user named Alice, calculates the sum of two integers (5 and 7), and prints the result. The program demonstrates basic Java concepts such as class definition, method calling, and basic input/output operations.`,
        ],
        type: "textarea",
        // Icon: TerminalIcon,
        // color: "gray",
      },
    },
  ],
};

export default obj;
