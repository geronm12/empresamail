const baseUrl = "http://localhost:3000/api";

async function Login({ email, password }) {
  const body = {
    email,
    password,
  };

  const response = await fetch(baseUrl + "/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
}

async function UpdateProfilePicture({ id, token, file }) {
  const formData = new FormData();
  formData.append("file", file[0]);

  const response = await fetch(`${baseUrl}/empleados/profilepicture/${id}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return await response.json();
}

export { Login, UpdateProfilePicture };
