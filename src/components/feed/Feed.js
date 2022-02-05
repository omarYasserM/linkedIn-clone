import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./feed.scss";
import Post from "../post/Post";
import InputOption from "../inputOption/InputOption.js";
import {
  CalendarViewDay,
  EventNote,
  Subscriptions,
  Image,
} from "@mui/icons-material";
import { db } from "../../firebase/firebase";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timeStamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setInput("");
    });

    const querySnapshot = onSnapshot(q);
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      name: "Omar yasser",
      desc: "Frontend developer",
      message: input,
      photoURL: "",
      timeStamp: serverTimestamp(),
    });
  };
  return (
    <div className="feed">
      <div className="inputContainer">
        <div className="input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, desc, message, photoURL } }) => (
        <Post key={id} name={name} desc={desc} message={message} />
      ))}
    </div>
  );
}

export default Feed;
