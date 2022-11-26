import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-2 lg:mx-32'>
            <div className='mt-16'>
                <h1 className='bg-slate-100 p-4 text-xl rounded-t-xl border-b border-slate-300'>
                    What are the different ways to manage a state in a React application?
                </h1>
                <p className='shadow-2xl shadow-gray-300 p-4'>
                    <div className='ml-9 mt-2'>
                        <h2 className='text-sm text-gray-500 leading-6'>There are four main types of state you need to properly manage in your React apps:</h2>
                        <h2 className='text-sm text-gray-500 leading-6'>1. Local state</h2>
                        <h2 className='text-sm text-gray-500 leading-6'>2. Global state</h2>
                        <h2 className='text-sm text-gray-500 leading-6'>3. Server state</h2>
                        <h2 className='text-sm text-gray-500 leading-6'>4. URL state</h2>
                    </div>
                </p>
            </div>
            <div className='mt-16'>
                <h1 className='bg-slate-100 p-4 text-xl rounded-t-xl border-b border-slate-300'>
                    How does prototypical inheritance work?
                </h1>
                <p className='shadow-2xl shadow-gray-300 p-4'>
                    <div className='ml-9 mt-2'>
                        <h2 className='text-sm text-gray-500 leading-6 mb-2'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. </h2>
                        <h2 className='text-sm text-gray-500 leading-6'>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</h2>
                    </div>
                </p>
            </div>
            <div className='mt-16'>
                <h1 className='bg-slate-100 p-4 text-xl rounded-t-xl border-b border-slate-300'>
                    What is a unit test? Why should we write unit tests?
                </h1>
                <p className='shadow-2xl shadow-gray-300 p-4'>
                    <div className='ml-9 mt-2'>
                        <h2 className='text-sm text-gray-500 leading-6 mb-2'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete.</h2>
                        <h2 className='text-sm text-gray-500 leading-6'>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</h2>
                        <h2 className='text-sm text-gray-500 leading-6'>Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</h2>
                        <h2 className='text-sm text-gray-500 leading-6'>It simplifies the debugging process.</h2>
                    </div>
                </p>
            </div>
            <div className='my-16'>
                <h1 className='bg-slate-100 p-4 text-xl rounded-t-xl border-b border-slate-300'>
                    React vs. Angular vs. Vue?
                </h1>
                <p className='shadow-2xl shadow-gray-300 p-4'>
                    <div className='ml-9 mt-2'>
                        <h2 className='text-sm text-gray-500 leading-6 mb-2'><span className='font-semibold text-gray-700'>React</span>- A JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs. We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</h2>
                        <h2 className='text-sm text-gray-500 leading-6 mb-2'><span className='font-semibold text-gray-700'>Angular</span>- Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps. These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects.</h2>
                        <h2 className='text-sm text-gray-500 leading-6 mb-2'><span className='font-semibold text-gray-700'>Vue</span>- Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</h2>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default Blogs;