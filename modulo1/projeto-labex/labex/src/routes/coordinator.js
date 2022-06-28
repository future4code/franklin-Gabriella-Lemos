export const goToListTrips = (navigate) => {
  navigate("/trips/list");
};

export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goToTripDetails = (navigate) => {
  navigate("/admin/trips/:id");
};

export const goToCreateTrips = (navigate) => {
  navigate("/admin/trips/create");
};

export const goToAdminPage = (navigate) => {
  navigate("/admin/trips/list");
};

export const goToForm = (navigate) => {
  navigate("/trips/application");
};

export const backToHomePage = (navigate) => {
  navigate("/");
};
