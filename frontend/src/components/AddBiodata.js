import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddBiodata = () => {
    const [username, setUsername] = useState("");
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [umur, setUmur] = useState("");
    const [hobi, setHobi] = useState("");
    const [pendidikan, setPendidikan] = useState("");
    const navigate = useNavigate();

    const saveBiodata = async (event) => {
        event.preventDefault();
        const state = {
            username: username,
            nama: nama,
            alamat: alamat,
            umur: umur,
            hobi: hobi,
            pendidikan: pendidikan
        }
        await axios.post("http://localhost:5001/biodata" , {...state});
        navigate("/");
    };



    return (
        <div>
            <h1 className="title is-3 mt-4">Formulir Tambah Biodata</h1>
            <form onSubmit={saveBiodata}>
                <div className="field">
                    <label className="label">Username</label>
                    <input required type="text" className="input is-dark" placeholder="Tuliskan username anda"
                    value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Nama</label>
                    <input required type="text" className="input is-dark" placeholder="Tuliskan nama anda"
                    value={nama} onChange={(event) => setNama(event.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Alamat</label>
                    <input required type="text" className="input is-dark" placeholder="Tuliskan alamat anda"
                    value={alamat} onChange={(event) => setAlamat(event.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Umur</label>
                    <input required type="text" className="input is-dark" placeholder="Tuliskan umur anda"
                    value={umur} onChange={(event) => setUmur(event.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Hobi</label>
                    <input required type="text" className="input is-dark" placeholder="Tuliskan hobi anda"
                    value={hobi} onChange={(event) => setHobi(event.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Pendidikan</label>
                    <input required type="text" className="input is-dark" placeholder="Tuliskan pendidikan anda"
                    value={pendidikan} onChange={(event) => setPendidikan(event.target.value)}/>
                </div>
                <div className="field">
                    <button className="button is-large is-link mr-3">Simpan</button>
                    <Link to="/" className="button is-large is-info mr-3">
                        Kembali
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AddBiodata;