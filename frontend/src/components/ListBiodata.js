import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListBiodata = () => {
    const [biodatas, setBiodata] = useState([]);

    useEffect(() => {
        getAllBiodata();
    }, []);

    const getAllBiodata = async () => {
        const response = await axios.get("http://localhost:5001/biodata");
        setBiodata(response.data);
    };

    const deleteBiodata = async (id) => {
        await axios.delete(`http://localhost:5001/biodata/${id}`);
        getAllBiodata();
    };

    return (
        <div>
            <h1 className="title is-3 mt-4">Semua Biodata</h1>
            <Link to="/add" className="button is-medium is-link mb-4">
                Tambahkan Biodata Baru
            </Link>
            <table className="table is-striped is-hoverable is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Umur</th>
                        <th>Hobi</th>
                        <th>Pendidikan</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {biodatas.map((biodata, index) => (
                    <tr key={biodata.id}>
                        <td>{index + 1}</td>
                        <td>{biodata.username}</td>
                        <td>{biodata.nama}</td>
                        <td>{biodata.alamat}</td>
                        <td>{biodata.umur}</td>
                        <td>{biodata.hobi}</td>
                        <td>{biodata.pendidikan}</td>
                        <td>
                            <Link to={`/edit/${biodata.id}`} className="button is-medium is-info mr-3">
                                Edit
                            </Link>
                            <Link className="button is-medium is-danger mr-3" to={`#`}
                            onClick={() => {
                                if (window.confirm("Yakin menghapus data?")) {
                                    deleteBiodata(biodata.id);
                                }
                            }}>
                                Delete
                            </Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListBiodata;