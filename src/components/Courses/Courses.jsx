
import './Courses.css'
import CourseCard from '../CourseCard/CourseCard';
import { useState,useEffect } from 'react';
import axios from 'axios';
import girl from '../../assets/about/girl.png'

//لا تنسي كل رببط بدو يوز ايفككت

const Courses = () => {
const [CourseCardData,setCourseCardData] = useState([
        //   {
        //     id:1,
        //     photo: girl,
        //     price:'1000',
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

        // },
        // {
        //     id:6,
        //     subject: "maths",
        //     teacher: "samer",
        //     details: "Lorem ipsum dolor sit amet consectetur.",

        // },
        // {   
        //     id:7,
        //     subject: "maths",
        //     teacher: "samer",
        //     details: "Lorem ipsum dolor sit amet consectetur.",

        // },
        // {
        //     id:8,
        //     subject: "maths",
        //     teacher: "samer",
        //     details: "Lorem ipsum dolor sit amet consectetur.",

        // },
        // { 
        //     id:9,
        //     subject: "maths",
        //     teacher: "samer",
        //     details: "Lorem ipsum dolor sit amet consectetur.",

        // },
        // {
        //     id:10,
        //     subject: "maths",
        //     teacher: "samer",
        //     details: "Lorem ipsum dolor sit amet consectetur.",
     
        // },
        // {
        //     id:11,
        //     subject: "maths",
        //     teacher: "samer",
        //     details: "Lorem ipsum dolor sit amet consectetur.",

        // },
])

    useEffect(()=>{
//هون لازم اعمل غيت لبيانات الكورس
        axios.get("https://b4ab-185-107-56-71.ngrok-free.app/api/course/index").then((res)=>{
         setCourseCardData(res.data)
        })

    })

    function Delete(id){
        axios.delete('url${id}').then((res=>{
            window.location.reload()
        }))
}
    




    return (
        <>
                <div className=" d-flex justify-content-center align-items-center" >
                    <div className='explore '>Explore Courses</div>
                </div> 
                <div style={{ height: '65vh', overflow: 'scroll' }} className=' mt-3 d-flex flex-wrap justify-content-center' >
                    
                    {
                        CourseCardData.map((e, i) => {
                            return (
                                
                                    <CourseCard handleDelete={()=>{
                                        Delete(e.id)
                                    }}
                                     key={i} photo={e.photo} price={e.price} subject={e.name}  details={e.description} />
                                
                            )
                        })
                    }

                </div>
            


        </>
    );
}

export default Courses;