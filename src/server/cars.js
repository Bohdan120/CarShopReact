import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/cars"
});

export const carsService = {
    get: function () {
        return api.get('all');
    },  
    create: function (model) {

        const formData = new FormData();

        for (const key in model) {
            formData.append(key, model[key]);
        }

        return api.post("", formData);
    },
    delete: function (id) {
        return api.delete(`${id}`);
    }
}

