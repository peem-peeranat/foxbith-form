import * as React from "react";
import { useState } from "react";
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
// กำหนด type ให้ข้อมูล
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  hobby: string[];
  status: string;
  note: string;
  confirmPDPA: boolean;
}
export default function Home() {
  // ค่า เริ่มต้นของ hobby
  const [hobby, setHobby] = useState<string[]>([]);
  // --------------------------------------------------------------------------------------------------
  // Func ปุ่มReset เป็นค่าเริ่มต้น
  const handleReset = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      gender: "male",
      status: "",
      note: "",
      confirmPDPA: false,
    });
    setHobby([]);
  };
  // --------------------------------------------------------------------------------------------------
  // ค่า เริ่มต้นของ form ทั่วไป
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    hobby: [],
    status: "",
    note: "",
    confirmPDPA: false,
  });
  // --------------------------------------------------------------------------------------------------
  // Func สำหรับ Form ทั่วไป
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm(prevState => {
      return { ...prevState, [name]: value };
    });
  };
  // --------------------------------------------------------------------------------------------------
  // Func สำหรับ Hobby
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const updatedHobby = [...hobby];

    if (!updatedHobby.includes(value)) {
      updatedHobby.push(value);
    } else {
      updatedHobby.splice(updatedHobby.indexOf(value), 1);
    }
    setHobby(updatedHobby);
    setForm(prevState => ({
      ...prevState,
      hobby: updatedHobby,
    }));
  };
  // --------------------------------------------------------------------------------------------------
  // Func ของปุ่ม Submit ที่มีไว้สำหรับดึงข้อมูลจากformเข้า submittedData แล้วก็เรียกใช้ Func Reset ค่าฟอร์มอีกรอบ
  const [submittedForm, setSubmittedForm] = useState<FormData[]>([]);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedForm(prevState => [...prevState, form]);
    handleReset();
  };
  // --------------------------------------------------------------------------------------------------
  // Func สำหรับลบข้อมูลที่ถูกกด Submit ด้านข้าง
  const handleDelete = (index: number) => {
    const updatedForm = [...submittedForm];
    updatedForm.splice(index, 1);
    setSubmittedForm(updatedForm);
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
              {/* เขียน Func ของ PDPA แยก */}
              <FormControlLabel
                name="confirmPDPA"
                control={
                  <Checkbox
                    checked={form.confirmPDPA}
                    onChange={event => {
                      const { checked } = event.target;
                      setForm(prevState => ({
                        ...prevState,
                        confirmPDPA: checked,
                      }));
                    }}
                  />
                }
                label="Confirm PDPA"
                labelPlacement="end"
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
                    <FormControlLabel value="etc" control={<Radio />} label="Etc" />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Hobby</FormLabel>
                  <FormGroup aria-label="position" row>
                    {["Game", "Music", "Craft", "Reading"].map(hobbyItem => (
                      <FormControlLabel
                        key={hobbyItem}
                        name="hobby"
                        value={hobbyItem}
                        label={hobbyItem}
                        control={
                          <Checkbox
                            checked={hobby.includes(hobbyItem)}
                            onChange={handleFormChange}
                          />
                        }
                      />
                    ))}
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
                  {["Single", "Married", "Divorce"].map(status => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
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
                <Button variant="contained" onClick={handleReset}>
                  RESET
                </Button>
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
          {submittedForm.map((data, index) => (
            <Box
              key={index}
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
                  width: "53vw",
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
                  <Typography variant="h6"> USER {index + 1} </Typography>
                  <IconButton aria-label="delete" onClick={() => handleDelete(index)}>
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
                    <Typography>
                      {data.firstName || data.lastName
                        ? `Name: ${data.firstName} ${data.lastName}`
                        : `Name: -`}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                    }}>
                    <Typography>{`Email: ${data.email || "-"}`}</Typography>
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
                    <Typography>Gender: {data.gender}</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                    }}>
                    <Typography>{`Hobby: ${
                      data.hobby && data.hobby.length > 0 ? data.hobby.join(" , ") : "-"
                    }`}</Typography>
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
                    <Typography>{`Status: ${data.status || "-"}`}</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                    }}>
                    <Typography>{`Note: ${data.note || "-"}`}</Typography>
                  </Box>
                </Box>
                <FormControlLabel
                  disabled
                  name="ConfirmPDPA"
                  value="Confirm"
                  control={<Checkbox checked={data.confirmPDPA} />}
                  label="Confirm PDPA"
                  labelPlacement="end"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
