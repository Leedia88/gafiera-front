import React, {useState} from "react";

export default function NewEventForm(props){

    const [description, setDescription] = useState("");
    const [organizer, setOrganizer] = useState("");
    const [date, setDate] = useState("");

    const submitEvent = () => {
        if (description !== '' && organizer !== ''){
            props.addEvent(description, organizer, date);
            setDescription("");
            setDate("");
            setOrganizer("");
        }
    }

    return(
        <div className="mt-5 container">
            <form>
                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input 
                        className="form-control" 
                        required 
                        type="date"
                        onChange={e =>  setDate(e.target.value)}
                        value={date}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Organizer</label>
                    <input 
                        className="form-control" 
                        required 
                        type="text"
                        onChange={e =>  setOrganizer(e.target.value)}
                        value={organizer}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        rows={3} 
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button 
                    className="btn btn-primary" 
                    onClick={submitEvent}>
                        Add Event</button>
            </form>
        </div>
    )
}