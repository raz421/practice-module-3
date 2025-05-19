import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  if (status === "sent") {
    return <h1>Thanks for your feedback</h1>;
  }
  const handleMessage = async (e) => {
    e.preventDefault();
    setStatus("submiting");
    await sendingMessage(text);
    setStatus("sent");
  };
  return (
    <form onSubmit={handleMessage}>
      <h1>How was your stay your placing pony</h1>
      <textarea
        disabled={status === "submiting"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <button disabled={status === "submiting"} type="submit">
        send
      </button>
      {status === "submiting" && <p>sending</p>}
    </form>
  );
}
const sendingMessage = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};
