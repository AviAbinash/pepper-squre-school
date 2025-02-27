import Image from "next/image";
import moment from "moment";
import { CiCalendar } from "react-icons/ci";

export default function Card({element}:any) {
    console.log(element,"element")
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="w-full h-48 object-cover"
          src={element?.cover?.url}
          alt="Card Image"
          width={100}
          height={100}
        />
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">{element?.title}</h2>
          <div className="flex items-center">
          <CiCalendar  style={{color:"#3481E8",width:"24px",height:"24px",marginTop:"5px",marginRight:"5px"}}/>
          <p className="text-gray-600 text-base mt-2">
          {moment(element?.eventDate).format("Do-MMM-YYYY")}
          </p>
          </div>
       
        </div>
      </div>
    );
  }
  