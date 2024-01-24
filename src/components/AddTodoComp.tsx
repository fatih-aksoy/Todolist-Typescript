import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";

interface IAddTodoCom {
  addTodo: AddFn;
}

const AddTodoComp = ({ addTodo }: IAddTodoCom) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log(text);
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <Container>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: { xs: "flex-start", sm: "center" },
            m: { xs: 1, sm: "auto" },
            height: { xs: "120px", sm: "80px" },
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Enter the todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            inputProps={{ maxLength: 40 }}
            sx={{
              minWidth: { xs: "100%", sm: "50%" },
              height: "50px",
              m: 1,
            }}
          />

          <Button
            variant="contained"
            onClick={handleClick}
            disabled={!text.trim()}
            sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
            endIcon={<SaveIcon />}
          >
            Add Todo
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default AddTodoComp;
