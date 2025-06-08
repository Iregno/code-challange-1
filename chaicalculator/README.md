# ☕️ Chai Bora Ingredient Calculator

Hi, this is my first JavaScript challenge where I built a simple calculator to help figure out how much of each ingredient is needed to make Kenyan chai.

## 📝 What This Does

This small app asks the user how many cups of chai they want to make, and then it calculates how much water, milk, tea leaves, and sugar is needed based on a standard recipe. It then prints the full recipe nicely in the console.

This helped me practice using:
- Functions in JavaScript
- `prompt()` to get input from the user
- `console.log()` to display results
- Basic math with variables
- Simple input validation using `isNaN()`

---

## ☕️ Recipe for 1 Cup

- Water: 200 ml  
- Milk: 50 ml  
- Tea Leaves (Majani): 1 tablespoon  
- Sugar (Sukari): 2 teaspoons  

---

## 💡 How It Works (Step by Step)

1. The user is asked: “How many cups of Kenyan Chai would you like to make?”
2. The program reads the input using `prompt()` and converts it to a number using `Number()`.
3. It checks if the input is a valid number using `isNaN()` and if the number is greater than 0.
4. If it's not valid, it shows an error.
5. If it's valid, it runs the `calculateChaiIngredients()` function, which does the math and prints everything clearly in the console.

---

## ✅ Example Output

Karibu! How many cups of Kenyan Chai would you like to make?

3

To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!


---

## 🚀 How To Try It

To run the code, open the `chai.js` file in any of these:
- Replit (easiest for beginners)
- VS Code with Live Server (needs setup)
- Developer Tools Console in your browser

It will show a prompt, and you just enter a number and see the output in the console.

---

## 📁 Files

chaiCalculator/
├── chai.js # My JavaScript code
└── README.md # This explanation file


---

## 🔍 What I Learned

- How to use `prompt()` and `Number()` to get and convert input
- That I need to validate input or the code might break
- That writing output in a readable format helps a lot
- How to explain code in simple words using a README

---

## 🎯 Next Time

I might try to:
- Add support for cups with decimal places (like 2.5)
- Build a small HTML version with a form input

Thanks for reading this far!
w