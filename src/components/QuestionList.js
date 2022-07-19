import React,{useState,useEffect} from "react";

function QuestionList() {
  const [Questions,setQuestions] =useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(response=>response.json())
    .then(data=>{
      setQuestions(data)
      console.log(data);
      
    })
  },[])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {Questions.map(question=>(
          <li key={question.id}>{question.id}. {question.prompt}</li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
