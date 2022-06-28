import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHomePage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { LoginPage } from "../pages/LoginPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";
import { CreateTripPage } from "../pages/CreateTripPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/trips/application" element={<ApplicationFormPage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
