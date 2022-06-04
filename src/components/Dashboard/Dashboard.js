import React, { useState } from "react";
import Chart from "../Chart/Chart";
import Graph from "../Graph/Graph"
import Modal from "../Modal/Modal";
import ProgressBar from "../ProgressBar/ProgressBar";

import Sidebar from "../Sidebar/Sidebar";
import Stats from "../Stats/Stats";

import "./Dashboard.css";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    rank: "12890",
    percentile: "37",
    score: "7",
  });

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="skillTest">
        <p className="heading"> Skill Test</p>
        <div className="wrapper">
          <div className="container-one">
            <div className="htmlHeader container">
              <div className="title">
                <img src="./images/image 4.png" alt="logo"></img>
                <div className="info">
                  <h3>Hypertext Markup Language</h3>
                  <p>
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                  </p>
                </div>
              </div>
              <button type="button" className="button" onClick={showModal}>
                Update
              </button>
              <Modal
                modal={show}
                setInput={setInput}
                hideModal={hideModal}
                input={input}
              />
            </div>
            <div className="stats container">
              <h3>Quick Statistics</h3>
              <div className="stats-wrapper">
                <Stats
                  data={input.rank}
                  metadata="YOUR RANK"
                  img="./images/img1.png"
                />
                <Stats
                  data={`${input.percentile}%`}
                  metadata="PERCENTILE"
                  img="./images/img2.png"
                />
                <Stats
                  data={`${input.score}/15`}
                  metadata="CORRECT ANSWERS"
                  img="./images/img3.png"
                />
              </div>
            </div>
            <div className="graph-container container">
              <div className="graph-info">
                <>
                  <h3>Comparison Graph</h3>
                  <p>
                    You scored 37% percentile which is lower than the average
                    percentile 72% of all the engineers who took this assessment
                  </p>
                </>
                <img src="./images/img4.png" alt="img"></img>
              </div>
              <Graph percentile={input.percentile}/>
            </div>
          </div>
          <div>
            <div className="analysis-one container-two container">
              <h3>Syllabus wise Analysis</h3>
              <ProgressBar
                bgcolor="#438AF6"
                heading="HTML Tools, Forms, History"
                progress="80"
              />
              <ProgressBar
                bgcolor="#FF9142"
                heading="Tags & References in HTML"
                progress="60"
              />
              <ProgressBar
                bgcolor="#FB5E5E"
                heading="Tables & CSS Basics"
                progress="24"
              />
              <ProgressBar
                bgcolor="#2EC971"
                heading="Tables & CSS Basics"
                progress="96"
              />
            </div>
            <div className="analysis-two container-two container">
              <h3>Question Analysis</h3>
              <div className="analysis-score">{input.score}/15</div>
              <p>
                <strong>
                  You scored {input.score} question correct out of 15.{" "}
                </strong>
                However it still needs some improvements
              </p>
              <Chart value={input.score}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
