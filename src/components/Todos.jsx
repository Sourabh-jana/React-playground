import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

import {
  Box,
  //   Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import TrashIcon from "@mui/icons-material/Delete";

const Todos = () => {
  const [task, setTask] = useState("");
  const queryClient = useQueryClient();

  // Queries
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      return axios.get("http://localhost:8000/todos");
    },
  });
  // Mutations
  const addTodoMutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post("http://localhost:8000/todos", newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`http://localhost:8000/todos/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <span
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          backgroundColor: "blueviolet",
          color: "white",
          padding: "0.5rem",
          borderRadius: "5px",
          fontSize: "0.8rem",
          fontWeight: "bold",
          userSelect: "none",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "DarkGray",
          },
        }}
      >
        Total Todos: {data.length}
      </span>
      <Stack direction="column">
        <Stack direction="row">
          <TextField
            onChange={(e) => setTask(e.target.value)}
            value={task}
            size="small"
            variant="outlined"
          />
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              addTodoMutation.mutate({ task });
            }}
            sx={{ ml: 1 }}
          >
            Add
          </Button>
        </Stack>
        <Box sx={{ marginTop: "0.3rem", marginLeft: "0.5rem" }}>
          {addTodoMutation.isPending && (
            <Typography fontSize="0.9rem" color="lightblue">
              Adding todo...
            </Typography>
          )}

          {addTodoMutation.isError && (
            <Typography fontSize="0.9rem" color="red">
              An error occurred: {addTodoMutation.error.message}
            </Typography>
          )}

          {addTodoMutation.isSuccess && (
            <Typography fontSize="0.9rem" color="lightseagreen">
              Todo added!
            </Typography>
          )}
        </Box>
      </Stack>
      <List>
        {data.data.map((todo) => (
          <ListItem key={todo.id}>
            {todo.task}
            <IconButton
              size="small"
              color="error"
              sx={{ ml: 1 }}
              onClick={() => deleteTodoMutation.mutate(todo.id)}
            >
              <TrashIcon />
            </IconButton>
            <Box sx={{ marginTop: "0.3rem", marginLeft: "0.5rem" }}>
          {deleteTodoMutation.isPending && (
            <Typography fontSize="0.9rem" color="lightblue">
              Deleting todo...
            </Typography>
          )}

          {deleteTodoMutation.isError && (
            <Typography fontSize="0.9rem" color="red">
              An error occurred: {deleteTodoMutation.error.message}
            </Typography>
          )}

          {deleteTodoMutation.isSuccess && (
            <Typography fontSize="0.9rem" color="lightseagreen">
              Todo Deleted!
            </Typography>
          )}
        </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Todos;
