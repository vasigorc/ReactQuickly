const React = require('react')

module.exports = function Product(props) {
  let post = props.route.posts.find(element => element.slug == props.param.id)
  return <section className="post">
    <h1>{post.title}</h1>
    <img src={props.image} width="680" height="365" alt className="post-photo-full" />
    <div className="post-blurb">
      <p>
        {props.text}
      </p>
    </div>
  </section>
}