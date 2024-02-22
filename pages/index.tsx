import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  TextField,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  MenuItem,
  Select,
  Button,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    hobby: [],
    status: "",
    note: "",
    ConfirmPDPA: "",
  });

  // const { reset } = useForm;
  // ({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   gender: "male",
  //   hobby: [],
  //   status: "",
  //   note: "",
  //   ConfirmPDPA: "",
  // });

  const [hobby, setHobby] = useState<string[]>([]);
  // สำหรับการอัพเดทข้อมูลภายใน type input
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  // สำหรับการอัพเดทข้อมูลภายใน type checkbox
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = hobby.indexOf(event.target.value);
    if (index === -1) {
      setHobby([...hobby, event.target.value]);
    } else {
      setHobby(hobby.filter(skill => skill !== event.target.value));
    }
  };
  console.log({ hobby });

  // สำหรับการรับข้อมูล
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          backgroundColor: "#2196F3",
          height: "65px",
          alignItems: "center",
          mb: 6,
        }}>
        <Typography variant="h3" sx={{ textAlign: "center", color: "#FFFF" }}>
          User profile management System
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 6,
        }}>
        <Box sx={{ width: "40vw", ml: 3 }}>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
            Profile management
          </Typography>
          <form onSubmit={handleOnSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: 2,
                boxShadow: 2,
                p: 2,
              }}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                <TextField
                  sx={{ width: "50%" }}
                  label="Name"
                  variant="outlined"
                  name="firstName"
                  value={form.firstName}
                  type="text"
                  onChange={handleOnChange}
                />
                <TextField
                  sx={{ width: "50%" }}
                  label="Last name"
                  variant="outlined"
                  name="lastName"
                  value={form.lastName}
                  type="text"
                  onChange={handleOnChange}
                />
              </Box>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={form.email}
                type="text"
                onChange={handleOnChange}
              />
              <FormControlLabel
                name="ConfirmPDPA"
                value="Confirm"
                control={<Checkbox />}
                label="Confirm PDPA"
                labelPlacement="end"
                onChange={handleOnChange}
              />
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup
                    row
                    defaultValue="male"
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    value={form.gender}
                    onChange={handleOnChange}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Etc" control={<Radio />} label="Etc" />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Hobby</FormLabel>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      name="hobby"
                      value="Game"
                      label="Game"
                      control={
                        <Checkbox
                          checked={hobby.includes("Game")}
                          onChange={handleFormChange}
                        />
                      }
                    />
                    <FormControlLabel
                      name="hobby"
                      value="Music"
                      label="Music"
                      control={
                        <Checkbox
                          checked={hobby.includes("Music")}
                          onChange={handleFormChange}
                        />
                      }
                    />
                    <FormControlLabel
                      name="hobby"
                      value="Craft"
                      label="Craft"
                      control={
                        <Checkbox
                          checked={hobby.includes("Craft")}
                          onChange={handleFormChange}
                        />
                      }
                    />
                    <FormControlLabel
                      name="hobby"
                      value="Reading"
                      label="Reading"
                      control={
                        <Checkbox
                          checked={hobby.includes("Reading")}
                          onChange={handleFormChange}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </Box>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={form.status}
                  label="Status"
                  name="status"
                  onChange={handleOnChange}>
                  <MenuItem value={"Single"}>Single</MenuItem>
                  <MenuItem value={"Married"}>Married</MenuItem>
                  <MenuItem value={"Divorce"}>Divorce</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Note"
                variant="outlined"
                value={form.note}
                name="note"
                onChange={handleOnChange}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  justifyContent: "flex-end",
                  mt: 2,
                }}>
                <Button variant="contained">RESET</Button>
                <Button variant="contained" type="submit">
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              borderRadius: 2,
              boxShadow: 2,
              p: 2,
              width: "55vw",
              height: "178px",
              mr: 4,
            }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <Typography variant="h6">USER 1</Typography>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Box
                sx={{
                  width: "50%",
                }}>
                <Typography>Name: {form.firstName + " " + form.lastName}</Typography>
              </Box>
              <Box
                sx={{
                  width: "50%",
                }}>
                <Typography>Email: {form.email}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Box
                sx={{
                  width: "50%",
                }}>
                <Typography>Gender: {form.gender}</Typography>
              </Box>
              <Box
                sx={{
                  width: "50%",
                }}>
                <Typography>Hobby: {hobby}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Box
                sx={{
                  width: "50%",
                }}>
                <Typography>Status: {form.status}</Typography>
              </Box>
              <Box
                sx={{
                  width: "50%",
                }}>
                <Typography>Note: {form.note}</Typography>
              </Box>
            </Box>
            <FormControlLabel
              name="ConfirmPDPA"
              value="Confirm"
              control={<Checkbox />}
              label="Confirm PDPA"
              labelPlacement="end"
              onChange={handleOnChange}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
