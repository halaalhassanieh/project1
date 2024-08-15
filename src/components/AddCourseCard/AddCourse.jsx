import '../Courses/Courses.css';
import { useEffect, useState } from 'react';
import AddCourseCard from './AddCourseCard';
import axios from 'axios';




const AddCourse = () => {
        const [AddCourseData,setAddCourseData] =useState([
            // {
            //     id:1,
            //     subject: "maths",
            //     teacher: "samer",
            //     details: "Lorem ipsum dolor sit amet consectetur.",
                
            // },
            // {
            //     id:2,
            //     subject: "maths",
            //     teacher: "samer",
            //     details: "Lorem ipsum dolor sit amet consectetur.",

            // },
            // {
            //     id:3,
            //     subject: "maths",
            //     teacher: "samer",
            //     details: "Lorem ipsum dolor sit amet consectetur.",

            // },
            // {
            //     id:4,
            //     subject: "maths",
            //     teacher: "samer",
            //     details: "Lorem ipsum dolor sit amet consectetur.",

            // },
            // {
            //     id:5,
            //     subject: "maths",
            //     teacher: "samer",
            //     details: "Lorem ipsum dolor sit amet consectetur.",

            // }
            // ,
            // {
            //     id:6,
            //     subject: "maths",
            //     teacher: "samer",
            //     details: "Lorem ipsum dolor sit amet consectetur.",

            // }
            // ,
            // {
            //     id:7,
            //     subject: "maths",
            //     teacher: "samer",
            //     details: "Lorem ipsum dolor sit amet consectetur.",

            // }
            
        ])

        useEffect(()=>{
            //هون عم جيب داتا الكورسات اللي بدها موافقة 
            axios.get('url').then((res)=>{
                setAddCourseData(res.data)
            })
        })
        

        const Add = (id) => {
            // ييعمل بوست لداتا ال كورسات اللي بدي ضيفها لرابط الكوسات الاساسي يعني المتغيرات اللي ببعثن هني نفسن داتا دوت كذا
            axios.post('url',{
                //احتمال بدون ما حط بيانات بس اعطي الرابط iD يقوم يرسل 
                id:'',
                subject:'',
                teacher:'',
                details:'',
            }).then((res)=>{
            Delete(id)

                })
            }
            
        
        function Delete(id){
            //هون دالة لحذف كورس
                axios.delete('url${id}').then((res=>{
                    window.location.reload()
                }))
        }
    return ( 
    
            <>
                        <div className=" d-flex justify-content-center align-items-center">
                        
                            <div className='explore '> Waiting to Approve</div>
                        </div> 
                        <div style={{ height: '65vh', overflow: 'scroll' }} className=' mt-3 d-flex flex-wrap justify-content-center' >
{/*                             
                            {
                                AddCourseData.map((e, i) => {
                                    return (
                                        
                                            <AddCourseCard handleDelete={()=>{
                                                Delete(e.id)
                                            } 
                                            } handleAdd={()=>{
                                            Add(e.id)
                                            }} 
                                            key={i} subject={e.subject} teacher={e.teacher} details={e.details}  />
                                        
                                    )
                                })
                            } */}

                        </div>
            </>
     );
}
 
export default AddCourse;