import BiodataModel from "../models/BiodataModel.js";

// mendapatkan semua biodata
export const getAllBiodata = async (req, res) => {
    try {
        const biodata = await BiodataModel.findAll();
        res.json(biodata);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Mendapatkan biodata dengan id
export const getBiodataById = async (req, res) => {
    try {
        const biodata = await BiodataModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(biodata[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Membuat biodata baru
export const createBiodata = async (req, res) => {
    try {
        await BiodataModel.create(req.body);
        res.json({ message: "Biodata berhasil dibuat!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Mengubah biodata dengan id
export const updateBiodata = async (req, res) => {
    try {
        await BiodataModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ message: "Biodata berhasil diubah!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Menghapus biodata dengan id
export const deleteBiodata = async (req, res) => {
    try {
        await BiodataModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ message: "Biodata berhasil dihapus!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};