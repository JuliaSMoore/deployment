const btn = document.querySelector("button");

const getCat = () => {
  axios.get("http://18.189.1.164/api/cat").then((res) => alert(res.data));
};

btn.addEventListener("click", getCat);
