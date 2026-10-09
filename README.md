# 📱 QR Code Generator

A simple and interactive Node.js command-line application that prompts users to enter a valid URL, validates it, and generates a dynamic QR code image.

## ✨ Features
- Interactive Prompt: Uses @inquirer/input to ask for user input directly in the terminal.
- URL Validation: Validates the input using a try/catch block and new URL().
- Dynamic Filename: Automatically extracts the hostname and cleans it to name the saved PNG file (e.g., google.png).
- QR Generation: Creates and saves a PNG QR code using qr-image and fs.

## ⚙️ Prerequisites
Make sure you have Node.js installed on your computer.

## 🚀 Installation & Setup
1. Clone the repository:
   git clone https://github.com/antpap30/QR-Code-Generator-CLI-.git

2. Navigate to the project directory:
   cd path/to/your/folder

3. Install dependencies:
   npm install

## ▶️ Usage
4. Run the application in your terminal with:
   node index.js

5. Type or paste a valid URL when prompted, and the app will generate the corresponding QR code image in your directory.

## 🛠️ Built With
- Node.js   
- @inquirer/input   
- qr-image   
- fs (File System)
