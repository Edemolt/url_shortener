import React, {useState} from 'react';

const Input_form = () => {

    const [url, set_url] = useState('');

    const handle_url = (e) => {
        set_url(e.target.value);
        console.log(url);
    }

    const on_submit = (e) => {
        e.preventDefault();

        console.log("Sending URL:", url);

        if (!url) {
            console.error('URL is required');
            return; // Prevent sending an invalid request
        }

        const requestData = JSON.stringify({url: url});
        console.log("Request Data:", requestData); // Verify request payload
        
        fetch(`http://localhost:8000/url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: url})
        }).then( response => response.json());

        set_url('');
    }
    return(
        <div>
            <form onSubmit={on_submit}>
                <label htmlFor="">Enter the url here please</label>
                <input type="text" name="url" id="url" placeholder="Enter the url" onChange={handle_url} ></input>
                <button type="submit">Shorten</button>
            </form>
        </div>
    )
}

export default Input_form;