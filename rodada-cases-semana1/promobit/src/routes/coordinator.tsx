export const goToHomePage = (navigate: any) => {
  navigate("/");
};

export const goToDetailsPage = (navigate: any, id: string) => {
  navigate(`/movie/${id}`);
};

export const goToLastPage = (navigate: any) => {
  navigate(-1);
};
