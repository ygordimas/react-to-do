# To-Do List with React and Material UI
---
>Status: Completed
---
>Author: Ygor Dimas
---
>Contact: [Linkedin](https://www.linkedin.com/in/ygor-dimas/)
---
>Click [here](https://ygordimas.github.io/react-to-do/) to access the project's **GitHub Page**
---

# How to run it locally

```
git clone https://github.com/ygordimas/react-to-do.git
```

```
cd react-to-do
```

```
npm install --legacy-peer-deps
```

```
npm run dev
```

---

# Overview

This is a simple To Do list made with the intention of practicing and implementing basic React concepts and utilizing Material UI styling capabilities.

The app consists of a Header element with a Date & Time picker and an input field that expects a description. The list can be updated with either the 'Enter' key or the 'Add to List' button. The list can also be reset with the 'Reset List' button.

Once a task is added to the list, the information will be stored on the browser's localStorage and the user will be presented with a table in the 'Tasks' tab carrying all the information provided in the header. Each task is accompanied by a checkbox input for confirmation of the task's completion and another button to delete the task from the list, if necessary.

Completed tasks are shown in a separate table in the 'Completed Tasks' tab. The user also have the option to uncheck or delete a completed task. 

Both lists are automatically sorted in ascending order according to the respective Date and Time of each task.

## Objectives

My main objective for this project was to familiarize myself with React's workflow and mechanics. 
While working on this project I came accross the Material-UI library and saw it as an opportunity to understand it's implementation alongside React. 
Most of the UI app components were created and styled with MUI. 

## Frontend Topics and Technologies

- Creating reusable components with React
- Passing over data to child components through props
- Handling input data through React.useState
- Storing, updating and recovering state data from localStorage with React.useEffect
- Conditional rendering of components through ternary operators and states
- Utilizing Material-UI components library while building the app's interface
- Styling components either through inline styling with props or a custom theme with Material-UI
- Responsiveness with Material-UI breakpoints
- A simple 'slide in' animation made with the Framer Motion library

# Results

### Width of 1200px and higher
![Layout displaying no tasks and a width of 1200 pixels](https://github.com/ygordimas/react-to-do/blob/gh-pages/dist/imgs/1200_reset.png)
![Layout displaying tasks and a width of 1200 pixels](https://github.com/ygordimas/react-to-do/blob/gh-pages/dist/imgs/1200.png)
![Layout displaying completed task and a width of 1200 pixels](https://github.com/ygordimas/react-to-do/blob/gh-pages/dist/imgs/1200_completed.png)
### Width of 900px
![Layout displaying no tasks and a width of 1200 pixels](https://github.com/ygordimas/react-to-do/blob/gh-pages/dist/imgs/900_reset.png)
![Layout displaying tasks and a width of 1200 pixels](https://github.com/ygordimas/react-to-do/blob/gh-pages/dist/imgs/900.png)
![Layout displaying completed task and a width of 1200 pixels](https://github.com/ygordimas/react-to-do/blob/gh-pages/dist/imgs/900_completed.png)
### Width of 600px
![Layout displaying no tasks and a width of 1200 pixels](https://github.com/ygordimas/react-to-do/blob/gh-pages/dist/imgs/600_reset.png)
![Layout displaying tasks and a width of 1200 pixels](https://github.com/ygordimas/react-to-do/blob/gh-pages/dist/imgs/600.png)
![Layout displaying completed task and a width of 1200 pixels](https://github.com/ygordimas/react-to-do/blob/gh-pages/dist/imgs/600_completed.png)
