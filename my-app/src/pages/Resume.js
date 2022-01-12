import '../css/resume.css';
const Resume = () => {
  return (<div>
    <h1>This is resume page</h1>
    <hr></hr>
    <div className="container">
      <div className="item item1">
          <p className="title"> personal information</p>
      </div>
      <div className="item item2">
        <div className="item">
          <p className="title">summary</p>
          <hr></hr>
        </div>
        <div className="item">
          <p className="title">Key skills</p>
          <hr></hr>
        </div>
        <div className="item">
          <p className="title">Education</p>
          <hr></hr>
          <p>ajskhdkjasdhkasjd</p>
          <p>ajskhdkjasdhkasjdhaskjdhasjksadasdasdasdasdassadasdas</p>
          <p>ajskhdkjasdhkasjdhaskjdhasjksadasdasdasdasdassadasdas</p>
          <p>ajskhdkjasdhkasjdhaskjdhasjksadasdasdasdasdassadasdas</p>
          
        </div>
      </div>
      <div className="item item3">
        <div className="item">
          <p className="title">career history</p>
          <hr></hr>
          <p>
            Front-end Developer | Personal Business Project
            12/2020 – 03/2021
            Company Introduction Official Website (Has been launched)
            Front-end framework: Vue.js
            Server: Ali Cloud
            Website address: http://www.glanzservice.com/
            • Design and implement the website
            • Confirmation and feedback with clients
            • Make contracts
          </p>
          </div>
      </div>
    </div>
  </div>);
};

export default Resume;