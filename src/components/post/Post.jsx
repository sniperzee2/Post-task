import "./post.css";

const Post = (props) => {
  const { id, title, body } = props.data;
  return (

    <div className="card">
      <img
        src="https://images.pexels.com/photos/10320658/pexels-photo-10320658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Mountain"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {body}
        </p>
        <div className="footer-item">
           <strong>{id}</strong>
       </div>
      </div>
    </div>
  );
};
export default Post;
