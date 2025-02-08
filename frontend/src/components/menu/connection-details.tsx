import { component$, useContext, useOnDocument, $ } from "@builder.io/qwik";
import gameContext from "~/game/game-context";
export const ConnectionDetails = component$(() => {
  const c = useContext(gameContext);

  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      const serverURL =
        import.meta.env.PUBLIC_ENV === "production"
          ? "https://api.olems.no/car-game-players"
          : "http://localhost:8080/car-game-players";

      fetch(serverURL)
        .then((data) => data.json())
        //connected_spectators
        .then((data) => (c.connectedSpectators = data.payload));
    }),
  );
  return (
    <>
      {c.isConnectedToSocket ? (
        <p>Ditt brukernavn: {c.username}</p>
      ) : (
        <p>Ditt brukernavn:</p>
      )}
      <p>
        Personer tilstede:{" "}
        {c.connectedSpectators.length > 0
          ? c.connectedSpectators.length
          : "Ingen"}
      </p>
    </>
  );
});
