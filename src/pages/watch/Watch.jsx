import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://firebasestorage.googleapis.com/v0/b/my-resume-57d24.appspot.com/o/Cinematic%20video-HD(Premiere%20pro%20cc%202019).mp4?alt=media&token=6751e2b6-36f8-47db-9738-d55c62b8f857"
      />
    </div>
  );
}
