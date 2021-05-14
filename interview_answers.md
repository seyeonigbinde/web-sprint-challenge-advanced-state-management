# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API allows us to create what is known as a Context Object. This object gives us two important components to work with,which are ContextObject.Provider and ContextObject.Consumer. It is used when we have global data that lots of components share or when we have to pass data through intermediate components. It keeps our state relatively clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - actions are packets of information that contains an action type and associated data. Actions are passed into the reducer function as an argument. It is simply an object with up to two properties, which are a type property and an optional payload property. When our reducer receives an action, it will update the state according to the type and payload on the action.


Reducers - Reducers are pure functions without any side-effects. They are perfect fit for managing changes in the state while maintaining the immutability we want in our components. It takes two arguments, which are the current state and action. It returns a new, updated state object based on both arguments.

Store - the store contains the state of our application. It is a single JavaScript Object that contains everything that changes within the application. That is why it is known as the 'single source of truth' in a redux application

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux-thunk make the flow of data from the Redux action to the reducer asynchronous as it makes API calls from our action-creators. Redux Thunk middleware allows us to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management is Context API  because it is used when we have a global data that a lot of components need to share or when we have to pass data through intermediate components. It is better rather than going through the stress of props drilling. It helps to keep our state relatively clean.