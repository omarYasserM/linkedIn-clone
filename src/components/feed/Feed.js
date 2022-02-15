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
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

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
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    if (input)
      addDoc(collection(db, "posts"), {
        name: user.displayName,
        desc: "Frontend developer",
        message: input,
        photoURL: user.photoURL,
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
              placeholder="Start a post"
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
      <FlipMove>
        {posts.map(({ id, data: { name, desc, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            desc={desc}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
