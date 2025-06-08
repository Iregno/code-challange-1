# 📱 Simplified Mobile Money Transaction Fee Estimator

This is my solution to **Challenge 3** of the JavaScript basics practice series.

It’s a simple JavaScript program that estimates how much fee will be charged when sending money via mobile transfer. I used basic math, conditions (`if...else`), and user input to make the program interactive and beginner-friendly.

---

## 💡 Problem Statement

When someone sends money via mobile, a **transaction fee** is usually charged. This fee is calculated as:

- **1.5% of the amount**
- But there's always:
  - A **minimum fee** of **KES 10**
  - A **maximum fee** of **KES 70**

The program should ask the user how much money they want to send, then:
- Calculate the fee
- Make sure it respects the min/max limits
- Show the **fee** and the **total amount** that will be deducted

---

## 🧠 How the Program Works

1. Prompts the user to enter the amount to send.
2. Checks if the input is valid (a number greater than 0).
3. Calculates 1.5% of the amount.
4. If that result is less than 10, it uses **KES 10**.
5. If it’s more than 70, it uses **KES 70**.
6. Finally, it adds the fee to the original amount and prints everything.

---

## 🧪 Example Output

For an amount of `500`:
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!


For `2000`:
Sending KES 2000:
Calculated Transaction Fee: KES 30
Total amount to be debited: KES 2030

Send Money Securely!


---

## 🛠️ What I Used

- JavaScript
- `prompt()` to get user input
- `console.log()` to display output
- `if`, `else`, `else if` for conditional logic
- Simple math and variables

---

## 🙋🏾 Why I Built It

I’m learning JavaScript and this challenge helped me practice:
- Working with numbers and percentages
- Input validation
- Logical conditions
- Writing readable and user-friendly output

---

## ✅ How to Run It

You can:
- Open your browser console and paste the code.
- Or create an HTML file and add the script inside `<script>` tags.



