# Online Code Editor

This project is an **Online Code Editor** built using **React.js** and **Monaco Editor**, featuring language selection, code persistence, and functionalities like resetting and copying code.

## Available Features

- **Language Selection**: Switch between JavaScript and Java seamlessly.
- **Code Persistence**: Saves code for each language using Redux Toolkit.
- **Reset Functionality**: Restores the editor content to its default state.
- **Copy Functionality**: Copies the current editor content to the clipboard.
- **Responsive UI**: Designed with modern CSS for a clean and user-friendly interface.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get started, clone the repository and install dependencies:

```bash
git clone https://github.com/eren9420/monacoeditor.git
cd online-code-editor
npm install
npm start

Now open http://localhost:3000 to view the app in your browser.


```FOLDER STRUCTURE

.
├── public/                 
├── src/                   
│   ├── components/         
│   │   ├── Buttons.js     
│   │   ├── CodeEditor.js   
│   │   ├── Dropdown.js     
│   ├── store/              
│   │   ├── editorSlice.js  
│   │   └── index.js       
│   ├── utils/              
│   │   └── api.js          
│   ├── App.js              
│   ├── App.css             
│   ├── index.js            
│   └── index.css          
├── .env                    
├── package.json            
├── README.md               
└── .gitignore              

