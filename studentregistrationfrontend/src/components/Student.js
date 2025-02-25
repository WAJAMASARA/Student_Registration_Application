import  React, { useEffect, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const [name,setName] = useState("");
    const [address, setAdress] = useState("");
    const [students, setStudents] = useState([]);
    const handleClick = (e) => { 
        e.preventDefault()
        const student = { name, address };
        console.log(student);
        fetch("http://localhost:8080/v1/api/students/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(student),
        }).then(() => {
          console.log("new student added");
        });
    }
    useEffect(() => {
        fetch("http://localhost:8080/v1/api/students/getAll")
          .then((response) => response.json())
          .then((data) => {
            setStudents(data);
          });
    }
    , []);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="StudentAddress"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAdress(e.target.value)}
            />
            <Button variant="contained" onClick={handleClick} >Submit</Button>
          </Box>
            </Paper>
            <h1>Students</h1>
            <Paper elevation={3} style={paperStyle}>
                {students.map((student) => (<Paper  style={{ padding: "10px", margin: "10px", textAlign: "left" }} key={student.id}>
                   Id: {student.id} <br />
                   Name: {student.name} <br />
                   Address: {student.address}
                </Paper>))}
            </Paper>
      </Container>
    );
}
