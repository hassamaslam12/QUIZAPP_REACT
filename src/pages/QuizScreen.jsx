import React, { useState } from 'react'
import { ProgressBar } from 'react-bootstrap';

const QuizScreen = () => {
    let [count,setCount] = useState(0);
    let [corrAns,setCorrAns] = useState(0)

    const questions = [
        {
        question:'What is the full form of html?',
        options:['hyper text makeup language', 'html','hyper text markup language','hyper tdm'],
        correctOption:'hyper text markup language'
    },
        {
        question:'What is the full form of CSS?',
        options:['Cascading style sheet', 'correct style sheet','CSS','cascading super sheet'],
        correctOption:'Cascading style sheet'
    },
        {
        question:'What is the full form of JS?',
        options:['javascript', 'java','java style','html'],
        correctOption:'javascript'
    },
]

const nextQuestion = (e)=>{
    if(e.target.innerHTML === questions[count].correctOption){
        setCorrAns(prev=>++prev)
    }
    setCount(prev=>++prev)
}

  return (
    <div className="container">
        <h1 className='text-center text-primary'>Quiz App</h1>
<ProgressBar now={(count*100)/questions.length} />
        {count<questions.length?<>    
        <h3 className='mt-2'>Question : {count+1}/{questions.length}</h3>
<div>
            <h1>
            {questions[count].question}
        </h1>
           

        <div className='row'>

        {questions[count].options.map((option,i) =>

<button key={i} className='col-md-5 btn btn-primary p-3 m-2 ' onClick={(e)=>nextQuestion(e)}>{option}</button>
    )}
    </div>
    </div>
    
        </>:
        <>
        <h1>result</h1>
        <h4>Correct Answers: {corrAns}/{questions.length} </h4>
        <h4>Percentage: {((corrAns*100)/questions.length).toFixed(2)}%</h4>
        </>
        
        }
        
       

    </div>
  )
}

export default QuizScreen
