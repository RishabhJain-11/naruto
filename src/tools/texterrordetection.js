import React from "react";
import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Terminal / Console Error Detections",
  desc: "Detect errors easily with the help of this Error Detection Platform, be it any form of error.",
  category: "Detection",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/texterrordetection",
  api: "/ai/texterrordetection",

  output: {
    title: "Answer / Solution",
    desc: "This is the solution for your query.",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Enter the Error Text",
      desc: "Copy the complete the error and paste it in the Description Box.",
      // n: 1,
      prompts: [
        {
          title: "Content",
          attr: "content",
          value: "",
          placeholder: "Error Text will be here...",
          label: "",
          type: "code",
          maxLength: 100,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: `Syste.out.println("Hello")`,
        },
      ],
      example: {
        output: `The error in your message is due to a simple typo in the method name. The correct method name in Java is System.out.println(), but you have written Syste.out.println(), which is missing the 'm' in System.

        Here's the corrected line of code:
        System.out.println("Hello");
        
        Explanation:
        System: This is a predefined class in the java.lang package.
        out: This is a static member of the System class, and it's an instance of PrintStream.
        println(): This is a method of the PrintStream class that prints a message to the console, followed by a new line.

        Corrected Code Example:
        public class Main {
            public static void main(String[] args) {
                System.out.println("Hello");
            }
        }

        Steps to Resolve:
        Ensure that you are using the correct class and method names.
        Correct any typographical errors.
        Recompile and run your program.
        By fixing the typo, your program should compile and run without issues.`,
        color: "blue",
      },
    },
  ],
};
export default obj;
