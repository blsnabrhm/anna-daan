import './singlePost.css'

export default function SinglePost() {
    return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src="https://csrmandate.org/wp-content/uploads/2018/04/Bangalore-food-bank1.jpg" alt="" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Yash</b> </span>
                <span className='singleDate'>1 hour ago </span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non rem dolorem beatae iusto assumenda suscipit quia quas. Dolore provident qui consectetur? Soluta ipsa tempore veniam commodi quo voluptatem libero repellendus earum eaque quibusdam deleniti minima, itaque adipisci, dolor possimus ipsum? Deleniti, sapiente consequatur minus dolor libero quam voluptatum culpa amet impedit provident necessitatibus, totam inventore soluta eius cumque explicabo dignissimos aliquid ratione consectetur harum obcaecati ea error ut! Sed, facilis aut enim suscipit debitis praesentium alias, ex, ratione repudiandae excepturi velit eos? Nobis vel aliquid velit corporis quo! Quibusdam, ea tenetur. Beatae laborum placeat nihil voluptates accusantium, eos, praesentium sint eius labore reprehenderit laudantium unde autem quia molestiae ipsa quas explicabo illo aliquam? Itaque expedita provident magnam officia illo similique, sit natus magni reiciendis ipsa ratione, incidunt laborum voluptas rerum dolorum blanditiis, vel odio cum non. Ipsum, cum iure architecto quis quaerat obcaecati est magni ducimus, assumenda, fugit cupiditate!</p>
        </div>
    </div>
    )
}
