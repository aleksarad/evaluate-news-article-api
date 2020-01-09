export function handleSubmit(event) {
    event.preventDefault()
    let url = document.getElementById('url').value;
    if (Client.checkIfURL(url)) {
        postReq('http://localhost:3000/api', url)
    } else {
        alert('invalid URL, please try again')
    }
}

const postReq = async (path, Url) => {
    await fetch(path, {
      method: 'POST',
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body: JSON.stringify({text: Url})
        })
        .then(res => {
          console.log(res)
          return res.json();
        })
        .then((res) => {
            
          document.getElementById('polarity').innerHTML = '<strong>Polarity: </strong>' + res.polarity;
          document.getElementById('polarity-confidence').innerHTML = '<strong>Polarity Confidence: </strong>' + res.polarity_confidence.toFixed(2);
          document.getElementById('subjectivity').innerHTML = '<strong>Subjectivity: </strong>' + res.subjectivity;
          document.getElementById('subjectivity-confidence').innerHTML = '<strong>Subjectivity Confidence: </strong>' + res.subjectivity_confidence.toFixed(2);
          document.getElementById('full-text').innerHTML = res.text;
          document.getElementById('summary').innerHTML = res.sentences;
  }
)}
