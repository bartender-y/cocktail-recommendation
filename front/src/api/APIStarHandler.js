

const APIStarHandler = (star, name, e) => {
  e.preventDefault();
  fetch(process.env.REACT_APP_BACKEND_SERVER_IP+ "/flask/star", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      name: name,
      star: star
    }),
  })
  // .then((res) => console.log(res));
};

export {APIStarHandler}