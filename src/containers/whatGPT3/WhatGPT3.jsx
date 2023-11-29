import React from 'react';
import "./whatgpt3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="ChatGPT is a powerful language model developed by OpenAI. It utilizes cutting-edge natural language processing to generate human-like text. With its ability to understand and generate contextually relevant responses, ChatGPT is employed for various applications, from conversational agents to content creation." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="ChatGPTs empower dynamic, responsive chatbots, enhancing user interactions with natural language understanding for engaging and effective conversational experiences." />
      <Feature title="Knowledgebase" text="Leveraging vast information, ChatGPTs contribute to robust knowledgebases, providing accurate and context-aware data for comprehensive and insightful content." />
      <Feature title="Education" text="ChatGPTs transform education, aiding learners with personalized and interactive experiences, offering contextual assistance, and fostering a dynamic and adaptive learning environment." />
    </div>
  </div>
);

export default WhatGPT3;