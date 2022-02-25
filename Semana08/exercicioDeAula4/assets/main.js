const getInput = (name) => {
  const element = document.getElementsByName(name);
  if (element && element.length) {
    return element[0];
  }
  return null;
};

const postTask = async (task) => {
  try {
    const { post } = await axios.post(
      task,
      `https://jsonplaceholder.typicode.com/todos`
    );
    return post;
  } catch (error) {
    alert(error);
  }
};
window.onload = () => {
  const task = getInput("tarefa");
  //   const form = getInput("form");

  task.addEventListener("input", async (event) => {
    try {
      postTask(task);
    } catch (error) {
      alert(error.message);
    }
  });
};
