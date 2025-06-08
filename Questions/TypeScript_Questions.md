1. Difference between type and interface in TypeScript

   - interface use extend keyword to extned properties from one interface to another
   - type use & to merge types
   - interfaces can be declared multiple time
   - types can not declare mutiple time
   - Interfaces can not have union or tupple
   - type can have union and tupple
   - Types are more flexible

   | Feature                    | `interface`      | `type`                  |
   | -------------------------- | ---------------- | ----------------------- |
   | Can extend                 | ✅ via `extends` | ✅ via `&`              |
   | Declaration merging        | ✅ Yes           | ❌ No                   |
   | Works with primitives      | ❌ No            | ✅ Yes                  |
   | Can define tuples/unions   | ❌ No            | ✅ Yes                  |
   | Preferred for class design | ✅ Yes           | ⚠️ Can, but less common |

1. Primitive Type Annotations

   - never represents a value that never occurs. It’s used in situations where something should not happen
     function throwError(message: string): never {
     throw new Error(message);
     }

   - unknown- Like any, it can hold any value. But you must type check before using it. When accepting input from external sources (e.g. APIs or user input).
     let input: unknown = "hello";

     if (typeof input === "string") {
     console.log(input.toUpperCase()); // ✅ safe
     }

   - A tuple in TypeScript is a fixed-length, ordered array where each element has a specific type. It allows you to group multiple values of different types together.
     let user: [string, number] = ["Amir", 30];

1. Unions

   - Function params that accept multiple types
   - Defining strict sets of values (string unions)
   - Modeling optional or fallback logic

   - type ApiResponse = "success" | "error" | "pending";

   function handle(response: ApiResponse) {
   if (response === "success") {
   // handle success
   }
   }

1. Intersections

   type WithTimestamps = {
   createdAt: Date;
   updatedAt: Date;
   };

   type Post = {
   title: string;
   content: string;
   };

   type PostWithMeta = Post & WithTimestamps;

1. | Rule                         | Can you?        | Example                            |
   | ---------------------------- | --------------- | ---------------------------------- |
   | Interface extends type?      | ✅ Yes          | `interface X extends SomeType`     |
   | Type intersects interface?   | ✅ Yes          | `type X = SomeInterface & {...}`   |
   | Type extends type?           | ✅ Yes          | `type X = A & B`                   |
   | Interface extends interface? | ✅ Yes          | `interface X extends Y`            |
   | Type extends interface?      | ❌ Not directly | Use intersection (`A & B`) instead |

1. Generics
   Generics let you write flexible, reusable code that works with any type, while still keeping the type information intact.
   Think of generics as placeholders for types — you define the logic once, and the real types get plugged in later.

   function identity<T>(value: T): T {
   return value;
   }

   let num = identity<number>(42); // T is number
   let str = identity<string>("hello"); // T is string

1. Utility Types Partial, Required, Readonly, Pick, Omit

   | Utility      | What it does                  |
   | ------------ | ----------------------------- |
   | `Partial<T>` | Makes all properties optional |

   type User = {
   name: string;
   age: number;
   };

   type PartialUser = Partial<User>;
   // { name?: string; age?: number }

   const user: PartialUser = { name: "Amir" }; // ✅ OK

   | `Required<T>` | Makes all properties required |

   type Profile = {
   name?: string;
   age?: number;
   };

   type FullProfile = Required<Profile>;
   // { name: string; age: number }

   const p: FullProfile = { name: "Ali", age: 25 }; // ✅ OK

   | `Readonly<T>` | Makes all properties read-only |

   type Todo = {
   title: string;
   };

   const task: Readonly<Todo> = { title: "Learn TS" };
   // task.title = "New Title"; ❌ Error: Cannot assign

   | `Pick<T, K>` | Picks a set of properties from a type |
   type User = {
   id: number;
   name: string;
   email: string;
   };

   type UserPreview = Pick<User, "id" | "name">;
   // { id: number; name: string }

   | `Omit<T, K>` | Removes a set of properties from a type |
   type UserWithoutEmail = Omit<User, "email">;
   // { id: number; name: string }

1. Strict Mode
   | Option | What it does |
   | ------------------------------ | ------------------------------------------------------------------- |
   | `strictNullChecks` | Prevents `null` or `undefined` from being used without checks |
   | `noImplicitAny` | Forces you to explicitly type values instead of defaulting to `any` |
   | `strictFunctionTypes` | Ensures function compatibility rules are safe |
   | `strictBindCallApply` | Checks parameter types in `.bind()`, `.call()`, and `.apply()` |
   | `strictPropertyInitialization` | Ensures class properties are initialized in constructor |
   | `noImplicitThis` | Ensures `this` has a typed context |
   | `alwaysStrict` | Adds `"use strict"` to your JS output |

1.
1. Advanced Types
   | Advanced Type | Purpose | Example |
   | -------------------- | ---------------------------------- | ---------------------- |
   | **Mapped Type** | Loop over keys of a type | `[K in keyof T]: T[K]` |
   | **Conditional Type** | Choose a type based on a condition | `T extends U ? X : Y` |

1. Enums allow you to define a set of named constants. They're great for scenarios where values have meaning and are reused.
   Why use enums? More readable than raw strings or numbers Prevents typos (Status.Succes ❌) Auto-completion and easy refactoring

   enum Status {
   Success = "SUCCESS",
   Failure = "FAILURE"
   }

   const result: Status = Status.Success;

1. Type Assertions
   A type assertion tells the TypeScript compiler: “Trust me, I know what I’m doing — this value is of this type.”
   const value = someValue as MyType;
