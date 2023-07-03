import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DataPanel from "./components/DataPanel/DataPanel";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import MapPanel from "./components/Map/Map";

function App() {
  const URL =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_O5tbsVn0INcLgsUP70mPiaQaVh5CU"; //U

  const fetchData = (ip) => {
    axios
      .get(`${URL}&ipAddress=${ip}`)
      .then((res) => {
        setIp(res.data.ip);
        setLocation(res.data.location);
        setIsp(res.data.isp);
      })
      .catch(function (error) {
        toast.error(error.message);
      });
  };

  const fetchUserData = () => {
    axios
      .get(URL)
      .then((res) => {
        setIp(res.data.ip);
        setLocation(res.data.location);
        setIsp(res.data.isp);
      })
      .catch(function (error) {
        toast.error(error.message);
      });
  };

  const [ip, setIp] = useState("");
  const [location, setLocation] = useState({
    country: "",
    city: "",
    lat: 52.22977,
    lng: 21.01178,
    postalCode: "",
    timezone: "",
  });
  const [isp, setIsp] = useState("");
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <Toaster />
      <Header submit={fetchData} />
      <DataPanel ip={ip} location={location} isp={isp} />
      <MapPanel point={[location.lat, location.lng]} />
      <Footer />
    </>
  );
}

export default App;
