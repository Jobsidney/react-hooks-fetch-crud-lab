import React,{useState,useEffect} from "react";

function QuestionList() {
  const [Questions,setQuestions] =useState([])
  const [count,setCount] = useState(0)
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(response=>response.json())
    .then(data=>{
      setQuestions(data)
      setCount(data.length)
      console.log(data);
      console.log(count);
      
    })
  },[count])
  function deleteQuestion(id){
    fetch('http://localhost:4000/questions/'+id,
    {method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
})
if (count>0) {
  setCount(count-1)
}


  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {Questions.map(question=>(
          <li key={question.id}>{question.id}. {question.prompt} 
          <button onClick={()=>deleteQuestion(question.id)}>Delete</button></li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
