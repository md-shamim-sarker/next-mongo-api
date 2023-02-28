import UsersTable from "@/components/usersTable";
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import {useQuery} from "react-query";

const Home = () => {
  const router = useRouter();
  const query = useQuery(
    'users',
    () => axios("http://localhost:3000/api/users"),
    {refetchInterval: 1000}
  );

  if(query.isLoading) {
    return <h1>Loading....</h1>;
  }

  if(query.isError) {
    return <h1>Unable to fetch data.</h1>;
  }

  const users = query.data.data;

  const onDelete = (_id) => {
    return axios.delete(`http://localhost:3000/api/users/?userId=${_id}`);
  };

  return (
    <div>
      <h2 className="text-4xl text-center py-10 font-bold">React Query</h2>
      <div className="overflow-x-auto">
        <div className="w-1/2 mx-auto py-4">
          <Link href={'./userCreateForm'} className="btn btn-secondary btn-sm">Add New +</Link>
        </div>
        <table className="table table-zebra w-1/2 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <UsersTable
                key={user._id}
                user={user}
                index={index}
                router={router}
                onDelete={onDelete}
              ></UsersTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;