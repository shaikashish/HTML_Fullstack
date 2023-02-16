import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ViewRole from './ViewRole'

const ManageRoomBooking = () => {
  const location = useLocation();
  // console.log(location);
  const l = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
  // console.log(l);  
  const [booking,setbooking]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/api/bookedRoom/`,{headers:{'Content-Type':'application/json'}}).then((data) => data.json() ).then((val) => {
      setbooking(val);
    })
  },[])

  const deleteBooking=(id)=>{
    // console.log('qweqwe');
    fetch(`http://localhost:5000/api/bookedRoom/${id}`, {
        method: "DELETE"
    }).then((data) => data.json() ).then((val) => {
        console.log(val);
    })
  }
  // console.log(booking);
  
  // const data ={
    
  //       "Room" :[
  //         {
  //           "id":"1",
  //           "patient":"John",
  //           "room":"21",
  //           "from":"22-09-2022",
  //           "to":"23-09-2022",
  //           "price":"450",
  //           "paid":"True"
  //         },
  //         {
  //           "id":"2",
  //           "patient":"Jame",
  //           "room":"20",
  //           "from":"22-09-2022",
  //           "to":"23-09-2022",
  //           "price":"500",
  //           "paid":"True"
  //         },

         
  //       ]
  //     }
    return (
        <div className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-100 text-grey-700">



        <div className="w-full px-6 py-6 mx-auto">


            <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white pb-6 border-1 border-black border-solid shadow-soft-xl rounded bg-clip-border">
                <div className="p-2 pb-0 mb-0 bg-white border-1 border-b-solid rounded border-black">
                    <h6 className="text-2xl uppercase">Room Booking</h6>
                    <br/>
                    <Link to={"/"+l+"/AddRoom"}  className="font-semibold leading-tight text-xs rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">ADD</Link>
                </div>
                <br/>
                <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-black text-grey-700">
                        <thead className="align-bottom">
                        <tr>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">ID</th>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Patient</th>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Room</th>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">From</th>
                            {/* <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">To</th> */}
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Price</th>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Paid</th>
                            <th className="px-2 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-m tracking-none whitespace-nowrap text-grey-400 opacity-70"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {booking.map((item, i) => (
                        
                            //  <td>{item.name}</td> 
                            
                           
                            <tr>
                                <td className="p-0 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                    <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 leading-normal text-sm">{item._id}</h6>
                                    </div>
                                </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                {/* <h6 className="mb-0 leading-normal text-sm">{item.patient}</h6> */}
                                <ViewRole id={item.patient}/>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                {/* <h6 className="mb-0 leading-normal text-sm">{item.room}</h6> */}
                                <ViewRole id={item.room}/>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <h6 className="mb-0 leading-normal text-sm">{item.from.toLocaleString()}</h6>
                                </td>
                                {/* <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <h6 className="mb-0 leading-normal text-sm">{item.to}</h6>
                                </td> */}
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <h6 className="mb-0 leading-normal text-sm">{item.price}</h6>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <h6 className="mb-0 leading-normal text-sm">{item.paid.toString()}</h6>
                                </td>
                                <td className="p-2 bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <Link to={"/"+l+"/EditRoom"} state={{ id:item._id}}className="mr-2 font-semibold leading-tight text-xs rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white"> Edit </Link>
                                <button href="" className="font-semibold leading-tight text-xs rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white" onClick={()=>deleteBooking(item._id)}> Delete </button>
                                </td>
                            </tr>
                        
                      ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        

    </div>
  )
}

export default ManageRoomBooking;