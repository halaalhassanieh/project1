import axios from "axios";

//لا تنسي كل رببط بدو يوز ايفككت
const AddCourseCard = ({ photo,price,subject, teacher, details,handleDelete,handleAdd }) => {
    const handleClick = () => {
          // هون بستدعي كومبونت عرض الكورس و جوات الكومبونت بربط بيانات الكورس ب غيت
      
        alert('button clicked')
    };

    
    

    return (
    <>
    
    <div className='cards row mx-0  mb-2'>
                
                <div className=' col-3'>
                <img className='course-photo mt-4 mx-2' src={photo} alt="" />
                <h5 className='mt-5 mx-2'>Price:{price}</h5>
                </div>
            <div className="col-7 mx-3">
            <p className='subject fs-5 mt-2'>{subject}</p>
            <p className='teacher fs-6'>{teacher}</p>
            <p className='fs-6'>{details}</p>
            
            <div className='btn-container d-flex justify-content-center mb-2 '>
                <button 
                    className='btn-view' 
                    onClick={handleClick}
                > 
                    View Course
                </button>
                <button 
                    className='btn-view' 
                    onClick={handleAdd}
                > 
                    Approve
                </button>
                <button 
                    className='btn-view btn-danger' 
                    onClick={handleDelete}
                > 
                    Reject
                </button>
            </div>
            
            </div>
        </div>
    </>
    );
    
}

export default AddCourseCard;











