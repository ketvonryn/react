import { StudentTable } from "@/components/studentTable";
import { students } from "@/data/students";

function Page() {
  return (
    <div className="mx-auto">
      <h1 className="text-5xl text-center font-bold p-10">Lista de estudantes</h1>
      <StudentTable students = {students}/>
    </div>
  );

}
export default Page;