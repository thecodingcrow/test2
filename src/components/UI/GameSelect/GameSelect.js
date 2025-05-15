import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GameSelect.scss";
import mode1Img from "../../../assets/img/select_game_random.png";
import mode2Img from "../../../assets/img/select_game_friend.png";
import mode3Img from "../../../assets/img/select_game_computer.png";
import song from "../../../assets/audio/gameselect.mp3";
import useSound from "use-sound";

export const GameSelect = () => {
  const [playSong] = useSound(song);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");

  const matchPlayAction = () => {
    navigate("/matchPlay");
    playSong();
  };

  const friendPlayAction = () => {
    navigate("/friendPlay");
    playSong();
  };

  const machinePlayAction = () => {
    navigate("/machinePlay");
    playSong();
  };

  const openAddUserModal = () => {
    setShow(true);
  };

  const saveUserAction = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    setUserName(name);
    setShow(false);
  };

  console.log(userName);

  return (
    <div className="GameSelect">
      <div className="top-bar">
        <div className="user-name">
          {userName ? `Welcome, ${userName}` : ""}
        </div>

        <button className="button-add" onClick={openAddUserModal}>
          Add user
        </button>
      </div>

      <div className="u-container">
        <div className="u-ribbon">Select game</div>
        <div className="u-content">
          <div className="u-item" onClick={matchPlayAction}>
            <Image className="u-item-image" src={mode1Img}></Image>
            <div className="u-item-text">Match with Random User</div>
          </div>
          <div className="u-item" onClick={friendPlayAction}>
            <Image className="u-item-image" src={mode2Img}></Image>
            <div className="u-item-text">Match with Friend</div>
          </div>
          <div className="u-item" onClick={machinePlayAction}>
            <Image className="u-item-image" src={mode3Img}></Image>
            <div className="u-item-text">Match with Computer</div>
          </div>
        </div>
      </div>

      <Modal show={show} size="lg" centered className="AddUserModal">
        <form onSubmit={saveUserAction}>
          <div className="u-container">
            <div className="u-msg">Enter your name</div>

            <input
              className="input-name"
              placeholder="Enter your name"
              name="name"
              required
            />

            <div className="u-btn-group">
              <button
                className="u-btn-close"
                onClick={() => setShow(false)}
                type="button"
              >
                Close
              </button>

              <button className="u-btn-save" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default GameSelect;
