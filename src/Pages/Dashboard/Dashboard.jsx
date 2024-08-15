import React, { useEffect } from 'react';
import "./Dashboard.css";
import Navbar from '../../components/NavBar/NavBar';
import Courses from '../../components/Courses/Courses';
import { useState } from "react";
import AddCourse from '../../components/AddCourseCard/AddCourse';
import Books from '../../components/Books/Books'
import axios from 'axios';



function Dashboard(props) {

    const [BooksData,setBooksData] =useState([
        // {
        //     id:1,
        //     bookname: "maths",
        //     author: "samer",
        //     description: "Lorem ipsum dolor sit amet consectetur.",
            
        // },
        // {
        //     id:2,
        //     bookname: "maths",
        //     author: "samer",
        //     description: "Lorem ipsum dolor sit amet consectetur.",

        // },
        // {
        //     id:3,
        //     bookname: "maths",
        //     author: "samer",
        //     description: "Lorem ipsum dolor sit amet consectetur.",

        // },
        // {
        //     id:4,
        //     bookname: "maths",
        //     author: "samer",
        //     description: "Lorem ipsum dolor sit amet consectetur.",

        // }

    ]
)
     useEffect(()=>{
        axios.get('url').then((res)=>{
            setBooksData(res.data);
        })
     })    

    return (
        <>
        <Navbar/>
        
        <div className="row mx-0"> 
            <div className="col-4">
             <Courses/>
            </div>
            <div className="col-4">
            <AddCourse/>
            </div>

            <div className="col-4"  >
                
            <div className=" d-flex justify-content-center align-items-center"
                >
                    <div className='explore '> Books </div>
                </div> 
            <div className='mt-3' style={{ height: '65vh', overflow: 'scroll' }}>
                {/* {
                        BooksData.map((e, i) => {
                            return (
                                
                                    <Books key={i} bookname={e.bookname} author={e.author} description={e.description}  />
                                
                            )
                        })
                    } */}
                    </div>
            </div>
            
             </div>

        </>

    );
}

export default Dashboard;
