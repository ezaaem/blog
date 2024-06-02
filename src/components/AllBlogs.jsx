   import BlogElement from './BlogElement';

const AllBlogs = ({ blogs }) => {
  
  return (
    <div className=' grid grid-cols-3 gap-4'>
      {blogs.map(blog => (
        <BlogElement key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default AllBlogs  ;
