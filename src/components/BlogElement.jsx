  import { Link } from 'react-router-dom';

const BlogElement = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`}>
     <div className="max-h-96 w-76   bg-gray-50 p-3 pb-9 shadow-md rounded-xl ">
          <img className='max-h-52 w-full rounded-xl ' src={blog.mainImg} />
           
      <p className=" text-blue-500	bg-blue-50  p-2 w-24 my-4 rounded-lg ">{blog.category}</p>
          
       <h2 className='font-bold'>{blog.title}</h2>
       <div className='flex pt-4 pb-2'>

          <img className=' rounded w-8 h-8' src={blog.personImg} />
      <p className='text-gray-500 text-xs	mr-4 p-1 align-middle'>By {blog.name}   </p>
      <p className='text-gray-500 text-xs 	 p-1 align-middle'>   {blog.publishedAt}</p>
       </div>
     
      
     </div>
    
    </Link>
   
  );
};

export default BlogElement;
