exports.definition = {
    config: {
        "columns": {
        	"id":"INTEGER",
            "username": "TEXT",
            "email": "TEXT",
            "password":"TEXT",
            "gender":"TEXT",
            "birthdate":"TEXT",
        },
        "defaults": {
            "username": "-",
            "email": "-",
            "password": "-",
            "gender": "-",
            "birthdate": "-"
            
        },
        "adapter": {
            "type": "sql",
            "collection_name": "database",
            "idAttribute":"id"
        }
    }
}