import { useRef } from "react";
import { useRouter } from "next/router";

function RequestButton(props) {
  const { aidItem, id } = props;
  const router = useRouter();

  function activateRequest(event) {
    event.preventDefault();

    fetch("/api/humanitarian-aid/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        id,
        request: true,
        requestPresence: true,
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
        router.push("/humanitarian-aid/" + data.aidId);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deactivateRequest(event) {
    event.preventDefault();

    fetch("/api/humanitarian-aid/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        id,
        request: false,
        requestPresence: true,
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
        router.push("/humanitarian-aid/" + data.aidId);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      {aidItem.taken ? "Item is taken" : "Item not taken"}
      {aidItem.taken ? (
        <button onClick={deactivateRequest}>Cancel this request</button>
      ) : (
        <button onClick={activateRequest}>Request this item</button>
      )}
    </div>
  );
}

export default RequestButton;
