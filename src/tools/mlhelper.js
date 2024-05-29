import { ChevronRightIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/outline";

const obj = {
  title: "Machine Learning Helper",
  desc: "Gives Optimized Jupyter Code",
  category: "Helpers",
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
    maxLength: 20,
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
          type: "textarea",
          maxLength: 20,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: `Give me some starting libraries for my project`,
        },
      ],
      example: {
        output: ``,
        outputs: [
          `# Importing necessary libraries
          import numpy as np
          import pandas as pd
          import matplotlib.pyplot as plt
          import seaborn as sns
          from sklearn.model_selection import train_test_split
          from sklearn.linear_model import LinearRegression
          from sklearn.metrics import mean_squared_error
          
          # Reading the dataset
          data = pd.read_csv("dataset.csv")
          
          # Preprocessing the data
          # (Include your data preprocessing steps here)
          
          # Splitting the data into training and testing sets
          X = data.drop("target_column", axis=1)
          y = data["target_column"]
          X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
          
          # Building and training the model
          model = LinearRegression()
          model.fit(X_train, y_train)
          
          # Making predictions
          y_pred = model.predict(X_test)
          
          # Evaluating the model
          mse = mean_squared_error(y_test, y_pred)
          print("Mean Squared Error:", mse)
          
          # Visualizing the results
          plt.figure(figsize=(10, 6))
          plt.scatter(y_test, y_pred)
          plt.xlabel("Actual Values")
          plt.ylabel("Predicted Values")
          plt.title("Actual vs Predicted Values")
          plt.show()
          `,
        ],
        // Icon: TerminalIcon,
        // color: "gray",
      },
    },
  ],
};

export default obj;
