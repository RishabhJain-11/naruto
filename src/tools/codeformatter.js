import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Code Formatter",
  desc: "This is the formatting of the code given.",
  category: "Optimization",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/codeformatter",
  api: "/ai/codeformatter",

  output: {
    title: "Answer",
    desc: "Formatted version of the code you asked.",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Input",
      desc: "Enter the code block you want to format",
      // n: 1,
      prompts: [
        {
          title: "Code Block",
          attr: "content",
          value: "",
          placeholder: "Enter the code here...",
          label: "",
          type: "code",
          maxLength: 10,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: `class Solution {
            public String mergeAlternately(String word1, String word2) {
                StringBuilder result = new StringBuilder();
                int i = 0;
                while(i < word1.length() || i < word2.length()) {
                    if(i < word1.length()) {
                        result.append(word1.charAt(i));
                    }
                    if(i < word2.length())
                        
                        {
                        result.append(word2.charAt(i));
                    }

                    
                    i++;
                }



                return result.toString();
            }
        }
        `,
        },
      ],
      example: {
        output: `class Solution {
            public String mergeAlternately(String word1, String word2) {
                StringBuilder result = new StringBuilder();
                int i = 0;
                while(i < word1.length() || i < word2.length()) {
                    if(i < word1.length()) {
                        result.append(word1.charAt(i));
                    }
                    if(i < word2.length()){
                        result.append(word2.charAt(i));
                    }
                    i++;
                }
                return result.toString();
            }
        }
      `,
        color: "blue",
      },
    },
  ],
};

export default obj;
