import React from "react";

const Blog = () => {
  return (
    <div className="items-center w-full bg-white rounded-lg border shadow-md md:flex-row ">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">
          1. What are the different ways to manage a state in a React
          application?
        </h5>
        <p>
          {" "}
          In React apps, there are at least seven ways to handle the state. Let
          us briefly explore a few of them in this part :
        </p>
        <div className="mb-3 font-normal m-10">
          <ul className="list-disc text">
            <p>We can use URL to store some data</p>
            <li>Filter parameters </li>
            <li>Pagination offset and limit</li>
            <li>Sorting data</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold ">
          How does prototypical inheritance work?
        </h5>
        <p className="mb-3 font-norma">
          The core idea of Prototypal Inheritance is that an object can point to
          another object and inherit all its properties. The main purpose is to
          allow multiple instances of an object to share common properties,
          hence, the Singleton Pattern.
        </p>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          What is a unit test? Why should we write unit tests?{" "}
        </h5>
        <p className="mb-3 font-normal text-red-400">What Is Unit Testing?</p>
        <p className="p-6">
          {" "}
          A unit test is a way of testing a unit - the smallest piece of code
          that can be logically isolated in a system. In most programming
          languages, that is a function, a subroutine, a method or property.
        </p>
        <h2 className="text-red-400"> Why Do We Need Unit Testing?</h2>
        <p className="p-6">
          {" "}
          <ul>
            <li>
              Unit tests save time and money. Usually, we tend to test the happy
              path more than the unhappy path. If you release such an app
              without thorough testing, you would have to keep fixing issues
              raised by your potential users. The time to fix these issues
              could’ve been used to build new features or optimize the existing
              system. Bear in mind that fixing bugs without running tests could
              also introduce new bugs into the system.
            </li>
            <li>
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions.
            </li>
            <li>
              Unit testing improves code coverage. A debatable topic is to have
              100% code coverage across your application.
            </li>
          </ul>
        </p>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          React vs. Angular vs. Vue{" "}
        </h5>
        <p className="mb-3 font-normal">
          <ul>
            <li>
              Unit tests save time and money. Usually, we tend to test the happy
              path more than the unhappy path. If you release such an app
              without thorough testing, you would have to keep fixing issues
              raised by your potential users. The time to fix these issues
              could’ve been used to build new features or optimize the existing
              system. Bear in mind that fixing bugs without running tests could
              also introduce new bugs into the system.
            </li>
            <li>
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions.
            </li>
            <li>
              Unit testing improves code coverage. A debatable topic is to have
              100% code coverage across your application.
            </li>
          </ul>
        </p>
        <p className="mb-3 font-normal">
          <b className="text-bold-xl"> How can this be?</b>
        </p>
        <p className="mb-3 font-normal">
          There are three frameworks for building web applications that every
          frontend developer has heard about: React, Vue.js, and Angular. React
          is a UI library, Angular is a fully-fledged front-end framework, while
          Vue.js is a progressive framework.
        </p>
        <p className="mb-1 mt-1">
          Key Differences Between Angular.Js, React.Js And Vue.Js
        </p>
        <p className="mb-3 font-normal">
          Speaking of architecture, Angular.js is a full-fledged MVC framework
          that provides you with all the possibilities for out-of-the-box
          programming:
        </p>
        <p className="mb-3 font-normal">
          React.js, on the other hand, is a library that just offers the view,
          leaving the developer to decide how to construct the Model and
          Controller.
        </p>
        <p className="mb-3 font-normal">
          Vue.js is a library that allows you to create interactive web
          interfaces. Vue.js is primarily concerned with the ViewModel layer of
          the MVVM architecture. It uses two-way data bindings to attach the
          View and the Model. Directives and Filters abstract away the actual
          DOM operations and output formatting.
        </p>
      </div>
    </div>
  );
};

export default Blog;
