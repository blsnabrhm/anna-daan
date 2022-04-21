import { Link } from "react-router-dom";
import "./post.css";

export default function post() {
    return (
        <>
        <div className="post">
            <img className="postImg" src='https://st3.depositphotos.com/34206794/36560/i/450/depositphotos_365608300-stock-photo-food-paper-bag-food-donation.jpg' alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle" onClick={() => window.location.reload()}>
                    <Link className="link" to={'/post/:postId'}>Lorem ipsum dolor sit amet.</Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Amet illo consequatur commodi ab eveniet temporibus modi illum voluptatum. Non, iste?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis debitis iure incidunt aliquam. 
                Repudiandae, asperiores. Ducimus placeat eos quasi delectus explicabo, 
                repellendus possimus reprehenderit, voluptatum a, consectetur dolorem odio omnis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo architecto minima ad tempora totam. 
            </p>
        </div>
        </>
    );
}
