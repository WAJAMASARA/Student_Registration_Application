import  React, { useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const [studentName,setStudentName] = useState("");
    const [studentAddress, setStudentAddress] = useState("");
    
    const handleClick = (e) => { 
        e.preventDefault();
        const student = { studentName, studentAddress };
        fetch("http://localhost:8080/students/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student),
        }).then(() => {
            console.log("new student added");
        }
        );
    }
    return (
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: "blue" }}>
            <u>Add Student</u>
          </h1>{" "}
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            Validate
                    autoComplete="off"
                    fullWidth
          >
            <TextField
              id="outlined-basic"
              label="StudentName"
              variant="outlined"
              fullWidth
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="StudentAddress"
              variant="outlined"
              fullWidth
              value={studentAddress}
              onChange={(e) => setStudentAddress(e.target.value)}
            />
            <Button variant="contained" onClick={handleClick} >Submit</Button>
          </Box>
        </Paper>
      </Container>
    );
}
