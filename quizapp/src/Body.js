import React from "react"
const Body = ({getQuestion,setCategory,setDifficulty}) => {
    return(
        <div>
            <form action="" className="headdiv" id="quizform" >
            <label htmlFor="category"><b>Choose the Category of Your Quiz</b></label><br/>
                <select name="Category" id="category" className="input" required onChange={(e) => {
                    setCategory(e.target.value)
                }} defaultValue="" >
                    <option value="" disabled hidden>Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Films</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animation</option>
                </select>
                <div className="top">
                <p className="top-text">Select Difficulty</p>
                <select id="difficulty" name="Difficulty" className="input" required="" onChange={(e) => {
                    setDifficulty(e.target.value)
                }}
                defaultValue="">
                  <option disabled hidden>Select Difficulty</option>
                  <option value="any">Any Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                </div>
                <button type="submit" id="button" onClick={(e) => {getQuestion();}}>SUBMIT</button>
            </form>
        </div>
    );
}
export default Body