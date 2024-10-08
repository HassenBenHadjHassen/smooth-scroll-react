# smooth-scroll-react

smooth-scroll-react is a React component that provides smooth scrolling functionality for page transitions. It allows you to create vertical or horizontal scrolling through sections, with customizable settings for scroll speed, easing, page height, and more. This component is useful for creating dynamic, visually appealing scrolling experiences in your React applications.

## Demo

Check out the live demo here: [Smooth Scroll React Demo](https://scroll-demo.hassenbenhadjhassen.online/)

## Features

- Smooth scrolling between sections of a page.

- Customizable scroll speed, easing function, and direction.

- Supports vertical and horizontal scrolling.

- Looping functionality to wrap around sections.

- Callbacks for when sections are entered or left.

- Flexible and easy to integrate into any React project.

## Installation

You can install the package via npm or yarn.

For npm:

`npm install smooth-scroll-react`.

For yarn:

`yarn add smooth-scroll-react`.

## Basic Usage

To use the smooth-scroll-react package in a React project, import the component into your project and create a reference to the div that you want to scroll. Wrap your content in this component and customize the props to control the scrolling behavior.

You can use properties like targetRef, pageHeight, scrollSpeed, easing, loop, and direction to control the behavior of the scroll component.

```typescript
function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <SmoothScroll
        targetRef={scrollContainerRef}
        pageHeight={100}
        scrollSpeed={0.8}
        loop={false}
        easing="ease-in-out"
        direction="vertical"
        onSectionEnter={(index) => console.log("Entering section:", index)}
        onSectionLeave={(index) => console.log("Leaving section:", index)}
      />
      <div
        ref={scrollContainerRef}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ height: "100vh", backgroundColor: "lightblue" }}>
          Section 1
        </div>
        <div style={{ height: "100vh", backgroundColor: "lightcoral" }}>
          Section 2
        </div>
        <div style={{ height: "100vh", backgroundColor: "lightgreen" }}>
          Section 3
        </div>
      </div>
    </div>
  );
}
```

### Props

The package includes a set of props to control its behavior:

1.  `targetRef` is a required prop and refers to the div that holds your scrollable content. You must pass a reference to this container for smooth-scroll-react to work.

2.  `pageHeight` is a number that defines the height of each section for vertical scrolling or width for horizontal scrolling. By default, it is set to 100, representing 100vh or 100vw.

3.  `scrollSpeed` is a number that defines how quickly the transition between sections happens. The default speed is set to 1 second.

4.  `easing` is a string that allows you to define how the scrolling feels. It accepts any CSS easing function like 'ease-in', 'ease-out', or 'linear'. The default is 'linear'.

5.  `loop` is a boolean that determines whether scrolling loops back to the first section after reaching the end. The default value is set to false.

6.  `direction` defines the scroll direction, which can either be vertical (default) or horizontal.

7.  `onSectionEnter` is an optional callback function that fires when a new section is entered. It receives the index of the new section.

8.  `onSectionLeave` is an optional callback function that fires when a section is left. It receives the index of the section that is being exited.

## Advanced Usage

You can implement horizontal scrolling by setting the `direction` prop to 'horizontal'. When you do this, each section's width should match the viewport width (vw), and the scrolling behavior will be horizontal.

For looping through sections, enable the `loop` prop to allow continuous scrolling, so when the user scrolls past the last section, it will wrap back around to the first one.

You can also customize the easing function by passing any valid CSS easing string to the `easing` prop, such as 'ease-in-out' or a cubic-bezier function.

The package also provides optional callbacks for section enter and leave events. These can be used to trigger any necessary actions when a user scrolls into or out of a section.

## Styling

To make the scroll behavior work correctly, ensure that each section in your container has the appropriate height or width. For vertical scrolling, each section should have a height set to 100vh. For horizontal scrolling, each section should have a width set to 100vw. Additionally, ensure that the parent container has overflow set to hidden to prevent default scrolling behavior.

## TypeScript Support

The package is written in TypeScript, which ensures type safety and autocompletion when using the component in TypeScript projects. This makes integration smoother for developers working in TypeScript environments.

## Contributing

Contributions to smooth-scroll-react are welcome. If you find a bug, want to request a new feature, or would like to contribute code, feel free to open an issue or a pull request on the GitHub repository.

### Development Setup

To set up the project for development:

1. Clone the repository by running the command: `git clone https://github.com/HassenBenHadjHassen/smooth-scroll-react.git`.

2. Install dependencies by running the command: `npm install`.

3. Run the development server by using the command: `npm run dev`.

4. To build the package for production, use the command: `npm run build`.

## License

The package is distributed under the MIT License. Please refer to the LICENSE file in the repository for more information.
