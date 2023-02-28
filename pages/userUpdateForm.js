import axios from 'axios';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {useMutation} from 'react-query';

const userCreateForm = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        name: router.query.name,
        email: router.query.email,
        password: router.query.password
    });

    const mutation = useMutation(() => {
        return axios({
            method: "PUT",
            url: `http://localhost:3000/api/users/?userId=${router.query._id}`,
            data: user
        });
    }, {
        onSuccess: () => {
            router.push("/");
        }
    });

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                value={user.name}
                                onChange={(e) => setUser({...user, name: e.target.value})}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={() => mutation.mutate()} className="btn btn-primary">Update User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default userCreateForm;