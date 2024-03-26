import { students } from "@/data/students";
import { Student } from "@/types/Student"

type Props = {
    students: Student[];
}

function nova_linha(){

}


export const StudentTable = ({}:Props) => {
    return(
        <div className="">
            <table className="w-full rounded-3xl">
                <thead>
                    <tr className="bg-gray-800">
                        <th>Name</th>
                        <th>Status</th>
                        <th>Grade 1</th>
                        <th>Grade 2</th>
                        <th>Final Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(i => (
                        <tr key={i.id} className="text-gray-800 bg-gray-400 border-b-2 border-gray-800">
                            <td className="p-3 flex items-center flex-row">
                                <img className="rounded-full h-20" src={i.avatar} alt={i.name}/>
                                <div className="mx-5">
                                    <h3 className="font-bold">{i.name}</h3>
                                    <h4>{i.email}</h4>
                                </div>
                            </td>
                            <td>    
                                {i.active && <div className="border-l-2 p-1 bg-green-600 rounded-full text-center border-b-2 border-green-900">Ative</div>}
                                {!i.active && <div className="border-l-2 p-1 bg-red-600 rounded-full text-center border-b-2 border-red-900">Inactive</div>}
                            </td>
                            <td className="p-3">
                                <h4>{i.grade1.toFixed(1)}</h4>
                            </td>
                            <td className="p-3">
                                <h4>{i.grade2.toFixed(1)}</h4>
                            </td>
                            <td className="p-3 font-bold">
                                <h4>{i.active?((i.grade1 + i.grade1)/2).toFixed(1):"--"}</h4>
                            </td>
                            
                        </tr>
                    ))}
                        

                </tbody>

            </table>
        </div>
    )
}