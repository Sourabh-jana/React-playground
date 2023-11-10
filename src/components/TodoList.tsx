import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
} from "@mui/material";
import { signal } from "@preact/signals";
import React from "react";

const todos = signal([{ text: "Buy groceries" }, { text: "Walk the dog" }]);

const text = signal("");

function addTodo() {
  console.log(text.value);
  todos.value = [...todos.value, { text: text.value }];
  text.value = ""; // Reset input value on add
}
function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}

// TodoList component
function TodoList() {

  return (
    <Box margin={4}>
      <Stack direction="row">
        <TextField
          onInput={(e) => (text.value += e.target.value)}
          value={"Sourabh"}
          size="small"
          variant="outlined"
        />
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={addTodo}
          sx={{ ml: 1 }}
        >
          Add
        </Button>
      </Stack>
      <List>
        {todos.value.map((todo) => (
          <ListItem key={todo.text}>
            {todo.text}
            <IconButton
              size="small"
              color="secondary"
              sx={{ ml: 1 }}
              onClick={() => removeTodo(todo)}
            >
              ❌
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoList;
