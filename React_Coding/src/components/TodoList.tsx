import { useCallback, useState } from "react";

type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
};

const TodoList = () => {
  const [todoName, setTodoName] = useState<string | undefined>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  const handleTodoNameChange = useCallback((event: any) => {
    setTodoName(event.target.value);
  }, []);

  const isAlreadyAdded = useCallback(
    (todoName: string) => {
      return todos.find(({ name }) => name === todoName);
    },
    [todos]
  );

  const handleAddTodo = useCallback(() => {
    const todo: string | undefined = todoName?.trim();
    if (!todo) return;
    if (editTodoId !== null) {
      setTodos((pre: any) => {
        return pre.map((todo: Todo) => {
          return todo.id === editTodoId ? { ...todo, name: todoName } : todo;
        });
      });
      setEditTodoId(null);
      setTodoName("");
    } else if (!isAlreadyAdded(todo)) {
      setTodos((pre: any) => [
        ...pre,
        { id: Math.random(), name: todo, isCompleted: false },
      ]);
      setTodoName("");
    } else {
      alert("Todo is already present");
    }
  }, [editTodoId, isAlreadyAdded, todoName]);

  const handleRemoveTodo = useCallback(
    (id: number) => {
      const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
      setTodos(filteredTodos);
    },
    [todos]
  );

  const handleEditTodo = useCallback(
    (todoId: number) => {
      const currentTodo = todos.find(({ id }) => id === todoId);
      setTodoName(currentTodo?.name);
      setEditTodoId(currentTodo?.id ?? null);
    },
    [todos]
  );

  const handleChecked = (todoID: number) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        return todoID === todo.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
    });
  };

  return (
    <div className="container">
      <section className="addTodoContainer">
        <label id="todoid">Add Todo</label>
        <input
          aria-labelledby="todoid"
          value={todoName}
          onChange={handleTodoNameChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </section>

      <section className="todoList">
        <ul>
          {todos.map(({ id, name, isCompleted }) => (
            <li key={id}>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleChecked(id)}
              />
              {name}{" "}
              <button onClick={() => handleRemoveTodo(id)}>Remove</button>
              <button onClick={() => handleEditTodo(id)}>Edit</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;
