const authHeader = (): any => {
  const user = JSON.parse(localStorage.getItem("user") as any);
  const accessToken = JSON.parse(localStorage.getItem("accessToken") as any);

  if (user && accessToken) {
    return { Authorization: "Bearer " + accessToken };
  } else {
    return {};
  }
};

export default authHeader;
