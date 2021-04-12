# Functional Rich Domain Modeling

Project created to study and experiment with Domain Driven Design tatical modeling using a Functional Programming paradigm in Typescript.

## Immutability

With the help of [eslint-plugin-functional](https://github.com/jonaskello/eslint-plugin-functional#readme) everything is immutable by default. Meaning that there's no way to manually mutate a Domain Entity outside of a predefined function.

## Error Handling 

The [fp-ts](https://github.com/gcanti/fp-ts#readme) library gives us ready-made patterns that are avaiable in most Functional Languages. One of the most important one is Either, a Monad that represents the two possible way of a synchronous task to end, fundamental task when dealing with Domain Validation as custom immutable types.

## Compile-time Domain Types

A common way to use classes in an Object-Oriented paradigm is to create Custom Types, guaranteeing that another class or method will only accept an instance of that given class, permitting the encapsulation of the validation and/or business logic to happen inside a private constructor only making a contract between the class and the rest of the application that might use that class.

However, that can lead to a lot of verbosity and boilerplate. We can do it in a way functional-way using [io-ts](https://github.com/gcanti/io-ts) that gives us functions to create custom and unique types that will cause compile-time errors if there was no validation before the use of that primitive type.