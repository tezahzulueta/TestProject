exports.definition = {
    config: {
        columns: {
            id: "INTEGER",
            username: "TEXT",
            email: "TEXT",
            password: "TEXT",
            gender: "TEXT",
            birthdate: "TEXT"
        },
        defaults: {
            username: "-",
            email: "-",
            password: "-",
            gender: "-",
            birthdate: "-"
        },
        adapter: {
            type: "sql",
            collection_name: "database",
            idAttribute: "id"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("database", exports.definition, []);

collection = Alloy.C("database", exports.definition, model);

exports.Model = model;

exports.Collection = collection;