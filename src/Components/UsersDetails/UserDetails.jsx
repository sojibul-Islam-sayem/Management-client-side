import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const loadUsers = useLoaderData()
    const [users, setUsers] = useState(loadUsers)

    return (
        <div>
            <div className="border w-full h-56 border-black">
                <h1 className="bg-green-700 text-center border-black border-1 p-2">User Management System</h1>
                <Link to={'/signup'}><h1>Sign up</h1></Link>
                <div className="overflow-x-auto w-3/4 mx-auto mt-7 ">
                    <table className="table bg-slate-900">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map((user, index) => (
                                <tr key={user._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <button className="btn btn-circle hover:bg-green-500 p-2">
                                            <img src="/public/8725908_file_edit_alt_icon.svg" alt="" />
                                        </button>
                                        <button className="btn btn-circle hover:bg-red-500 ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}





                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;