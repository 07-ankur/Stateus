import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { mockStateData } from "../../data/mockData";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "85vh",
          m: 3,
          p: 0,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            height: "80vh",
            width: "33.33%",
          }}
        >
          <Tooltip title={`Temperature: ${mockStateData[0].Temperature}`} placement="top-start">
            <Box
              onClick={() => {
                navigate("/Maharashtra");
              }}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#457F8B",
                color: "black",
                fontSize: "2em",
                m: 1,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                height: "50vh",
              }}
            >
              Maharastra
            </Box>
          </Tooltip>
          <Tooltip title={`Temperature: ${mockStateData[2].Temperature}`} placement="top-start">
            <Box
              onClick={() => {
                navigate("/West-Bengal");
              }}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#C2984B",
                color: "black",
                fontSize: "2em",
                m: 1,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                height: "30vh",
              }}
            >
              West Bengal
            </Box>
          </Tooltip>
        </Box>
        <Box sx={{ height: "80vh", width: "33.33%" }}>
          <Tooltip title={`Temperature: ${mockStateData[1].Temperature}`} placement="top-start">
            <Box
              onClick={() => {
                navigate("/Bihar");
              }}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#90ADA2",
                color: "black",
                fontSize: "2em",
                m: 1,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
                height: "65vh",
              }}
            >
              Bihar
            </Box>
          </Tooltip>
          <Tooltip title={`Temperature: ${mockStateData[3].Temperature}`} placement="top-start">
            <Box
              onClick={() => {
                navigate("/Tamil-Nadu");
              }}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#BB4561",
                color: "black",
                fontSize: "2em",
                m: 1,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                height: "15vh",
              }}
            >
              Tamil Nadu
            </Box>
          </Tooltip>
        </Box>
        <Box sx={{ height: "80vh", width: "33.33%" }}>
          <Box sx={{ display: "flex", flexDirection: "row", height: "25vh" }}>
            <Tooltip title={`Temperature: ${mockStateData[4].Temperature}`} placement="top-start">
              <Box
                onClick={() => {
                  navigate("/Jharkhand");
                }}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#A5AC97",
                  color: "black",
                  fontSize: "2em",
                  m: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  width: "66.66%",
                }}
              >
                Jharkhand
              </Box>
            </Tooltip>
            <Tooltip title={`Temperature: ${mockStateData[5].Temperature}`} placement="top-start">
              <Box
                onClick={() => {
                  navigate("/Uttar-Pradesh");
                }}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#9EC162",
                  color: "black",
                  fontSize: "1.5em",
                  m: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  width: "33.33%",
                }}
              >
                Uttar Pradesh
              </Box>
            </Tooltip>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", height: "25vh" }}>
            <Box sx={{ width: "33.33%" }}>
              <Tooltip title={`Temperature: ${mockStateData[6].Temperature}`} placement="top-start">
                <Box
                  onClick={() => {
                    navigate("/Rajasthan");
                  }}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#457F8B",
                    color: "black",
                    fontSize: "1em",
                    m: 1,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    height: "40vh",
                  }}
                >
                  Rajasthan
                </Box>
              </Tooltip>
              <Tooltip title={`Temperature: ${mockStateData[7].Temperature}`} placement="top-start">
                <Box
                  onClick={() => {
                    navigate("/Haryana");
                  }}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#AA4882",
                    color: "black",
                    fontSize: "1em",
                    m: 1,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    height: "15vh",
                  }}
                >
                  Haryana
                </Box>
              </Tooltip>
            </Box>
            <Box sx={{ width: "66.66%" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Tooltip title={`Temperature: ${mockStateData[8].Temperature}`} placement="top-start">
                  <Box
                    onClick={() => {
                      navigate("/Gujarat");
                    }}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#49294A",
                      color: "black",
                      fontSize: "1em",
                      m: 1,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      height: "30vh",
                      width: "35%",
                    }}
                  >
                    Gujarat
                  </Box>
                </Tooltip>
                <Tooltip title={`Temperature: ${mockStateData[9].Temperature}`} placement="top-start">
                  <Box
                    onClick={() => {
                      navigate("/Karnataka");
                    }}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#728093",
                      color: "black",
                      fontSize: "1em",
                      m: 1,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      width: "65%",
                      height: "30vh",
                    }}
                  >
                    Karnataka
                  </Box>
                </Tooltip>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "row", height: "25vh" }}
              >
                <Tooltip title={`Temperature: ${mockStateData[10].Temperature}`} placement="top-start">
                  <Box
                    onClick={() => {
                      navigate("/Madhya-Pradesh");
                    }}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#BC6142",
                      color: "black",
                      fontSize: "1em",
                      m: 1,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      width: "33.33%",
                    }}
                  >
                    Madhya Pradesh
                  </Box>
                </Tooltip>
                <Tooltip title={`Temperature: ${mockStateData[11].Temperature}`} placement="top-start">
                  <Box
                    onClick={() => {
                      navigate("/Kerela");
                    }}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#9D90AF",
                      color: "black",
                      fontSize: "1em",
                      m: 1,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      width: "33.33%",
                    }}
                  >
                    Kerela
                  </Box>
                </Tooltip>
                <Tooltip title={`Temperature: ${mockStateData[12].Temperature}`} placement="top-start">
                  <Box
                    onClick={() => {
                      navigate("/Punjab");
                    }}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#457F8B",
                      color: "black",
                      fontSize: "1em",
                      m: 1,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      width: "33.33%",
                    }}
                  >
                    Punjab
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
