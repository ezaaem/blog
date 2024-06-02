 import { useParams } from 'react-router-dom';
import { dummyData } from '../../public/dummyData';
 
const Content = () => { 
    const { id } = useParams();

  const blog = dummyData.find(b => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      
      <p className=" text-blue-500	bg-blue-50  p-2 w-28 my-4 rounded-lg ">{blog.category}</p>
      <h2 className='font-bold'>{blog.title}</h2>
      <div className='flex py-4 '>
      <img className=' rounded w-8 h-8' src={blog.personImg} />
      <p className='text-gray-500 text-xs	mr-4 p-2 align-middle'>By {blog.name}   </p>
      <p className='text-gray-500 text-xs 	 p-2 align-middle'>   {blog.publishedAt}</p>
       </div>
      <img src={blog.mainImg}  />
      
      <img src={blog.BlogImage} alt="Blog Visual 1" />
      <img src={blog.BlogImage2} alt="Blog Visual 2" />
      <p>{blog.para1}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Content;
