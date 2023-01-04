import { useState } from "react";
import { useHistory } from "react-router-dom";
import NotesService from "../services/NotesService";
 


const Add = () => {

    const[title, setTitle] = useState ('');
    const[body, setBody] = useState ('');
    const[category, setCategory] = useState ('programming');

    //Redirection of the Application to the Note Page
    const history = useHistory();

  const   saveNote =  (e) => {
        e.preventDefault();
        const note = {title, body, category }
       // console.log('printing note', note);
       NotesService.create(note)
            .then(response => {
                        console.log("Note added Successfully", response.data);
                        history.push("/")
                    })
            .catch(error => {
                console.log('something went wrong', error)
            })
    }

    return ( 

        <div className="create">
           <form>
<div className="form-group">
<label htmlFor="title">Note Title: <sup>*</sup></label>
<input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle (e.target.value)}/>
</div>


<div className="form-group">
<label htmlFor="body">Note Description: <sup>*</sup></label>
<textarea  id="body" className="form-control" value={body} onChange={(e) => setBody (e.target.value)}></textarea>
</div>


<div className="form-group">
<label htmlFor="category">Note Category: </label>
<select
            id="category"
            className="form-control" value={category} onChange={(e) => setCategory (e.target.value)}>
                <option value="mda">MDA</option>
                <option value="tescom">TESCOM</option>
                <option value="lga">LGA</option>
                <option value="phc">PHC</option>
                <option value="subeb & middle school">SUBEB & MIDDLE SCHOOL</option>
                <option value="civil pension">CIVIL PENSION</option>
                <option value="primary & lg pension">PRIMARY & LG PENSION</option>

</select>


</div>

<div className="text-center">
<button onClick={(e) => saveNote (e)}>Add note</button>  
</div>
      
           </form>
        </div>
     );
}
 
export default Add;