const React = require('react')

module.exports = function Post(props) {
  let post = props.route.posts.find(element => element.slug == props.params.id)
  const image = post.image
  return <section className="post">
    <h1>{post.title}</h1>
    <img src={image.location} width={image.width} height={image.height} alt className={image.class} />
    <div className="post-blurb">
      <p>
        {post.text}
      </p>
    </div>
  </section>
}