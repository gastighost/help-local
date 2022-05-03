import { useRouter } from "next/router";

function EditDeleteButtons(props) {
  const router = useRouter();
  const { id, handleEditOn, creatorId } = props;

  function deleteHandler(event) {
    event.preventDefault();

    fetch("/api/humanitarian-aid/" + id, {
      method: "DELETE",
      body: JSON.stringify({
        aidId: id,
        creatorId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        router.push("/humanitarian-aid");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <button onClick={deleteHandler}>Delete this item</button>
      <button onClick={handleEditOn}>Update this item</button>
    </div>
  );
}

export default EditDeleteButtons;
