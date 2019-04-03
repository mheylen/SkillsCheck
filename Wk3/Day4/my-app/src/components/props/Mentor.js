import React from "react";

export default function Mentor(props) {
    return (
    <div>
        <ul>
            {props.questions.map((question, index) => {
                return (
                <li>
                    {question}
                    <button onClick={() => props.answerQuestion(index)}>Answer
                    </button>
                </li>
                );
            })}
        </ul>
    </div>
    );
}