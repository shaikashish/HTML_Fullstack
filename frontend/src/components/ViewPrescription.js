import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PrescriptionRecords from './PrescriptionRecords';
const ViewPrescription = ({data}) => {
  const location = useLocation();
//   console.log(location);
  const [search,setSearch]=useState('');
  const [newData,setNewData]=useState(data.Prescription);
  const l = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
//   console.log(l);    
console.log(newData);
    const onchange=(e)=>{
        setSearch(e.target.value);
    }
    //Checks whether the name matches or not
    const onsubmit=(e)=>{
        e.preventDefault();
        const res=data.Prescription.filter(item=>{
            return item.name.toLowerCase()===search.toLowerCase();
        });
        setNewData(res);
    }
    return (
        <div className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-100 text-grey-700">



        <div className="w-full px-6 py-6 mx-auto">


            <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white pb-6 border-1 border-black border-solid shadow-soft-xl rounded bg-clip-border">
                <div className="p-2 pb-0 mb-0 bg-white border-1 border-b-solid rounded border-black">
                    <h6 className="text-2xl uppercase">Prescriptions</h6>
                    <br/>
                    <form onSubmit={e=>onsubmit(e)}>
                        <input className="font-semibold leading-tight text-xs rounded border-black border-2 px-3 py-3 transition duration-300" placeholder="Enter Name" type='text' onChange={e=>onchange(e)} name='name'/>
                        <button className="ml-2 font-semibold leading-tight text-xs rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white" type='submit'>Search</button>
                    </form>
                 </div>
                <br/>
                <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-black text-grey-700">
                        <thead className="align-bottom">
                        <tr>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Serial No.</th>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Doctor Name</th>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Patient Name</th>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Medicines</th>
                            <th className="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-m border-b-solid tracking-none whitespace-nowrap text-grey-400 opacity-70">Instructions</th>
                            <th className="px-2 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-m tracking-none whitespace-nowrap text-grey-400 opacity-70"></th>
                        </tr>
                        </thead>
                        {/* <tbody>
                        {data.Prescription.map((item, i) => (
                        
                            //  <td>{item.name}</td> 
                            
                           
                            <tr>
                                <td className="p-0 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                    <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 leading-normal text-sm">{i+1}</h6>
                                    </div>
                                </div>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <h6 className="mb-0 leading-normal text-sm">{item.name}</h6>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <h6 className="mb-0 leading-normal text-sm">{item.medicine}</h6>
                                </td>
                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <h6 className="mb-0 leading-normal text-sm">{item.instructions}</h6>
                                </td>
                                <td className="p-2 bg-transparent border-b whitespace-nowrap shadow-transparent">
                                </td>
                            </tr>
                        
                      ))}
                        </tbody> */}
                        
                        <PrescriptionRecords data={newData}/>
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

export default ViewPrescription;