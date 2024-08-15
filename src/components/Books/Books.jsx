import '../Courses/Courses.css';



const Books = ({bookname,author,description,}) => {
    const handleClick = () => {
        // setViewCourseBtn('blaa');
        alert('button clicked')
    };
    
    return (  <>
    
    
    
    <div className='cards row mx-0  mb-2'
              >
            <p className='subject fs-5 mt-2'>{bookname}</p>
            <p className='teacher fs-6'>{author}</p>
            <p className='fs-6'>{description}</p>
            
            <div className='btn-container d-flex justify-content-center mb-2 '>
                <button 
                    className='btn-view' 
                    onClick={handleClick}
                     >
                    View Book
                </button>
                
            </div>
            
        </div>
    
    
    
    </>);
}
 
export default Books;